<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Resize;

trait LimitFill
{
    /**
     * @param int|string $width
     * @param int|string $height
     * @param string $gravity
     * @return static
     */
    public function LimitFill($width, $height, $gravity = null)
    {
        $clone = $this->clone();

        if (empty($gravity) === true) {
            $gravity = 'auto';
        }

        $customGravity = $this->getGravity();

        if (empty($customGravity) === false) {
            $gravity = $customGravity;
        }

        $clone->asset->resize(Resize::limitFill($width, $height, $gravity));

        return $clone;
    }

    /**
     * @param int|string $width
     * @param string $gravity
     * @return static
     */
    public function LimitFillByWidth($width, $gravity = null)
    {
        return $this->LimitFill($width, null, $gravity);
    }

    /**
     * @param int|string $height
     * @param string $gravity
     * @return static
     */
    public function LimitFillByHeight($height, $gravity = null)
    {
        return $this->LimitFill(null, $height, $gravity);
    }
}
