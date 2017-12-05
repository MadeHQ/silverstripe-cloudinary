<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataObjectInterface;

class Image extends File
{
    const RESOURCE_TYPE = 'image';

    public function DataValue()
    {
        return json_encode([
            'secure_url' => $this->getUrlField()->dataValue(),
            'caption' =>  $this->getCaptionField()->dataValue(),
            'credit' =>  $this->getCreditField()->dataValue(),
            'gravity' =>  $this->getGravityField()->dataValue(),
        ]);
    }

    public function saveInto(DataObjectInterface $record)
    {
        $dbField = $record->getComponent($this->getName());
        $dbField->setCastedField('URL', $this->getUrlField()->dataValue());
        $dbField->setCastedField('Caption', $this->getCaptionField()->dataValue());
        $dbField->setCastedField('Credit', $this->getCreditField()->dataValue());
        $dbField->setCastedField('Gravity', $this->getGravityField()->dataValue());
        $dbField->write();
        $record->setField($this->getName() . 'ID', $dbField->ID);
    }

    public function setValue($value, $data = null)
    {
        if ($value) {
            $this->getUrlField()->setValue(@$value['URL']);
            $this->getCaptionField()->setValue(@$value['Caption']);
            $this->getCreditField()->setValue(@$value['Credit']);
            $this->getGravityField()->setValue(@$value['Gravity']);
        } elseif (is_object($data) && $data->hasMethod('getComponent')) {
            $data = $data->getComponent($this->getName());
            $this->getUrlField()->setValue($data->URL);
            $this->getCaptionField()->setValue($data->Caption);
            $this->getCreditField()->setValue($data->Credit);
            $this->getGravityField()->setValue($data->Gravity);
        }
    }

    protected function getUrlField()
    {
        return $this->getChildren()->dataFieldByName(sprintf('[%s]URL', $this->getName()));
    }

    protected function getCaptionField()
    {
        return $this->getChildren()->dataFieldByName(sprintf('[%s]Caption', $this->getName()));
    }

    protected function getCreditField()
    {
        return $this->getChildren()->dataFieldByName(sprintf('[%s]Credit', $this->getName()));
    }

    protected function getGravityField()
    {
        return $this->getChildren()->dataFieldByName(sprintf('[%s]Gravity', $this->getName()));
    }

    protected function createFields($name)
    {
        return [
            TextField::create(sprintf('[%s]URL', $name), 'URL'),
            TextField::create(sprintf('[%s]Caption', $name), 'Caption'),
            TextField::create(sprintf('[%s]Credit', $name), 'Credit'),
            TextField::create(sprintf('[%s]Gravity', $name), 'Gravity'),
        ];
    }
}
