<?php

namespace MadeHQ\Cloudinary\Model;

use SilverStripe\Assets\File;
use Silverstripe\ORM\DataObject;

/**
 * This is a basic linking model for Files
 */
class FileLink extends DataObject
{
    /**
     * {@inheritdoc}
     */
    private static $singular_name = 'File Link';

    /**
     * {@inheritdoc}
     */
    private static $plural_name = 'File Links';

    private static $table_name = 'CloudinaryFileLink';

    /**
     * {@inheritdoc}
     */
    private static $has_one = [
        'File' => File::class,
    ];

    /**
     * {@inheritdoc}
     */
    private static $owns = [
        'File',
    ];

    public function __construct($record = null, $isSingleton = false, $queryParams = [])
    {
        parent::__construct($record, $isSingleton, $queryParams);
        $this->setFileToFailover();
    }

    /**
     * {@inheritdoc}
     * Returned FieldList will NOT be tabbed
     */
    public function getCMSFields()
    {
        // Bypassing `DataObject::getCMSFields()` as NOT wanting to have tabbed fields
        $fields = $this->scaffoldFormFields(array(
            'includeRelations' => true,
            'ajaxSafe' => true
        ));

        $this->extend('updateCMSFields', $fields);

        return $fields;
    }

    public function setFileToFailover()
    {
        if ($this->File()->exists()) {
            $this->setFailover($this->File());
        }
    }

    public function test()
    {
        var_dump(
            $this->getFailover()->options,
            $this->getFailover()->getOptions(),
            $this->getFailover()->forTemplate()
        );
    }
}