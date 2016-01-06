<?php

class YoutubeVideo extends CloudinaryVideo {

    public static function youtube_id_from_url($url) {
        $regex = '~(?:(?:<iframe [^>]*src=")?|(?:(?:<object .*>)?(?:<param .*</param>)*(?:<embed [^>]*src=")?)?)?(?:https?:\/\/(?:[\w]+\.)*(?:youtu\.be/| youtube\.com| youtube-nocookie\.com)(?:\S*[^\w\-\s])?([\w\-]{11})[^\s]*)"?(?:[^>]*>)?(?:</iframe>|</embed></object>)?~ix';

        if(preg_match($regex, $url, $matches) && !empty($matches)) {
            return $matches[1];
        }

        return false;
    }

    public static function source_url($url) {
        return 'https://www.youtube.com/watch?v='. self::youtube_id_from_url($url);
    }

    public static function is_youtube($url){
        $host = parse_url($url, PHP_URL_HOST);
        return (strpos($host, 'youtube') > 0) || (strpos($host, 'youtu.be') === 0);
    }

    public static function youtube_video_details($id) {
        $url = 'https://www.googleapis.com/youtube/v3/videos?';
        $url.= sprintf('key=%s', Config::inst()->get('YoutubeVideo', 'youtube_api_key'));
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
            $iHours = isset($arrDuration[2]) ? $arrDuration[2] : 0;
            $iMinutes = isset($arrDuration[3]) ? $arrDuration[3] : 0;
            $iSeconds = isset($arrDuration[4]) ? $arrDuration[4] : 0;
            $return = array(
                'title' => $snippet->title,
                'duration' => sprintf("%02d", $iHours). ':'. sprintf("%02d", $iMinutes). ':'. sprintf("%02d", $iSeconds),
            );

            return $return;
        }
    }

    /**
     * @param $url
     * @return string
     */
    public static function video_embed_url($url){
        return "http://www.youtube.com/embed/" . self::youtube_id_from_url($url);
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