<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 2:49 PM
 * To change this template use File | Settings | File Templates.
 */

class CloudinaryImage extends CloudinaryFile {

	/**
	 * @var array
	 */
	private static $db = array(
		'Width'				=> 'Varchar(500)',
		'Height'			=> 'Varchar(500)',
	);


	/**
	 * @return mixed|null
	 */
	public function Icon()
	{
		$options = array(
			'width'     => 100,
			'height'    => 100,
			'crop'      => 'fill'
		);
		$strSource = $this->PublicID . '.' . $this->Format;
		CloudinaryFile::SetCloudinaryConfigs();
		return Cloudinary::cloudinary_url($strSource, $options);
	}

	/**
	 * @return string
	 */
	public function forTemplate()
	{
		return $this->getTag();
	}


	/**
	 * @return string
	 */
	public function getTag()
	{
		CloudinaryFile::SetCloudinaryConfigs();
		$url = $this->DirectOutputURL ? $this->DirectOutputURL : $this->getDisplayURL();


		$title = $this->FileName;
		if($url)
			return "<img src=\"$url\" alt=\"$title\" />";
	}

	public function StripThumbnail(){

		return $this->MakeCloudinaryCached(100, 100, 60, 'fill');
	}

	function MakeCloudinaryCached($iWidth, $iHeight, $iQuality, $crop = 'fit', $strGravity = null, $fetchFormat = null, $strBackground = null, $x = null, $y = null){

		$arrOptions = array(
			'width' 	=> $iWidth,
			'height' 	=> $iHeight,
			'crop' 		=> $crop,
			'quality'	=> $iQuality
		);

		if($x >= 0){
			$arrOptions['x'] = $x;
		}

		if($y >= 0){
			$arrOptions['y'] = $y;
		}

		if($fetchFormat)
			$arrOptions['fetch_format'] = $fetchFormat;

		if($strGravity)
			$arrOptions['gravity'] = $strGravity;

		if($strBackground)
			$arrOptions['background'] = $strBackground;

		return new CloudinaryImage_Cached($arrOptions, $this);
	}

}

class CloudinaryImage_Cached extends CloudinaryImage {

	/**
	 * create CloudinaryImage_Cached
	 * @param array $options
	 * @param CloudinaryImage $dataRecord
	 * @param $model
	 */
	public function __construct($options = null, $dataRecord = null, $model = null)
	{
		$bIsSingleton = !($dataRecord instanceof CloudinaryImage);
		parent::__construct(array(), $bIsSingleton, $model);
		$this->ID = -1;
		$this->options =  $options;
		if($dataRecord instanceof CloudinaryImage){
			$this->PublicID = $dataRecord->PublicID;
			$this->URL      = $dataRecord->URL;
			$this->SecureURL = $dataRecord->SecureURL;
			$this->FileType = $dataRecord->FileType;
			$this->FileName = $dataRecord->FileName;
			$this->Format = $dataRecord->Format;
		}

		if($dataRecord instanceof CloudinaryVideo){
			$this->DirectOutputURL = $dataRecord->DirectOutputURL;
		}
	}

}