<?php

class CloudinaryImage extends CloudinaryFile
{

    private static $arr_gravity = array(
        'auto' => 'Auto',
        'center' => 'Center',
        'faces' => 'Faces',

        'north' => 'Top',
        'north_east' => 'Top right',
        'east' => 'Right',
        'south_east' => 'Bottom right',
        'south' => 'Bottom',
        'south_west' => 'Bottom left',
        'west' => 'Left',
        'north_west' => 'Top left',
    );

    private static $db = array(
        'Gravity' => 'Enum("auto,center,faces,north_east,north,north_west,west,south_west,south,south_east,east", "auto")',
        'Credit' => 'Varchar(200)',
        'Caption' => 'Varchar(200)',
        'Width' => 'Int',
        'Height' => 'Int',
    );

    public function getTitle() {
        if ($this->URL && CloudinaryUtils::resource_type($this->URL) == 'raw') {
            return $this->FileTitle;
        }
        if ($this->URL && CloudinaryUtils::resource_type($this->URL) != 'raw'){
            return $this->Caption;
        }
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $this->hideCMSFields($fields, array('FileTitle', 'Width', 'Height'));
        if (!$this->ID) {
            $this->hideCMSFields($fields, array('Credit', 'Caption', 'Gravity'));
        }

        return $fields;
    }

    public function getFrontEndFields($params = null)
    {
        $fields = parent::getFrontEndFields($params);
        $fields->replaceField('Caption', TextField::create('Caption'));
        $fields->replaceField('Credit', TextField::create('Credit'));
        $fields->dataFieldByName('Gravity')->setSource(self::$arr_gravity);
        $fields->replaceField('FileTitle', HiddenField::create('FileTitle'));
        $fields->replaceField('Height', TextField::create('Height'));
        $fields->replaceField('Width', TextField::create('Width'));
        return $fields;
    }

    private function getDefaultImageOptions($width, $height, $crop, $quality = 'auto', $gravity = false) {
        $options = array(
            'secure' => true,
            'width' => $width,
            'height' => $height,
            'fetch_format' => 'auto',
            'quality' =>  $quality,
            'gravity' => $gravity ?: $this->Gravity
        );

        if ($crop) {
            $options['crop'] = $crop;
        }

        // These crops don't support gravity, Cloudinary returns a 400 if passed
        if (in_array($crop, array('fit', 'limit', 'mfit', 'pad', 'lpad'))) {
            unset($options['gravity']);
        }

        return $options;
    }

    public function Image($width, $height, $crop, $quality = 'auto', $gravity = false) {
        $options = $this->getDefaultImageOptions($width, $height, $crop, $quality, $gravity);
        $cloudinaryID = CloudinaryUtils::public_id($this->URL);
        $fileName = $this->Format ? $cloudinaryID. '.'. $this->Format : $cloudinaryID;
        return Cloudinary::cloudinary_url($fileName, $options);
    }

    public function LQIPImage($width, $height, $crop) {
        $options = $this->getDefaultImageOptions($width, $height, $crop,'auto:low');
        $options['effect'] = 'blur:999999';
        $cloudinaryID = CloudinaryUtils::public_id($this->URL);
        $fileName = $this->Format ? $cloudinaryID. '.'. $this->Format : $cloudinaryID;
        return Cloudinary::cloudinary_url($fileName, $options);
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
        $thumbnailUrl = $this->Image($iWidth, $iHeight, $crop, $iQuality, 'faces');
        $field = new HTMLText();
        if($thumbnailUrl){
            $field->setValue("<img src=\"$thumbnailUrl\" alt=\"$this->Title\"/>");
        }
        return $field;
    }

}
