<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\MediaField;

class DBMultiMediaResource extends DBMultiResource
{
    /**
     * {@inheritdoc}
     */
    public function scaffoldFormField($title = null, $params = null)
    {
        return MediaField::create($this->name, $title)->setMultiple(true);
    }

    /**
     * {@inheritdoc}
     */
    protected function getResourceType()
    {
        return MediaField::create('Dummy')->getResourceType();
    }
}
