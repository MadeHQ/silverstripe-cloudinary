<?php

namespace MadeHQ\Cloudinary\Storage;

use SilverStripe\Assets\Storage\AssetStore;
use Cloudinary;
use Cloudinary\Uploader;

class CloudinaryStorage implements AssetStore
{
    /**
     * @inheritdoc
     */
    public function getCapabilities()
    {
        return array(
            'visibility' => array(
                self::VISIBILITY_PUBLIC,
            ),
            'conflict' => array(
                // self::CONFLICT_EXCEPTION,
                // self::CONFLICT_OVERWRITE,
                // self::CONFLICT_RENAME,
                // self::CONFLICT_USE_EXISTING
            )
        );
    }

    /**
     * @inheritdoc
     */
    public function setFromString($data, $filename, $hash = null, $variant = null, $config = array())
    {
var_dump(__METHOD__);
    }

    /**
     * @inheritdoc
     */
    public function setFromLocalFile($path, $filename = null, $hash = null, $variant = null, $config = array())
    {
        $filename = str_replace('\\', '/', $filename);
        $parts = explode('/', $filename);
        $publicId = explode('.', array_pop($parts));
        $publicId = $publicId[0];
        $options = [
            'public_id' => $publicId,
            'folder' => implode('/', $parts),
            'type' => 'private',
        ];

        $response = Uploader::upload($path, $options);
        return [
            'Filename' => $response['public_id'],
            'PublicID' => $response['public_id'],
            'Format' => $response['format'],
            'SecureURL' => $response['secure_url'],
            'ResourceType' => $response['resource_type'],
            'Type' => $response['type'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function setFromStream($stream, $filename, $hash = null, $variant = null, $config = array())
    {
var_dump(__METHOD__);
    }

    /**
     * @inheritdoc
     */
    public function getAsString($filename, $hash, $variant = null)
    {
var_dump(__METHOD__);
    }

    /**
     * @inheritdoc
     */
    public function getAsStream($filename, $hash, $variant = null)
    {
var_dump(__METHOD__);
    }

    /**
     * @inheritdoc
     */
    public function getAsURL($filename, $hash, $variant = null, $grant = true)
    {
        return Cloudinary::cloudinary_url($filename);
    }

    /**
     * @inheritdoc
     */
    public function getMetadata($filename, $hash, $variant = null)
    {
        return null;
var_dump(__METHOD__, func_get_args());die;
    }

    /**
     * @inheritdoc
     */
    public function getMimeType($filename, $hash, $variant = null)
    {
        return 'image/png';
    }

    /**
     * @inheritdoc
     */
    public function getVisibility($filename, $hash)
    {
        return self::VISIBILITY_PUBLIC;
    }

    /**
     * @inheritdoc
     */
    public function exists($filename, $hash, $variant = null)
    {
        header(sprintf('Checking-%s: %s', $hash, $filename));
        return true;
    }

    /**
     * @inheritdoc
     */
    public function delete($filename, $hash)
    {
var_dump(__METHOD__);
    }

    /**
     * @inheritdoc
     */
    public function rename($filename, $hash, $newName)
    {
var_dump(__METHOD__);
    }

    /**
     * @inheritdoc
     */
    public function copy($filename, $hash, $newName)
    {
var_dump(__METHOD__);
    }

    /**
     * @inheritdoc
     */
    public function publish($filename, $hash)
    {
var_dump(__METHOD__);
    }

    /**
     * Not able to protect files in Cloudinary
     * @inheritdoc
     */
    public function protect($filename, $hash)
    {}

    /**
     * @inheritdoc
     */
    public function grant($filename, $hash)
    {
var_dump(__METHOD__);
    }

    /**
     * @inheritdoc
     */
    public function revoke($filename, $hash)
    {
var_dump(__METHOD__);
    }

    /**
     * @inheritdoc
     */
    public function canView($filename, $hash)
    {
var_dump(__METHOD__);
    }
}
