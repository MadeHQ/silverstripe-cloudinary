import React from 'react';
import CloudinaryField from './CloudinaryField';

class CloudinaryFileField extends CloudinaryField {
    _renderTitleField() {
        return this.renderTextField('Title', 'Title', this.state.value.title);
    }

    renderOtherFields() {
        return (
          <div>
            {this._renderTitleField()}
          </div>
        );
    }
}

export default CloudinaryFileField;
