<?php

namespace MadeHQ\Cloudinary\GraphQL;

use SilverStripe\AssetAdmin\GraphQL\FolderTypeCreator As BaseFolderTypeCreator;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\GraphQL\Pagination\Connection;

class FolderTypeCreator extends BaseFolderTypeCreator
{
    public function resolveChildrenConnection(
        $object,
        array $args,
        $context,
        ResolveInfo $info,
        Connection $childrenConnection
    ) {
        return $childrenConnection->resolveList(
            $object->Children(),
            $args
        );
    }
}
