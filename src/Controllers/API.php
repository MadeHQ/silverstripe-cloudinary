<?php

namespace MadeHQ\Cloudinary\Controllers;

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

        return Helper::json(
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

        return Helper::json(true, 200, 1);
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
}
