<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\ImageField;
use SilverStripe\ORM\ArrayList;
use SilverStripe\View\ArrayData;
use \BadFunctionCallException;

class DBImage extends DBBase
{
    /**
     * @config
     */
    private static $non_gravity_crops = ['fit', 'limit', 'mfit', 'pad', 'lpad'];

    protected $defaultTransformationsKey = 'default_image_transformations';

    private static $casting = array(
        'Caption' => 'Text',
        'Description' => 'Text',
        'Credit' => 'Text',
    );

    public function Size(int $width, int $height)
    {
        return $this->AddTransformations([
            'width' => $width,
            'height' => $height,
        ]);
    }

    public function Width(int $width)
    {
        return $this->AddTransformation('width', $width);
    }

    public function Height(int $height)
    {
        return $this->AddTransformation('height', $height);
    }

    public function ResizeByWidth(int $width, $crop = 'fit')
    {
        return $this
            ->RemoveTransformation('height')
            ->AddTransformation('width', $width)
            ->AddTransformation('crop', $crop);
    }

    public function ResizeByHeight(int $height, $crop = 'fit')
    {
        return $this
            ->RemoveTransformation('width')
            ->AddTransformation('height', $height)
            ->AddTransformation('crop', $crop);
    }

    public function Crop($crop = 'fill')
    {
        return $this->AddTransformation('crop', $crop);
    }

    public function Gravity($gravity = 'auto')
    {
        return $this->AddTransformation('gravity', $gravity);
    }

    public function FetchFormat($fetchFormat = 'auto')
    {
        return $this->AddTransformation('fetch_format', $fetchFormat);
    }

    public function Quality($quality = 'auto')
    {
        return $this->AddTransformation('quality', $quality);
    }

    public function Radius(...$args)
    {
        if (empty($args)) {
            throw new BadFunctionCallException('Please provide rounding value(s)');
        }

        if (count($args) > 1) {
            $radius = implode(':', $args);
        } else {
            $radius = reset($args);
        }

        if ($radius === '0' || $radius === 0) {
            return $this->RemoveTransformation('radius');
        }

        return $this->AddTransformation('radius', $radius);
    }

    public function Rotate(string $rotate)
    {
        return $this->AddTransformation('rotate', $rotate);
    }

    public function Credit()
    {
        return $this->getJSONValue('credit');
    }

    public function TopColours()
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

        return $return;
    }

    public function scaffoldFormField($title = null, $params = null)
    {
        return ImageField::create($this->name, $title);
    }
}
