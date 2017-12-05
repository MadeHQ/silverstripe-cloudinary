import React from 'react';

class TextInputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName: props.parentName,
            name: props.name,
            label: props.label,
            value: props.value,
        };
    }

    _onFieldChange(event) {
        this.setState({ value: event.currentTarget.value });
    }

    render() {
        const holderId = `Form_EditForm_${this.state.parentName}_${this.state.name}_Holder`;
        const fieldId = `Form_EditForm_${this.state.parentName}_${this.state.name}`;
        const fieldName = `${this.state.parentName}[${this.state.name}]`;
        const labelId = `title-Form_EditForm_${this.state.parentName}_${this.state.name}`;
        const onFieldChange = (...args) => this._onFieldChange(...args);

        const opts = {
            type: 'text',
            name: fieldName,
            className: 'text',
            id: fieldId,
            onChange: onFieldChange,
            value: this.state.value,
        };

        return (
          <div id={holderId} className="form-group field text">
            <label htmlFor={fieldId} id={labelId} className="form__field-label">
              {this.state.label}
            </label>
            <div className="form__field-holder">
              <input
                {...opts}
              />
            </div>
          </div>
        );
    }
}

TextInputField.propTypes = {
    parentName: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
};

export default TextInputField;
