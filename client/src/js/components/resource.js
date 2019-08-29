'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class Resource extends React.Component {
    constructor(props) {
        super(props);

        const { name, title, description, credit } = props;

        this.state = {
            name, title, description, credit,
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateCredit = this.updateCredit.bind(this);
        this.removeResource = this.removeResource.bind(this);

        this.thumbnailUrl = this.thumbnailUrl.bind(this);
        this.titleFieldLabel = this.titleFieldLabel.bind(this);
        this.titleFieldPlaceholder = this.titleFieldPlaceholder.bind(this);
        this.descriptionFieldLabel = this.descriptionFieldLabel.bind(this);
        this.descriptionFieldPlaceholder = this.descriptionFieldPlaceholder.bind(this);
        this.creditFieldLabel = this.creditFieldLabel.bind(this);
        this.creditFieldPlaceholder = this.creditFieldPlaceholder.bind(this);
    }

    updateTitle(event) {
        this.setState({
            title: event.target.value,
        });

        this.props.onChange(
            this.props.public_id, 'title', event.target.value
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

    removeResource() {
        this.props.onRemoveResource(
            this.props.public_id
        );
    }

    thumbnailUrl() {
        return null;
    }

    titleFieldLabel() {
        return 'Title';
    }

    titleFieldPlaceholder() {
        return this.state.name;
    }

    descriptionFieldLabel() {
        return 'Description';
    }

    descriptionFieldPlaceholder() {
        return 'Optionally provide some additional information…';
    }

    creditFieldLabel() {
        return 'Credit';
    }

    creditFieldPlaceholder() {
        return 'Optionally provide copyright information…';
    }

    render() {
        const { title, description, credit } = this.state;
        const { public_id, url } = this.props;

        const thumbnail = this.thumbnailUrl();

        return (
            <div className="cloudinary-field__item cloudinary-field__item--file">
                <div className="cloudinary-field__media">
                    <div className="cloudinary-field__preview">
                        { thumbnail && <img src={ thumbnail } /> }
                    </div>

                    <div className="cloudinary-field__actions">
                        <button type="button" className="cloudinary-field__action cloudinary-field__action--remove" title="Remove" onClick={ this.removeResource }>
                            <span className="sr-only">Remove</span>
                        </button>

                        <a className="cloudinary-field__action cloudinary-field__action--link" title="View original" href={ url } target="_blank" rel="noopener noreferrer">
                            <span className="sr-only">View original</span>
                        </a>
                    </div>
                </div>

                <div className="cloudinary-field__meta">
                    <div className="cloudinary-field__field">
                        <label htmlFor={ `${public_id}_title` } className="cloudinary-field__label sr-only">{ this.titleFieldLabel() }</label>

                        <div className="cloudinary-field__input">
                            <textarea id={ `${public_id}_title` } className="textarea" rows="2" placeholder={ this.titleFieldPlaceholder() } value={ title } onChange={ this.updateTitle } />
                        </div>
                    </div>

                    <div className="cloudinary-field__field">
                        <label htmlFor={ `${public_id}_description` } className="cloudinary-field__label sr-only">{ this.descriptionFieldLabel() }</label>

                        <div className="cloudinary-field__input">
                            <textarea id={ `${public_id}_description` } className="textarea" rows="3" placeholder={ this.descriptionFieldPlaceholder() } value={ description } onChange={ this.updateDescription } />
                        </div>
                    </div>

                    <div className="cloudinary-field__field">
                        <label htmlFor={ `${public_id}_credit` } className="cloudinary-field__label sr-only">{ this.creditFieldLabel() }</label>

                        <div className="cloudinary-field__input">
                            <input type="text" id={ `${public_id}_credit` } className="text" placeholder={ this.creditFieldPlaceholder() } value={ credit } onChange={ this.updateCredit } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Resource.propTypes = {
    public_id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    credit: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemoveResource: PropTypes.func.isRequired,
}

export default Resource;
