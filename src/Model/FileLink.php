<?php

namespace MadeHQ\Cloudinary\Model;

use SilverStripe\ORM\DataObject;

class FileLink extends DataObject
{
    private static $db = [
        'Title' => 'Varchar(200)',
        'Description' => 'HTMLText',
    ];

    /**
     * Has_one relationship
     * @var array
     */
    private static $has_one = [
        'File' => File::class,
    ];

    private static $table_name = 'CloudinaryFileLink';

    public function __construct($record = null, $isSingleton = false, $queryParams = array())
    {
        parent::__construct($record, $isSingleton, $queryParams);
        $this->setFailover($this->File());
    }

    public function exists()
    {
        return parent::exists() && $this->File()->exists();
    }
}
