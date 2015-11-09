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
		if(Config::inst()->get('CloudinaryConfigs', 'replace_relationships')) {
			$arrRelationships = array('has_one', 'has_many', 'many_many');

			$classes = ClassInfo::subclassesFor('DataObject');
			foreach($classes as $className) {
				foreach($arrRelationships as $relationType){
					if($relation = Config::inst()->get($className, $relationType)) {
						if(in_array('File', $relation) || in_array('Image', $relation)) {
							$updateRelations = array();
							foreach($relation as $field => $type){
								$newType = $type;
								if($type == 'File'){
									$newType = 'CloudinaryFile';
								}
								if($type == 'Image'){
									$newType = 'CloudinaryImage';
								}
								$updateRelations[$field] = $newType;
							}
							Config::inst()->update($className, $relationType, $updateRelations);

						}
					}
				}
			}
		}
	}

} 