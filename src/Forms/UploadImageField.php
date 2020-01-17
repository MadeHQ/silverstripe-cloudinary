<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\Core\Config\Config;
use SilverStripe\Forms\DropdownField;
use SilverStripe\Forms\TextField;

class UploadImageField extends UploadFileField
{
    /** @var boolean */
    private $multiUpload;

    /**
     * @var array
     * @config
     */
    private static $gravities = [
        'auto' => 'Auto',
        'center' => 'Center',
        'face' => 'Face',
        'face:auto' => 'Face (or auto)',
        'faces' => 'Faces',
        'faces:auto' => 'Faces (or auto)',
        'body:face' => 'Body or Face',
        'north' => 'Top',
        'north_east' => 'Top Right',
        'east' => 'Right',
        'south_east' => 'Bottom Right',
        'south' => 'Bottom',
        'south_west' => 'Bottom Left',
        'west' => 'Left',
        'north_west' => 'Top Left',
    ];

    /**
     * @var boolean
     * @config
     */
    private static $show_caption_credit = false;

    /**
     * {@inheritdoc}
     */
    public function __construct($name, $title = null, $value = null)
    {
        parent::__construct($name, $title, $value);

        $captionField = TextField::create(sprintf('%s[Caption]', $name), 'Caption');

        $creditField = TextField::create(sprintf('%s[Credit]', $name), 'Credit');

        $altField = TextField::create(sprintf('%s[Alt]', $name), 'Alt');

        $gravityField = DropdownField::create(sprintf('%s[Gravity]', $name))
            ->setTitle('Gravity')
            ->setSource(
                Config::inst()->get(static::class, 'gravities')
            );

        $this->addField($gravityField);

        if (Config::inst()->get(static::class, 'show_caption_credit')) {
            $this->addField($captionField);
            $this->addField($creditField);

            $this->removeField('Title');
        } else {
            $this->addField($altField);
        }

        $this->removeField('Description');
    }


    /**
     * Set upload type to multiple or single
     *
     * @param bool $bool True for multiple, false for single
     * @return $this
     */
    public function setIsMultiUpload($bool)
    {
        $this->multiUpload = $bool;
        return $this;
    }

}
