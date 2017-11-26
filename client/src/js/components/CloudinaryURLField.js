/* global document */
import React from 'react';
import CloudinaryBrowser from './CloudinaryBrowser';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

class CloudinaryURLField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value };
    }
    getHolderId() {
        return 'Form_EditForm_' + this.props.name + '_URL_Holder';
    }
    getInputId() {
        return 'Form_EditForm_' + this.props.name + '_URL';
    }
    getLabelId() {
        return 'title-Form_EditForm_' + this.props.name + '_URL';
    }
    getInputName() {
        return '[' + this.props.name + ']URL';
    }
    getPopUp() {
        let popup = jQuery('#cloudinary-popup-wrapper');
        if (!popup.length) {
            popup = jQuery('<div id="cloudinary-popup-wrapper" />');
            jQuery(document.body).append(popup);
        }
        return popup;
    }
    _openBrowser() {
// console.log('CloudinaryURLField::openBrowser', document.body, this);
        const popup = this.getPopUp();
        const itemSelected = (...args) => this._itemSelected(...args);
        ReactDOM.render(
          <CloudinaryBrowser
            onSelect={itemSelected}
          />,
          popup[0]
        );
    }
    _itemSelected(item) {
console.log('CloudinaryURLField::itemSelected', item, this);
        this.setState({
            value: item
        });
        this.getPopUp().remove();
    }
    renderRightTitle() {
        return this.props.rightTitle ?
          '<p class="form__field-extra-label" id="extra-label-Form_EditForm_' + /* eslint prefer-template: "warn" */
            this.props.name + /* eslint prefer-template: "warn" */
            '_URL">' + /* eslint prefer-template: "warn" */
            this.props.rightTitle + /* eslint prefer-template: "warn" */
            '</p>' : '';
    }
    render() {
        const openBrowser = (...args) => this._openBrowser(...args);

        return (
          <div
            id={this.getHolderId()}
            className="form-group field text"
          >
            <label
              htmlFor={this.getInputId()}
              id={this.getLabelId()}
              className="form__field-label"
            >
              URL
            </label>
            <div className="form__field-holder">
              <input
                type="url"
                name={this.getInputName()}
                className="text"
                id={this.getInputId()}
                value={this.state.value ? this.state.value.secure_url : ''}
                onChange={this.props.onChange}
              />
              <button onClick={openBrowser}>Browse</button>
            </div>
            {this.renderRightTitle()}
          </div>
        );
    }
}

CloudinaryURLField.propTypes = {
    name: React.PropTypes.string,
    rightTitle: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.object,
};

export default CloudinaryURLField;
