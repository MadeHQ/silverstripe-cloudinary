<?php

namespace MadeHQ\Cloudinary\Utils;

use MadeHQ\Cloudinary\Controllers\API;

class AdminUtil extends API {
    public function getImageJSON($publicId, $resourceType, $type = 'upload')
    {
        return $this->getResource($publicId, $resourceType, $type);
    }
}
