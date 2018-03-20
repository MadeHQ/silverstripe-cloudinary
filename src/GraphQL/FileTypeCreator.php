<?php

// namespace MadeHQ\Cloudinary\GraphQL;
//
// use  SilverStripe\AssetAdmin\GraphQL\FileTypeCreator As BaseFileTypeCreator;
//
// class FileTypeCreator extends BaseFileTypeCreator
// {
//     /**
//      * @param File $object
//      * @param array $args
//      * @param array $context
//      * @param ResolveInfo $info
//      * @return string|null
//      */
//     public function resolveSmallThumbnailField($object, array $args, $context, $info)
//     {
// var_dump(__METHOD__, $this->getThumbnailGenerator(), func_get_args());die;
//         // Make small thumbnail
//         $width = UploadField::config()->uninherited('thumbnail_width');
//         $height = UploadField::config()->uninherited('thumbnail_height');
//         return $object->Thumbnail($width, $height);
//         return $this->getThumbnailGenerator()->generateThumbnailLink($object, $width, $height);
//     }
//
//     /**
//      * @param File $object
//      * @param array $args
//      * @param array $context
//      * @param ResolveInfo $info
//      * @return string|null
//      */
//     public function resolveThumbnailField($object, array $args, $context, $info)
//     {
// var_dump(__METHOD__, func_get_args());die;
//         // Make large thumbnail
//         $width = AssetAdmin::config()->uninherited('thumbnail_width');
//         $height = AssetAdmin::config()->uninherited('thumbnail_height');
//         return $object->Thumbnail($width, $height);
//         return $this->getThumbnailGenerator()->generateThumbnailLink($object, $width, $height);
//     }
// }
