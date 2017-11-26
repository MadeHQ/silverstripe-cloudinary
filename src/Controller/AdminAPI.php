<?php

namespace MadeHQ\Cloudinary\Controller;

use Cloudinary\Api;
use SilverStripe\Control\Controller;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Core\Config\Config;
use SilverStripe\Core\Convert;

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

    protected function listVideos(HTTPRequest $request)
    {
        $search = $request->getVar('search');
        $nextCursor = $request->getVar('next_cursor');
        $result = $this->getCloudinaryResources('video', $nextCursor, $search);
        return $this->getJsonResponseFromData($result);
    }

    protected function listFiles(HTTPRequest $request)
    {
        $search = $request->getVar('search');
        $nextCursor = $request->getVar('next_cursor');
        $result = $this->getCloudinaryResources('raw', $nextCursor, $search);
        return $this->getJsonResponseFromData($result);
    }

    protected function listImages(HTTPRequest $request)
    {
        $search = $request->getVar('search');
        $nextCursor = $request->getVar('next_cursor');
        $result = $this->getCloudinaryResources('image', $nextCursor, $search);
        return $this->getJsonResponseFromData($result);
    }

    protected function getCloudinaryResources($type = 'image', $nextCursor = null, $searchText = null)
    {
        if (false === 'IMPORTANT: This functionality is available only to customers with the Advanced Extra plan or higher. Contact us to activate this feature for your account.') {
        // if ($searchText) {
            $dir = dirname(dirname(dirname(dirname(dirname(__FILE__)))));
            require_once($dir . '/cloudinary/cloudinary_php/src/Cloudinary.php');
            require_once($dir . '/cloudinary/cloudinary_php/src/Search.php');
            $search = new \Cloudinary\Search();
            $response = $search->execute(array(
                'expression' => sprintf('resource_type:%s', $type, $searchText),
                'sort_by' => '',
                'max_results' => $this->getMaxResults(),
                'next_cursor' => $nextCursor,
                'aggregate' => '',
                'with_field' => '',
                'direction' => -1,
            ));
        } else {
            $api = static::getCloudinaryApi();
            $response = $api->resources(array(
                'max_results' => $this->getMaxResults(),
                'direction' => -1,
                'resource_type' => $type,
                'type' => 'upload',
                'next_cursor' => $nextCursor
            ));
        }
        $data = $response->getArrayCopy();
        return $data;
    }
    /**
     * Generates a SS_HTTPResponse Object with JSON Header
     * @param Array $data Data to be converted to JSON
     * @return SS_HTTPResponse
     */
    private function getJsonResponseFromData($data)
    {
        $response = new HTTPResponse();
        $response->setBody(Convert::array2json($data));
        $response->addHeader('Content-Type', 'text/json;charset=UTF-8');
        return $response;
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
