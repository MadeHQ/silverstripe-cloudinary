import React, { Component } from 'react';
import { get, first, isObject, isArray, differenceBy, concat, last } from 'lodash';
import PropTypes from 'prop-types';

import Image from './image';
import Video from './video';
import File from './file';

export default class Field extends Component {
    constructor(props) {
        super(props);

        this.library = null;
        this.lastResource = null;

        const { value, isMultiple } = props;

        let resources = value;

        try {
            resources = JSON.parse(resources);

            if (!isMultiple && isObject(resources)) {
                resources = [resources];
            } else if (!isMultiple && isArray(resources)) {
                resources = resources.slice(0, 1);
            }
        } catch (e) {
            resources = [];
        }

        this.state = {
            loading: true,
            resources: resources,
        };

        this.setupLibrary = this.setupLibrary.bind(this);
        this.showLibrary = this.showLibrary.bind(this);
        this.insertHandler = this.insertHandler.bind(this);
        this.loadResources = this.loadResources.bind(this);
        this.loadResource = this.loadResource.bind(this);
        this.processResource = this.processResource.bind(this);
        this.processVideo = this.processVideo.bind(this);
        this.processAudio = this.processAudio.bind(this);
        this.processImage = this.processImage.bind(this);
        this.processRaw = this.processRaw.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onRemoveResource = this.onRemoveResource.bind(this);
        this.updateProperty = this.updateProperty.bind(this);
        this.renderResources = this.renderResources.bind(this);

        this.setupLibrary();
    }

    componentDidMount() {
        this.setState({
            loading: false,
        });
    }

    setupLibrary() {
        const options = {
            ...CLOUDINARY_CONFIG,
            button_label: this.props.buttonLabel,
        };

        this.library = cloudinary.createMediaLibrary(options, {
            insertHandler: this.insertHandler,
        });
    }

    showLibrary() {
        const { isMultiple, maxFiles, resourceType } = this.props;

        const options = {
            multiple: !!isMultiple,
            max_files: maxFiles - this.state.resources.length,
            folder: {
                resource_type: resourceType,
            },
        };

        if (this.lastResource) {
            let path = this.lastResource.public_id.split('/');

            if (path.length === 1) {
                path = '';
            } else {
                path = path.slice(0, -1).join('/');
            }

            options.folder.path = path;
        }

        this.library.show(options);
    }

    insertHandler(response) {
        this.setState({
            loading: true,
        });

        this.loadResources(response).then(resources => {
            let newFiles = differenceBy(resources, this.state.resources, 'public_id');

            newFiles = concat(this.state.resources, newFiles);

            this.lastResource = last(newFiles);

            this.setState({
                loading: false,
                resources: newFiles,
            });

            this.onChange(newFiles);
        });
    }

    loadResources(data) {
        return new Promise(resolve => {
            let assets = get(data, 'assets', []);

            if (!assets.length) {
                return resolve([]);
            }

            let requests = assets.map(asset => {
                return this.loadResource(asset.public_id, asset.resource_type);
            });

            Promise.all(requests).then(responses => {
                responses = responses.map(response => {
                    const asset = assets.find(item => {
                        return item.public_id === response.public_id;
                    });

                    return this.processResource(asset, response);
                });

                resolve(responses);
            });
        });
    }

    loadResource(publicId, resourceType) {
        return jQuery.get('cloudinary-api/resource', {
            public_id: publicId,
            resource_type: resourceType,
        });
    }

    processResource(asset, resource) {
        const { actual_type } = resource;

        if (actual_type === 'video') {
            return this.processVideo(asset, resource);
        }

        if (actual_type === 'audio') {
            return this.processAudio(asset, resource);
        }

        if (actual_type === 'image') {
            return this.processImage(asset, resource);
        }

        return this.processRaw(asset, resource);
    }

    processVideo(asset, resource) {
        const { bytes, format, derived } = asset;

        let transformations = null;

        if (derived) {
            transformations = derived[0].raw_transformation;
        }

        return {
            bytes,
            format,
            transformations,
            ...resource,
        };
    }

    processAudio(asset, resource) {
        const { bytes, format } = asset;

        return {
            bytes,
            format,
            ...resource,
        };
    }

    processImage(asset, resource) {
        const { bytes, format, derived } = asset;

        let transformations = null;

        if (derived) {
            transformations = derived[0].raw_transformation;
        }

        return {
            bytes,
            format,
            transformations,
            ...resource,
        };
    }

    processRaw(asset, resource) {
        const { bytes, format } = asset;

        if (format) {
            resource.format = format;
        }

        return {
            bytes,
            ...resource,
        };
    }

    onChange(resources) {
        resources = this.props.isMultiple ? resources : first(resources);

        this.props.onChange(
            JSON.stringify(resources)
        );
    }

    onRemoveResource(publicId) {
        const resources = this.state.resources.filter(resource => {
            return resource.public_id !== publicId;
        });

        this.setState({
            resources: resources,
        });

        this.onChange(resources);
    }

    updateProperty(publicId, property, value) {
        const resources = this.state.resources.map(resource => {
            if (resource.public_id !== publicId) {
                return resource;
            }

            resource[property] = value;

            return resource;
        });

        this.setState({
            resources: resources,
        });

        this.onChange(resources);
    }

    renderResources() {
        return this.state.resources.map(resource => {
            const { actual_type } = resource;

            if (actual_type === 'video') {
                return <Video
                    { ...resource }
                    key={ resource.public_id }
                    fields={ this.props.fields }
                    gravityOptions={ this.props.gravityOptions }
                    onChange={ this.updateProperty }
                    onRemoveResource={ this.onRemoveResource }
                />;
            }

            if (actual_type === 'audio') {
                return <Audio
                    { ...resource }
                    key={ resource.public_id }
                    fields={ this.props.fields }
                    onChange={ this.updateProperty }
                    onRemoveResource={ this.onRemoveResource }
                />;
            }

            if (actual_type === 'image') {
                return <Image
                    { ...resource }
                    key={ resource.public_id }
                    fields={ this.props.fields }
                    gravityOptions={ this.props.gravityOptions }
                    onChange={ this.updateProperty }
                    onRemoveResource={ this.onRemoveResource }
                />;
            }

            return <File
                { ...resource }
                key={ resource.public_id }
                fields={ this.props.fields }
                onChange={ this.updateProperty }
                onRemoveResource={ this.onRemoveResource }
            />;
        });
    }

    render() {
        let showButton;

        if (this.props.isMultiple) {
            showButton = this.state.resources.length < this.props.maxFiles;
        } else {
            showButton = !this.state.resources.length;
        }

        return (
            <div className="cloudinary-field__inner">
                { this.state.loading === true && (
                    <div className="cloudinary-field__loader">
                        <span className="sr-only">Loading…</span>
                    </div>
                ) }

                { showButton === true && (
                    <div className="cloudinary-field__insert">
                        <button type="button" className="btn btn-primary cloudinary-field__button" onClick={this.showLibrary}>
                            <span className="btn__title">{ this.props.buttonLabel }</span>
                        </button>
                    </div>
                ) }

                <div className="cloudinary-field__items">
                    { this.renderResources() }
                </div>
            </div>
        );
    }
}

Field.propTypes = {
    resourceType: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    isMultiple: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    maxFiles: PropTypes.number,
    fields: PropTypes.string,
    value: PropTypes.string,
}