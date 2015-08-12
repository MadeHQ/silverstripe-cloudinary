<?php

class CloudinaryImageField extends CloudinaryUploadField {

    public function getExtensionsAllowed(){
        $allCategories = File::config()->app_categories;
        return $allCategories['image'];
    }

} 