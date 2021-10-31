<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Delivery;
use Cloudinary\Transformation\Format as TransformationFormat;

trait Format
{
    /**
     * @param string $format
     * @return static
     */
    public function Format($format)
    {
        $clone = $this->clone();

        $clone->asset->delivery(Delivery::format(TransformationFormat::$format()));
        $clone->formatSet = true;

        return $clone;
    }
}
