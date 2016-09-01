<?php

class CloudinaryAudioField extends CloudinaryFileField
{
	public $FileType = 'Audio';

    public function __construct($name, $title = null, $value = "", $form = null)
    {
        parent::__construct($name, $title, $value, $form);
        $file = singleton('CloudinaryAudio');
        $frontEndFields = $file->getFrontEndFields();

        $lengthField = $frontEndFields->fieldByName('Duration');
        $lengthField
            ->setName($name . "[" . $lengthField->getName() . "]")
            ->addExtraClass('_js-attribute')
            // ->setInterval(2)
            ->setConfig('timeformat', 'HH:mm:ss');
        $this->children->push($lengthField);

        $captionField = $frontEndFields->fieldByName('Composer');
        $captionField
            ->setName($name . "[" . $captionField->getName() . "]")
            ->addExtraClass('_js-attribute');

        $this->children->push($captionField);
        $this->getChildren()->dataFieldByName($name . '[FileTitle]')->HiddenFileField = true;
        $this->getChildren()->dataFieldByName($name . '[FileDescription]')->HiddenFileField = false;
    }

    protected function getSubFields()
    {
        return array_merge(parent::getSubFields(), array('Duration', 'Caption'));
    }

    protected function updateFileBeforeSave(CloudinaryFile &$file, &$value = array(), DataObjectInterface &$record)
    {
        $file->Duration = $value['Duration'];
        $file->Composer = $value['Composer'];
        parent::updateFileBeforeSave($file, $value, $record);
    }
}
