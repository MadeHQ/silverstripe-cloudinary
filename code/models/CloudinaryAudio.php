<?php

class CloudinaryAudio extends CloudinaryFile
{
    private static $db = array(
        'Duration' => 'Time',
        'Composer' => 'Varchar(200)',
    );

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->replaceField('Duration', HTML5TimeField::create('Length')->setInterval(1));
        return $fields;
    }

    public function getFrontEndFields($params = null) {
        $fields = parent::getFrontEndFields($params);
        $fields->replaceField('Composer', TextField::create('Composer'));
        $fields->replaceField('Duration', HTML5TimeField::create('Duration')->setInterval(1));
        return $fields;
    }

    public function getTitle()
    {
        return parent::getTitle() ?: $this->Composer . ' - ' . $this->FileDescription;
    }
}
