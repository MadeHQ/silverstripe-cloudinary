<?php

namespace MadeHQ\Cloudinary\Tasks;

use MadeHQ\Cloudinary\Utils\Helper;
use Psr\SimpleCache\CacheInterface;
use ReflectionClass;
use SilverStripe\Core\ClassInfo;
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
    protected $description = 'This step will give you a list of classes and fields that will need to be updated in PHP (gives the root file of the class for reference but the fields may be in an extension or similar)';

    protected static $cache;

    protected static $cloudinaryClasses = [
        'CloudinaryFile',
        'CloudinaryAudio',
        'CloudinaryImage',
        'CloudinaryVideo',
    ];

    protected static $sql = [
        'CloudinaryFile' => <<<SQL
            SELECT a.*
            FROM CloudinaryFile a
            WHERE a.ID = %d
    SQL,
        'CloudinaryAudio' => <<<SQL
            SELECT a.*, b.*
            FROM CloudinaryAudio a
            INNER JOIN CloudinaryFile b ON a.ID = b.ID
            WHERE a.ID = %d
    SQL,
        'CloudinaryImage' => <<<SQL
            SELECT a.*, b.*
            FROM CloudinaryImage a
            INNER JOIN CloudinaryFile b ON a.ID = b.ID
            WHERE a.ID = %d
    SQL,
        'CloudinaryVideo' => <<<SQL
            SELECT a.*, b.*
            FROM CloudinaryVideo a
            INNER JOIN CloudinaryFile b ON a.ID = b.ID
            WHERE a.ID = %d
    SQL,
    ];

    public function run($request)
    {
        ini_set('max_execution_time', 3600);

        $this->output('=== Task Started ===');

        static::$cache = Injector::inst()->get(CacheInterface::class . '.cloudinary');

        foreach (ClassInfo::subclassesFor(DataObject::class, false) as $className) {
            if ($className !== 'Page') {
                continue;
            }

            $singleton = singleton($className);

            $baseTable = DataObject::getSchema()->tableName($className);

            $tables = [
                $baseTable,
            ];

            $fields = [];

            if (!$singleton->hasExtension(Versioned::class)) {
                array_push($tables, $baseTable . '_Live');
            }

            foreach ($singleton->hasOne() as $field=>$relatedClass) {
                foreach (static::$cloudinaryClasses as $cloudinaryClass) {
                    if ($this->getIsClassOrSubclassOf($relatedClass, $cloudinaryClass)) {
                        array_push($fields, [
                            'type' => $cloudinaryClass,
                            'source' => $field . 'ID',
                            'target' => $field,
                        ]);
                    }
                }
            }

            foreach ($singleton->hasMany() as $field=>$relatedClass) {
                foreach (static::$cloudinaryClasses as $cloudinaryClass) {
                    if ($this->getIsClassOrSubclassOf($relatedClass, $cloudinaryClass)) {
                        array_push($fields, [
                            'type' => $cloudinaryClass,
                            'source' => $field . 'ID',
                            'target' => $field,
                        ]);
                    }
                }
            }

            foreach ($singleton->manyMany() as $field=>$relatedClass) {
                foreach (static::$cloudinaryClasses as $cloudinaryClass) {
                    if ($this->getIsClassOrSubclassOf($relatedClass, $cloudinaryClass)) {
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

                        $data = DB::query(sprintf(static::$sql[$field['type']], $record[$field['source']]))->first();

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

    /**
     * @param string $class
     * @param string $baseClass
     * @return boolean
     */
    protected function getIsClassOrSubclassOf($class, $baseClass)
    {
        return $class === $baseClass || is_subclass_of($class, $baseClass);
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
