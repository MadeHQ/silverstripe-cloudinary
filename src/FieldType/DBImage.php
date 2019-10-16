<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\ImageField;
use SilverStripe\ORM\ArrayList;
use SilverStripe\View\ArrayData;
use BadFunctionCallException;

class DBImage extends DBSingle
{
    /**
     * @config
     */
    private static $non_gravity_crops = ['fit', 'limit', 'mfit', 'pad', 'lpad'];

    protected $defaultTransformationsKey = 'default_image_transformations';

    public function Size(/* int */ $width, /* int */ $height)
    {
        if (!$width || !strlen($width)) {
            throw new BadFunctionCallException('Please provide a valid width value');
        }

        if (!$height || !strlen($height)) {
            throw new BadFunctionCallException('Please provide a valid height value');
        }

        return $this->AddTransformations([
            'width' => $width,
            'height' => $height,
        ]);
    }

    public function Width(/* int */ $width)
    {
        if (!$width || !strlen($width)) {
            throw new BadFunctionCallException('Please provide a valid width value');
        }

        return $this->AddTransformation('width', $width);
    }

    public function Height(/* int */ $height)
    {
        if (!$height || !strlen($height)) {
            throw new BadFunctionCallException('Please provide a valid height value');
        }

        return $this->AddTransformation('height', $height);
    }

    public function ResizeByWidth(/* int */ $width, $crop = 'scale')
    {
        if (!$width || !strlen($width)) {
            throw new BadFunctionCallException('Please provide a valid width value');
        }

        if (!$crop || !strlen($crop)) {
            throw new BadFunctionCallException('Please provide a valid crop value');
        }

        return $this
            ->RemoveTransformation('height')
            ->AddTransformation('width', $width)
            ->AddTransformation('crop', $crop);
    }

    public function ResizeByHeight(/* int */ $height, $crop = 'scale')
    {
        if (!$height || !strlen($height)) {
            throw new BadFunctionCallException('Please provide a valid height value');
        }

        if (!$crop || !strlen($crop)) {
            throw new BadFunctionCallException('Please provide a valid crop value');
        }

        return $this
            ->RemoveTransformation('width')
            ->AddTransformation('height', $height)
            ->AddTransformation('crop', $crop);
    }

    public function Crop($crop = 'scale')
    {
        if (!$crop || !strlen($crop)) {
            throw new BadFunctionCallException('Please provide a valid crop value');
        }

        return $this->AddTransformation('crop', $crop);
    }

    public function Gravity($gravity = 'auto')
    {
        if (!$gravity || !strlen($gravity)) {
            throw new BadFunctionCallException('Please provide a valid gravity value');
        }

        return $this->AddTransformation('gravity', $gravity);
    }

    public function FetchFormat($fetchFormat = 'auto')
    {
        if (!$fetchFormat || !strlen($fetchFormat)) {
            throw new BadFunctionCallException('Please provide a valid fetch format');
        }

        return $this->AddTransformation('fetch_format', $fetchFormat);
    }

    public function Quality($quality = 'auto')
    {
        if (!$quality || !strlen($quality)) {
            throw new BadFunctionCallException('Please provide a valid quality value');
        }

        return $this->AddTransformation('quality', $quality);
    }

    public function Radius(...$args)
    {
        if (empty($args)) {
            throw new BadFunctionCallException('Please provide valid rounding value(s)');
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

    public function Rotate(/* string */ $rotate)
    {
        if (!$rotate || !strlen($rotate)) {
            throw new BadFunctionCallException('Please provide a valid rotate value');
        }

        return $this->AddTransformation('rotate', $rotate);
    }

    public function Background($background)
    {
        if (!$background || !strlen($background)) {
            throw new BadFunctionCallException('Please provide a valid background value');
        }

        if (strtolower($background) === 'top' && $colour = $this->TopColours()->first()) {
            $background = 'rgb:' . strtolower(str_replace('#', '', $colour->Colour));
        } else if (strtolower($background) === 'bottom' && $colour = $this->TopColours()->last()) {
            $background = 'rgb:' . strtolower(str_replace('#', '', $colour->Colour));
        }

        return $this->AddTransformation('background', $background);
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

        return $return->sort('Prominence', 'desc');
    }

    protected function parseTransformations(array &$transformations)
    {
        $nonGravityCrops = static::config()->get('non_gravity_crops');

        foreach ($transformations as &$transformation) {
            $cropExists = array_key_exists('crop', $transformation);
            $gravityExists = array_key_exists('gravity', $transformation);

            if ($cropExists === false && $gravityExists === true) {
                unset($transformation['gravity']);
            }

            if ($cropExists === true && in_array($transformation['crop'], $nonGravityCrops) === true) {
                unset($transformation['gravity']);
            }
        }
    }

    public function scaffoldFormField($title = null, $params = null)
    {
        return ImageField::create($this->name, $title);
    }
}
