'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cloudinaryUrl from 'cloudinary-url';

class Image extends React.Component {
    constructor(props) {
        super(props);

        const { caption, description, credit } = props;

        this.state = {
            caption,
            description,
            credit,
        };

        this.updateCaption = this.updateCaption.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateCredit = this.updateCredit.bind(this);
        this.removeFile = this.removeFile.bind(this);
    }

    updateCaption(event) {
        this.setState({
            caption: event.target.value,
        });

        this.props.onChange(
            this.props.public_id, 'caption', event.target.value
        );
    }

    updateDescription(event) {
        this.setState({
            description: event.target.value,
        });

        this.props.onChange(
            this.props.public_id, 'description', event.target.value
        );
    }

    updateCredit(event) {
        this.setState({
            credit: event.target.value,
        });

        this.props.onChange(
            this.props.public_id, 'credit', event.target.value
        );
    }

    removeFile() {
        this.props.onRemoveFile(
            this.props.public_id
        );
    }

    render() {
        const { caption, description, credit } = this.state;
        const { public_id, url } = this.props;

        const thumbnail = cloudinaryUrl(public_id, {
            width: 200,
            height: 200,
            crop: 'thumb',
            quality: 'auto',
            fetch_format: 'auto',
        });

        return (
            <div className="cloudinary-field__item cloudinary-field__item--image">
                <div className="cloudinary-field__media">
                    <img src={ thumbnail } className="cloudinary-field__preview" />

                    <div className="cloudinary-field__actions">
                        <button type="button" className="cloudinary-field__action cloudinary-field__action--remove" title="Remove image" onClick={ this.removeFile }>
                            <span className="sr-only">Remove</span>
                        </button>

                        <a className="cloudinary-field__action cloudinary-field__action--link" title="View original image" href={ url } target="_blank" rel="noopener noreferrer">
                            <span className="sr-only">View</span>
                        </a>
                    </div>
                </div>

                <div className="cloudinary-field__meta">
                    <div className="cloudinary-field__field">
                        <label htmlFor={ `${public_id}_caption` } className="cloudinary-field__label sr-only">Caption</label>

                        <div className="cloudinary-field__input">
                            <textarea id={ `${public_id}_caption` } className="textarea" rows="3" placeholder="Add a friendly caption…" value={ caption } onChange={ this.updateCaption } />
                        </div>
                    </div>

                    <div className="cloudinary-field__field">
                        <label htmlFor={ `${public_id}_description` } className="cloudinary-field__label sr-only">Description</label>

                        <div className="cloudinary-field__input">
                            <textarea id={ `${public_id}_description` } className="textarea" rows="2" placeholder="Describe what's in the image for screen readers…" value={ description } onChange={ this.updateDescription } />
                        </div>
                    </div>

                    <div className="cloudinary-field__field">
                        <label htmlFor={ `${public_id}_credit` } className="cloudinary-field__label sr-only">Credit</label>

                        <div className="cloudinary-field__input">
                            <input type="text" id={ `${public_id}_credit` } className="text" placeholder="Add copyright information…" value={ credit } onChange={ this.updateCredit } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Image.propTypes = {
    public_id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    transformations: PropTypes.array.isRequired,
    caption: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    credit: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemoveFile: PropTypes.func.isRequired,
}

export default Image;
