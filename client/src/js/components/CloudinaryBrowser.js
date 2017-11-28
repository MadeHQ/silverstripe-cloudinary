import React from 'react';
import fetch from 'isomorphic-fetch';
import CloudinaryBrowserItem from './CloudinaryBrowserItem';

class CloudinaryBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: { resources: [] } };
    }
    componentDidMount() {
        fetch('/admin/cloudinary/api/' + this.props.fieldType + '-list') /* eslint prefer-template: "warn" */
        // fetch('/admin/cloudinary/api/listImages')
            .then((res) => { /* eslint arrow-body-style: "warn" */
                return res.json();
            })
            .then((data) => {
console.log(data);
                this.setState({ data });
            })
            .catch(response => {
console.log('CloudinaryBrowser::componentDidMount::errorResponse', response);
            });
    }
    doSearch() {
console.log('CloudinaryBrowser::doSearch', this.searchValue);
console.error('Cloudinary Search is not supported at the moment');
    }
    handleChangeSearch(e) {
console.log('CloudinaryBrowser::handleChangeSearch', this, e);
        this.searchValue = e.target.value;
    }
    renderHeader() {
        return (
          <div className="cloudinary-browser-header">
            Cloudinary
            <button
              onClick={this.props.doCloseBrowser}
            >
              Close
            </button>
          </div>
        );
    }
    renderSearch() {
        if (!this.props.enableSearch) {
            return '';
        }
        return (
          <div className="cloudinary-browser-search">
            <input
              type="search"
              onChange={e => this.handleChangeSearch(e)}
            />
            <button
              onClick={e => this.doSearch(e)}
            >
              Search
            </button>
          </div>
        );
    }
    render() {
        const that = this;
        const getElementClickHandler = function (data) {
            return function () {
                that.props.onSelect(data);
            };
        };
        const renderElement = function (data) {
            return (
              <CloudinaryBrowserItem
                item={data}
                type={that.props.fieldType}
                onClick={getElementClickHandler(data)}
              />
            );
        };
        const getClasses = function () {
            return [
                'cloudinary-browser-window',
                'cloudinary-browser-window-type-' + that.props.fieldType
            ];
        };
        return (
          <div
            className={getClasses().join(' ')}
          >
            {this.renderHeader()}
            {this.renderSearch()}
            <div className="cloudinary-browser-items">
              {this.state.data.resources.map(renderElement)}
            </div>
          </div>
        );
    }
}

CloudinaryBrowser.propTypes = {
    onSelect: React.PropTypes.func, /* eslint react/no-unused-prop-types: "warn" */
    fieldType: React.PropTypes.string,
    enableSearch: React.PropTypes.bool,
    doCloseBrowser: React.PropTypes.func,
};

export default CloudinaryBrowser;
