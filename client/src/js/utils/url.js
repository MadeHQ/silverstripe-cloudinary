/* global CLOUDINARY_CONFIG */

'use strict';

import cloudinary from 'cloudinary-core';

export default function url(publicId, options = {}) {
    const instance = new cloudinary.Cloudinary({
        cloud_name: CLOUDINARY_CONFIG.cloud_name,
        secure: true,
    });

    return instance.url(publicId, options);
}
