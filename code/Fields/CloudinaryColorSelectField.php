<?php

class CloudinaryColorSelectField extends FormField {

	private static $allowed_actions = array(
		'currentImage',
        'changeUrl'
	);

	private $strImageUrl = '';
	private $cloudName = '';

	public function __construct($strName, $strTitle = '', $cloudinaryImageName = ''){
		if($cloudinaryImageName)
			$this->cloudName = $cloudinaryImageName->Name;
		parent::__construct($strName, $strTitle);
	}

	public function setCloudinaryFieldName($strField){
		$this->cloudName = $strField;
		return $this;
	}

	public function setCloudinaryURL($strURL){
		$this->strImageUrl = $strURL;
		return $this;
	}

    public function Field($properties = array())
    {
		Requirements::css(CLOUDINARY_RELATIVE . "/css/CloudinaryColorSelectField.css");
        Requirements::javascript(CLOUDINARY_RELATIVE . "/javascript/thirdparty/color-thief.js");
        Requirements::javascript(CLOUDINARY_RELATIVE . "/javascript/CloudinaryColorSelectField.js");
        return parent::Field($properties);

    }

    public function cloudName(){
        return $this->cloudName;
    }


	public function currentImage()
	{
		if($imageURL = $this->getCloudinaryImageURL()){
			$strHeader = '';
			if(substr($imageURL, -strlen('.jpg')) == '.jpg')
				$strHeader = 'Content-type: image/jpeg';
			if(substr($imageURL, -strlen('.png')) == '.png')
				$strHeader = 'Content-type: image/png';
			if(substr($imageURL, -strlen('.gif')) == '.gif')
				$strHeader = 'Content-type: image/gif';

			header($strHeader);
			$strContent = file_get_contents($imageURL);
			echo $strContent;
		}
    }

	public function getCloudinaryImageURL(){
		$strRet = '';
		if(isset($_REQUEST['current_image']))
			$strRet = $_REQUEST['current_image'];
		else if($this->strImageUrl)
			$strRet = $this->strImageUrl;
		return $strRet;
	}

	public function GetImageURL(){
		return $this->strImageUrl;
	}

	public function LoadImageURL()
	{
		return $this->Link('currentImage');
	}

	public function getAttributes()
	{
		return array_merge(
			parent::getAttributes(),
			array('type' => 'hidden')
		);
	}

    public function ColorPicker(){
        return ColourPicker::create('Color')->forTemplate();
    }

} 