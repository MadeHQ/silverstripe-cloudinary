<?php

namespace MadeHQ\Cloudinary\Extensions;

use Cloudinary\Api;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Flushable;
use SilverStripe\ORM\DataExtension;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\Queries\SQLUpdate;
use SilverStripe\Versioned\Versioned;

class FileExtension extends DataExtension implements Flushable
{
    use Configurable;

    private static $db = [
        'PublicID' => 'Varchar(255)',
        'ResourceType' => 'Varchar(25)',
        'RemoteData' => 'Text',
    ];

    private static $indexes = [
        'PublicID' => [
            'type' => 'unique',
        ],
    ];

    public function updateFromCloudinary($resource)
    {
        $this->owner->PublicID = $resource['public_id'];
        $this->owner->ResourceType = $resource['resource_type'];
        $this->owner->write();
        if ($resource['access_mode'] === 'public') {
            $this->owner->copyVersionToStage(Versioned::DRAFT, Versioned::LIVE);
        }
    }

    public function getRemoteDataProperty($prop)
    {
        return $this->owner->CloudinaryData[$prop];
    }

    public function getOneByPublicId($publicId)
    {
        return DataObject::get_one($this->owner->ClassName, [
            'PublicID' => $publicId
        ]);
    }

    public function getApiResourceOptions()
    {
        $opts = [
            'resource_type' => $this->owner->ResourceType,
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

    public function getCloudinaryData()
    {
        if (!$this->owner->RemoteData) {
            $api = new Api();
            $opts = $this->getApiResourceOptions();
            $data = $api->resource($this->owner->PublicID, $opts);
            $data = $data->getArrayCopy();
            while (array_key_exists('derived_next_cursor', $data) && ($data['derived_next_cursor'])) {
                $opts['derived_next_cursor'] = $data['derived_next_cursor'];
                $newData = $api->resource($this->owner->PublicID, $opts);
                $data['derived'] = array_merge($data['derived'], $newData->offsetGet('derived'));
                $data['derived_next_cursor'] = @$newData->offsetGet('derived_next_cursor');
            }

            $this->owner->RemoteData = json_encode($data);
            SQLUpdate::create('File')
                ->addWhere(['PublicID = ?' => $this->owner->PublicID])
                ->addAssignments(['RemoteData' => $this->owner->RemoteData])
                ->execute();
            SQLUpdate::create('File_Live')
                ->addWhere(['PublicID = ?' => $this->owner->PublicID])
                ->addAssignments(['RemoteData' => $this->owner->RemoteData])
                ->execute();
        }
        return json_decode($this->owner->RemoteData, true);
    }

    public static function flush()
    {
        SQLUpdate::create('File')->addAssignments([
            'RemoteData' => NULL,
        ])->execute();
        SQLUpdate::create('File_Live')->addAssignments([
            'RemoteData' => NULL,
        ])->execute();
    }
}
