<?php

class CloudinaryImage extends CloudinaryMedia {

	/**
	 * @var array
	 */
	private static $db = array(
		'Width'				=> 'Varchar(500)',
		'Height'			=> 'Varchar(500)',
	);

	/**
	 * @return FieldList
	 */
	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fileAttributes = $fields->fieldByName('Root.Main.FilePreview')->fieldByName('FilePreviewData');
		$fileAttributes->push(new ReadonlyField("Dimensions", _t('AssetTableField.DIM','Dimensions') . ':', $this->Width . ' x ' . $this->Height));

		return $fields;
	}

	/**
	 * @return CloudinaryImage_Cached|mixed|null
	 */
	public function Icon() {
		return $this->MakeCloudinaryCached(100, 100, 'fill');
	}

    /**
     * @param int $iWidth
     * @param int $iHeight
     * @param int $iQuality
     * @return CloudinaryImage_Cached|Image_Cached
     */
    public function Thumbnail($iWidth = 132, $iHeight = 128, $iQuality = 60) {
        return $this->CMSThumbnail($iWidth, $iHeight, $iQuality);
    }

	/**
	 * @return CloudinaryImage_Cached|Image_Cached
	 */
	public function StripThumbnail() {
		return $this->MakeCloudinaryCached(100, 100, 'fill', 60);
	}

    /**
     * @param int $iWidth
     * @param int $iHeight
     * @param int $iQuality
     * @return CloudinaryImage_Cached|Image_Cached
     */
    public function CMSThumbnail($iWidth = 132, $iHeight = 128, $iQuality = 60) {
		return $this->MakeCloudinaryCached($iWidth, $iHeight, 'fill', $iQuality);
	}

	/**
	 * @return string
	 */
	public function forTemplate() {
		return $this->getTag();
	}


	/**
	 * @return string
	 */
	public function getTag() {
		$url = $this->getSourceURL();
		$title = $this->Title;
		if($url)
			return "<img src=\"$url\" alt=\"$title\" />";
	}

	/*
     * crop the image
     */
	public function CroppedImage($iWidth, $iHeight, $iQuality = 0) {
		return $this->MakeCloudinaryCached($iWidth, $iHeight, 'crop', $iQuality);
	}

	public function FillImage( $iWidth, $iHeight, $iQuality = 70, $strGravity = 'faces' ) {
		return $this->MakeCloudinaryCached($iWidth, $iHeight, 'fill', $iQuality, $strGravity, 'auto');
	}

	/**
	 * @param $iWidth
	 * @param $iHeight
	 * @param string $crop
	 * @param int $iQuality
	 * @param null $strGravity
	 * @param null $fetchFormat
	 * @param null $strBackground
	 * @param null $x
	 * @param null $y
	 * @return CloudinaryImage_Cached
	 */
	public function MakeCloudinaryCached(
        $iWidth, $iHeight, $crop = 'fit', $iQuality = 0, $strGravity = null, $fetchFormat = null,
        $strBackground = null, $x = null, $y = null
    ) {
		if(!$iQuality) {
			$iQuality = CloudinaryConfigs::ImageQuality();
		}

		$arrOptions = array(
			'width' 	=> $iWidth,
			'height' 	=> $iHeight,
			'crop' 		=> $crop,
			'quality'	=> $iQuality
		);

		if($x >= 0) {
			$arrOptions['x'] = $x;
		}

		if($y >= 0) {
			$arrOptions['y'] = $y;
		}

		if($fetchFormat) {
			$arrOptions['fetch_format'] = $fetchFormat;
		}

		if($strGravity) {
			$arrOptions['gravity'] = $strGravity;
		}

		if($strBackground) {
			$arrOptions['background'] = $strBackground;
		}

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
	public function __construct($options = null, $dataRecord = null, $model = null) {
		parent::__construct(array(), false, $model);
		$this->ID = -1;
		$this->options =  $options;
		if($dataRecord instanceof CloudinaryFile) {
			$this->PublicID = $dataRecord->PublicID;
			$this->URL      = $dataRecord->URL;
			$this->SecureURL = $dataRecord->SecureURL;
			$this->FileType = $dataRecord->FileType;
			$this->FileName = $dataRecord->FileName;
			$this->Format = $dataRecord->Format;
		}

	}

}