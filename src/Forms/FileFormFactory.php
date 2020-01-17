<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\AssetAdmin\Forms\FileFormFactory as BaseFileFormFactory;
use SilverStripe\Forms\LiteralField;

class FileFormFactory extends BaseFileFormFactory
{
    /**
     * Removes the "Permissions" tab as it isn't needed for Cloudinary as everything is public
     * Also replaces the Location field with a Readonly value as it's not editable in SS Admin
     * @inheritdoc
     */
    protected function getFormFieldTabs($record, $context = [])
    {
        $tabSet = parent::getFormFieldTabs($record, $context);
        $tabSet->removeByName([
            'Permissions',
        ]);
        $html = <<<HTML
<div id="Form_fileEditForm_ParentID_Holder" class="field text readonly form-group">
    <label for="Form_fileEditForm_ParentID" class="form__field-label control-label">%s</label>
    <div class="form__field-holder">
        <input type="text" name="ParentID" readonly="" id="Form_fileEditForm_ParentID" class=" text form-control" value="%s">
    </div>
</div>
HTML;
        $tabSet->replaceField('ParentID', LiteralField::create('ParentID', sprintf($html, _t(__CLASS__.'.FOLDERLOCATION', 'Location'), $record->Parent()->Title ?: '<root>')));

        $this->extend('updateFormFieldTabs', $tabSet, $record, $context);

        return $tabSet;
    }
}
