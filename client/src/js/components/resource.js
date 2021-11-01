import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { map, uniq } from 'lodash';
import url from '../utils/url';

export default class Resource extends Component {
    constructor(props) {
        super(props);

        const { name, title, description, credit, gravity, foreground_colour, background_colour } = props;

        this.state = {
            name, title, description, credit, gravity, foreground_colour, background_colour
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateCredit = this.updateCredit.bind(this);
        this.updateGravity = this.updateGravity.bind(this);
        this.updateFgColour = this.updateFgColour.bind(this);
        this.updateBgColour = this.updateBgColour.bind(this);
        this.removeResource = this.removeResource.bind(this);
        this.url = this.url.bind(this);
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

    updateGravity(event) {
        this.setState({
            gravity: event.target.value,
        });

        this.props.onChange(
            this.props.public_id, 'gravity', event.target.value
        );
    }

    updateFgColour(event) {
        this.setState({
            foreground_colour: event.target.value || null,
        });

        this.props.onChange(
            this.props.public_id, 'foreground_colour', event.target.value || null
        );
    }

    updateBgColour(event) {
        this.setState({
            background_colour: event.target.value || null,
        });

        this.props.onChange(
            this.props.public_id, 'background_colour', event.target.value || null
        );
    }

    removeResource() {
        this.props.onRemoveResource(
            this.props.public_id
        );
    }

    url() {
        const { public_id, resource_type } = this.props;

        return url(public_id, {
            resource_type,
        });
    }

    thumbnailUrl() {
        return null;
    }

    titleFieldLabel() {
        return 'Title';
    }

    titleFieldPlaceholder() {
        return this.state.title || this.state.name;
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

    gravityFieldLabel() {
        return 'Gravity';
    }

    fgColourFieldLabel() {
        return 'Foreground Colour';
    }

    bgColourFieldLabel() {
        return 'Background Colour';
    }

    fields() {
        let { fields } = this.props;

        fields = fields.split(',');

        return uniq(fields);
    }

    render() {
        const { name, title, description, credit, gravity, foreground_colour, background_colour } = this.state;
        const { public_id, resource_type, top_colours, gravityOptions } = this.props;

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

                        <a className="cloudinary-field__action cloudinary-field__action--link" title="View original" href={ this.url() } target="_blank" rel="noopener noreferrer">
                            <span className="sr-only">View original</span>
                        </a>
                    </div>
                </div>

                <div className="cloudinary-field__meta">
                    {this.fields().map(field => {
                        if (field === 'title') {
                            return (
                                <div className="cloudinary-field__field">
                                    <label htmlFor={ `${public_id}_title` } className="cloudinary-field__label">
                                        { this.titleFieldLabel() }
                                    </label>

                                    <div className="cloudinary-field__input">
                                        <textarea id={ `${public_id}_title` } className="textarea" rows="2" placeholder={ this.titleFieldPlaceholder() } value={ title || name } onChange={ this.updateTitle } />
                                    </div>
                                </div>
                            );
                        }

                        if (field === 'description') {
                            return (
                                <div className="cloudinary-field__field">
                                    <label htmlFor={ `${public_id}_description` } className="cloudinary-field__label">
                                        { this.descriptionFieldLabel() }
                                    </label>

                                    <div className="cloudinary-field__input">
                                        <textarea id={ `${public_id}_description` } className="textarea" rows="3" placeholder={ this.descriptionFieldPlaceholder() } value={ description } onChange={ this.updateDescription } />
                                    </div>
                                </div>
                            );
                        }

                        if (field === 'credit') {
                            return (
                                <div className="cloudinary-field__field">
                                    <label htmlFor={ `${public_id}_credit` } className="cloudinary-field__label">
                                        { this.creditFieldLabel() }
                                    </label>

                                    <div className="cloudinary-field__input">
                                        <input type="text" id={ `${public_id}_credit` } className="text" placeholder={ this.creditFieldPlaceholder() } value={ credit } onChange={ this.updateCredit } />
                                    </div>
                                </div>
                            );
                        }

                        if (field === 'gravity') {
                            return (
                                <div className="cloudinary-field__field">
                                    <label htmlFor={ `${public_id}_gravity` } className="cloudinary-field__label">
                                        { this.gravityFieldLabel() }
                                    </label>

                                    <div className="cloudinary-field__input">
                                        <select id={ `${public_id}_gravity` } className="select" onChange={ this.updateGravity }>
                                            {map(gravityOptions, (label, value) => (
                                                <option value={value} selected={value === gravity}>{label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            );
                        }

                        if (field === 'fg-colour' && resource_type === 'image' && top_colours && top_colours.length) {
                            return (
                                <div className="cloudinary-field__field">
                                    <label className="cloudinary-field__label">
                                        { this.fgColourFieldLabel() }
                                    </label>

                                    <div className="cloudinary-field__input">
                                        <div className="cloudinary-field__picker">
                                            <label className={classnames('cloudinary-field__colour', foreground_colour === null && 'cloudinary-field__colour--selected')}>
                                                <input type="radio" checked={ foreground_colour === null } value={ null } onChange={ this.updateFgColour } />
                                                <span>None</span>
                                            </label>

                                            {top_colours.map(({colour}, index) => {
                                                return (
                                                    <label key={index} className={classnames('cloudinary-field__colour', foreground_colour === colour && 'cloudinary-field__colour--selected')} style={{ backgroundColor: colour }}>
                                                        <input type="radio" checked={ foreground_colour === colour } value={ colour } onChange={ this.updateFgColour } />
                                                        <span>{ colour }</span>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        if (field === 'bg-colour' && resource_type === 'image' && top_colours && top_colours.length) {
                            return (
                                <div className="cloudinary-field__field">
                                    <label className="cloudinary-field__label">
                                        { this.bgColourFieldLabel() }
                                    </label>

                                    <div className="cloudinary-field__input">
                                        <div className="cloudinary-field__picker">
                                            <label className={classnames('cloudinary-field__colour', background_colour === null && 'cloudinary-field__colour--selected')}>
                                                <input type="radio" checked={ background_colour === null } value={ null } onChange={ this.updateBgColour } />
                                                <span>None</span>
                                            </label>

                                            {top_colours.map(({colour}, index) => {
                                                return (
                                                    <label key={index} className={classnames('cloudinary-field__colour', background_colour === colour && 'cloudinary-field__colour--selected')} style={{ backgroundColor: colour }}>
                                                        <input type="radio" checked={ background_colour === colour } value={ colour } onChange={ this.updateBgColour } />
                                                        <span>{ colour }</span>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return null;
                    })}
                </div>
            </div>
        );
    }
}

Resource.propTypes = {
    public_id: PropTypes.string.isRequired,
    resource_type: PropTypes.string.isRequired,
    top_colours: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    credit: PropTypes.string,
    gravity: PropTypes.string,
    foreground_colour: PropTypes.string,
    background_colour: PropTypes.string,
    fields: PropTypes.string.isRequired,
    gravityOptions: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemoveResource: PropTypes.func.isRequired,
}

Resource.defaultProps = {
    title: null,
    description: null,
    credit: null,
    gravity: null,
    foreground_colour: null,
    background_colour: null,
}
