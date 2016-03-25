<?php

class CloudinaryFile extends DataObject
{

	protected $sourceURL = '';

	private static $db = array(
		'CloudinaryID'		=> 'Varchar(100)',
		'Credit'			=> 'Varchar(200)',
		'Caption'			=> 'Varchar(200)',
		'Gravity'			=> 'Enum("Face,Faces,Centre,N,S,E,W,NE,NW,SE,SW")'
	);


	public function getTitle()
	{
		return $this->Caption;
	}

	public function getFrontEndFields($params = null)
	{
		$fields = parent::getFrontEndFields($params);

		$fields->dataFieldByName('CloudinaryID')->setTitle("");
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

		$url = Cloudinary::cloudinary_url($this->CloudinaryID, $options);
		$cached = new CloudinaryImage_Cached();
		$cached->setSourceURL($url);
		return $cached;

	}


	public function getSourceURL()
	{
		if(!empty($this->sourceURL)){
			return $this->sourceURL;
		}

		return Cloudinary::cloudinary_url($this->CloudinaryID);
	}

	public function forTemplate()
	{
		$url = $this->getSourceURL();
		$title = Convert::raw2htmlatt($this->Caption);
		if($url){
			return "<img src=\"$url\" alt=\"$title\" />";
		}

	}


	public function getURL()
	{
		return $this->getSourceURL();
	}


}


class CloudinaryImage_Cached extends CloudinaryFile
{

	public function setSourceURL($url)
	{
		$this->sourceURL = $url;
	}

}