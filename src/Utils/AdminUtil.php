<?php

namespace MadeHQ\Cloudinary\Utils;

use MadeHQ\Cloudinary\Controllers\API;

class AdminUtil extends API {
    public function getImageJSON($publicId, $resourceType)
    {
        trigger_error('getImageJSON() is deprecated, use Helper::get_processed_resource($publicId, $resourceType) instead', E_USER_DEPRECATED);

        return Helper::get_processed_resource($publicId, $resourceType);
    }
}
