import React from 'react';
import CloudinaryURLField from './CloudinaryURLField';

class CloudinaryField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: {} };
    }

    setData(item) {
console.log('CloudinaryField::setData', item);
    }

    processSelected(selectedItem) {
console.log('CloudinaryField::processSelected', selectedItem);
    }

    render() {
        const mainLabelForAttrib = 'Form_EditForm_' + this.props.name + 'URL' + this.props.name + 'Title'; /* eslint prefer-template: "warn" */
        const mainLabelIdAttrib = 'title-Form_EditForm_' + this.props.name + 'URL' + this.props.name + 'Title'; /* eslint prefer-template: "warn" */

        return (
          <div
            field-type={this.props.type}
          >
            <label
              htmlFor={mainLabelForAttrib}
              id={mainLabelIdAttrib}
              className="form__field-label"
            >
              {this.props.label}
            </label>
            <div
              id="Form_EditForm_{this.props.name}URL{this.props.name}Title"
              aria-labelledby="title-Form_EditForm_{this.props.name}URL{this.props.name}Title"
              className="form__fieldgroup form__field-holder"
            >
              <CloudinaryURLField
                name={this.props.name}
                rightTitle={this.props.rightTitle}
                onChange={this.setData}
                value={this.state.value}
              />
              <div
                id="Form_EditForm_{this.props.name}_Title_Holder"
                className="form-group field text"
              >
                <label
                  htmlFor="Form_EditForm_{this.props.name}_Title"
                  id="title-Form_EditForm_{this.props.name}_Title"
                  className="form__field-label"
                >
                  Title
                </label>
                <div
                  className="form__field-holder"
                >
                  <input
                    type="text"
                    name="[{this.props.name}]Title"
                    className="text"
                    id="Form_EditForm_{this.props.name}_Title"
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

CloudinaryField.propTypes = {
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    rightTitle: React.PropTypes.string,
    type: React.PropTypes.string,
    // browseSelectionCallback: React.PropTypes.func,
};

export default CloudinaryField;
