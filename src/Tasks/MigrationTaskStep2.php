<?php

namespace MadeHQ\Cloudinary\Tasks;

use Cloudinary\Api\Exception\NotFound;
use Cloudinary\Cloudinary;
use SilverStripe\Core\ClassInfo;
use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\DB;

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

    public function run($request)
    {
        echo '<pre>';
        $dataObjectClasses = ClassInfo::subclassesFor(DataObject::class, false);

        $schema = DataObject::getSchema();
        $cloudinary = new Cloudinary();
        $api = $cloudinary->adminApi();
        $searchApi = $cloudinary->searchApi();

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
        $sqlTemplate = <<<SQL
SELECT ft.*, lt.Focus, lt.Caption, lt.AltText FROM "{LinkTable}" As lt
INNER JOIN "{FileTable}" As ft ON "ft"."ID" = "lt"."FileID"
WHERE "lt"."ID" = (SELECT "{FieldName}ID" FROM "{TableName}" WHERE "ID" = '{ID}')
SQL;

        /**
         *
         */
        $count = 0;
        foreach($dataObjectClasses As $className) {
            DataObject::get($className)->each(function (DataObject $do) use (&$count, $schema, $sqlTemplate, $api, $searchApi, $usableFields) {
                foreach($schema->databaseFields($do->ClassName, false) As $fieldName => $fieldType) {
                    if ($fieldType === 'CloudinaryImage') {
                        $tableName = $schema->tableName($do->ClassName);

                        $data = DB::query(strtr(
                            $sqlTemplate,
                            [
                                '{LinkTable}' => 'CloudinaryImageLink',
                                '{FileTable}' => 'File',
                                '{FieldName}' => $fieldName,
                                '{TableName}' => $tableName,
                                '{ID}' => $do->ID,
                            ]
                        ))->first();
                        if (!$data) {
                            continue;
                        }
                        try {
                            var_dump(sprintf('Requesting [%d]: %s', ++$count, $data['FilePublicID']));
                            $resourceData = $api->asset(
                                $data['FilePublicID'],
                                [
                                    'colors' => true,
                                ]
                            );
                            if($resourceData->rateLimitRemaining < 10) {
                                var_dump(sprintf('WARNING: Only %d requests remaining this hour', $resourceData->rateLimitRemaining));
                            }
                            $resourceData = (array)$resourceData;
                        } catch (NotFound $e) {
                            $searchResultData = (array)$searchApi
                                ->expression(sprintf('%s*', $data['FilePublicID']))
                                ->execute();

                            if ($searchResultData['total_count']) {
                                $resourceData = $searchResultData['resources'][0];
                            } else {
                                var_dump(sprintf('Unable to find: %s', $data['FilePublicID']));
                                continue;
                            }
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
}
