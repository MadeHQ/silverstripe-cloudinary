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
        $clone = $this->clone();

        if ($clone->asset) {
            $clone->asset->quality($quality);
        }

        $clone->qualitySet = true;

        return $clone;
    }
}
