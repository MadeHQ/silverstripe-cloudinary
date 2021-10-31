<?php

namespace MadeHQ\Cloudinary\Traits;

trait KeyframeInterval
{
    /**
     * @param string $keyframeInterval
     * @return static
     */
    public function KeyframeInterval($keyframeInterval)
    {
        $clone = $this->clone();

        $clone->asset->keyframeInterval($keyframeInterval);

        return $clone;
    }
}
