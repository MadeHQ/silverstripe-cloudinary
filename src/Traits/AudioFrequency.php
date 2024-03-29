<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Transcode;

trait AudioFrequency
{
    /**
     * @param string $audioFrequency
     * @return static
     */
    public function AudioFrequency($audioFrequency)
    {
        $clone = $this->clone();

        $clone->asset->transcode(Transcode::audioFrequency($audioFrequency));

        return $clone;
    }
}
