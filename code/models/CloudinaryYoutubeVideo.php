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

    public static function youtube_video_details($id) {
        $url = 'https://www.googleapis.com/youtube/v3/videos?';
        $url.= sprintf('key=%s', Config::inst()->get('CloudinaryYoutubeVideo', 'youtube_api_key'));
        $url.= sprintf('&id=%s', $id);
        $url.= '&fields=items(snippet(title),contentDetails(duration))';
        $url.= '&part=snippet,contentDetails';

        $ch = curl_init();
        curl_setopt_array($ch, array(
            CURLOPT_URL  => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_BINARYTRANSFER => true,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_TIMEOUT => 5
        ));
        $response = json_decode(curl_exec($ch))->items[0]->snippet;
        curl_close($ch);

        $return = array(
            'title' => $response->title,
            'duration' => $response->duration,
        );

        return $return;
    }

}