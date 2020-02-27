<?php

class CloudinaryImageField extends CloudinaryFileField
{
    public $FileType = 'Image';

    protected $hidden_fields = array('Width', 'Height', 'FileTitle');

    public function __construct($name, $title = null, $value = "", $form = null)
    {
        parent::__construct($name, $title, $value, $form);
        $file = singleton('CloudinaryImage');
        $frontEndFields = $file->getFrontEndFields();
        $hiddenFields = $this->getHiddenFields();

        $children = $this->getChildren();

        foreach ($frontEndFields as $frontEndField) {
            $fieldName = $frontEndField->getName();
            $newName = $name . "[" . $fieldName . "]";

            if ($found = $children->find('Name', $newName)) {
                if (in_array($fieldName, $hiddenFields)) {
                    $found->HiddenFileField = true;
                }
                continue;
            }

            if (in_array($fieldName, $hiddenFields)) {
                $frontEndField->HiddenFileField = true;
            }
            $frontEndField
                ->setName($newName)
                ->addExtraClass('_js-attribute');
            $this->children->push($frontEndField);

        }

    }

    public function getHiddenFields()
    {
        return $this->hidden_fields;
    }

    public function setHiddenFields($fields)
    {
        $this->hidden_fields = $fields;
        return $this;
    }

    protected function getSubFields()
    {
        $fields = array_merge(parent::getSubFields(), array('Gravity'));
        $this->extend('updateSubFields', $fields);
        return $fields;
    }

    protected function updateFileBeforeSave(CloudinaryFile &$file, &$value = array(), DataObjectInterface &$record)
    {
        $file->Gravity = $value['Gravity'];
        $file->Caption = $value['Caption'];
        $file->Credit = $value['Credit'];
        $file->Width = $value['Width'];
        $file->Height = $value['Height'];
        parent::updateFileBeforeSave($file, $value, $record);
    }
}
