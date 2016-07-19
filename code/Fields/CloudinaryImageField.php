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
        $gravityField->setName($name . "[" . $gravityField->getName() . "]");
        $this->children->push($gravityField);
    }

	protected function getSubFields()
	{
		return array_merge(parent::getSubFields(), array('Gravity'));
	}

    protected function updateFileBeforeSave(CloudinaryFile &$file, &$value = array(), DataObjectInterface &$record)
    {
        $file->Gravity = $value['Gravity'];
    }
}
