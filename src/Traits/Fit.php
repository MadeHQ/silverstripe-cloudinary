<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Resize;

trait Fit
{
    /**
     * @param int|string $width
     * @param int|string $height
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function Fit($width, $height, $aspectRatio = null)
    {
        if (!$this->asset) {
            return null;
        }
        $clone = $this->clone();

        $clone->asset->resize(Resize::fit($width, $height, $aspectRatio));

        return $clone;
    }

    /**
     * @param int|string $width
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function FitByWidth($width, $aspectRatio = null)
    {
        return $this->Fit($width, null, $aspectRatio);
    }

    /**
     * @param int|string $height
     * @param int|float|string $aspectRatio
     * @return static
     */
    public function FitByHeight($height, $aspectRatio = null)
    {
        return $this->Fit(null, $height, $aspectRatio);
    }
}
