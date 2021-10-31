<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Resize;

trait MinimumFit
{
    /**
     * @param int|string $width
     * @param int|string $height
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function MinimumFit($width, $height, $aspectRatio = null)
    {
        $clone = $this->clone();

        $clone->asset->resize(Resize::minimumFit($width, $height, $aspectRatio));

        return $clone;
    }

    /**
     * @param int|string $width
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function MinimumFitByWidth($width, $aspectRatio = null)
    {
        return $this->MinimumFit($width, null, $aspectRatio);
    }

    /**
     * @param int|string $height
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function MinimumFitByHeight($height, $aspectRatio = null)
    {
        return $this->MinimumFit(null, $height, $aspectRatio);
    }
}
