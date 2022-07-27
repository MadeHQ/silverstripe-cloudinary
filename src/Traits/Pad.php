<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Resize;

trait Pad
{
    /**
     * @param int|string $width
     * @param int|string $height
     * @param string $background
     * @return static
     */
    public function Pad($width, $height, $background = null)
    {
        $clone = $this->clone();

        $clone->asset->resize(Resize::pad($width, $height, $background));

        return $clone;
    }

    /**
     * @param int|string $width
     * @param string $background
     * @return static
     */
    public function PadByWidth($width, $background = null)
    {
        return $this->Pad($width, null, $background);
    }

    /**
     * @param int|string $height
     * @param string $background
     * @return static
     */
    public function PadByHeight($height, $background = null)
    {
        return $this->Pad(null, $height, $background);
    }
}
