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
	public function trackLinksInField($fieldName) {
		$record = $this->owner;
		$linkedCloudinary = array();
		preg_match_all('/\[cloudinary,id=\"\d*\"/i', $record->$fieldName, $matches);
        if($matches && isset($matches[0])) {
            foreach($matches[0] as $match) {
                $id = str_replace('"', '', str_replace('[cloudinary,id=', '', $match));

                if($file = CloudinaryFile::get()->byID((int)$id)) {
                    $linkedCloudinary[] = (int)$id;
                } else {
                    $record->HasBrokenFile = true;
                }
            }
        }
		// Update the "CloudinaryTracking" many_many
		if($record->ID && $record->many_many('CloudinaryTracking') && $tracker = $record->CloudinaryTracking()) {
			$tracker->removeByFilter(sprintf(
				'"FieldName" = \'%s\' AND "%s" = %d',
				$fieldName,
				$tracker->getForeignKey(),
				$record->ID
			));

			if($linkedCloudinary) foreach($linkedCloudinary as $item) {
				$tracker->add($item, array('FieldName' => $fieldName));
			}
		}



		/// override the parent functions
		$record = $this->owner;

		$linkedPages = array();
		$linkedFiles = array();

		$htmlValue = Injector::inst()->create('HTMLValue', $record->$fieldName);
		$links = $this->parser->process($htmlValue);

		// Highlight broken links in the content.
		foreach ($links as $link) {
			$classStr = trim($link['DOMReference']->getAttribute('class'));
			if (!$classStr) {
				$classes = array();
			} else {
				$classes = explode(' ', $classStr);
			}

			// Add or remove the broken class from the link, depending on the link status.
			if ($link['Broken']) {
				$classes = array_unique(array_merge($classes, array('ss-broken')));
			} else {
				$classes = array_diff($classes, array('ss-broken'));
			}

			if (!empty($classes)) {
				$link['DOMReference']->setAttribute('class', implode(' ', $classes));
			} else {
				$link['DOMReference']->removeAttribute('class');
			}
		}


		// Populate link tracking for internal links & links to asset files.
		foreach ($links as $link) {
			switch ($link['Type']) {
				case 'sitetree':
					if ($link['Broken']) {
						$record->HasBrokenLink = true;
					} else {
						$linkedPages[] = $link['Target'];
					}
					break;

				case 'file':
					if ($link['Broken']) {
						$record->HasBrokenFile = true;
					} else {
						$linkedFiles[] = $link['Target'];
					}
					break;

				default:
					if ($link['Broken']) {
						$record->HasBrokenLink = true;
					}
					break;
			}
		}


		// Update the "LinkTracking" many_many
		if($record->ID && $record->manyManyComponent('LinkTracking') && $tracker = $record->LinkTracking()) {
			$tracker->removeByFilter(sprintf(
				'"FieldName" = \'%s\' AND "%s" = %d',
				$fieldName,
				$tracker->getForeignKey(),
				$record->ID
			));

			if($linkedPages) foreach($linkedPages as $item) {
				$tracker->add($item, array('FieldName' => $fieldName));
			}
		}


	}

	/**
	 * select all the files, HTML and Markdown and run the link tracking tests
	 */
	public function augmentSyncLinkTracking() {
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
		foreach($contentFields as $field) {
            $this->trackLinksInField($field);
        }
	}

} 