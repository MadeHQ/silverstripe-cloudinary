<?php

use SilverStripe\Admin\CMSMenu;
use SilverStripe\AssetAdmin\Controller\AssetAdmin;
use SilverStripe\Core\Config\Config;
use Cloudinary\Configuration\Configuration;
use Cloudinary\Utils;

CMSMenu::remove_menu_class(AssetAdmin::class);

$settings = Config::inst()->get('MadeHQ\\Cloudinary');

$options = ['cloud_name', 'api_key', 'api_secret', 'username'];

$valid = true;

foreach ($options as $name) {
    if (array_key_exists($name, $settings) === false || empty($settings[$name]) === true) {
        $valid = false;
    }
}

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
