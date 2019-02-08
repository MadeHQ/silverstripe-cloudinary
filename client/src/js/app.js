import CloudinaryPreviewImageField from './components/CloudinaryPreviewImageField';

import Injector from 'lib/Injector';

Injector.transform(
    'cloudinary-preview-image-field',
    updater => {
        updater.component('PreviewImageField', CloudinaryPreviewImageField);
    }
);
