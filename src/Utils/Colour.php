<?php

namespace MadeHQ\Cloudinary\Utils;

use OzdemirBurak\Iris\Color\Factory;
use SilverStripe\View\ViewableData;

class Colour extends ViewableData
{
    /**
     * @var OzdemirBurak\Iris\BaseColor $colour
     */
    protected $colour;

    /**
     * @var float $predominance
     */
    protected $predominance;

    /**
     * @var array $casting
     */
    private static $casting = [
        'Hex' => Colour::class,
        'Hsl' => Colour::class,
        'Hsla' => Colour::class,
        'Hsv' => Colour::class,
        'Rgb' => Colour::class,
        'Rgba' => Colour::class,
    ];

    public function __construct($colour, $predominance = 100)
    {
        parent::__construct();

        $this->colour = Factory::init($colour);
        $this->predominance = $predominance;
    }

    /**
     * @return string
     */
    public function getColour()
    {
        return (string) $this->colour;
    }

    /**
     * @return float
     */
    public function getPredominance()
    {
        return $this->predominance;
    }

    /**
     * @return static
     */
    public function getHex()
    {
        return static::create((string) $this->colour->toHex());
    }

    /**
     * @return static
     */
    public function getHsl()
    {
        return static::create((string) $this->colour->toHsl());
    }

    /**
     * @return static
     */
    public function getHsla()
    {
        return static::create((string) $this->colour->toHsla());
    }

    /**
     * @return static
     */
    public function getHsv()
    {
        return static::create((string) $this->colour->toHsv());
    }

    /**
     * @return static
     */
    public function getRgb()
    {
        return static::create((string) $this->colour->toRgb());
    }

    /**
     * @return static
     */
    public function getRgba()
    {
        return static::create((string) $this->colour->toRgba());
    }

    /**
     * @param int $percent
     * @return static
     */
    public function Saturate($percent)
    {
        return static::create((string) $this->colour->saturate($percent));
    }

    /**
     * @param int $percent
     * @return static
     */
    public function Desaturate($percent)
    {
        return static::create((string) $this->colour->desaturate($percent));
    }

    /**
     * @return static
     */
    public function Grayscale()
    {
        return static::create((string) $this->colour->grayscale());
    }

    /**
     * @param int $percent
     * @return static
     */
    public function Brighten($percent)
    {
        return static::create((string) $this->colour->brighten($percent));
    }

    /**
     * @param int $percent
     * @return static
     */
    public function Lighten($percent)
    {
        return static::create((string) $this->colour->lighten($percent));
    }

    /**
     * @param int $percent
     * @return static
     */
    public function Darken($percent)
    {
        return static::create((string) $this->colour->darken($percent));
    }

    /**
     * @return boolean
     */
    public function IsLight()
    {
        return $this->colour->isLight();
    }

    /**
     * @return boolean
     */
    public function IsDark()
    {
        return $this->colour->isDark();
    }

    /**
     * @param int $percent
     * @return static
     */
    public function Spin($percent)
    {
        return static::create((string) $this->colour->spin($percent));
    }

    /**
     * @param int $percent
     * @return static
     */
    public function Tint($percent = 50)
    {
        return static::create((string) $this->colour->tint($percent));
    }

    /**
     * @param int $percent
     * @return static
     */
    public function Shade($percent = 50)
    {
        return static::create((string) $this->colour->shade($percent));
    }

    /**
     * @param int $percent
     * @return static
     */
    public function Fade($percent)
    {
        return static::create((string) $this->colour->fade($percent));
    }

    /**
     * @param int $percent
     * @return static
     */
    public function FadeIn($percent)
    {
        return static::create((string) $this->colour->fadeIn($percent));
    }

    /**
     * @param int $percent
     * @return static
     */
    public function FadeOut($percent)
    {
        return static::create((string) $this->colour->fadeOut($percent));
    }

    /**
     * @return string
     */
    public function forTemplate()
    {
        return (string) $this->colour;
    }
}
