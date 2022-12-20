<?php

namespace MadeHQ\Cloudinary\Utils;

use DateInterval;
use DateTime;
use DateTimeZone;
use Cloudinary\Cloudinary;
use Cloudinary\Configuration\Configuration;
use SilverStripe\Control\HTTPResponse;

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
            'title' => static::extract_title($data) ?: static::extract_name($data),
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
            $return['gravity'] = $isAudio ? null : 'auto';
            $return['transformations'] = null;

            if ($isAudio === false) {
                $return['width'] = $data['width'];
                $return['height'] = $data['height'];
            }
        } else if ($resourceType === 'image') {
            $return['credit'] = static::extract_credit($data);
            $return['top_colours'] = static::extract_top_colours($data);
            $return['actual_type'] = 'image';
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
        if (!array_key_exists('context', $data) || !is_array($data['context'])) {
            return null;
        }

        if (!array_key_exists('custom', $data['context']) || !is_array($data['context']['custom'])) {
            return null;
        }

        if (array_key_exists('caption', $data['context']['custom'])) {
            return $data['context']['custom']['caption'];
        }

        return null;
    }

    /**
     * @param array $data
     * @return string
     */
    public static function extract_description($data)
    {
        if (!array_key_exists('context', $data) || !is_array($data['context'])) {
            return null;
        }

        if (!array_key_exists('custom', $data['context']) || !is_array($data['context']['custom'])) {
            return null;
        }

        if (array_key_exists('alt', $data['context']['custom'])) {
            return $data['context']['custom']['alt'];
        }

        return null;
    }

    /**
     * @param array $data
     * @return string
     */
    public static function extract_credit($data)
    {
        if ($credit = static::extract_custom_credit($data)) {
            return $credit;
        }

        if ($credit = static::extract_metadata_credit($data)) {
            return $credit;
        }

        return null;
    }

    /**
     * @param array $data
     * @return string
     */
    protected static function extract_custom_credit($data)
    {
        if (!array_key_exists('context', $data) || !is_array($data['context'])) {
            return null;
        }

        if (!array_key_exists('custom', $data['context']) || !is_array($data['context']['custom'])) {
            return null;
        }

        if (array_key_exists('alt', $data['context']['custom'])) {
            return $data['context']['custom']['credit'];
        }

        return null;
    }

    /**
     * @param array $data
     * @return string
     */
    protected static function extract_metadata_credit($data)
    {
        if (!array_key_exists('image_metadata', $data)) {
            return null;
        }

        $metadata = $data['image_metadata'];

        if (array_key_exists('Copyright', $metadata)) {
            return $metadata['Copyright'];
        }

        if (array_key_exists('By-line', $metadata)) {
            return $metadata['By-line'];
        }

        if (array_key_exists('Artist', $metadata)) {
            return $metadata['Artist'];
        }

        if (array_key_exists('Creator', $metadata)) {
            return $metadata['Creator'];
        }

        if (array_key_exists('XPAuthor', $metadata)) {
            return $metadata['XPAuthor'];
        }

        return null;
    }

    /**
     * @param array $data
     * @return string
     */
    public static function determine_format($data)
    {
        $url = $data['secure_url'];

        if ($extension = pathinfo($url, PATHINFO_EXTENSION)) {
            return $extension;
        }

        return null;
    }

    /**
     * @param array $data
     * @param int $status
     * @param int $ttl
     * @return HTTPResponse
     */
    public static function json($data, $status = 200, $ttl = 300)
    {
        $response = new HTTPResponse();

        $response->setBody(json_encode($data));

        $response->setStatusCode($status);

        $expire = new DateTime();
        $expire->add(new DateInterval('PT' . $ttl . 'S'));
        $expire->setTimezone(new DateTimeZone('UTC'));

        $response->addHeader('Content-Type', 'application/json; charset=utf-8')
            ->addHeader('Access-Control-Allow-Methods', 'GET')
            ->addHeader('Access-Control-Allow-Credentials', 'true')
            ->addHeader('Access-Control-Allow-Origin', '*')
            ->addHeader('Cache-Control', 'public, must-revalidate, stale-while-revalidate=86400, no-transform')
            ->addHeader('Expires', $expire->format('D, d M Y H:i:00 \G\M\T'))
            ->addHeader('Vary', 'Origin');

        return $response;
    }
}
