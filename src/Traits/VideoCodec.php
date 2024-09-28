<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Transcode;

trait VideoCodec
{
    /**
     * @param string $videoCodec
     * @return static
     */
    public function VideoCodec($videoCodec)
    {
        if (!$this->asset) {
            return null;
        }
        $clone = $this->clone();

        $clone->asset->transcode(Transcode::videoCodec($videoCodec));

        return $clone;
    }
}
