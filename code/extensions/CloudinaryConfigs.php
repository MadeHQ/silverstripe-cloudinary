<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 5:48 PM
 * To change this template use File | Settings | File Templates.
 */

class CloudinaryConfigs extends DataExtension {


	/**
	 * @return int
	 */
	public static function ImageQuality() {
		$arrConfigs = Config::inst()->get('CloudinaryConfigs', 'settings');
		$iSetting = $arrConfigs['Quality'];
		if(!$iSetting)
			$iSetting = 70;

		return $iSetting;
	}

	/**
	 * @param FieldList $fields
	 */
	public function updateCMSFieldSecondary(FieldList $fields) {
		$this->updateCMSFields($fields);
	}

	/**
	 * ReplaceFileFields
	 */
	public static function ReplaceFileFields() {

		if(isset($_REQUEST['flush']) && $_REQUEST['flush'] == 'all'){
			$arrRelationships = array('has_one', 'has_many', 'many_many');
			$classes = ClassInfo::subclassesFor('DataObject');
			$configManifest = new SS_ConfigStaticManifest(BASE_PATH, false, true);
			$static = $configManifest->getStatics();

			$arrUpdated = array();


			foreach($static as $className => $options){
				$bUpdated = false;

				if(!in_array($className, array('File', 'Image'))){

					foreach($arrRelationships as $relation){
						if(in_array($className, $classes) && isset($options[$relation]) && isset($options[$relation]['value'])){
							foreach($options[$relation]['value'] as $field => $value){
								if($value == 'Image'){
									$options[$relation]['value'][$field] = 'CloudinaryImage';
									$bUpdated = true;
								}
								else if ($value == 'File'){
									$options[$relation]['value'][$field] = 'CloudinaryFile';
									$bUpdated = true;
								}
							}
						}
					}

					if($bUpdated){
						$arrUpdated[$className] = $options;
						foreach($arrRelationships as $relation){
							if(isset($options[$relation]['value'])){
								Config::inst()->update($className, $relation, $options[$relation]['value']);
							}
						}
					}
				}

				if(count($arrUpdated)){
					$cacheClass = defined('SS_MANIFESTCACHE') ? SS_MANIFESTCACHE : 'ManifestCache_File';
					$cache = new $cacheClass('staticmanifest');
					$pathKey = sha1(BASE_PATH);

					$keysets = array();

					foreach ($arrUpdated as $class => $details) {
						$key = sha1($class);
						$keysets[$key][$class] = $details;
					}

					foreach ($keysets as $key => $details) {
						$cache->save($details, $pathKey.'_'.$key);
					}
				}
			}
		}



	}

} 