<?php

namespace MadeHQ\Cloudinary\Traits;

use SilverStripe\Assets\Folder;
use Cloudinary\Api;

/**
 *
 */
trait CloudinaryFileTrait
{
    private static $db = array(
        'PublicID' => 'Varchar(255)',
        'SecureURL' => 'Varchar(1000)',
        'ResourceType' => 'Varchar',
        'Type' => 'Varchar',
        'Format' => 'Varchar(10)',
    );

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
        $this->Format = $resource['format'];
        $this->SecureURL = $resource['secure_url'];
        $this->ResourceType = $resource['resource_type'];
        $this->type = $resource['type'];
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

    public function exists()
    {
        return (isset($this->record['ID']) && $this->record['ID'] > 0);
    }

    public static function createFromCloudinaryResource($resource)
    {
        $parentFolder = static::getParentFolderForResouce($resource);
        $className = static::class;
        $file = $className::create();
        $file->PublicID = $resource['public_id'];
        $file->Title = static::getNameForResource($resource);
        $file->Format = $resource['format'];
        $file->SecureURL = $resource['secure_url'];
        $file->ResourceType = $resource['resource_type'];
        $file->Type = $resource['type'];
        $file->Parent = $parentFolder;
        $file->write();
    }

    public function setFromLocalFile($path, $filename = null, $hash = null, $variant = null, $config = array())
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

    public static function PrivateUrl($publicId, $format, $options = array())
    {
var_dump('check that user is logged in and has admin access');
        $cloudinary_params = Cloudinary::sign_request(
            array(
                "timestamp" => time(),
                "public_id" => $public_id,
                "format" => $format,
                "type" => Cloudinary::option_get($options, "type"),
                "attachment" => Cloudinary::option_get($options, "attachment"),
                "expires_at" => Cloudinary::option_get($options, "expires_at"),
            ),
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

    private static function getParentFolderForResouce($resource)
    {
        $publicId = $resource['public_id'];
        $segments = explode('/', $publicId);
        array_pop($segments);
        $folderPath = implode('/', $segments);
        return Folder::find_or_make($folderPath);
    }
}
