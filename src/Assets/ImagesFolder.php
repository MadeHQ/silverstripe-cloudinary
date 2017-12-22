<?php

namespace MadeHQ\Cloudinary\Assets;

class ImagesFolder extends AbstractFolder
{
    public $ID = 3;
    public $Title = 'Images';
    protected $resourceType = 'image';
    private static $table_name = 'ImagesFolder';
}
