
import CloudinaryToolbarFields from './CloudinaryToolbarFields';

import { connect } from 'react-redux';
import { compose } from 'redux';

const CloudinaryEnhancedGalleryToolbar = compose(
    connect(
        () => ({})
    ),
    CloudinaryToolbarFields
);

export default CloudinaryEnhancedGalleryToolbar;
