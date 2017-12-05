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
        if (!url.trim()) {
            this.setState({ value: false });
        } else {
            fetch(`/admin/cloudinary/api/asset-details?url=${encodeURIComponent(url)}`)
                .then((res) => { /* eslint arrow-body-style: "warn" */
                    return res.json();
                })
                .then((value) => {
                    this.setState({ value });
                })
                .catch(response => {
                    throw new Error(`CloudinaryField::_updateFromURL: ${response}`);
                });
        }
    }

    renderOtherFields() {
        throw new Error('Need to implement "::renderOtherFields()"');
    }

    render() {
        const mainLabelForAttrib = `Form_EditForm_${this.props.name}URL${this.props.name}Title`;
        const mainLabelIdAttrib = `title-Form_EditForm_${this.props.name}URL${this.props.name}Title`;
        const updateFromURL = (...args) => this._updateFromURL(...args);
        const className = `form-group field CompositeField cloudinary-field-type-${this.props.fieldType}`;
        const fieldId = `Form_EditForm_${this.props.name}_Holder`;

        return (
          <div
            className={className}
            id={fieldId}
          >
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
              {this.state.value && this.state.value.secure_url ? this.renderOtherFields() : ''}
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
