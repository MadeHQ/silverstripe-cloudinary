import jQuery from 'jquery';
import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import Field from './components/field';

jQuery.noConflict();

jQuery.entwine('ss', $ => {
    $('textarea.cloudinary-input-field').entwine({
        HolderInstance: null,

        onmatch() {
            this._super();

            this.addClass('sr-only');

            this.HolderInstance = $('<div class="cloudinary-field"></div>');

            this.after(this.HolderInstance);

            const updateValue = value => {
                this.val(value);
                this.click();
            };

            render(
                <Field { ...this.data() } key={ this.attr('id') } value={ this.val() } onChange={ updateValue } />,
                this.HolderInstance.get(0)
            );
        },

        onunmatch() {
            this._super();

            this.removeClass('sr-only');

            if (!(this.HolderInstance instanceof jQuery)) {
                return;
            }

            unmountComponentAtNode(
                this.HolderInstance.get(0)
            );

            this.HolderInstance.remove();
        },
    });



console.log(
    $(".uf-field-editor .ss-gridfield-items .dropdown.editable-column-field.form-group--no-label:not([data-folderconfirmed='1'])").length,
    $(".uf-field-editor .ss-gridfield-items .dropdown.editable-column-field.form-group--no-label:not([data-folderconfirmed='1'])")
);
    /**
     * Monitor new fields to intercept when EditableFileField is selected
     */
    $(".uf-field-editor .ss-gridfield-items .dropdown.editable-column-field.form-group--no-label:not([data-folderconfirmed='1'])").entwine({
        onchange() {
console.log('change - 1', this);
console.log('change - 2', this.get(0).value);
            // ensure EditableFileField is selected
            if (this.get(0).value !== 'MadeHQ\\Cloudinary\\UserForms\\EditableFileField') {
console.log('change skip 1');
                return;
            }

            // ensure there are no other EditableFileField confirmed
            if ($(".uf-field-editor .ss-gridfield-items .dropdown.editable-column-field.form-group--no-label[data-folderconfirmed='1']").length) {
console.log('change skip 2');
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
