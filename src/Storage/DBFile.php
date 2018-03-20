<?php

namespace MadeHQ\Cloudinary\Storage;

use SilverStripe\Assets\Storage\DBFile as BaseDBFile;
use SilverStripe\ORM\ValidationResult;

class DBFile extends BaseDBFile
{
    /**
     * Assuming that ALL filenames are valid
     */
    protected function isValidFilename($filename)
    {
        return true;
    }
}
