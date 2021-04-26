<?php

namespace MadeHQ\Cloudinary\Storage;

use SilverStripe\Assets\Storage;
use Cloudinary;
use Cloudinary\Api;
use Cloudinary\Uploader;
use SilverStripe\Assets\File;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Versioned\Versioned;

class CloudinaryStorage implements Storage\AssetStore, Storage\AssetStoreRouter
{
    use Configurable;

    /**
     * See (https://cloudinary.com/documentation/upload_images) for a list of options for uploading
     * @var array
     */
    private static $default_options = [
        'resource_type' => 'auto',
    ];

    /**
     * @var Api
     */
    protected static $api;

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

    public static function getHash($filename, $variant)
    {
        return base64_encode(md5($filename, $variant));
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

        $options = static::config()->get('default_options');
        $options['folder'] = implode('/', $parts);
        $options['public_id'] = $pathParts['filename'];

        $response = Uploader::upload($tmpFile, $options);

        return [
            'Filename' => $justFileName,
            'PublicID' => $response['public_id'],
            'Format' => isset($response['format']) ? $response['format'] : $extension,
            'SecureURL' => $response['secure_url'],
            'ResourceType' => $response['resource_type'],
            'Type' => $response['type'],
            'Variant' => $response['version'],
            'Hash' => static::getHash($justFileName, $response['version']),
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
        $file = File::get_one(File::class, [
            'FileFilename' => $filename,
            'FileHash' => static::getHash($filename, $variant),
            'FileVariant' => $variant,
        ]);

        if (!$file) {
            // Try without the `Variant` parameter (empty string and NULL are not the same :/)
            $file = File::get_one(File::class, [
                'FileFilename' => $filename,
                'FileHash' => static::getHash($filename, $variant),
            ]);

            if (!$file) {
                $file = File::get_one(File::class, [
                    'FileFilename' => $filename,
                    'FileHash' => $hash,
                    'FileVariant' => $variant,
                ]);

                if (!$file) {
                    $file = File::get_one(File::class, [
                        'FileFilename' => $filename,
                        'FileHash' => $hash,
                    ]);
                }
            }
        }

        $opts = [
            'secure' => true,
            'resource_type' => $file->File->ResourceType,
            'version' => $variant,
        ];
        return $file ? Cloudinary::cloudinary_url($file->File->PublicID, $opts) : false;
    }

    /**
     * @inheritdoc
     */
    public function getMetadata($filename, $hash, $variant = null)
    {
        $file = File::get_one(File::class, [
            'FileFilename' => $filename,
            'FileHash' => static::getHash($filename, $variant),
            'FileVariant' => $variant,
        ]);
        if (!$file) {
            return [];
        }
        return [
            'size' => $file->getRemoteDataProperty('bytes'),
        ];
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
        if (!\headers_sent()) {
            @header(sprintf('Checking-%s: %s', rawurlencode($hash), $filename));
        }
        return true;
    }

    /**
     * @inheritdoc
     */
    public function delete($filename, $hash)
    {
        $file = static::get_latest_file_by_filename_and_hash($filename, $hash);
        if (!$file) {
            error_log(sprintf('Unable to find a file in DB for [%s][%s]', $filename, $hash));
            return;
        }
        $opts = [
            'resource_type' => $file->File->ResourceType,
        ];
        static::get_api()->delete_resources($file->File->PublicID, $opts);
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
        $file = File::get_one(File::class, [
            'FileFilename' => $filename,
            'FileHash' => $hash,
        ]);
        if ($file) {
            if ($newName !== $file->File->PublicID && $file->File->PublicID != '') {
                // Don't want to start appending extensions to the PublicID :O
                $newName = preg_replace('/\.\w+$/', '', $newName);
            }
            if ($file->File->PublicID !== $newName) {
                $uploadResult = Uploader::rename($file->File->PublicID, $newName, ['overwrite' => true]);
                $file->File->PublicID = $uploadResult['public_id'];
                $file->File->Variant = $uploadResult['version'];
                $file->write();
            }
        }
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
var_dump(__METHOD__, $filename, $hash);die;
    }

    /**
     * @return Api
     */
    protected static function get_api()
    {
        if (!static::$api) {
            static::$api = new Api();
        }
        return static::$api;
    }

    /**
     * @return File
     */
    protected function get_latest_file_by_filename_and_hash($filename, $hash)
    {
        return Versioned::get_including_deleted(File::class, [
            'FileFilename' => $filename,
            'FileHash' => $hash,
        ])->First();
    }
}
