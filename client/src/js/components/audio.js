'use strict';

import Resource from './resource';
import cloudinaryUrl from '../utils/cloudinary-url';

export default class Audio extends Resource {
    thumbnailUrl() {
        const { public_id } = this.props;

        return cloudinaryUrl(public_id, {
            resource_type: 'video',
            width: 200,
            height: 200,
            crop: 'thumb',
            quality: 'auto',
            fetch_format: 'auto',
            'flags': 'waveform',
            'color': '#ecf0f1',
            'background': '#bdc3c7',
        });
    }
}
