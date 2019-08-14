<?php

use SilverStripe\Core\Config\Config;

$settings = Config::inst()->get('MadeHQ\\Cloudinary');

$options = ['cloud_name', 'api_key', 'api_secret'];

$valid = true;

foreach ($options as $name) {
    if (array_key_exists($name, $settings) === false || empty($settings[$name]) === true) {
        $valid = false;
    }
}

if ($valid === false) {
    throw new Exception('Service Unavailable', 503);
}

Cloudinary::config($settings);

define('CLOUDINARY_CONFIG', $settings);
