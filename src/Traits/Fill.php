<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Resize;

trait Fill
{
    /**
     * @param int|string $width
     * @param int|string $height
     * @param string $gravity
     * @return static
     */
    public function Fill($width, $height, $gravity = null)
    {
        $clone = $this->clone();

        if (empty($gravity) === true) {
            $gravity = 'auto';
        }

        $customGravity = $this->getCustomGravity();

        if (empty($customGravity) === false) {
            $gravity = $customGravity;
        }

        $clone->asset->resize(Resize::fill($width, $height, $gravity));

        return $clone;
    }

    /**
     * @param int|string $width
     * @param string $gravity
     * @return static
     */
    public function FillByWidth($width, $gravity = null)
    {
        return $this->Fill($width, null, $gravity);
    }

    /**
     * @param int|string $height
     * @param string $gravity
     * @return static
     */
    public function FillByHeight($height, $gravity = null)
    {
        return $this->Fill(null, $height, $gravity);
    }
}
