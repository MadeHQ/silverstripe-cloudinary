<?php

namespace MadeHQ\Cloudinary\Model;

use SilverStripe\Assets\File As BaseFile;
use MadeHQ\Cloudinary\Traits\CloudinaryFileTrait;

class File extends BaseFile
{
    use CloudinaryFileTrait;

    /**
     * @var string
     */
    private static $table_name = 'CloudinaryFile';

    /**
     * Cloudinary Media Library URL
     * @return String
     */
    public function CMSEditLink()
    {
        $link = sprintf('https://cloudinary.com/console/media_library/asset/%s/upload/%s', $this->ResourceType, rawurlencode($this->PublicID));
        return $link;
    }
}
