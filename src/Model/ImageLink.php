<?php

namespace MadeHQ\Cloudinary\Model;

use MadeHQ\Cloudinary\Model\Image;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\LiteralField;
use SilverStripe\Forms\TextField;

class ImageLink extends FileLink
{
    private static $db = [
        'Gravity' => 'Varchar(15)',
        'Alt' => 'Varchar(200)',
        'Caption' => 'Text',
        'Credit' => 'Text',
    ];

    /**
     * Has_one relationship
     * @var array
     */
    private static $has_one = [
        'File' => Image::class,
    ];

    /**
     * @inheritdoc
     */
    private static $summary_fields = [
        'File.Title' => 'Title',
        'SummaryPreview' => 'Preview',
    ];

    /**
     * @inheritdoc
     */
    private static $searchable_fields = [
        'Title',
        'File.Title',
    ];

    private static $table_name = 'CloudinaryImageLink';

    /**
     * {@inheritdoc}
     */
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName([
            'Title',
            'Description',
            'Gravity',
            'Alt',
            'File',
            'Caption',
            'Credit',
        ]);

        $fields->addFieldsToTab('Root.Main', [
            UploadField::create('File'),
            TextField::create('Caption'),
            TextField::create('Credit'),
        ]);

        return $fields;
    }

    public function getSummaryPreview()
    {
        return LiteralField::create('SummaryImage', sprintf('<img src="%s">', $this->Size(150, 150)));
    }

    public function getCredit()
    {
        return $this->dbObject('Credit')->value ?: $this->failover->Credit;
    }

    public function getCaption()
    {
        return $this->dbObject('Caption')->value ?: $this->failover->Caption;
    }

    public function getGravity()
    {
        return $this->dbObject('Gravity')->value;
    }

    public function getFocus()
    {
        return $this->dbObject('Gravity')->value;
    }
}
