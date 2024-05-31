<?php

namespace MadeHQ\Cloudinary\FieldType;

use SilverStripe\ORM\ArrayList;
use Cloudinary\Transformation\Delivery;
use Cloudinary\Transformation\Format as TransformationFormat;
use MadeHQ\Cloudinary\Forms\ImageField;
use MadeHQ\Cloudinary\Traits\Crop;
use MadeHQ\Cloudinary\Traits\DPR;
use MadeHQ\Cloudinary\Traits\Effect;
use MadeHQ\Cloudinary\Traits\Fill;
use MadeHQ\Cloudinary\Traits\Fit;
use MadeHQ\Cloudinary\Traits\Flag;
use MadeHQ\Cloudinary\Traits\Format;
use MadeHQ\Cloudinary\Traits\Limit;
use MadeHQ\Cloudinary\Traits\LimitFill;
use MadeHQ\Cloudinary\Traits\MinimumFit;
use MadeHQ\Cloudinary\Traits\Pad;
use MadeHQ\Cloudinary\Traits\Quality;
use MadeHQ\Cloudinary\Traits\Scale;
use MadeHQ\Cloudinary\Traits\Thumb;
use MadeHQ\Cloudinary\Utils\Colour;

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
    use Pad;
    use Effect;

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
        'ForegroundColour' => Colour::class,
        'BackgroundColour' => Colour::class,
        'Width' => 'Int',
        'Height' => 'Int',
        'IsPortrait' => 'Boolean',
        'IsLandscape' => 'Boolean',
        'IsSquare' => 'Boolean',
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
    public function getGravity()
    {
        return $this->getJSONValue('gravity');
    }

    /**
     * @return string
     */
    public function getForegroundColour()
    {
        $colour = $this->getJSONValue('foreground_colour');

        if (!$colour) {
            return null;
        }

        return Colour::create($colour);
    }

    /**
     * @return string
     */
    public function getBackgroundColour()
    {
        $colour = $this->getJSONValue('background_colour');

        if (!$colour) {
            return null;
        }

        return Colour::create($colour);
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
            $return->push(
                Colour::create($colour->colour, $colour->predominance)
            );
        }

        return $return->sort('Predominance', 'desc');
    }

    /**
     * @return int
     */
    public function getWidth()
    {
        return $this->getJSONValue('width');
    }

    /**
     * @return int
     */
    public function getHeight()
    {
        return $this->getJSONValue('height');
    }

    /**
     * @return boolean
     */
    public function getIsPortrait()
    {
        return $this->getHeight() > $this->getWidth();
    }

    /**
     * @return boolean
     */
    public function getIsLandscape()
    {
        return $this->getWidth() > $this->getHeight();
    }

    /**
     * @return boolean
     */
    public function getIsSquare()
    {
        return $this->getWidth() === $this->getHeight();
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

        return str_replace(',', '%2C', ($asset) ? $asset->toUrl() : '');
    }
}
