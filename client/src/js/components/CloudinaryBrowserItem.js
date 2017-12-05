import React from 'react';
import cloudinary from '../lib/cloudinary';

class CloudinaryBrowserItem extends React.Component {
    _getPreviewImage() {
        return cloudinary.getImageUrl(this.props.item.secure_url, 150, 150);
    }

    _getVideoPreview() {
        return cloudinary.getVideoPreview(this.props.item.secure_url, 150, 150, 'gif');
    }

    _renderVideoItem() {
        return (
          <div
            role="button"
            tabIndex="0"
            onClick={this.props.onClick}
          >
            <img src={this._getVideoPreview()} alt="" />
            <footer>
              <dl>
                <dt>Public ID</dt>
                <dd>{this.props.item.public_id}</dd>
                <dt>Created</dt>
                <dd>{this.props.item.created_at}</dd>
                <dt>Format</dt>
                <dd>{this.props.item.format}</dd>
              </dl>
            </footer>
          </div>
        );
    }

    _renderImageItem() {
        return (
          <div
            role="button"
            tabIndex="0"
            onClick={this.props.onClick}
          >
            <img src={this._getPreviewImage()} alt="" />
            <footer>
              <dl>
                <dt>Public ID</dt>
                <dd>{this.props.item.public_id}</dd>
                <dt>Created</dt>
                <dd>{this.props.item.created_at}</dd>
                <dt>Format</dt>
                <dd>{this.props.item.format}</dd>
              </dl>
            </footer>
          </div>
        );
    }
    _getHumanReadableSize() {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

        if (this.props.item.bytes === 0) {
            return '0 Byte';
        }
        const i = parseInt(Math.floor(Math.log(this.props.item.bytes) / Math.log(1024)), 10);
        const size = Math.round(this.props.item.bytes / (1024 ** i), 2);
        return `${size} ${sizes[i]}`;
    }
    _renderFileItem() {
        return (
          <div
            role="button"
            tabIndex="0"
            onClick={this.props.onClick}
          >
            <strong>{this.props.item.public_id}</strong>
            <dl>
              <dt>Created:</dt>
              <dd>{this.props.item.created_at}</dd>
              <dt>Size:</dt>
              <dd>{this._getHumanReadableSize()}</dd>
            </dl>
          </div>
        );
    }
    render() {
        let element;
        switch (this.props.type) {
            case 'image':
                element = this._renderImageItem();
                break;
            case 'audio':
                element = this._renderAudioItem();
                break;
            case 'video':
                element = this._renderVideoItem();
                break;
            default:
                element = this._renderFileItem();
        }
        return (
          <div className="cloudinary-browser-item">
            {element}
          </div>
        );
    }
}

CloudinaryBrowserItem.propTypes = {
    item: React.PropTypes.object,
    type: React.PropTypes.string,
    onClick: React.PropTypes.func,
};

export default CloudinaryBrowserItem;
