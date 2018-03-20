import Injector from 'lib/Injector';
import React, { Component, PropTypes } from 'react';

const getCloudinaryEnhancedGalleryToolbar = (GalleryToolbar) => (props) => {
    // Add class to button so icon spins when clicked
    // Reload the feed after the fetch has finished
    console.warn('[getCloudinaryEnhancedGalleryToolbar::handleSyncWithCloudinary] Update to add class to button so icon spins and reload feed when sync has finished');
    const handleSyncWithCloudinary = () => {
        fetch('/cloudinary-api/sync');
    }

    const renderButton = () => {
        return (
          <button
            id="sync-with-cloudinary-button"
            className="btn btn-secondary font-icon-sync btn--icon-xl"
            type="button"
            onClick={handleSyncWithCloudinary}
          >
            <span className="btn__text btn__title">{i18n._t('Cloudinary.SYNC_WITH_CLOUDINARY', 'Sync with Cloudinary')}</span>
          </button>
        )
    }

    props.children = props.children || [];
    props.children.push(renderButton());

    return (
        <div>
            <GalleryToolbar {...props} />
        </div>
    );
};

Injector.transform(
    'cloudinary-sync-button',
    (updater) => {
        updater.component('GalleryToolbar', getCloudinaryEnhancedGalleryToolbar);
    }
);
