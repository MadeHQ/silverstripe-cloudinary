<?php

namespace MadeHQ\Cloudinary\Forms;

class MultiFileField extends FileField
{
    /**
     * {@inheritdoc}
     */
    protected $isMultiple = true;
}
