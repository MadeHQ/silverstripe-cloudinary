<?php

namespace MadeHQ\Cloudinary\Model;

use MadeHQ\Cloudinary\Model\Image;

class ImageLink extends FileLink
{
    private static $db = [
        'Gravity' => 'Varchar(15)',
        'Alt' => 'Varchar(200)',
        'Caption' => 'Text',
        'Credit' => 'Text',
    ];

    /**
     * Has_one relationship
     * @var array
     */
    private static $has_one = [
        'File' => Image::class,
    ];

    private static $table_name = 'CloudinaryImageLink';

    public function getCredit()
    {
        return $this->dbObject('Credit')->exists() ? $this->dbObject('Credit')->Value : $this->failover->Credit;
    }

    public function getCaption()
    {
        return $this->dbObject('Caption')->exists() ? $this->dbObject('Caption')->Value : $this->failover->Caption;
    }
}
