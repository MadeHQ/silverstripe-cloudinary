<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\ImageField;

class DBMultiImageResource extends DBMultiResource
{
    /**
     * {@inheritdoc}
     */
    public function scaffoldFormField($title = null, $params = null)
    {
        return ImageField::create($this->name, $title)->setMultiple(true);
    }

    /**
     * {@inheritdoc}
     */
    protected function getResourceType()
    {
        return ImageField::create('Dummy')->getResourceType();
    }
}
