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
        return true;
    }

    public static function createFromCloudinaryResource($resource)
    {
        $parentFolder = static::getParentFolderForResouce($resource);
        $className = get_class();
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
