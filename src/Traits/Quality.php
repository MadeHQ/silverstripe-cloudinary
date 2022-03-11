<?php

namespace MadeHQ\Cloudinary\Traits;

trait Quality
{
    /**
     * @param int|string $quality
     * @return static
     */
    public function Quality($quality)
    {
        if (!$this->asset) {
            return null;
        }
        $clone = $this->clone();

        $clone->asset->quality($quality);
        $clone->qualitySet = true;

        return $clone;
    }
}
