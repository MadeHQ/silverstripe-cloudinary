<?php

namespace MadeHQ\Cloudinary\Tasks;

use SilverStripe\Core\Config\Configurable;
use SilverStripe\Dev\BuildTask;

use Cloudinary\Api;
use MadeHQ\Cloudinary\Model\Image;
use SilverStripe\Assets\File;

class SyncTask extends BuildTask
{
    use Configurable;

    /**
     * How long into the past to start syncing
     * See (http://php.net/manual/en/function.strtotime.php) for details
     * @var String
     */
    private static $api_start_at = '-4 week';

    /**
     * How many results to return with each request
     * See (https://cloudinary.com/documentation/admin_api#resources)
     * 500 is the Max value
     * @var Int
     */
    private static $api_max_results = 500;

    /**
     * @inheritdoc
     */
    protected $title = 'Syncronize with Cloudinary API';

    /**
     * @inheritdoc
     */
    protected $description = 'Fully syncronizes DB files with Cloudinary using the API. This is used if Cloudinary is unable to communicate with your servers (due to Firewall etc.). If possible it\'s better to use Cloudinarys Notification functionality';

    /**
     * @inheritdoc
     */
    public function run($request)
    {
        ini_set('max_execution_time', 300); // 300 seconds = 5 minutes
        $count = 0;

        foreach(['image', 'raw', 'video'] as $resourceType) {
            $data = $this->getPageFromCloudinary($resourceType, null);
            while ($data && count($data['resources'])) {
                array_walk($data['resources'], array($this, 'addOrUpdateResource'));
                $count+= count($data['resources']);

                $data = (array_key_exists('next_cursor', $data)) ?
                    $this->getPageFromCloudinary($resourceType, $data['next_cursor']) :
                    false;
            }
        }

        echo sprintf('Sync Complete: %d files synced starting %s', $count, static::config()->get('api_start_at'));

        return;
    }

    private function getPageFromCloudinary($resourceType, $cursor = null)
    {
        $api = new Api();
        $options = [
            'max_results' => static::config()->get('api_max_results'),
            'direction' => 1,   // So that the oldest items come through first
            'resource_type' => $resourceType,
        ];
        // Not using as Cloudinary API doesn't correctly implement this option (gets things older than the time sent (doh!)
        $timeInPastToSync = static::config()->get('api_start_at');
        if ($timeInPastToSync) {
            $options['start_at'] = date(\DateTime::ISO8601, strtotime($timeInPastToSync));
        }
        if ($cursor) {
            $options['next_cursor'] = $cursor;
        }
        return $api->resources($options);
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
