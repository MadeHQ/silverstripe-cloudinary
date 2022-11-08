<?php

namespace MadeHQ\Cloudinary\Traits;

trait BitRate
{
    /**
     * @param string $bitRate
     * @return static
     */
    public function BitRate($bitRate)
    {
        $clone = $this->clone();

        if ($clone->asset) {
            $clone->asset->bitRate($bitRate);
        }

        return $clone;
    }
}
