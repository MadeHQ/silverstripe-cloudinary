/*! silverstripe-cloudinary - v2.0.0 */(()=>{"use strict";var r={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},d:(e,o)=>{for(var d in o)r.o(o,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:o[d]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},e=jQuery,e=r.n(e);e().noConflict(),e().entwine("ss",function(d){d(".uf-field-editor .ss-gridfield-items .dropdown.editable-column-field.form-group--no-label:not([data-folderconfirmed='1'])").entwine({onchange:function(){var e,o;"MadeHQ\\Cloudinary\\UserForms\\EditableFileField"!==this.get(0).value||d(".uf-field-editor .ss-gridfield-items .dropdown.editable-column-field.form-group--no-label[data-folderconfirmed='1']").length||((e=d("#confirm-folder__dialog-wrapper")).length&&e.remove(),e=d('<div id="confirm-folder__dialog-wrapper" />'),o=d(this).closest("tr").data("id"),e.data("id",o),d("body").append(e),e.open())}})})})();
//# sourceMappingURL=userform.js.map