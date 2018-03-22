<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Core\Config\Config;

// use SilverStripe\ORM\ArrayList;
use SilverStripe\ORM\SS_List;
use SilverStripe\ORM\DataObjectInterface;

use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\FormField;
use SilverStripe\Forms\DropdownField;
use SilverStripe\Forms\HiddenField;
use SilverStripe\Forms\TextField;

use SilverStripe\View\Requirements;

class UploadImageField extends FormField
{
    private $fields;

    private static $gravities = [
        'auto' => 'Auto',
        'center' => 'Center',
        'faces' => 'Faces',
        'north' => 'Top',
        'north_east' => 'Top right',
        'east' => 'Right',
        'south_east' => 'Bottom right',
        'south' => 'Bottom',
        'south_west' => 'Bottom left',
        'west' => 'Left',
        'north_west' => 'Top left',
    ];

    public function __construct($name, $title = null, $value = null)
    {
        $gravities = Config::inst()->get(get_class(), 'gravities');
        $uploadField = new UploadField(sprintf('%s[Image]', $name), 'Image');
        $this->fields = [
            $uploadField->setAllowedMaxFileNumber(1),
            TextField::create(sprintf('%s[Title]', $name), 'Title'),
            TextField::create(sprintf('%s[Alt]', $name), 'Alt'),
            DropdownField::create(sprintf('%s[Gravity]', $name), 'Gravity', $gravities)
        ];

        Requirements::javascript('resources/mademedia/silverstripe-cloudinary/client/dist/js/bundle.js');
        Requirements::css('resources/mademedia/silverstripe-cloudinary/client/dist/styles/bundle.css');
        parent::__construct($name, $title, $value);
        $this->setTemplate('UploadImageField');
    }

    public function getFieldList()
    {
        return new FieldList($this->fields);
    }

    public function setForm($form)
    {
        foreach ($this->fields as $field) {
            $field->setForm($form);
        }
        parent::setForm($form);
    }

    /**
     * @inheritdoc
     */
    public function saveInto(DataObjectInterface $record)
    {
        $linkRecord = $record->{$this->getName()}();
        foreach ($this->getFieldList() as $field) {
            if ($field->getName() === sprintf('%s[Image]', $this->getName())) {
                $linkRecord->FileID = $field->dataValue()['Files'][0];
            } else {
                $linkRecord->setCastedField(preg_replace('/^.*\[(\w+)\]$/', '$1', $field->getName()), $field->dataValue());
            }
        }
        $r = $linkRecord->write();
    }

    public function setValue($value, $record = null)
    {
        if(empty($value) && $record) {
            if (($record instanceof DataObject) && $record->hasMethod($this->getName())) {
                $data = $record->{$this->getName()}();
                if($data && $data->exists()) {
                    $fields = $this->getFieldList();
                    $fields->dataFieldByName(sprintf('%s[Image]', $this->name))->setValue($data->Image());
                    $fields->dataFieldByName(sprintf('%s[Title]', $this->name))->setValue($data->Title);
                    $fields->dataFieldByName(sprintf('%s[Alt]', $this->name))->setValue($data->Alt);
                    $fields->dataFieldByName(sprintf('%s[Gravity]', $this->name))->setValue($data->Gravity);
                }
            }
        } elseif (!empty($value)) {
            // Load field values from Object
            $fields = $this->getFieldList();
            $fields->dataFieldByName(sprintf('%s[Image]', $this->name))->setValue($value->File());
            $fields->dataFieldByName(sprintf('%s[Title]', $this->name))->setValue($value->Title);
            $fields->dataFieldByName(sprintf('%s[Alt]', $this->name))->setValue($value->Alt);
            $fields->dataFieldByName(sprintf('%s[Gravity]', $this->name))->setValue($value->Gravity);
        }
        return parent::setValue($value, $record);
    }

    public function setSubmittedValue($value, $data = NULL)
    {
        $fields = $this->getFieldList();
        foreach ($value as $key => $val) {
            $fields->dataFieldByName(sprintf('%s[%s]', $this->name, $key))->setValue($val);
        }
    }

    public function isComposite()
    {
        return true;
    }
}
