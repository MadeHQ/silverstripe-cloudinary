<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 3:58 PM
 * To change this template use File | Settings | File Templates.
 */

class CloudinaryVimeoVideo extends CloudinaryVideo {

    public function Link(){
        return $this->URL;
    }

    public static function vimeo_id_from_url($url) {
        $regex = '~(?:<iframe [^>]*src=")?(?:https?:\/\/(?:[\w]+\.)*vimeo\.com(?:[\/\w]*\/videos?)?\/([0-9]+)[^\s]*)"?(?:[^>]*></iframe>)?(?:<p>.*</p>)?~ix';

        if(preg_match($regex, $url, $matches) && !empty($matches)) {
            return $matches[1];
        }

        return false;
    }

    public static function isVimeo($url){
        $host = parse_url($url, PHP_URL_HOST);
        return strpos($host, 'vimeo') >= 0;
    }

} 