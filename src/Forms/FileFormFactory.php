<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\AssetAdmin\Forms\FileFormFactory As BaseFileFormFactory;
use SilverStripe\Forms\LiteralField;

class FileFormFactory extends BaseFileFormFactory
{
    /**
     * Removes the "Permissions" tab as it isn't needed for Cloudinary as everything is public
     * @inheritdoc
     */
    protected function getFormFieldTabs($record, $context = [])
    {
        $tabSet = parent::getFormFieldTabs($record, $context);
        $tabSet->removeByName([
            'Permissions'
        ]);
        return $tabSet;
    }
}
