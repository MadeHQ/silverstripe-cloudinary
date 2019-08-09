<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\MultiImageField;

class DBMultiImage extends DBBase
{
    public function scaffoldFormField($title = null, $params = null)
    {
        return MultiImageField::create($this->name, $title);
    }
}
