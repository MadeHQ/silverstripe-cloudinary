window.tmpl.cache['ss-cloudinary-videofield-downloadtemplate'] = tmpl(
    '{% for (var i=0, files=o.files, l=files.length, file=files[0]; i<l; file=files[++i]) { %}' +
        '<li id="{%=file.field_id%}-holder" class="ss-uploadfield-item template-download{% if (file.error) { %} ui-state-error{% } %}" data-fileid="{%=file.id%}" data-imageurl="{%=file.colorselect_url%}">' +
            '{% if (file.thumbnail_url) { %}' +
                '<div class="ss-uploadfield-item-preview preview"><span>' +
                    '<img src="{%=file.thumbnail_url%}" alt="" />' +
                '</span></div>' +
            '{% } %}' +
            '<div class="ss-uploadfield-item-info">' +
                '{% if (!file.error) { %}' +
                    '<input type="hidden" class="field_id_value" name="{%=file.fieldname%}[Files][]" value="{%=file.id%}" />' +
                    '<input type="text" class="text video-attach-field" name="{%=file.fieldname%}__URL" value="{%=file.url%}" />' +
                '{% } %}' +
                '{% if (file.error) { %}' +
                    '<label class="ss-uploadfield-item-name">' +
                        '<div class="ss-uploadfield-item-status ui-state-error-text" title="{%=o.options.errorMessages[file.error] || file.error%}">{%=o.options.errorMessages[file.error] || file.error%}</div>' +
                    '<div class="clear"><!-- --></div>' +
                '{% } %}' +
                '</label>' +
                '{% if (file.error) { %}' +
                '<div class="ss-uploadfield-item-actions">' +
                    '<div class="ss-uploadfield-item-cancel ss-uploadfield-item-cancelfailed delete"><button class="icon icon-16" data-icon="delete" title="' + ss.i18n._t('UploadField.CANCELREMOVE', 'Cancel/Remove') + '">' + ss.i18n._t('UploadField.CANCELREMOVE', 'Cancel/Remove') + '</button></div>' +
                '</div>' +
                '{% } else { %}' +
                '<div class="ss-uploadfield-item-actions">{% print(file.buttons, true); %}</div>' +
                '{% } %}' +
            '</div>' +
        '</li>' +
    '{% } %}'
);
