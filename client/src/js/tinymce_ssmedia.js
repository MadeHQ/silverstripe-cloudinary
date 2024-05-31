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

            const insertTitle = 'Insert from Files';
            const editTitle = 'Edit image';
            const deleteTitle = 'Delete image';
            const contextTitle = 'File';

            if ('addButton' in editor) {
                editor.addButton('ssmedia', {
                    title: insertTitle,
                    icon: 'image',
                    cmd: 'ssmedia',
                    stateSelector: stateSelector
                });

                editor.addMenuItem('ssmedia', {
                    text: contextTitle,
                    icon: 'image',
                    cmd: 'ssmedia'
                });

                editor.addButton('ssmediaedit', {
                    title: editTitle,
                    icon: 'editimage',
                    cmd: 'ssmedia'
                });
            } else if ('ui' in editor) {
                editor.ui.registry.addButton('ssmedia', {
                    tooltip: insertTitle,
                    icon: 'image',
                    onAction: () => editor.execCommand('ssmedia'),
                    stateSelector: stateSelector
                });

                editor.ui.registry.addMenuItem('ssmedia', {
                    text: contextTitle,
                    icon: 'image',
                    onAction: () => editor.execCommand('ssmedia'),
                });

                editor.ui.registry.addButton('ssmediaedit', {
                    tooltip: editTitle,
                    icon: 'edit-block',
                    onAction: () => editor.execCommand('ssmedia'),
                });

                editor.ui.registry.addButton('ssmediadelete', {
                    tooltip: deleteTitle,
                    icon: 'remove',
                    onAction: () => editor.execCommand('ssmedia-delete'),
                });
            }

            editor.addCommand('ssmedia', () => {
                this.openCloudinaryBrowser(this.insertHandler);
            });

            editor.addCommand('ssmedia-delete', () => {
                const node = editor.selection.getNode();

                if (editor.dom.is(node, filter)) {
                  node.remove();
                } else {
                  // eslint-disable-next-line no-console
                  console.error({ error: 'Unexpected selection - expected image', selectedNode: node });
                }
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
