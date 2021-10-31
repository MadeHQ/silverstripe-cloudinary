<?php

namespace MadeHQ\Cloudinary\Forms;

class ImageField extends BaseField
{
    /**
     * @config
     * @var array $fallback_gravity_options
     */
    private static $fallback_gravity_options = [
        'auto' => 'Auto',
        'auto:face' => 'Auto (Face)',
        'auto:faces' => 'Auto (Faces)',
        'auto:no_faces' => 'Auto (No Faces)',
        'center' => 'Center',
        'east' => 'East',
        'face' => 'Face',
        'faces' => 'Faces',
        'face:auto' => 'Face (Auto)',
        'faces:auto' => 'Faces (Auto)',
        'face:center' => 'Face (Center)',
        'faces:center' => 'Faces (Center)',
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
        'title', 'description', 'credit',
    ];

    /**
     * {@inheritdoc}
     */
    protected $resourceType = 'image';

    /**
     * {@inheritdoc}
     */
    protected $buttonLabelSingular = 'Choose Image';

    /**
     * {@inheritdoc}
     */
    protected $buttonLabelPlural = 'Choose Images';
}
