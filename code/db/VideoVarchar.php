<?php

class VideoVarchar extends Varchar
{
    /**
     * returns the thumbnail url for youtube or vimeo video with given width, height, quality params
     *
     * @param $width
     * @param $height
     * @param int $quality
     * @return string
     */
    public function ThumbnailURL($width, $height, $quality = 70)
    {
        $options = array(
            'width'     	=> $width,
            'height'   	 	=> $height,
            'crop'      	=> 'fill',
            'start_offset'	=> 0,
            'resource_type'	=> 'image',
            'type'			=> $this->getVideoType(),
            'quality'		=> $quality
        );
        return Cloudinary::cloudinary_url(
            $this->getVideoID() . '.jpg',
            $options
        );
    }

    /**
     * @return bool|int
     */
    public function getVideoID()
    {
        if ($this->isYoutube()) {
            return self::youtubeId($this->value);
        } elseif ($this->isVimeo()) {
            return self::vimeoId($this->value);
        }
        return 0;
    }

    /**
     * @return null|string
     */
    public function getVideoType()
    {
        if ($this->isYoutube()) {
            return 'youtube';
        } elseif ($this->isVimeo()) {
            return 'vimeo';
        }
        return null;
    }

    /**
     * @return bool
     */
    public function isYoutube()
    {
        $host = parse_url($this->value, PHP_URL_HOST);
        return (strpos($host, 'youtube') > 0) || (strpos($host, 'youtu.be') === 0);
    }

    /**
     * @return bool
     */
    public function isVimeo()
    {
        $host = parse_url($this->value, PHP_URL_HOST);
        return strpos($host, 'vimeo') >= 0;
    }

    /**
     * @return bool
     */
    public static function youtubeId($url)
    {
        $regex = '~(?:(?:<iframe [^>]*src=")?|(?:(?:<object .*>)?(?:<param .*</param>)*(?:<embed [^>]*src=")?)?)?(?:https?:\/\/(?:[\w]+\.)*(?:youtu\.be/| youtube\.com| youtube-nocookie\.com)(?:\S*[^\w\-\s])?([\w\-]{11})[^\s]*)"?(?:[^>]*>)?(?:</iframe>|</embed></object>)?~ix';

        if(preg_match($regex, $url, $matches) && !empty($matches)) {
            return $matches[1];
        }

        return false;
    }

    /**
     * @return bool
     */
    public static function vimeoId($url) {
        $regex = '~(?:<iframe [^>]*src=")?(?:https?:\/\/(?:[\w]+\.)*vimeo\.com(?:[\/\w]*\/videos?)?\/([0-9]+)[^\s]*)"?(?:[^>]*></iframe>)?(?:<p>.*</p>)?~ix';

        if(preg_match($regex, $url, $matches) && !empty($matches)) {
            return $matches[1];
        }

        return false;
    }

}