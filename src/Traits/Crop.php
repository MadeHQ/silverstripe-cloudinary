<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Resize;

trait Crop
{
    /**
     * @param int|string $width
     * @param int|string $height
     * @param string $gravity
     * @return static
     */
    public function Crop($width, $height, $gravity = null)
    {
        $clone = $this->clone();

        if (empty($gravity) === true) {
            $gravity = 'auto';
        }

        $customGravity = $this->getGravity();

        if (empty($customGravity) === false) {
            $gravity = $customGravity;
        }

        if ($clone->asset) {
            $clone->asset->resize(Resize::crop($width, $height, $gravity));
        }

        return $clone;
    }

    /**
     * @param int|string $width
     * @param string $gravity
     * @return static
     */
    public function CropByWidth($width, $gravity = null)
    {
        return $this->Crop($width, null, $gravity);
    }

    /**
     * @param int|string $height
     * @param string $gravity
     * @return static
     */
    public function CropByHeight($height, $gravity = null)
    {
        return $this->Crop(null, $height, $gravity);
    }
}
