<?php

class CloudinaryFileField extends CloudinaryUploadField {

    public function getExtensionsAllowed(){
        $allCategories = File::config()->app_categories;
        return array_merge($allCategories['zip'], $allCategories['doc']);
    }

} 