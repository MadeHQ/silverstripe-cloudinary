<?php

namespace MadeHQ\Cloudinary\Traits;

use Cloudinary\Transformation\Effect as TransformationEffect;

trait Effect
{
    /**
     * @param string $effect
     * @param mixed $name
     * @return static
     */
    public function Effect($effect, ...$args)
    {
        $clone = $this->clone();

        $clone->asset->effect(TransformationEffect::generic($effect, ...$args));

        return $clone;
    }
}
