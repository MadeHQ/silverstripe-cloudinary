/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import CloudinaryField from './CloudinaryField';
import TextInputField from './TextInputField';
import TimeInputField from './TimeInputField';
import cloudinary from '../lib/cloudinary';

class CloudinaryVideoField extends CloudinaryField {
    _getFieldLabel() {
        if (!this.state.value || !this.state.value.secure_url) {
            return this.props.label;
        }

        return (
          <div>
            {this.props.label}
            <img
              alt="Preview Image" /* eslint jsx-a11y/img-redundant-alt: "warn" */
              src={cloudinary.getVideoPreview(this.state.value.secure_url, 150, 150, 'gif')}
              style={{ width: '100px', height: '100px' }}
            />
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

    _renderDurationField() {
        return (
          <TimeInputField
            parentName={this.props.name}
            name="Duration"
            label="Duration"
            value={this.state.value.duration}
          />
        );
    }

    // Formats the duration to be supported by time field
    setState(data) {
        if (data.value) {
            const duration = new Date(null);
            duration.setSeconds(data.value.duration);
            data.value.duration = [
                duration.getHours().toString().padLeft(2, '0'),
                duration.getMinutes().toString().padLeft(2, '0'),
                duration.getSeconds().toString().padLeft(2, '0'),
            ].join(':');
        }
        super.setState(data);
    }

    renderOtherFields() {
        return (
          <div>
            {this._renderTitleField()}
            {this._renderDurationField()}
          </div>
        );
    }
}

export default CloudinaryVideoField;
