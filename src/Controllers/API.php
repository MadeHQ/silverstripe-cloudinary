<?php

namespace MadeHQ\Cloudinary\Controllers;

use DateTime;
use DateInterval;
use DateTimeZone;
use SilverStripe\Control\RequestHandler;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Control\HTTPResponse_Exception;
use SilverStripe\Core\ClassInfo;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\DataObjectSchema;
use SilverStripe\Security\Security;
use SilverStripe\Versioned\Versioned;
use Cloudinary\Api\Admin\AdminApi;
use MadeHQ\Cloudinary\FieldType\DBBaseResource;

class API extends RequestHandler
{
    /**
     * @config
     * @var array $allowed_actions
     */
    private static $allowed_actions = [
        'resource',
        'notify',
    ];

    /**
     * @var AdminApi $admin_api_instance
     */
    protected static $admin_api_instance = null;

    /**
     * @throws HTTPResponse_Exception
     */
    public function __construct()
    {
        parent::__construct();

        $user = Security::getCurrentUser();

        if ($user === null) {
            throw $this->httpError(401, 'Must be logged in');
        }
    }

    /**
     * @return AdminApi
     */
    protected static function adminApi()
    {
        if (static::$admin_api_instance) {
            return static::$admin_api_instance;
        }

        static::$admin_api_instance = new AdminApi();

        return static::$admin_api_instance;
    }

    /**
     * @param HTTPRequest $request
     * @return HTTPResponse
     */
    public function resource(HTTPRequest $request)
    {
        $publicId = $request->requestVar('public_id');
        $resourceType = $request->requestVar('resource_type');

        if (!$publicId || !$resourceType) {
            return $this->httpError(400);
        }

        return $this->json(
            $this->getResource($publicId, $resourceType)
        );
    }

    /**
     * @param HTTPRequest $request
     * @return HTTPResponse
     * @throws HTTPResponse_Exception
     */
    public function notify(HTTPRequest $request)
    {
        if (!$request->isPOST()) {
            throw $this->httpError(400, 'Expected a POST from Cloudinary');
        }

        $data = json_decode($request->getBody(), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw $this->httpError(400, 'Expected body to be JSON');
        }

        if (!array_key_exists('notification_type', $data)) {
            throw $this->httpError(400, 'Expected "notification_type" in the body');
        }

        $notificationType = $data['notification_type'];

        if ($notificationType !== 'rename') {
            throw $this->httpError(400, '"' . $notificationType . '" is not supported');
        }

        return $this->renameResource($data);
    }

    /**
     * @param string $publicId
     * @param string $resourceType
     * @return array
     */
    protected function getResource($publicId, $resourceType)
    {
        $response = static::adminApi()->asset($publicId, [
            'resource_type' => $resourceType,
            'colors' => true,
            'image_metadata' => true,
        ])->getArrayCopy();

        return $this->processResource($response);
    }

    /**
     * @param array $data
     * @return array
     */
    protected function processResource($data)
    {
        $resourceType = $data['resource_type'];

        $return = [
            'asset_id' => $data['asset_id'],
            'public_id' => $data['public_id'],
            'name' => $this->extractName($data),
            'title' => $this->extractTitle($data),
            'description' => $this->extractDescription($data),
            'format' => $this->determineFormat($data),
            'resource_type' => $resourceType,
            'type' => $data['type'],
            'version' => $data['version'],
        ];

        if ($resourceType === 'video') {
            $isAudio = array_key_exists('is_audio', $data) && $data['is_audio'];

            $return['duration'] = $data['duration'];
            $return['actual_type'] = $isAudio ? 'audio' : 'video';
            $return['gravity'] = $isAudio ? null : 'auto';
            $return['transformations'] = null;
        } else if ($resourceType === 'image') {
            $return['credit'] = $this->extractCredit($data);
            $return['top_colours'] = $this->extractTopColours($data);
            $return['actual_type'] = 'image';
            $return['gravity'] = 'auto';
            $return['foreground_colour'] = null;
            $return['background_colour'] = null;
            $return['transformations'] = null;
        } else {
            $return['actual_type'] = 'raw';
        }

        $this->extend('updateResourceData', $return, $data);

        return $return;
    }

    /**
     * @param array $data
     * @return array
     */
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

    /**
     * @param array $data
     * @return string
     */
    protected function extractName($data)
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

    /**
     * @param array $data
     * @return string
     */
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

    /**
     * @param array $data
     * @return string
     */
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

    /**
     * @param array $data
     * @return string
     */
    protected function determineFormat($data)
    {
        $url = $data['secure_url'];

        if ($extension = pathinfo($url, PATHINFO_EXTENSION)) {
            return $extension;
        }

		return null;
    }

    /**
     * @param array $data
     * @return HTTPResponse
     */
    protected function renameResource($data)
    {
        $schema = DataObject::getSchema();
        $currentStage = Versioned::get_stage();

        foreach ([Versioned::DRAFT, Versioned::LIVE] as $stage) {
            Versioned::set_stage($stage);

            foreach (ClassInfo::subclassesFor(DataObject::class) as $className) {
                foreach ($schema->fieldSpecs($className, DataObjectSchema::UNINHERITED) as $fieldName => $fieldSpec) {
                    if (Injector::inst()->create($fieldSpec, 'Dummy') instanceof DBBaseResource) {
                        $records = DataObject::get($className)->filter($fieldName . ':PartialMatch', $data['asset_id']);

                        foreach ($records as $record) {
                            $oldJSON = json_decode($record->getField($fieldName));

                            if ($oldJSON->asset_id !== $data['asset_id']) {
                                continue;
                            }

                            $newJSON = $this->getResource($data['to_public_id'], $oldJSON->resource_type);

                            $oldJSON->public_id = $data['to_public_id'];
                            $oldJSON->version = $newJSON['version'];

                            $record->setField($fieldName, json_encode($oldJSON));

                            $record->writeToStage($stage);
                        }
                    }
                }
            }
        }

        Versioned::set_stage($currentStage);

        return $this->json(true, 200, 1);
    }

    /**
     * @param array $data
     * @param int $status
     * @param int $ttl
     * @return HTTPResponse
     */
    protected function json($data, $status = 200, $ttl = 300)
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
