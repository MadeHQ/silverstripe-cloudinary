<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Delivery;

trait DPR
{
    /**
     * @param int|float|string $dpr
     * @return static
     */
    public function DPR($dpr)
    {
        if (!$this->asset) {
            return null;
        }
        $clone = $this->clone();

        $clone->asset->delivery(Delivery::dpr($dpr));

        return $clone;
    }
}
