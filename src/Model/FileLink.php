<?php

namespace MadeHQ\Cloudinary\Model;

use SilverStripe\ORM\DataObject;
use MadeHQ\Cloudinary\Model\File;

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

    /**
     * Calls will be passed to the File object unless the same property exists
     *   on the Link object and that property has a value
     * This is to reduce the calls to `$FileLink->File()->Property` in code
     */
    public function __get($prop)
    {
        if ($prop === 'ID') {
            return parent::__get($prop);
        }
        if ($this->hasField($prop) && $val = parent::__get($prop)) {
            return $val;
        }
        return $this->File()->$prop;
    }

    public function __call($func, $args)
    {
        if ($func === 'File') {
            return parent::__call($func, $args);
        }
        return call_user_func_array([$this->File(), $func], $args);
    }
}
