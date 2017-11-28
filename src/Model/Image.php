<?php

namespace MadeHQ\Cloudinary\Model;

use MadeHQ\Cloudinary\Forms\File As ImageField;

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
}
