<?php

class CloudinaryVideo extends CloudinaryFile
{
    private static $db = array(
        'Duration' => 'Time'
    );

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->replaceField('Duration', TimeField::create('Length')->setInterval(1));
        return $fields;
    }

    public function getFrontEndFields($params = null) {
        $fields = parent::getFrontEndFields($params);
        $fields->replaceField('Duration', TimeField::create('Duration')->setInterval(1));
        return $fields;
    }
}
