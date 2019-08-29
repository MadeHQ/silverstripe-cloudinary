<?php

namespace MadeHQ\Cloudinary\Forms;

class MultiImageField extends BaseField
{
    protected $resourceType = 'image';

    protected $isMultiple = true;

    protected $buttonLabel = 'Choose Images';
}
