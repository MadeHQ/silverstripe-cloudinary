<?php

namespace MadeHQ\Cloudinary\Model;

use MadeHQ\Cloudinary\Forms\File As FileField;
use SilverStripe\ORM\DataObject;

class File extends DataObject
{
    private static $db = [
        'URL' => 'Varchar(255)',
        'Title' => 'Varchar',
    ];

    private static $table_name = 'CloudinaryFile';

    public function scaffoldFormField($title = null, $params = null)
    {
        return FileField::create($this->name, $title);
    }
}
