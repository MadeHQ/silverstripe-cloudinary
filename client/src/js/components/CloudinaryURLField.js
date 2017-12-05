/* global document */
import React from 'react';
import CloudinaryBrowser from './CloudinaryBrowser';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

class CloudinaryURLField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value ? props.value.secure_url : '' };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ value: nextProps.value ? nextProps.value.secure_url : '' });
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
        return this.props.name + '[URL]';
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
        const popup = this.getPopUp();
        const itemSelected = (...args) => this._itemSelected(...args);
        const closeBrowser = (...args) => this._closeBrowser(...args);

        ReactDOM.render(
          <CloudinaryBrowser
            onSelect={itemSelected}
            doCloseBrowser={closeBrowser}
            fieldType={this.props.fieldType}
          />,
          popup[0]
        );
    }
    _closeBrowser() {
        this.getPopUp().remove();
    }
    _itemSelected(item) {
        this.props.onChange(item.secure_url);
        this._closeBrowser();
    }
    _onChange(event) {
        this.setState({ value: event.currentTarget.value });
    }
    _onBlur() {
        this.props.onChange(this.state.value);
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
        const onChange = (...args) => this._onChange(...args);
        const onBlur = (...args) => this._onBlur(...args);

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
                value={this.state.value}
                onChange={onChange}
                onBlur={onBlur}
              />
              <button onClick={openBrowser}>Browse</button>
            </div>
            {this.renderRightTitle()}
          </div>
        );
    }
}

CloudinaryURLField.propTypes = {
    fieldType: React.PropTypes.string,
    name: React.PropTypes.string,
    rightTitle: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.object,
};

export default CloudinaryURLField;
