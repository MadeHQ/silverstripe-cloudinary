<?php

namespace MadeHQ\Cloudinary\Model;

class Image extends File
{
    private static $table_name = 'CloudinaryImage';

    // These are basically defaults
    protected $options = [
        'secure' => true,
        'width' => 100,
        'height' => 100,
        'quality' =>  'auto',
        'crop' => 'fit',
    ];

    // Chainable methods, set what options you need on $this then return it
    public function Size($width, $height) {
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
        return $link;
    }

    public function resizeByWidth($width)
    {
        $ratio = $this->Width / $this->Height;
        $newHeight = $width * $ratio;

        return $this->Size($width, (int)$newHeight);
    }

    // This renders the end of the chain to the template
    public function forTemplate() {
        $options = $this->options;

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
}
