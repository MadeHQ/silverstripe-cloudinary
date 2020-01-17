<?php

namespace MadeHQ\Cloudinary\Storage;

use Cloudinary;
use Cloudinary\Uploader;
use MadeHQ\Cloudinary\Model\File;
use SilverStripe\Assets\Storage;
use SilverStripe\Core\Config\Configurable;

class CloudinaryStorage implements Storage\AssetStore, Storage\AssetStoreRouter
{
    use Configurable;

    private static $upload_preset;

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
        $uploadPath = str_replace('\\', '/', $filename);
        $parts = explode('/', $uploadPath);
        $justFileName = array_pop($parts);

        $pathParts = pathinfo($justFileName);
        $extension = $pathParts['extension'];

        // Copy the uploaded files to a tmp location with the correct name, so we can let cloudinary deal
        // with generating a publicID using the actual filename
        $tmpFile = str_replace("//", "/", sys_get_temp_dir() . "/" . $justFileName);

        if(!move_uploaded_file($path, $tmpFile)) {
            throw new \Exception('Could not copy uploaded file to ' . $tmpFile);
        }

        $options = [
            'folder' => implode('/', $parts),
            'resource_type' => 'auto',
        ];
        if ($preset = static::config()->get('upload_preset')) {
            $options['upload_preset'] = $preset;
        }

        $response = Uploader::upload($tmpFile, $options);

        return [
            'Filename' => $response['public_id'],
            'PublicID' => $response['public_id'],
            'Format' => isset($response['format']) ? $response['format'] : $extension,
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
        header(sprintf('Checking-%s: %s', $hash, $filename));
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
