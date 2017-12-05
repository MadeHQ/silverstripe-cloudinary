<?php

namespace MadeHQ\Cloudinary\Model;

use MadeHQ\Cloudinary\Forms\Audio As AudioField;

class Audio extends File
{
    private static $db = [
        'Duration' => 'Time',
    ];

    private static $table_name = 'CloudinaryAudio';

    public function scaffoldFormField($title = null, $params = null)
    {
        return AudioField::create($this->name, $title);
    }
}
