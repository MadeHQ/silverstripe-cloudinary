<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\Forms\TextareaField;
use SilverStripe\ORM\FieldType\DBDatetime;
use SilverStripe\View\Requirements;
use SilverStripe\Core\Config\Config;

abstract class BaseField extends TextareaField
{
    /**
     * @config
     */
    private static $cloud_name = null;

    /**
     * @config
     */
    private static $api_key = null;

    /**
     * @config
     */
    private static $api_secret = null;

    /**
     * @config
     */
    private static $username = null;

    /**
     * @config
     */
    private static $default_max_files = 25;

    protected $resourceType = null;

    protected $isMultiple = false;

    protected $maxFiles = null;

    protected $buttonLabel = 'Choose Files';

    public function getAttributes()
    {
        $attributes = parent::getAttributes();

        $attributes['data-resource-type'] = $this->resourceType;

        $attributes['data-is-multiple'] = $this->getIsMultiple() ? 1 : 0;
        $attributes['data-button-label'] = $this->buttonLabel;
        $attributes['data-max-files'] = $this->getMaxFiles();

        return $attributes;
    }

    public function Field($properties = array())
    {
        $cloudName = Config::inst()->get('MadeHQ\\Cloudinary', 'cloud_name');
        $apiKey = Config::inst()->get('MadeHQ\\Cloudinary', 'api_key');
        $apiSecret = Config::inst()->get('MadeHQ\\Cloudinary', 'api_secret');
        $username = Config::inst()->get('MadeHQ\\Cloudinary', 'username');

        $timestamp = DBDatetime::now()->getTimestamp();

        $signature = hash('sha256', sprintf(
            'cloud_name=%s&timestamp=%s&username=%s%s', $cloudName, $timestamp, $username, $apiSecret
        ));

        $options = [
            'cloud_name' => $cloudName,
            'api_key' => $apiKey,
            'username' => $username,
            'timestamp' => $timestamp,
            'signature' => $signature,
        ];

        $script = sprintf('const CLOUDINARY_CONFIG = %s;', json_encode($options));

        Requirements::customScript($script, self::class);

        return parent::Field($properties);
    }

    protected function setupDefaultClasses()
    {
        parent::setupDefaultClasses();

        $this->addExtraClass('stacked');
    }

    protected function setIsMultiple($isMultiple)
    {
        $this->isMultiple = $isMultiple;

        return $this;
    }

    protected function getIsMultiple()
    {
        return $this->isMultiple;
    }

    public function setMaxFiles($maxFiles)
    {
        $this->maxFiles = $maxFiles;

        return $this;
    }

    public function getMaxFiles()
    {
        return $this->maxFiles ?: static::config()->get('default_max_files');
    }

    public function getResourceType()
    {
        return $this->resourceType;
    }
}
