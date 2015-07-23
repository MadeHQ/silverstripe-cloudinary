<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 5:48 PM
 * To change this template use File | Settings | File Templates.
 */

class CloudinaryConfigs extends DataExtension {

	private static $db = array(
		'CloudinaryCloudName'		=> 'Varchar(100)',
		'CloudinaryAPIKey'			=> 'Varchar(100)',
		'CloudinaryAPISecret'		=> 'Varchar(100)',
		'CloudinaryImageQuality'	=> 'Int',
		'ABC'						=> 'Int'
	);


	public function updateCMSFields(FieldList $fields){
		$fields->addFieldsToTab('Root.Settings', array(
			HeaderField::create('Cloudinary', 'Cloudinary')->setHeadingLevel(4),
			TextField::create('CloudinaryCloudName', 'Cloud Name'),
			TextField::create('CloudinaryAPIKey', 'API Key'),
			TextField::create('CloudinaryAPISecret', 'API Secret'),
			NumericField::create('CloudinaryImageQuality', 'Image Quality')->setRightTitle('Specify the quality of the images Cloudinary generates (0 - 100 Integer) defaults to 70')
		));
	}

	public static function ImageQuality(){
		$iSetting = SiteConfig::current_site_config()->CloudinaryImageQuality;
		if(!$iSetting)
			$iSetting = 70;

		return $iSetting;
	}


} 