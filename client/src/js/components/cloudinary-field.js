/* global jQuery, cloudinary, CLOUDINARY_CONFIG */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { get, first, isObject, isArray, differenceBy, concat, last } from 'lodash';
import Image from 'components/image';

class CloudinaryField extends React.Component {
    library = null;
    lastResource = null;

    constructor(props) {
        super(props);

        const { value, isMultiple } = props;

        let files = value;

        try {
            files = JSON.parse(files);

            if (!isMultiple && isObject(files)) {
                files = [files];
            } else if (!isMultiple && isArray(files)) {
                files = files.slice(0, 1);
            }
        } catch (e) {
            files = [];
        }

        this.state = {
            loading: true,
            files: files,
        };

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
        this.updateProperty = this.updateProperty.bind(this);
        this.renderResources = this.renderResources.bind(this);
        this.removeFile = this.removeFile.bind(this);
        this.setupLibrary = this.setupLibrary.bind(this);

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
        const {
            isMultiple,
            maxFiles,
            cloudinaryType,
            transformations,
        } = this.props;

        const options = {
            multiple: !!isMultiple,
            max_files: maxFiles - this.state.files.length,
            folder: {
                resource_type: cloudinaryType,
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

        if (transformations) {
            options.default_transformations = [transformations];
        }

        this.library.show(options);
    }

    insertHandler(response) {
        this.setState({
            loading: true,
        });

        this.loadResources(response).then(resources => {
            let newFiles = differenceBy(resources, this.state.files, 'public_id');

            newFiles = concat(this.state.files, newFiles);

            this.lastResource = last(newFiles);

            this.setState({
                loading: false,
                files: newFiles,
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
        return {
            ...asset,
            ...resource,
        };
    }

    processAudio(asset, resource) {
        return {
            ...asset,
            ...resource,
        };
    }

    processImage(asset, resource) {
        const derived = get(asset, 'derived', null);

        let transformations = [];

        if (derived) {
            transformations = derived[0].raw_transformation.split(',');
        }

        transformations = transformations.filter(transformation => {
            return transformation.indexOf('w_') === -1 && transformation.indexOf('h_');
        });

        if (transformations.length) {
            transformations = transformations.join(',');
        } else {
            transformations = null;
        }

        return {
            transformations,
            ...resource,
        };
    }

    processRaw(asset, resource) {
        return {
            ...asset,
            ...resource,
        };
    }

    onChange(files) {
        files = this.props.isMultiple ? files : first(files);

        this.props.onChange(
            JSON.stringify(files)
        );
    }

    updateProperty(publicId, property, value) {
        const files = this.state.files.map(file => {
            if (file.public_id !== publicId) {
                return file;
            }

            file[property] = value;

            return file;
        });

        this.setState({
            files: files,
        });

        this.onChange(files);
    }

    removeFile(publicId) {
        const files = this.state.files.filter(file => {
            return file.public_id !== publicId;
        });

        this.setState({
            files: files,
        });

        this.onChange(files);
    }

    renderResources() {
        return this.state.files.map(file => {
            const { actual_type } = file;

            if (actual_type === 'video') {
                return console.log('@todo render video');
            }

            if (actual_type === 'audio') {
                return console.log('@todo render audio');
            }

            if (actual_type === 'image') {
                return <Image
                    { ...file }
                    key={ file.public_id }
                    onChange={ this.updateProperty }
                    onRemoveFile={ this.removeFile }
                />;
            }

            return console.log('@todo render raw');
        });
    }

    render() {
        let showButton;

        if (this.props.isMultiple) {
            showButton = this.state.files.length < this.props.maxFiles;
        } else {
            showButton = !this.state.files.length;
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

CloudinaryField.propTypes = {
    cloudinaryType: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    isMultiple: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    maxFiles: PropTypes.number,
    transformations: PropTypes.object,
    value: PropTypes.string,
}

export default CloudinaryField;
