<?php

namespace MadeHQ\Cloudinary\Model;

use SilverStripe\AssetAdmin\Model\ThumbnailGenerator As BaseThumbnailGenerator;
use SilverStripe\Assets\Storage\AssetContainer;

class ThumbnailGenerator extends BaseThumbnailGenerator
{
    /**
     * @inheritdoc
     */
    public function generateThumbnailLink(AssetContainer $file, $width, $height)
    {
        if (!$file->getIsImage() || !$file->exists()) {
            return null;
        }
        $opts = [
            'width' => $width,
            'height' => $height,
            'crop' => 'fit',
            'type' => $file->Type,
            'secure' => true,
        ];
        return \Cloudinary::cloudinary_url($file->PublicID . '.png', $opts);
    }
}
