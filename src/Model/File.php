<?php

namespace MadeHQ\Cloudinary\Model;

use SilverStripe\Assets\File As BaseFile;
use MadeHQ\Cloudinary\Traits\CloudinaryFileTrait;

class File extends BaseFile
{
    use CloudinaryFileTrait;

    private static $table_name = 'CloudinaryFile';
}
