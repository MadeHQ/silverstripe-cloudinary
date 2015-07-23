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
		'CloudinaryAPISecret'		=> 'Varchar(100)'
	);


	public function updateCMSFields(FieldList $fields){
		$fields->addFieldsToTab('Root.Settings', array(
			HeaderField::create('Cloudinary', 'Cloudinary')->setHeadingLevel(4),
			TextField::create('CloudinaryCloudName', 'Cloud Name'),
			TextField::create('CloudinaryAPIKey', 'API Key'),
			TextField::create('CloudinaryAPISecret', 'API Secret')
		));
	}


} 