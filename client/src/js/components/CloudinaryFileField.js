import React from 'react';
import CloudinaryField from './CloudinaryField';
import TextInputField from './TextInputField';

class CloudinaryFileField extends CloudinaryField {
    _getFieldLabel() {
        if (!this.state.value || !this.state.value.secure_url) {
            return this.props.label;
        }
        const fileFormat = this.state.value.secure_url.match(/\.(\w+)$/)[1];
        const previewProps = {
            className: `file-type-${fileFormat}`,
        };

        return (
          <div>
            {this.props.label}
            <div {...previewProps} />
          </div>
        );
    }
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
