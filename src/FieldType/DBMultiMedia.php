<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\MultiMediaField;

class DBMultiMedia extends DBMulti
{
    public function scaffoldFormField($title = null, $params = null)
    {
        return MultiMediaField::create($this->name, $title);
    }

    protected function getResourceType()
    {
        return MultiMediaField::create('Dummy')->getResourceType();
    }
}
