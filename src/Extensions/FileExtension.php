<?php

namespace MadeHQ\Cloudinary\Extensions;

use SilverStripe\ORM\DataExtension;

class FileExtension extends DataExtension
{
    private static $db = [
        'PublicID' => 'Varchar(255)',
    ];

    private static $indexes = [
        'PublicID' => [
            'type' => 'unique',
        ],
    ];
}
