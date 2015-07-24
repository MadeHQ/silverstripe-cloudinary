<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/24/15
 * Time: 1:28 PM
 * To change this template use File | Settings | File Templates.
 */

class CloudinarySiteTreeLinkTracking extends SiteTreeLinkTracking {

	private static $many_many = array(
		"CloudinaryTracking" 	=> "CloudinaryFile"
	);

	private static $many_many_extraFields = array(
		"CloudinaryTracking" => array("FieldName" => "Varchar")
	);



	/**
	 * Scrape the content of a field to detect anly links to local SiteTree pages or files
	 *
	 * @param string $field The name of the field on {@link @owner} to scrape
	 */
	function trackLinksInField($field) {
		$record = $this->owner;

		$linkedCloudinary = array();

		preg_match_all('/\[cloudinary,id=\"\d*\"/i', $record->$field, $matches);
		if($matches && isset($matches[0])) foreach($matches[0] as $match){
			$id = str_replace('"', '', str_replace('[cloudinary,id=', '', $match));

			if($file = CloudinaryFile::get()->byID((int)$id)){
				$linkedCloudinary[] = (int)$id;
			}
			else{
				$record->HasBrokenFile = true;
			}

		}

		// Update the "CloudinaryTracking" many_many
		if($record->ID && $record->many_many('CloudinaryTracking') && $tracker = $record->CloudinaryTracking()) {
			$tracker->removeByFilter(sprintf(
				'"FieldName" = \'%s\' AND "%s" = %d',
				$field,
				$tracker->getForeignKey(),
				$record->ID
			));

			if($linkedCloudinary) foreach($linkedCloudinary as $item) {
				$tracker->add($item, array('FieldName' => $field));
			}
		}

		parent::trackLinksInField($field);
	}





	/**
	 * select all the files, HTML and Markdown and run the link tracking tests
	 */
	function augmentSyncLinkTracking() {
		// Reset boolean broken flags
		$this->owner->HasBrokenLink = false;
		$this->owner->HasBrokenFile = false;

		// Build a list of HTMLText fields
		$allFields = $this->owner->db();
		$contentFields = array();
		foreach($allFields as $field => $fieldSpec) {
			if(preg_match('/([^(]+)/', $fieldSpec, $matches)) {
				$class = $matches[0];
				if(class_exists($class)){
					if($class == 'HTMLText' || is_subclass_of($class, 'HTMLText')) $contentFields[] = $field;
					else if($class == 'MarkdownText' || is_subclass_of($class, 'MarkdownText')) $contentFields[] = $field;
				}
			}
		}

		foreach($contentFields as $field) $this->trackLinksInField($field);

	}

} 