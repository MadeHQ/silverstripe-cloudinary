<?php

namespace MadeHQ\Cloudinary\Forms;

class MediaField extends BaseField
{
    /**
     * @config
     * @var array $fallback_gravity_options
     */
    private static $fallback_gravity_options = [
        'auto' => 'Auto',
        'center' => 'Center',
        'east' => 'East',
        'north' => 'North',
        'north_east' => 'North East',
        'north_west' => 'North West',
        'south' => 'South',
        'south_east' => 'South East',
        'south_west' => 'South West',
        'west' => 'West',
    ];

    /**
     * @config
     * @var array $fallback_fields
     */
    private static $fallback_fields = [
        'title', 'description',
    ];

    /**
     * {@inheritdoc}
     */
    protected $resourceType = 'video';

    /**
     * {@inheritdoc}
     */
    protected $buttonLabelSingular = 'Choose Media';

    /**
     * {@inheritdoc}
     */
    protected $buttonLabelPlural = 'Choose Media';
}
