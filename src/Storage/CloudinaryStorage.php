<?php

namespace MadeHQ\Cloudinary\Storage;

use SilverStripe\Assets\Storage\{ AssetStore, AssetStoreRouter };
use Cloudinary;
use Cloudinary\Uploader;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Control\{ Director, HTTPResponse };

class CloudinaryStorage implements AssetStore, AssetStoreRouter
{
    use Configurable;

    /**
     * Set HTTP error code for requests to secure denied assets.
     * Note that this defaults to 404 to prevent information disclosure
     * of secure files
     *
     * @config
     * @var int
     */
    private static $denied_response_code = 404;

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

    public function getResponseFor($asset)
    {
        return $this->createDeniedResponse();
    }

    /**
     * Generate a response for requests to a denied protected file
     *
     * @return HTTPResponse
     */
    protected function createDeniedResponse()
    {
        $code = (int)$this->config()->get('denied_response_code');
        return $this->createErrorResponse($code);
    }

    /**
     * Create a response with the given error code
     *
     * @param int $code
     * @return HTTPResponse
     */
    protected function createErrorResponse($code)
    {
        $response = new HTTPResponse('', $code);

        // Show message in dev
        if (!Director::isLive()) {
            $response->setBody($response->getStatusDescription());
        }

        return $response;
    }

    /**
     * @inheritdoc
     */
    public function setFromString($data, $filename, $hash = null, $variant = null, $config = array())
    {
        // intentionally empty
    }

    /**
     * @inheritdoc
     */
    public function setFromLocalFile($path, $filename = null, $hash = null, $variant = null, $config = array())
    {
        $filename = str_replace('\\', '/', $filename);
        $parts = explode('/', $filename);
        $publicId = explode('.', array_pop($parts));

        $options = [
            'public_id' => $publicId[0],
            'folder' => implode('/', $parts),
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
