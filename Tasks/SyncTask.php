<?php

namespace MadeHQ\Cloudinary\Tasks;

use SilverStripe\Dev\BuildTask;
use Cloudinary\Api;
use MadeHQ\Cloudinary\Model\File;
use MadeHQ\Cloudinary\Model\Image;

class SyncTask extends BuildTask
{
    protected $title = 'Sync all files from Cloudinary into SS database';

    protected $description = 'This task should be run automatically to keep the SS DB in Sync with Cloudinary. It should reduce the requirement to click the `Sync` button in the admin as it\'s a slow process from an end users point of view';

    public function run($request)
    {
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

        echo sprintf('Sync Complete: %d asset(s) checked and or updated', $count);
    }

    private function getPageFromCloudinary($cursor = null)
    {
        $api = new Api();
        $options = [
            'max_results' => 100,
        ];
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
