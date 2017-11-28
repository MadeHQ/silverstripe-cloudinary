import React from 'react';
import CloudinaryURLField from './CloudinaryURLField';
import fetch from 'isomorphic-fetch';

/**
 * This is a base class that other Cloudinary Classes extend from
 *   it has the functionality to browse cloudinary and render a basic
 *   URL field with Browse button
 *
 * Extended classes should implement `renderOtherFields()` for any
 *   other fields that are required
 */
class CloudinaryField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value };
    }

    _getFieldLabel() {
        return this.props.label;
    }

    _updateFromURL(url) {
        fetch('/admin/cloudinary/api/asset-details?url=' + encodeURIComponent(url))
            .then((res) => { /* eslint arrow-body-style: "warn" */
                return res.json();
            })
            .then((value) => {
                this.setState({ value });
            })
            .catch(response => {
console.log('CloudinaryField::_updateFromURL::errorResponse', url, response);
            });
    }

    renderTextField(name, label, value) {
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
              <input type="text" name={fieldName} className="text" id={fieldId} value={value} />
            </div>
          </div>
        );
    }

    renderOtherFields() {
        throw new Error('Need to implement "::renderOtherFields()"');
    }

    render() {
        const mainLabelForAttrib = 'Form_EditForm_' + this.props.name + 'URL' + this.props.name + 'Title'; /* eslint prefer-template: "warn" */
        const mainLabelIdAttrib = 'title-Form_EditForm_' + this.props.name + 'URL' + this.props.name + 'Title'; /* eslint prefer-template: "warn" */
        const updateFromURL = (...args) => this._updateFromURL(...args);
        const className = 'form-group field CompositeField cloudinary-field-type-' + this.props.fieldType;
        const fieldId = 'Form_EditForm_' + this.props.name + '_Holder'; /* eslint prefer-template: "warn" */
        const fieldValue = JSON.stringify({
            URL: this.state.value.secure_url
        });

        return (
          <div
            className={className}
            id={fieldId}
          >
            <input type="hidden" name={this.props.name} value={fieldValue} />
            <label
              htmlFor={mainLabelForAttrib}
              id={mainLabelIdAttrib}
              className="form__field-label"
            >
              {this._getFieldLabel()}
            </label>
            <div
              id="Form_EditForm_{this.props.name}URL{this.props.name}Title"
              aria-labelledby="title-Form_EditForm_{this.props.name}URL{this.props.name}Title"
              className="form__fieldgroup form__field-holder"
            >
              <CloudinaryURLField
                name={this.props.name}
                rightTitle={this.props.rightTitle}
                onChange={updateFromURL}
                value={this.state.value}
                fieldType={this.props.fieldType}
              />
              {this.renderOtherFields()}
            </div>
          </div>
        );
    }
}

CloudinaryField.propTypes = {
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    rightTitle: React.PropTypes.string,
    fieldType: React.PropTypes.string,
    value: React.PropTypes.string,
};

export default CloudinaryField;
