<?php

namespace MadeHQ\Cloudinary\Model;

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
        return $this->dbObject('Credit')->value ?: $this->failover->Credit;
    }

    public function getCaption()
    {
        return $this->dbObject('Caption')->value ?: $this->failover->Caption;
    }

    public function getGravity()
    {
        return $this->dbObject('Gravity')->value;
    }

    public function getFocus()
    {
        return $this->dbObject('Gravity')->value;
    }
}
