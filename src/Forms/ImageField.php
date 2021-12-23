<?php

namespace MadeHQ\Cloudinary\Forms;

class ImageField extends BaseField
{
    /**
     * @config
     * @var array $fallback_gravity_options
     */
    private static $fallback_gravity_options = [
        'auto' => 'Auto - sets automatic gravity',
        'center' => 'Center - The center of the image',
        'east' => 'East - middle east part (right)',
        'face' => 'Face - detects the largest face in the asset and makes it the focus of the transformation',
        'faces' => 'Faces - detects all the faces in the asset and makes them the focus of the transformation',
        'no_faces' => 'No Faces - gives priority to areas of the asset that do not contain faces',
        'face:auto' => 'Face (Auto) - same as face but fallback to auto if no face is detected',
        'faces:auto' => 'Faces (Auto) - same as faces but fallback to auto if no face is detected',
        'face:center' => 'Face (Center) - same as face but fallback to center if no face is detected',
        'faces:center' => 'Faces (center) - same as faces but fallback to center if no face is detected',
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
