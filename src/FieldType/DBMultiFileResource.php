<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\FileField;

class DBMultiFileResource extends DBMultiResource
{
    /**
     * {@inheritdoc}
     */
    public function scaffoldFormField($title = null, $params = null)
    {
        return FileField::create($this->name, $title)->setMultiple(true);
    }

    /**
     * {@inheritdoc}
     */
    protected function getResourceType()
    {
        return FileField::create('Dummy')->getResourceType();
    }
}
