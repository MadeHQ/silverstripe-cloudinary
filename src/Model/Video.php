<?php

namespace MadeHQ\Cloudinary\Model;

class Video extends Image
{
    /**
     * Defines the database table name
     * @var string
     */
    private static $table_name = 'CloudinaryVideo';

    /**
     * These are basically defaults
     * @var array
     */
    protected $options = [
        'secure' => true,
        'resource_type' => 'video',
        'transformation' => [
            [
                'quality' => 'auto',
            ],
        ],
    ];

    /**
     * @inheritdoc
     */
    public function Link()
    {
        return $this->forTemplate();
    }

    /**
     * @inheritdoc
     */
    public function PreviewLink($action = null)
    {
        $originalFormat = $this->Format;
        $this->Format = 'gif';
        $url = parent::PreviewLink($action);
        $this->Format = $originalFormat;
        return $url;
    }
}
