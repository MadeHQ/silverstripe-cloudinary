import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import CloudinaryField from './components/CloudinaryField';
// import CloudinaryBrowser from './components/CloudinaryBrowser';

jQuery.entwine('ss', ($) => {
    // let currentField;
    // let dialog;
    // function browseCallback(type, field) {
    //     currentField = field;
    //     dialog = $('#madehq-cloudinary-browser-wrapper');
    //
    //     if (!dialog.length) {
    //         dialog = $('<div id="madehq-cloudinary-browser-wrapper" />');
    //         $('body').append(dialog);
    //     }
    //     dialog.data('fieldType', type);
    //     dialog.open();
    //     return false;
    // }

    $('.madehq-cloudinary-forms-file').entwine({
        onmatch() {
            console.info('Add Cloudinary Field', this);
            const data = this.data();
            ReactDOM.render(
              <CloudinaryField
                name={data.name}
                type={data.type}
                label={data.label}
                value={data.value}
                // browseSelectionCallback={browseCallback}
              />,
              this[0]
            );
        }
    });

    // $('#madehq-cloudinary-browser-wrapper').entwine({
    //     onmatch() {
    //         const testFn = (selectedItem) => {
    //             currentField.processSelected(selectedItem);
    //             dialog.remove();
    //         };
    //         console.info('Browser open');
    //         ReactDOM.render(
    //           <CloudinaryBrowser
    //             setItemData={testFn}
    //             type={this.data('fileType')}
    //           />,
    //           this[0]
    //         );
    //         this.dialog();
    //     }
    // });
});
