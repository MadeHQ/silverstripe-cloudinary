<?php

/**
 * Created by PhpStorm.
 * User: pathumjayatisse
 * Date: 1/19/16
 * Time: 6:04 PM
 */
class CloudinaryVideoWithoutAttach extends CloudinaryUploadField
{

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