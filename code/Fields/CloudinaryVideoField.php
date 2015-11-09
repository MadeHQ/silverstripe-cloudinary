<?php

class CloudinaryVideoField extends CloudinaryMediaField {

    /**
     * @var string
     */
    protected $templateFileButtons = 'CloudinaryVideoField_FileButtons';

    /**
     * @return array|scalar
     */
    public function getExtensionsAllowed() {
        $strExtensions = CloudinaryVideoField::config()->allowedExtensions;
        return explode(',', $strExtensions);
    }

} 