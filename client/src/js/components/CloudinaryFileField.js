import React from 'react';
import CloudinaryField from './CloudinaryField';
import TextInputField from './TextInputField';

class CloudinaryFileField extends CloudinaryField {
    _renderTitleField() {
        return (
          <TextInputField
            parentName={this.props.name}
            name="Title"
            label="Title"
            value={this.state.value.title}
          />
        );
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
