<?php

namespace MadeHQ\Cloudinary\Forms;

class MediaField extends BaseField
{
    /**
     * @config
     * @var array $fallback_gravity_options
     */
    private static $fallback_gravity_options = [
        'auto' => 'Auto - sets automatic gravity',
        'center' => 'Center - The center of the image',
        'east' => 'East - middle east part (right)',
        'north' => 'North - north center part (top center)',
        'north_east' => 'North - north east corner (top right)',
        'north_west' => 'North - north west corner (top left)',
        'south' => 'South - south center part (bottom center)',
        'south_east' => 'South - south east corner (bottom right)',
        'south_west' => 'South - south west corner (bottom left)',
        'west' => 'West - middle west part (left)',
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
