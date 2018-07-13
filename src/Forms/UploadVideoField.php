<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\Core\Config\Config;

use SilverStripe\Forms\DropdownField;
use SilverStripe\Forms\TextField;

class UploadVideoField extends UploadFileField
{
    // private static $gravities = [
    //     'auto' => 'Auto',
    //     'center' => 'Center',
    //     'faces' => 'Faces',
    //     'north' => 'Top',
    //     'north_east' => 'Top right',
    //     'east' => 'Right',
    //     'south_east' => 'Bottom right',
    //     'south' => 'Bottom',
    //     'south_west' => 'Bottom left',
    //     'west' => 'Left',
    //     'north_west' => 'Top left',
    // ];
    //
    // public function __construct($name, $title = null, $value = null)
    // {
    //     parent::__construct($name, $title, $value);
    //     $this->addField(TextField::create(sprintf('%s[Alt]', $name), 'Alt'));
    //     $this->removeField('Description');
    // }
}
