<?php

namespace MadeHQ\Cloudinary\Model;

class Image extends File
{
    /**
     * @var string
     */
    private static $table_name = 'CloudinaryImage';

    /**
     * @var array
     * @config
     */
    private static $non_gravity_crops = ['fit', 'limit', 'mfit', 'pad', 'lpad', 'scale'];

    /**
     * @var array
     * @config
     */
    private static $valid_image_formats = [
        'jpg',
        'gif',
        'png',
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

    /**
     * Database fields
     * @var array
     */
    private static $db = [
        'OriginalWidth' => 'Int',
        'OriginalHeight' => 'Int',
        'OriginalCaption' => 'Text',
        'OriginalCredit' => 'Text',
        'OriginalColours' => 'Text',
    ];

    /**
     * @var array
     */
    private static $belongs_to = [
        'ImageLink' => ImageLink::class,
    ];

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

    /**
     * @param int $width
     * @param int $height
     * @return CachedImage
     */
    public function Size($width, $height = false)
    {
        return $this->Transform([ 'width' => $width, 'height' => $height ]);
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
     * @param int $width
     * @param string $crop
     * @return CachedImage
     */
    public function ResizeByWidth($width, string $crop = 'fit')
    {
        return $this->Transform([ 'width' => $width, 'crop' => $crop ], 0, ['height']);
    }

    /**
     * @param int $height
     * @param string $crop
     * @return CachedImage
     */
    public function ResizeByHeight($height, string $crop = 'fit')
    {
        return $this->Transform([ 'height' => $height, 'crop' => $crop ], 0, ['width']);
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
     * Gets the Cloudinary URL for the image at the requested size, crop etc.
     * NOTE: Uses the `is_bool` check because SS template passes `true`/`false` as string so uses json_decode
     * @param Int $width
     * @param Int $height
     * @param String $crop
     * @param String $quality
     * @param String $gravity
     * @param Boolean $fetchFormat
     */
    public function URL($width = 100, $height = 100, string $crop = null, string $quality = null, string $gravity = null, string $fetchFormat = 'auto')
    {
        $object = $this->Size($width, $height);

        if ($crop) {
            $object = $object->Crop($crop);
        }

        if ($quality) {
            $object = $object->Quality($quality);
        }

        if ($gravity) {
            $object = $object->Gravity($gravity);
        }

        return $object->FetchFormat($fetchFormat);
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

        if ($this->ImageLink()->exists()) {
            if (array_key_exists('gravity', $transformations[0]) === false || $transformations[0]['gravity'] === 'auto') {
                $transformations[0]['gravity'] = $this->ImageLink()->Focus;
            }
        } else if (array_key_exists('gravity', $transformations[0]) === false || !$transformations[0]['gravity']) {
            $transformations[0]['gravity'] = 'auto';
        }

        // These crops don't support gravity, Cloudinary returns a 400 if passed
        $nonGravityCrops = static::config()->get('non_gravity_crops');
        $isImage = in_array($this->Format, static::config()->get('valid_image_formats'));

        // Loop through all and apply the generic stuff
        foreach ($transformations as &$transformation) {
            // Remove gravity if specific crop is applied
            if (array_key_exists('crop', $transformation) && in_array($transformation['crop'], $nonGravityCrops) || !array_key_exists('crop', $transformation)) {
                unset($transformation['gravity']);
            }
            if (
                !$isImage &&
                (!array_key_exists('width', $transformation) || empty($transformation['width'])) &&
                (!array_key_exists('height', $transformation) || empty($transformation['height']))
            ) {
                unset($transformation['fetch_format']);
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
     * @return string
     */
    public function __toString()
    {
        return $this->forTemplate();
    }

    /**
     * @inheritdoc
     */
    public function Link()
    {
        return $this->Quality('auto')->Gravity('auto')->forTemplate();
    }

    /**
     * @inheritdoc
     */
    public function PreviewLink($action = null)
    {
        // Size to width / height
        $width = (int)$this->config()->get('asset_preview_width');
        $height = (int)$this->config()->get('asset_preview_height');

        $link = $this->URL($width, $height, 'fill');

        $this->extend('updatePreviewLink', $link, $action);

        return $link->forTemplate();
    }

    public function getWidth($forceFromCloudinary = false)
    {
        if ($this->OriginalWidth && !$forceFromCloudinary) {
            return $this->OriginalWidth;
        }

        $this->OriginalWidth = static::get_remote_data($this->PublicID, $this->ResourceType)['width'];

        return $this->OriginalWidth;
    }

    public function getHeight($forceFromCloudinary = false)
    {
        if ($this->OriginalHeight && !$forceFromCloudinary) {
            return $this->OriginalHeight;
        }

        $this->OriginalHeight = static::get_remote_data($this->PublicID, $this->ResourceType)['height'];

        return $this->OriginalHeight;
    }

    public function getCredit($forceFromCloudinary = false)
    {
        if (!$forceFromCloudinary) {
            return $this->OriginalCredit;
        }

        $remoteData = static::get_remote_data($this->PublicID, $this->ResourceType);

        if (!is_array($remoteData)) {
            return $this->OriginalCredit = '';
        }

        if (!array_key_exists('image_metadata', $remoteData)) {
            return $this->OriginalCredit = '';
        }

        $metadata = $remoteData['image_metadata'];

        if (array_key_exists('Copyright', $metadata)) {
            $this->OriginalCredit = $metadata['Copyright'];
        } else if (array_key_exists('By-line', $metadata)) {
            $this->OriginalCredit = $metadata['By-line'];
        } else if (array_key_exists('Artist', $metadata)) {
            $this->OriginalCredit = $metadata['Artist'];
        } else if (array_key_exists('Creator', $metadata)) {
            $this->OriginalCredit = $metadata['Creator'];
        } else if (array_key_exists('XPAuthor', $metadata)) {
            $this->OriginalCredit = $metadata['XPAuthor'];
        }

        return $this->OriginalCredit;
    }

    public function getCaption($forceFromCloudinary = false)
    {
        if (!$forceFromCloudinary) {
            return $this->OriginalCaption;
        }

        $remoteData = static::get_remote_data($this->PublicID, $this->ResourceType);

        $this->OriginalCaption = static::extract_caption($remoteData);

        return $this->OriginalCaption;
    }

    public static function extract_caption($data)
    {
        if (!is_array($data)) {
            return null;
        }

        if (!array_key_exists('context', $data)) {
            return null;
        }

        if (!is_array($data['context'])) {
            return null;
        }

        if (!array_key_exists('custom', $data['context'])) {
            return null;
        }

        if (!is_array($data['context']['custom'])) {
            return null;
        }

        if (!array_key_exists('alt', $data['context']['custom'])) {
            return null;
        }

        return $data['context']['custom']['alt'];
    }

    /**
     * Gets the colours used in the image with the percentage of the image that has that colour
     * This is because we automatically pass `true` for the `colors`
     * See (https://cloudinary.com/blog/api_for_extracting_semantic_image_data_colors_faces_exif_data_and_more)
     * @return array
     */
    public function getColors($forceFromCloudinary = false)
    {
        if ($this->OriginalColours && !$forceFromCloudinary) {
            return json_decode($this->OriginalColours);
        }

        $remoteData = static::get_remote_data($this->PublicID, $this->ResourceType);

        if (!is_array($remoteData)) {
            return [];
        }

        if (!array_key_exists('colors', $remoteData)) {
            return [];
        }

        $this->OriginalColours = json_encode($remoteData['colors']);

        return $remoteData['colors'];
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

    public function updateFromCloudinary($resource)
    {
        parent::updateFromCloudinary($resource);

        $this->getWidth(true);
        $this->getHeight(true);
        $this->getCredit(true);
        $this->getCaption(true);
        $this->getColors(true);

        $this->write();
    }

    public static function createFromCloudinaryResource($resource)
    {
        $file = parent::createFromCloudinaryResource($resource);

        $file->getWidth(true);
        $file->getHeight(true);
        $file->getCredit(true);
        $file->getCaption(true);
        $file->getColors(true);

        $file->write();

        return $file;
    }

    /**
     * The default SS functionality works for normal `::getOrientation()`
     * @return mixed
     */
    public function getCloudinaryOrientation()
    {
        $data = static::get_remote_data($this->PublicID, $this->ResourceType);
        if (array_key_exists('image_metadata', $data)) {
            if (array_key_exists('Orientation', $data['image_metadata'])) {
                return $data['image_metadata']['Orientation'];
            }
        }
        return false;
    }

    public function Background($colour)
    {
        return $this->Transform(['background' => $colour]);
    }

    // Below are standard SS resize methods so adding them for compatibility

    /**
     * {@inheritdoc}
     */
    public function ScaleWidth($width)
    {
        return $this->ResizeByWidth($width);
    }

    /**
     * {@inheritdoc}
     */
    public function ScaleMaxWidth($width)
    {
        if ($this->Width <= $width) {
            return $this;
        }
        return $this->ResizeByWidth($width);
    }

    /**
     * {@inheritdoc}
     */
    public function ScaleHeight($height)
    {
        return $this->ResizeByHeight($height);
    }

    /**
     * {@inheritdoc}
     */
    public function ScaleMaxHeight($height)
    {
        if ($this->Height <= $height) {
            return $this;
        }
        return $this->ResizeByHeight($height);
    }

    /**
     * {@inheritdoc}
     */
    public function Fit($width, $height)
    {
        return $this->Size($width, $height)->Crop('fit');
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
        return $this->Size($width, $height)->Crop('fit');
    }


    /**
     * {@inheritdoc}
     */
    public function ResizedImage($width, $height)
    {
        return $this->Size($width, $height)->Crop('scale');
    }

    /**
     * {@inheritdoc}
     */
    public function Fill($width, $height)
    {
        return $this->Size($width, $height)->Crop('fill');
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
        return $this->Size($width, $height)->Crop('fill');
    }

    /**
     * {@inheritdoc}
     */
    public function CropWidth($width)
    {
        return $this->ResizeByWidth($width, 'fill');
    }

    /**
     * {@inheritdoc}
     */
    public function CropHeight($height)
    {
        return $this->ResizeByHeight($height, 'fill');
    }

    /**
     * {@inheritdoc}
     */
    public function Pad($width, $height, $backgroundColour = 'FFFFFF', $transparencyPercent = 0)
    {
        return $this->Transform([ 'width' => $width, 'height' => $height, 'background' => sprintf('rgb:%s', $backgroundColour), 'crop' => 'pad' ]);
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
