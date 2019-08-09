<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\ImageField;

class DBImage extends DBBase
{
    /**
     * @config
     */
    private static $non_gravity_crops = ['fit', 'limit', 'mfit', 'pad', 'lpad'];

    /**
     * @config
     */
    private static $valid_image_formats = ['jpg', 'gif', 'png'];

    public function scaffoldFormField($title = null, $params = null)
    {
        return ImageField::create($this->name, $title);
    }
}
