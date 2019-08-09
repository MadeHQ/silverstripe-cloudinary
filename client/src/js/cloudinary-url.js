/* global CLOUDINARY_CONFIG */

'use strict';

import cloudinary from 'cloudinary-core';

export default function cloudinaryUrl(publicId, options = {}) {
    const instance = new cloudinary.Cloudinary({
        cloud_name: CLOUDINARY_CONFIG.cloud_name,
        secure: true,
    });

    return instance.url(publicId, options);
}

// <?php
// // VIDEO

// [
//     'large_thumbnail' => $this->generateLargeThumbnail($publicId, [
//         'resource_type' => $resourceType,
//         'format' => 'jpg',
//         'effect' => 'noise:5',
//     ]),
//     'medium_thumbnail' => $this->generateMediumThumbnail($publicId, [
//         'resource_type' => $resourceType,
//         'format' => 'jpg',
//         'effect' => 'noise:5',
//     ]),
//     'small_thumbnail' => $this->generateSmallThumbnail($publicId, [
//         'resource_type' => $resourceType,
//         'format' => 'jpg',
//         'effect' => 'noise:5',
//     ]),
//     'video_thumbnail' => $this->generateVideoThumbnail($publicId),
// ]

// // AUDIO

// [
//     'large_thumbnail' => $this->generateLargeThumbnail($publicId, [
//         'resource_type' => $resourceType,
//         'flags' => 'waveform',
//         'color' => '#44C8F5',
//         'background' => '#005B94',
//     ]),
//     'medium_thumbnail' => $this->generateMediumThumbnail($publicId, [
//         'resource_type' => $resourceType,
//         'flags' => 'waveform',
//         'color' => '#44C8F5',
//         'background' => '#005B94',
//     ]),
//     'small_thumbnail' => $this->generateSmallThumbnail($publicId, [
//         'resource_type' => $resourceType,
//         'flags' => 'waveform',
//         'color' => '#44C8F5',
//         'background' => '#005B94',
//     ]),
// ]

// // IMAGE

// [
//     'large_thumbnail' => $this->generateLargeThumbnail($publicId),
//     'medium_thumbnail' => $this->generateMediumThumbnail($publicId),
//     'small_thumbnail' => $this->generateSmallThumbnail($publicId),
// }

// protected function generateSmallThumbnail($publicId, $options = [])
// {
//     $defaults = [
//         'width' => 50,
//         'height' => 50,
//         'crop' => 'thumb',
//         'quality' => 'auto',
//         'fetch_format' => 'auto',
//     ];

//     $options = array_merge($defaults, $options);

//     return Cloudinary::cloudinary_url($publicId, $options);
// }

// protected function generateMediumThumbnail($publicId, $options = [])
// {
//     $defaults = [
//         'width' => 100,
//         'height' => 100,
//         'crop' => 'thumb',
//         'quality' => 'auto',
//         'fetch_format' => 'auto',
//     ];

//     $options = array_merge($defaults, $options);

//     return Cloudinary::cloudinary_url($publicId, $options);
// }

// protected function generateLargeThumbnail($publicId, $options = [])
// {
//     $defaults = [
//         'width' => 200,
//         'height' => 200,
//         'crop' => 'thumb',
//         'quality' => 'auto',
//         'fetch_format' => 'auto',
//     ];

//     $options = array_merge($defaults, $options);

//     return Cloudinary::cloudinary_url($publicId, $options);
// }

// protected function generateVideoThumbnail($publicId)
// {
//     $options = [
//         'resource_type' => 'video',
//         'quality' => 'auto',
//         'fetch_format' => 'auto',
//         'format' => 'jpg',
//     ];

//     return Cloudinary::cloudinary_url($publicId, $options);
// }
