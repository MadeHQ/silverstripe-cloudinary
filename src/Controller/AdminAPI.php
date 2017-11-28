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
        $action = $this->getActionFromRequest($request);
        if ($this->hasMethod($action)) {
            return $this->$action($request);
        }
        return $this->httpError(404, sprintf('Action \'%s\' isn\'t available.', $action));
    }

    protected function getActionFromRequest(HTTPRequest $request)
    {
        $action = str_replace('-', '', ucwords($request->param('Action'), '-'));
        return 'get' . $action;
    }

    protected function getAssetDetails(HTTPRequest $request)
    {
        $assetUrl = urldecode($request->getVar('url'));
        $publicId = urlencode(static::public_id($assetUrl));
        if (!$publicId) {
            return $this->httpError(404, 'Public ID needs to be passed as an encoded URL Parameter');
        }
        $resource = null;
        $api = static::getCloudinaryApi();
        try {
            $resourceType = static::resource_type($assetUrl);
            // Raw resources need the extension as well :(
            $publicId .= $resourceType === 'raw' ? strrchr($assetUrl, '.') : '';
            $params = array(
                'resource_type' => $resourceType,
                'exif' => true,
                'image_metadata' => true,
                'max_results' => 0,
            );
            $result = $api->resource($publicId, $params)->getArrayCopy();
        } catch (\Exception $e) {
// var_dump($assetUrl, $publicId, $params);die();
            return $this->httpError(400, 'Backend error: ' . $e->getMessage());
        }
        return $this->getJsonResponseFromData($result);
    }

    private static function public_id($url)
	{
		preg_match('/^.+?\/v\d+\/(.+?)\.(?=[^.]*$)/', $url, $patterns);
    	// preg_match('/^.+?\/v\d+\/(.+?[^.]*$)/', $url, $patterns);
		return isset($patterns[1]) ? $patterns[1] : '';
	}

    private static function resource_type($url)
	{
        preg_match('/\w+\/(\w+)\/upload/', $url, $matches);
        return count($matches) > 0 ? $matches[1] : '';
	}

    protected function getVideoList(HTTPRequest $request)
    {
        $search = $request->getVar('search');
        $nextCursor = $request->getVar('next_cursor');
        $result = $this->getCloudinaryResources('video', $nextCursor, $search);
        return $this->getJsonResponseFromData($result);
    }

    protected function getFileList(HTTPRequest $request)
    {
        $search = $request->getVar('search');
        $nextCursor = $request->getVar('next_cursor');
        $result = $this->getCloudinaryResources('raw', $nextCursor, $search);
        return $this->getJsonResponseFromData($result);
    }

    protected function getImageList(HTTPRequest $request)
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
