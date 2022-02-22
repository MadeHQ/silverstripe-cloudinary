'use strict';
(() => {
    const stateSelector = 'img[data-shortcode="image"]';
    const ssmedia = {
        editor: null,
        init(editor) {
            this.openCloudinaryBrowser = this.openCloudinaryBrowser.bind(this);
            this.insertHandler = this.insertHandler.bind(this);

            this.editor = editor;

            const insertText = editor.translate("AssetAdmin.INSERT_FROM_FILES", "Insert from Files"),
                editText = editor.translate("AssetAdmin.EDIT_IMAGE", "Edit image"),
                fileText = editor.translate("AssetAdmin.FILE", "File");

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

            editor.addCommand('ssmedia', this.openCloudinaryBrowser);
        },

        openCloudinaryBrowser() {
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
                    insertHandler: this.insertHandler,
                });
        },

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
        }
    };
    tinymce.PluginManager.add('ssmedia', function (editor) {
        ssmedia.init(editor);
    });
})();
