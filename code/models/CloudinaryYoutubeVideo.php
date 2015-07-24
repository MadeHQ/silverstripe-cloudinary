<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 3:57 PM
 * To change this template use File | Settings | File Templates.
 */

class CloudinaryYoutubeVideo extends CloudinaryExternalVideo {

    public function StripThumbnail(){

        $clone = $this->duplicate(false);
        $clone->PublicID = $this->SourceID;
        $clone->Format = 'jpg';



        return cl_image_tag("aNwnPElsJGE", array(
                "type" => "youtube", "transformation" => array("width" => 200, "height" => 120, "crop" => "fill")
            )
        );
    }

    public function getLink(){
        return $this->CMSThumbnail();
    }

}