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

    public static function VimeoVideoID($url)
    {
        sscanf(parse_url($url, PHP_URL_PATH), '/%d', $iVimeoId);
        return $iVimeoId;
    }

    public static function VideoURL($url){
        $strURL = "http://player.vimeo.com/video/" . self::VimeoVideoID($url);
        return $strURL;
    }


} 