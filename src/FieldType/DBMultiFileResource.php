<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\MultiFileField;

class DBMultiFileResource extends DBMultiResource
{
    /**
     * {@inheritdoc}
     */
    public function scaffoldFormField($title = null, $params = null)
    {
        return MultiFileField::create($this->name, $title);
    }

    /**
     * {@inheritdoc}
     */
    protected function getResourceType()
    {
        return MultiFileField::create('Dummy')->getResourceType();
    }
}
