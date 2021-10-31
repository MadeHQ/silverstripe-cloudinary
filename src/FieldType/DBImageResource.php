<?php

namespace MadeHQ\Cloudinary\FieldType;

use SilverStripe\ORM\ArrayList;
use SilverStripe\View\ArrayData;
use Cloudinary\Transformation\Delivery;
use Cloudinary\Transformation\Format as TransformationFormat;
use MadeHQ\Cloudinary\Forms\ImageField;
use MadeHQ\Cloudinary\Traits\Crop;
use MadeHQ\Cloudinary\Traits\DPR;
use MadeHQ\Cloudinary\Traits\Fill;
use MadeHQ\Cloudinary\Traits\Fit;
use MadeHQ\Cloudinary\Traits\Flag;
use MadeHQ\Cloudinary\Traits\Format;
use MadeHQ\Cloudinary\Traits\Limit;
use MadeHQ\Cloudinary\Traits\LimitFill;
use MadeHQ\Cloudinary\Traits\MinimumFit;
use MadeHQ\Cloudinary\Traits\Quality;
use MadeHQ\Cloudinary\Traits\Scale;
use MadeHQ\Cloudinary\Traits\Thumb;

class DBImageResource extends DBSingleResource
{
    use Fill;
    use LimitFill;
    use Crop;
    use Thumb;
    use Scale;
    use Fit;
    use Limit;
    use MinimumFit;
    use Quality;
    use Format;
    use DPR;
    use Flag;

    /**
     * @config
     * @var string $default_format
     */
    private static $default_format = 'auto';

    /**
     * @config
     * @var string $default_quality
     */
    private static $default_quality = 'auto';

    /**
     * @config
     * @var array $casting
     */
    private static $casting = [
        'Credit' => 'Text',
        'CustomGravity' => 'Text',
        'ForegroundColour' => 'Text',
        'BackgroundColour' => 'Text',
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
     * @return string
     */
    public function getForegroundColour()
    {
        return $this->getJSONValue('foreground_colour');
    }

    /**
     * @return string
     */
    public function getBackgroundColour()
    {
        return $this->getJSONValue('background_colour');
    }

    /**
     * @return ArrayList
     */
    public function getTopColours()
    {
        $colours = $this->getJSONValue('top_colours');

        if (!$colours) {
            return null;
        }

        $return = ArrayList::create();

        foreach ($colours as $colour) {
            $return->push(ArrayData::create([
                'Colour' => $colour->colour,
                'Prominence' => $colour->prominence,
            ]));
        }

        return $return->sort('Prominence', 'desc');
    }

    /**
     * {@inheritdoc}
     */
    public function scaffoldFormField($title = null, $params = null)
    {
        return ImageField::create($this->name, $title);
    }

    /**
     * {@inheritdoc}
     */
    public function forTemplate()
    {
        $asset = $this->asset;

        $transformations = $asset->getTransformation()->toUrl();

        if (!preg_match('~(/|,)f_~', $transformations) && $format = static::config()->get('default_format')) {
            $asset->delivery(Delivery::format(TransformationFormat::$format()));
        }

        if (!preg_match('~(/|,)q_~', $transformations) && $quality = static::config()->get('default_quality')) {
            $asset->quality($quality);
        }

        $this->extend('onBeforeRender', $asset);

        return $asset->toUrl();
    }
}
