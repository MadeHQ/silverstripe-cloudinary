<?php

namespace MadeHQ\Cloudinary\UserForms\Extensions;

use SilverStripe\Core\Extension;
use SilverStripe\View\Requirements;

class FieldEditor extends Extension
{
    public function updateCMSFields()
    {
        Requirements::javascript('mademedia/silverstripe-cloudinary:client/dist/userform.js');
    }
}
