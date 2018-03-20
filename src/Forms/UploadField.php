<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\AssetAdmin\Forms\UploadField As BaseUploadField;
use SilverStripe\View\Requirements;

class UploadField extends BaseUploadField
{
    /**
     * @inheritdoc
     */
    public function __construct($name, $title = null, SS_List $items = null)
    {
        Requirements::javascript('resources/mademedia/silverstripe-cloudinary/client/dist/js/bundle.js');
        parent::__construct($name, $title, $items);
    }
}
