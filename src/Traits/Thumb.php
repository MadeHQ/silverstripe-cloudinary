<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Resize;

trait Thumb
{
    /**
     * @param int|string $width
     * @param int|string $height
     * @param string $gravity
     * @return static
     */
    public function Thumb($width, $height, $gravity = null)
    {
        $clone = $this->clone();

        if ($customGravity = $this->getCustomGravity()) {
            $gravity = $customGravity;
        }

        $clone->asset->resize(Resize::thumbnail($width, $height, $gravity));

        return $clone;
    }

    /**
     * @param int|string $width
     * @param string $gravity
     * @return static
     */
    public function ThumbByWidth($width, $gravity = null)
    {
        return $this->Thumb($width, null, $gravity);
    }

    /**
     * @param int|string $height
     * @param string $gravity
     * @return static
     */
    public function ThumbByHeight($height, $gravity = null)
    {
        return $this->Thumb(null, $height, $gravity);
    }
}
