<?php

class CloudinaryFileField extends CloudinaryUploadField {

    public function getExtensionsAllowed(){
        $allCategories = File::config()->app_categories;
        $ret = array_merge($allCategories['zip'], $allCategories['doc']);
        $ret[] = 'zip';
        return $ret;
    }

} 