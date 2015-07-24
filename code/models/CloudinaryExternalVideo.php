<?php
/**
 * Created by PhpStorm.
 * User: priyashantha
 * Date: 7/24/15
 * Time: 10:28 AM
 */

class CloudinaryExternalVideo extends CloudinaryVideo {

    private static $db = array(
        'SourceID'      => 'Varchar(20)',
        'SourceURL'     => 'Varchar(255)'
    );

    public function getLink(){
        return $this->SourceURL;
    }

} 