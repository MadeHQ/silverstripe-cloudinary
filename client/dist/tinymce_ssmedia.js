/*! For license information please see tinymce_ssmedia.js.LICENSE.txt */
(() => {
    "use strict";
    function _typeof(e) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, _typeof(e);
    }
    function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), r.push.apply(r, n);
        }
        return r;
    }
    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ownKeys(Object(r), !0).forEach((function(t) {
                _defineProperty(e, t, r[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            }));
        }
        return e;
    }
    function _defineProperty(e, t, r) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" != _typeof(e) || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" != _typeof(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            }(e, "string");
            return "symbol" == _typeof(t) ? t : t + "";
        }(t)) in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e;
    }
    var e, t;
    e = 'img[data-shortcode="image"]', t = {
        editor: null,
        init: function(t) {
            var r = this;
            this.openCloudinaryBrowser = this.openCloudinaryBrowser.bind(this), this.insertHandler = this.insertHandler.bind(this), 
            this.linkHandler = this.linkHandler.bind(this), this.editor = t;
            var n = "Insert from Files", o = "Edit image", i = "File";
            "addButton" in t ? (t.addButton("ssmedia", {
                title: n,
                icon: "image",
                cmd: "ssmedia",
                stateSelector: e
            }), t.addMenuItem("ssmedia", {
                text: i,
                icon: "image",
                cmd: "ssmedia"
            }), t.addButton("ssmediaedit", {
                title: o,
                icon: "editimage",
                cmd: "ssmedia"
            })) : "ui" in t && (t.ui.registry.addButton("ssmedia", {
                tooltip: n,
                icon: "image",
                onAction: function() {
                    return t.execCommand("ssmedia");
                },
                stateSelector: e
            }), t.ui.registry.addMenuItem("ssmedia", {
                text: i,
                icon: "image",
                onAction: function() {
                    return t.execCommand("ssmedia");
                }
            }), t.ui.registry.addButton("ssmediaedit", {
                tooltip: o,
                icon: "edit-block",
                onAction: function() {
                    return t.execCommand("ssmedia");
                }
            }), t.ui.registry.addButton("ssmediadelete", {
                tooltip: "Delete image",
                icon: "remove",
                onAction: function() {
                    return t.execCommand("ssmedia-delete");
                }
            })), t.addCommand("ssmedia", (function() {
                r.openCloudinaryBrowser(r.insertHandler);
            })), t.addCommand("ssmedia-delete", (function() {
                var e = t.selection.getNode();
                t.dom.is(e, filter) ? e.remove() : console.error({
                    error: "Unexpected selection - expected image",
                    selectedNode: e
                });
            }));
        },
        openCloudinaryBrowser: function(e) {
            var t = _objectSpread(_objectSpread({}, CLOUDINARY_CONFIG), {}, {
                multiple: !1
            }), r = this.editor.getParam("default_transformations");
            r && (t.default_transformations = [ r ]), cloudinary.openMediaLibrary(t, {
                insertHandler: e
            });
        },
        insertHandler: function(e) {
            var t, r = e.assets[0];
            if ("image" !== r.resource_type) throw "Resource type of [".concat(r.resource_type, "] is not supported");
            t = r.derived && r.derived.length > 0 ? r.derived[0].secure_url : r.secure_url;
            var n = '<img src="'.concat(t, '" />');
            this.editor.execCommand("mceInsertContent", !1, n);
        },
        linkHandler: function(e) {
            var t, r = e.assets[0];
            t = r.derived && r.derived.length > 0 ? r.derived[0].secure_url : r.secure_url;
            var n, o = this.editor.selection.getContent({
                format: "html"
            });
            o.trim().length <= 0 && (o = prompt("Link text")), r.context && r.context.custom && r.context.custom.alt && (n = r.context.custom.alt);
            var i = prompt("Description", n), s = i ? 'title="'.concat(i, '"') : "", a = '<a href="'.concat(t, '" ').concat(s, ">").concat(o, "</a>");
            this.editor.execCommand("mceInsertContent", !1, a);
        }
    }, tinymce.PluginManager.add("ssmedia", (function(e) {
        t.init(e);
    }));
})();
//# sourceMappingURL=tinymce_ssmedia.js.map