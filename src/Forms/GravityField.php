<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\Forms\DropdownField;
use SilverStripe\Core\Config\Config;

class GravityField extends DropdownField
{
    public function __construct($name, $title = null, $source = [], $value = null)
    {
        $gravities = Config::inst()->get('MadeHQ\Cloudinary\Model\Image', 'gravities');
        parent::__construct($name, $title, $gravities, $value);
    }

    public function setSource($source = [])
    {
        $gravities = Config::inst()->get('MadeHQ\Cloudinary\Model\Image', 'gravities');
        $this->source = $this->getListMap($gravities);
        // throw new \RuntimeException('You are not able to update the Gravity options');
    }

    // public function getSource()
    // {
    //     $source = parent::getSource();
    //     var_dump($source);
    //     return $source;
    // }
}
