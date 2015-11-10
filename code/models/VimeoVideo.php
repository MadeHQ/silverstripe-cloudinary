<?php

class VimeoVideo extends CloudinaryVideo {

    /**
     * @param $url
     * @return bool
     */
    public static function vimeo_id_from_url($url) {
        $regex = '~(?:<iframe [^>]*src=")?(?:https?:\/\/(?:[\w]+\.)*vimeo\.com(?:[\/\w]*\/videos?)?\/([0-9]+)[^\s]*)"?(?:[^>]*></iframe>)?(?:<p>.*</p>)?~ix';

        if(preg_match($regex, $url, $matches) && !empty($matches)) {
            return $matches[1];
        }

        return false;
    }

    /**
     * @param $url
     * @return bool
     */
    public static function is_vimeo($url) {
        $host = parse_url($url, PHP_URL_HOST);
        return strpos($host, 'vimeo') >= 0;
    }

    /**
     * @param $id
     * @return array
     */
    public static function vimeo_video_details($id) {
        $url = sprintf('http://vimeo.com/api/v2/video/%s.json', $id);

        $ch = curl_init();
        curl_setopt_array($ch, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_TIMEOUT => 30
        ));
        $response = Convert::json2obj(curl_exec($ch));
        curl_close($ch);

        $iTime = $response[0]->duration;
        $iHours = intval($iTime / (60 * 60));
        $iMinutes = intval(($iTime - ($iHours * 60 * 60)) / 60);
        $iSeconds = ($iTime - ($iHours * 60 * 60) - ($iMinutes * 60));
        if($response){
            $return = array(
                'title' => $response[0]->title,
                'duration' => sprintf("%02d", $iHours). ':'. sprintf("%02d", $iMinutes). ':'. sprintf("%02d", $iSeconds),
            );

            return $return;
        }
    }

    /**
     * @param $url
     * @return string
     */
    public static function video_embed_url($url) {
        $strURL = "http://player.vimeo.com/video/" . self::vimeo_id_from_url($url);
        return $strURL;
    }

    /**
     * @return string
     */
    public function VideoEmbedURL() {
        return self::video_embed_url($this->URL);
    }

    /**
     * @param $iWidth
     * @param $iHeight
     * @return string
     */
    public function VideoTag($iWidth, $iHeight) {
        return '<iframe src="'.$this->VideoEmbedURL().'" width="'.$iWidth.'" height="'.$iHeight.'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    }

} 