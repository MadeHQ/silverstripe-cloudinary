<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Flag as TransformationFlag;

trait Flag
{
    /**
     * @param string $flag
     * @param mixed @options,...
     * @return static
     */
    public function Flag($flag, ...$options)
    {
        $clone = $this->clone();

        if ($clone->asset) {
            $clone->asset->addFlag(TransformationFlag::$flag(...$options));
        }

        return $clone;
    }
}
