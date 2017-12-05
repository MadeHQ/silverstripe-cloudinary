import React from 'react';
import TextInputField from './TextInputField';

class TimeInputField extends TextInputField {
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
            type: 'time',
            name: fieldName,
            className: 'time text',
            step: 1,
            id: fieldId,
            onChange: onFieldChange,
            value: this.state.value,
        };
console.log('TimeInputField::render', opts);
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

export default TimeInputField;
