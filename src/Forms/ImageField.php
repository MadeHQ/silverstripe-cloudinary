<?php

namespace MadeHQ\Cloudinary\Forms;

class ImageField extends BaseField
{
    /**
     * @config
     * @var array $fallback_gravity_options
     */
    private static $fallback_gravity_options = [
        '' => '',
        'auto' => 'Auto => Automatically identify the most interesting regions',
        'auto:face' => 'Auto (Face)',
        'auto:faces' => 'Auto (Faces)',
        'auto:no_faces' => 'Auto (No Faces) => Same as auto but avoids focusing on faces',
        'center' => 'Center => Sets focal point to center',
        'east' => 'East => Sets focal point to right',
        'face' => 'Face => Automatically detect the largest face in an image',
        'faces' => 'Faces => Same as face, but detects all the faces in an image',
        'face:auto' => 'Face (Auto) => Same as face, but defaults to auto if no face is detected',
        'faces:auto' => 'Faces (Auto) => Same as faces, but defaults to auto if no face is detected',
        'face:center' => 'Face (Center) => Same as face, but defaults to center if no face is detected',
        'faces:center' => 'Faces (Center) =>  Same as faces, but defaults to center if no face is detected',
        'north' => 'North => Sets focal point to top',
        'north_east' => 'North East => Sets focal point to top right',
        'north_west' => 'North West => Sets focal point to top left',
        'south' => 'South => Sets focal point to bottom',
        'south_east' => 'South East => Sets focal point to bottom right',
        'south_west' => 'South West => Sets focal point to bottom left',
        'west' => 'West => Sets focal point to left',
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
