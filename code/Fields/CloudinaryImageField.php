<?php

class CloudinaryImageField extends CloudinaryUploadField
{

    /**
     * @return array|scalar
     */
    public function getExtensionsAllowed()
    {
        $allCategories = File::config()->app_categories;
        return array_merge($allCategories['image'], array('svg'));
    }

    /**
     * @param string $default
     * @return string
     */
    public function getRelationAutosetClass($default = 'CloudinaryImage')
    {
        if (!$this->relationAutoSetting) {
            return $default;
        }
        return parent::getRelationAutosetClass($default);
    }
}
