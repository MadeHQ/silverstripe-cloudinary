'use strict';

/* global CLOUDINARY_CONFIG, cloudinary, tinymce */

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
            this.insertHandler = this.insertHandler.bind(this);
            this.linkHandler = this.linkHandler.bind(this);

            this.editor = editor;

            const insertText = editor.translate('Insert from Files'),
                editText = editor.translate('Edit image'),
                fileText = editor.translate('File');

            editor.addButton('ssmedia', {
                title: insertText,
                icon: 'image',
                cmd: 'ssmedia',
                stateSelector: stateSelector
            });
            editor.addMenuItem('ssmedia', {
                text: fileText,
                icon: 'image',
                cmd: 'ssmedia'
            });
            editor.addButton('ssmediaedit', {
                title: editText,
                icon: 'editimage',
                cmd: 'ssmedia'
            });

            editor.addCommand('ssmedia', () => {
                this.openCloudinaryBrowser(this.insertHandler);
            });

            editor.addCommand('sslinkfile', () => {
                this.openCloudinaryBrowser(this.linkHandler);
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
                remove_header: true,
            };

            const defaultTransformations = this.editor.getParam('default_transformations');

            if (defaultTransformations) {
                options.default_transformations = [defaultTransformations];
            }

            cloudinary.openMediaLibrary(options, {
                insertHandler,
            });
        },

        /**
         * Inserts the data into the editor
         *
         * @param {*} response
         */
        insertHandler(response) {
            const asset = response.assets[0];
            if (asset.resource_type !== 'image') {
                throw `Resource type of [${asset.resource_type}] is not supported`;
            }

            let secureUrl;
            if (asset.derived && asset.derived.length > 0) {
                secureUrl = asset.derived[0].secure_url;
            } else {
                secureUrl = asset.secure_url;
            }

            const img = `<img src="${secureUrl}" />`;
            this.editor.execCommand('mceInsertContent', false, img);
        },

        /**
         * Inserts the data into the editor as a link
         *
         * @param {*} response
         */
        linkHandler(response) {
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
