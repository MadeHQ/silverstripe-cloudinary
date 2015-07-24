<?php

class CloudinaryExternalVideoField extends FormField {

    /**
     * @var array
     */
    private static $allowed_actions = array(
        'process',
        'delete_image',
    );

    public function Field($properties = array())
    {
        Requirements::javascript(CLOUDINARY_RELATIVE . "/javascript/CloudinaryExternalVideoField.js");
        Requirements::css(CLOUDINARY_RELATIVE . '/css/CloudinaryExternalVideoField.css');

        return parent::Field($properties);

    }

    /**
     * @param mixed $value
     * @param null $record
     * @return FormField|void
     */
    public function setValue($value, $record = null)
    {
        if(empty($value) && $record) {
            if(($record instanceof DataObject) && $record->hasMethod($this->getName())) {
                $video = CloudinaryVideo::get()->byId($record->getField($this->getName() . 'ID'));
                if($video)
                    $this->value = $video->ID;
            }
        }
        if(!empty($value) && is_numeric($value)){
            $this->value = $value;
        }


        if(is_numeric($value) && $value == 0 ){
            $this->value = 0;
        }

    }

    public function VideoURL(){
        if($this->value){
            $video = CloudinaryVideo::get()->byID($this->value);
            if($video)
                return $video->getField('URL');
        }
    }

    public function processURL()
    {
        return $this->Link('process');
    }

    public function saveInto(DataObjectInterface $record)
    {
        $fieldname = $this->getName();

        if($record->has_one($fieldname) && is_numeric($this->value)) {
            $record->{"{$fieldname}ID"} = $this->value;
        }
        return $this;
    }

    public function process()
    {
        $bSuccess = false;
        $iVideoID = 0;

        if(isset($_POST['SourceURL'])){
            $sourceURL = $_POST['SourceURL'];
            $bIsYoutube = CloudinaryYoutubeVideo::isYoutube($sourceURL);
            $bIsVimeo = CloudinaryVimeoVideo::isVimeo($sourceURL);
            if($bIsYoutube || $bIsVimeo){
                $filterClass = $bIsYoutube ? 'CloudinaryYoutubeVideo' : 'CloudinaryVimeoVideo';
                $funcForID = $bIsYoutube ? 'youtube_id_from_url' : 'vimeo_id_from_url';
                $funcForDetails = $bIsYoutube ? 'youtube_video_details' : 'vimeo_video_details';
                $video = $filterClass::get()->filter('URL', $sourceURL)->first();
                if(!$video){
                    $sourceID = $filterClass::$funcForID($sourceURL);
                    $details = $filterClass::$funcForDetails($sourceID);
                    $video = new $filterClass(array(
                        'Title'     => $details['title'],
                        'Duration'  => $details['duration'],
                        'URL'	    => $sourceURL,
                        'PublicID'	=> $sourceID,
                        'FileType'  => $bIsYoutube ? 'youtube' : 'vimeo',
                    ));
                    $video->write();
                }
                $iVideoID = $video->ID;
                $bSuccess = true;
            }
        }

        return Convert::array2json(array(
            'VideoID'	    => $iVideoID,
            'Success'		=> $bSuccess
        ));
    }

    public function DeleteLink(){
        return $this->Link('delete_image');
    }

    public function delete_image(){
        if($this->value){
            $this->value = 0;
        }
    }

    public function IsUploaded(){
        return !empty($this->value);
    }

} 