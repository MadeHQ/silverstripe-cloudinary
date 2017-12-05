<?php

namespace MadeHQ\Cloudinary\Model;

use MadeHQ\Cloudinary\Forms\File As FileField;
use SilverStripe\ORM\DataObject;

class File extends DataObject
{
    private static $db = [
        'URL' => 'Varchar(255)',
        'Title' => 'Varchar',
    ];

    private static $table_name = 'CloudinaryFile';

    public function scaffoldFormField($title = null, $params = null)
    {
        return FileField::create($this->name, $title);
    }

    /**
     * Gets data from the URL using RegEx
     * This means that the site can change cloudname and the old resources will still work
     * @return Array()
     */
    private function getURLParts()
    {
        if (preg_match('/^https?:\/\/[\w\.]+\/([\w\-]+)\/(\w+)\/upload\/(\w+)\/([\w\%\/]+)\.(\w+)$/', $this->URL, $matches)) {
            return [
                'cloud_name' => $matches[1],
                'resource_type' => $matches[2],
                'version' => $matches[3],
                'public_name' => $matches[4],
                'format' => $matches[5],
            ];
        }
        return [
            'cloud_name' => false,
            'resource_type' => false,
            'version' => false,
            'public_name' => false,
            'format' => false,
        ];
    }

    public function getPublicName()
    {
        return $this->getURLParts()['public_name'];
    }

    public function getCloudName()
    {
        return $this->getURLParts()['cloud_name'];
    }

    public function getFormat()
    {
        return $this->getURLParts()['format'];
    }
}
