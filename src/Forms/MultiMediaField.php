<?php

namespace MadeHQ\Cloudinary\Forms;

class MultiMediaField extends BaseField
{
    protected $resourceType = 'video';

    protected $isMultiple = true;

    protected $buttonLabel = 'Choose Media';
}
