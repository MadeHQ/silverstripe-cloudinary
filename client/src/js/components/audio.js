'use strict';

import Resource from './resource';
import url from '../utils/url';

export default class Audio extends Resource {
    thumbnailUrl() {
        const { public_id } = this.props;

        return url(public_id, {
            resource_type: 'video',
            width: 200,
            height: 150,
            crop: 'fit',
            quality: 'auto',
            fetch_format: 'auto',
            flags: 'waveform',
            color: '#5589a7',
            background: '#fafbfc',
        });
    }
}
