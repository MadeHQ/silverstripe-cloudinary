<?php

namespace MadeHQ\Cloudinary\Utils;

use Cloudinary\Cloudinary;
use Cloudinary\Configuration\Configuration;

class Helper
{
    /**
     * @var Cloudinary $cloudinary_instance
     */
    protected static $cloudinary_instance = null;

    /**
     * @return Cloudinary
     */
    public static function cloudinary()
    {
        if (static::$cloudinary_instance) {
            return static::$cloudinary_instance;
        }

        static::$cloudinary_instance = new Cloudinary(
            Configuration::instance()
        );

        return static::$cloudinary_instance;
    }

    /**
     * @param string $publicId
     * @param string $resourceType
     * @param array $options
     * @return array
     */
    public static function get_resource($publicId, $resourceType, array $options = [])
    {
        $defaultOptions = [
            'resource_type' => $resourceType,
            'colors' => true,
            'image_metadata' => true,
        ];

        if (is_array($options)) {
            $options = array_merge($defaultOptions, $options);
        } else {
            $options = $defaultOptions;
        }

        return static::cloudinary()->adminApi()->asset($publicId, $options)->getArrayCopy();
    }

    /**
     * @param string $publicId
     * @param string $resourceType
     * @return array
     */
    public static function get_processed_resource($publicId, $resourceType)
    {
        return static::process_resource(
            static::get_resource($publicId, $resourceType)
        );
    }

    /**
     * @param array $data
     * @return array
     */
    public static function process_resource($data)
    {
        $resourceType = $data['resource_type'];

        $return = [
            'asset_id' => $data['asset_id'],
            'public_id' => $data['public_id'],
            'name' => static::extract_name($data),
            'title' => static::extract_title($data),
            'description' => static::extract_description($data),
            'format' => static::determine_format($data),
            'resource_type' => $resourceType,
            'type' => $data['type'],
            'version' => $data['version'],
            'bytes' => $data['bytes'],
        ];

        if ($resourceType === 'video') {
            $isAudio = array_key_exists('is_audio', $data) && $data['is_audio'];

            $return['duration'] = $data['duration'];
            $return['actual_type'] = $isAudio ? 'audio' : 'video';
            $return['gravity'] = '';
            $return['transformations'] = null;

            if ($isAudio === false) {
                $return['width'] = $data['width'];
                $return['height'] = $data['height'];
            }
        } else if ($resourceType === 'image') {
            $return['credit'] = static::extract_credit($data);
            $return['top_colours'] = static::extract_top_colours($data);
            $return['actual_type'] = 'image';
            $return['gravity'] = '';
            $return['foreground_colour'] = null;
            $return['background_colour'] = null;
            $return['transformations'] = null;
            $return['width'] = $data['width'];
            $return['height'] = $data['height'];
        } else {
            $return['actual_type'] = 'raw';
        }

        return $return;
    }

    /**
     * @param array $data
     * @return array
     */
    public static function extract_top_colours($data)
    {
        if (!array_key_exists('colors', $data) || !is_array($data['colors'])) {
            return null;
        }

        $colours = $data['colors'];

        $colours = array_reduce($colours, function ($carry, $item) {
            list($colour, $predominance) = $item;

            array_push($carry, [
                'colour' => $colour,
                'predominance' => $predominance,
            ]);

            return $carry;
        }, []);

        return array_slice($colours, 0, 10);
    }

    /**
     * @param array $data
     * @return string
     */
    public static function extract_name($data)
    {
        if (array_key_exists('original_filename', $data) && !empty($data['original_filename'])) {
            return $data['original_filename'];
        }

        $publicId = $data['public_id'];

        $publicId = explode('/', $publicId);

        return end($publicId);
    }

    /**
     * @param array $data
     * @return string
     */
    public static function extract_title($data)
    {
        if (!array_key_exists('metadata', $data) || !is_array($data['metadata'])) {
            return '';
        }

        if (array_key_exists('title', $data['metadata'])) {
            return $data['metadata']['caption'];
        }

        return '';
    }

    /**
     * @param array $data
     * @return string
     */
    public static function extract_description($data)
    {
        if (array_key_exists('metadata', $data) && array_key_exists('description', $data['metadata'])) {
            if ($description = $data['metadata']['description']) {
                return $description;
            }
        }

        if (array_key_exists('context', $data) && array_key_exists('custom', $data['context']) && array_key_exists('caption', $data['context']['custom'])) {
            if ($description = $data['context']['custom']['caption']) {
                return $description;
            }
        }

        return '';
    }

    /**
     * @param array $data
     * @return string
     */
    public static function extract_credit($data)
    {
        if (array_key_exists('metadata', $data)) {
            if (array_key_exists('credit', $data['metadata'])) {
                if ($credit = $data['metadata']['credit']) {
                    return $credit;
                }
            }

            if (array_key_exists('copyright', $data['metadata'])) {
                if ($copyright = $data['metadata']['copyright']) {
                    return $copyright;
                }
            }
        }

        if (array_key_exists('image_metadata', $data)) {
            $fields = [
                'Copyright',
                'By-line',
                'Artist',
                'Creator',
                'XPAuthor',
            ];

            foreach ($fields as $field) {
                if (array_key_exists($field, $data['image_metadata'])) {
                    if ($value = $data['image_metadata'][$field]) {
                        return $value;
                    }
                }
            }
        }

        return '';
    }

    /**
     * @param array $data
     * @return string
     */
    public static function determine_format($data)
    {
        if ($extension = pathinfo($data['secure_url'], PATHINFO_EXTENSION)) {
            return $extension;
        }

        // @todo maybe add a fallback in case that fails?
        return null;
    }
}
