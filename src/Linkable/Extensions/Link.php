<?php

namespace MadeHQ\Cloudinary\Linkable\Extensions;

use SilverStripe\Forms\FieldList;
use SilverStripe\ORM\DataExtension;
use UncleCheese\DisplayLogic\Forms\Wrapper;

/**
 * @property Sheadawson\Linkable\Models\Link $owner
 */
class Link extends DataExtension
{
    private static $db = [
        'CloudinaryFile' => 'CloudinaryFile',
    ];

    /**
     * Replaces the "File" field with Cloudinary Field
     *
     * @param FieldList $fields
     */
    public function updateCMSFields(FieldList $fields)
    {
        $fields->removeByName('FileID');
        $fields->insertAfter(
            'Type',
            Wrapper::create(
                $this->owner->dbObject('CloudinaryFile')->scaffoldFormField('File')
            )
                ->displayIf('Type')
                ->isEqualTo('File')
                ->end()
        );
    }

    /**
     * Overrides the response if "File" type is selected
     *
     * @param mixed $linkURL
     */
    public function updateLinkURL(&$linkURL)
    {
        switch($this->owner->Type) {
            case 'File':
                $file = $this->owner->dbObject('CloudinaryFile');
                if ($file && $file->exists()) {
                    $linkURL = (string)$file;
                }
        }
    }
}
