'use strict';

import Resource from './resource';
import cloudinaryUrl from '../utils/cloudinary-url';

export default class Video extends Resource {
    thumbnailUrl() {
        const { public_id } = this.props;

        return cloudinaryUrl(public_id, {
            resource_type: 'video',
            width: 200,
            height: 200,
            crop: 'fill',
            quality: 'auto',
            fetch_format: 'gif',
            audio_codec: 'none',
            video_sampling: 5,
            effect: 'loop',
        });
    }
}
