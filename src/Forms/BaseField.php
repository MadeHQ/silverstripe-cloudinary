<?php

namespace MadeHQ\Cloudinary\Forms;

use Exception;
use SilverStripe\Forms\TextareaField;
use SilverStripe\ORM\FieldType\DBDatetime;
use SilverStripe\View\Requirements;
use SilverStripe\Core\Config\Config;

abstract class BaseField extends TextareaField
{
    /**
     * @var string FIELD_TITLE
     */
    const FIELD_TITLE = 'title';

    /**
     * @var string FIELD_DESCRIPTION
     */
    const FIELD_DESCRIPTION = 'description';

    /**
     * @var string FIELD_CREDIT
     */
    const FIELD_CREDIT = 'credit';

    /**
     * @var string FIELD_GRAVITY
     */
    const FIELD_GRAVITY = 'gravity';

    /**
     * @var string FIELD_FG_COLOUR
     */
    const FIELD_FG_COLOUR = 'fg-colour';

    /**
     * @var string FIELD_BG_COLOUR
     */
    const FIELD_BG_COLOUR = 'bg-colour';

    /**
     * @config
     * @var int $default_max_files
     */
    private static $default_max_files = 25;

    /**
     * @config
     * @var int $fallback_max_files
     */
    private static $fallback_max_files = 25;

    /**
     * @config
     * @var array $gravity_options
     */
    private static $default_gravity_options = [];

    /**
     * @config
     * @var array $default_gravity_options
     */
    private static $fallback_gravity_options = [];

    /**
     * @config
     * @var array $default_fields
     */
    private static $default_fields = [];

    /**
     * @config
     * @var array $default_fields
     */
    private static $fallback_fields = [];

    /**
     * @var string $resourceType
     */
    protected $resourceType = null;

    /**
     * @var boolean $isMultiple
     */
    protected $isMultiple = false;

    /**
     * @var int $maxFiles
     */
    protected $maxFiles = 10;

    /**
     * @var string $buttonLabelSingular
     */
    protected $buttonLabelSingular = 'Choose File';

    /**
     * @var string $buttonLabelPlural
     */
    protected $buttonLabelPlural = 'Choose Files';

    /**
     * @var array $fields
     */
    protected $fields = null;

    /**
     * @var array $gravityOptions
     */
    protected $gravityOptions = [];

    /**
     * @return array
     */
    public function getAttributes()
    {
        $attributes = parent::getAttributes();

        $attributes['data-resource-type'] = $this->resourceType;

        $attributes['data-is-multiple'] = $this->isMultiple ? 1 : 0;
        $attributes['data-button-label'] = $this->getButtonLabel();
        $attributes['data-max-files'] = $this->getMaxFiles();
        $attributes['data-fields'] = implode(',', $this->getFields());
        $attributes['data-gravity-options'] = $this->getGravityOptions();

        return $attributes;
    }

    /**
     * {@inheritdoc}
     */
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

    /**
     * {@inheritdoc}
     */
    protected function setupDefaultClasses()
    {
        parent::setupDefaultClasses();

        $this->addExtraClass('stacked');
    }

    /**
     * @param boolean $isMultiple
     * @return $this
     */
    public function setMultiple($isMultiple)
    {
        $this->isMultiple = $isMultiple;

        return $this;
    }

    /**
     * @param int $maxFiles
     * @return $this
     */
    public function setMaxFiles($maxFiles)
    {
        $this->maxFiles = $maxFiles;

        return $this;
    }

    /**
     * @return int
     */
    public function getMaxFiles()
    {
        $maxFiles = $this->maxFiles;

        if ($maxFiles) {
            $maxFiles = static::config()->get('default_max_files');
        }

        if ($maxFiles) {
            $maxFiles = static::config()->get('fallback_max_files');
        }

        return $maxFiles;
    }

    /**
     * @param string $label
     * @return $this
     */
    public function setButtonLabelSingular($label)
    {
        $this->buttonLabelSingular = $label;

        return $this;
    }

    /**
     * @param string $label
     * @return $this
     */
    public function setButtonLabelPlural($label)
    {
        $this->buttonLabelPlural = $label;

        return $this;
    }

    /**
     * @return string
     */
    public function getButtonLabel()
    {
        return $this->isMultiple ? $this->buttonLabelPlural : $this->buttonLabelSingular;
    }

    /**
     * @return string
     */
    public function getResourceType()
    {
        return $this->resourceType;
    }

    /**
     * @param array $fields
     * @return $this
     * @throws Exception
     */
    public function setFields($fields)
    {
        $validFields = [
            static::FIELD_TITLE, static::FIELD_DESCRIPTION
        ];

        if ($this instanceof ImageField) {
            $validFields = [
                static::FIELD_TITLE, static::FIELD_DESCRIPTION, static::FIELD_CREDIT, static::FIELD_GRAVITY, static::FIELD_FG_COLOUR, static::FIELD_BG_COLOUR
            ];
        } else if ($this instanceof MediaField) {
            $validFields = [
                static::FIELD_TITLE, static::FIELD_DESCRIPTION, static::FIELD_CREDIT, static::FIELD_GRAVITY
            ];
        }

        foreach ($fields as $field) {
            if (in_array($field, $validFields) === false) {
                throw new Exception(
                    sprintf('"%s" is not a supported field for %s', $field, static::class)
                );
            }
        }

        $this->fields = $fields;

        return $this;
    }

    /**
     * @return array
     */
    public function getFields()
    {
        $fields = $this->fields;

        if (empty($fields)) {
            $fields = static::config()->get('default_fields');
        }

        if (empty($fields)) {
            $fields = static::config()->get('fallback_fields');
        }

        return $fields;
    }

    /**
     * @return array
     */
    public function getGravityOptions()
    {
        $options = static::config()->get('default_gravity_options');

        if (empty($options)) {
            $options = static::config()->get('fallback_gravity_options');
        }

        return $options;
    }
}
