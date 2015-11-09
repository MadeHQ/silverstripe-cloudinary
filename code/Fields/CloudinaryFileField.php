<?php

class CloudinaryFileField extends CloudinaryUploadField {

    /**
     * @return array|scalar
     */
    public function getExtensionsAllowed(){
        $allCategories = File::config()->app_categories;
        $ret = array_merge($allCategories['zip'], $allCategories['doc']);
        $ret[] = 'zip';
        return $ret;
    }

} 