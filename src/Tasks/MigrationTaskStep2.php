<?php

namespace MadeHQ\Cloudinary\Tasks;

use Cloudinary\Api\Exception\NotFound;
use Cloudinary\Cloudinary;
use SilverStripe\Control\Director;
use SilverStripe\Core\ClassInfo;
use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\DB;
use SilverStripe\Versioned\Versioned;

class MigrationTaskStep2 extends BuildTask
{
    /**
     * @inheritdoc
     */
    protected $title = 'Step 2 of Migrating from `Files` integration to using widget';

    /**
     * @inheritdoc
     */
    protected $description = 'This step will get all the data from the old related FileLinks and set in the new fields';

    /**
     * @var Cloudinary
     */
    private $cloudinary;

    private static $sql_template = <<<SQL
SELECT ft.*, lt.Focus, lt.Caption, lt.AltText FROM "{LinkTable}" As lt
INNER JOIN "{FileTable}" As ft ON "ft"."ID" = "lt"."FileID"
WHERE "lt"."ID" = (SELECT "{FieldName}ID" FROM "{TableName}" WHERE "ID" = '{ID}')
SQL;

    private $assetCache = [];

    private $requestCount = 0;

    public function __construct(Cloudinary $cloudinary)
    {
        $this->cloudinary = $cloudinary;
    }

    public function run($request)
    {
        if (!Director::is_cli()) {
            echo '<pre>';
        }

        $dataObjectClasses = ClassInfo::subclassesFor(DataObject::class, false);

        $schema = DataObject::getSchema();

        $usableFields = [
            'bytes',
            'format',
            'asset_id',
            'public_id',
            'resource_type',
            'type',
            'version',
            'width',
            'height',
        ];

        /**
         *
         */
        foreach($dataObjectClasses As $className) {
            DataObject::get($className)->each(function (DataObject $do) use ($schema, $usableFields) {
                $stages = [
                    Versioned::DRAFT => '',
                ];
                if ($do->has_extension(Versioned::class)) {
                    $stages[Versioned::LIVE] = '_Live';
                }
                foreach($stages As $stage => $suffix) {
                    Versioned::set_stage($stage);

                    foreach($schema->databaseFields($do->ClassName) As $fieldName => $fieldType) {
                        if ($fieldType !== 'CloudinaryImage') {
                            continue;
                        }
                        $tableName = $schema->tableForField($do->ClassName, $fieldName) . $suffix;

                        $data = DB::query(strtr(
                            static::config()->get('sql_template'),
                            [
                                '{LinkTable}' => 'CloudinaryImageLink',
                                '{FileTable}' => 'File' . $suffix,
                                '{FieldName}' => $fieldName,
                                '{TableName}' => $tableName,
                                '{ID}' => $do->ID,
                            ]
                        ))->first();
                        if (!$data || !array_key_exists('FilePublicID', $data) || !$data['FilePublicID']) {
                            continue;
                        }
                        $resourceData = $this->getAsset($data['FilePublicID']);
                        if (!$resourceData) {
                            continue;
                        }

                        $newData = [
                            'transformations' => null,
                            'name' => $data['Title'],
                            'title' => $data['Title'],
                            'gravity' => $data['Focus'],
                            'actual_type' => $resourceData['resource_type'],
                        ];
                        if (array_key_exists('colors', $resourceData)) {
                            $newData['top_colours'] = $resourceData['colors'];
                        }

                        foreach($usableFields As $field) {
                            if (!array_key_exists($field, $resourceData)) {
                                var_dump($data, $resourceData);
                                die;
                            }
                            $newData[$field] = $resourceData[$field];
                        }

                        $sql = sprintf(
                            'UPDATE "%s" SET "%s" = \'%s\' WHERE "ID" = %d',
                            $tableName,
                            $fieldName,
                            DB::get_conn()->escapeString(json_encode($newData)),
                            $do->ID
                        );
var_dump($sql);
                        DB::query($sql);
                    }
                }
            });
        }

        var_dump('COMPLETE!!');
    }

    private function getAsset($publicId)
    {
        if (!array_key_exists($publicId, $this->assetCache)) {
            $api = $this->cloudinary->adminApi();

            try {
                var_dump(sprintf('Requesting [%d]: %s', ++$this->requestCount, $publicId));
                $resourceData = $api->asset(
                    $publicId,
                    ['colors' => true]
                );
                $resourceData = $api->asset($publicId);
                if($resourceData->rateLimitRemaining < 10) {
                    var_dump(sprintf('WARNING: Only %d requests remaining this hour', $resourceData->rateLimitRemaining));
                }
                $resourceData = (array)$resourceData;
            } catch (NotFound $e) {
                $searchApi = $this->cloudinary->searchApi();
                $searchResultData = (array)$searchApi
                    ->expression(sprintf('%s*', $publicId))
                    ->execute();

                if ($searchResultData['total_count']) {
                    $resourceData = $searchResultData['resources'][0];
                } else {
                    var_dump(sprintf('Unable to find: %s', $publicId));
                    $resourceData = false;
                }
            }

            $this->assetCache[$publicId] = $resourceData;
        }

        return $this->assetCache[$publicId];
    }
}
