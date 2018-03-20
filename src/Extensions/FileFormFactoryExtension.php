<?php

namespace MadeHQ\Cloudinary\Extensions;

use SilverStripe\Core\Extension;
use SilverStripe\Forms\FieldList;
use SilverStripe\Control\Controller;
use MadeHQ\Cloudinary\Forms\GravityField;

class FileFormFactoryExtension extends Extension
{
    public function updateFormFields(FieldList $fields, Controller $controller, $formName, $context)
    {
        $fields->addFieldToTab(
            'Editor.Details',
            GravityField::create('Gravity'),
            'Name'
        );
    }
}
