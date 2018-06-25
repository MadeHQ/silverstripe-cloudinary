
import React from 'react';
import CloudinarySync, { CONSTANTS } from './CloudinarySync';

const CloudinaryToolbarFields = (GalleryToolbar) => (props) => {
    const newProps = {
        ...props,
    };

    function renderSyncButton() {
        return (<CloudinarySync
          key={CONSTANTS.SYNC_BUTTON_KEY}
          refreshPage={newProps.refreshPage}
        />);
    }

    newProps.children = newProps.children || [];
    newProps.children = newProps.children.filter(el => el.key !== CONSTANTS.SYNC_BUTTON_KEY);
    newProps.children.push(renderSyncButton());
    return (
      <GalleryToolbar {...newProps} />
    );
};

export default CloudinaryToolbarFields;
