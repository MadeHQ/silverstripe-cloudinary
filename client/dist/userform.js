/*! For license information please see userform.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
        n: o => {
            var r = o && o.__esModule ? () => o.default : () => o;
            return e.d(r, {
                a: r
            }), r;
        },
        d: (o, r) => {
            for (var d in r) e.o(r, d) && !e.o(o, d) && Object.defineProperty(o, d, {
                enumerable: !0,
                get: r[d]
            });
        },
        o: (e, o) => Object.prototype.hasOwnProperty.call(e, o)
    };
    const o = jQuery;
    var r = e.n(o);
    r().noConflict(), r().entwine("ss", (function(e) {
        e(".uf-field-editor .ss-gridfield-items .dropdown.editable-column-field.form-group--no-label:not([data-folderconfirmed='1'])").entwine({
            onchange: function() {
                if ("MadeHQ\\Cloudinary\\UserForms\\EditableFileField" === this.get(0).value && !e(".uf-field-editor .ss-gridfield-items .dropdown.editable-column-field.form-group--no-label[data-folderconfirmed='1']").length) {
                    var o = e("#confirm-folder__dialog-wrapper");
                    o.length && o.remove(), o = e('<div id="confirm-folder__dialog-wrapper" />');
                    var r = e(this).closest("tr").data("id");
                    o.data("id", r), e("body").append(o), o.open();
                }
            }
        });
    }));
})();
//# sourceMappingURL=userform.js.map