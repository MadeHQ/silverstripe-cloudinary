<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\MultiImageField;

class DBMultiImageResource extends DBMultiResource
{
    /**
     * {@inheritdoc}
     */
    public function scaffoldFormField($title = null, $params = null)
    {
        return MultiImageField::create($this->name, $title);
    }

    /**
     * {@inheritdoc}
     */
    protected function getResourceType()
    {
        return MultiImageField::create('Dummy')->getResourceType();
    }
}
