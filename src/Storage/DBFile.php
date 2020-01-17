<?php

namespace MadeHQ\Cloudinary\Storage;

use SilverStripe\Assets\Storage\DBFile as BaseDBFile;

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
