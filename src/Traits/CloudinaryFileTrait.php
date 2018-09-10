<?php

namespace MadeHQ\Cloudinary\Traits;

use SilverStripe\Assets\Folder;
use SilverStripe\Versioned\Versioned;
use Cloudinary\Api;
use Cloudinary\Api\NotFound;

/**
 *
 */
trait CloudinaryFileTrait
{
    private $remoteData;

    private static $db = [
        'PublicID' => 'Varchar(255)',
        'SecureURL' => 'Varchar(1000)',
        'ResourceType' => 'Varchar',
        'Description' => 'Text',
        'Type' => 'Varchar',
        'Format' => 'Varchar(10)',
        'Bytes' => 'Int',
    ];

    private static $indexes = [
        'PublicID' => [
            'type' => 'unique',
        ],
    ];

    public static function getOneByPublicId($publicId)
    {
        return static::get_one(static::class, [
            'PublicID' => $publicId,
        ]);
    }

    public function updateFromCloudinary($resource)
    {
        $parentFolder = static::getParentFolderForResouce($resource);
        $this->PublicID = $resource['public_id'];
        $this->Title = static::getNameForResource($resource);
        $this->Format = static::getFormatForResource($resource);
        $this->SecureURL = $resource['secure_url'];
        $this->ResourceType = $resource['resource_type'];
        $this->Description = static::getDescriptionForResource($resource);
        $this->Type = $resource['type'];
        $this->Parent = $parentFolder;
        $this->write();
    }

    /**
     * Returns the file extension
     *
     * @return string
     */
    public function getExtension()
    {
        return $this->Format;
    }

    public function getIsImage()
    {
        return $this->ResourceType === 'image';
    }

    public function getIsVideo()
    {
        return $this->ResourceType === 'video';
    }

    public function exists()
    {
        return (isset($this->record['ID']) && $this->record['ID'] > 0);
    }

    public function getURL($grant = true)
    {
        return $this->SecureURL;
    }

    public static function createFromCloudinaryResource($resource)
    {
        $parentFolder = static::getParentFolderForResouce($resource);
        $className = static::class;
        $file = $className::create();
        $file->PublicID = $resource['public_id'];
        $file->Title = static::getNameForResource($resource);
        $file->Description = static::getDescriptionForResource($resource);
        $file->Format = static::getFormatForResource($resource);
        $file->SecureURL = $resource['secure_url'];
        $file->ResourceType = $resource['resource_type'];
        $file->Type = $resource['type'];
        $file->Parent = $parentFolder;
        $file->write();
        return $file;
    }

    public function setFromLocalFile($path, $filename = null, $hash = null, $variant = null, $config = [])
    {
        $result = parent::setFromLocalFile($path, $filename, $hash, $variant, $config);
        if ($result) {
            $this->PublicID = $result['PublicID'];
            $this->Format = $result['Format'];
            $this->SecureURL = $result['SecureURL'];
            $this->ResourceType = $result['ResourceType'];
            $this->Type = $result['Type'];
        }
        return $result;
    }

    public function getFileSize()
    {
        if ($this->Bytes) {
            return $this->Bytes;
        }
        $remoteData = static::get_remote_data($this->PublicID, $this->ResourceType);
        $this->Bytes = $remoteData['bytes'];
        $this->write();
        return $this->Bytes;
    }

    public function getFormattedFileSize()
    {
        return static::format_size($this->FileSize);
    }

    public static function PrivateUrl($publicId, $format, $options = [])
    {
        $cloudinary_params = Cloudinary::sign_request(
            [
                "timestamp" => time(),
                "public_id" => $public_id,
                "format" => $format,
                "type" => Cloudinary::option_get($options, "type"),
                "attachment" => Cloudinary::option_get($options, "attachment"),
                "expires_at" => Cloudinary::option_get($options, "expires_at"),
            ],
            $options
        );

        return Cloudinary::cloudinary_api_url("download", $options) . "?" . http_build_query($cloudinary_params);
    }

    private static function getNameForResource($resource)
    {
        $publicId = $resource['public_id'];
        $segments = explode('/', $publicId);
        $name = array_pop($segments);
        if (array_key_exists('format', $resource) && $resource['format']) {
            $name.= '.' . $resource['format'];
        }
        return $name;
    }

    private static function getFormatForResource($resource)
    {
        if (array_key_exists('format', $resource)) {
            return $resource['format'];
        }
        $parts = explode('.', static::getNameForResource($resource));
        return array_pop($parts);
    }

    private static function getParentFolderForResouce($resource)
    {
        $publicId = $resource['public_id'];
        $segments = explode('/', $publicId);
        array_pop($segments);
        $folderPath = implode('/', $segments);
        return Folder::find_or_make($folderPath);
    }

    private static function getDescriptionForResource($resource)
    {
        $remoteData = static::get_remote_data($resource['public_id'], $resource['resource_type']);

        if (!is_array($remoteData)) {
            return '';
        }

        if (!array_key_exists('context', $remoteData)) {
            return '';
        }

        if (!is_array($remoteData['context'])) {
            return '';
        }

        if (!array_key_exists('custom', $remoteData['context'])) {
            return '';
        }

        if (!is_array($remoteData['context']['custom'])) {
            return '';
        }

        if (!array_key_exists('alt', $remoteData['context']['custom'])) {
            return '';
        }

        return $remoteData['context']['custom']['alt'];
    }

    /**
     * Want files to be published automatically
     * @return void
     */
    public function onAfterWrite()
    {
        parent::onAfterWrite();

        // No publishing UX for folders, so just cascade changes live
        if (class_exists(Versioned::class) && Versioned::get_stage() === Versioned::DRAFT) {
            $this->copyVersionToStage(Versioned::DRAFT, Versioned::LIVE);
        }
    }

    /**
     * Want files to be unpublished automatically
     * @return void
     */
    public function onBeforeDelete()
    {
        parent::onBeforeDelete();

        if (class_exists(Versioned::class) && Versioned::get_stage() === Versioned::DRAFT) {
            $this->deleteFromStage(Versioned::LIVE);
        }
    }

    /**
     * @var array
     */
    protected static $remote_data_cache = [];

    /**
     * @return
     */
    public static function get_remote_data($publicID, $resourceType)
    {
        if (array_key_exists($publicID, static::$remote_data_cache)) {
            return static::$remote_data_cache[$publicID];
        }

        try {
            $api = new Api();

            static::$remote_data_cache[$publicID] = $api->resource($publicID, [
                'resource_type' => $resourceType,
                'colors' => true,
                'image_metadata' => true,
            ])->getArrayCopy();

            return static::$remote_data_cache[$publicID];
        } catch (\Cloudinary\Api\RateLimited $e) {
            return false;
        } catch (NotFound $e) {
            return false;
        }
    }
}
