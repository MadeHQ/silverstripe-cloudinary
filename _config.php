<?php

use SilverStripe\Admin\CMSMenu;
use SilverStripe\AssetAdmin\Controller\AssetAdmin;
use SilverStripe\Core\Config\Config;
use Cloudinary\Configuration\Configuration;
use Cloudinary\Utils;
use MadeHQ\Cloudinary\UserForms\Controllers\FormAdmin;
use SilverStripe\Core\Manifest\ModuleLoader;
use SilverStripe\Forms\HTMLEditor\TinyMCEConfig;

// Remove the Asset Admin link
CMSMenu::remove_menu_class(AssetAdmin::class);
CMSMenu::remove_menu_class(FormAdmin::class);

// Grab the settings from config
$settings = Config::inst()->get('MadeHQ\\Cloudinary');

// We absolutely need these items
$options = ['cloud_name', 'api_key', 'api_secret'];

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

/**
 * Removes the built in `ssmedia` module and replaces it with the cloudinary one
 */
call_user_func(function () {
    $module = ModuleLoader::inst()->getManifest()->getModule('mademedia/silverstripe-cloudinary');

    // Re-enable media dialog
    $config = TinyMCEConfig::get('cms');
    $config->disablePlugins([
        'ssmedia',  // Removes the existing module so as to replace it
    ]);

    // Replaces the `ssmedia` module
    $config->enablePlugins([
        'ssmedia' => $module
            ->getResource('client/dist/tinymce.js'),
    ]);

    $validElements = $config->getOption('extended_valid_elements');

    $validElements.= ',img[role]';

    $config->setOption('extended_valid_elements', $validElements);
});
