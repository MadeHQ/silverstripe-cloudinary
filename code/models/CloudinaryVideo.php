<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 2:49 PM
 * To change this template use File | Settings | File Templates.
 */

class CloudinaryVideo extends CloudinaryFile {

	/**
	 * @var array
	 */
	private static $db = array(
		'Width'				=> 'Varchar(500)',
		'Height'			=> 'Varchar(500)',
		'Duration'			=> 'Varchar(100)',
		'BitRate'			=> 'Varchar(100)',
		'FrameRate'			=> 'Varchar(100)'
	);

	public function StripThumbnail(){
		$this->DirectOutputURL = $this->Icon();
		return new CloudinaryImage_Cached(array(), $this);
	}

	public function Icon()
	{

		$options = array(
			'width'     	=> 100,
			'height'   	 	=> 100,
			'crop'      	=> 'fill',
			'start_offset'	=> 0,
			'resource_type'	=> 'video',
			'quality'		=> 70

		);

		$strSource = $this->PublicID . '.jpg';
		CloudinaryFile::SetCloudinaryConfigs();
		return Cloudinary::cloudinary_url($strSource, $options);
	}

} 