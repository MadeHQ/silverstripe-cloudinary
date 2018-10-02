<?php

namespace MadeHQ\Cloudinary\Controllers;

use SilverStripe\ORM\DB;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\Queries\SQLUpdate;
use SilverStripe\Core\Config\Config;
use SilverStripe\Control\{ Controller, Director, HTTPRequest, HTTPResponse };
use SilverStripe\Security\{ Permission, PermissionProvider };
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Convert;
use SilverStripe\Versioned\Versioned;

use Cloudinary\Api;
use Cloudinary\Api\Error As CloudinaryApiError;

use MadeHQ\Cloudinary\Model\{ Image, File, Video };

class APIController extends Controller implements PermissionProvider
{
    use Configurable;

    /**
     * @var array
     */
    private static $allowed_actions = [
        'notify',
        'sync',
    ];

    /**
     * How many items to get from Cloudinary with each request when syncing
     * @var int
     * @config
     */
    private static $api_page_size = 500;

    /**
     * 300 seconds = 5 minutes
     * @var int
     * @config
     */
    private static $execution_time = 300;

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

    public function notify(HTTPRequest $request)
    {
        if (!$request->isPOST()) {
            return false;
        }

        if ($request->getHeader('User-Agent') !== 'Cloudinary') {
            return false;
        }

        $data = json_decode($request->getBody(), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return false;
        }

        if (!array_key_exists('notification_type', $data)) {
            return false;
        }

        Versioned::set_reading_mode('Stage.Stage');

        $notificationType = $data['notification_type'];

        if ($notificationType === 'rename') {
            $from = $data['from_public_id'];
            $to = $data['to_public_id'];

            $item = DataObject::get_one(File::class, ['PublicID' => $from]);

            if (!$item) {
                return false;
            }

            $item->PublicID = $to;

            $remoteData = File::get_remote_data($to, $item->ResourceType, true);

            if (is_array($remoteData)) {
                $item->SecureURL = $remoteData['secure_url'];
            }

            return $item->write();
        }

        if ($notificationType === 'upload') {
            return $this->addOrUpdateResource($data);
        }

        if ($notificationType === 'delete') {
            foreach ($data['resources'] as $resource) {
                $file = DataObject::get_one(File::class, [
                    'PublicID' => $resource['public_id'],
                ]);

                if ($file) {
                    $file->delete();
                }
            }
        }
    }

    public function sync(HTTPRequest $request)
    {
        if (!Permission::checkMember(null, 'CLOUDINARY_ACCESS_sync')) {
            return $this->output([
                'status' => 'forbidden',
                'error' => 'access_denied',
                'description' => 'You do not have permission to sync with cloudinary',
            ], 403);
        }

        Versioned::set_reading_mode('Stage.Stage');

        $this->clearRemoteCloudinaryData();

        try {
            ini_set(
                'max_execution_time',
                static::config()->uninherited('execution_time')
            );

            $page = 0;
            $count = 0;
            $resourceTypes = static::config()->uninherited('resource_types');

            foreach ($resourceTypes as $resourceType) {
                $data = $this->getPageFromCloudinary($resourceType);

                while ($data && count($data['resources'])) {
                    array_walk($data['resources'], array($this, 'addOrUpdateResource'));

                    $count += count($data['resources']);

                    if (array_key_exists('next_cursor', $data)) {
                        $data = $this->getPageFromCloudinary($resourceType, $data['next_cursor']);
                    } else {
                        $data = false;
                    }
                }
            }

            return $this->output([
                'status' => 'ok',
                'result' => [
                    'count' => $count,
                ]
            ]);
        } catch (CloudinaryApiError $e) {
            if (Director::isDev()) {
                return $this->output([
                    'status' => 'error',
                    'description' => sprintf('Error occurred with the Cloudinary API: %s', $e->getMessage()),
                    'trace' => $e->getTrace(),
                ], 500);
            }
            return $this->output([
                'status' => 'error',
                'description' => 'Error occurred with the Cloudinary API',
            ], 500);
        } catch (\Exception $e) {
            if (Director::isDev()) {
                return $this->output([
                    'status' => 'error',
                    'description' => sprintf('Unhandled error occurred: %s', $e->getMessage()),
                    'trace' => $e->getTrace(),
                ], 500);
            }
            return $this->output([
                'status' => 'error',
                'description' => 'Unhandled error occurred',
            ], 500);
        }
    }

    private function clearRemoteCloudinaryData()
    {
        $tableName = Config::inst()->get(File::class, 'table_name', Config::UNINHERITED);

        SQLUpdate::create('"' . $tableName . '"')
            ->assign('"RemoteData"', NULL)
            ->execute();
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
            'context' => true,
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
                    $file->OriginalCaption = Image::extract_caption($resource);
                    $file->write();
                } else {
                    Image::createFromCloudinaryResource($resource);
                }

                break;
            case 'video':
                $file = Video::getOneByPublicId($resource['public_id']);

                if ($file) {
                    return;
                }

                Video::createFromCloudinaryResource($resource);

                break;
            default:
                $file = File::getOneByPublicId($resource['public_id']);

                if ($file) {
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
