<?php

class CloudinaryFile extends DataObject
{

	protected $sourceURL = '';

	private static $arr_gravity = array(
		'center'		=> 'Center',
		'face'			=> 'Face',
		'faces'			=> 'Faces',
		'north_east'	=> 'NE',
		'north'			=> 'N',
		'north_west'	=> 'NW',
		'west'			=> 'W',
		'south_west'	=> 'SW',
		'south'			=> 'S',
		'south_east'	=> 'SE',
		'east'			=> 'E'
	);

	private static $db = array(
		'URL'				=> 'Varchar(500)',
		'Credit'			=> 'Varchar(200)',
		'Caption'			=> 'Varchar(200)',
		'Gravity'			=> 'Enum("center,face,faces,north_east,north,north_west,west,south_west,south,south_east,east", "center")',
		'FileSize'			=> 'Varchar(50)',
		'Format'			=> 'Varchar(50)',
		'FileTitle'			=> 'Varchar(200)',
		'FileDescription'	=> 'Varchar(300)'
	);

	private static $summary_fields = array(
		'getTitle'			=> 'Title'
	);

	public function getTitle()
	{

		if($this->URL && CloudinaryUtils::resource_type($this->URL) == 'raw'){
			return $this->FileTitle;
		}
		if($this->URL && CloudinaryUtils::resource_type($this->URL) != 'raw'){
			return $this->Caption;
		}
		return 'New Cloudinary File';
	}

	public function getCMSFields()
	{


		Requirements::css('cloudinary/css/CloudinaryFileField.css');
		Requirements::javascript('cloudinary/javascript/thirdparty/imagesloaded.js');
		Requirements::javascript('cloudinary/javascript/thirdparty/jquery.cloudinary.js');
		Requirements::javascript('cloudinary/javascript/CloudinaryFileField.js');
		Requirements::javascript('cloudinary/javascript/CloudinaryFile.CMSFields.js');


		$fields = parent::getCMSFields();

		$fields->dataFieldByName('URL')
			->addExtraClass('_js-cloudinary-url _js-cms-fields');

		$fields->dataFieldByName('FileTitle')->setTitle('Title');
		$fields->dataFieldByName('FileDescription')->setTitle('Description');
		$fields->dataFieldByName('Gravity')->setSource(self::$arr_gravity);

		if (!$this->ID) {
			$this->hideCMSFields($fields, array('Credit', 'Caption', 'Gravity', 'FileTitle', 'FileDescription'));
		} else {
			if(CloudinaryUtils::resource_type($this->URL) == 'raw') {
				$this->hideCMSFields($fields, array('Credit', 'Caption', 'Gravity'));
			}
			else {
				$this->hideCMSFields($fields, array('FileTitle', 'FileDescription'));
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
			TextField::create('FileSize_ReadOnly', 'Size')->setValue($this->getSize())->setDisabled(true),
			TextField::create('Format_ReadOnly', 'Format')->setValue($this->Format)->setDisabled(true)
		));

		return $fields;
	}

	private function hideCMSFields(FieldList $fields, $arrFieldsToHide)
	{
		foreach ($arrFieldsToHide as $fieldName){
			if($field = $fields->dataFieldByName($fieldName)) {
				$field->addExtraClass('_js-hide-on-load');
			}
		}
	}

	public function getFrontEndFields($params = null)
	{
		$fields = parent::getFrontEndFields($params);

		$fields->dataFieldByName('Gravity')->setSource(self::$arr_gravity);

		$fields->replaceField('URL', TextField::create('URL')->setAttribute('placeholder', 'https://')->setTitle(""));
		$fields->replaceField('FileSize', HiddenField::create('FileSize'));
		$fields->replaceField('Format', HiddenField::create('Format'));
		$fields->removeByName('ParentID');

		return $fields;
	}

	public function Image( $width, $height, $crop, $quality, $gravity )
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

		$options = array(
			'resource_type'  => CloudinaryUtils::resource_type($this->URL)
		);

		return Cloudinary::cloudinary_url(CloudinaryUtils::public_id($this->URL). '.' .$this->Format, $options);
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
		return $this->CMSThumbnail(100, 100, 'fill', 60);
	}

	/**
	 * @param int $iWidth
	 * @param int $iHeight
	 * @param string $crop
	 * @param int $iQuality
	 * @return CloudinaryImage_Cached
	 */
	public function CMSThumbnail($iWidth = 80, $iHeight = 60, $crop = 'fill', $iQuality = 80)
	{
		return $this->Image($iWidth, $iHeight, $crop, $iQuality, 'faces');
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

	/**
	 * @param $arguments
	 * @param null $content
	 * @param null $parser
	 * @return string
	 *
	 * Parse short codes for the cloudinary tags
	 */
	static public function cloudinary_markdown($arguments, $content = null, $parser = null) {
		if(!isset($arguments['id'])) return;
		$options = array(
			'resource_type' => 'image',
			'crop'			=> 'fill',
			'quality'		=> 90,
			'gravity'		=> $arguments['gravity']
		);
		if(isset($arguments['width']) && isset($arguments['height'])){
			$options['width'] = $arguments['width'];
			$options['height'] = $arguments['height'];
		}

		$created = new SS_Datetime();
		$created->setValue($arguments['created']);
		$fileName = $arguments['id'];
		$file = new CloudinaryFile(array(
			'URL'		=> Cloudinary::cloudinary_url($fileName, $options),
			'AltText'	=> isset($arguments['alt']) ? $arguments['alt'] : null,
			'Credit'	=> isset($arguments['credit']) ? $arguments['credit'] : null,
			'Caption'	=> isset($arguments['caption']) ? $arguments['caption'] : null,
			'Created'	=> $created
		));
		return $file->renderWith('MarkDownShortCode');

	}

}


class CloudinaryImage_Cached extends CloudinaryFile
{

	public function setSourceURL($url)
	{
		$this->sourceURL = $url;
	}

}