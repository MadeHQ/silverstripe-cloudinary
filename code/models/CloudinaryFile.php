<?php

class CloudinaryFile extends DataObject
{

	protected $sourceURL = '';

	private static $db = array(
		'URL'				=> 'Varchar(500)',
		'Credit'			=> 'Varchar(200)',
		'Caption'			=> 'Varchar(200)',
		'Gravity'			=> 'Enum("Face,Faces,Centre,N,S,E,W,NE,NW,SE,SW")',
		'FileSize'			=> 'Varchar(50)',
		'Format'			=> 'Varchar(50)',
		'FileTitle'			=> 'Varchar(200)',
		'FileDescription'	=> 'Varchar(300)'
	);


	public function getTitle()
	{
		return $this->Caption;
	}

	public function getCMSFields()
	{


		Requirements::css('cloudinary/css/CloudinaryFileField.css');
		Requirements::javascript('cloudinary/javascript/thirdparty/jquery.cloudinary.js');
		Requirements::javascript('cloudinary/javascript/CloudinaryFileField.js');
		Requirements::javascript('cloudinary/javascript/CloudinaryFile.CMSFields.js');


		$fields = parent::getCMSFields();

		$titleField = $fields->dataFieldByName('URL');
		$titleField->addExtraClass('_js-cloudinary-url _js-cms-fields');

		if(CloudinaryUtils::resource_type($this->URL) == 'raw') {
			foreach (array('Credit', 'Caption', 'Gravity') as $fieldName){
				if($field = $fields->dataFieldByName($fieldName)) {
					$field->addExtraClass('_js-hide-on-load');
				}
			}
		}
		else {
			foreach (array('FileTitle', 'FileDescription') as $fieldName){
				if($field = $fields->dataFieldByName($fieldName)) {
					$field->addExtraClass('_js-hide-on-load');
				}
			}
		}
		

		$cloudName = CloudinaryUtils::cloud_name();
		$apiKey = CloudinaryUtils::api_key();

		$fields->addFieldToTab('Root.Main', LiteralField::create('Browser', <<<HTML
<div class="field _js-cloudinary_holer" data-cloudname="{$cloudName}" data-api="{$apiKey}">
	<div class="middleColumn">
		<a href="#" class="_js-attach-image-object ss-ui-action-constructive ss-ui-button ui-button ui-widget ui-state-default ui-corner-all new new-link ui-button-text-icon-primary">Choose Image</a>
	</div>
</div>
HTML
), 'Credit');

		// $fields->makeFieldReadonly('FileSize');
		//$fields->makeFieldReadonly('Format');

		$fields->replaceField('FileSize', HiddenField::create('FileSize'));
		$fields->replaceField('Format', HiddenField::create('Format'));

		$fields->addFieldsToTab('Root.Main', array(
			TextField::create('FileSize_ReadOnly', 'FileSize')->setValue($this->FileSize)->setDisabled(true),
			TextField::create('Format_ReadOnly', 'Format')->setValue($this->Format)->setDisabled(true)
		));

		return $fields;
	}

	public function getFrontEndFields($params = null)
	{
		$fields = parent::getFrontEndFields($params);

		$fields->replaceField('URL', TextField::create('URL')->setAttribute('laceholder', 'https://')->setTitle(""));
		$fields->replaceField('FileSize', HiddenField::create('FileSize'));
		$fields->replaceField('Format', HiddenField::create('Format'));
		$fields->removeByName('ParentID');

		return $fields;
	}

	public function Image( $width, $height, $crop = '', $quality = 0, $gravity = '' )
	{
		return $this->MakeCloudinaryCached($width, $height, $crop, $quality, $gravity);
	}

	public function MakeCloudinaryCached($width, $height, $crop, $quality, $gravity)
	{
		$options = array(
			'width' 	=> $width,
			'height' 	=> $height
		);

		if($crop){
			$options['crop'] = $crop;
		}
		if($quality){
			$options['quality'] = $quality;
		}
		if($gravity){
			$options['gravity'] = $gravity;
		}

		$cloudinaryID = CloudinaryUtils::public_id($this->URL);
		$fileName = $this->Format ? $cloudinaryID. '.'. $this->Format : $cloudinaryID;
		$url = Cloudinary::cloudinary_url($fileName, $options);
		$cached = new CloudinaryImage_Cached();
		$cached->setSourceURL($url);
		return $cached;

	}


	public function Link()
	{
		if(!empty($this->sourceURL)){
			return $this->sourceURL;
		}

		return Cloudinary::cloudinary_url(CloudinaryUtils::public_id($this->URL). '.' .$this->Format);
	}

	/**
	 * @param int $iWidth
	 * @param int $iHeight
	 * @param int $iQuality
	 * @return CloudinaryImage_Cached|Image_Cached
	 */
	public function Thumbnail($iWidth, $iHeight, $iQuality = 60)
	{
		return $this->CMSThumbnail($iWidth, $iHeight, $iQuality);
	}

	/**
	 * @return Image_Cached
	 */
	public function StripThumbnail()
	{
		return $this->CMSThumbnail(100, 100, 60);
	}

	/**
	 * @param int $iWidth
	 * @param int $iHeight
	 * @param int $iQuality
	 * @return Image_Cached
	 */
	public function CMSThumbnail($iWidth = 132, $iHeight = 128, $iQuality = 60)
	{
		return $this->GetFileImage($iWidth, $iHeight, $iQuality);
	}

	/**
	 * @param $iWidth
	 * @param $iHeight
	 * @param string $crop
	 * @param int $iQuality
	 * @param string $gravity
	 * @return CloudinaryImage_Cached
	 */
	public function GetFileImage($iWidth, $iHeight, $crop = 'fill', $iQuality = 70, $gravity = 'faces')
	{
		return $this->MakeCloudinaryCached($iWidth, $iHeight, $crop, $iQuality, $gravity);
	}


	/**
	 * @return mixed|null
	 */
	public function Icon() {
		$ext = strtolower($this->Format);
		if(!Director::fileExists(FRAMEWORK_DIR . "/images/app_icons/{$ext}_32.gif")) {
			$ext = File::get_app_category($ext);
		}
		if(!Director::fileExists(FRAMEWORK_DIR . "/images/app_icons/{$ext}_32.gif")) {
			$ext = "generic";
		}
		return FRAMEWORK_DIR . "/images/app_icons/{$ext}_32.gif";
	}

	public function forTemplate()
	{
		$url = $this->Link();
		$title = Convert::raw2htmlatt($this->Caption);
		if($url){
			return "<img src=\"$url\" alt=\"$title\" />";
		}

	}

	/**
	 * @return bool|string
	 */
	public function getSize()
	{
		return ($this->FileSize) ? File::format_size($this->FileSize) : false;
	}

}


class CloudinaryImage_Cached extends CloudinaryFile
{

	public function setSourceURL($url)
	{
		$this->sourceURL = $url;
	}

}