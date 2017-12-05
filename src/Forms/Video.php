<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TimeField;
use SilverStripe\ORM\DataObjectInterface;

class Video extends File
{
    const RESOURCE_TYPE = 'video';

    public function DataValue()
    {
        return json_encode([
            'secure_url' => $this->getUrlField()->dataValue(),
            'title' =>  $this->getTitleField()->dataValue(),
            'duration' =>  $this->getDurationField()->dataValue(),
        ]);
    }

    public function saveInto(DataObjectInterface $record)
    {
        $dbField = $record->getComponent($this->getName());
        $dbField->setCastedField('URL', $this->getUrlField()->dataValue());
        $dbField->setCastedField('Title', $this->getTitleField()->dataValue());
        $dbField->setCastedField('Duration', $this->getDurationField()->dataValue());
        $dbField->write();
        $record->setField($this->getName() . 'ID', $dbField->ID);
    }

    public function setValue($value, $data = null)
    {
        if ($value) {
            $this->getUrlField()->setValue(@$value['URL']);
            $this->getTitleField()->setValue(@$value['Title']);
            $this->getDurationField()->setValue(@$value['Duration']);
        } elseif (is_object($data) && $data->hasMethod('getComponent')) {
            $data = $data->getComponent($this->getName());
            $this->getUrlField()->setValue($data->URL);
            $this->getTitleField()->setValue($data->Title);
            $this->getDurationField()->setValue($data->Duration);
        }
    }

    protected function getDurationField()
    {
        return $this->getChildren()->dataFieldByName(sprintf('[%s]Duration', $this->getName()));
    }

    protected function getTitleField()
    {
        return $this->getChildren()->dataFieldByName(sprintf('[%s]Title', $this->getName()));
    }

    protected function createFields($name)
    {
        return [
            TextField::create(sprintf('[%s]URL', $name), 'URL'),
            TextField::create(sprintf('[%s]Title', $name), 'Title'),
            TimeField::create(sprintf('[%s]Duration', $name), 'Duration'),
        ];
    }
}
