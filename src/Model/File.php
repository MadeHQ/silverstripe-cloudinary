<?php

namespace MadeHQ\Cloudinary\Model;

use Cloudinary\Api;
use SilverStripe\Assets\File As BaseFile;
use SilverStripe\Core\Flushable;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\ORM\Queries\SQLUpdate;
use SilverStripe\ORM\DB;

use MadeHQ\Cloudinary\Traits\CloudinaryFileTrait;

class File extends BaseFile implements Flushable
{
    use CloudinaryFileTrait;
    use Configurable;

    /**
     * @var string
     */
    private static $table_name = 'CloudinaryFile';

    /**
     * If set to true then remote cloudinary data will be cleared out of the
     *   database when `?flush=xx` is passed
     * @var bool
     */
    private static $clear_remote_data_on_flush = false;

    /**
     * Cloudinary Media Library URL
     * @return String
     */
    public function CMSEditLink()
    {
        $link = sprintf('https://cloudinary.com/console/media_library/asset/%s/upload/%s', $this->ResourceType, rawurlencode($this->PublicID));
        return $link;
    }

    public function getAbsoluteURL()
    {
        return $this->SecureURL;
    }

    public function doArchive()
    {
        $api = new Api();
        $r = $api->delete_resources(array($this->PublicID));
        return parent::doArchive();
    }

    public static function getOneByPublicId($publicId)
    {
        return static::get_one(static::class, [
            'PublicID' => $publicId,
        ]);
    }

    public function canUnpublish($member = null)
    {
        return false;
    }

    public static function flush()
    {
        $tableName = static::config()->get('table_name');

        $fields = DB::field_list($tableName);
        if (array_key_exists('RemoteData', $fields) && static::config()->get('clear_remote_data_on_flush')) {
            SQLUpdate::create('"' . $tableName . '"')
                ->assign('"RemoteData"', NULL)
                ->execute();
            SQLUpdate::create('"' . $tableName . '_Live"')
                ->assign('"RemoteData"', NULL)
                ->execute();
        }
        if (array_key_exists('PublicID', $fields)) {
            // This is used as part of migration from older structure
            $parentTableName = BaseFile::config()->get('table_name');
            $sql = sprintf(
                'UPDATE "%1$s" SET "%1$s"."PublicID" = (SELECT "PublicID" FROM "%2$s" WHERE "%1$s"."ID" = "%2$s"."ID")',
                $parentTableName,
                $tableName
            );
            $liveSql = sprintf(
                'UPDATE "%1$s_Live" SET "%1$s_Live"."PublicID" = (SELECT "PublicID" FROM "%2$s_Live" WHERE "%1$s_Live"."ID" = "%2$s_Live"."ID")',
                $parentTableName,
                $tableName
            );
            DB::query($sql);
            DB::query($liveSql);
            DB::get_schema()->renameField($tableName, 'PublicID', '_obsolete_PublicID');
            DB::get_schema()->renameField($tableName . '_Live', 'PublicID', '_obsolete_PublicID');
            DB::get_schema()->renameField($tableName . '_Versions', 'PublicID', '_obsolete_PublicID');
        }
    }

    public function requireTable()
    {
        /*
        We've done a slightly dumb thing, and extended the Silverstripe/Assets/File class into this class which does
        all the cloudinary crap, however we then use injector to override that class with this one, so now dev/build
        has no way of getting at the base class, so it can no longer build it, so any changes to that class do not show up,
        and so we get db errors, this method fixes that by manually finding and building the base class

        In the future, if we need to extend an object, use an Extension, or if we MUST create a new class to replace it,
        do NOT have it extend the original class
        */

        // We have to use new here because ::create will invoke the injector API and return us the Cloudinary Image class
        $baseClassInstance = new BaseFile();
        $baseClassInstance->requireTable();

        parent::requireTable();
    }
}
