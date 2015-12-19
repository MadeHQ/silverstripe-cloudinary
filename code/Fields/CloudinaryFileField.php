<?php

class CloudinaryFileField extends CloudinaryUploadField
{

    /**
     * @return array|scalar
     */
    public function getExtensionsAllowed()
    {
        $allCategories = File::config()->app_categories;
        $ret = array_merge($allCategories['zip'], $allCategories['doc']);
        $ret[] = 'zip';
        return $ret;
    }

    /**
     * @param DataList $files
     * @return DataList
     */
    public function addFilterForFiles(DataList $files)
    {
        return $files->filter('ClassName', 'CloudinaryFile');
    }
}
