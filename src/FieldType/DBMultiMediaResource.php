<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\MultiMediaField;

class DBMultiMediaResource extends DBMultiResource
{
    /**
     * {@inheritdoc}
     */
    public function scaffoldFormField($title = null, $params = null)
    {
        return MultiMediaField::create($this->name, $title);
    }

    /**
     * {@inheritdoc}
     */
    protected function getResourceType()
    {
        return MultiMediaField::create('Dummy')->getResourceType();
    }
}
