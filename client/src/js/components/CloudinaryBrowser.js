import React from 'react';
import fetch from 'isomorphic-fetch';
import CloudinaryBrowserItem from './CloudinaryBrowserItem';

class CloudinaryBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }
    componentDidMount() {
// fetch('/admin/cloudinary/api/get-' + this.props.type) /* eslint prefer-template: "warn" */
        fetch('/admin/cloudinary/api/listImages')
            .then((res) => { /* eslint arrow-body-style: "warn" */
                return res.json();
            })
            .then((data) => {
console.log(data);
                this.setState({ items: data.resources });
            })
            .catch(response => {
console.log('CloudinaryBrowser::componentDidMount::errorResponse', response);
            });
    }
    doSearch() {
console.log('CloudinaryBrowser::doSearch', this.searchValue);
console.error('Cloudinary Search is not supported at the moment');
        // this.setState({
        //     items: [
        //         { name: 'item 3' },
        //         { name: 'item 4' },
        //         { name: 'item 5' },
        //         { name: 'item 6' },
        //     ]
        // });
    }
    handleChangeSearch(e) {
console.log('CloudinaryBrowser::handleChangeSearch', this, e);
        this.searchValue = e.target.value;
    }
    renderHeader() {
        return (
          <div className="cloudinary-browser-header">Cloudinary</div>
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
console.log('CloudinaryBrowser::render', this);
console.log(this.items);
        const getElementClickHandler = function (data) {
            return function () {
console.log('BrowserItem Clicked - ', data, this, that);
                that.props.onSelect(data);
            };
        };
        const renderElement = function (data) {
            return (
              <CloudinaryBrowserItem
                item={data}
                type={that.props.type}
                onClick={getElementClickHandler(data)}
              />
            );
        };
        const getClasses = function() {
            return [
                'cloudinary-browser-window',
                'cloudinary-browser-window-type-' + that.props.type
            ];
        }
        return (
          <div
            className={getClasses().join(' ')}
          >
            {this.renderHeader()}
            {this.renderSearch()}
            <div className="cloudinary-browser-items">
              {this.state.items.map(renderElement)}
            </div>
          </div>
        );
    }
}

CloudinaryBrowser.propTypes = {
    onSelect: React.PropTypes.func, /* eslint react/no-unused-prop-types: "warn" */
    type: React.PropTypes.string,
    enableSearch: React.PropTypes.boolean,
};

export default CloudinaryBrowser;
