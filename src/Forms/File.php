<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\Forms\CompositeField;
use SilverStripe\Forms\TextField;
use SilverStripe\View\ArrayData;
use SilverStripe\View\Requirements;

class File extends CompositeField
{
    public function __construct($name, $title = null, $value = null)
    {
        parent::__construct($this->createFields($name));
        $this->setName($name);

        if ($title === null) {
            $this->title = self::name_to_label($name);
        } else {
            $this->title = $title;
        }

        if ($value !== null) {
            $this->setValue($value);
        }
        Requirements::javascript('resources/mademedia/silverstripe-cloudinary/client/dist/js/vendor.js');
        Requirements::javascript('resources/mademedia/silverstripe-cloudinary/client/dist/js/bundle.js');
        Requirements::css('resources/mademedia/silverstripe-cloudinary/client/dist/styles/bundle.css');
    }

    protected function createFields($name)
    {
        return [
            TextField::create(sprintf('[%s]URL', $name), 'URL'),
            TextField::create(sprintf('[%s]Title', $name), 'Title'),
        ];
    }

    public function extraClass()
    {
        /** @skipUpgrade */
        $classes = array(parent::extraClass(), strtolower(str_replace('\\', '-', get_class())));
        return implode(' ', $classes);
    }

    public function getDataValue()
    {
        return '{}';
    }

//     public function FieldList()
//     {
// // var_dump($this->getChildren());die();
//         return $this->getChildren();
//     }
}
