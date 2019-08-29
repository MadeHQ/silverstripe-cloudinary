<?php

namespace MadeHQ\Cloudinary\Controllers;

use SilverStripe\Control\RequestHandler;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Control\HTTPResponse_Exception;
use SilverStripe\Security\Security;
use Cloudinary\Api as CloudinaryAPI;
use DateTime;
use DateInterval;
use DateTimeZone;

class API extends RequestHandler
{
    private static $allowed_actions = [
        'resource',
    ];

    protected static $api_instance = null;

    public function __construct()
    {
        parent::__construct();

        $user = Security::getCurrentUser();

        if ($user === null) {
            throw new HTTPResponse_Exception('Must be logged in', 401);
        }
    }

    protected static function api()
    {
        if (static::$api_instance) {
            return static::$api_instance;
        }

        static::$api_instance = new CloudinaryAPI();

        return static::$api_instance;
    }

    public function resource(HTTPRequest $request)
    {
        $publicId = $request->requestVar('public_id');
        $resourceType = $request->requestVar('resource_type');

        if (!$publicId || !$resourceType) {
            return $this->httpError(400);
        }

        $response = static::api()->resource($publicId, [
            'resource_type' => $resourceType,
            'colors' => true,
            'image_metadata' => true,
        ])->getArrayCopy();

        $return = $this->processResource($response);

        return $this->json($return);
    }

    protected function processResource($data)
    {
        $resourceType = $data['resource_type'];

        $return = [
            'public_id' => $data['public_id'],
            'url' => $data['secure_url'],
            'name' => $this->extractName($data),
            'title' => $this->extractTitle($data),
            'description' => $this->extractDescription($data),
            'credit' => null,
            'format' => $this->determineFormat($data),
            'resource_type' => $resourceType,
            'type' => $data['type'],
        ];

        if ($resourceType === 'video') {
            $return['duration'] = $data['duration'];
            $return['actual_type'] = array_key_exists('is_audio', $data) && $data['is_audio'] ? 'audio' : 'video';
        } else if ($resourceType === 'image') {
            $return['credit'] = $this->extractCredit($data);
            $return['top_colours'] = $this->extractTopColours($data);
            $return['predominant_colours'] = $this->extractPredominantColours($data);
            $return['actual_type'] = 'image';
        } else {
            $return['actual_type'] = 'raw';
        }

        $this->extend('updateResourceData', $return, $data);

        return $return;
    }

    protected function extractTopColours($data)
    {
        if (!array_key_exists('colors', $data) || !is_array($data['colors'])) {
            return null;
        }

        $colours = $data['colors'];

        $colours = array_reduce($colours, function ($carry, $item) {
            list($colour, $prominence) = $item;

            array_push($carry, [
                'colour' => $colour,
                'prominence' => $prominence,
            ]);

            return $carry;
        }, []);

        return array_slice($colours, 0, 10);
    }

    protected function extractPredominantColours($data)
    {
        if (!array_key_exists('predominant', $data) || !is_array($data['predominant'])) {
            return null;
        }

        $predominant = $data['predominant'];

        $colours = [];

        if (array_key_exists('google', $predominant)) {
            $google = $predominant['google'];

            $google = array_reduce($google, function ($carry, $item) {
                list($colour, $prominence) = $item;

                array_push($carry, [
                    'colour' => $colour,
                    'prominence' => $prominence,
                ]);

                return $carry;
            }, []);

            $colours['google'] = array_slice($google, 0, 5);
        }

        if (array_key_exists('cloudinary', $predominant)) {
            $cloudinary = $predominant['cloudinary'];

            $cloudinary = array_reduce($cloudinary, function ($carry, $item) {
                list($colour, $prominence) = $item;

                array_push($carry, [
                    'colour' => $colour,
                    'prominence' => $prominence,
                ]);

                return $carry;
            }, []);

            $colours['cloudinary'] = array_slice($cloudinary, 0, 5);
        }

        return $colours;
    }

    protected function extractName($data)
    {
        if (array_key_exists('original_filename', $data) && !empty($data['original_filename'])) {
            return $data['original_filename'];
        }

        $publicId = $data['public_id'];

        $publicId = explode('/', $publicId);

        return end($publicId);
    }

    protected function extractTitle($data)
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

    protected function extractDescription($data)
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

    protected function extractCredit($data)
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

    protected function determineFormat($data)
    {
        $url = $data['secure_url'];

        if ($extension = pathinfo($url, PATHINFO_EXTENSION)) {
            return $extension;
        }

		return null;
    }

    protected function json($data, $status = 200)
    {
        $response = new HTTPResponse();

        $response->setBody(json_encode($data));

        $response->setStatusCode($status);

        $expire = new DateTime();
        $expire->add(new DateInterval('PT300S'));
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
