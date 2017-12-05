<?php

namespace MadeHQ\Cloudinary\Model;

use MadeHQ\Cloudinary\Forms\File As ImageField;
use Cloudinary;

class Image extends File
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

    private static $db = [
        'Gravity' => 'Varchar(15)',
        'Credit' => 'Varchar(200)',
        'Caption' => 'Varchar(200)',
    ];

    private static $table_name = 'CloudinaryImage';

    public function scaffoldFormField($title = null, $params = null)
    {
        return ImageField::create($this->name, $title);
    }

    public function getSource($width, $height, $crop = 'fill', $format = null)
    {
        if (!$this->exists()) {
            return false;
        }
        $options = [
            'cloud_name' => $this->getCloudName(),
            'format' => $format ?: $this->getFormat(),
            'secure' => true,
            'width' => $width,
            'height' => $height,
            'crop' => $crop,
            'gravity' => $this->Gravity,
        ];
        return Cloudinary::cloudinary_url(
            $this->getPublicName(),
            $options
        );
    }
}
