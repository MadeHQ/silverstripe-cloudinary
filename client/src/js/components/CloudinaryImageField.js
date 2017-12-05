import React from 'react';
import CloudinaryField from './CloudinaryField';
import TextInputField from './TextInputField';
import cloudinary from '../lib/cloudinary';

class CloudinaryImageField extends CloudinaryField {
    _getFieldLabel() {
        if (!this.state.value || !this.state.value.secure_url) {
            return this.props.label;
        }

        return (
          <div>
            {this.props.label}
            <img
              alt="Preview Image" /* eslint jsx-a11y/img-redundant-alt: "warn" */
              src={cloudinary.getImageUrl(this.state.value.secure_url, 150, 150)}
              style={{ width: '100px', height: '100px' }}
            />
          </div>
        );
    }

    _renderCaptionField() {
        return (
          <TextInputField
            parentName={this.props.name}
            name="Caption"
            label="Caption"
            value={this.state.value.caption}
          />
        );
    }

    _renderCreditField() {
        return (
          <TextInputField
            parentName={this.props.name}
            name="Credit"
            label="Credit"
            value={this.state.value.credit}
          />
        );
    }

    _renderGravityField() {
        const name = 'Gravity';
        const label = 'Gravity';
        const holderId = `Form_EditForm_${this.props.name}_${name}_Holder`;
        const fieldId = `Form_EditForm_${this.props.name}_${name}`;
        const fieldName = `${this.props.name}[${name}]`;
        const labelId = `title-Form_EditForm_${this.props.name}_${name}`;

        return (
          <div id={holderId} className="form-group field text">
            <label htmlFor={fieldId} id={labelId} className="form__field-label">
              {label}
            </label>
            <div className="form__field-holder">
              <select
                name={fieldName}
                className="text"
                id={fieldId}
                value={this.state.value.gravity}
              >
                <option value="auto">Auto</option>
                <option value="center">Center</option>
                <option value="faces">Faces</option>
                <option value="north">Top</option>
                <option value="north_east">Top right</option>
                <option value="east">Right</option>
                <option value="south_east">Bottom right</option>
                <option value="south">Bottom</option>
                <option value="south_west">Bottom left</option>
                <option value="west">Left</option>
                <option value="north_west">Top left</option>
              </select>
            </div>
          </div>
        );
    }

    renderOtherFields() {
        return (
          <div>
            {this._renderCaptionField()}
            {this._renderCreditField()}
            {this._renderGravityField()}
          </div>
        );
    }
}

export default CloudinaryImageField;
