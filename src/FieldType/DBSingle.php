<?php

namespace MadeHQ\Cloudinary\FieldType;

use Exception;
use Cloudinary;

abstract class DBSingle extends DBBase
{
    /**
     * @config
     */
    private static $transformations_map = [
        'a' => 'angle',
        'ac' => 'audio_codec',
        'af' => 'audio_frequency',
        'ar' => 'aspect_ratio',
        'b' => 'background',
        'bo' => 'border',
        'br' => 'bit_rate',
        'c' => 'crop',
        'co' => 'color',
        'cs' => 'color_space',
        'd' => 'default_image',
        'dl' => 'delay',
        'dn' => 'density',
        'dpr' => 'dpr',
        'du' => 'duration',
        'e' => 'effect',
        'eo' => 'end_offset',
        'f' => 'fetch_format',
        'fl' => 'flags',
        'fn' => 'custom_function',
        'fps' => 'fps',
        'g' => 'gravity',
        'h' => 'height',
        'ki' => 'keyframe_interval',
        'l' => 'overlay',
        'o' => 'opacity',
        'p' => 'prefix',
        'pg' => 'page',
        'q' => 'quality',
        'r' => 'radius',
        'so' => 'start_offset',
        'sp' => 'streaming_profile',
        't' => 'named_transformation',
        'u' => 'underlay',
        'vc' => 'video_codec',
        'vs' => 'video_sampling',
        'w' => 'width',
        'x' => 'x',
        'y' => 'y',
        'z' => 'zoom',
    ];

    private static $casting = [
        'PublicID' => 'Text',
        'URL' => 'Text',
        'Name' => 'Text',
        'Title' => 'Text',
        'Description' => 'Text',
        'Credit' => 'Text',
        'Format' => 'Text',
        'ResourceType' => 'Text',
        'ActualType' => 'Text',
    ];

    protected $defaultTransformationsKey = null;

    protected $transformationIndex = 0;

    protected $transformations = [];

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

    public function setValue($value, $record = null, $markChanged = true)
    {
        parent::setValue($value, $record, $markChanged);

        $json = $this->getJSON();

        if (!$json) {
            return $this;
        }

        if (property_exists($json, 'transformations') && is_string($json->transformations) && strlen($json->transformations)) {
            array_push(
                $this->transformations, $this->convertRawTransformation($json->transformations)
            );

            $this->transformationIndex++;
        }

        if (!$this->defaultTransformationsKey) {
            return $this;
        }

        $defaultTransformations = $this->getCloudinarySetting(
            $this->defaultTransformationsKey
        );

        if (empty($defaultTransformations)) {
            return $this;
        }

        array_push(
            $this->transformations, $defaultTransformations
        );

        return $this;
    }

    private function getTransformationIndex($transformationIndex = null)
    {
        if ((int) $transformationIndex) {
            return $transformationIndex;
        }

        return $this->transformationIndex;
    }

    private function getTransformations($transformationIndex = null)
    {
        $transformationIndex = $this->getTransformationIndex($transformationIndex);

        if (array_key_exists($transformationIndex, $this->transformations)) {
            return $this->transformations[$transformationIndex];
        }

        return [];
    }

    protected function AddTransformations(array $transformations, $transformationIndex = null)
    {
        $image = clone $this;

        $transformationIndex = $image->getTransformationIndex($transformationIndex);

        $originalTransformations = $image->getTransformations($transformationIndex);

        $image->transformations[$transformationIndex] = array_merge(
            $originalTransformations, $transformations
        );

        return $image;
    }

    protected function AddTransformation(/* string */ $transformation, $value, $transformationIndex = null)
    {
        return $this->AddTransformations([ $transformation => $value ], $transformationIndex);
    }

    protected function RemoveTransformations(array $transformations, $transformationIndex = null)
    {
        $image = clone $this;

        $transformationIndex = $image->getTransformationIndex($transformationIndex);

        $originalTransformations = $image->getTransformations($transformationIndex);

        $image->transformations[$transformationIndex] = array_filter($originalTransformations, function ($transformation) use ($transformations) {
            return in_array($transformation, $transformations) === false;
        }, ARRAY_FILTER_USE_KEY);

        return $image;
    }

    protected function RemoveTransformation($transformation, $transformationIndex = null)
    {
        return $this->RemoveTransformations([ $transformation ], $transformationIndex);
    }

    public function Reset()
    {
        $image = clone $this;

        $image->transformations = [];
        $image->transformationIndex = 0;

        return $image;
    }

    public function Transformation(/* string */ $transformation, $value, $transformationIndex = null)
    {
        return $this->AddTransformation($transformation, $value, $transformationIndex);
    }

    public function Remove($transformation, $transformationIndex = null)
    {
        return $this->RemoveTransformation($transformation, $transformationIndex);
    }

    public function RemoveEntirely($toRemove)
    {
        $image = clone $this;

        $image->transformations = array_map(function ($transformations) use ($toRemove) {
            return array_filter($transformations, function ($items) use ($toRemove) {
                return strtolower($toRemove) !== strtolower($items);
            }, ARRAY_FILTER_USE_KEY);
        }, $image->transformations);

        return $image;
    }

    public function Effect(/* string */ $effect, $transformationIndex = null)
    {
        return $this->AddTransformation('effect', $effect, $transformationIndex);
    }

    public function Chain()
    {
        $image = clone $this;

        $image->transformationIndex++;

        return $image;
    }

    public function PublicID()
    {
        return $this->getJSONValue('public_id');
    }

    public function URL()
    {
        return $this->getJSONValue('url');
    }

    public function Name()
    {
        return $this->getJSONValue('name');
    }

    public function Title()
    {
        return $this->getJSONValue('title');
    }

    public function Description()
    {
        return $this->getJSONValue('description');
    }

    public function Credit()
    {
        return $this->getJSONValue('credit');
    }

    public function Format()
    {
        return $this->getJSONValue('format');
    }

    public function ResourceType()
    {
        return $this->getJSONValue('resource_type');
    }

    public function ActualType()
    {
        return $this->getJSONValue('actual_type');
    }

    public function forTemplate()
    {
        $json = $this->getJSON();

        if (!$json) {
            return null;
        }

        $transformations = $this->transformations;

        $this->extend('onBeforeParseTransformations', $transformations);

        $this->parseTransformations($transformations);

        $this->extend('onAfterParseTransformations', $transformations);

        $options = [
            'secure' => true,
            'resource_type' => $json->resource_type,
            'transformation' => $transformations,
        ];

        $this->extend('onBeforeRender', $options);

        return Cloudinary::cloudinary_url($json->public_id, $options);
    }

    protected function parseTransformations(array &$transformations)
    {
        // Implemented on sub-classes if additional processing is required
    }

    protected function getTransformationName($abbr)
    {
        $map = static::config()->get('transformations_map') ?: [];

        if (array_key_exists($abbr, $map) === false) {
            throw new Exception('The transformation "' . $abbr . '" is not whitelisted in $transformations_map', 503);
        }

        return $map[$abbr];
    }

    protected function convertRawTransformation($transformation)
    {
        $transformation = explode(',', $transformation);

        return array_reduce($transformation, function ($carry, $item) {
            list($k, $v) = explode('_', $item);

            $k = $this->getTransformationName($k);

            $carry[$k] = $v;

            return $carry;
        }, []);
    }

    public function toMap()
    {
        return json_decode(json_encode($this->getJSON()), true);
    }
}
