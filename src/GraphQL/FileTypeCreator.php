<?php

namespace MadeHQ\Cloudinary\GraphQL;

use GraphQL\Type\Definition\Type;
use SilverStripe\AssetAdmin\GraphQL\FileTypeCreator As BaseFileTypeCreator;
use SilverStripe\AssetAdmin\Controller\AssetAdmin;
use SilverStripe\AssetAdmin\Forms\UploadField;
use MadeHQ\Cloudinary\Assets\AbstractFolder;

class FileTypeCreator extends BaseFileTypeCreator
{
    public function fields()
    {
        $fields = parent::fields();
        $fields['id']['type'] = Type::string();
        return $fields;
    }

    public function resolveSmallThumbnailField($object, array $args, $context, $info)
    {
        $width = UploadField::config()->uninherited('thumbnail_width');
        $height = UploadField::config()->uninherited('thumbnail_height');
        return cloudinary_url($object->ID, ['width' => $width, 'height' => $height, 'resource_type' => $object->getResourceType()]);
    }

    public function resolveThumbnailField($object, array $args, $context, $info)
    {
        $width = AssetAdmin::config()->uninherited('thumbnail_width');
        $height = AssetAdmin::config()->uninherited('thumbnail_height');
        return cloudinary_url($object->ID, ['width' => $width, 'height' => $height, 'resource_type' => $object->getResourceType()]);
    }

    public function resolveUrlField($object, array $args, $context, $info)
    {
        return $object->URL;
    }

    /**
     * @param File $object
     * @param array $args
     * @param array $context
     * @param ResolveInfo $info
     * @return string
     */
    public function resolveCategoryField($object, array $args, $context, $info)
    {
        return $object instanceof AbstractFolder ? 'folder' : $object->appCategory();
    }
}
