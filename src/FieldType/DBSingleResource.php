<?php

namespace MadeHQ\Cloudinary\FieldType;

use SilverStripe\Core\Convert;
use Cloudinary\Asset\File;
use Cloudinary\Asset\Image;
use Cloudinary\Asset\Media;
use Cloudinary\Transformation\CommonTransformation;

abstract class DBSingleResource extends DBBaseResource
{
    /**
     * @config
     * @var array $retain_transformations
     */
    private static $retain_transformations = [
    ];

    /**
     * @config
     * @var array
     */
    private static $casting = [
        'PublicID' => 'Text',
        'Name' => 'Text',
        'Title' => 'Text',
        'Description' => 'Text',
        'Credit' => 'Text',
        'Format' => 'Text',
        'ResourceType' => 'Text',
        'ActualType' => 'Text',
        'FileSize' => 'Int',
        'FriendlyFileSize' => 'Text',
    ];

    /**
     * @return static
     */
    protected function clone()
    {
        $clone = clone $this;

        if ($this->asset) {
            $resourceType = $this->getResourceType();

            if ($resourceType === 'image') {
                $clone->asset = new Image($this->asset);
            } else if ($resourceType === 'video') {
                $clone->asset = new Media($this->asset);
            } else {
                $clone->asset = new File($this->asset);
            }
        }

        return $clone;
    }

    /**
     * @return mixed
     */
    protected function getJSONValue($property)
    {
        $json = $this->getJSON();

        if (!$json) {
            return null;
        }

        if (property_exists($json, $property)) {
            return $json->{$property};
        }

        return null;
    }

    /**
     * {@inheritdoc}
     */
    public function setValue($value, $record = null, $markChanged = true)
    {
        parent::setValue($value, $record, $markChanged);

        $json = $this->getJSON();

        if (!$json) {
            return $this;
        }

        $resourceType = $this->getResourceType();
        $publicId = $this->getPublicID();
        $version = $this->getVersion();

        if ($resourceType === 'image') {
            $this->asset = static::cloudinary()->image($publicId)->version($version);
        } else if ($resourceType === 'video') {
            $this->asset = static::cloudinary()->video($publicId)->version($version);
        } else {
            $this->asset = static::cloudinary()->raw($publicId)->version($version);
        }

        $retainTransformations = static::config()->get('retain_transformations');

        if (empty($retainTransformations)) {
            return $this;
        }

        $transformations = [];

        if (property_exists($json, 'transformations') && is_string($json->transformations) && strlen($json->transformations)) {
            $transformations = $this->convertRawTransformations($json->transformations);

            $transformations = array_filter($transformations, function ($transformation) use ($retainTransformations) {
                return in_array($transformation, $retainTransformations);
            }, ARRAY_FILTER_USE_KEY);

            $transformations = CommonTransformation::fromParams($transformations);
        }

        if (($resourceType === 'image' || $resourceType === 'video') && $transformations !== null) {
            $this->asset->setTransformation($transformations);
        }

        return $this;
    }

    /**
     * @return string
     */
    public function getPublicID()
    {
        return $this->getJSONValue('public_id');
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->getJSONValue('name');
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->getJSONValue('title') ?: $this->getName();
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->getJSONValue('description');
    }

    /**
     * @return string
     */
    public function getFormat()
    {
        return $this->getJSONValue('format');
    }

    /**
     * @return string
     */
    public function getResourceType()
    {
        return $this->getJSONValue('resource_type');
    }

    /**
     * @return string
     */
    public function getActualType()
    {
        return $this->getJSONValue('actual_type');
    }

    /**
     * @return string
     */
    public function getVersion()
    {
        return $this->getJSONValue('version');
    }

    /**
     * @return string
     */
    public function getFileSize()
    {
        return $this->getJSONValue('bytes');
    }

    /**
     * @return string
     */
    public function getFriendlyFileSize()
    {
        return Convert::bytes2memstring($this->getFileSize());
    }

    /**
     * @return string
     */
    public function getURL()
    {
        return (string) $this->forTemplate();
    }

    /**
     * @{inheritdoc}
     */
    public function forTemplate()
    {
        $asset = $this->asset;

        $this->extend('onBeforeRender', $asset);

        return $asset->toUrl();
    }
}
