<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\FileField;

class DBFile extends DBSingle
{
    public function scaffoldFormField($title = null, $params = null)
    {
        return FileField::create($this->name, $title);
    }
}
