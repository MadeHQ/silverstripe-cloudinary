<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\Forms\CompositeField;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataObjectInterface;
use SilverStripe\View\Requirements;

class File extends CompositeField
{
    const RESOURCE_TYPE = 'file';

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

    public function getFieldType()
    {
        return static::RESOURCE_TYPE;
    }

    public function extraClass()
    {
        /** @skipUpgrade */
        $classes = array(parent::extraClass(), strtolower(str_replace('\\', '-', get_class())));
        return implode(' ', $classes);
    }

    public function DataValue()
    {
        return json_encode([
            'secure_url' => $this->getUrlField()->dataValue(),
            'title' =>  $this->getTitleField()->dataValue(),
        ]);
    }

    public function saveInto(DataObjectInterface $record)
    {
        $dbField = $record->getComponent($this->getName());
        $dbField->setCastedField('URL', $this->getUrlField()->dataValue());
        $dbField->setCastedField('Title', $this->getTitleField()->dataValue());
// var_dump($dbField);die();
        $dbField->write();
        $record->setField($this->getName() . 'ID', $dbField->ID);
    }

    /**
     * This is required so as to handle the saving of the data
     */
    public function hasData()
    {
        return true;
    }

    public function setValue($value, $data = null)
    {
        if ($value) {
            $this->getUrlField()->setValue(@$value['URL']);
            $this->getTitleField()->setValue(@$value['Title']);
// var_dump(
//     $value,
//     $this->getUrlField(),
//     $this->getTitleField()
// );
        } elseif (is_object($data) && $data->hasMethod('getComponent')) {
            $data = $data->getComponent($this->getName());
            $this->getUrlField()->setValue($data->URL);
            $this->getTitleField()->setValue($data->Title);
        }
    }

    protected function getUrlField()
    {
        return $this->getChildren()->dataFieldByName(sprintf('[%s]URL', $this->getName()));
    }

    protected function getTitleField()
    {
        return $this->getChildren()->dataFieldByName(sprintf('[%s]Title', $this->getName()));
    }

    protected function createFields($name)
    {
        return [
            TextField::create(sprintf('[%s]URL', $name), 'URL'),
            TextField::create(sprintf('[%s]Title', $name), 'Title'),
        ];
    }
}
