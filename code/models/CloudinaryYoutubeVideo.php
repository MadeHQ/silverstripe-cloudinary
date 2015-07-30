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
        $response = Convert::json2obj(curl_exec($ch));
        if($response){
            $snippet = $response->items[0]->snippet;
            $contentDetails = $response->items[0]->contentDetails;
            curl_close($ch);

            $arrDuration = preg_split('/[^0-9]/', $contentDetails->duration);//PT1M26S
            $iHours = $arrDuration[2] ? $arrDuration[2] : 0;
            $iMinutes = $arrDuration[3] ? $arrDuration[3] : 0;
            $iSeconds = $arrDuration[4] ? $arrDuration[4] : 0;
            $return = array(
                'title' => $snippet->title,
                'duration' => sprintf("%02d", $iHours). ':'. sprintf("%02d", $iMinutes). ':'. sprintf("%02d", $iSeconds),
            );

            return $return;
        }
    }

    public static function VideoURL($url){
        $strURL = "http://www.youtube.com/embed/" . self::YouTubeVideoID($url);
        return $strURL;
    }

    public static function YouTubeVideoID($url)
    {
        parse_str( parse_url( $url, PHP_URL_QUERY ), $arrVars );
        return isset($arrVars['v']) ? $arrVars['v'] : null;
    }

}