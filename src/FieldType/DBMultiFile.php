<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\MultiFileField;

class DBMultiFile extends DBMulti
{
    public function scaffoldFormField($title = null, $params = null)
    {
        return MultiFileField::create($this->name, $title);
    }

    protected function getResourceType()
    {
        return MultiFileField::create('Dummy')->getResourceType();
    }
}
