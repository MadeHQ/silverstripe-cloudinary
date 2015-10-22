<?php

class CloudinaryImageField extends CloudinaryUploadField {

    public function getExtensionsAllowed(){
        $allCategories = File::config()->app_categories;
        return array_merge($allCategories['image'], array('svg'));
    }

} 