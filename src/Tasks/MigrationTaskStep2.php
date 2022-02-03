<?php

namespace MadeHQ\Cloudinary\Tasks;

use Cloudinary\Api;
use Cloudinary\Api\NotFound;
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
        $dataObjectClasses = ClassInfo::subclassesFor(DataObject::class, false);

        $schema = DataObject::getSchema();
        $api = new Api();
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
echo '<pre>';
        /**
         *
         */
        foreach($dataObjectClasses As $className) {
            DataObject::get($className)->each(function (DataObject $do) use ($schema, $sqlTemplate, $api, $usableFields) {
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
                            $resourceData = (array)$api->resource($data['FilePublicID']);
                        } catch (NotFound $e) {
                            var_dump(sprintf('Unable to find: %s', $data['FilePublicID']));
                            continue;
                        }
                        $newData = [
                            'transformations' => null,
                            'name' => $data['Title'],
                            'title' => $data['Title'],
                            'gravity' => $data['Focus'],
                        ];
                        foreach($usableFields As $field) {
                            if (!array_key_exists($field, $resourceData)) {
                                var_dump($data['FilePublicID'], $data, $resourceData);
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

                        // var_dump(
                        //     $fieldName,
                        //     $fieldType,
                        //     $do->ClassName,
                        //     $tableName,
                        //     // $data,
                        //     (array)$resourceData,
                        //     $newData
                        // );
                        // die;
                    }
                }
            });
        }
    }
}
