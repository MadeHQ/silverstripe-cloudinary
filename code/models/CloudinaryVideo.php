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

	/**
	 * @return FieldList
	 */
	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fileAttributes = $fields->fieldByName('Root.Main.FilePreview')->fieldByName('FilePreviewData');
		$fileAttributes->push(new ReadonlyField("Dimensions", _t('AssetTableField.DIM','Dimensions') . ':', $this->Width . ' x ' . $this->Height));
		$fileAttributes->push(new ReadonlyField("Duration", 'Duration:'));

		return $fields;
	}

	/**
	 * @return CloudinaryImage_Cached|Image_Cached
	 */
	public function StripThumbnail(){
		return $this->GetVideoImage(132, 128, 60);
	}

	/**
	 * @return CloudinaryImage_Cached|Image_Cached
	 */
	public function CMSThumbnail(){
		return $this->GetVideoImage(132, 128, 60);
	}

	/**
	 * @param $iWidth
	 * @param $iHeight
	 * @param int $iQuality
	 * @return CloudinaryImage_Cached
	 */
	public function GetVideoImage($iWidth, $iHeight, $iQuality = 70){
		$clone = $this->duplicate(false);
		$clone->Format = 'jpg';
		return new CloudinaryImage_Cached(array(
			'width'     	=> $iWidth,
			'height'   	 	=> $iHeight,
			'crop'      	=> 'fill',
			'start_offset'	=> 0,
			'resource_type'	=> 'video',
			'quality'		=> $iQuality
		), $clone);
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
		return Cloudinary::cloudinary_url($strSource, $options);
	}

} 