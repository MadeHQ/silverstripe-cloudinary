<?php

namespace MadeHQ\Cloudinary\Forms;

class FileField extends BaseField
{
    /**
     * @config
     * @var array $fallback_fields
     */
    private static $fallback_fields = [
        'title',
    ];

    /**
     * {@inheritdoc}
     */
    protected $resourceType = 'raw';

    /**
     * {@inheritdoc}
     */
    protected $buttonLabelSingular = 'Choose File';

    /**
     * {@inheritdoc}
     */
    protected $buttonLabelPlural = 'Choose Files';
}
