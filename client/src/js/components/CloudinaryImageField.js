import React from 'react';
import CloudinaryField from './CloudinaryField';
import cloudinary from '../lib/cloudinary';

class CloudinaryImageField extends CloudinaryField {
    _getFieldLabel() {
        // return this.props.label + this._getPreviewTag();
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
        return this.renderTextField('Caption', 'Caption');
    }
    _renderCreditField() {
        return this.renderTextField('Credit', 'Credit');
    }
    _renderGravityField() {
        const name = 'Gravity';
        const label = 'Graviry';
        const holderId = 'Form_EditForm_' + this.props.name + '_' + name + '_Holder'; /* eslint prefer-template: "warn" */
        const fieldId = 'Form_EditForm_' + this.props.name + '_' + name; /* eslint prefer-template: "warn" */
        const fieldName = '[' + this.props.name + ']' + name; /* eslint prefer-template: "warn" */
        const labelId = 'title-Form_EditForm_' + this.props.name + '_' + name;

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
                value={this.state.value.Gravity}
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
