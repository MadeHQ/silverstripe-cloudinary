<?php

namespace MadeHQ\Cloudinary\Assets;

class FilesFolder extends AbstractFolder
{
    public $ID = 2;
    public $Title = 'Files';
    protected $resourceType = 'raw';
    private static $table_name = 'FilesFolder';
}
