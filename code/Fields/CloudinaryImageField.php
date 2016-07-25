<?php

class CloudinaryImageField extends CloudinaryFileField
{
    public $FileType = 'Image';

    public function __construct($name, $title = null, $value = "", $form = null)
    {
        parent::__construct($name, $title, $value, $form);
        $file = singleton('CloudinaryImage');
        $frontEndFields = $file->getFrontEndFields();

        $gravityField = $frontEndFields->fieldByName('Gravity');
        $gravityField
            ->setName($name . "[" . $gravityField->getName() . "]")
            ->addExtraClass('_js-attribute');
        $this->children->push($gravityField);

        $captionField = $frontEndFields->fieldByName('Caption');
        $captionField
            ->setName($name . "[" . $captionField->getName() . "]")
            ->addExtraClass('_js-attribute');
        $this->children->push($captionField);

        $creditField = $frontEndFields->fieldByName('Credit');
        $creditField
            ->setName($name . "[" . $creditField->getName() . "]")
            ->addExtraClass('_js-attribute');
        $this->children->push($creditField);
    }

    protected function getSubFields()
    {
        return array_merge(parent::getSubFields(), array('Gravity'));
    }

    protected function updateFileBeforeSave(CloudinaryFile &$file, &$value = array(), DataObjectInterface &$record)
    {
        $file->Gravity = $value['Gravity'];
        $file->Caption = $value['Caption'];
        $file->Credit = $value['Credit'];
        parent::updateFileBeforeSave($file, $value, $record);
    }
}
