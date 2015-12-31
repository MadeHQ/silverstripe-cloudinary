<?php

class CloudinaryColorSelectField extends FormField
{

    /**
     * @var string
     * URL for image source which color select field to use
     */
    private $source_image_url = '';

    /**
     * @var null|string
     * Media field which color select field refers
     */
    private $reference_field = '';

    /**
     * @var array
     */
    private static $allowed_actions = array(
        'currentImage',
    );

    /**
     * @param string $strName
     * @param string $strTitle
     * @param null $strReferenceField
     */
    public function __construct($strName, $strTitle = '', $objColourSelectSource = null, $strReferenceField = null)
    {
        $this->setReferenceField($strReferenceField);
        $this->setColourSelectSource($objColourSelectSource);
        parent::__construct($strName, $strTitle);
    }

    /**
     * @param array $properties
     * @return string
     */
    public function Field($properties = array())
    {
        Requirements::css(CLOUDINARY_RELATIVE . "/css/CloudinaryColorSelectField.css");
        Requirements::javascript(CLOUDINARY_RELATIVE . "/javascript/thirdparty/color-thief.js");
        Requirements::javascript(CLOUDINARY_RELATIVE . "/javascript/CloudinaryColorSelectField.js");
        return parent::Field($properties);
    }

    /**
     * @return null|string
     */
    public function getReferenceField()
    {
        return $this->reference_field;
    }

    /**
     * @param $strField
     * @return $this
     * Set the Media (Video / Image) field name
     */
    public function setReferenceField($strField)
    {
        $this->reference_field = $strField;
        return $this;
    }

    /**
     * @return string
     * return source image url for color select
     */
    public function getColourSelectSource()
    {
        return $this->source_image_url;
    }

    /**
     * @param $objMedia - pass only media object. function itself will generate the media image
     * @return $this
     * Set image url for color select
     */
    public function setColourSelectSource($objMedia)
    {
        if ($objMedia && !is_a($objMedia, 'CloudinaryImage') && !is_a($objMedia, 'CloudinaryVideo')) {
            user_error(
                "setColourSelectSource() accepts only CloudinaryVideo or CloudinaryImage objects.",
                E_USER_ERROR
            );
        }
        if ($objMedia) {
            $this->source_image_url = $objMedia->GetFileImage(200, 140)->getSourceURL();
        }
        return $this;
    }

    /**
     * @param DataObjectInterface $record
     * @return $this|void
     * if ColorPicker field exists, then convert the value hex to rgb
     */
    public function saveInto(DataObjectInterface $record)
    {
        $name = $this->getName();

        if ($this->ColorPickerExists() && $record->db($name)) {
            $record->{"{$name}"} = $this->value ? 'rgb('.implode(',', $this->hex2rgb($this->value)).')' : null;
        } elseif ($record->db($name)) {
            $record->{"{$name}"} = $this->value;
        }
        return $this;
    }

    /**
     * @return array
     */
    public function getAttributes()
    {
        return array_merge(
            parent::getAttributes(),
            array('type' => 'hidden')
        );
    }

    /**
     * @return String
     * return url for the action which generates the thumbnail for color-thief
     */
    public function LoadImageURL()
    {
        return $this->Link('currentImage');
    }

    /**
     * generates the image in cms for color-thief
     */
    public function currentImage()
    {
        if ($imageURL = $this->getCloudinaryImageURL()) {
            $strHeader = '';
            if (substr($imageURL, -strlen('.jpg')) == '.jpg') {
                $strHeader = 'Content-type: image/jpeg';
            }
            if (substr($imageURL, -strlen('.png')) == '.png') {
                $strHeader = 'Content-type: image/png';
            }
            if (substr($imageURL, -strlen('.gif')) == '.gif') {
                $strHeader = 'Content-type: image/gif';
            }

            header($strHeader);
            $strContent = file_get_contents($imageURL);
            echo $strContent;
        }
    }

    /**
     * @return string
     * cloudinary image or video thumbnail url
     */
    public function getCloudinaryImageURL()
    {
        $strRet = '';
        if (isset($_REQUEST['current_image'])) {
            $strRet = $_REQUEST['current_image'];
        } elseif ($this->source_image_url) {
            $strRet = $this->source_image_url;
        }
        return $strRet;
    }

    /**
     * @return null || string
     * returns custom color picker
     */
    public function ColorPicker()
    {
        if ($this->ColorPickerExists()) {
            return ColourPicker::create($this->name)
                ->addExtraClass('cloudinarycolorselect')
                ->setValue($this->value ? $this->rgb2hex(sscanf($this->value, "rgb(%d, %d, %d)")) : '')
                ->forTemplate();
        }
        return null;
    }

    /**
     * @return bool
     */
    public function ColorPickerExists()
    {
        return class_exists('ColourPicker');
    }

    /**
     * @param $hex
     * @return array
     */
    private function hex2rgb($hex)
    {
        $hex = str_replace("#", "", $hex);
        $r = hexdec(substr($hex, 0, 2));
        $g = hexdec(substr($hex, 2, 2));
        $b = hexdec(substr($hex, 4, 2));
        $rgb = array($r, $g, $b);
        return $rgb;
    }

    /**
     * @param $rgb
     * @return string
     */
    private function rgb2hex($rgb)
    {
        $hex = "#";
        $hex .= str_pad(dechex($rgb[0]), 2, "0", STR_PAD_LEFT);
        $hex .= str_pad(dechex($rgb[1]), 2, "0", STR_PAD_LEFT);
        $hex .= str_pad(dechex($rgb[2]), 2, "0", STR_PAD_LEFT);
        return $hex;
    }
}
