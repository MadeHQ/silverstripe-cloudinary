import React from 'react';
import fetch from 'isomorphic-fetch';
import CloudinaryBrowserItem from './CloudinaryBrowserItem';

class CloudinaryBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: { resources: [] } };
    }
    componentDidMount() {
        fetch(`/admin/cloudinary/api/${this.props.fieldType}-list`)
            .then((res) => { /* eslint arrow-body-style: "warn" */
                return res.json();
            })
            .then((data) => {
                this.setState({ data });
            })
            .catch(response => {
                throw new Error(`CloudinaryBrowser::componentDidMount: ${response}`);
            });
    }
    doSearch() {
        // console.log('CloudinaryBrowser::doSearch', this.searchValue);
        throw new Error('Cloudinary Search is not supported at the moment');
    }
    handleChangeSearch(e) {
        // console.log('CloudinaryBrowser::handleChangeSearch', this, e);
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
        function getElementClickHandler(data) {
            return function elementClickHandler() {
                that.props.onSelect(data);
            };
        }
        function renderElement(data) {
            return (
              <CloudinaryBrowserItem
                item={data}
                type={that.props.fieldType}
                onClick={getElementClickHandler(data)}
              />
            );
        }
        return (
          <div
            className={`cloudinary-browser-window cloudinary-browser-window-type-${that.props.fieldType}`}
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
