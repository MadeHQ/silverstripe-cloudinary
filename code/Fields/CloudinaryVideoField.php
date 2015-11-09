<?php

class CloudinaryVideoField extends CloudinaryMediaField
{

    /**
     * @var string
     */
    protected $templateFileButtons = 'CloudinaryVideoField_FileButtons';

    public function getExtensionsAllowed(){
        $strExtensions = CloudinaryVideoField::config()->allowedExtensions;
        return explode(',', $strExtensions);
    }

} 