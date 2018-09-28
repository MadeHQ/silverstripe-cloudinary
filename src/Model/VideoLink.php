<?php

namespace MadeHQ\Cloudinary\Model;

use MadeHQ\Cloudinary\Model\Image;

class VideoLink extends FileLink
{
    private static $db = [
        'Caption' => 'Text',
        'Credit' => 'Text',
    ];

    /**
     * Has_one relationship
     * @var array
     */
    private static $has_one = [
        'File' => Video::class,
    ];

    private static $table_name = 'CloudinaryVideoLink';

    public function getCredit()
    {
        return $this->dbObject('Credit')->value ?: $this->failover->Credit;
    }

    public function getCaption()
    {
        return $this->dbObject('Caption')->value ?: $this->failover->Caption;
    }

}
