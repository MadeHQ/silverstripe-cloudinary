<?php

namespace MadeHQ\Cloudinary\FieldType;

use SilverStripe\ORM\FieldType\DBText;

abstract class DBBase extends DBText
{
    protected $parsed = null;

    public function getParsed()
    {
        if ($this->parsed) {
            return $this->parsed;
        }

        $this->parsed = json_decode(
            $this->getValue(), false
        );

        return $this->parsed;
    }
}
