<?php

namespace MadeHQ\Cloudinary\Model;

use SilverStripe\Forms\DropdownField;

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
        return $this->dbObject('Gravity')->setValue($value);
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
}