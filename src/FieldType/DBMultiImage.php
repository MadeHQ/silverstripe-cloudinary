<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\MultiImageField;

class DBMultiImage extends DBMulti
{
    public function scaffoldFormField($title = null, $params = null)
    {
        return MultiImageField::create($this->name, $title);
    }

    protected function getResourceType()
    {
        return MultiImageField::create('Dummy')->getResourceType();
    }
}
