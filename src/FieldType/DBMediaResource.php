<?php

namespace MadeHQ\Cloudinary\FieldType;

use SilverStripe\ORM\FieldType\DBTime;
use MadeHQ\Cloudinary\Forms\MediaField;
use MadeHQ\Cloudinary\Traits\AudioCodec;
use MadeHQ\Cloudinary\Traits\AudioFrequency;
use MadeHQ\Cloudinary\Traits\BitRate;
use MadeHQ\Cloudinary\Traits\Crop;
use MadeHQ\Cloudinary\Traits\Fill;
use MadeHQ\Cloudinary\Traits\Fit;
use MadeHQ\Cloudinary\Traits\Flag;
use MadeHQ\Cloudinary\Traits\Format;
use MadeHQ\Cloudinary\Traits\Limit;
use MadeHQ\Cloudinary\Traits\Quality;
use MadeHQ\Cloudinary\Traits\Scale;
use MadeHQ\Cloudinary\Traits\VideoCodec;
use MadeHQ\Cloudinary\Traits\VideoSampling;

class DBMediaResource extends DBSingleResource
{
    use Scale;
    use Fit;
    use Fill;
    use Limit;
    use Crop;
    use Quality;
    use Format;
    use Flag;
    use VideoCodec;
    use BitRate;
    use VideoSampling;
    use AudioCodec;
    use AudioFrequency;

    /**
     * @config
     * @var array $casting
     */
    private static $casting = [
        'Credit' => 'Text',
        'CustomGravity' => 'Text',
    ];

    /**
     * @return string
     */
    public function getCredit()
    {
        return $this->getJSONValue('credit');
    }

    /**
     * @return string
     */
    public function getCustomGravity()
    {
        return $this->getJSONValue('gravity');
    }

    /**
     * @return DBTime
     */
    public function getDuration()
    {
        $duration = $this->getJSONValue('duration');

        $hours = floor($duration / 3600);
        $minutes = floor(($duration - $hours * 3600) / 60);
        $seconds = floor(fmod($duration, 60));

        $duration = sprintf('%02d:%02d:%02d', $hours, $minutes, $seconds);

        return DBTime::create()->setValue($duration);
    }

    /**
     * {@inheritdoc}
     */
    public function scaffoldFormField($title = null, $params = null)
    {
        return MediaField::create($this->name, $title);
    }
}
