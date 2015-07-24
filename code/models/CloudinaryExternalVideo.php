<?php
/**
 * Created by PhpStorm.
 * User: priyashantha
 * Date: 7/24/15
 * Time: 10:28 AM
 */

class CloudinaryExternalVideo extends CloudinaryVideo {

    public function Link(){
        return $this->URL;
    }

} 