<?php

use \Cloudinary\Api;

class CloudinaryUtils extends Object
{

	private static $api = null;
	private static $settings = array();


	public static function api()
	{
		if (is_null(self::$api)){
			if (self::set_configs()) {
				self::$api = new Api();
			}
		}

		return self::$api;

	}


	public static function set_configs()
	{
		$settings = Config::inst()->get('CloudinaryUtils', 'settings');

		$valid = true;
		foreach (array('APIKey', 'APISecret', 'CloudName', 'UploadPreset') as $name) {
			if (!isset($settings[$name]) || empty($settings[$name])) {
				$valid = false;
			}
		}

		if ($valid) {
			Cloudinary::config(array(
				"cloud_name"    => $settings['CloudName'],
				"api_key"       => $settings['APIKey'],
				"api_secret"    => $settings['APISecret']
			));
		}
		else {
			user_error("Cloudinary configs are not defined", E_USER_ERROR);
		}
		return $valid;

	}

	public static function cloud_name()
	{
		$settings = Config::inst()->get('CloudinaryUtils', 'settings');
		return $settings['CloudName'];
	}

	public static function api_key()
	{
		$settings = Config::inst()->get('CloudinaryUtils', 'settings');
		return $settings['APIKey'];
	}

	public static function upload_preset()
	{
		$settings = Config::inst()->get('CloudinaryUtils', 'settings');
		return $settings['UploadPreset'];
	}

	public static function is_url ($url)
	{
		return strpos($url, 'http://') === 0 || strpos($url, 'https://') === 0;
	}

	public static function public_id($url)
	{
		preg_match('/^.+?\/v\d+\/(.+?)\.(?=[^.]*$)/', $url, $patterns);
		return isset($patterns[1]) ? $patterns[1] : '';
	}

	public static function file_format($url)
	{
		$arrPathInfo = pathinfo($url);
		if (isset($arrPathInfo['extension'])) {
			return $arrPathInfo['extension'];
		}
	}

	public static function file_name($url)
	{
		$arrPathInfo = pathinfo($url);
		if (isset($arrPathInfo['basename'])) {
			return $arrPathInfo['basename'];
		}
	}

	public static function resource_type($url)
	{
		$settings = Config::inst()->get('CloudinaryUtils', 'settings');
		if($url) {
			return StringUtils::between($url, $settings['CloudName']. '/', '/upload');
		}
	}
}
