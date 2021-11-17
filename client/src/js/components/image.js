import Resource from './resource';
import url from '../utils/url';

export default class Image extends Resource {
    titleFieldLabel() {
        return 'Caption';
    }

    titleFieldPlaceholder() {
        return 'Provide a friendly caption…';
    }

    descriptionFieldPlaceholder() {
        return "Describe what's in the image for screen readers…";
    }

    thumbnailUrl() {
        const { public_id, top_colours } = this.props;

        let background = '#5589a7';

        if (top_colours && top_colours.length) {
            background = top_colours[0].colour;
        }

        return url(public_id, {
            resource_type: 'image',
            width: 200,
            height: 150,
            crop: 'pad',
            quality: 'auto',
            fetch_format: 'auto',
            background: background,
        });
    }
}
