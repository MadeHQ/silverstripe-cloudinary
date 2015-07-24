<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 3:57 PM
 * To change this template use File | Settings | File Templates.
 */

class CloudinaryYoutubeVideo extends CloudinaryVideo {

    public function Link(){
        return $this->URL;
    }

    public static function youtube_id_from_url($url) {
        $regex = '~(?:(?:<iframe [^>]*src=")?|(?:(?:<object .*>)?(?:<param .*</param>)*(?:<embed [^>]*src=")?)?)?(?:https?:\/\/(?:[\w]+\.)*(?:youtu\.be/| youtube\.com| youtube-nocookie\.com)(?:\S*[^\w\-\s])?([\w\-]{11})[^\s]*)"?(?:[^>]*>)?(?:</iframe>|</embed></object>)?~ix';

        if(preg_match($regex, $url, $matches) && !empty($matches)) {
            return $matches[1];
        }

        return false;
    }

    public static function isYoutube($url){
        $host = parse_url($url, PHP_URL_HOST);
        return strpos($host, 'youtube') > 0;
    }

}