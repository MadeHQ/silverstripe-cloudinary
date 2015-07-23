<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 2:49 PM
 * To change this template use File | Settings | File Templates.
 */



class CloudinaryFile extends DataObject {


	/**
	 * @var array
	 */
	protected $options;


	/**
	 * @var array
	 */
	private static $db = array(
		'Title'				=> 'Varchar(200)',
		'FileName'			=> 'Varchar(200)',
		'PublicID'			=> 'Varchar(200)',
		'Version'			=> 'Varchar(200)',
		'Signature'			=> 'Varchar(200)',
		'URL'				=> 'Varchar(500)',
		'SecureURL'			=> 'Varchar(500)',
		'FileType'			=> 'Varchar(100)',
		'FileSize'			=> 'Float',
		'Format'			=> 'Varchar(50)'
	);


	/**
	 * @var array
	 */
	private static $summary_fields = array(
		'FileName',
		'Date',
		'FileSize'
	);


	/**
	 * @var array
	 */
	private static $searchable_fields = array(
		'FileName'
	);


	/**
	 * SetCloudinaryConfigs
	 *
	 * Check whether the database is ready and update cloudinary
	 * configs from the site configs
	 */
	public static function SetCloudinaryConfigs()
	{
		if(DB::isActive()) {
			$tables = DB::tableList();
			if(in_array('SiteConfig', $tables)){
				$result = DB::query('SELECT * FROM "SiteConfig"');
				if($result->numRecords()){
					$arr = $result->nextRecord();
					if(isset($arr['CloudinaryCloudName']) && isset($arr['CloudinaryAPIKey']) && isset($arr['CloudinaryAPISecret'])){
						Cloudinary::config(array(
							"cloud_name"    => $arr['CloudinaryCloudName'],
							"api_key"       => $arr['CloudinaryAPIKey'],
							"api_secret"    => $arr['CloudinaryAPISecret']
						));
					}
				}
			}
		}
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


	/**
	 * @return FieldList
	 * update the CMS fields
	 */
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


	/**
	 * @param $strField
	 * @param $strValue
	 * @return string
	 */
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

		$strSource = '';
		if($this->PublicID){
			$strSource = $this->PublicID . '.' . $this->Format;
		}elseif($this->URL || $this->SecureURL){
			$strURL = $this->URL ? $this->URL : $this->SecureURL;
			$strSource = substr($strURL, strrpos($strURL, '/') + 1);
		}

		if($strSource){
			$options = $this->options ? $this->options : array();
			return Cloudinary::cloudinary_url(
				$strSource,
				$options
			);
		}

		return null;
	}


	/**
	 * @param array $options
	 */
	public function CloudinaryURL($options)
	{
		$strSource = $this->PublicID . '.' . $this->Format;
		Cloudinary::cloudinary_url($strSource, $options);
	}


	/**
	 * @return bool|string
	 */
	public function getSize()
	{
		return ($this->FileSize) ? File::format_size($this->FileSize) : false;
	}


	/**
	 * @return mixed
	 * get the extension from the file name
	 */
	public function getExtension(){
		return pathinfo($this->FileName, PATHINFO_EXTENSION);
	}


	/**
	 * @return Image_Cached
	 */
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