<?php

namespace MadeHQ\Cloudinary\Tasks;

use MadeHQ\Cloudinary\FieldType\DBFileResource;
use MadeHQ\Cloudinary\FieldType\DBImageResource;
use MadeHQ\Cloudinary\FieldType\DBMediaResource;
use MadeHQ\Cloudinary\Utils\Helper;
use Psr\SimpleCache\CacheInterface;
use ReflectionClass;
use SilverStripe\Core\ClassInfo;
use SilverStripe\Core\Config\Config;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\DB;

class MigrationTaskVersion1 extends BuildTask
{
    /**
     * @inheritdoc
     */
    protected $title = 'Cloudinary asset migration (module version 1)';

    /**
     * @inheritdoc
     */
    protected $description = 'Run this task after you have moved all the assets from has_one to db - the name of the fields should be kept the same';

    protected static $cache;

    protected static $cloudinaryClasses = [
        DBImageResource::class,
        DBMediaResource::class,
        DBFileResource::class,
    ];

    public function run($request)
    {
        ini_set('max_execution_time', 3600);

        $this->output('=== Task Started ===');

        static::$cache = Injector::inst()->get(CacheInterface::class . '.cloudinary');

        foreach (ClassInfo::subclassesFor(DataObject::class, false) as $className) {
            $singleton = singleton($className);

            $baseTable = DataObject::getSchema()->tableName($className);

            $tables = [
                $baseTable,
            ];

            $fields = [];

            if (!$singleton->hasExtension(Versioned::class)) {
                array_push($tables, $baseTable . '_Live');
            }

            foreach ((array) Config::inst()->get($className, 'db', Config::UNINHERITED) as $field=>$type) {
                foreach (static::$cloudinaryClasses as $cloudinaryClass) {
                    if (Injector::inst()->get($type) instanceof $cloudinaryClass) {
                        array_push($fields, [
                            'type' => $cloudinaryClass,
                            'source' => $field . 'ID',
                            'target' => $field,
                        ]);
                    }
                }
            }

            if (count($fields) === 0) {
                continue;
            }

            $ref = new ReflectionClass($className);

            $this->output($ref->getFileName());

            foreach ($tables as $table) {
                $this->output('=> Processing ' . $table . ' table');

                foreach ($fields as $field) {
                    $this->output('==> Moving ' . $field['source'] . ' assets');

                    $records = DB::query(<<<SQL
                        SELECT ID, {$field['source']}
                        FROM {$table}
                        WHERE {$field['source']} != 0
                            AND {$field['target']} IS NULL
SQL);

                    foreach ($records as $record) {
                        $this->output('===> Moving record ' . $record['ID'] . ' asset ' . $record[$field['source']]);

                        $data = DB::query(<<<SQL
                            SELECT a.*, b.*
                            FROM CloudinaryFile a
                            LEFT OUTER JOIN CloudinaryImage b ON a.ID = b.ID
                            WHERE a.ID = {$record[$field['source']]}
SQL)->first();

                        if (!$data) {
                            $this->output('====> Skipping: no data found');
                            continue;
                        }

                        $resource = $this->getResource($data['URL']);

                        if (!$resource) {
                            $this->output('====> Skipping no public id or resource type or data');
                            continue;
                        }

                        if (($caption = $data['Caption']) && $caption = trim($caption)) {
                            $resource['title'] = $caption;
                        }

                        if (($credit = $data['Credit']) && $credit = trim($credit)) {
                            $resource['credit'] = $credit;
                        }

                        if (($gravity = $data['Gravity']) && ($gravity = trim($gravity)) && $gravity !== 'auto') {
                            $resource['gravity'] = $gravity;
                        }

                        $resource = json_encode($resource);

                        DB::prepared_query(<<<SQL
                            UPDATE {$table}
                            SET {$field['target']} = ?
                            WHERE ID = {$record['ID']}
SQL, [$resource]);

                        $this->output('====> Done');
                    }
                }
            }
        }

        $this->output('=== Task Ended ===');
    }

    protected function getResource($url)
    {
        $publicId = $this->getPublicID($url);
        $resourceType = $this->getResourceType($url);

        if (!$publicId || !$resourceType) {
            return false;
        }

        $key = md5($publicId);

        if ($cached = static::$cache->get($key)) {
            return $cached;
        }

        try {
            $data = Helper::get_processed_resource($publicId, $resourceType);
        } catch (\Exception $e) {
            $data = null;
        }

        static::$cache->set($key, $data);

        return $data;
    }

    protected function getPublicID($url)
    {
		if (preg_match('/^.+?\/v\d+\/(.+?)\.(?=[^.]*$)/', $url, $matches)) {
            return $matches[1];
        }

        return null;
    }

    protected function getResourceType($url)
	{
        if (preg_match('/https?:\/\/[^\/]*\/[^\/]*\/([^\/]*)\/.+/', $url, $matches)) {
            return $matches[1];
        }

        return null;
	}

    /**
     * @param mixed ...$arguments
     * @param boolean $last
     */
    protected static function output(...$arguments)
    {
        $eol = '<br>';

        if (in_array(PHP_SAPI, ['cli', 'cgi', 'cgi-fcgi'])) {
            $eol = PHP_EOL;
        }

        echo sprintf(...$arguments) . $eol;
    }
}
