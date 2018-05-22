
import React from 'react';

const CloudinaryPreviewImageField = (PreviewImageField) => (props) => {
    const newProps = {
        ...props,
    };
    newProps.readOnly = true;

    return (
      <PreviewImageField {...newProps} />
    );
};

export default CloudinaryPreviewImageField;
