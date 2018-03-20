<?php

namespace MadeHQ\Cloudinary\Model;

use SilverStripe\Assets\File As BaseFile;
use MadeHQ\Cloudinary\Traits\CloudinaryFileTrait;

class Image extends BaseFile
{
    private static $gravities = [
        'auto' => 'Auto',
        'center' => 'Center',
        'faces' => 'Faces',
        'north' => 'Top',
        'north_east' => 'Top right',
        'east' => 'Right',
        'south_east' => 'Bottom right',
        'south' => 'Bottom',
        'south_west' => 'Bottom left',
        'west' => 'Left',
        'north_west' => 'Top left',
    ];

    use CloudinaryFileTrait;

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
var_dump(__METHOD__);
try {
        $fetchFormatAuto = is_bool($fetchFormatAuto) ? $fetchFormatAuto : @json_decode($fetchFormatAuto);
        $gravity = is_bool($gravity) ? $gravity : @json_decode($gravity);
        $options = $this->getDefaultImageOptions($width, $height, $crop, $quality, $gravity, $fetchFormatAuto);
        $fileName = $this->Format ? $this->PublicID. '.'. $this->Format : $this->PublicID;
var_dump($fileName);
        return \Cloudinary::cloudinary_url($fileName, $options);
} catch (\Exception $e) {
    var_dump($e);die;
}
    }

    private function getDefaultImageOptions($width, $height, $crop, $quality = 'auto', $gravity = false, $fetchFormatAuto = true) {
        $options = array(
            'secure' => true,
            'width' => $width,
            'height' => $height,
            'quality' =>  $quality,
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
