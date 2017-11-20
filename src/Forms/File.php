<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\Forms\CompositeField;
use SilverStripe\Forms\TextField;
use SilverStripe\View\ArrayData;

class File extends CompositeField
{
    public function __construct($name, $title = null, $value = null)
    {
        $this->setName($name);
        parent::__construct($this->getFields());

        if ($title === null) {
            $this->title = self::name_to_label($name);
        } else {
            $this->title = $title;
        }

        if ($value !== null) {
            $this->setValue($value);
        }
    }

    protected function getFields()
    {
        return [
            TextField::create(sprintf('[%s]URL', $this->getName()), 'URL'),
            TextField::create(sprintf('[%s]Title', $this->getName()), 'Title'),
        ];
    }

    public function extraClass()
    {
        /** @skipUpgrade */
        $classes = array(parent::extraClass(), strtolower(str_replace('\\', '-', get_class())));
        return implode(' ', $classes);
    }

//     public function FieldList()
//     {
// // var_dump($this->getChildren());die();
//         return $this->getChildren();
//     }
}
