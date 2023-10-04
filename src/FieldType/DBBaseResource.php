<?php

namespace MadeHQ\Cloudinary\FieldType;

use stdClass;
use Exception;
use SilverStripe\ORM\FieldType\DBText;
use Cloudinary\Asset\Image;
use Cloudinary\Asset\Video;
use Cloudinary\Asset\File;

abstract class DBBaseResource extends DBText
{
    /**
     * @config
     * @var array $transformations_map
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

    /**
     * @var array $json
     */
    protected $json = null;

    /**
     * @var Image|Video|File $asset
     */
    protected $asset = null;

    /**
     * @return stdClass
     */
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

    /**
     * @param stdClass $json
     * @return $this
     */
    protected function setJSON(stdClass $json)
    {
        $this->json = $json;

        $this->setValue(json_encode($json));

        return $this;
    }

    /**
     * @param string $transformation
     * @return array
     */
    protected function convertRawTransformations($transformation)
    {
        $transformation = explode(',', $transformation);

        return array_reduce($transformation, function ($carry, $item) {
            list($k, $v) = explode('_', $item);

            $k = $this->getTransformationName($k);

            $carry[$k] = $v;

            return $carry;
        }, []);
    }

    /**
     * @param string $abbr
     * @return string
     */
    protected function getTransformationName($abbr)
    {
        $map = static::config()->get('transformations_map') ?: [];

        if (array_key_exists($abbr, $map) === false) {
            throw new Exception('The transformation "' . $abbr . '" is not whitelisted in $transformations_map', 503);
        }

        return $map[$abbr];
    }
}
