<?php

class CloudinaryFile extends DataObject
{

	protected $sourceURL = '';

	private static $db = array(
		'URL'				=> 'Text',
		'Credit'			=> 'Varchar(200)',
		'Caption'			=> 'Varchar(200)',
		'Gravity'			=> 'Enum("Face,Faces,Centre,N,S,E,W,NE,NW,SE,SW")',
		'FileSize'			=> 'Float',
		'Format'			=> 'Varchar(50)',
	);


	public function getTitle()
	{
		return $this->Caption;
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