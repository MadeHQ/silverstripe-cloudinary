<?php

namespace MadeHQ\Cloudinary\FieldType;

use SilverStripe\ORM\FieldType\DBText;
use stdClass;

abstract class DBBase extends DBText
{
    protected $resourceType = null;

    protected $settings = null;

    protected $json = null;

    public function __construct($name = null, $options = [])
    {
        parent::__construct($name, $options);

        $this->settings = CLOUDINARY_CONFIG;

        return $this;
    }

    protected function getJSON()
    {
        if ($this->json) {
            return $this->json;
        }

        $this->json = @json_decode(
            $this->getValue(), false
        );

        return $this->json;
    }

    protected function setJSON(stdClass $json)
    {
        $this->json = $json;

        return $this;
    }

    protected function getCloudinarySetting($name)
    {
        if (array_key_exists($name, $this->settings) === false) {
            return null;
        }

        $setting = $this->settings[$name];

        if (empty($setting)) {
            return null;
        }

        return $setting;
    }
}
