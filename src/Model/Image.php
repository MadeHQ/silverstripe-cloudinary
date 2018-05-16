<?php

namespace MadeHQ\Cloudinary\Model;

class Image extends File
{
    private static $table_name = 'CloudinaryImage';

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
    public function URL($width, $height, $crop, $quality = 'auto', $gravity = false, $fetchFormatAuto = true)
    {
        $fetchFormatAuto = is_bool($fetchFormatAuto) ? $fetchFormatAuto : @json_decode($fetchFormatAuto);
        $gravity = is_bool($gravity) ? $gravity : @json_decode($gravity) ?: $gravity;
        $options = $this->getDefaultImageOptions($width, $height, $crop, $quality, $gravity, $fetchFormatAuto);
        $fileName = $this->Format ? $this->PublicID. '.'. $this->Format : $this->PublicID;
        return \Cloudinary::cloudinary_url($fileName, $options);
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

    private function getDefaultImageOptions($width, $height, $crop, $quality = 'auto', $gravity = false, $fetchFormatAuto = true) {
        $options = array(
            'secure' => true,
            'width' => $width,
            'height' => $height,
            'quality' =>  $quality,
            'type' => $this->Type,
        );
        if ($gravity) {
            $options['gravity'] = $gravity;
        } elseif ($this->Gravity !== 'auto') {
            $options['gravity'] = $this->Gravity;
        }
        if ($fetchFormatAuto) {
            $options['fetch_format'] = 'auto';
        }
        if ($crop) {
            $options['crop'] = $crop;
        }
        // These crops don't support gravity, Cloudinary returns a 400 if passed
        if (in_array($crop, array('fit', 'limit', 'mfit', 'pad', 'lpad'))) {
            unset($options['gravity']);
        }
        return $options;
    }
}
