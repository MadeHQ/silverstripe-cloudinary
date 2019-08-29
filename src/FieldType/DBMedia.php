<?php

namespace MadeHQ\Cloudinary\FieldType;

use MadeHQ\Cloudinary\Forms\MediaField;
use SilverStripe\ORM\FieldType\DBTime;

class DBMedia extends DBSingle
{
    protected $defaultTransformationsKey = 'default_media_transformations';

    public function Size(/* int */ $width, /* int */ $height)
    {
        return $this->AddTransformations([
            'width' => $width,
            'height' => $height,
        ]);
    }

    public function Width(/* int */ $width)
    {
        return $this->AddTransformation('width', $width);
    }

    public function Height(/* int */ $height)
    {
        return $this->AddTransformation('height', $height);
    }

    public function ResizeByWidth(/* int */ $width, $crop = 'scale')
    {
        return $this
            ->RemoveTransformation('height')
            ->AddTransformation('width', $width)
            ->AddTransformation('crop', $crop);
    }

    public function ResizeByHeight(/* int */ $height, $crop = 'scale')
    {
        return $this
            ->RemoveTransformation('width')
            ->AddTransformation('height', $height)
            ->AddTransformation('crop', $crop);
    }

    public function Crop($crop = 'scale')
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

    public function VideoCodec($codec = 'auto')
    {
        return $this->AddTransformation('video_codec', $codec);
    }

    public function BitRate(/* string */ $rate)
    {
        return $this->AddTransformation('bit_rate', $rate);
    }

    public function VideoSampling(/* string */ $sampling)
    {
        return $this->AddTransformation('video_sampling', $sampling);
    }

    public function AudioCodec($codec = 'auto')
    {
        return $this->AddTransformation('audio_codec', $codec);
    }

    public function AudioFrequency($frequency)
    {
        return $this->AddTransformation('audio_frequency', $frequency);
    }

    public function RotationAngle($degrees)
    {
        return $this->AddTransformation('angle', $degrees);
    }

    public function KeyframeInterval($interval)
    {
        return $this->AddTransformation('keyframe_interval', $interval);
    }

    public function scaffoldFormField($title = null, $params = null)
    {
        return MediaField::create($this->name, $title);
    }

    public function Duration()
    {
        $duration = $this->getJSONValue('duration');

        var_dump($duration);

        $hours = floor($duration / 3600);
        $minutes = floor(($duration - $hours * 3600) / 60);
        $seconds = floor(fmod($duration, 60));

        $duration = sprintf('%02d:%02d:%02d', $hours, $minutes, $seconds);

        return DBTime::create()->setValue($duration);
    }
}
