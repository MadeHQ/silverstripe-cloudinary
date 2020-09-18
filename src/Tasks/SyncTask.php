<?php

namespace MadeHQ\Cloudinary\Tasks;

use Cloudinary;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Dev\BuildTask;

use Cloudinary\Api;
use Cloudinary\Api\RateLimited;
use Cloudinary\Error;
use MadeHQ\Cloudinary\Model\Image;
use SilverStripe\Assets\File;
use SilverStripe\Assets\Folder;

class SyncTask extends BuildTask
{
    use Configurable;

    /**
     * How long into the past to start syncing
     * See (http://php.net/manual/en/function.strtotime.php) for details
     * @var Mixed
     */
    private static $api_start_at = false;

    /**
     *
     */
    private static $skip_backups_during_update = true;

    /**
     * Will make a HEAD request to check that all images (not just added) are still in Cloudinary
     * @param Boolean
     */
    private static $test_existing_files_still_exist = true;

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

    private $processedPublicIDs = [];

    /**
     * @inheritdoc
     */
    public function run($request)
    {
        try {
            ini_set('max_execution_time', 300); // 300 seconds = 5 minutes
            $count = 0;

            foreach(['image', 'raw', 'video'] as $resourceType) {
                $data = $this->getPageFromCloudinary($resourceType);
                while ($data && count($data['resources'])) {
                    array_walk($data['resources'], array($this, 'addOrUpdateResource'));
                    $count+= count($data['resources']);

                    $data = (array_key_exists('next_cursor', $data)) ?
                        $this->getPageFromCloudinary($resourceType, $data['next_cursor']) :
                        false;
                }
            }
            $timeInPastToSync = static::config()->get('api_start_at');
            if ($timeInPastToSync) {
                echo sprintf('Sync Complete: %d files synced starting %s', $count, $timeInPastToSync);
            } else {
                echo sprintf('Sync Complete: %d files synced', $count);
            }

            $this->doDeleteFilesMissingOnCloudinary();

            return;
        } catch (RateLimited $e) {
            var_dump($e->getMessage());
            return;
        }
    }

    /**
     * Checks if the files exist (by making a HEAD request to cloudinary)
     * If it returns with a 404 status code then it will be deleted from DB
     */
    private function doDeleteFilesMissingOnCloudinary()
    {
        if (!static::config()->get('test_existing_files_still_exist')) {
            return;
        }
        $result = File::get(File::class);
        if (!empty($this->processedPublicIDs)) {
            $result = $result->filter([
                'FilePublicID:not' => $this->processedPublicIDs,
                'ClassName:not' => Folder::class,   // Don't want to test folders
            ]);
        }

        foreach($result As $file) {
            if (!$file->File->PublicID) {
                continue;
            }
            $opts = [
                'resource_type' => $file->File->ResourceType,
                'version' => $file->File->Variant,
            ];
            $url = Cloudinary::cloudinary_url($file->File->PublicID, $opts);
            if ($url) {
                $restResponse = static::curl_head_info($url);
                if ($restResponse['http_code'] === 404) {
                    // Not found on Cloudinary
                    $file->doUnpublish();
                    $file->doArchive();
                }
            } else {
                // No URL
                $file->doUnpublish();
                $file->doArchive();
            }
        }
    }

    private static function curl_head_info($url)
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_NOBODY, true);
        curl_exec($ch);
        $info = curl_getinfo($ch);
        curl_close($ch);
        return $info;
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
        if (
            static::config()->get('skip_backups_during_update') &&
            array_key_exists('backup', $resource) &&
            $resource['backup'] &&
            $resource['bytes'] === 0
        ) {
            return;
        }
        array_push($this->processedPublicIDs, $resource['public_id']);
        $file = File::singleton()->getOneByAssetId($resource['asset_id']);
        if (!$file) {
            $file = File::singleton()->getOneByPublicId($resource['public_id']);
        }

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
        try {
            $file->updateFromCloudinary($resource);
            if (!$file->write()) {
                var_dump(sprintf('Error saving: %s', $resource['public_id']), $resource);
            }
        } catch (Error $e) {
            if ($e->getCode() === 404 && $file && $file->exists()) {
                $file->delete();
            }
        }
        return $file;
    }
}
