<?php

class CloudinaryFile extends DataObject
{
    protected $sourceURL = '';

    private static $arr_gravity = array(
        'auto' => 'Auto',
        'center' => 'Center',
        'north_east' => 'NE',
        'north' => 'N',
        'north_west' => 'NW',
        'west' => 'W',
        'south_west' => 'SW',
        'south' => 'S',
        'south_east' => 'SE',
        'east' => 'E'
    );

    private static $db = array(
        'URL' => 'Varchar(500)',
        'Credit' => 'Varchar(200)',
        'Caption' => 'Varchar(200)',
        'Gravity' => 'Enum("auto,center,north_east,north,north_west,west,south_west,south,south_east,east", "auto")',
        'FileSize' => 'Varchar(50)',
        'Format' => 'Varchar(50)',
        'FileTitle' => 'Varchar(200)',
        'FileDescription' => 'Text'
    );

    private static $summary_fields = array(
        'getTitle' => 'Title'
    );

    public function getTitle() {
        if ($this->URL && CloudinaryUtils::resource_type($this->URL) == 'raw') {
            return $this->FileTitle;
        }
        if ($this->URL && CloudinaryUtils::resource_type($this->URL) != 'raw'){
            return $this->Caption;
        }
    }

    public function getCMSFields() {
        $fields = parent::getCMSFields();
        $fields->removeByName(array('URL', 'Credit', 'Caption', 'Gravity', 'FileSize', 'Format'));
        $fields->dataFieldByName('FileTitle')->setTitle('Title');
        $fields->dataFieldByName('FileDescription')->setTitle('Description');

        return $fields;
    }

    public function getFrontEndFields($params = null) {
        $fields = parent::getFrontEndFields($params);

        $fields->dataFieldByName('Gravity')->setSource(self::$arr_gravity);

        $fields->replaceField('URL', TextField::create('URL')->setAttribute('placeholder', 'https://')->setTitle(""));
        $fields->replaceField('FileSize', HiddenField::create('FileSize'));
        $fields->replaceField('Format', HiddenField::create('Format'));
        $fields->removeByName('ParentID');

        return $fields;
    }

    public function Image( $width, $height, $crop, $quality = 'auto', $gravity = false) {
        $options = array(
            'secure' => true,
            'fetch_format' => 'auto',
            'quality' =>  $quality,
            'width' => $width,
            'height' => $height,
            'gravity' => $gravity || $this->Gravity
        );

        if($crop){
            $options['crop'] = $crop;
        }

        if ($gravity) {
            $options['gravity'] = $gravity;
        }

        $cloudinaryID = CloudinaryUtils::public_id($this->URL);
        $fileName = $this->Format ? $cloudinaryID. '.'. $this->Format : $cloudinaryID;
        return Cloudinary::cloudinary_url($fileName, $options);
    }

    public function Link()
    {
        if(!empty($this->sourceURL)){
            return $this->sourceURL;
        }

        $options = array(
            'secure' => true,
            'resource_type'  => CloudinaryUtils::resource_type($this->URL)
        );

        return Cloudinary::cloudinary_url(CloudinaryUtils::public_id($this->URL). '.' .$this->Format, $options);
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
        return $this->Icon();
    }

    /**
     * @return mixed|null
     */
    public function Icon() {
        $ext = strtolower($this->Format);
        if(!Director::fileExists(FRAMEWORK_DIR . "/images/app_icons/{$ext}_32.gif")) {
            $ext = File::get_app_category($ext);
        }
        if(!Director::fileExists(FRAMEWORK_DIR . "/images/app_icons/{$ext}_32.gif")) {
            $ext = "generic";
        }
        return FRAMEWORK_DIR . "/images/app_icons/{$ext}_32.gif";
    }

    public function forTemplate()
    {
        $url = $this->Link();
        $title = Convert::raw2htmlatt($this->Caption);
        if($url){
            return "<img src=\"$url\" alt=\"$title\" />";
        }

    }

    /**
     * @return bool|string
     */
    public function getSize()
    {
        return ($this->FileSize) ? File::format_size($this->FileSize) : false;
    }

    /**
     * @param $arguments
     * @param null $content
     * @param null $parser
     * @return string
     *
     * Parse short codes for the cloudinary tags
     */
    static public function cloudinary_markdown($arguments, $content = null, $parser = null) {
        if (!isset($arguments['id'])) {
            return;
        }

        $options = array(
            'secure' => true,
            'fetch_format' => 'auto'
        );

        if (isset($arguments['width'])) {
            $options['width'] = $arguments['width'];
        }

        if (isset($arguments['height'])) {
            $options['height'] = $arguments['height'];
        }

        // If we have both a width and a height then we should attempt
        // to crop this image using the fill method and the provided gravity.
        if (isset($arguments['width']) && isset($arguments['height'])) {
            $options['crop'] = 'fill';
            $options['quality'] = 'auto';
            $options['gravity'] = $arguments['gravity'];
        }

        $cloudinaryID = $arguments['id'];
        $cloudinaryURL = Cloudinary::cloudinary_url($cloudinaryID, $options);

        $file = new CloudinaryFile(array(
            'URL' => $cloudinaryURL,
            'AltText' => isset($arguments['alt']) ? $arguments['alt'] : null,
            'Credit' => isset($arguments['credit']) ? $arguments['credit'] : null,
            'Caption' => isset($arguments['caption']) ? $arguments['caption'] : null
        ));

        $data = $file->customise(array(
            'Width' => isset($arguments['width']) ? $arguments['width'] : null,
            'Height' => isset($arguments['height']) ? $arguments['height'] : null
        ));

        return $data->renderWith('CloudinaryImageShortCode');
    }
}
