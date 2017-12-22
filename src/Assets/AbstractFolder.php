<?php

namespace MadeHQ\Cloudinary\Assets;

use Cloudinary\Api;

use SilverStripe\Assets\Folder;
use SilverStripe\Core\Config\Config;
use SilverStripe\ORM\ArrayList;

class AbstractFolder extends Folder
{
    protected $record = [];

    private static $max_results = 100;

    private static $table_name = 'CloudinaryFolder';

    protected static $api;

    public function canView($member = NULL)
    {
        return true;
    }

    public function canEdit($member = NULL)
    {
        return false;
    }

    public function canDelete($member = NULL)
    {
        return false;
    }

    public function exists()
    {
        return true;
    }

    public function title()
    {
        return $this->Title;
    }

    public function lastEdited()
    {
        return date('Y-m-d H:i:s');
    }

    public function filename()
    {
        return sprintf('%s/', strtolower($this->Title));
    }

    /**
     * @return Int
     */
    private static function getMaxResults()
    {
        return Config::inst()->get(get_class(), 'max_results');
    }

    public function Children()
    {
        $data = $this->getResources();

        $files = array_reduce($data['resources'], function ($carry, $item) {
            $carry[] = File::createFromCloudinaryData($item);
            return $carry;
        }, []);
        return new ArrayList($files);
    }

    private function getResources($nextCursor = null)
    {
        $api = static::getCloudinaryApi();
        $response = $api->resources(array(
            'max_results' => static::getMaxResults(),
            'direction' => -1,
            'resource_type' => $this->resourceType,
            'next_cursor' => $nextCursor
        ));
        return $response->getArrayCopy();
    }

    private static function getCloudinaryApi()
    {
        if (!static::$api) {
            static::$api = new Api();
        }
        return static::$api;
    }
}
