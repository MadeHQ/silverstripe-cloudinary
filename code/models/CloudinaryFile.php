<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 2:49 PM
 * To change this template use File | Settings | File Templates.
 */

require_once CLOUDINARY_BASE . '/thirdparty/Cloudinary/Cloudinary.php';
require_once CLOUDINARY_BASE . '/thirdparty/Cloudinary/Uploader.php';
require_once CLOUDINARY_BASE . '/thirdparty/Cloudinary/Api.php';

class CloudinaryFile extends DataObject {


	/**
	 * @var array
	 */
	protected $options;


	/**
	 * @var array
	 */
	private static $db = array(
		'Title'				=> 'Varchar(500)',
		'FileName'			=> 'Varchar(500)',
		'PublicID'			=> 'Varchar(500)',
		'Version'			=> 'Varchar(500)',
		'Signature'			=> 'Varchar(500)',
		'URL'				=> 'Varchar(500)',
		'SecureURL'			=> 'Varchar(500)',
		'FileType'			=> 'Varchar(500)',
		'FileSize'			=> 'Float',
		'Format'			=> 'Varchar(500)'
	);


	/**
	 * @var array
	 */
	private static $summary_fields = array(
		'Thumbnail',
		'FileName',
		'Date',
		'FileSize'
	);

	private static $searchable_fields = array(
		'FileName'
	);



	/**
	 * Set cloudinary configs
	 */
	public static function SetCloudinaryConfigs()
	{
		Cloudinary::config(array(
			"cloud_name"    => SiteConfig::current_site_config()->CloudinaryCloudName,
			"api_key"       => SiteConfig::current_site_config()->CloudinaryAPIKey,
			"api_secret"    => SiteConfig::current_site_config()->CloudinaryAPISecret,
		));
	}

	/**
	 * @param $strFileName
	 * @return string
	 */
	public static function GetCloudinaryFileForFile($strFileName){
		$strClass = 'CloudinaryFile';
		$extension = pathinfo($strFileName, PATHINFO_EXTENSION);
		if(in_array($extension, array('jpg', 'jpeg', 'png', 'gif', 'tiff', 'ico', 'svg'))){
			$strClass = 'CloudinaryImage';
		}
		else if(in_array($extension, array('mov', 'swf', 'mp4', 'mpeg', 'webm'))){
			$strClass = 'CloudinaryVideo';
		}
		return $strClass;
	}


	public function getCMSFields(){
		$fields = parent::getCMSFields();

		$arrFields = array(
			'FileName',
			'PublicID',
			'Version',
			'Signature',
			'URL',
			'SecureURL',
			'FileSize',
			'Width',
			'Height',
			'Format',
			'FileType'
		);

		foreach($arrFields as $strType){
			if($field = $fields->dataFieldByName($strType)){

				if(in_array($strType, array('URL', 'SecureURL'))){
					$url = $this->getField($strType);
					$newField = LiteralField::create($strType, $this->GetLiteralHTML($strType, "<a href='{$url}' target='_blank'>{$url}</a>"));
					$fields->replaceField($strType, $newField);
				}
				else if ($strType === 'FileSize') {
					$newField = LiteralField::create($strType, $this->GetLiteralHTML($strType, $this->getSize()));
					$fields->replaceField($strType, $newField);
				}
				else {
					$fields->replaceField($strType, $field->performReadonlyTransformation());
				}



			}
		}

		return $fields;
	}


	function GetLiteralHTML($strField, $strValue){
		$str = <<<HTML
<div id='{$strField}' class='field readonly text'>
	<label class='left' for='Form_ItemEditForm_{$strField}'>{$strField}</label>
	<div class='middleColumn'>
	<span id='Form_ItemEditForm_{$strField}' class='readonly text'>
		{$strValue}
	</span>
	</div>
</div>
HTML;
		return $str;
	}

	/**
	 * @return mixed|null
	 */
	public function getDisplayURL()
	{
		if($this->PublicID){
			$options = $this->options ? $this->options : array();
			$strSource = $this->PublicID . '.' . $this->Format;
			CloudinaryImage::SetCloudinaryConfigs();
			return Cloudinary::cloudinary_url($strSource, $options);
		}elseif($this->URL || $this->SecureURL){
			$strURL = $this->URL ? $this->URL : $this->SecureURL;
			$options = $this->options ? $this->options : array();
			$strSource = substr($strURL, strrpos($strURL, '/') + 1);
			CloudinaryImage::SetCloudinaryConfigs();
			return Cloudinary::cloudinary_url($strSource, $options);
		}
		return null;
	}


	/**
	 * @param array $options
	 */
	public function CloudinaryURL($options)
	{
		$strSource = $this->PublicID . '.' . $this->Format;
		CloudinaryFile::SetCloudinaryConfigs();
		Cloudinary::cloudinary_url($strSource, $options);
	}


	/**
	 * @return string
	 */
	public function AbsoluteSize()
	{
		return $this->FileSize;
	}


	/**
	 * @return bool|string
	 */
	public function getSize()
	{
		$size = $this->AbsoluteSize();
		return ($size) ? File::format_size($size) : false;
	}

	public function getExtension(){
		return pathinfo($this->FileName, PATHINFO_EXTENSION);
	}

	public function StripThumbnail(){
		return new Image_Cached($this->Icon());
	}

	/**
	 * @return mixed|null
	 */
	public function Icon()
	{

		$ext = strtolower($this->Format);
		if(!Director::fileExists(FRAMEWORK_DIR . "/images/app_icons/{$ext}_32.gif")) {
			$ext = $this->appCategory();
		}

		if(!Director::fileExists(FRAMEWORK_DIR . "/images/app_icons/{$ext}_32.gif")) {
			$ext = "generic";
		}

		return FRAMEWORK_DIR . "/images/app_icons/{$ext}_32.gif";

	}
} 