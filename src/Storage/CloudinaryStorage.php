<?php

namespace MadeHQ\Cloudinary\Storage;

use MadeHQ\Cloudinary\Model\File;
use SilverStripe\Assets\File as BaseFile;
use SilverStripe\Assets\Storage;
use Cloudinary;
use Cloudinary\Uploader;
use SilverStripe\Control\Director;

class CloudinaryStorage implements Storage\AssetStore, Storage\AssetStoreRouter
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
        // intentionally empty
    }

    /**
     * This is called from the URL `/assets/{$Filename}`
     * @inheritdoc
     */
    public function getResponseFor($asset)
    {
        $file = File::getOneByPublicId($asset);
        $controller = \SilverStripe\Control\Controller::curr();
        if ($file) {
            return $controller->redirect($file->AbsoluteURL, 301);
        }

        return $controller->httpError(404, sprintf('Unable to find [%s]', $asset));
    }

    /**
     * @inheritdoc
     */
    public function setFromLocalFile($path, $filename = null, $hash = null, $variant = null, $config = array())
    {
        $filename = str_replace('\\', '/', $filename);

        $info = pathinfo($filename);
        $extension = $info['extension'];

        $options = [
            'public_id' => $info['filename'],
            'folder' => $info['dirname'] === '.' ? '' : $info['dirname'],
        ];
        $categories = BaseFile::config()->app_categories;
        if (in_array($extension, $categories['audio']) || in_array($extension, $categories['video'])) {
            $options['resource_type'] = 'video';
        }

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
        // intentionally empty
    }

    /**
     * @inheritdoc
     */
    public function getAsString($filename, $hash, $variant = null)
    {
        // intentionally empty
    }

    /**
     * @inheritdoc
     */
    public function getAsStream($filename, $hash, $variant = null)
    {
        // intentionally empty
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
        if (!headers_sent()) {
            header(sprintf('Checking-%s: %s', $hash, $filename));
        }
        return true;
    }

    /**
     * @inheritdoc
     */
    public function delete($filename, $hash)
    {
        // intentionally empty
    }

    /**
     * @inheritdoc
     */
    public function rename($filename, $hash, $newName)
    {
        // intentionally empty
    }

    /**
     * @inheritdoc
     */
    public function copy($filename, $hash, $newName)
    {
        // intentionally empty
    }

    /**
     * @inheritdoc
     */
    public function publish($filename, $hash)
    {
        // intentionally empty
    }

    /**
     * Not able to protect files in Cloudinary
     * @inheritdoc
     */
    public function protect($filename, $hash)
    {
        // intentionally empty
    }

    /**
     * @inheritdoc
     */
    public function grant($filename, $hash)
    {
        // intentionally empty
    }

    /**
     * @inheritdoc
     */
    public function revoke($filename, $hash)
    {
        // intentionally empty
    }

    /**
     * @inheritdoc
     */
    public function canView($filename, $hash)
    {
        // intentionally empty
    }
}
