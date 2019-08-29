<?php

namespace MadeHQ\Cloudinary\Forms;

class MultiFileField extends BaseField
{
    protected $resourceType = 'raw';

    protected $isMultiple = true;

    protected $buttonLabel = 'Choose Files';
}
