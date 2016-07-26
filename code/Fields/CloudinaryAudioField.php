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

        $captionField = $frontEndFields->fieldByName('Caption');
        $captionField
            ->setName($name . "[" . $captionField->getName() . "]")
            ->addExtraClass('_js-attribute');
        $this->children->push($captionField);
    }

    protected function getSubFields()
    {
        return array_merge(parent::getSubFields(), array('Duration', 'Caption'));
    }

    protected function updateFileBeforeSave(CloudinaryFile &$file, &$value = array(), DataObjectInterface &$record)
    {
        $file->Duration = $value['Duration'];
        $file->Caption = $value['Caption'];
        parent::updateFileBeforeSave($file, $value, $record);
    }
}
