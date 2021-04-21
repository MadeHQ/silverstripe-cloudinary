<?php

namespace MadeHQ\Cloudinary\Model;

use BadMethodCallException;
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
        'Focus' => 'Varchar(50)',
    ];

    private static $has_one = [
        'File' => Image::class,
    ];

    private static $defaults = [
        'Focus' => 'auto',
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

        $fields->push(DropdownField::create('Focus', 'Focus', Image::config()->get('valid_gravities')));

        return $fields;
    }

    /**
     * Used to prevent errors when the base File is deleted
     *
     * @param string $method
     * @param array $arguments
     *
     * @return mixed
     */
    public function __call($method, $arguments)
    {
        try {
            return parent::__call($method, $arguments);
        } catch (BadMethodCallException $e) {
            return '';
        }
    }

    public function setFileToFailover()
    {
        if ($this->File()->exists()) {
            if ($this->Focus) {
                $this->setFailover($this->File()->setGravity($this->Focus));
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