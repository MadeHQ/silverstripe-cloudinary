'use strict';

import Resource from './resource';
import url from '../utils/url';

export default class Video extends Resource {
    thumbnailUrl() {
        const { public_id } = this.props;

        return url(public_id, {
            resource_type: 'video',
            width: 200,
            height: 200,
            crop: 'fill',
            quality: 'auto',
            format: 'gif',
            audio_codec: 'none',
            video_sampling: 10,
            effect: 'loop',
        });
    }
}
