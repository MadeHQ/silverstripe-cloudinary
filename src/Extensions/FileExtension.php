<?php

namespace MadeHQ\Cloudinary\Extensions;

use Cloudinary\Api;
use Cloudinary\Api\NotFound;
use MadeHQ\Cloudinary\Storage\CloudinaryStorage;
use SilverStripe\Assets\Folder;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Flushable;
use SilverStripe\ORM\Connect\DatabaseException;
use SilverStripe\ORM\DataExtension;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\Queries\SQLUpdate;
use SilverStripe\Versioned\Versioned;

/**
 * @property owner \SilverStripe\Assets\File
 */
class FileExtension extends DataExtension implements Flushable
{
    use Configurable;

    /**
     * @var boolean
     */
    private static $clear_remote_data_on_flush = false;

    /**
     * @param array $resource
     * @return void(0)
     */
    public function updateFromCloudinary(array $resource)
    {
        $parentFolder = static::getParentFolderForResouce($resource);
        $this->owner->Parent = $parentFolder;
        $filename = preg_replace('/^.*\//', '', $resource['public_id']);
        if (strpos('.', $filename) === false && array_key_exists('format', $resource)) {
            $filename.= '.' . $resource['format'];
        }
        $this->owner->Name = $this->owner->File->Filename = $filename;
        $this->owner->Title = preg_replace('/\..*$/', '', $filename);

        $this->owner->File->AssetID = $resource['asset_id'];
        $this->owner->File->PublicID = $resource['public_id'];
        $this->owner->File->ResourceType = $resource['resource_type'];
        if (array_key_exists('version', $resource)) {
            $this->owner->File->Variant = $resource['version'];
        }
        $this->owner->File->Hash = CloudinaryStorage::getHash($filename, $this->owner->File->Variant);
        $this->owner->write();

        if ($resource['access_mode'] === 'public') {
            $this->owner->copyVersionToStage(Versioned::DRAFT, Versioned::LIVE);
        }
    }

    /**
     * @param array $resource
     * @return Folder
     */
    private static function getParentFolderForResouce(array $resource)
    {
        $publicId = $resource['public_id'];
        $segments = explode('/', $publicId);
        array_pop($segments);
        $folderPath = implode('/', $segments);
        return Folder::find_or_make($folderPath);
    }

    /**
     * @param string $prop
     * @return Mixed
     */
    public function getRemoteDataProperty(string $prop)
    {
        return @$this->owner->CloudinaryData[$prop];
    }

    /**
     * @param string $publicId
     * @return DataObject
     */
    public function getOneByPublicId($publicId)
    {
        return DataObject::get_one($this->owner->ClassName, [
            'FilePublicID' => $publicId
        ]);
    }

    /**
     * @param string $publicId
     * @return DataObject
     */
    public function getOneByAssetId($assetId)
    {
        return DataObject::get_one($this->owner->ClassName, [
            'FileAssetID' => $assetId
        ]);
    }

    /**
     * Gets the options to send to the cloudinary API
     * @return array
     */
    public function getApiResourceOptions()
    {
        $opts = [
            'resource_type' => $this->owner->File->ResourceType,
            'max_results' => 500,
        ];
        if (!is_null($this->owner->config()->get('api_get_colors'))) {
            $opts['colors'] = $this->owner->config()->get('api_get_colors');
        }
        if (!is_null($this->owner->config()->get('api_get_faces'))) {
            $opts['faces'] = $this->owner->config()->get('api_get_faces');
        }
        if (!is_null($this->owner->config()->get('api_get_quality_analysis'))) {
            $opts['quality_analysis'] = $this->owner->config()->get('api_get_quality_analysis');
        }
        if (!is_null($this->owner->config()->get('api_get_pages'))) {
            $opts['pages'] = $this->owner->config()->get('api_get_pages');
        }
        if (!is_null($this->owner->config()->get('api_get_phash'))) {
            $opts['phash'] = $this->owner->config()->get('api_get_phash');
        }
        if (!is_null($this->owner->config()->get('api_get_coordinates'))) {
            $opts['coordinates'] = $this->owner->config()->get('api_get_coordinates');
        }
        if (!is_null($this->owner->config()->get('api_get_max_results'))) {
            $opts['max_results'] = $this->owner->config()->get('api_get_max_results');
        }
        if ($this->owner->hasMethod('updateApiResourceOptions')) {
            $this->owner->updateApiResourceOptions($opts);
        }
        $this->owner->extend('updateApiResourceOptions', $opts);
        return $opts;
    }

    /**
     * @return array
     */
    public function getCloudinaryData()
    {
        if (!$this->owner->File->RemoteData) {
            $api = new Api();
            $opts = $this->getApiResourceOptions();
            try {
                $data = $api->resource($this->owner->File->PublicID, $opts);
                $data = $data->getArrayCopy();
                while (array_key_exists('derived_next_cursor', $data) && ($data['derived_next_cursor'])) {
                    $opts['derived_next_cursor'] = $data['derived_next_cursor'];
                    $newData = $api->resource($this->owner->File->PublicID, $opts);
                    $data['derived'] = array_merge($data['derived'], $newData->offsetGet('derived'));
                    $data['derived_next_cursor'] = @$newData->offsetGet('derived_next_cursor');
                }

                $this->owner->File->RemoteData = json_encode($data);
                SQLUpdate::create('File')
                    ->addWhere(['FilePublicID = ?' => $this->owner->File->PublicID])
                    ->addAssignments(['FileRemoteData' => $this->owner->File->RemoteData])
                    ->execute();
                SQLUpdate::create('File_Live')
                    ->addWhere(['FilePublicID = ?' => $this->owner->File->PublicID])
                    ->addAssignments(['FileRemoteData' => $this->owner->File->RemoteData])
                    ->execute();
            } catch (NotFound $e) {
                $this->owner->delete();
                $this->owner->File->RemoteData = '[]';
            }
        }
        return json_decode($this->owner->File->RemoteData, true);
    }

    /**
     * @return void(0)
     */
    public static function flush()
    {
        if (static::config()->get('clear_remote_data_on_flush')) {
            try {
                SQLUpdate::create('File')->addAssignments([
                    'FileRemoteData' => NULL,
                ])->execute();
            } catch (DatabaseException $e) {
                // Do nothing as it's because the table doesn't exist
            }
            try {
                SQLUpdate::create('File_Live')->addAssignments([
                    'FileRemoteData' => NULL,
                ])->execute();
            } catch (DatabaseException $e) {
                // Do nothing as it's because the table doesn't exist
            }
        }
    }
}
