<?php

use SilverStripe\Admin\CMSMenu;
use SilverStripe\AssetAdmin\Controller\AssetAdmin;
use SilverStripe\Core\Config\Config;
use Cloudinary\Configuration\Configuration;
use Cloudinary\Utils;

// Remove the Asset Admin link
CMSMenu::remove_menu_class(AssetAdmin::class);

// Grab the settings from config
$settings = Config::inst()->get('MadeHQ\\Cloudinary');

// We absolutely need these items
$options = ['cloud_name', 'api_key', 'api_secret', 'username'];

$valid = true;

// Run through the settings and determine if we have the needed values
foreach ($options as $name) {
    if (array_key_exists($name, $settings) === false || empty($settings[$name]) === true) {
        $valid = false;
    }
}

// If we do have the needed values, initiate a Cloudinary config instance
// with those values
if ($valid === true) {
    Configuration::instance([
        'cloud' => [
            'cloud_name' => $settings['cloud_name'],
            'api_key' => $settings['api_key'],
            'api_secret' => $settings['api_secret'],
            'signature_algorithm' => Utils::ALGO_SHA256,
        ],
        'url' => [
            'secure' => true,
        ],
    ]);
}
