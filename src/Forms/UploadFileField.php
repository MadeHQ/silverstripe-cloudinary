<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\AssetAdmin\Forms\UploadField;

// use SilverStripe\ORM\ArrayList;
use SilverStripe\ORM\SS_List;
use SilverStripe\ORM\DataObjectInterface;

use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\FormField;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;

use SilverStripe\View\Requirements;

class UploadFileField extends FormField
{
    private $fields;

    public function __construct($name, $title = null, $value = null)
    {
        $uploadField = new UploadField(sprintf('%s[File]', $name), 'File');
        $this->fields = [
            $uploadField->setAllowedMaxFileNumber(1),
            TextField::create(sprintf('%s[Title]', $name), 'Title'),
            TextareaField::create(sprintf('%s[Description]', $name), 'Description'),
        ];

        parent::__construct($name, $title, $value);
        $this->setTemplate('UploadFileField');
    }

    public function addField(FormField $field)
    {
        array_push($this->fields, $field);
        return $this;
    }

    public function removeField($name)
    {
        foreach ($this->fields as $i => $field) {
            if ($field->getName() === sprintf('%s[%s]', $this->getName(), $name)) {
                array_splice($this->fields, $i, 1);
            }
        }
        return $this;
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
        $fields = $this->getFieldList();
        $fileField = $fields->dataFieldByName(sprintf('%s[File]', $this->getName()));
        foreach ($fields as $field) {
            if ($field->getName() === sprintf('%s[File]', $this->getName())) {
                $linkRecord->setCastedField('FileID', $field->dataValue()['Files'][0]);
            } else {
                $linkRecord->setCastedField(preg_replace('/^.*\[(\w+)\]$/', '$1', $field->getName()), $field->dataValue());
            }
        }
        $linkRecord->write(true, false, true);
        $record->{$this->getName() . 'ID'} = $linkRecord->ID;
    }

    public function setValue($value, $record = null)
    {
        if(empty($value) && $record) {
            if (($record instanceof DataObject) && $record->hasMethod($this->getName())) {
                $data = $record->{$this->getName()}();
                if($data && $data->exists()) {
                    $fields = $this->getFieldList();
                    foreach ($fields as $field) {
                        $fieldSubName = preg_replace('/^.+\[(\w+)\]$/', '$1', $field->getName());
                        if ($fieldSubName === 'File') {
                            $field->setValue($data->File());
                        } else {
                            $field->setValue($data->$fieldSubName);
                        }
                    }
                }
            }
        } elseif (!empty($value)) {
            // Load field values from Object
            $fields = $this->getFieldList();
            foreach ($fields as $field) {
                $fieldSubName = preg_replace('/^.+\[(\w+)\]$/', '$1', $field->getName());
                if ($fieldSubName === 'File') {
                    $field->setValue($value->File());
                } else {
                    $field->setValue($value->$fieldSubName);
                }
            }
        }
        return parent::setValue($value, $record);
    }

    public function setSubmittedValue($value, $data = NULL)
    {
        $fields = $this->getFieldList();
        if (!array_key_exists('File', $value)) {
            foreach ($fields as $field) {
                $field->setValue(false);
            }
        } else {
            foreach ($fields as $field) {
                $valueKey = preg_replace('/^.+\[(\w+)\]$$/', '$1', $field->getName());
                $field->setValue($value[$valueKey]);
            }
        }
    }

    public function isComposite()
    {
        return true;
    }
}
