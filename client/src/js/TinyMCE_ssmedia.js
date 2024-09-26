'use strict';

/* global CLOUDINARY_CONFIG, cloudinary, tinymce */
import { transformationStringFromObject, Cloudinary } from "@cloudinary/url-gen";

(() => {
    const stateSelector = 'img[data-shortcode="image"]';
    const ssmedia = {

        /**
         * @var editor
         */
        editor: null,

        /**
         * Initialise the plugin
         *
         * @param {*} editor
         */
        init(editor) {
            this.openCloudinaryBrowser = this.openCloudinaryBrowser.bind(this);
            this.insertImageHandler = this.insertImageHandler.bind(this);
            this.insertLinkHandler = this.insertLinkHandler.bind(this);

            this.editor = editor;

            const insertText = editor.translate('Insert from Files'),
                editText = editor.translate('Edit image'),
                fileText = editor.translate('File');

            editor.ui.registry.addButton('ssmedia', {
                title: insertText,
                icon: 'image',
                cmd: 'ssmedia',
                onAction: () => editor.execCommand('ssmedia'),
                stateSelector: stateSelector
            });
            editor.ui.registry.addMenuItem('ssmedia', {
                text: fileText,
                icon: 'image',
                cmd: 'ssmedia'
            });
            editor.ui.registry.addButton('ssmediaedit', {
                title: editText,
                icon: 'editimage',
                cmd: 'ssmedia'
            });

            editor.addCommand('ssmedia', () => {
                this.openCloudinaryBrowser(this.insertImageHandler);
            });

            editor.addCommand('sslinkfile', () => {
                this.openCloudinaryBrowser(this.insertLinkHandler);
            });
        },

        /**
         * @callback cloudinaryInsertHandler
         * @param {*} response
         */

        /**
         * Opens Cloudinary Media Library modal and assigns the `insertHandler` callback to insert the image into editor
         *
         * @param {cloudinaryInsertHandler} insertHandler
         */
        openCloudinaryBrowser(insertHandler) {
            // See https://cloudinary.com/documentation/media_library_widget#3_set_the_configuration_options
            const options = {
                ...CLOUDINARY_CONFIG,
                multiple: false,
            };

            // Safari is the devil. Force users to login manually.
            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
                delete options.username;
                delete options.timestamp;
                delete options.signature;
            }

            cloudinary.openMediaLibrary(options, {
                insertHandler,
            });
        },

        cloudinaryInstance() {
            return new Cloudinary({
                cloud: {
                    cloudName: CLOUDINARY_CONFIG.cloud_name,
                }
            });
        },

        /**
         * Inserts the data into the editor
         *
         * @param {*} response
         */
        insertImageHandler(response) {
            const asset = response.assets[0];
console.log('insertImageHandler', asset);
            if (asset.resource_type !== 'image') {
                throw `Resource type of [${asset.resource_type}] is not supported`;
            }

            const image = this.cloudinaryInstance().image(asset.public_id);
            const defaultTransformations = this.editor.getParam('default_transformations');

            if (defaultTransformations) {
                const transformationString = transformationStringFromObject(defaultTransformations);
                image.addTransformation(transformationString);
            }

            // Copied same logic from `API::extractDescription()`
            const defaultAltText = asset.context && asset.context.custom && asset.context.custom.alt ? asset.context.custom.alt : '';
            // Copied same logic from `API::extractTitle()`
            const defaultTitle = asset.context && asset.context.custom && asset.context.custom.alt ? asset.context.custom.caption : '';

            const altText = prompt('Description', defaultAltText);
            const titleText = prompt('Title', defaultTitle);
            const img = document.createElement('img');
            img.src = image.toURL();

            if (altText) {
                img.alt = altText;
            }
            if (titleText) {
                img.title = titleText;
            }

            this.editor.execCommand('mceInsertContent', false, img.outerHTML);
        },

        /**
         * Inserts the data into the editor as a link
         *
         * @param {*} response
         */
        insertLinkHandler(response) {
            const asset = response.assets[0];

            let secureUrl;

            if (asset.derived && asset.derived.length > 0) {
                secureUrl = asset.derived[0].secure_url;
            } else {
                secureUrl = asset.secure_url;
            }

            let linkText = this.editor.selection.getContent({format: 'html'});

            if (linkText.trim().length <= 0) {
                linkText = prompt('Link text');
            }

            let defaultDescription;

            if (
                asset.context &&
                asset.context.custom &&
                asset.context.custom.alt
            ) {
                defaultDescription = asset.context.custom.alt;
            }

            const description = prompt('Description', defaultDescription);
            const titleAttribute = description ? `title="${description}"` : '';

            const link = `<a href="${secureUrl}" ${titleAttribute}>${linkText}</a>`;
            this.editor.execCommand('mceInsertContent', false, link);
        },
    };
    tinymce.PluginManager.add('ssmedia', function (editor) {
        ssmedia.init(editor);
    });
})();
