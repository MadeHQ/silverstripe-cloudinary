<?php

namespace MadeHQ\Cloudinary\Assets;

use Silverstripe\Assets\File As BaseFile;

class File extends BaseFile
{
    private static $table_name = 'CloudinaryAssetFile';

    public function exists()
    {
        return true;
    }

    public static function createFromCloudinaryData($data)
    {
        $file = static::Create();
        $file->ID = $data['public_id'];
        $file->Title = $data['public_id'];
        $file->URL = $data['secure_url'];
        return $file;
    }
}
