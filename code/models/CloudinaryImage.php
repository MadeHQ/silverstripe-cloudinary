<?php

class CloudinaryImage extends CloudinaryFile
{

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        if (!$this->ID) {
            $this->hideCMSFields($fields, array('Credit', 'Caption', 'Gravity', 'FileTitle', 'FileDescription'));
        } else {
            $this->hideCMSFields($fields, array('FileTitle', 'FileDescription'));
        }

        return $fields;
    }

    private function hideCMSFields(FieldList $fields, $arrFieldsToHide)
    {
        foreach ($arrFieldsToHide as $fieldName){
            if($field = $fields->dataFieldByName($fieldName)) {
                $field->addExtraClass('_js-hide-on-load');
            }
        }
    }

    /**
     * @param int $iWidth
     * @param int $iHeight
     * @param int $iQuality
     * @return CloudinaryImage_Cached|Image_Cached
     */
    public function Thumbnail($iWidth, $iHeight, $iQuality = 60)
    {
        return $this->CMSThumbnail($iWidth, $iHeight, $iQuality);
    }

    /**
     * @return Image_Cached
     */
    public function StripThumbnail()
    {
        return $this->CMSThumbnail(100, 100, 'fill', 60);
    }

    /**
     * @param int $iWidth
     * @param int $iHeight
     * @param string $crop
     * @param int $iQuality
     * @return CloudinaryImage_Cached
     */
    public function CMSThumbnail($iWidth = 80, $iHeight = 60, $crop = 'fill', $iQuality = 80)
    {
        return $this->Image($iWidth, $iHeight, $crop, $iQuality, 'faces');
    }

}