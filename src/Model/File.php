<?php

namespace MadeHQ\Cloudinary\Model;

use SilverStripe\ORM\DataObject;
// var_dump(__FILE__);die();
class File extends DataObject
{
    private static $db = [
        'URL' => 'Varchar(255)',
        'Title' => 'Varchar',
    ];

    private static $table_name = 'CloudinaryFile';
}
