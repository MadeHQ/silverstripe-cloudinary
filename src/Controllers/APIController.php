<?php

namespace MadeHQ\Cloudinary\Controllers;

use SilverStripe\ORM\DataObject;
use SilverStripe\Control\{ Controller, Director, HTTPRequest, HTTPResponse };
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Versioned\Versioned;

use Cloudinary\Api;
use Cloudinary\Api\Error As CloudinaryApiError;
use MadeHQ\Cloudinary\Model\Image;
use SilverStripe\Assets\File;

class APIController extends Controller// implements PermissionProvider
{
    use Configurable;

    /**
     * @var array
     */
    private static $allowed_actions = [
        'notify',
    ];

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
            throw $this->httpError(400, 'Expected <code>notification_type</code> in the body');
        }

        Versioned::set_reading_mode('Stage.Stage');

        $notificationType = $data['notification_type'];

        if ($notificationType === 'rename') {
            $from = $data['from_public_id'];
            $to = $data['to_public_id'];

            $item = DataObject::get_one(File::class, [
                'FilePublicID' => $from
            ]);

            if (!$item) {
                throw $this->httpError(400, sprintf('Failed to rename %s', $from));
            }
            $item->File->PublicID = $to;
            $item->write();
            if ($item->isPublished()) {
                $item->publishSingle();
            }
        }

        if ($notificationType === 'upload') {
            return $this->addOrUpdateResource($data);
        }

        if ($notificationType === 'delete') {
            foreach ($data['resources'] as $resource) {
                $file = DataObject::get_one(File::class, [
                    'FilePublicID' => $resource['public_id'],
                    'FileVariant' => $resource['version'],
                ]);

                if ($file) {
                    // Deletes from both Live & Draft
                    $file->doArchive();
                }
            }
        }
    }

    private function output(array $body = [], $statusCode = 200)
    {
        $response = new HTTPResponse(Convert::raw2json($body));
        $response->addHeader('content-type', 'application/json');
        $response->setStatusCode($statusCode);
        return $response;
    }

    private function addOrUpdateResource($resource)
    {
        $file = File::singleton()->getOneByPublicId($resource['public_id']);
        if (!$file) {
            switch ($resource['resource_type']) {
                case 'image':
                    switch ($resource['format']) {
                        case 'pdf':
                            $file = File::create();
                            break;
                        default:
                            $file = Image::create();
                    }
                    break;
                default:
                    $file = File::create();
            }
        }

        $file->updateFromCloudinary($resource);
        if (!$file->write()) {
            var_dump(sprintf('Error saving: %s', $resource['public_id']), $resource);
        }
        return $file;
    }
}
