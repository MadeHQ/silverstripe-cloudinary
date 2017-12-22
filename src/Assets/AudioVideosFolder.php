<?php

namespace MadeHQ\Cloudinary\Assets;

class AudioVideosFolder extends AbstractFolder
{
    public $ID = 1;
    public $Title = 'Audio and Videos';
    protected $resourceType = 'video';
    private static $table_name = 'AudioVideosFolder';
}
