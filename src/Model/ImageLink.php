<?php

namespace MadeHQ\Cloudinary\Model;

use MadeHQ\Cloudinary\Model\Image;

class ImageLink extends FileLink
{
    private static $db = [
        'Gravity' => 'Varchar(15)',
        'Alt' => 'Varchar(200)',
    ];

    /**
     * Has_one relationship
     * @var array
     */
    private static $has_one = [
        'File' => Image::class,
    ];

    private static $table_name = 'CloudinaryImageLink';

    public function __call($func, $args)
    {
        if (in_array($func, ['File', 'publishRecursive', 'findOwned', 'unlinkDisownedObjects'])) {
            return parent::__call($func, $args);
        }
        if ($func === 'URL') {
            if (count($args) === 3) {
                array_push($args, 'auto');
                array_push($args, $this->record['Gravity']);
            }
        }
        return call_user_func_array([$this->getComponent('File'), $func], $args);
    }
}
