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

        $clone->asset->bitRate($bitRate);

        return $clone;
    }
}
