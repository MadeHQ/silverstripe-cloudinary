<?php

namespace MadeHQ\Cloudinary\Tasks;

use Cloudinary\Api;
use Cloudinary\Api\RateLimited;

use SilverStripe\Dev\BuildTask;

class RestoreFromBackupsTask extends BuildTask
{
    /**
     * {@inheritdoc}
     */
    protected $title = 'Cloudinary: Restore backed up deletions';

    /**
     * {@inheritdoc}
     */
    protected $description = 'Goes through the API and restores the most recent backup of deleted files (`backup` => true and `bytes` => 0)';

    /**
     * @var Cloudinary\Api
     */
    protected static $api;

    /**
     * How many results to return with each request
     * See (https://cloudinary.com/documentation/admin_api#resources)
     * 500 is the Max value
     * @var Int
     */
    private static $api_max_results = 500;

    /**
     *
     */
    private $restoreIds = [
        'image' => [],
        'raw' => [],
        'video' => [],
    ];

    /**
     * {@inheritdoc}
     */
    public function run($request)
    {
        try {
            ini_set('max_execution_time', 300); // 300 seconds = 5 minutes
            $count = 0;

            foreach(array_keys($this->restoreIds) as $resourceType) {
                $data = $this->getPageFromCloudinary($resourceType);
                while ($data && count($data['resources'])) {
                    array_walk($data['resources'], array($this, 'processResource'));
                    $count+= count($data['resources']);

                    $data = (array_key_exists('next_cursor', $data)) ?
                        $this->getPageFromCloudinary($resourceType, $data['next_cursor']) :
                        false;
                }

                if (count($this->restoreIds[$resourceType])) {
                    while ($ids = array_slice($this->restoreIds[$resourceType], 0, 100)) {
                        $this->restoreIds[$resourceType] = array_slice($this->restoreIds[$resourceType], 100);
                        static::getApi()->restore($ids);
                    }
                }
            }

            return;
        } catch (RateLimited $e) {
            var_dump($e->getMessage());
            return;
        }
    }

    /**
     * Gets a page from the API
     */
    private function getPageFromCloudinary($resourceType, $cursor = null)
    {
        $options = [
            'max_results' => static::config()->get('api_max_results'),
            'direction' => 1,   // So that the oldest items come through first
            'resource_type' => $resourceType,
        ];

        if ($cursor) {
            $options['next_cursor'] = $cursor;
        }
        return static::getApi()->resources($options);
    }

    private function processResource($resource)
    {
        if (
            array_key_exists('backup', $resource) &&
            $resource['backup'] &&
            $resource['bytes'] === 0
        ) {
            array_push($this->restoreIds[$resource['resource_type']], $resource['public_id']);
        }
    }

    /**
     * @return Cloudinary\Api
     */
    private static function getApi()
    {
        if (!static::$api) {
            static::$api = new Api();
        }
        return static::$api;
    }
}