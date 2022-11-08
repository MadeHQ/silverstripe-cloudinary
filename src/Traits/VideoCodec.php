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
        $clone = $this->clone();

        if ($clone->asset) {
            $clone->asset->transcode(Transcode::videoCodec($videoCodec));
        }

        return $clone;
    }
}
