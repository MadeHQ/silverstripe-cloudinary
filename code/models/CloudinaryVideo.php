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

        if(!in_array($this->ClassName, array('CloudinaryVimeoVideo', 'CloudinaryYoutubeVideo'))){
            $fileAttributes->push(new ReadonlyField("Dimensions", _t('AssetTableField.DIM','Dimensions') . ':', $this->Width . ' x ' . $this->Height));
        }
		$fileAttributes->push(new ReadonlyField("Duration", 'Duration:'));

		return $fields;
	}

	/**
	 * @return CloudinaryImage_Cached|Image_Cached
	 */
	public function StripThumbnail(){
		return $this->GetFileImage(100, 100, 60);
	}

	/**
	 * @return CloudinaryImage_Cached|Image_Cached
	 */
	public function CMSThumbnail(){
		return $this->GetFileImage(132, 128, 60);
	}


	public function getTag(){
		return cl_video_tag($this->PublicID . '.' . $this->Format);
	}

} 