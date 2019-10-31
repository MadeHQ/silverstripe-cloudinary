<?php

namespace MadeHQ\Cloudinary\Model;

use SilverStripe\Forms\DropdownField;
use SilverStripe\Forms\LiteralField;

class ImageLink extends FileLink
{
    /**
     * {@inheritdoc}
     */
    private static $singular_name = 'Image Link';

    /**
     * {@inheritdoc}
     */
    private static $plural_name = 'Image Links';

    private static $table_name = 'CloudinaryImageLink';

    /**
     * {@inheritdoc}
     */
    private static $db = [
        'Gravity' => 'Varchar(50)',
    ];

    private static $has_one = [
        'File' => Image::class,
    ];

    private static $defaults = [
        'Gravity' => 'auto',
    ];

    private static $summary_fields = [
        'File.Title' => 'Title',
        'SummaryPreview' => 'Preview',
    ];

    /**
     * {@inheritdoc}
     */
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->push(DropdownField::create('Gravity', 'Gravity', Image::config()->get('valid_gravities')));

        return $fields;
    }

    public function getGravity()
    {
        return $this->dbObject('Gravity')->getValue();
    }

    public function setGravity($value)
    {
        $this->record['Gravity'] = $value;
        $this->dbObject('Gravity')->setValue($value);
        return $this;
    }

    public function setFileToFailover()
    {
        if ($this->File()->exists()) {
            if ($this->Gravity) {
                $this->setFailover($this->File()->setGravity($this->Gravity));
            } else {
                $this->setFailover($this->File());
            }
        }
    }

    /**
     * @return Mixed
     */
    public function getSummaryPreview()
    {
        return $this->File()->exists() ?
            LiteralField::create('SummaryPreview', sprintf('<img style="max-width: 200px; max-height: 200px;" src="%s" />', $this->File()->PreviewLink())) :
            '';
    }
}