<?php

namespace MadeHQ\Cloudinary\Model;

use MadeHQ\Cloudinary\Forms\Video As VideoField;

class Video extends File
{
    private static $db = [
        'Duration' => 'Time',
    ];

    private static $table_name = 'CloudinaryVideo';

    public function scaffoldFormField($title = null, $params = null)
    {
        return VideoField::create($this->name, $title);
    }
}
