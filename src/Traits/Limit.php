<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Resize;

trait Limit
{
    /**
     * @param int|string $width
     * @param int|string $height
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function Limit($width, $height, $aspectRatio = null)
    {
        $clone = $this->clone();

        $clone->asset->resize(Resize::limitFit($width, $height, $aspectRatio));

        return $clone;
    }

    /**
     * @param int|string $width
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function LimitByWidth($width, $aspectRatio = null)
    {
        return $this->Limit($width, null, $aspectRatio);
    }

    /**
     * @param int|string $height
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function LimitByHeight($height, $aspectRatio = null)
    {
        return $this->Limit(null, $height, $aspectRatio);
    }
}
