<?php

namespace MadeHQ\Cloudinary\Tasks;

use Cloudinary\Api;
use MadeHQ\Cloudinary\Model\File;
use MadeHQ\Cloudinary\Model\Image;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Dev\BuildTask;

class SyncTask extends BuildTask
{
    use Configurable;

    /**
     * How long into the past to start syncing
     * See (http://php.net/manual/en/function.strtotime.php) for details
     * @var String
     */
    private static $whenToStartSync = '-4 week';

    /**
     * @inheritdoc
     */
    protected $title = 'Syncronize with Cloudinary API';

    /**
     * @inheritdoc
     */
    protected $description = 'Fully syncronizes DB files with Cloudinary using the API';

    /**
     * @inheritdoc
     */
    public function run($request)
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

        echo sprintf('Sync Complete: %d files synced stating %s', $count, static::config()->get('whenToStartSync'));

        return;
    }



    private function getPageFromCloudinary($cursor = null)
    {
        $api = new Api();
        $options = [
            'max_results' => 100,
        ];
        // Not using as Cloudinary API doesn't correctly implement this option (gets things older than the time sent (doh!)
        // $timeInPastToSync = static::config()->get('whenToStartSync');
        // if ($timeInPastToSync) {
        //     $options['start_at'] = date(\DateTime::ISO8601, strtotime($timeInPastToSync));
        // }
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
