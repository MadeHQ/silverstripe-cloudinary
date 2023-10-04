<?php

namespace MadeHQ\Cloudinary\Extensions;

use SilverStripe\Admin\LeftAndMainExtension;
use SilverStripe\Core\Config\Config;
use SilverStripe\ORM\FieldType\DBDatetime;
use SilverStripe\View\Requirements;

class LeftAndMain extends LeftAndMainExtension
{
    /**
     * Add the Cloudinary config to left and main
     */
    public function init()
    {
        $cloudName = Config::inst()->get('MadeHQ\\Cloudinary', 'cloud_name');
        $apiKey = Config::inst()->get('MadeHQ\\Cloudinary', 'api_key');

        $options = [
            'cloud_name' => $cloudName,
            'api_key' => $apiKey,
        ];

        $script = sprintf('const CLOUDINARY_CONFIG = %s;', json_encode($options));

        Requirements::customScript($script, 'MadeHQ\\Cloudinary');
    }
}
