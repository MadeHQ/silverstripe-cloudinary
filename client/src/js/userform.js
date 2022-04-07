import jQuery from 'jquery';

jQuery.noConflict();

jQuery.entwine('ss', $ => {
    /**
     * Monitor new fields to intercept when our EditableFileField is selected
     */
    $(".uf-field-editor .ss-gridfield-items .dropdown.editable-column-field.form-group--no-label:not([data-folderconfirmed='1'])").entwine({
        onchange() {
            // ensure EditableFileField is selected
            if (this.get(0).value !== 'MadeHQ\\Cloudinary\\UserForms\\EditableFileField') {
                return;
            }

            // ensure there are no other EditableFileField confirmed
            if ($(".uf-field-editor .ss-gridfield-items .dropdown.editable-column-field.form-group--no-label[data-folderconfirmed='1']").length) {
                return;
            }

            // open folder confirmation dialog
            let dialog = $('#confirm-folder__dialog-wrapper');

            if (dialog.length) {
                dialog.remove();
            }

            dialog = $('<div id="confirm-folder__dialog-wrapper" />');
            const id = $(this).closest('tr').data('id');
            dialog.data('id', id);
            $('body').append(dialog);

            dialog.open();
        },
    });
});
