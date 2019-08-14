<?php

namespace MadeHQ\Cloudinary\Forms;

class MultiImageField extends BaseField
{
    protected $fieldType = 'image';

    protected $isMultiple = true;

    protected $buttonLabel = 'Choose Images';
}
