<?php

namespace MadeHQ\Cloudinary\GraphQL;

use SilverStripe\Core\Config\Config;

use SilverStripe\GraphQL\OperationResolver;
use SilverStripe\GraphQL\Pagination\Connection;
use SilverStripe\GraphQL\Pagination\PaginatedQueryCreator;

use SilverStripe\ORM\ArrayList;

use GraphQL\Type\Definition\UnionType;

use MadeHQ\Cloudinary\Assets;

class ReadFileQueryCreator extends PaginatedQueryCreator implements OperationResolver
{
    private static $max_results = 100;

    public function attributes()
    {
        return [
            'name' => 'readFiles'
        ];
    }

    public function createConnection()
    {
        return Connection::create('readFiles')
            ->setConnectionType(new UnionType([
                'name' => 'Result',
                'types' => [
                    $this->manager->getType('File'),
                    $this->manager->getType('Folder')
                ],
                'resolveType' => function ($object) {
                    if ($object instanceof Assets\Folder) {
                        return $this->manager->getType('Folder');
                    }
                    if ($object instanceof Assets\File) {
                        return $this->manager->getType('File');
                    }
                    return null;
                }
            ]))
            ->setArgs(function () {
                return [
                    'filter' => [
                        'type' => $this->manager->getType('FileFilterInput')
                    ]
                ];
            })
            ->setSortableFields(['prefix'])
            ->setDefaultLimit(50)
            ->setMaximumLimit(static::getMaxResults())
            ->setConnectionResolver(array($this, 'resolveConnection'));
    }

    public function resolveConnection($object, array $args, $context, $info)
    {
        $root = new Assets\RootFolder();
        if ($args['filter']['id'] == 0) {
            return new ArrayList([$root]);
        }
        return new ArrayList([$root->getFolder($args['filter']['id'])]);

    }

    /**
     * @return Int
     */
    private static function getMaxResults()
    {
        return Config::inst()->get(get_class(), 'max_results');
    }
}
