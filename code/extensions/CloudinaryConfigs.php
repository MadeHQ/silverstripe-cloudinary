<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 5:48 PM
 * To change this template use File | Settings | File Templates.
 */

class CloudinaryConfigs extends DataExtension {


	public static function ImageQuality(){
		$arrConfigs = Config::inst()->get('CloudinaryConfigs', 'settings');
		$iSetting = $arrConfigs['Quality'];
		if(!$iSetting)
			$iSetting = 70;

		return $iSetting;
	}


} 