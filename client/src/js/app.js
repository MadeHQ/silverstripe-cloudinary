import CloudinarySync, { CONSTANTS } from './components/CloudinarySync';
import Injector from 'lib/Injector';
import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

const CloudinaryToolbarFields = (GalleryToolbar) => (props) => {
    const newProps = {
        ...props,
    };

    function renderSyncButton() {
        return <CloudinarySync key={CONSTANTS.SYNC_BUTTON_KEY} />;
    }

    newProps.children = newProps.children || [];
    newProps.children = newProps.children.filter(el => el.key !== CONSTANTS.SYNC_BUTTON_KEY);
    newProps.children.push(renderSyncButton());
    return (
      <GalleryToolbar {...newProps} />
    );
};

const CloudinaryEnhancedGalleryToolbar = compose(
    connect(
        () => ({})
    ),
    CloudinaryToolbarFields
);

Injector.transform(
    'cloudinary-sync-button',
    (updater) => {
        updater.component('GalleryToolbar', CloudinaryEnhancedGalleryToolbar);
    }
);
