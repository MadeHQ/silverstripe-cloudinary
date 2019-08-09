<?php

namespace MadeHQ\Cloudinary\Forms;

class ImageField extends BaseField
{
    protected $fieldType = 'image';

    public function __construct($name, $title = null, $value = null)
    {
        parent::__construct($name, $title, $value);

        $this->setButtonLabel('Choose Image');
    }
}
