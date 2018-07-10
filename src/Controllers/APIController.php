<?php

namespace MadeHQ\Cloudinary\Controllers;

use SilverStripe\Control\Controller;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Security\Permission;
use SilverStripe\Security\PermissionProvider;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Convert;
use Cloudinary\Api;
use Cloudinary\Api\Error As CloudinaryApiError;
use MadeHQ\Cloudinary\Model\File;
use MadeHQ\Cloudinary\Model\Image;

class APIController extends Controller implements PermissionProvider
{
    use Configurable;

    /**
     * @var array
     */
    private static $allowed_actions = [
        'sync',
    ];

    /**
     * How many items to get from Cloudinary with each request when syncing
     * @var Int
     */
    private static $api_page_size = 500;

    /**
     * List of Resource types to get from Cloudinary
     *   (see https://cloudinary.com/documentation/admin_api)
     * @var array
     */
    private static $resource_types = [
        'image',
        'raw',
        'video',
    ];

    public function sync(HTTPRequest $request)
    {
        if (!Permission::checkMember(null, 'CLOUDINARY_ACCESS_sync')) {
            return $this->output([
                'status' => 'forbidden',
                'error' => 'access_denied',
                'description' => 'You do not have permission to sync with cloudinary',
            ], 403);
        }
        try {
            ini_set('max_execution_time', 300); //300 seconds = 5 minutes
            $page = 0;
            $count = 0;
            $resourceTypes = static::config()->uninherited('resource_types');

            foreach ($resourceTypes as $resourceType) {
                $data = $this->getPageFromCloudinary($resourceType);
                while ($data && count($data['resources'])) {
                    array_walk($data['resources'], array($this, 'addOrUpdateResource'));
                    $count+= count($data['resources']);
                    $data = (array_key_exists('next_cursor', $data)) ?
                    $this->getPageFromCloudinary($resourceType, $data['next_cursor']) :
                    false;
                }
            }

            return $this->output([
                'status' => 'ok',
                'result' => [
                    'count' => $count,
                ]
            ]);
        } catch (CloudinaryApiError $e) {
            return $this->output([
                'status' => 'error',
                'description' => sprintf('Error occurred with the Cloudinary API: %s', $e->getMessage()),
            ], 500);
        } catch (\Exception $e) {
            return $this->output([
                'status' => 'error',
                'description' => sprintf('Unhandled error occurred: %s', $e->getMessage()),
            ], 500);
        }
    }

    private function output(array $body = [], $statusCode = 200)
    {
        $response = new HTTPResponse(Convert::raw2json($body));
        $response->addHeader('content-type', 'application/json');
        $response->setStatusCode($statusCode);
        return $response;
    }

    private function getPageFromCloudinary($resourceType, $cursor = null)
    {
        $api = new Api();
        $options = [
            'resource_type' => $resourceType,
            'max_results' => static::config()->uninherited('api_page_size'),
        ];
        // See (https://support.cloudinary.com/hc/requests/68494) for details
        // $options['start_at'] = date(\DateTime::ISO8601, strtotime('-4 week'));
        if ($cursor) {
            $options['next_cursor'] = $cursor;
        }
        return $api->resources($options);
    }

    private function addOrUpdateResource($resource)
    {
        switch ($resource['resource_type']) {
            case 'image':
                $file = Image::getOneByPublicId($resource['public_id']);
                if ($file) {
                    $file->updateFromCloudinary($resource);
                    return;
                }
                Image::createFromCloudinaryResource($resource);
                break;
            case 'file':
            case 'raw':
                $file = File::getOneByPublicId($resource['public_id']);
                if ($file) {
                    $file->updateFromCloudinary($resource);
                    return;
                }
                File::createFromCloudinaryResource($resource);
                break;
        }
    }

    public function providePermissions()
    {
        return [
            'CLOUDINARY_ACCESS_sync' => [
                'name' => _t(__CLASS__ . '.SYNC_WITH_CLOUDINARY', 'Synchronize files'),
                'category' => _t('MadeHQ\\Cloudinary.API_ACCESS', 'Cloudinary'),
                'help' => _t(__CLASS__ . '.SYNC_WITH_CLOUDINARY_HELP', 'Synchronization should be done automatically every night, but if users upload to cloudinary just before using the images this will be needed. NOTE: This is an intensive request that takes time'),
                'sort' => -100
            ]
        ];
    }
}
