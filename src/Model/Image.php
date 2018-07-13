<?php

namespace MadeHQ\Cloudinary\Model;

class Image extends File
{
    private static $table_name = 'CloudinaryImage';

    // These are basically defaults
    protected $options = [
        'secure' => true,
        'quality' =>  'auto',
        'crop' => 'fit',
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

    // Chainable methods, set what options you need on $this then return it
    public function Size($width, $height = false) {
        $this->options['width'] = $width;
        $this->options['height'] = $height;

        return $this;
    }

    public function Crop($crop) {
        $this->options['crop'] = $crop;
        return $this;
    }

    public function Quality($quality) {
        $this->options['quality'] = $quality;
        return $this;
    }

    public function Gravity($gravity) {
        $this->options['gravity'] = is_bool($gravity) ? $gravity : @json_decode($gravity) ?: $gravity;
        return $this;
    }

    public function FetchFormatAuto($fetchFormatAuto) {
        $this->options['fetchFormatAuto'] = is_bool($fetchFormatAuto) ? $fetchFormatAuto : @json_decode($fetchFormatAuto);
        return $this;
    }

    public function DuoTone($duoTone) {
        // Allow a blank duoTone so we don't have to use crazy ifs all over the place
        if (trim($duoTone) == '') {
            return $this;
        }

        // If the duoTone Paramter is just a colour, we plug that colour into a predefined string
        if (mb_substr($duoTone, 0,1) === '#') {
            $color = strtolower(str_replace("#", "", $duoTone));
            $duoTone = 'tint:100:2E282E:0p:'.$color.':100p';
        }

        $this->options['transformation'] = [['effect' => 'grayscale'],['effect' => $duoTone]];
        return $this;
    }

    /**
     * Gets the Cloudinary URL for the image at the requested size, crop etc.
     * NOTE: Uses the `is_bool` check because SS template passes `true`/`false` as string so uses json_decode
     * @param Int $width
     * @param Int $height
     * @param String $crop
     * @param String $quality
     * @param String $gravity
     * @param Boolean $fetchFormatAuto
     */
    public function URL($width = 100, $height = 100, $crop = null, $quality = null, $gravity = null, $fetchFormatAuto = true)
    {
        $returnObj = $this->size($width, $height);

        if (isset($crop)) {
            $returnObj = $returnObj->crop($crop);
        }
        if (isset($quality)) {
            $returnObj = $returnObj->quality($quality);
        }
        if (isset($gravity)) {
            $returnObj = $returnObj->gravity($gravity);
        }
        if (isset($fetchFormatAuto)) {
            $returnObj = $returnObj->fetchFormatAuto($fetchFormatAuto);
        }

        return $this;
    }

    /**
     * @inheritdoc
     */
    public function PreviewLink($action = null)
    {
        // Size to width / height
        $width = (int)$this->config()->get('asset_preview_width');
        $height = (int)$this->config()->get('asset_preview_height');
        $link = $this->URL($width, $height, 'fit');
        $this->extend('updatePreviewLink', $link, $action);
        return (string) $link;
    }

    public function ResizeByWidth($width)
    {
        $this->options['width'] = $width;

        unset($this->options['height']);

        return $this;
    }

    public function ResizeByHeight($height)
    {
        $this->options['height'] = $height;

        unset($this->options['width']);

        return $this;
    }

    public function __toString()
    {
        return $this->forTemplate();
    }

    // This renders the end of the chain to the template
    public function forTemplate() {
        $options = $this->options;

        if (!isset($options['resource_type'])) {
            $options['resource_type'] = $this->ResourceType;
        }

        if (!isset($options['type'])) {
            $options['type'] = $this->Type;
        }

        if (!isset($options['gravity'])) {
            $options['gravity'] = $this->Gravity;
        }

        // These crops don't support gravity, Cloudinary returns a 400 if passed
        if (isset($options['crop'])) {
            if (in_array($options['crop'], ['fit', 'limit', 'mfit', 'pad', 'lpad'])) {
                unset($options['gravity']);
            }
        }

        $fileName = $this->Format ? $this->PublicID. '.'. $this->Format : $this->PublicID;
        return \Cloudinary::cloudinary_url($fileName, $options);
    }

    public function getWidth($forceFromCloudinary = false)
    {
        if ($this->OriginalWidth && !$forceFromCloudinary) {
            return $this->OriginalWidth;
        }
        return $this->OriginalWidth = $this->getRemoteData()['width'];
    }

    public function getHeight($forceFromCloudinary = false)
    {
        if ($this->OriginalHeight && !$forceFromCloudinary) {
            return $this->OriginalHeight;
        }
        return $this->OriginalHeight = $this->getRemoteData()['height'];
    }

    public function getCredit($forceFromCloudinary = false)
    {
        if ($this->OriginalCredit && !$forceFromCloudinary) {
            return $this->OriginalCredit;
        }
        $remoteData = $this->getRemoteData();

        if (!is_array($remoteData)) {
            return $this->OriginalCredit = '';
        }

        if (!array_key_exists('image_metadata', $remoteData)) {
            return $this->OriginalCredit = '';
        }

        $metadata = $remoteData['image_metadata'];

        if (array_key_exists('Copyright', $metadata)) {
            return $this->OriginalCredit = $metadata['Copyright'];
        }

        if (array_key_exists('By-line', $metadata)) {
            return $this->OriginalCredit = $metadata['By-line'];
        }

        if (array_key_exists('Artist', $metadata)) {
            return $this->OriginalCredit = $metadata['Artist'];
        }

        if (array_key_exists('Creator', $metadata)) {
            return $this->OriginalCredit = $metadata['Creator'];
        }

        if (array_key_exists('XPAuthor', $metadata)) {
            return $this->OriginalCredit = $metadata['XPAuthor'];
        }

        return $this->OriginalCredit = '';
    }

    public function getCaption($forceFromCloudinary = false)
    {
        if ($this->OriginalCaption && !$forceFromCloudinary) {
            return $this->OriginalCaption;
        }
        $remoteData = $this->getRemoteData();

        if (!is_array($remoteData)) {
            return $this->OriginalCaption = '';
        }

        if (!array_key_exists('context', $remoteData)) {
            return $this->OriginalCaption = '';
        }

        if (!array_key_exists('caption', $remoteData['context'])) {
            return $this->OriginalCaption = '';
        }

        return $this->OriginalCaption = $remoteData['context']['caption'];
    }

    public function getColors($forceFromCloudinary = false)
    {
        if ($this->OriginalColours && !$forceFromCloudinary) {
            return json_decode($this->OriginalColours);
        }
        $remoteData = $this->getRemoteData();

        if (!is_array($remoteData)) {
            return [];
        }

        if (!array_key_exists('colors', $remoteData)) {
            return [];
        }
        $this->OriginalColours = json_encode($remoteData['colors']);
        return $remoteData['colors'];
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
}
