<?php

namespace MadeHQ\Cloudinary\Tasks;

use Cloudinary\Api\Exception\NotFound;
use Cloudinary\Cloudinary;
use MadeHQ\Cloudinary\Controllers\API;
use MadeHQ\Cloudinary\Model\ImageLink;
use Psr\SimpleCache\CacheInterface;
use SilverStripe\Assets\File;
use SilverStripe\Control\Director;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Core\ClassInfo;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\DB;
use SilverStripe\Security\DefaultAdminService;
use SilverStripe\Security\Security;
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

    /**
     * @var API
     */
    private $apiController;

    /**
     * @var CacheInterface
     */
    private $cache;

    /**
     * SQL to use that will retrieve an item from a FileLink on a `has_one` relationship
     * Should only return a single item
     *
     * Variables used are:
     *  - `LinkTable`: This is the table used by the `FileLink` class (defaults to 'CloudinaryImageLink')
     *  - `FileTable`: This is the base File (with suffix for versioning) that is linked to from the LinkTable
     *  - `FieldName`: Name of the field from the `has_one` (`ID` is appended in the template as it's a relationship)
     *  - `TableName`: Table used for this field
     *  - `ID`: ID for the relationship
     *
     * @var string
     */
    private static $has_one_sql_template = <<<SQL
SELECT ft.*, lt.Focus, lt.Caption, lt.AltText FROM "{LinkTable}" As lt
INNER JOIN "{FileTable}" As ft ON "ft"."ID" = "lt"."FileID"
WHERE "lt"."ID" = (SELECT "{FieldName}ID" FROM "{TableName}" WHERE "ID" = '{ID}')
SQL;

    /**
     *
     * Variables used are:
     *  - `RelationTableName`:
     *  - `LinkTable`:
     *  - `FileTable`:
     *  - `RootRelationName`:
     *  - `ID`:
     *
     * e.g.
     * ```
     * SELECT `FilePublicID`, `fl`.`Caption`, `fl`.`AltText`
     * FROM `ProductPage_Images` AS l
     * INNER JOIN `CloudinaryImageLink` AS fl ON `fl`.`ID` = `l`.`CloudinaryImageLinkID`
     * INNER JOIN `File` AS f ON `f`.`ID` = `fl`.`FileID`
     * WHERE
     * 	`l`.`ProductPageID` = 140
     * ;
     * ```
     *
     * @var string
     */
    private static $many_many_sql_template = <<<SQL
SELECT "FilePublicID", "fl"."Caption", "fl"."AltText"
FROM "{RelationTableName}" AS l
INNER JOIN "{LinkTable}" AS fl ON "fl"."ID" = "l"."{LinkTable}ID"
INNER JOIN "{FileTable}{VersionSuffix}" AS f ON "f"."ID" = "fl"."{FileTable}ID"
WHERE
	"l"."{RootRelationName}ID" = '{ID}'
;
SQL;

    private $requestCount = 0;

    public function __construct(Cloudinary $cloudinary, CacheInterface $cache)
    {
        $this->cloudinary = $cloudinary;
        $this->cache = $cache;

        Security::setCurrentUser(DefaultAdminService::singleton()->findOrCreateDefaultAdmin());
        $this->apiController = Injector::inst()->get('MadeHQ\Cloudinary\Controllers\API');
    }

    public function run($request)
    {
        if (!Director::is_cli()) {
            echo '<pre>';
        }

        $dataObjectClasses = ClassInfo::subclassesFor(DataObject::class, false);
        $schema = DataObject::getSchema();

        /**
         *
         */
        foreach($dataObjectClasses As $className) {
            DataObject::get($className)->each(function (DataObject $do) use ($schema) {
                $stages = [
                    Versioned::DRAFT => '',
                ];
                if ($do->has_extension(Versioned::class)) {
                    $stages[Versioned::LIVE] = '_Live';
                }
                foreach($stages As $stage => $suffix) {
                    Versioned::set_stage($stage);

                    foreach($schema->databaseFields($do->ClassName) As $fieldName => $fieldType) {
                        switch($fieldType) {
                            case 'CloudinaryImage':
                                $this->handleCloudinaryImage($do, $fieldName, $suffix);
                                break;
                            case 'CloudinaryMultiImage':
                                $this->handleMultiImageResource($do, $fieldName, $suffix);
                                break;
                        }
                    }
                }
            });
        }

        var_dump('COMPLETE!!');
    }

    /**
     * @param DataObject $do
     * @param string $fieldName
     * @param string $tableSuffix
     *
     * @return void(0)
     */
    private function handleMultiImageResource(DataObject $do, string $fieldName, string $tableSuffix)
    {
        $schema = DataObject::getSchema();
        $tableName = $schema->tableForField($do->ClassName, $fieldName);
        $relationshipTableName = sprintf('%s_%s', $tableName, $fieldName);

        $oldData = DB::query(strtr(
            static::config()->get('many_many_sql_template'),
            [
                '{RelationTableName}' => $relationshipTableName,
                '{LinkTable}' => $schema->tableName(ImageLink::class),
                '{FileTable}' => $schema->tableName(File::class),
                '{VersionSuffix}' => $tableSuffix,
                '{RootRelationName}' => $do->ClassName,
                '{ID}' => $do->ID,
            ]
        ));

        $newData = [];
        foreach($oldData as $item) {
            $newItem = $this->getAsset($item['FilePublicID']);
            $newItem->title = $item['Caption'];
            $newItem->description = $item['AltText'];
            array_push($newData, $newItem);
        }

        $sql = sprintf(
            'UPDATE "%s" SET "%s" = \'%s\' WHERE "ID" = %d',
            $tableName . $tableSuffix,
            $fieldName,
            DB::get_conn()->escapeString(json_encode($newData)),
            $do->ID
        );

        DB::query($sql);
    }

    /**
     * @param DataObject $do
     * @param string $fieldName
     * @param string $tableSuffix
     *
     * @return void(0)
     */
    private function handleCloudinaryImage(DataObject $do, string $fieldName, string $tableSuffix)
    {
        $schema = DataObject::getSchema();

        $tableName = $schema->tableForField($do->ClassName, $fieldName) . $tableSuffix;

        $sql = strtr(
            static::config()->get('has_one_sql_template'),
            [
                '{LinkTable}' => $schema->tableName(ImageLink::class),
                '{FileTable}' => $schema->tableName(File::class) . $tableSuffix,
                '{FieldName}' => $fieldName,
                '{TableName}' => $tableName,
                '{ID}' => $do->ID,
            ]
        );

        $data = DB::query($sql)->first();
        if (!$data || !array_key_exists('FilePublicID', $data) || !$data['FilePublicID']) {
            return;
        }
        $newData = $this->getAsset($data['FilePublicID']);

        if (!$newData) {
            return;
        }
        $newData->title = $data['Caption'];
        $newData->description = $data['AltText'];

        $sql = sprintf(
            'UPDATE "%s" SET "%s" = \'%s\' WHERE "ID" = %d',
            $tableName,
            $fieldName,
            DB::get_conn()->escapeString(json_encode($newData)),
            $do->ID
        );

        DB::query($sql);
    }

    /**
     * @uses API::resource()
     */
    private function getAsset($publicId)
    {
        $cacheKey = md5($publicId);

        if ($this->cache->has($cacheKey)) {
            echo '.';   // Just so we see progress when large number of cached responses
            return $this->cache->get($cacheKey);
        }

        try {
            $request = new HTTPRequest('GET', '/', [
                'public_id' => $publicId,
                'resource_type' => 'image'
            ]);

            var_dump(sprintf('Requesting [%d]: %s', ++$this->requestCount, $publicId));
            $response = $this->apiController->resource($request);

            $resourceData = json_decode($response->getBody());
        } catch (NotFound $e) {
            var_dump(sprintf('Failed to find "%s"', $publicId));
            $searchApi = $this->cloudinary->searchApi();
            var_dump(sprintf('Searching [%d]: %s', ++$this->requestCount, $publicId));
            $searchResultData = (array)$searchApi
                ->expression(sprintf('%s', $publicId))
                ->execute();

            if ($searchResultData['total_count']) {
                $replacementPublicId = $searchResultData['resources'][0]['public_id'];
                if ($replacementPublicId !== $publicId) {
                    $resourceData = $this->getAsset($replacementPublicId);
                } else {
                    $resourceData = false;
                }
            } else {
                var_dump(sprintf('Unable to find: %s', $publicId));
                $resourceData = false;
            }
        }

        $this->cache->set($cacheKey, $resourceData, 60 * 60 * 24);  // 1 Day Cache
        return $resourceData;
    }
}
