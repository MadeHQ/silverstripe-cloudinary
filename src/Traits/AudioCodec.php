<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Transcode;

trait AudioCodec
{
    /**
     * @param string $audioCodec
     * @return static
     */
    public function AudioCodec($audioCodec)
    {
        if (!$this->asset) {
            return null;
        }
        $clone = $this->clone();

        $clone->asset->transcode(Transcode::audioCodec($audioCodec));

        return $clone;
    }
}
