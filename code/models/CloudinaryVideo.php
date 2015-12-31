<?php

class CloudinaryVideo extends CloudinaryMedia
{

    /**
     * @var array
     */
    private static $db = array(
        'Width'                => 'Varchar(500)',
        'Height'            => 'Varchar(500)',
        'Duration'            => 'Varchar(100)',
        'BitRate'            => 'Varchar(100)',
        'FrameRate'            => 'Varchar(100)'
    );

    /**
     * @param $url
     * @return bool
     */
    public static function isCloudinary($url)
    {
        $host = parse_url($url, PHP_URL_HOST);
        return strpos($host, 'cloudinary') > 0;
    }

    /**
     * @return FieldList
     */
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fileAttributes = $fields->fieldByName('Root.Main.FilePreview')->fieldByName('FilePreviewData');

        if (!in_array($this->ClassName, array('VimeoVideo', 'YoutubeVideo'))) {
            $fileAttributes->push(new ReadonlyField("Dimensions", _t('AssetTableField.DIM', 'Dimensions') . ':', $this->Width . ' x ' . $this->Height));
        }
        $fileAttributes->push(new ReadonlyField("Duration", 'Duration:'));

        return $fields;
    }

    /**
     * @return CloudinaryImage_Cached|Image_Cached
     */
    public function StripThumbnail()
    {
        return $this->GetFileImage(100, 100, 60);
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
     * @param int $iWidth
     * @param int $iHeight
     * @param int $iQuality
     * @return CloudinaryImage_Cached|Image_Cached
     */
    public function CMSThumbnail($iWidth = 132, $iHeight = 128, $iQuality = 60)
    {
        return $this->GetFileImage($iWidth, $iHeight, $iQuality);
    }

    /**
     * @return mixed|null|string
     */
    public function Link()
    {
        return $this->URL;
    }

    /**
     * @param $iWidth
     * @param $iHeight
     * @return null|string
     */
    public function VideoTag($iWidth, $iHeight)
    {
        return cl_video_tag($this->PublicID . '.' . $this->Format, array('width' => $iWidth, 'height' => $iHeight, 'controls'));
    }
}
