<?php

namespace MadeHQ\Cloudinary\Forms;

class MultiImageField extends BaseField
{
    protected $fieldType = 'image';

    protected $isMultiple = true;

    public function __construct($name, $title = null, $value = null)
    {
        parent::__construct($name, $title, $value);

        $this->setButtonLabel('Choose Images');
    }

    public function setMaxFiles($maxFiles)
    {
        $this->maxFiles = $maxFiles;

        return $this;
    }
}
