<?php

namespace MadeHQ\Cloudinary\Controllers;

use DateInterval;
use DateTime;
use DateTimeZone;
use SilverStripe\Control\RequestHandler;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Control\HTTPResponse_Exception;
use SilverStripe\Core\ClassInfo;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\DataObjectSchema;
use SilverStripe\Versioned\Versioned;
use MadeHQ\Cloudinary\FieldType\DBBaseResource;
use MadeHQ\Cloudinary\Utils\Helper;

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

        return static::json(
            $this->getResourceData($publicId, $resourceType)
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

                            $newJSON = $this->getResourceData($data['to_public_id'], $oldJSON->resource_type);

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

        return static::json(true, 200, 1);
    }

    /**
     * @param string $publicId
     * @param string $resourceType
     * @return array
     */
    protected function getResourceData($publicId, $resourceType)
    {
        $resource = Helper::get_resource($publicId, $resourceType);

        $return = Helper::process_resource($resource);

        $this->extend('updateResourceData', $return, $resource);

        return $return;
    }

    /**
     * @param array $data
     * @param int $status
     * @param int $ttl
     * @param HTTPRequest $request
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
            ->addHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
            ->addHeader('Access-Control-Allow-Credentials', 'true')
            ->addHeader('Access-Control-Allow-Origin', '*')
            ->addHeader('Cache-Control', 'public, must-revalidate, stale-while-revalidate=86400, no-transform')
            ->addHeader('Expires', $expire->format('D, d M Y H:i:00 \G\M\T'))
            ->addHeader('Vary', 'Origin');

        return $response;
    }
}
