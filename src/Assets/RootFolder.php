<?php

namespace MadeHQ\Cloudinary\Assets;

use SilverStripe\ORM\ArrayList;

class RootFolder extends AbstractFolder
{
    private static $table_name = 'CloudinaryRootFolder';

    private $children = [];

    public function __construct()
    {
        $this->children = [
            AudioVideosFolder::create(),
            FilesFolder::create(),
            ImagesFolder::create(),
        ];
    }

    public function Children()
    {
        return new ArrayList($this->children);
    }

    public function getFolder($id)
    {
        $results = array_filter($this->children, function ($folder) use ($id) {
            return $folder->ID == $id;
        });
        return array_pop($results);
    }

    public function id() {
        return 0;
    }

    public function filename()
    {
        return '/';
    }

    public function exists()
    {
        return false;
    }

    public function canDelete($member = NULL)
    {
        return false;
    }
}
