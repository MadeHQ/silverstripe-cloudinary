<?php

namespace MadeHQ\Cloudinary\Controllers;

use SilverStripe\Control\Controller;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Core\Convert;
use Cloudinary\Api;
use MadeHQ\Cloudinary\Model\File;
use MadeHQ\Cloudinary\Model\Image;

class APIController extends Controller
{
    /**
     * @var array
     */
    private static $allowed_actions = [
        'sync',
    ];

    public function sync(HTTPRequest $request)
    {
        ini_set('max_execution_time', 300); //300 seconds = 5 minutes
        $page = 0;
        $count = 0;
        $data = $this->getPageFromCloudinary();
        while ($data && count($data['resources'])) {
            array_walk($data['resources'], array($this, 'addOrUpdateResource'));
            $count+= count($data['resources']);
            $data = (array_key_exists('next_cursor', $data)) ?
                $this->getPageFromCloudinary($data['next_cursor']) :
                false;
        }

        return $this->output([
            'status' => 'ok',
            'result' => [
                'count' => $count,
            ]
        ]);
    }

    private function output(array $body = [])
    {
        $response = new HTTPResponse(Convert::raw2json($body));
        $response->addHeader('content-type', 'application/json');
        return $response;
    }

    private function getPageFromCloudinary($cursor = null)
    {
        $api = new Api();
        $options = [
            'max_results' => 100,
        ];
        $options['start_at'] = date(\DateTime::ISO8601, strtotime('-4 week'));
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
                $file = File::getOneByPublicId($resource['public_id']);
            default:
                throw new \RuntimeException(sprintf('[%s] Resource type is not yet being handled', $resource['resource_type']));
                break;
        }
    }
}
