import jQuery from 'jquery';
import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import Field from './components/field';

jQuery.noConflict();

jQuery.entwine('ss', $ => {
    $('[data-resource-type]').entwine({
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
});
