import CloudinaryEnhancedGalleryToolbar from './components/CloudinaryEnhancedGalleryToolbar';
import CloudinaryPreviewImageField from './components/CloudinaryPreviewImageField';

import Injector from 'lib/Injector';

Injector.transform(
    'cloudinary-sync-button',
    updater => {
        updater.component('GalleryToolbar', CloudinaryEnhancedGalleryToolbar);
    }
);

Injector.transform(
    'cloudinary-preview-image-field',
    updater => {
        updater.component('PreviewImageField', CloudinaryPreviewImageField);
    }
);
