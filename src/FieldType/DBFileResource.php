<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\FileField;

class DBFileResource extends DBSingleResource
{
    /**
     * {@inheritdoc}
     */
    public function scaffoldFormField($title = null, $params = null)
    {
        return FileField::create($this->name, $title);
    }

    /**
     * {@inheritdoc}
     */
    public function forTemplate()
    {
        $asset = $this->asset;

        $this->extend('onBeforeRender', $asset);

        return ($asset) ? $asset->toUrl() : '';
    }
}
