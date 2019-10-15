<?php

namespace MadeHQ\Cloudinary\Model;
use SilverStripe\Assets\Image as SilverStripeImage;

class Image extends SilverStripeImage
{
    /**
     * @var array
     * @config
     */
    private static $non_gravity_crops = [
        'fit',
        'limit',
        'mfit',
        'pad',
        'lpad',
        'scale',
    ];

    /**
     * These are basically defaults
     * @var array
     */
    protected $options = [
        'secure' => true,
        'transformation' => [
            [
                'quality' =>  'auto:eco',
                'gravity' => 'auto',
                'fetch_format' => 'auto',
            ],
        ],
    ];

    public function getWidth()
    {
        return $this->getRemoteDataProperty('width');
    }

    public function getHeight()
    {
        return $this->getRemoteDataProperty('height');
    }

    /**
     * {@inheritdoc}
     */
    public function ScaleWidth($width)
    {
        return $this->Transform([ 'width' => $width, 'crop' => 'fit' ], 0, ['height']);
    }

    /**
     * {@inheritdoc}
     */
    public function ScaleMaxWidth($width)
    {
        if ($this->Width <= $width) {
            return $this;
        }
        return $this->Transform([ 'width' => $width, 'crop' => 'fit' ], 0, ['height']);
    }

    public function Size($width, $height)
    {
        return $this->Transform([ 'width' => $width, 'height' => $height ]);
    }

    /**
     * {@inheritdoc}
     */
    public function ScaleHeight($height)
    {
        return $this->Transform([ 'height' => $height, 'crop' => 'fit' ], 0, ['width']);
    }

    /**
     * {@inheritdoc}
     */
    public function ScaleMaxHeight($height)
    {
        if ($this->Height <= $height) {
            return $this;
        }
        return $this->Transform([ 'height' => $height, 'crop' => 'fit' ], 0, ['width']);
    }

    /**
     * {@inheritdoc}
     */
    public function Fit($width, $height)
    {
        return $this->Transform([ 'width' => $width, 'height' => $height, 'crop' => 'fit' ]);
    }

    /**
     * {@inheritdoc}
     */
    public function FitMax($width, $height)
    {
        if (
            $this->Width < $width ||
            $this->Height < $height
        ) {
            return $this;
        }
        return $this->Transform([ 'width' => $width, 'height' => $height, 'crop' => 'fit' ]);
    }

    /**
     * {@inheritdoc}
     */
    public function ResizedImage($width, $height)
    {
        return $this->Transform([ 'width' => $width, 'height' => $height, 'crop' => 'scale' ]);
    }

    /**
     * {@inheritdoc}
     */
    public function Fill($width, $height)
    {
        return $this->Transform([ 'width' => $width, 'height' => $height, 'crop' => 'fill' ]);
    }

    /**
     * {@inheritdoc}
     */
    public function FillMax($width, $height)
    {
        if (
            $this->Width < $width ||
            $this->Height < $height
        ) {
            return $this;
        }
        return $this->Transform([ 'width' => $width, 'height' => $height, 'crop' => 'fill' ]);
    }

    /**
     * {@inheritdoc}
     */
    public function CropWidth($width)
    {
        return $this->Transform([ 'width' => $width, 'crop' => 'fill' ], 0, ['height']);
    }

    /**
     * {@inheritdoc}
     */
    public function CropHeight($height)
    {
        return $this->Transform([ 'height' => $height, 'crop' => 'fill' ], 0, ['width']);
    }

    /**
     * {@inheritdoc}
     */
    public function Pad($width, $height, $backgroundColour = 'FFFFFF', $transparencyPercent = 0)
    {
        return $this->Transform([ 'width' => $width, 'height' => $height, 'background' => sprintf('rgb:%s', $backgroundColour), 'crop' => 'pad' ]);
    }

    /**
     * @param string $crop
     * @return CachedImage
     */
    public function Crop(string $crop = 'fill')
    {
        return $this->Transform([ 'crop' => $crop ]);
    }

    /**
     * @inheritdoc
     */
    public function PreviewLink($action = null)
    {
        // Size to width / height
        $width = (int)$this->config()->get('asset_preview_width');
        $height = (int)$this->config()->get('asset_preview_height');

        $link = $this->Fit($width, $height);

        $this->extend('updatePreviewLink', $link, $action);

        return $link->forTemplate();
    }

    public function existingOnly()
    {
        return $this;
    }

    /**
     * Adds a new transformation to an existing one, or appends
     * it to a brand new one
     *
     * @param array $transformation
     * @param int $index
     * @param array $remove
     * @return CachedImage
     */
    public function Transform(array $transformation, $index = 0, array $remove = [])
    {
        $clone = $this->toCache();

        if (is_null($transformation) || !is_array($transformation)) {
            return $clone;
        }

        $transformations = [];

        if (array_key_exists('transformation', $clone->options)) {
            $transformations = $clone->options['transformation'];
        }

        if ((int) $index === -1) {
            $duplicate = false;

            foreach ($transformations as $old) {
                $intersection = array_intersect($old, $transformation);

                if (count($old) === count($intersection)) {
                    $duplicate = true;
                }
            }

            if ($duplicate === false) {
                array_push($transformations, $transformation);
            }
        } else if (array_key_exists('effect', $transformation)) {
            array_push($transformations, $transformation);
        } else {
            $index = (int) $index;

            if (array_key_exists($index, $transformations)) {
                $old = $transformations[$index];

                foreach ($old as $key=>$value) {
                    if (array_key_exists($key, $remove)) {
                        unset($old[$key]);
                    }
                }

                $transformations[$index] = array_merge($old, $transformation);
            } else {
                $transformations[$index] = $transformation;
            }
        }

        $clone->options['transformation'] = $transformations;

        return $clone;
    }

    public function getURL($grant = true)
    {
        return $this->forTemplate();
    }

    /**
     * @return string
     */
    public function forTemplate()
    {
        if (!$this->PublicID) {
            return '';
        }
        $transformations = [];

        if (array_key_exists('transformation', $this->options)) {
            $transformations = $this->options['transformation'];
        }

        if (array_key_exists('resource_type', $transformations[0]) === false || !$transformations[0]['resource_type']) {
            $transformations[0]['resource_type'] = $this->ResourceType;
        }

        if (array_key_exists('gravity', $transformations[0]) === false || !$transformations[0]['gravity']) {
            $transformations[0]['gravity'] = 'auto';
        }

        // These crops don't support gravity, Cloudinary returns a 400 if passed
        $nonGravityCrops = static::config()->get('non_gravity_crops');

        // Loop through all and apply the generic stuff
        foreach ($transformations as &$transformation) {
            // Remove gravity if specific crop is applied
            if (array_key_exists('crop', $transformation) && in_array($transformation['crop'], $nonGravityCrops) || !array_key_exists('crop', $transformation)) {
                unset($transformation['gravity']);
            }
        }

        // Grab options
        $options = $this->options;

        // Fix type
        if (!array_key_exists('type', $options)) {
            $options['type'] = $this->Type;
        }

        // Reset the transformations of the object using what we gawt
        $options['transformation'] = $transformations;

        // Determine name
        $fileName = $this->Format ? $this->PublicID . '.' . $this->Format : $this->PublicID;

        // Generate image URL using options
        return \Cloudinary::cloudinary_url($fileName, $options);
    }

    /**
     * Makes a cache object
     *
     * @return CachedImage
     */
    public function toCache()
    {
        if ($this instanceof CachedImage) {
            return clone $this;
        }

        return CachedImage::create(
            $this->toMap()
        );
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return $this->forTemplate();
    }

    /**
     * @param int $quality
     * @return CachedImage
     */
    public function Quality($quality)
    {
        return $quality ? $this->setQuality($quality) : $this->setQuality();
    }

    public function setQuality(string $quality= 'auto')
    {
        return $this->Transform([ 'quality' => $quality ]);
    }

    /**
     * @param string $gravity
     * @return CachedImage
     */
    public function Gravity(string $gravity = 'auto')
    {
        return $this->Transform([ 'gravity' => $gravity ]);
    }

    /**
     * @param string $fetchFormat
     * @return CachedImage
     */
    public function FetchFormat(string $fetchFormat = 'auto')
    {
        return $this->Transform([ 'fetch_format' => $fetchFormat ]);
    }

    /**
     * Adds a radius onto the image to round the corners
     * @param Mixed $radius pass in an integer value to specify radius, or `max`
     * to round fully or leave blank/0 to remove radius completely
     * @return this
     */
    public function Radius($radius = 0)
    {
        if ($radius) {
            return $this->Transform([ 'radius' => $radius ]);
        }

        return $this->Transform([], 0, ['radius']);
    }

    /**
     * @param string $overlay
     * @param string $flags
     * @param string $width
     * @param string $height
     * @return CachedImage
     */
    public function Cutout(string $overlay, string $flags = 'cutter.relative', string $width = '1.0', string $height = '1.0')
    {
        if (is_null($overlay) || !strlen($overlay)) {
            return $this;
        }

        $transformation = [
            'overlay' => $overlay,
            'flags' => $flags,
            'width' => $width,
            'height' => $height
        ];

        return $this->Transform($transformation, -1);
    }

    /**
     * Applies a raw transformation
     *
     * @param string $effect
     * @param $value
     * @return CachedImage
     */
    public function Effect(string $effect, $value = null)
    {
        if (is_null($effect) || !strlen($effect)) {
            return $this;
        }

        if ($value) {
            $value = $effect . ':' . $value;
        } else {
            $value = $effect;
        }

        return $this->Transform([ 'effect' => $value ]);
    }

    /**
     * @param int $value
     * @return CachedImage
     */
    public function Brightness($value = 0)
    {
        if (is_null($value) || !(int) $value) {
            return $this;
        }

        return $this->Effect('brightness', $value);
    }

    /**
     * @param string $darkColour
     * @param string $lightcolour
     * @return CachedImage
     */
    public function DuoTone(string $darkColour = '', string $lightColour = null)
    {
        // We need at least one value
        if (trim($darkColour) === '') {
            return $this;
        }

        // Remove hash from dark colour
        $darkColour = strtolower(str_replace('#', '', $darkColour));

        // If first value is a hex, we need a second value too
        if (strlen($darkColour) === 3 ||  strlen($darkColour) === 6) {
            if (!$lightColour) {
                return $this;
            }

            // Remove hash from light colour
            $lightColour = strtolower(str_replace('#', '', $lightColour));

            // Make sure light colour is valid
            if (!strlen($lightColour) === 3 && !strlen($lightColour) === 6) {
                return $this;
            }

            $duoTone = 'tint:100:' . $darkColour . ':0p:' . $lightColour . ':100p';
        } else {
            $duoTone = $darkColour;
        }

        return $this
            ->Effect('grayscale')
            ->Effect($duoTone);
    }

    /**
     * Makes a clone
     *
     * @return Image
     */
    public function __clone()
    {
        return Image::create(
            $this->toMap()
        );
    }

    /**
     * @inheritdoc
     */
    public function Link()
    {
        return $this->Quality('auto')->Gravity('auto')->forTemplate();
    }

//     public function getCredit($forceFromCloudinary = false)
//     {
// var_dump();die;
//         if (!$forceFromCloudinary) {
//             return $this->OriginalCredit;
//         }

//         $remoteData = static::get_remote_data($this->PublicID, $this->ResourceType);

//         if (!is_array($remoteData)) {
//             return $this->OriginalCredit = '';
//         }

//         if (!array_key_exists('image_metadata', $remoteData)) {
//             return $this->OriginalCredit = '';
//         }

//         $metadata = $remoteData['image_metadata'];

//         if (array_key_exists('Copyright', $metadata)) {
//             $this->OriginalCredit = $metadata['Copyright'];
//         } else if (array_key_exists('By-line', $metadata)) {
//             $this->OriginalCredit = $metadata['By-line'];
//         } else if (array_key_exists('Artist', $metadata)) {
//             $this->OriginalCredit = $metadata['Artist'];
//         } else if (array_key_exists('Creator', $metadata)) {
//             $this->OriginalCredit = $metadata['Creator'];
//         } else if (array_key_exists('XPAuthor', $metadata)) {
//             $this->OriginalCredit = $metadata['XPAuthor'];
//         }

//         return $this->OriginalCredit;
//     }

//     public function getCaption($forceFromCloudinary = false)
//     {
//         if (!$forceFromCloudinary) {
//             return $this->OriginalCaption;
//         }

//         $remoteData = static::get_remote_data($this->PublicID, $this->ResourceType);

//         $this->OriginalCaption = static::extract_caption($remoteData);

//         return $this->OriginalCaption;
//     }

//     public static function extract_caption($data)
//     {
//         if (!is_array($data)) {
//             return null;
//         }

//         if (!array_key_exists('context', $data)) {
//             return null;
//         }

//         if (!is_array($data['context'])) {
//             return null;
//         }

//         if (!array_key_exists('custom', $data['context'])) {
//             return null;
//         }

//         if (!is_array($data['context']['custom'])) {
//             return null;
//         }

//         if (!array_key_exists('alt', $data['context']['custom'])) {
//             return null;
//         }

//         return $data['context']['custom']['alt'];
//     }

    /**
     * Gets the colours used in the image with the percentage of the image that has that colour
     * This is because we automatically pass `true` for the `colors`
     * See (https://cloudinary.com/blog/api_for_extracting_semantic_image_data_colors_faces_exif_data_and_more)
     * @return array
     */
    public function getColors($forceFromCloudinary = false)
    {
        if (!$this->config()->get('api_get_colors')) {
            throw new \RuntimeException('You need to enable "File::api_get_colors" via the config to be able to get Colour data');
        }
        return $this->getRemoteDataProperty('colors');
    }

    /**
     * Returns an array of colours used in the image
     * The key of the array item is the hex RGB colour without a hash (can be used directly in `::Pad()`)
     * The value of the array item is the same but with a # symbol at the start
     * @return Array
     */
    public function getColorsMap($forceFromCloudinary = false)
    {
        $colours = $this->getColors($forceFromCloudinary);

        if (!is_array($colours)) {
            return null;
        }

        $map = [];

        foreach ($colours as $color) {
            list($hex, $strength) = $color;

            $map[trim($hex, '#')] = $hex;
        }

        return $map;
    }

    /**
     * The default SS functionality works for normal `::getOrientation()`
     * @return mixed
     */
    public function getCloudinaryOrientation()
    {
        return $this->getCloudinaryImageMetaDataProperty('Orientation');
    }

    public function getCloudinaryImageMetaDataProperty($prop)
    {
        $data = $this->getRemoteDataProperty('image_metadata');
        return array_key_exists($prop, $data) ? $data[$prop] : null;
    }

    public function Background($colour)
    {
        return $this->Transform(['background' => $colour]);
    }

    public function updateApiResourceOptions(&$opts)
    {
        $opts['image_metadata'] = true;
    }
}

class CachedImage extends Image
{
    /**
     * Makes a cache object
     *
     * @return CachedImage
     */
    public function __clone()
    {
        return CachedImage::create(
            $this->toMap()
        );
    }
}
