<?php

namespace MadeHQ\Cloudinary\Controller;

use Cloudinary\Api;
use SilverStripe\Control\Controller;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Core\Config\Config;

class AdminAPI extends Controller
{
    private static $max_results = 100;

    private static $api;

    public function handleRequest(HTTPRequest $request)
    {
        $action = $request->param('Action');
        if ($this->hasMethod($action)) {
            return $this->$action($request);
        }
    }

    protected function listImages(HTTPRequest $request)
    {
        $search = $request->getVar('search');
        $nextCursor = $request->getVar('next_cursor');
        $results = $this->getCloudinaryResources('image', $nextCursor, $search);


var_dump($results);die();
    }

    protected function getCloudinaryResources($type = 'image', $nextCursor = null, $search = null)
    {
        $api = static::getCloudinaryApi();
        $search = new \Cloudinary\Search();
        $response = $search->execute();
        // $respond = $api->resources(array(
        //     'max_results' => $this->getMaxResults(),
        //     'direction' => -1,
        //     'resource_type' => $type,
        //     'type' => 'upload',
        //     'next_cursor' => $nextCursor
        // ));
        $data = $response->getArrayCopy();
        return $data;
    }

    /**
     * @return Int
     */
    private function getMaxResults()
    {
        return Config::inst()->get(get_class($this), 'max_results');
    }

    private static function getCloudinaryApi()
    {
        if (!static::$api) {
            $dir = dirname(dirname(dirname(dirname(dirname(__FILE__)))));
            require_once($dir . '/cloudinary/cloudinary_php/src/Cloudinary.php');
            require_once($dir . '/cloudinary/cloudinary_php/src/Api.php');
            static::$api = new Api();
        }
        return static::$api;
    }
}
