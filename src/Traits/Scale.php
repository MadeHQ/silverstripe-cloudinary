<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Resize;

trait Scale
{
    /**
     * @param int|string $width
     * @param int|string $height
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function Scale($width, $height, $aspectRatio = null)
    {
        if (!$this->asset) {
            return null;
        }
        $clone = $this->clone();

        $clone->asset->resize(Resize::scale($width, $height, $aspectRatio));

        return $clone;
    }

    /**
     * @param int|string $width
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function ScaleByWidth($width, $aspectRatio = null)
    {
        return $this->Scale($width, null, $aspectRatio);
    }

    /**
     * @param int|string $height
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function ScaleByHeight($height, $aspectRatio = null)
    {
        return $this->Scale(null, $height, $aspectRatio);
    }

    /**
     * Silverstripe compatibility function
     *
     * @param int|string $width
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function ScaleWidth($width)
    {
        return $this->Scale($width, null);
    }

    /**
     * Silverstripe compatibility function
     *
     * @param int|string $height
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function ScaleHeight($height)
    {
        return $this->Scale(null, $height);
    }
}
