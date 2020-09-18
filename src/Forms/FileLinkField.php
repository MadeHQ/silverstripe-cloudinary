<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\CompositeField;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\DataObjectInterface;
use SilverStripe\View\Requirements;

class FileLinkField extends CompositeField
{
    protected $fileTitle;

    public function __construct($name, $title = null)
    {
        Requirements::css('mademedia/silverstripe-cloudinary:client/dist/style.css');
        parent::__construct([]);
        $this->setName($name);
        $this->addExtraClass('form__file-link');

        if ($title === null) {
            $this->fileTitle = self::name_to_label($name);
        } else {
            $this->fileTitle = $title;
        }
    }

    public function setTitle($title)
    {
        $this->fileTitle = $title;
        return $this;
    }

    public function hasData()
    {
        return true;
    }

    public function FieldList()
    {
        if ($this->children->count()) {
            return $this->children;
        }
        $fieldName = $this->Name;
        $form = $this->getForm();
        $this->children = $form ? $this->getForm()->Record->{$this->getName()}()->getCMSFields() : parent::FieldList();
        $this->children->each(function ($field) use ($form, $fieldName) {
            $field->setForm($form);
            $field->setName(sprintf('%s[%s]', $fieldName, $field->getName()));
            if ($field instanceOf UploadField) {
                $field->setTitle($this->fileTitle);
            }
        });
        return $this->children;
    }

    public function saveInto(DataObjectInterface $record)
    {
        $relatedRecord = $record->{$this->Name}();
        $this->FieldList()->each(function ($field) use ($relatedRecord) {
            $subField = preg_replace('/.+\[(\w+)]/', '$1', $field->Name);
            if ($field instanceof UploadField) {
                $ids = $field->ItemIDs;
                $relatedRecord->setCastedField($subField, array_pop($ids));
            } else {
                $relatedRecord->setCastedField($subField, $field->dataValue());
            }
        });
        $this->extend('saveIntoBeforeWrite', $record, $relatedRecord);
        $relatedRecord->write();
        $record->{$this->Name . 'ID'} = $relatedRecord->ID;
        $this->extend('saveIntoAfterWrite', $record, $relatedRecord);
    }

    public function setSubmittedValue($value, $data = NULL)
    {
        $fields = $this->FieldList();
        foreach ($fields as $field) {
            $subField = preg_replace('/.+\[(\w+)]/', '$1', $field->Name);
            $field->setValue(array_key_exists($subField, $value) ? $value[$subField] : null);
        }
    }

    public function setValue($value, $record = null)
    {
        if ($value) {
            if ($value instanceof DataObject) {
                $subRecord = $record->{$this->Name};
                $this->FieldList()->each(function ($field) use ($value, $subRecord) {
                    $subField = preg_replace('/.+\[(\w+)]/', '$1', $field->Name);
                    switch ($subRecord->getRelationType($subField)) {
                        case 'has_one':
                            $field->setValue($value->$subField());
                            break;
                        default:
                            $field->setValue($value->$subField);
                            break;
                    }
                });
            }
        }
    }
}