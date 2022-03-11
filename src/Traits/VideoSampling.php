<?php

namespace MadeHQ\Cloudinary\Traits;

trait VideoSampling
{
    /**
     * @param int|string $videoSampling
     * @return static
     */
    public function VideoSampling($videoSampling)
    {
        if (!$this->asset) {
            return null;
        }
        $clone = $this->clone();

        $clone->asset->videoSampling($videoSampling);

        return $clone;
    }
}
