/*! For license information please see bundle.js.LICENSE.txt */
(() => {
    var t = {
        5281: function(t, e, r) {
            var n;
            n = function(t, e, r, n, o, i, a, u, c, s, l, f, p, y) {
                return function(t) {
                    var e = {};
                    function __nested_webpack_require_2712__(r) {
                        if (e[r]) return e[r].exports;
                        var n = e[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return t[r].call(n.exports, n, n.exports, __nested_webpack_require_2712__), n.l = !0, 
                        n.exports;
                    }
                    return __nested_webpack_require_2712__.m = t, __nested_webpack_require_2712__.c = e, 
                    __nested_webpack_require_2712__.d = function(t, e, r) {
                        __nested_webpack_require_2712__.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: r
                        });
                    }, __nested_webpack_require_2712__.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                    }, __nested_webpack_require_2712__.t = function(t, e) {
                        if (1 & e && (t = __nested_webpack_require_2712__(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var r = Object.create(null);
                        if (__nested_webpack_require_2712__.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t) for (var n in t) __nested_webpack_require_2712__.d(r, n, function(e) {
                            return t[e];
                        }.bind(null, n));
                        return r;
                    }, __nested_webpack_require_2712__.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default;
                        } : function() {
                            return t;
                        };
                        return __nested_webpack_require_2712__.d(e, "a", e), e;
                    }, __nested_webpack_require_2712__.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e);
                    }, __nested_webpack_require_2712__.p = "", __nested_webpack_require_2712__(__nested_webpack_require_2712__.s = "./src/namespace/cloudinary-core.js");
                }({
                    "./src/namespace/cloudinary-core.js": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "ClientHintsMetaTag", (function() {
                            return qt;
                        })), r.d(e, "Cloudinary", (function() {
                            return Xt;
                        })), r.d(e, "Condition", (function() {
                            return ft;
                        })), r.d(e, "Configuration", (function() {
                            return dt;
                        })), r.d(e, "crc32", (function() {
                            return src_crc32;
                        })), r.d(e, "Expression", (function() {
                            return lt;
                        })), r.d(e, "FetchLayer", (function() {
                            return mt;
                        })), r.d(e, "HtmlTag", (function() {
                            return Ct;
                        })), r.d(e, "ImageTag", (function() {
                            return Dt;
                        })), r.d(e, "Layer", (function() {
                            return vt;
                        })), r.d(e, "PictureTag", (function() {
                            return Lt;
                        })), r.d(e, "SubtitlesLayer", (function() {
                            return _t;
                        })), r.d(e, "TextLayer", (function() {
                            return ht;
                        })), r.d(e, "Transformation", (function() {
                            return Et;
                        })), r.d(e, "utf8_encode", (function() {
                            return src_utf8_encode;
                        })), r.d(e, "Util", (function() {
                            return o;
                        })), r.d(e, "VideoTag", (function() {
                            return Vt;
                        }));
                        var n = {};
                        r.r(n), r.d(n, "VERSION", (function() {
                            return L;
                        })), r.d(n, "CF_SHARED_CDN", (function() {
                            return I;
                        })), r.d(n, "OLD_AKAMAI_SHARED_CDN", (function() {
                            return z;
                        })), r.d(n, "AKAMAI_SHARED_CDN", (function() {
                            return U;
                        })), r.d(n, "SHARED_CDN", (function() {
                            return M;
                        })), r.d(n, "DEFAULT_TIMEOUT_MS", (function() {
                            return V;
                        })), r.d(n, "DEFAULT_POSTER_OPTIONS", (function() {
                            return q;
                        })), r.d(n, "DEFAULT_VIDEO_SOURCE_TYPES", (function() {
                            return H;
                        })), r.d(n, "SEO_TYPES", (function() {
                            return K;
                        })), r.d(n, "DEFAULT_IMAGE_PARAMS", (function() {
                            return $;
                        })), r.d(n, "DEFAULT_VIDEO_PARAMS", (function() {
                            return W;
                        })), r.d(n, "DEFAULT_VIDEO_SOURCES", (function() {
                            return G;
                        })), r.d(n, "DEFAULT_EXTERNAL_LIBRARIES", (function() {
                            return Y;
                        })), r.d(n, "PLACEHOLDER_IMAGE_MODES", (function() {
                            return Q;
                        })), r.d(n, "ACCESSIBILITY_MODES", (function() {
                            return X;
                        })), r.d(n, "URL_KEYS", (function() {
                            return Z;
                        }));
                        var o = {};
                        r.r(o), r.d(o, "getSDKAnalyticsSignature", (function() {
                            return getSDKAnalyticsSignature;
                        })), r.d(o, "getAnalyticsOptions", (function() {
                            return getAnalyticsOptions;
                        })), r.d(o, "assign", (function() {
                            return l.a;
                        })), r.d(o, "cloneDeep", (function() {
                            return p.a;
                        })), r.d(o, "compact", (function() {
                            return d.a;
                        })), r.d(o, "difference", (function() {
                            return h.a;
                        })), r.d(o, "functions", (function() {
                            return m.a;
                        })), r.d(o, "identity", (function() {
                            return g.a;
                        })), r.d(o, "includes", (function() {
                            return O.a;
                        })), r.d(o, "isArray", (function() {
                            return j.a;
                        })), r.d(o, "isPlainObject", (function() {
                            return x.a;
                        })), r.d(o, "isString", (function() {
                            return E.a;
                        })), r.d(o, "merge", (function() {
                            return A.a;
                        })), r.d(o, "contains", (function() {
                            return O.a;
                        })), r.d(o, "isIntersectionObserverSupported", (function() {
                            return isIntersectionObserverSupported;
                        })), r.d(o, "isNativeLazyLoadSupported", (function() {
                            return isNativeLazyLoadSupported;
                        })), r.d(o, "detectIntersection", (function() {
                            return detectIntersection;
                        })), r.d(o, "omit", (function() {
                            return omit;
                        })), r.d(o, "allStrings", (function() {
                            return baseutil_allStrings;
                        })), r.d(o, "without", (function() {
                            return without;
                        })), r.d(o, "isNumberLike", (function() {
                            return isNumberLike;
                        })), r.d(o, "smartEscape", (function() {
                            return smartEscape;
                        })), r.d(o, "defaults", (function() {
                            return defaults;
                        })), r.d(o, "objectProto", (function() {
                            return rt;
                        })), r.d(o, "objToString", (function() {
                            return nt;
                        })), r.d(o, "isObject", (function() {
                            return isObject;
                        })), r.d(o, "funcTag", (function() {
                            return ot;
                        })), r.d(o, "reWords", (function() {
                            return it;
                        })), r.d(o, "camelCase", (function() {
                            return camelCase;
                        })), r.d(o, "snakeCase", (function() {
                            return snakeCase;
                        })), r.d(o, "convertKeys", (function() {
                            return convertKeys;
                        })), r.d(o, "withCamelCaseKeys", (function() {
                            return withCamelCaseKeys;
                        })), r.d(o, "withSnakeCaseKeys", (function() {
                            return withSnakeCaseKeys;
                        })), r.d(o, "base64Encode", (function() {
                            return at;
                        })), r.d(o, "base64EncodeURL", (function() {
                            return base64EncodeURL;
                        })), r.d(o, "extractUrlParams", (function() {
                            return extractUrlParams;
                        })), r.d(o, "patchFetchFormat", (function() {
                            return patchFetchFormat;
                        })), r.d(o, "optionConsume", (function() {
                            return optionConsume;
                        })), r.d(o, "isEmpty", (function() {
                            return isEmpty;
                        })), r.d(o, "isAndroid", (function() {
                            return isAndroid;
                        })), r.d(o, "isEdge", (function() {
                            return isEdge;
                        })), r.d(o, "isChrome", (function() {
                            return isChrome;
                        })), r.d(o, "isSafari", (function() {
                            return isSafari;
                        })), r.d(o, "isElement", (function() {
                            return T.a;
                        })), r.d(o, "isFunction", (function() {
                            return B.a;
                        })), r.d(o, "trim", (function() {
                            return N.a;
                        })), r.d(o, "getData", (function() {
                            return lodash_getData;
                        })), r.d(o, "setData", (function() {
                            return lodash_setData;
                        })), r.d(o, "getAttribute", (function() {
                            return lodash_getAttribute;
                        })), r.d(o, "setAttribute", (function() {
                            return lodash_setAttribute;
                        })), r.d(o, "removeAttribute", (function() {
                            return lodash_removeAttribute;
                        })), r.d(o, "setAttributes", (function() {
                            return setAttributes;
                        })), r.d(o, "hasClass", (function() {
                            return lodash_hasClass;
                        })), r.d(o, "addClass", (function() {
                            return lodash_addClass;
                        })), r.d(o, "getStyles", (function() {
                            return getStyles;
                        })), r.d(o, "cssExpand", (function() {
                            return ut;
                        })), r.d(o, "domStyle", (function() {
                            return domStyle;
                        })), r.d(o, "curCSS", (function() {
                            return curCSS;
                        })), r.d(o, "cssValue", (function() {
                            return cssValue;
                        })), r.d(o, "augmentWidthOrHeight", (function() {
                            return augmentWidthOrHeight;
                        })), r.d(o, "getWidthOrHeight", (function() {
                            return getWidthOrHeight;
                        })), r.d(o, "width", (function() {
                            return lodash_width;
                        }));
                        var src_utf8_encode = function(t) {
                            var e, r, n, o, i, a, u, c;
                            if (null == t) return "";
                            for (c = "", i = void 0, n = void 0, i = n = 0, u = (a = t + "").length, o = 0; o < u; ) r = null, 
                            (e = a.charCodeAt(o)) < 128 ? n++ : r = e > 127 && e < 2048 ? String.fromCharCode(e >> 6 | 192, 63 & e | 128) : String.fromCharCode(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128), 
                            null !== r && (n > i && (c += a.slice(i, n)), c += r, i = n = o + 1), o++;
                            return n > i && (c += a.slice(i, u)), c;
                        }, src_crc32 = function(t) {
                            var e, r, n, o;
                            for (o = 0, e = ~(e = 0), r = 0, n = (t = src_utf8_encode(t)).length; r < n; ) o = 255 & (e ^ t.charCodeAt(r)), 
                            e = e >>> 8 ^ "0x" + "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".substr(9 * o, 8), 
                            r++;
                            return (e = ~e) < 0 && (e += 4294967296), e;
                        };
                        function stringPad(t, e, r) {
                            return e |= 0, r = String(void 0 !== r ? r : " "), t.length > e ? String(t) : ((e -= t.length) > r.length && (r += function(t, e) {
                                for (var r = ""; e > 0; ) r += t, e--;
                                return r;
                            }(r, e / r.length)), r.slice(0, e) + String(t));
                        }
                        function _arrayLikeToArray(t, e) {
                            (null == e || e > t.length) && (e = t.length);
                            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                            return n;
                        }
                        var i, a = 0, u = {};
                        (i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", function(t) {
                            if (Array.isArray(t)) return _arrayLikeToArray(t);
                        }(i) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
                        }(i) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return _arrayLikeToArray(t, e);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(t, e) : void 0;
                            }
                        }(i) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }()).forEach((function(t) {
                            var e = a.toString(2);
                            e = stringPad(e, 6, "0"), u[e] = t, a++;
                        }));
                        var c = u;
                        function encodeVersion(t) {
                            var e = "", r = 6 * t.split(".").length, n = function(t) {
                                if (t.split(".").length < 2) throw new Error("invalid semVer, must have at least two segments");
                                return t.split(".").reverse().map((function(t) {
                                    return stringPad(t, 2, "0");
                                })).join(".");
                            }(t), o = parseInt(n.split(".").join("")).toString(2);
                            if ((o = stringPad(o, r, "0")).length % 6 != 0) throw "Version must be smaller than 43.21.26)";
                            return o.match(/.{1,6}/g).forEach((function(t) {
                                e += c[t];
                            })), e;
                        }
                        function getSDKAnalyticsSignature() {
                            var t, e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            try {
                                var n = (t = r.techVersion, e = t.split("."), "".concat(e[0], ".").concat(e[1])), o = encodeVersion(r.sdkSemver), i = encodeVersion(n), a = r.feature, u = r.sdkCode;
                                return "".concat("A").concat(u).concat(o).concat(i).concat(a);
                            } catch (t) {
                                return "E";
                            }
                        }
                        function getAnalyticsOptions(t) {
                            var e = {
                                sdkSemver: t.sdkSemver,
                                techVersion: t.techVersion,
                                sdkCode: t.sdkCode,
                                feature: "0"
                            };
                            return t.urlAnalytics ? (t.accessibility && (e.feature = "D"), "lazy" === t.loading && (e.feature = "C"), 
                            t.responsive && (e.feature = "A"), t.placeholder && (e.feature = "B"), e) : {};
                        }
                        var s = r("lodash/assign"), l = r.n(s), f = r("lodash/cloneDeep"), p = r.n(f), y = r("lodash/compact"), d = r.n(y), v = r("lodash/difference"), h = r.n(v), _ = r("lodash/functions"), m = r.n(_), b = r("lodash/identity"), g = r.n(b), w = r("lodash/includes"), O = r.n(w), P = r("lodash/isArray"), j = r.n(P), k = r("lodash/isPlainObject"), x = r.n(k), S = r("lodash/isString"), E = r.n(S), C = r("lodash/merge"), A = r.n(C), R = r("lodash/isElement"), T = r.n(R), D = r("lodash/isFunction"), B = r.n(D), F = r("lodash/trim"), N = r.n(F);
                        function _typeof(t) {
                            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, _typeof(t);
                        }
                        function isIntersectionObserverSupported() {
                            return "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && window.IntersectionObserver;
                        }
                        function isNativeLazyLoadSupported() {
                            return "object" === ("undefined" == typeof HTMLImageElement ? "undefined" : _typeof(HTMLImageElement)) && HTMLImageElement.prototype.loading;
                        }
                        function detectIntersection(t, e) {
                            try {
                                if (isNativeLazyLoadSupported() || !isIntersectionObserverSupported()) return void e();
                                var r = new IntersectionObserver((function(t) {
                                    t.forEach((function(t) {
                                        t.isIntersecting && (e(), r.unobserve(t.target));
                                    }));
                                }), {
                                    threshold: [ 0, .01 ]
                                });
                                r.observe(t);
                            } catch (t) {
                                e();
                            }
                        }
                        var L = "2.5.0", I = "d3jpl91pxevbkh.cloudfront.net", z = "cloudinary-a.akamaihd.net", U = "res.cloudinary.com", M = U, V = 1e4, q = {
                            format: "jpg",
                            resource_type: "video"
                        }, H = [ "webm", "mp4", "ogv" ], K = {
                            "image/upload": "images",
                            "image/private": "private_images",
                            "image/authenticated": "authenticated_images",
                            "raw/upload": "files",
                            "video/upload": "videos"
                        }, $ = {
                            resource_type: "image",
                            transformation: [],
                            type: "upload"
                        }, W = {
                            fallback_content: "",
                            resource_type: "video",
                            source_transformation: {},
                            source_types: H,
                            transformation: [],
                            type: "upload"
                        }, G = [ {
                            type: "mp4",
                            codecs: "hev1",
                            transformations: {
                                video_codec: "h265"
                            }
                        }, {
                            type: "webm",
                            codecs: "vp9",
                            transformations: {
                                video_codec: "vp9"
                            }
                        }, {
                            type: "mp4",
                            transformations: {
                                video_codec: "auto"
                            }
                        }, {
                            type: "webm",
                            transformations: {
                                video_codec: "auto"
                            }
                        } ], Y = {
                            seeThru: "https://unpkg.com/seethru@4/dist/seeThru.min.js"
                        }, Q = {
                            blur: [ {
                                effect: "blur:2000",
                                quality: 1,
                                fetch_format: "auto"
                            } ],
                            pixelate: [ {
                                effect: "pixelate",
                                quality: 1,
                                fetch_format: "auto"
                            } ],
                            "predominant-color-pixel": [ {
                                width: "iw_div_2",
                                aspect_ratio: 1,
                                crop: "pad",
                                background: "auto"
                            }, {
                                crop: "crop",
                                width: 1,
                                height: 1,
                                gravity: "north_east"
                            }, {
                                fetch_format: "auto",
                                quality: "auto"
                            } ],
                            "predominant-color": [ {
                                variables: [ [ "$currWidth", "w" ], [ "$currHeight", "h" ] ]
                            }, {
                                width: "iw_div_2",
                                aspect_ratio: 1,
                                crop: "pad",
                                background: "auto"
                            }, {
                                crop: "crop",
                                width: 10,
                                height: 10,
                                gravity: "north_east"
                            }, {
                                width: "$currWidth",
                                height: "$currHeight",
                                crop: "fill"
                            }, {
                                fetch_format: "auto",
                                quality: "auto"
                            } ],
                            vectorize: [ {
                                effect: "vectorize:3:0.1",
                                fetch_format: "svg"
                            } ]
                        }, X = {
                            darkmode: "tint:75:black",
                            brightmode: "tint:50:white",
                            monochrome: "grayscale",
                            colorblind: "assist_colorblind"
                        }, Z = [ "accessibility", "api_secret", "auth_token", "cdn_subdomain", "cloud_name", "cname", "format", "placeholder", "private_cdn", "resource_type", "secure", "secure_cdn_subdomain", "secure_distribution", "shorten", "sign_url", "signature", "ssl_detected", "type", "url_suffix", "use_root_path", "version" ];
                        function baseutil_typeof(t) {
                            return baseutil_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, baseutil_typeof(t);
                        }
                        function omit(t, e) {
                            t = t || {};
                            var r = Object.keys(t).filter((function(t) {
                                return !O()(e, t);
                            })), n = {};
                            return r.forEach((function(e) {
                                return n[e] = t[e];
                            })), n;
                        }
                        var J, tt, et, baseutil_allStrings = function(t) {
                            return t.length && t.every(E.a);
                        }, without = function(t, e) {
                            return t.filter((function(t) {
                                return t !== e;
                            }));
                        }, isNumberLike = function(t) {
                            return null != t && !isNaN(parseFloat(t));
                        }, smartEscape = function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /([^a-zA-Z0-9_.\-\/:]+)/g;
                            return t.replace(e, (function(t) {
                                return t.split("").map((function(t) {
                                    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
                                })).join("");
                            }));
                        }, defaults = function(t) {
                            for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                            return r.reduce((function(t, e) {
                                var r, n;
                                for (r in e) n = e[r], void 0 === t[r] && (t[r] = n);
                                return t;
                            }), t);
                        }, rt = Object.prototype, nt = rt.toString, isObject = function(t) {
                            var e;
                            return e = baseutil_typeof(t), !!t && ("object" === e || "function" === e);
                        }, ot = "[object Function]", isFunction = function(t) {
                            return isObject(t) && nt.call(t) === ot;
                        }, it = (tt = "[A-Z]", J = "[a-z]+", RegExp(tt + "+(?=" + tt + J + ")|" + tt + "?" + J + "|" + tt + "+|[0-9]+", "g")), camelCase = function(t) {
                            var e = t.match(it);
                            return (e = e.map((function(t) {
                                return t.charAt(0).toLocaleUpperCase() + t.slice(1).toLocaleLowerCase();
                            })))[0] = e[0].toLocaleLowerCase(), e.join("");
                        }, snakeCase = function(t) {
                            var e = t.match(it);
                            return (e = e.map((function(t) {
                                return t.toLocaleLowerCase();
                            }))).join("_");
                        }, convertKeys = function(t, e) {
                            var r, n;
                            for (var o in r = {}, t) n = t[o], e && (o = e(o)), isEmpty(o) || (r[o] = n);
                            return r;
                        }, withCamelCaseKeys = function(t) {
                            return convertKeys(t, camelCase);
                        }, withSnakeCaseKeys = function(t) {
                            return convertKeys(t, snakeCase);
                        }, at = "undefined" != typeof btoa && isFunction(btoa) ? btoa : "undefined" != typeof Buffer && isFunction(Buffer) ? function(t) {
                            return t instanceof Buffer || (t = new Buffer.from(String(t), "binary")), t.toString("base64");
                        } : function(t) {
                            throw new Error("No base64 encoding function found");
                        }, base64EncodeURL = function(t) {
                            try {
                                t = decodeURI(t);
                            } finally {
                                t = encodeURI(t);
                            }
                            return at(t);
                        };
                        function extractUrlParams(t) {
                            return Z.reduce((function(e, r) {
                                return null != t[r] && (e[r] = t[r]), e;
                            }), {});
                        }
                        function patchFetchFormat(t) {
                            null == t && (t = {}), "fetch" === t.type && null == t.fetch_format && (t.fetch_format = optionConsume(t, "format"));
                        }
                        function optionConsume(t, e, r) {
                            var n = t[e];
                            return delete t[e], null != n ? n : r;
                        }
                        function isEmpty(t) {
                            if (null == t) return !0;
                            if ("number" == typeof t.length) return 0 === t.length;
                            if ("number" == typeof t.size) return 0 === t.size;
                            if ("object" == baseutil_typeof(t)) {
                                for (var e in t) if (t.hasOwnProperty(e)) return !1;
                                return !0;
                            }
                            return !0;
                        }
                        function getUserAgent() {
                            return navigator && navigator.userAgent || "";
                        }
                        function isAndroid() {
                            var t = getUserAgent();
                            return /Android/i.test(t);
                        }
                        function isEdge() {
                            var t = getUserAgent();
                            return /Edg/i.test(t);
                        }
                        function isChrome() {
                            var t = getUserAgent();
                            return !isEdge() && (/Chrome/i.test(t) || /CriOS/i.test(t));
                        }
                        function isSafari() {
                            var t = getUserAgent();
                            return /Safari/i.test(t) && !isChrome() && !isAndroid() && !isEdge();
                        }
                        var lodash_getData = function(t, e) {
                            switch (!1) {
                              case !(null == t):
                                return;

                              case !B()(t.getAttribute):
                                return t.getAttribute("data-".concat(e));

                              case !B()(t.getAttr):
                                return t.getAttr("data-".concat(e));

                              case !B()(t.data):
                                return t.data(e);

                              case !(B()("undefined" != typeof jQuery && jQuery.fn && jQuery.fn.data) && T()(t)):
                                return jQuery(t).data(e);
                            }
                        }, lodash_setData = function(t, e, r) {
                            switch (!1) {
                              case !(null == t):
                                return;

                              case !B()(t.setAttribute):
                                return t.setAttribute("data-".concat(e), r);

                              case !B()(t.setAttr):
                                return t.setAttr("data-".concat(e), r);

                              case !B()(t.data):
                                return t.data(e, r);

                              case !(B()("undefined" != typeof jQuery && jQuery.fn && jQuery.fn.data) && T()(t)):
                                return jQuery(t).data(e, r);
                            }
                        }, lodash_getAttribute = function(t, e) {
                            switch (!1) {
                              case !(null == t):
                                return;

                              case !B()(t.getAttribute):
                                return t.getAttribute(e);

                              case !B()(t.attr):
                                return t.attr(e);

                              case !B()(t.getAttr):
                                return t.getAttr(e);
                            }
                        }, lodash_setAttribute = function(t, e, r) {
                            switch (!1) {
                              case !(null == t):
                                return;

                              case !B()(t.setAttribute):
                                return t.setAttribute(e, r);

                              case !B()(t.attr):
                                return t.attr(e, r);

                              case !B()(t.setAttr):
                                return t.setAttr(e, r);
                            }
                        }, lodash_removeAttribute = function(t, e) {
                            switch (!1) {
                              case !(null == t):
                                return;

                              case !B()(t.removeAttribute):
                                return t.removeAttribute(e);

                              default:
                                return lodash_setAttribute(t, void 0);
                            }
                        }, setAttributes = function(t, e) {
                            var r, n, o;
                            for (r in n = [], e) null != (o = e[r]) ? n.push(lodash_setAttribute(t, r, o)) : n.push(lodash_removeAttribute(t, r));
                            return n;
                        }, lodash_hasClass = function(t, e) {
                            if (T()(t)) return t.className.match(new RegExp("\\b".concat(e, "\\b")));
                        }, lodash_addClass = function(t, e) {
                            if (!t.className.match(new RegExp("\\b".concat(e, "\\b")))) return t.className = N()("".concat(t.className, " ").concat(e));
                        }, getStyles = function(t) {
                            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : window.getComputedStyle(t, null);
                        }, ut = [ "Top", "Right", "Bottom", "Left" ];
                        et = function(t, e) {
                            var r, n;
                            return r = 9 === t.nodeType ? t.documentElement : t, t === (n = e && e.parentNode) || !(!n || 1 !== n.nodeType || !r.contains(n));
                        };
                        var domStyle = function(t, e) {
                            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) return t.style[e];
                        }, curCSS = function(t, e, r) {
                            var n, o, i, a, u, c;
                            return a = /^margin/, c = void 0, o = void 0, n = void 0, i = void 0, u = t.style, 
                            (r = r || getStyles(t)) && (i = r.getPropertyValue(e) || r[e]), r && ("" !== i || et(t.ownerDocument, t) || (i = domStyle(t, e)), 
                            ct.test(i) && a.test(e) && (c = u.width, o = u.minWidth, n = u.maxWidth, u.minWidth = u.maxWidth = u.width = i, 
                            i = r.width, u.width = c, u.minWidth = o, u.maxWidth = n)), void 0 !== i ? i + "" : i;
                        }, cssValue = function(t, e, r, n) {
                            var o;
                            return o = curCSS(t, e, n), r ? parseFloat(o) : o;
                        }, augmentWidthOrHeight = function(t, e, r, n, o) {
                            var i, a, u, c, s;
                            if (r === (n ? "border" : "content")) return 0;
                            for (s = 0, i = 0, a = (c = "width" === e ? [ "Right", "Left" ] : [ "Top", "Bottom" ]).length; i < a; i++) u = c[i], 
                            "margin" === r && (s += cssValue(t, r + u, !0, o)), n ? ("content" === r && (s -= cssValue(t, "padding".concat(u), !0, o)), 
                            "margin" !== r && (s -= cssValue(t, "border".concat(u, "Width"), !0, o))) : (s += cssValue(t, "padding".concat(u), !0, o), 
                            "padding" !== r && (s += cssValue(t, "border".concat(u, "Width"), !0, o)));
                            return s;
                        }, ct = new RegExp("^(" + /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source + ")(?!px)[a-z%]+$", "i"), getWidthOrHeight = function(t, e, r) {
                            var n, o, i, a;
                            if (a = !0, i = "width" === e ? t.offsetWidth : t.offsetHeight, o = getStyles(t), 
                            n = "border-box" === cssValue(t, "boxSizing", !1, o), i <= 0 || null == i) {
                                if (((i = curCSS(t, e, o)) < 0 || null == i) && (i = t.style[e]), ct.test(i)) return i;
                                a = n && i === t.style[e], i = parseFloat(i) || 0;
                            }
                            return i + augmentWidthOrHeight(t, e, r || (n ? "border" : "content"), a, o);
                        }, lodash_width = function(t) {
                            return getWidthOrHeight(t, "width", "content");
                        };
                        function expression_typeof(t) {
                            return expression_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, expression_typeof(t);
                        }
                        function _defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, _toPropertyKey(n.key), n);
                            }
                        }
                        function _toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != expression_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != expression_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == expression_typeof(e) ? e : e + "";
                        }
                        var st = function() {
                            function Expression(t) {
                                !function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, Expression), this.expressions = [], null != t && this.expressions.push(Expression.normalize(t));
                            }
                            return t = Expression, r = [ {
                                key: "new",
                                value: function(t) {
                                    return new this(t);
                                }
                            }, {
                                key: "normalize",
                                value: function(t) {
                                    if (null == t) return t;
                                    t = String(t);
                                    var e = new RegExp("((\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*|\\^)(?=[ _]))", "g");
                                    t = t.replace(e, (function(t) {
                                        return Expression.OPERATORS[t];
                                    }));
                                    var r = "(" + Object.keys(Expression.PREDEFINED_VARS).map((function(t) {
                                        return ":".concat(t, "|").concat(t);
                                    })).join("|") + ")", n = new RegExp("".concat("(\\$_*[^_ ]+)", "|").concat(r), "g");
                                    return (t = t.replace(n, (function(t) {
                                        return Expression.PREDEFINED_VARS[t] || t;
                                    }))).replace(/[ _]+/g, "_");
                                }
                            }, {
                                key: "variable",
                                value: function(t, e) {
                                    return new this(t).value(e);
                                }
                            }, {
                                key: "width",
                                value: function() {
                                    return new this("width");
                                }
                            }, {
                                key: "height",
                                value: function() {
                                    return new this("height");
                                }
                            }, {
                                key: "initialWidth",
                                value: function() {
                                    return new this("initialWidth");
                                }
                            }, {
                                key: "initialHeight",
                                value: function() {
                                    return new this("initialHeight");
                                }
                            }, {
                                key: "aspectRatio",
                                value: function() {
                                    return new this("aspectRatio");
                                }
                            }, {
                                key: "initialAspectRatio",
                                value: function() {
                                    return new this("initialAspectRatio");
                                }
                            }, {
                                key: "pageCount",
                                value: function() {
                                    return new this("pageCount");
                                }
                            }, {
                                key: "faceCount",
                                value: function() {
                                    return new this("faceCount");
                                }
                            }, {
                                key: "currentPage",
                                value: function() {
                                    return new this("currentPage");
                                }
                            }, {
                                key: "tags",
                                value: function() {
                                    return new this("tags");
                                }
                            }, {
                                key: "pageX",
                                value: function() {
                                    return new this("pageX");
                                }
                            }, {
                                key: "pageY",
                                value: function() {
                                    return new this("pageY");
                                }
                            } ], (e = [ {
                                key: "serialize",
                                value: function() {
                                    return Expression.normalize(this.expressions.join("_"));
                                }
                            }, {
                                key: "toString",
                                value: function() {
                                    return this.serialize();
                                }
                            }, {
                                key: "getParent",
                                value: function() {
                                    return this.parent;
                                }
                            }, {
                                key: "setParent",
                                value: function(t) {
                                    return this.parent = t, this;
                                }
                            }, {
                                key: "predicate",
                                value: function(t, e, r) {
                                    return null != Expression.OPERATORS[e] && (e = Expression.OPERATORS[e]), this.expressions.push("".concat(t, "_").concat(e, "_").concat(r)), 
                                    this;
                                }
                            }, {
                                key: "and",
                                value: function() {
                                    return this.expressions.push("and"), this;
                                }
                            }, {
                                key: "or",
                                value: function() {
                                    return this.expressions.push("or"), this;
                                }
                            }, {
                                key: "then",
                                value: function() {
                                    return this.getParent().if(this.toString());
                                }
                            }, {
                                key: "height",
                                value: function(t, e) {
                                    return this.predicate("h", t, e);
                                }
                            }, {
                                key: "width",
                                value: function(t, e) {
                                    return this.predicate("w", t, e);
                                }
                            }, {
                                key: "aspectRatio",
                                value: function(t, e) {
                                    return this.predicate("ar", t, e);
                                }
                            }, {
                                key: "pageCount",
                                value: function(t, e) {
                                    return this.predicate("pc", t, e);
                                }
                            }, {
                                key: "faceCount",
                                value: function(t, e) {
                                    return this.predicate("fc", t, e);
                                }
                            }, {
                                key: "value",
                                value: function(t) {
                                    return this.expressions.push(t), this;
                                }
                            } ]) && _defineProperties(t.prototype, e), r && _defineProperties(t, r), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), t;
                            var t, e, r;
                        }();
                        st.OPERATORS = {
                            "=": "eq",
                            "!=": "ne",
                            "<": "lt",
                            ">": "gt",
                            "<=": "lte",
                            ">=": "gte",
                            "&&": "and",
                            "||": "or",
                            "*": "mul",
                            "/": "div",
                            "+": "add",
                            "-": "sub",
                            "^": "pow"
                        }, st.PREDEFINED_VARS = {
                            aspect_ratio: "ar",
                            aspectRatio: "ar",
                            current_page: "cp",
                            currentPage: "cp",
                            duration: "du",
                            face_count: "fc",
                            faceCount: "fc",
                            height: "h",
                            initial_aspect_ratio: "iar",
                            initial_duration: "idu",
                            initial_height: "ih",
                            initial_width: "iw",
                            initialAspectRatio: "iar",
                            initialDuration: "idu",
                            initialHeight: "ih",
                            initialWidth: "iw",
                            page_count: "pc",
                            page_x: "px",
                            page_y: "py",
                            pageCount: "pc",
                            pageX: "px",
                            pageY: "py",
                            tags: "tags",
                            width: "w"
                        }, st.BOUNDRY = "[ _]+";
                        var lt = st;
                        function condition_typeof(t) {
                            return condition_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, condition_typeof(t);
                        }
                        function condition_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, condition_toPropertyKey(n.key), n);
                            }
                        }
                        function condition_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != condition_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != condition_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == condition_typeof(e) ? e : e + "";
                        }
                        function _callSuper(t, e, r) {
                            return e = _getPrototypeOf(e), function(t, e) {
                                if (e && ("object" === condition_typeof(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                }(t);
                            }(t, _isNativeReflectConstruct() ? Reflect.construct(e, r || [], _getPrototypeOf(t).constructor) : e.apply(t, r));
                        }
                        function _isNativeReflectConstruct() {
                            try {
                                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                            } catch (t) {}
                            return (_isNativeReflectConstruct = function() {
                                return !!t;
                            })();
                        }
                        function _getPrototypeOf(t) {
                            return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t);
                            }, _getPrototypeOf(t);
                        }
                        function _setPrototypeOf(t, e) {
                            return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                return t.__proto__ = e, t;
                            }, _setPrototypeOf(t, e);
                        }
                        var ft = function(t) {
                            function Condition(t) {
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, Condition), _callSuper(this, Condition, [ t ]);
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && _setPrototypeOf(t, e);
                            }(Condition, t), e = Condition, (r = [ {
                                key: "height",
                                value: function(t, e) {
                                    return this.predicate("h", t, e);
                                }
                            }, {
                                key: "width",
                                value: function(t, e) {
                                    return this.predicate("w", t, e);
                                }
                            }, {
                                key: "aspectRatio",
                                value: function(t, e) {
                                    return this.predicate("ar", t, e);
                                }
                            }, {
                                key: "pageCount",
                                value: function(t, e) {
                                    return this.predicate("pc", t, e);
                                }
                            }, {
                                key: "faceCount",
                                value: function(t, e) {
                                    return this.predicate("fc", t, e);
                                }
                            }, {
                                key: "duration",
                                value: function(t, e) {
                                    return this.predicate("du", t, e);
                                }
                            }, {
                                key: "initialDuration",
                                value: function(t, e) {
                                    return this.predicate("idu", t, e);
                                }
                            } ]) && condition_defineProperties(e.prototype, r), n && condition_defineProperties(e, n), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), e;
                            var e, r, n;
                        }(lt);
                        function configuration_typeof(t) {
                            return configuration_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, configuration_typeof(t);
                        }
                        function _slicedToArray(t, e) {
                            return function(t) {
                                if (Array.isArray(t)) return t;
                            }(t) || function(t, e) {
                                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (null != r) {
                                    var n, o, i, a, u = [], c = !0, s = !1;
                                    try {
                                        if (i = (r = r.call(t)).next, 0 === e) {
                                            if (Object(r) !== r) return;
                                            c = !1;
                                        } else for (;!(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = !0) ;
                                    } catch (t) {
                                        s = !0, o = t;
                                    } finally {
                                        try {
                                            if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return;
                                        } finally {
                                            if (s) throw o;
                                        }
                                    }
                                    return u;
                                }
                            }(t, e) || function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return configuration_arrayLikeToArray(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? configuration_arrayLikeToArray(t, e) : void 0;
                                }
                            }(t, e) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }();
                        }
                        function configuration_arrayLikeToArray(t, e) {
                            (null == e || e > t.length) && (e = t.length);
                            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                            return n;
                        }
                        function configuration_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, configuration_toPropertyKey(n.key), n);
                            }
                        }
                        function configuration_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != configuration_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != configuration_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == configuration_typeof(e) ? e : e + "";
                        }
                        var pt = function() {
                            return t = function Configuration(t) {
                                !function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, Configuration), this.configuration = null == t ? {} : p()(t), defaults(this.configuration, yt);
                            }, (e = [ {
                                key: "init",
                                value: function() {
                                    return this.fromEnvironment(), this.fromDocument(), this;
                                }
                            }, {
                                key: "set",
                                value: function(t, e) {
                                    return this.configuration[t] = e, this;
                                }
                            }, {
                                key: "get",
                                value: function(t) {
                                    return this.configuration[t];
                                }
                            }, {
                                key: "merge",
                                value: function(t) {
                                    return l()(this.configuration, p()(t)), this;
                                }
                            }, {
                                key: "fromDocument",
                                value: function() {
                                    var t, e, r, n;
                                    if (n = "undefined" != typeof document && null !== document ? document.querySelectorAll('meta[name^="cloudinary_"]') : void 0) for (e = 0, 
                                    r = n.length; e < r; e++) t = n[e], this.configuration[t.getAttribute("name").replace("cloudinary_", "")] = t.getAttribute("content");
                                    return this;
                                }
                            }, {
                                key: "fromEnvironment",
                                value: function() {
                                    var t, e, r = this;
                                    return "undefined" != typeof process && null !== process && {
                                        NODE_ENV: "production"
                                    }.CLOUDINARY_URL && (e = /cloudinary:\/\/(?:(\w+)(?:\:([\w-]+))?@)?([\w\.-]+)(?:\/([^?]*))?(?:\?(.+))?/.exec({
                                        NODE_ENV: "production"
                                    }.CLOUDINARY_URL)) && (null != e[3] && (this.configuration.cloud_name = e[3]), null != e[1] && (this.configuration.api_key = e[1]), 
                                    null != e[2] && (this.configuration.api_secret = e[2]), null != e[4] && (this.configuration.private_cdn = null != e[4]), 
                                    null != e[4] && (this.configuration.secure_distribution = e[4]), null != (t = e[5]) && t.split("&").forEach((function(t) {
                                        var e = _slicedToArray(t.split("="), 2), n = e[0], o = e[1];
                                        null == o && (o = !0), r.configuration[n] = o;
                                    }))), this;
                                }
                            }, {
                                key: "config",
                                value: function(t, e) {
                                    switch (!1) {
                                      case void 0 === e:
                                        return this.set(t, e), this.configuration;

                                      case !E()(t):
                                        return this.get(t);

                                      case !x()(t):
                                        return this.merge(t), this.configuration;

                                      default:
                                        return this.configuration;
                                    }
                                }
                            }, {
                                key: "toOptions",
                                value: function() {
                                    return p()(this.configuration);
                                }
                            } ]) && configuration_defineProperties(t.prototype, e), r && configuration_defineProperties(t, r), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), t;
                            var t, e, r;
                        }(), yt = {
                            responsive_class: "cld-responsive",
                            responsive_use_breakpoints: !0,
                            round_dpr: !0,
                            secure: "https:" === ("undefined" != typeof window && null !== window && window.location ? window.location.protocol : void 0)
                        };
                        pt.CONFIG_PARAMS = [ "api_key", "api_secret", "callback", "cdn_subdomain", "cloud_name", "cname", "private_cdn", "protocol", "resource_type", "responsive", "responsive_class", "responsive_use_breakpoints", "responsive_width", "round_dpr", "secure", "secure_cdn_subdomain", "secure_distribution", "shorten", "type", "upload_preset", "url_suffix", "use_root_path", "version", "externalLibraries", "max_timeout_ms" ];
                        var dt = pt;
                        function layer_typeof(t) {
                            return layer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, layer_typeof(t);
                        }
                        function layer_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, layer_toPropertyKey(n.key), n);
                            }
                        }
                        function layer_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != layer_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != layer_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == layer_typeof(e) ? e : e + "";
                        }
                        var vt = function() {
                            return t = function Layer(t) {
                                var e = this;
                                !function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, Layer), this.options = {}, null != t && [ "resourceType", "type", "publicId", "format" ].forEach((function(r) {
                                    var n;
                                    return e.options[r] = null != (n = t[r]) ? n : t[snakeCase(r)];
                                }));
                            }, (e = [ {
                                key: "resourceType",
                                value: function(t) {
                                    return this.options.resourceType = t, this;
                                }
                            }, {
                                key: "type",
                                value: function(t) {
                                    return this.options.type = t, this;
                                }
                            }, {
                                key: "publicId",
                                value: function(t) {
                                    return this.options.publicId = t, this;
                                }
                            }, {
                                key: "getPublicId",
                                value: function() {
                                    var t;
                                    return null != (t = this.options.publicId) ? t.replace(/\//g, ":") : void 0;
                                }
                            }, {
                                key: "getFullPublicId",
                                value: function() {
                                    return null != this.options.format ? this.getPublicId() + "." + this.options.format : this.getPublicId();
                                }
                            }, {
                                key: "format",
                                value: function(t) {
                                    return this.options.format = t, this;
                                }
                            }, {
                                key: "toString",
                                value: function() {
                                    var t;
                                    if (t = [], null == this.options.publicId) throw "Must supply publicId";
                                    return "image" !== this.options.resourceType && t.push(this.options.resourceType), 
                                    "upload" !== this.options.type && t.push(this.options.type), t.push(this.getFullPublicId()), 
                                    d()(t).join(":");
                                }
                            }, {
                                key: "clone",
                                value: function() {
                                    return new this.constructor(this.options);
                                }
                            } ]) && layer_defineProperties(t.prototype, e), r && layer_defineProperties(t, r), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), t;
                            var t, e, r;
                        }();
                        function textlayer_typeof(t) {
                            return textlayer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, textlayer_typeof(t);
                        }
                        function textlayer_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, textlayer_toPropertyKey(n.key), n);
                            }
                        }
                        function textlayer_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != textlayer_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != textlayer_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == textlayer_typeof(e) ? e : e + "";
                        }
                        function textlayer_callSuper(t, e, r) {
                            return e = textlayer_getPrototypeOf(e), function(t, e) {
                                if (e && ("object" === textlayer_typeof(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                }(t);
                            }(t, textlayer_isNativeReflectConstruct() ? Reflect.construct(e, r || [], textlayer_getPrototypeOf(t).constructor) : e.apply(t, r));
                        }
                        function textlayer_isNativeReflectConstruct() {
                            try {
                                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                            } catch (t) {}
                            return (textlayer_isNativeReflectConstruct = function() {
                                return !!t;
                            })();
                        }
                        function textlayer_getPrototypeOf(t) {
                            return textlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t);
                            }, textlayer_getPrototypeOf(t);
                        }
                        function textlayer_setPrototypeOf(t, e) {
                            return textlayer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                return t.__proto__ = e, t;
                            }, textlayer_setPrototypeOf(t, e);
                        }
                        var ht = function(t) {
                            function TextLayer(t) {
                                var e;
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, TextLayer), e = textlayer_callSuper(this, TextLayer, [ t ]), null != t && [ "resourceType", "resourceType", "fontFamily", "fontSize", "fontWeight", "fontStyle", "textDecoration", "textAlign", "stroke", "letterSpacing", "lineSpacing", "fontHinting", "fontAntialiasing", "text", "textStyle" ].forEach((function(r) {
                                    var n;
                                    return e.options[r] = null != (n = t[r]) ? n : t[snakeCase(r)];
                                })), e.options.resourceType = "text", e;
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && textlayer_setPrototypeOf(t, e);
                            }(TextLayer, t), e = TextLayer, (r = [ {
                                key: "resourceType",
                                value: function(t) {
                                    throw "Cannot modify resourceType for text layers";
                                }
                            }, {
                                key: "type",
                                value: function(t) {
                                    throw "Cannot modify type for text layers";
                                }
                            }, {
                                key: "format",
                                value: function(t) {
                                    throw "Cannot modify format for text layers";
                                }
                            }, {
                                key: "fontFamily",
                                value: function(t) {
                                    return this.options.fontFamily = t, this;
                                }
                            }, {
                                key: "fontSize",
                                value: function(t) {
                                    return this.options.fontSize = t, this;
                                }
                            }, {
                                key: "fontWeight",
                                value: function(t) {
                                    return this.options.fontWeight = t, this;
                                }
                            }, {
                                key: "fontStyle",
                                value: function(t) {
                                    return this.options.fontStyle = t, this;
                                }
                            }, {
                                key: "textDecoration",
                                value: function(t) {
                                    return this.options.textDecoration = t, this;
                                }
                            }, {
                                key: "textAlign",
                                value: function(t) {
                                    return this.options.textAlign = t, this;
                                }
                            }, {
                                key: "stroke",
                                value: function(t) {
                                    return this.options.stroke = t, this;
                                }
                            }, {
                                key: "letterSpacing",
                                value: function(t) {
                                    return this.options.letterSpacing = t, this;
                                }
                            }, {
                                key: "lineSpacing",
                                value: function(t) {
                                    return this.options.lineSpacing = t, this;
                                }
                            }, {
                                key: "fontHinting",
                                value: function(t) {
                                    return this.options.fontHinting = t, this;
                                }
                            }, {
                                key: "fontAntialiasing",
                                value: function(t) {
                                    return this.options.fontAntialiasing = t, this;
                                }
                            }, {
                                key: "text",
                                value: function(t) {
                                    return this.options.text = t, this;
                                }
                            }, {
                                key: "textStyle",
                                value: function(t) {
                                    return this.options.textStyle = t, this;
                                }
                            }, {
                                key: "toString",
                                value: function() {
                                    var t, e, r, n, o, i, a, u, c, s;
                                    if (u = this.textStyleIdentifier(), null != this.options.publicId && (n = this.getFullPublicId()), 
                                    null != this.options.text) {
                                        if (e = !isEmpty(n), r = !isEmpty(u), e && r || !e && !r) throw "Must supply either style parameters or a public_id when providing text parameter in a text overlay/underlay, but not both!";
                                        for (o = /\$\([a-zA-Z]\w*\)/g, a = 0, s = smartEscape(this.options.text, /[,\/]/g), 
                                        c = ""; i = o.exec(s); ) c += smartEscape(s.slice(a, i.index)), c += i[0], a = i.index + i[0].length;
                                        c += smartEscape(s.slice(a));
                                    }
                                    return t = [ this.options.resourceType, u, n, c ], d()(t).join(":");
                                }
                            }, {
                                key: "textStyleIdentifier",
                                value: function() {
                                    if (!isEmpty(this.options.textStyle)) return this.options.textStyle;
                                    var t;
                                    if (t = [], "normal" !== this.options.fontWeight && t.push(this.options.fontWeight), 
                                    "normal" !== this.options.fontStyle && t.push(this.options.fontStyle), "none" !== this.options.textDecoration && t.push(this.options.textDecoration), 
                                    t.push(this.options.textAlign), "none" !== this.options.stroke && t.push(this.options.stroke), 
                                    isEmpty(this.options.letterSpacing) && !isNumberLike(this.options.letterSpacing) || t.push("letter_spacing_" + this.options.letterSpacing), 
                                    isEmpty(this.options.lineSpacing) && !isNumberLike(this.options.lineSpacing) || t.push("line_spacing_" + this.options.lineSpacing), 
                                    isEmpty(this.options.fontAntialiasing) || t.push("antialias_" + this.options.fontAntialiasing), 
                                    isEmpty(this.options.fontHinting) || t.push("hinting_" + this.options.fontHinting), 
                                    !isEmpty(d()(t))) {
                                        if (isEmpty(this.options.fontFamily)) throw "Must supply fontFamily. ".concat(t);
                                        if (isEmpty(this.options.fontSize) && !isNumberLike(this.options.fontSize)) throw "Must supply fontSize.";
                                    }
                                    return t.unshift(this.options.fontFamily, this.options.fontSize), t = d()(t).join("_");
                                }
                            } ]) && textlayer_defineProperties(e.prototype, r), n && textlayer_defineProperties(e, n), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), e;
                            var e, r, n;
                        }(vt);
                        function subtitleslayer_typeof(t) {
                            return subtitleslayer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, subtitleslayer_typeof(t);
                        }
                        function subtitleslayer_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, subtitleslayer_toPropertyKey(n.key), n);
                            }
                        }
                        function subtitleslayer_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != subtitleslayer_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != subtitleslayer_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == subtitleslayer_typeof(e) ? e : e + "";
                        }
                        function subtitleslayer_callSuper(t, e, r) {
                            return e = subtitleslayer_getPrototypeOf(e), function(t, e) {
                                if (e && ("object" === subtitleslayer_typeof(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                }(t);
                            }(t, subtitleslayer_isNativeReflectConstruct() ? Reflect.construct(e, r || [], subtitleslayer_getPrototypeOf(t).constructor) : e.apply(t, r));
                        }
                        function subtitleslayer_isNativeReflectConstruct() {
                            try {
                                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                            } catch (t) {}
                            return (subtitleslayer_isNativeReflectConstruct = function() {
                                return !!t;
                            })();
                        }
                        function subtitleslayer_getPrototypeOf(t) {
                            return subtitleslayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t);
                            }, subtitleslayer_getPrototypeOf(t);
                        }
                        function subtitleslayer_setPrototypeOf(t, e) {
                            return subtitleslayer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                return t.__proto__ = e, t;
                            }, subtitleslayer_setPrototypeOf(t, e);
                        }
                        var _t = function(t) {
                            function SubtitlesLayer(t) {
                                var e;
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, SubtitlesLayer), (e = subtitleslayer_callSuper(this, SubtitlesLayer, [ t ])).options.resourceType = "subtitles", 
                                e;
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && subtitleslayer_setPrototypeOf(t, e);
                            }(SubtitlesLayer, t), e = SubtitlesLayer, r && subtitleslayer_defineProperties(e.prototype, r), 
                            n && subtitleslayer_defineProperties(e, n), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), e;
                            var e, r, n;
                        }(ht);
                        function fetchlayer_typeof(t) {
                            return fetchlayer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, fetchlayer_typeof(t);
                        }
                        function fetchlayer_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, fetchlayer_toPropertyKey(n.key), n);
                            }
                        }
                        function fetchlayer_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != fetchlayer_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != fetchlayer_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == fetchlayer_typeof(e) ? e : e + "";
                        }
                        function fetchlayer_callSuper(t, e, r) {
                            return e = fetchlayer_getPrototypeOf(e), function(t, e) {
                                if (e && ("object" === fetchlayer_typeof(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                }(t);
                            }(t, fetchlayer_isNativeReflectConstruct() ? Reflect.construct(e, r || [], fetchlayer_getPrototypeOf(t).constructor) : e.apply(t, r));
                        }
                        function fetchlayer_isNativeReflectConstruct() {
                            try {
                                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                            } catch (t) {}
                            return (fetchlayer_isNativeReflectConstruct = function() {
                                return !!t;
                            })();
                        }
                        function fetchlayer_getPrototypeOf(t) {
                            return fetchlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t);
                            }, fetchlayer_getPrototypeOf(t);
                        }
                        function fetchlayer_setPrototypeOf(t, e) {
                            return fetchlayer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                return t.__proto__ = e, t;
                            }, fetchlayer_setPrototypeOf(t, e);
                        }
                        var mt = function(t) {
                            function FetchLayer(t) {
                                var e;
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, FetchLayer), e = fetchlayer_callSuper(this, FetchLayer, [ t ]), E()(t) ? e.options.url = t : (null != t ? t.url : void 0) && (e.options.url = t.url), 
                                e;
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && fetchlayer_setPrototypeOf(t, e);
                            }(FetchLayer, t), e = FetchLayer, (r = [ {
                                key: "url",
                                value: function(t) {
                                    return this.options.url = t, this;
                                }
                            }, {
                                key: "toString",
                                value: function() {
                                    return "fetch:".concat(base64EncodeURL(this.options.url));
                                }
                            } ]) && fetchlayer_defineProperties(e.prototype, r), n && fetchlayer_defineProperties(e, n), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), e;
                            var e, r, n;
                        }(vt);
                        function parameters_callSuper(t, e, r) {
                            return e = parameters_getPrototypeOf(e), function(t, e) {
                                if (e && ("object" === parameters_typeof(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                }(t);
                            }(t, parameters_isNativeReflectConstruct() ? Reflect.construct(e, r || [], parameters_getPrototypeOf(t).constructor) : e.apply(t, r));
                        }
                        function parameters_isNativeReflectConstruct() {
                            try {
                                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                            } catch (t) {}
                            return (parameters_isNativeReflectConstruct = function() {
                                return !!t;
                            })();
                        }
                        function _get() {
                            return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                                var n = function(t, e) {
                                    for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = parameters_getPrototypeOf(t)); ) ;
                                    return t;
                                }(t, e);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, e);
                                    return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                }
                            }, _get.apply(this, arguments);
                        }
                        function parameters_getPrototypeOf(t) {
                            return parameters_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t);
                            }, parameters_getPrototypeOf(t);
                        }
                        function parameters_inherits(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && parameters_setPrototypeOf(t, e);
                        }
                        function parameters_setPrototypeOf(t, e) {
                            return parameters_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                return t.__proto__ = e, t;
                            }, parameters_setPrototypeOf(t, e);
                        }
                        function parameters_typeof(t) {
                            return parameters_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, parameters_typeof(t);
                        }
                        function parameters_classCallCheck(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        }
                        function parameters_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, parameters_toPropertyKey(n.key), n);
                            }
                        }
                        function parameters_createClass(t, e, r) {
                            return e && parameters_defineProperties(t.prototype, e), r && parameters_defineProperties(t, r), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), t;
                        }
                        function parameters_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != parameters_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != parameters_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == parameters_typeof(e) ? e : e + "";
                        }
                        var bt = function() {
                            return parameters_createClass((function Param(t, e) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.a;
                                parameters_classCallCheck(this, Param), this.name = t, this.shortName = e, this.process = r;
                            }), [ {
                                key: "set",
                                value: function(t) {
                                    return this.origValue = t, this;
                                }
                            }, {
                                key: "serialize",
                                value: function() {
                                    var t, e;
                                    return t = this.value(), e = j()(t) || x()(t) || E()(t) ? !isEmpty(t) : null != t, 
                                    null != this.shortName && e ? "".concat(this.shortName, "_").concat(t) : "";
                                }
                            }, {
                                key: "value",
                                value: function() {
                                    return this.process(this.origValue);
                                }
                            } ], [ {
                                key: "norm_color",
                                value: function(t) {
                                    return null != t ? t.replace(/^#/, "rgb:") : void 0;
                                }
                            }, {
                                key: "build_array",
                                value: function(t) {
                                    return null == t ? [] : j()(t) ? t : [ t ];
                                }
                            }, {
                                key: "process_video_params",
                                value: function(t) {
                                    var e;
                                    switch (t.constructor) {
                                      case Object:
                                        return e = "", "codec" in t && (e = t.codec, "profile" in t && (e += ":" + t.profile, 
                                        "level" in t && (e += ":" + t.level, "b_frames" in t && !1 === t.b_frames && (e += ":bframes_no")))), 
                                        e;

                                      case String:
                                        return t;

                                      default:
                                        return null;
                                    }
                                }
                            } ]);
                        }(), gt = function(t) {
                            function ArrayParam(t, e) {
                                var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".", o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
                                return parameters_classCallCheck(this, ArrayParam), (r = parameters_callSuper(this, ArrayParam, [ t, e, o ])).sep = n, 
                                r;
                            }
                            return parameters_inherits(ArrayParam, t), parameters_createClass(ArrayParam, [ {
                                key: "serialize",
                                value: function() {
                                    if (null != this.shortName) {
                                        var t = this.value();
                                        if (isEmpty(t)) return "";
                                        if (E()(t)) return "".concat(this.shortName, "_").concat(t);
                                        var e = t.map((function(t) {
                                            return B()(t.serialize) ? t.serialize() : t;
                                        })).join(this.sep);
                                        return "".concat(this.shortName, "_").concat(e);
                                    }
                                    return "";
                                }
                            }, {
                                key: "value",
                                value: function() {
                                    var t = this;
                                    return j()(this.origValue) ? this.origValue.map((function(e) {
                                        return t.process(e);
                                    })) : this.process(this.origValue);
                                }
                            }, {
                                key: "set",
                                value: function(t) {
                                    return null == t || j()(t) ? _get(parameters_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, t) : _get(parameters_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, [ t ]);
                                }
                            } ]);
                        }(bt), wt = function(t) {
                            function TransformationParam(t) {
                                var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "t", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".", o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
                                return parameters_classCallCheck(this, TransformationParam), (e = parameters_callSuper(this, TransformationParam, [ t, r, o ])).sep = n, 
                                e;
                            }
                            return parameters_inherits(TransformationParam, t), parameters_createClass(TransformationParam, [ {
                                key: "serialize",
                                value: function() {
                                    var t = this, e = "", r = this.value();
                                    if (isEmpty(r)) return e;
                                    if (baseutil_allStrings(r)) {
                                        var n = r.join(this.sep);
                                        isEmpty(n) || (e = "".concat(this.shortName, "_").concat(n));
                                    } else e = r.map((function(e) {
                                        return E()(e) && !isEmpty(e) ? "".concat(t.shortName, "_").concat(e) : B()(e.serialize) ? e.serialize() : x()(e) && !isEmpty(e) ? new Et(e).serialize() : void 0;
                                    })).filter((function(t) {
                                        return t;
                                    }));
                                    return e;
                                }
                            }, {
                                key: "set",
                                value: function(t) {
                                    return this.origValue = t, j()(this.origValue) ? _get(parameters_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, this.origValue) : _get(parameters_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, [ this.origValue ]);
                                }
                            } ]);
                        }(bt), Ot = function(t) {
                            function RangeParam(t, e) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RangeParam.norm_range_value;
                                return parameters_classCallCheck(this, RangeParam), parameters_callSuper(this, RangeParam, [ t, e, r ]);
                            }
                            return parameters_inherits(RangeParam, t), parameters_createClass(RangeParam, null, [ {
                                key: "norm_range_value",
                                value: function(t) {
                                    var e = String(t).match(new RegExp("^(([0-9]*)\\.([0-9]+)|([0-9]+))([%pP])?$"));
                                    if (e) {
                                        var r = null != e[5] ? "p" : "";
                                        t = (e[1] || e[4]) + r;
                                    }
                                    return lt.normalize(t);
                                }
                            } ]);
                        }(bt), Pt = function(t) {
                            function RawParam(t, e) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.a;
                                return parameters_classCallCheck(this, RawParam), parameters_callSuper(this, RawParam, [ t, e, r ]);
                            }
                            return parameters_inherits(RawParam, t), parameters_createClass(RawParam, [ {
                                key: "serialize",
                                value: function() {
                                    return this.value();
                                }
                            } ]);
                        }(bt), jt = function(t) {
                            function LayerParam() {
                                return parameters_classCallCheck(this, LayerParam), parameters_callSuper(this, LayerParam, arguments);
                            }
                            return parameters_inherits(LayerParam, t), parameters_createClass(LayerParam, [ {
                                key: "value",
                                value: function() {
                                    if (null == this.origValue) return "";
                                    var t;
                                    if (this.origValue instanceof vt) t = this.origValue; else if (x()(this.origValue)) {
                                        var e = withCamelCaseKeys(this.origValue);
                                        t = "text" === e.resourceType || null != e.text ? new ht(e) : "subtitles" === e.resourceType ? new _t(e) : "fetch" === e.resourceType || null != e.url ? new mt(e) : new vt(e);
                                    } else t = E()(this.origValue) ? /^fetch:.+/.test(this.origValue) ? new mt(this.origValue.substr(6)) : this.origValue : "";
                                    return t.toString();
                                }
                            } ], [ {
                                key: "textStyle",
                                value: function(t) {
                                    return new ht(t).textStyleIdentifier();
                                }
                            } ]);
                        }(bt);
                        function transformation_callSuper(t, e, r) {
                            return e = transformation_getPrototypeOf(e), function(t, e) {
                                if (e && ("object" === transformation_typeof(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                }(t);
                            }(t, transformation_isNativeReflectConstruct() ? Reflect.construct(e, r || [], transformation_getPrototypeOf(t).constructor) : e.apply(t, r));
                        }
                        function transformation_isNativeReflectConstruct() {
                            try {
                                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                            } catch (t) {}
                            return (transformation_isNativeReflectConstruct = function() {
                                return !!t;
                            })();
                        }
                        function transformation_getPrototypeOf(t) {
                            return transformation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t);
                            }, transformation_getPrototypeOf(t);
                        }
                        function transformation_setPrototypeOf(t, e) {
                            return transformation_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                return t.__proto__ = e, t;
                            }, transformation_setPrototypeOf(t, e);
                        }
                        function transformation_slicedToArray(t, e) {
                            return function(t) {
                                if (Array.isArray(t)) return t;
                            }(t) || function(t, e) {
                                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (null != r) {
                                    var n, o, i, a, u = [], c = !0, s = !1;
                                    try {
                                        if (i = (r = r.call(t)).next, 0 === e) {
                                            if (Object(r) !== r) return;
                                            c = !1;
                                        } else for (;!(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = !0) ;
                                    } catch (t) {
                                        s = !0, o = t;
                                    } finally {
                                        try {
                                            if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return;
                                        } finally {
                                            if (s) throw o;
                                        }
                                    }
                                    return u;
                                }
                            }(t, e) || function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return transformation_arrayLikeToArray(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? transformation_arrayLikeToArray(t, e) : void 0;
                                }
                            }(t, e) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }();
                        }
                        function transformation_arrayLikeToArray(t, e) {
                            (null == e || e > t.length) && (e = t.length);
                            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                            return n;
                        }
                        function transformation_typeof(t) {
                            return transformation_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, transformation_typeof(t);
                        }
                        function transformation_classCallCheck(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        }
                        function transformation_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, transformation_toPropertyKey(n.key), n);
                            }
                        }
                        function transformation_createClass(t, e, r) {
                            return e && transformation_defineProperties(t.prototype, e), r && transformation_defineProperties(t, r), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), t;
                        }
                        function transformation_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != transformation_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != transformation_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == transformation_typeof(e) ? e : e + "";
                        }
                        function assignNotNull(t) {
                            for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                            return r.forEach((function(e) {
                                Object.keys(e).forEach((function(r) {
                                    null != e[r] && (t[r] = e[r]);
                                }));
                            })), t;
                        }
                        var kt = function() {
                            function TransformationBase(t) {
                                var e, r;
                                transformation_classCallCheck(this, TransformationBase), e = void 0, r = {}, this.toOptions = function(t) {
                                    var e = {};
                                    if (null == t && (t = !0), Object.keys(r).forEach((function(t) {
                                        return e[t] = r[t].origValue;
                                    })), assignNotNull(e, this.otherOptions), t && !isEmpty(this.chained)) {
                                        var n = this.chained.map((function(t) {
                                            return t.toOptions();
                                        }));
                                        n.push(e), assignNotNull(e = {}, this.otherOptions), e.transformation = n;
                                    }
                                    return e;
                                }, this.setParent = function(t) {
                                    return e = t, null != t && this.fromOptions("function" == typeof t.toOptions ? t.toOptions() : void 0), 
                                    this;
                                }, this.getParent = function() {
                                    return e;
                                }, this.param = function(t, e, n, o, i) {
                                    return null == i && (i = B()(o) ? o : g.a), r[e] = new bt(e, n, i).set(t), this;
                                }, this.rawParam = function(t, e, n, o, i) {
                                    return i = lastArgCallback(arguments), r[e] = new Pt(e, n, i).set(t), this;
                                }, this.rangeParam = function(t, e, n, o, i) {
                                    return i = lastArgCallback(arguments), r[e] = new Ot(e, n, i).set(t), this;
                                }, this.arrayParam = function(t, e, n) {
                                    var o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ":";
                                    return o = lastArgCallback(arguments), r[e] = new gt(e, n, i, o).set(t), this;
                                }, this.transformationParam = function(t, e, n) {
                                    var o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".";
                                    return o = lastArgCallback(arguments), r[e] = new wt(e, n, i, o).set(t), this;
                                }, this.layerParam = function(t, e, n) {
                                    return r[e] = new jt(e, n).set(t), this;
                                }, this.getValue = function(t) {
                                    var e = r[t] && r[t].value();
                                    return null != e ? e : this.otherOptions[t];
                                }, this.get = function(t) {
                                    return r[t];
                                }, this.remove = function(t) {
                                    var e;
                                    switch (!1) {
                                      case null == r[t]:
                                        return e = r[t], delete r[t], e.origValue;

                                      case null == this.otherOptions[t]:
                                        return e = this.otherOptions[t], delete this.otherOptions[t], e;

                                      default:
                                        return null;
                                    }
                                }, this.keys = function() {
                                    var t;
                                    return function() {
                                        var e;
                                        for (t in e = [], r) null != t && e.push(t.match(xt) ? t : snakeCase(t));
                                        return e;
                                    }().sort();
                                }, this.toPlainObject = function() {
                                    var t, e, n;
                                    for (e in t = {}, r) t[e] = r[e].value(), x()(t[e]) && (t[e] = p()(t[e]));
                                    return isEmpty(this.chained) || ((n = this.chained.map((function(t) {
                                        return t.toPlainObject();
                                    }))).push(t), t = {
                                        transformation: n
                                    }), t;
                                }, this.chain = function() {
                                    var t;
                                    return 0 !== Object.getOwnPropertyNames(r).length && (t = new this.constructor(this.toOptions(!1)), 
                                    this.resetTransformations(), this.chained.push(t)), this;
                                }, this.resetTransformations = function() {
                                    return r = {}, this;
                                }, this.otherOptions = {}, this.chained = [], this.fromOptions(t);
                            }
                            return transformation_createClass(TransformationBase, [ {
                                key: "fromOptions",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    if (t instanceof TransformationBase) this.fromTransformation(t); else for (var e in (E()(t) || j()(t)) && (t = {
                                        transformation: t
                                    }), (t = p()(t, (function(t) {
                                        if (t instanceof TransformationBase || t instanceof Layer) return new t.clone;
                                    }))).if && (this.set("if", t.if), delete t.if), t) {
                                        var r = t[e];
                                        null != r && (e.match(xt) ? "$attr" !== e && this.set("variable", e, r) : this.set(e, r));
                                    }
                                    return this;
                                }
                            }, {
                                key: "fromTransformation",
                                value: function(t) {
                                    var e = this;
                                    return t instanceof TransformationBase && t.keys().forEach((function(r) {
                                        return e.set(r, t.get(r).origValue);
                                    })), this;
                                }
                            }, {
                                key: "set",
                                value: function(t) {
                                    var e;
                                    e = camelCase(t);
                                    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                                    return O()(St.methods, e) ? this[e].apply(this, n) : this.otherOptions[t] = n[0], 
                                    this;
                                }
                            }, {
                                key: "hasLayer",
                                value: function() {
                                    return this.getValue("overlay") || this.getValue("underlay");
                                }
                            }, {
                                key: "serialize",
                                value: function() {
                                    var t, e, r, n, o, i, a, u, c, s, l, f, p, y, v, _, m;
                                    for (s = this.chained.map((function(t) {
                                        return t.serialize();
                                    })), n = this.keys(), y = null != (o = this.get("transformation")) ? o.serialize() : void 0, 
                                    t = null != (i = this.get("if")) ? i.serialize() : void 0, _ = function(t) {
                                        var e, r, n, o, i;
                                        if (j()(t)) {
                                            for (o = [], e = 0, r = t.length; e < r; e++) {
                                                var a = transformation_slicedToArray(t[e], 2);
                                                n = a[0], i = a[1], o.push("".concat(n, "_").concat(lt.normalize(i)));
                                            }
                                            return o;
                                        }
                                        return t;
                                    }(null != (a = this.get("variables")) ? a.value() : void 0), n = h()(n, [ "transformation", "if", "variables" ]), 
                                    m = [], f = [], e = 0, r = n.length; e < r; e++) (l = n[e]).match(xt) ? m.push(l + "_" + lt.normalize(null != (u = this.get(l)) ? u.value() : void 0)) : f.push(null != (c = this.get(l)) ? c.serialize() : void 0);
                                    switch (!1) {
                                      case !E()(y):
                                        f.push(y);
                                        break;

                                      case !j()(y):
                                        s = s.concat(y);
                                    }
                                    return f = function() {
                                        var t, e, r;
                                        for (r = [], t = 0, e = f.length; t < e; t++) v = f[t], (j()(v) && !isEmpty(v) || !j()(v) && v) && r.push(v);
                                        return r;
                                    }(), f = m.sort().concat(_).concat(f.sort()), "if_end" === t ? f.push(t) : isEmpty(t) || f.unshift(t), 
                                    isEmpty(p = d()(f).join(this.param_separator)) || s.push(p), d()(s).join(this.trans_separator);
                                }
                            }, {
                                key: "toHtmlAttributes",
                                value: function() {
                                    var t, e, r, n, o, i, a, u, c = this;
                                    return r = {}, Object.keys(this.otherOptions).forEach((function(e) {
                                        i = c.otherOptions[e], u = snakeCase(e), O()(St.PARAM_NAMES, u) || O()(Z, u) || (t = /^html_/.test(e) ? e.slice(5) : e, 
                                        r[t] = i);
                                    })), this.keys().forEach((function(t) {
                                        /^html_/.test(t) && (r[camelCase(t.slice(5))] = c.getValue(t));
                                    })), this.hasLayer() || this.getValue("angle") || O()([ "fit", "limit", "lfill" ], this.getValue("crop")) || (a = null != (n = this.get("width")) ? n.origValue : void 0, 
                                    e = null != (o = this.get("height")) ? o.origValue : void 0, parseFloat(a) >= 1 && null == r.width && (r.width = a), 
                                    parseFloat(e) >= 1 && null == r.height && (r.height = e)), r;
                                }
                            }, {
                                key: "toHtml",
                                value: function() {
                                    var t;
                                    return null != (t = this.getParent()) && "function" == typeof t.toHtml ? t.toHtml() : void 0;
                                }
                            }, {
                                key: "toString",
                                value: function() {
                                    return this.serialize();
                                }
                            }, {
                                key: "clone",
                                value: function() {
                                    return new this.constructor(this.toOptions(!0));
                                }
                            } ], [ {
                                key: "listNames",
                                value: function() {
                                    return St.methods;
                                }
                            }, {
                                key: "isValidParamName",
                                value: function(t) {
                                    return St.methods.indexOf(camelCase(t)) >= 0;
                                }
                            } ]);
                        }(), xt = /^\$[a-zA-Z0-9]+$/;
                        function lastArgCallback(t) {
                            var e;
                            return e = null != t ? t[t.length - 1] : void 0, B()(e) ? e : void 0;
                        }
                        function processCustomFunction(t) {
                            var e = t.function_type, r = t.source;
                            return "remote" === e ? [ e, btoa(r) ].join(":") : "wasm" === e ? [ e, r ].join(":") : void 0;
                        }
                        kt.prototype.trans_separator = "/", kt.prototype.param_separator = ",";
                        var St = function(t) {
                            function Transformation(t) {
                                return transformation_classCallCheck(this, Transformation), transformation_callSuper(this, Transformation, [ t ]);
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && transformation_setPrototypeOf(t, e);
                            }(Transformation, t), transformation_createClass(Transformation, [ {
                                key: "angle",
                                value: function(t) {
                                    return this.arrayParam(t, "angle", "a", ".", lt.normalize);
                                }
                            }, {
                                key: "audioCodec",
                                value: function(t) {
                                    return this.param(t, "audio_codec", "ac");
                                }
                            }, {
                                key: "audioFrequency",
                                value: function(t) {
                                    return this.param(t, "audio_frequency", "af");
                                }
                            }, {
                                key: "aspectRatio",
                                value: function(t) {
                                    return this.param(t, "aspect_ratio", "ar", lt.normalize);
                                }
                            }, {
                                key: "background",
                                value: function(t) {
                                    return this.param(t, "background", "b", bt.norm_color);
                                }
                            }, {
                                key: "bitRate",
                                value: function(t) {
                                    return this.param(t, "bit_rate", "br");
                                }
                            }, {
                                key: "border",
                                value: function(t) {
                                    return this.param(t, "border", "bo", (function(t) {
                                        return x()(t) ? (t = l()({}, {
                                            color: "black",
                                            width: 2
                                        }, t), "".concat(t.width, "px_solid_").concat(bt.norm_color(t.color))) : t;
                                    }));
                                }
                            }, {
                                key: "color",
                                value: function(t) {
                                    return this.param(t, "color", "co", bt.norm_color);
                                }
                            }, {
                                key: "colorSpace",
                                value: function(t) {
                                    return this.param(t, "color_space", "cs");
                                }
                            }, {
                                key: "crop",
                                value: function(t) {
                                    return this.param(t, "crop", "c");
                                }
                            }, {
                                key: "customFunction",
                                value: function(t) {
                                    return this.param(t, "custom_function", "fn", (function() {
                                        return processCustomFunction(t);
                                    }));
                                }
                            }, {
                                key: "customPreFunction",
                                value: function(t) {
                                    if (!this.get("custom_function")) return this.rawParam(t, "custom_function", "", (function() {
                                        return (t = processCustomFunction(t)) ? "fn_pre:".concat(t) : t;
                                    }));
                                }
                            }, {
                                key: "defaultImage",
                                value: function(t) {
                                    return this.param(t, "default_image", "d");
                                }
                            }, {
                                key: "delay",
                                value: function(t) {
                                    return this.param(t, "delay", "dl");
                                }
                            }, {
                                key: "density",
                                value: function(t) {
                                    return this.param(t, "density", "dn");
                                }
                            }, {
                                key: "duration",
                                value: function(t) {
                                    return this.rangeParam(t, "duration", "du");
                                }
                            }, {
                                key: "dpr",
                                value: function(t) {
                                    return this.param(t, "dpr", "dpr", (function(t) {
                                        return (null != (t = t.toString()) ? t.match(/^\d+$/) : void 0) ? t + ".0" : lt.normalize(t);
                                    }));
                                }
                            }, {
                                key: "effect",
                                value: function(t) {
                                    return this.arrayParam(t, "effect", "e", ":", lt.normalize);
                                }
                            }, {
                                key: "else",
                                value: function() {
                                    return this.if("else");
                                }
                            }, {
                                key: "endIf",
                                value: function() {
                                    return this.if("end");
                                }
                            }, {
                                key: "endOffset",
                                value: function(t) {
                                    return this.rangeParam(t, "end_offset", "eo");
                                }
                            }, {
                                key: "fallbackContent",
                                value: function(t) {
                                    return this.param(t, "fallback_content");
                                }
                            }, {
                                key: "fetchFormat",
                                value: function(t) {
                                    return this.param(t, "fetch_format", "f");
                                }
                            }, {
                                key: "format",
                                value: function(t) {
                                    return this.param(t, "format");
                                }
                            }, {
                                key: "flags",
                                value: function(t) {
                                    return this.arrayParam(t, "flags", "fl", ".");
                                }
                            }, {
                                key: "gravity",
                                value: function(t) {
                                    return this.param(t, "gravity", "g");
                                }
                            }, {
                                key: "fps",
                                value: function(t) {
                                    return this.param(t, "fps", "fps", (function(t) {
                                        return E()(t) ? t : j()(t) ? t.join("-") : t;
                                    }));
                                }
                            }, {
                                key: "height",
                                value: function(t) {
                                    var e = this;
                                    return this.param(t, "height", "h", (function() {
                                        return e.getValue("crop") || e.getValue("overlay") || e.getValue("underlay") ? lt.normalize(t) : null;
                                    }));
                                }
                            }, {
                                key: "htmlHeight",
                                value: function(t) {
                                    return this.param(t, "html_height");
                                }
                            }, {
                                key: "htmlWidth",
                                value: function(t) {
                                    return this.param(t, "html_width");
                                }
                            }, {
                                key: "if",
                                value: function() {
                                    var t, e, r, n, o, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                                    switch (i) {
                                      case "else":
                                        return this.chain(), this.param(i, "if", "if");

                                      case "end":
                                        for (this.chain(), t = r = this.chained.length - 1; r >= 0 && "end" !== (e = this.chained[t].getValue("if")) && (null == e || (n = Transformation.new().if(e), 
                                        this.chained[t].remove("if"), o = this.chained[t], this.chained[t] = Transformation.new().transformation([ n, o ]), 
                                        "else" === e)); t = r += -1) ;
                                        return this.param(i, "if", "if");

                                      case "":
                                        return ft.new().setParent(this);

                                      default:
                                        return this.param(i, "if", "if", (function(t) {
                                            return ft.new(t).toString();
                                        }));
                                    }
                                }
                            }, {
                                key: "keyframeInterval",
                                value: function(t) {
                                    return this.param(t, "keyframe_interval", "ki");
                                }
                            }, {
                                key: "ocr",
                                value: function(t) {
                                    return this.param(t, "ocr", "ocr");
                                }
                            }, {
                                key: "offset",
                                value: function(t) {
                                    var e, r, n = transformation_slicedToArray(B()(null != t ? t.split : void 0) ? t.split("..") : j()(t) ? t : [ null, null ], 2);
                                    if (r = n[0], e = n[1], null != r && this.startOffset(r), null != e) return this.endOffset(e);
                                }
                            }, {
                                key: "opacity",
                                value: function(t) {
                                    return this.param(t, "opacity", "o", lt.normalize);
                                }
                            }, {
                                key: "overlay",
                                value: function(t) {
                                    return this.layerParam(t, "overlay", "l");
                                }
                            }, {
                                key: "page",
                                value: function(t) {
                                    return this.param(t, "page", "pg");
                                }
                            }, {
                                key: "poster",
                                value: function(t) {
                                    return this.param(t, "poster");
                                }
                            }, {
                                key: "prefix",
                                value: function(t) {
                                    return this.param(t, "prefix", "p");
                                }
                            }, {
                                key: "quality",
                                value: function(t) {
                                    return this.param(t, "quality", "q", lt.normalize);
                                }
                            }, {
                                key: "radius",
                                value: function(t) {
                                    return this.arrayParam(t, "radius", "r", ":", lt.normalize);
                                }
                            }, {
                                key: "rawTransformation",
                                value: function(t) {
                                    return this.rawParam(t, "raw_transformation");
                                }
                            }, {
                                key: "size",
                                value: function(t) {
                                    var e, r;
                                    if (B()(null != t ? t.split : void 0)) {
                                        var n = transformation_slicedToArray(t.split("x"), 2);
                                        return r = n[0], e = n[1], this.width(r), this.height(e);
                                    }
                                }
                            }, {
                                key: "sourceTypes",
                                value: function(t) {
                                    return this.param(t, "source_types");
                                }
                            }, {
                                key: "sourceTransformation",
                                value: function(t) {
                                    return this.param(t, "source_transformation");
                                }
                            }, {
                                key: "startOffset",
                                value: function(t) {
                                    return this.rangeParam(t, "start_offset", "so");
                                }
                            }, {
                                key: "streamingProfile",
                                value: function(t) {
                                    return this.param(t, "streaming_profile", "sp");
                                }
                            }, {
                                key: "transformation",
                                value: function(t) {
                                    return this.transformationParam(t, "transformation", "t");
                                }
                            }, {
                                key: "underlay",
                                value: function(t) {
                                    return this.layerParam(t, "underlay", "u");
                                }
                            }, {
                                key: "variable",
                                value: function(t, e) {
                                    return this.param(e, t, t);
                                }
                            }, {
                                key: "variables",
                                value: function(t) {
                                    return this.arrayParam(t, "variables");
                                }
                            }, {
                                key: "videoCodec",
                                value: function(t) {
                                    return this.param(t, "video_codec", "vc", bt.process_video_params);
                                }
                            }, {
                                key: "videoSampling",
                                value: function(t) {
                                    return this.param(t, "video_sampling", "vs");
                                }
                            }, {
                                key: "width",
                                value: function(t) {
                                    var e = this;
                                    return this.param(t, "width", "w", (function() {
                                        return e.getValue("crop") || e.getValue("overlay") || e.getValue("underlay") ? lt.normalize(t) : null;
                                    }));
                                }
                            }, {
                                key: "x",
                                value: function(t) {
                                    return this.param(t, "x", "x", lt.normalize);
                                }
                            }, {
                                key: "y",
                                value: function(t) {
                                    return this.param(t, "y", "y", lt.normalize);
                                }
                            }, {
                                key: "zoom",
                                value: function(t) {
                                    return this.param(t, "zoom", "z", lt.normalize);
                                }
                            } ], [ {
                                key: "new",
                                value: function(t) {
                                    return new Transformation(t);
                                }
                            } ]);
                        }(kt);
                        St.methods = [ "angle", "audioCodec", "audioFrequency", "aspectRatio", "background", "bitRate", "border", "color", "colorSpace", "crop", "customFunction", "customPreFunction", "defaultImage", "delay", "density", "duration", "dpr", "effect", "else", "endIf", "endOffset", "fallbackContent", "fetchFormat", "format", "flags", "gravity", "fps", "height", "htmlHeight", "htmlWidth", "if", "keyframeInterval", "ocr", "offset", "opacity", "overlay", "page", "poster", "prefix", "quality", "radius", "rawTransformation", "size", "sourceTypes", "sourceTransformation", "startOffset", "streamingProfile", "transformation", "underlay", "variable", "variables", "videoCodec", "videoSampling", "width", "x", "y", "zoom" ], 
                        St.PARAM_NAMES = St.methods.map(snakeCase).concat(dt.CONFIG_PARAMS);
                        var Et = St;
                        function htmltag_typeof(t) {
                            return htmltag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, htmltag_typeof(t);
                        }
                        function htmltag_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, htmltag_toPropertyKey(n.key), n);
                            }
                        }
                        function htmltag_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != htmltag_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != htmltag_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == htmltag_typeof(e) ? e : e + "";
                        }
                        function htmltag_toAttribute(t, e) {
                            return e ? !0 === e ? t : "".concat(t, '="').concat(e, '"') : void 0;
                        }
                        function escapeQuotes(t) {
                            return E()(t) ? t.replace('"', "&#34;").replace("'", "&#39;") : t;
                        }
                        var Ct = function() {
                            return t = function HtmlTag(t, e, r) {
                                var n;
                                !function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, HtmlTag), this.name = t, this.publicId = e, null == r && (x()(e) ? (r = e, 
                                this.publicId = void 0) : r = {}), (n = new Et(r)).setParent(this), this.transformation = function() {
                                    return n;
                                };
                            }, r = [ {
                                key: "new",
                                value: function(t, e, r) {
                                    return new this(t, e, r);
                                }
                            }, {
                                key: "isResponsive",
                                value: function(t, e) {
                                    var r;
                                    return r = lodash_getData(t, "src-cache") || lodash_getData(t, "src"), lodash_hasClass(t, e) && /\bw_auto\b/.exec(r);
                                }
                            } ], (e = [ {
                                key: "htmlAttrs",
                                value: function(t) {
                                    var e, r;
                                    return function() {
                                        var n;
                                        for (e in n = [], t) (r = escapeQuotes(t[e])) && n.push(htmltag_toAttribute(e, r));
                                        return n;
                                    }().sort().join(" ");
                                }
                            }, {
                                key: "getOptions",
                                value: function() {
                                    return this.transformation().toOptions();
                                }
                            }, {
                                key: "getOption",
                                value: function(t) {
                                    return this.transformation().getValue(t);
                                }
                            }, {
                                key: "attributes",
                                value: function() {
                                    var t = this.transformation().toHtmlAttributes();
                                    return Object.keys(t).forEach((function(e) {
                                        x()(t[e]) && delete t[e];
                                    })), t.attributes && (A()(t, t.attributes), delete t.attributes), t;
                                }
                            }, {
                                key: "setAttr",
                                value: function(t, e) {
                                    return this.transformation().set("html_".concat(t), e), this;
                                }
                            }, {
                                key: "getAttr",
                                value: function(t) {
                                    return this.attributes()["html_".concat(t)] || this.attributes()[t];
                                }
                            }, {
                                key: "removeAttr",
                                value: function(t) {
                                    var e;
                                    return null != (e = this.transformation().remove("html_".concat(t))) ? e : this.transformation().remove(t);
                                }
                            }, {
                                key: "content",
                                value: function() {
                                    return "";
                                }
                            }, {
                                key: "openTag",
                                value: function() {
                                    var t = "<" + this.name, e = this.htmlAttrs(this.attributes());
                                    return e && e.length > 0 && (t += " " + e), t + ">";
                                }
                            }, {
                                key: "closeTag",
                                value: function() {
                                    return "</".concat(this.name, ">");
                                }
                            }, {
                                key: "toHtml",
                                value: function() {
                                    return this.openTag() + this.content() + this.closeTag();
                                }
                            }, {
                                key: "toDOM",
                                value: function() {
                                    var t, e, r, n;
                                    if (!B()("undefined" != typeof document && null !== document ? document.createElement : void 0)) throw "Can't create DOM if document is not present!";
                                    for (e in t = document.createElement(this.name), r = this.attributes()) n = r[e], 
                                    t.setAttribute(e, n);
                                    return t;
                                }
                            } ]) && htmltag_defineProperties(t.prototype, e), r && htmltag_defineProperties(t, r), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), t;
                            var t, e, r;
                        }(), At = [ "placeholder", "accessibility" ];
                        function _objectWithoutProperties(t, e) {
                            if (null == t) return {};
                            var r, n, o = function(t, e) {
                                if (null == t) return {};
                                var r, n, o = {}, i = Object.keys(t);
                                for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                                return o;
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(t);
                                for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
                            }
                            return o;
                        }
                        function isUrl(t) {
                            return !!t && !!t.match(/^https?:\//);
                        }
                        function handlePrefix(t, e) {
                            if (e.cloud_name && "/" === e.cloud_name[0]) return "/res" + e.cloud_name;
                            var r = "http://", n = "", o = "res", i = ".cloudinary.com", a = "/" + e.cloud_name;
                            return e.protocol && (r = e.protocol + "//"), e.private_cdn && (n = e.cloud_name + "-", 
                            a = ""), e.cdn_subdomain && (o = "res-" + function(t) {
                                return src_crc32(t) % 5 + 1;
                            }(t)), e.secure ? (r = "https://", !1 === e.secure_cdn_subdomain && (o = "res"), 
                            null != e.secure_distribution && e.secure_distribution !== z && e.secure_distribution !== M && (n = "", 
                            o = "", i = e.secure_distribution)) : e.cname && (r = "http://", n = "", o = e.cdn_subdomain ? "a" + (src_crc32(t) % 5 + 1) + "." : "", 
                            i = e.cname), [ r, n, o, i, a ].join("");
                        }
                        function encodePublicId(t) {
                            return encodeURIComponent(t).replace(/%3A/g, ":").replace(/%2F/g, "/");
                        }
                        function preparePublicId(t, e) {
                            var r, n, o = e.type;
                            return isUrl(t) || "fetch" !== o ? t : (r = t, n = document.location.protocol + "//" + document.location.host, 
                            "?" === r[0] ? n += document.location.pathname : "/" !== r[0] && (n += document.location.pathname.replace(/\/[^\/]*$/, "/")), 
                            n + r);
                        }
                        function urlString(t, e) {
                            if (isUrl(t) && ("upload" === e.type || "asset" === e.type)) return t;
                            var r = function(t, e) {
                                var r = e.force_version || void 0 === e.force_version, n = t.indexOf("/") < 0 || t.match(/^v[0-9]+/) || isUrl(t) || e.version;
                                return r && !n && (e.version = 1), e.version ? "v".concat(e.version) : "";
                            }(t, e), n = function(t) {
                                var e = t || {}, r = e.placeholder, n = e.accessibility, o = _objectWithoutProperties(e, At), i = new Et(o);
                                return n && X[n] && i.chain().effect(X[n]), r && ("predominant-color" === r && i.getValue("width") && i.getValue("height") && (r += "-pixel"), 
                                (Q[r] || Q.blur).forEach((function(t) {
                                    return i.chain().transformation(t);
                                }))), i.serialize();
                            }(e), o = handlePrefix(t, e), i = function(t) {
                                var e = t.signature, r = !e || 0 === e.indexOf("s--") && "--" === e.substr(-2);
                                return delete t.signature, r ? e : "s--".concat(e, "--");
                            }(e), a = function(t) {
                                var e, r = t.resource_type, n = void 0 === r ? "image" : r, o = t.type, i = void 0 === o ? "upload" : o, a = t.url_suffix, u = t.use_root_path, c = t.shorten, s = n;
                                if (x()(s) && (s = (e = s).resource_type, i = e.type, c = e.shorten), null == i && (i = "upload"), 
                                null != a && (s = K["".concat(s, "/").concat(i)], i = null, null == s)) throw new Error("URL Suffix only supported for ".concat(Object.keys(K).join(", ")));
                                if (u) {
                                    if (("image" !== s || "upload" !== i) && "images" !== s) throw new Error("Root path only supported for image/upload");
                                    s = null, i = null;
                                }
                                return c && "image" === s && "upload" === i && (s = "iu", i = null), [ s, i ].join("/");
                            }(e);
                            return t = function(t, e) {
                                if (isUrl(t)) t = encodePublicId(t); else {
                                    try {
                                        t = decodeURIComponent(t);
                                    } catch (t) {}
                                    t = encodePublicId(t), e.url_suffix && (t = t + "/" + e.url_suffix), e.format && (e.trust_public_id || (t = t.replace(/\.(jpg|png|gif|webp)$/, "")), 
                                    t = t + "." + e.format);
                                }
                                return t;
                            }(t, e), d()([ o, a, i, n, r, t ]).join("/").replace(/([^:])\/+/g, "$1/").replace(" ", "%20");
                        }
                        function url_url(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!t) return t;
                            e = function(t, e) {
                                return t instanceof Et && (t = t.toOptions()), "fetch" === (t = defaults({}, t, e, $)).type && (t.fetch_format = t.fetch_format || t.format), 
                                t;
                            }(e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}), t = preparePublicId(t, e);
                            var r = function(t) {
                                var e = t.cloud_name, r = t.url_suffix;
                                return e ? r && r.match(/[\.\/]/) ? "url_suffix should not include . or /" : void 0 : "Unknown cloud_name";
                            }(e);
                            if (r) throw r;
                            var n = urlString(t, e);
                            if (e.urlAnalytics) {
                                var o = getSDKAnalyticsSignature(getAnalyticsOptions(e)), i = "?";
                                n.indexOf("?") >= 0 && (i = "&"), n = "".concat(n).concat(i, "_a=").concat(o);
                            }
                            if (e.auth_token) {
                                var a = n.indexOf("?") >= 0 ? "&" : "?";
                                n = "".concat(n).concat(a, "__cld_token__=").concat(e.auth_token);
                            }
                            return n;
                        }
                        function generateBreakpoints_slicedToArray(t, e) {
                            return function(t) {
                                if (Array.isArray(t)) return t;
                            }(t) || function(t, e) {
                                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (null != r) {
                                    var n, o, i, a, u = [], c = !0, s = !1;
                                    try {
                                        if (i = (r = r.call(t)).next, 0 === e) {
                                            if (Object(r) !== r) return;
                                            c = !1;
                                        } else for (;!(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = !0) ;
                                    } catch (t) {
                                        s = !0, o = t;
                                    } finally {
                                        try {
                                            if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return;
                                        } finally {
                                            if (s) throw o;
                                        }
                                    }
                                    return u;
                                }
                            }(t, e) || function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return generateBreakpoints_arrayLikeToArray(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? generateBreakpoints_arrayLikeToArray(t, e) : void 0;
                                }
                            }(t, e) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }();
                        }
                        function generateBreakpoints_arrayLikeToArray(t, e) {
                            (null == e || e > t.length) && (e = t.length);
                            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                            return n;
                        }
                        var Rt = isEmpty;
                        function scaledUrl(t, e, r) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = extractUrlParams(n);
                            return r = r || n, o.raw_transformation = new Et([ A.a({}, r), {
                                crop: "scale",
                                width: e
                            } ]).toString(), url_url(t, o);
                        }
                        function getOrGenerateBreakpoints(t) {
                            return function(t) {
                                var e = t.breakpoints || [];
                                if (e.length) return e;
                                var r = generateBreakpoints_slicedToArray([ t.min_width, t.max_width, t.max_images ].map(Number), 3), n = r[0], o = r[1], i = r[2];
                                if ([ n, o, i ].some(isNaN)) throw "Either (min_width, max_width, max_images) or breakpoints must be provided to the image srcset attribute";
                                if (n > o) throw "min_width must be less than max_width";
                                if (i <= 0) throw "max_images must be a positive integer";
                                1 === i && (n = o);
                                for (var a = Math.ceil((o - n) / Math.max(i - 1, 1)), u = n; u < o; u += a) e.push(u);
                                return e.push(o), e;
                            }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
                        }
                        function generateImageResponsiveAttributes(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = {};
                            if (Rt(r)) return o;
                            var i = !e.sizes && !0 === r.sizes, a = !e.srcset;
                            if (a || i) {
                                var u = getOrGenerateBreakpoints(t, r, n);
                                if (a) {
                                    var c = function(t, e, r, n) {
                                        return patchFetchFormat(n = p.a(n)), e.map((function(e) {
                                            return "".concat(scaledUrl(t, e, r, n), " ").concat(e, "w");
                                        })).join(", ");
                                    }(t, u, r.transformation, n);
                                    Rt(c) || (o.srcset = c);
                                }
                                if (i) {
                                    var s = function(t) {
                                        return null == t ? "" : t.map((function(t) {
                                            return "(max-width: ".concat(t, "px) ").concat(t, "px");
                                        })).join(", ");
                                    }(u);
                                    Rt(s) || (o.sizes = s);
                                }
                            }
                            return o;
                        }
                        function imagetag_typeof(t) {
                            return imagetag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, imagetag_typeof(t);
                        }
                        function imagetag_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, imagetag_toPropertyKey(n.key), n);
                            }
                        }
                        function imagetag_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != imagetag_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != imagetag_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == imagetag_typeof(e) ? e : e + "";
                        }
                        function imagetag_callSuper(t, e, r) {
                            return e = imagetag_getPrototypeOf(e), function(t, e) {
                                if (e && ("object" === imagetag_typeof(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                }(t);
                            }(t, imagetag_isNativeReflectConstruct() ? Reflect.construct(e, r || [], imagetag_getPrototypeOf(t).constructor) : e.apply(t, r));
                        }
                        function imagetag_isNativeReflectConstruct() {
                            try {
                                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                            } catch (t) {}
                            return (imagetag_isNativeReflectConstruct = function() {
                                return !!t;
                            })();
                        }
                        function imagetag_get() {
                            return imagetag_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                                var n = function(t, e) {
                                    for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = imagetag_getPrototypeOf(t)); ) ;
                                    return t;
                                }(t, e);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, e);
                                    return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                }
                            }, imagetag_get.apply(this, arguments);
                        }
                        function imagetag_getPrototypeOf(t) {
                            return imagetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t);
                            }, imagetag_getPrototypeOf(t);
                        }
                        function imagetag_setPrototypeOf(t, e) {
                            return imagetag_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                return t.__proto__ = e, t;
                            }, imagetag_setPrototypeOf(t, e);
                        }
                        var Tt = function(t) {
                            function ImageTag(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, ImageTag), imagetag_callSuper(this, ImageTag, [ "img", t, e ]);
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && imagetag_setPrototypeOf(t, e);
                            }(ImageTag, t), e = ImageTag, (r = [ {
                                key: "closeTag",
                                value: function() {
                                    return "";
                                }
                            }, {
                                key: "attributes",
                                value: function() {
                                    var t, e, r;
                                    t = imagetag_get(imagetag_getPrototypeOf(ImageTag.prototype), "attributes", this).call(this) || {}, 
                                    e = this.getOptions();
                                    var n = this.getOption("attributes") || {}, o = this.getOption("srcset") || n.srcset, i = {};
                                    return E()(o) ? i.srcset = o : i = generateImageResponsiveAttributes(this.publicId, n, o, e), 
                                    isEmpty(i) || (delete t.width, delete t.height), A()(t, i), null == t[r = e.responsive && !e.client_hints ? "data-src" : "src"] && (t[r] = url_url(this.publicId, this.getOptions())), 
                                    t;
                                }
                            } ]) && imagetag_defineProperties(e.prototype, r), n && imagetag_defineProperties(e, n), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), e;
                            var e, r, n;
                        }(Ct), Dt = Tt;
                        function sourcetag_typeof(t) {
                            return sourcetag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, sourcetag_typeof(t);
                        }
                        function sourcetag_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, sourcetag_toPropertyKey(n.key), n);
                            }
                        }
                        function sourcetag_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != sourcetag_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != sourcetag_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == sourcetag_typeof(e) ? e : e + "";
                        }
                        function sourcetag_callSuper(t, e, r) {
                            return e = sourcetag_getPrototypeOf(e), function(t, e) {
                                if (e && ("object" === sourcetag_typeof(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                }(t);
                            }(t, sourcetag_isNativeReflectConstruct() ? Reflect.construct(e, r || [], sourcetag_getPrototypeOf(t).constructor) : e.apply(t, r));
                        }
                        function sourcetag_isNativeReflectConstruct() {
                            try {
                                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                            } catch (t) {}
                            return (sourcetag_isNativeReflectConstruct = function() {
                                return !!t;
                            })();
                        }
                        function sourcetag_get() {
                            return sourcetag_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                                var n = function(t, e) {
                                    for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = sourcetag_getPrototypeOf(t)); ) ;
                                    return t;
                                }(t, e);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, e);
                                    return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                }
                            }, sourcetag_get.apply(this, arguments);
                        }
                        function sourcetag_getPrototypeOf(t) {
                            return sourcetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t);
                            }, sourcetag_getPrototypeOf(t);
                        }
                        function sourcetag_setPrototypeOf(t, e) {
                            return sourcetag_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                return t.__proto__ = e, t;
                            }, sourcetag_setPrototypeOf(t, e);
                        }
                        var Bt = function(t) {
                            function SourceTag(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, SourceTag), sourcetag_callSuper(this, SourceTag, [ "source", t, e ]);
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && sourcetag_setPrototypeOf(t, e);
                            }(SourceTag, t), e = SourceTag, (r = [ {
                                key: "closeTag",
                                value: function() {
                                    return "";
                                }
                            }, {
                                key: "attributes",
                                value: function() {
                                    var t = this.getOption("srcset"), e = sourcetag_get(sourcetag_getPrototypeOf(SourceTag.prototype), "attributes", this).call(this) || {}, r = this.getOptions();
                                    return A()(e, generateImageResponsiveAttributes(this.publicId, e, t, r)), e.srcset || (e.srcset = url_url(this.publicId, r)), 
                                    !e.media && r.media && (e.media = function(t) {
                                        var e = [];
                                        return null != t && (null != t.min_width && e.push("(min-width: ".concat(t.min_width, "px)")), 
                                        null != t.max_width && e.push("(max-width: ".concat(t.max_width, "px)"))), e.join(" and ");
                                    }(r.media)), e;
                                }
                            } ]) && sourcetag_defineProperties(e.prototype, r), n && sourcetag_defineProperties(e, n), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), e;
                            var e, r, n;
                        }(Ct), Ft = Bt;
                        function picturetag_typeof(t) {
                            return picturetag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, picturetag_typeof(t);
                        }
                        function picturetag_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, picturetag_toPropertyKey(n.key), n);
                            }
                        }
                        function picturetag_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != picturetag_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != picturetag_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == picturetag_typeof(e) ? e : e + "";
                        }
                        function picturetag_callSuper(t, e, r) {
                            return e = picturetag_getPrototypeOf(e), function(t, e) {
                                if (e && ("object" === picturetag_typeof(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                }(t);
                            }(t, picturetag_isNativeReflectConstruct() ? Reflect.construct(e, r || [], picturetag_getPrototypeOf(t).constructor) : e.apply(t, r));
                        }
                        function picturetag_isNativeReflectConstruct() {
                            try {
                                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                            } catch (t) {}
                            return (picturetag_isNativeReflectConstruct = function() {
                                return !!t;
                            })();
                        }
                        function picturetag_get() {
                            return picturetag_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                                var n = function(t, e) {
                                    for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = picturetag_getPrototypeOf(t)); ) ;
                                    return t;
                                }(t, e);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, e);
                                    return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                }
                            }, picturetag_get.apply(this, arguments);
                        }
                        function picturetag_getPrototypeOf(t) {
                            return picturetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t);
                            }, picturetag_getPrototypeOf(t);
                        }
                        function picturetag_setPrototypeOf(t, e) {
                            return picturetag_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                return t.__proto__ = e, t;
                            }, picturetag_setPrototypeOf(t, e);
                        }
                        var Nt = function(t) {
                            function PictureTag(t) {
                                var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, PictureTag), (e = picturetag_callSuper(this, PictureTag, [ "picture", t, r ])).widthList = n, 
                                e;
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && picturetag_setPrototypeOf(t, e);
                            }(PictureTag, t), e = PictureTag, (r = [ {
                                key: "content",
                                value: function() {
                                    var t = this;
                                    return this.widthList.map((function(e) {
                                        var r = e.min_width, n = e.max_width, o = e.transformation, i = t.getOptions(), a = new Et(i);
                                        return a.chain().fromOptions("string" == typeof o ? {
                                            raw_transformation: o
                                        } : o), (i = extractUrlParams(i)).media = {
                                            min_width: r,
                                            max_width: n
                                        }, i.transformation = a, new Ft(t.publicId, i).toHtml();
                                    })).join("") + new Dt(this.publicId, this.getOptions()).toHtml();
                                }
                            }, {
                                key: "attributes",
                                value: function() {
                                    var t = picturetag_get(picturetag_getPrototypeOf(PictureTag.prototype), "attributes", this).call(this);
                                    return delete t.width, delete t.height, t;
                                }
                            }, {
                                key: "closeTag",
                                value: function() {
                                    return "</" + this.name + ">";
                                }
                            } ]) && picturetag_defineProperties(e.prototype, r), n && picturetag_defineProperties(e, n), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), e;
                            var e, r, n;
                        }(Ct), Lt = Nt;
                        function videotag_typeof(t) {
                            return videotag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, videotag_typeof(t);
                        }
                        function videotag_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, videotag_toPropertyKey(n.key), n);
                            }
                        }
                        function videotag_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != videotag_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != videotag_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == videotag_typeof(e) ? e : e + "";
                        }
                        function videotag_callSuper(t, e, r) {
                            return e = videotag_getPrototypeOf(e), function(t, e) {
                                if (e && ("object" === videotag_typeof(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                }(t);
                            }(t, videotag_isNativeReflectConstruct() ? Reflect.construct(e, r || [], videotag_getPrototypeOf(t).constructor) : e.apply(t, r));
                        }
                        function videotag_isNativeReflectConstruct() {
                            try {
                                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                            } catch (t) {}
                            return (videotag_isNativeReflectConstruct = function() {
                                return !!t;
                            })();
                        }
                        function videotag_get() {
                            return videotag_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                                var n = function(t, e) {
                                    for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = videotag_getPrototypeOf(t)); ) ;
                                    return t;
                                }(t, e);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, e);
                                    return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                }
                            }, videotag_get.apply(this, arguments);
                        }
                        function videotag_getPrototypeOf(t) {
                            return videotag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t);
                            }, videotag_getPrototypeOf(t);
                        }
                        function videotag_setPrototypeOf(t, e) {
                            return videotag_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                return t.__proto__ = e, t;
                            }, videotag_setPrototypeOf(t, e);
                        }
                        var It = [ "source_types", "source_transformation", "fallback_content", "poster", "sources" ], zt = [ "webm", "mp4", "ogv" ], Ut = {
                            format: "jpg",
                            resource_type: "video"
                        }, Mt = function(t) {
                            function VideoTag(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, VideoTag), e = defaults({}, e, W), videotag_callSuper(this, VideoTag, [ "video", t.replace(/\.(mp4|ogv|webm)$/, ""), e ]);
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && videotag_setPrototypeOf(t, e);
                            }(VideoTag, t), e = VideoTag, r = [ {
                                key: "setSourceTransformation",
                                value: function(t) {
                                    return this.transformation().sourceTransformation(t), this;
                                }
                            }, {
                                key: "setSourceTypes",
                                value: function(t) {
                                    return this.transformation().sourceTypes(t), this;
                                }
                            }, {
                                key: "setPoster",
                                value: function(t) {
                                    return this.transformation().poster(t), this;
                                }
                            }, {
                                key: "setFallbackContent",
                                value: function(t) {
                                    return this.transformation().fallbackContent(t), this;
                                }
                            }, {
                                key: "content",
                                value: function() {
                                    var t = this, e = this.transformation().getValue("source_types"), r = this.transformation().getValue("source_transformation"), n = this.transformation().getValue("fallback_content"), o = this.getOption("sources"), i = [];
                                    return j()(o) && !isEmpty(o) ? i = o.map((function(e) {
                                        var r = url_url(t.publicId, defaults({}, e.transformations || {}, {
                                            resource_type: "video",
                                            format: e.type
                                        }), t.getOptions());
                                        return t.createSourceTag(r, e.type, e.codecs);
                                    })) : (isEmpty(e) && (e = zt), j()(e) && (i = e.map((function(e) {
                                        var n = url_url(t.publicId, defaults({}, r[e] || {}, {
                                            resource_type: "video",
                                            format: e
                                        }), t.getOptions());
                                        return t.createSourceTag(n, e);
                                    })))), i.join("") + n;
                                }
                            }, {
                                key: "attributes",
                                value: function() {
                                    var t = this.getOption("source_types"), e = this.getOption("poster");
                                    if (void 0 === e && (e = {}), x()(e)) {
                                        var r = null != e.public_id ? $ : Ut;
                                        e = url_url(e.public_id || this.publicId, defaults({}, e, r, this.getOptions()));
                                    }
                                    var n = videotag_get(videotag_getPrototypeOf(VideoTag.prototype), "attributes", this).call(this) || {};
                                    return n = omit(n, It), !isEmpty(this.getOption("sources")) || isEmpty(t) || j()(t) || (n.src = url_url(this.publicId, this.getOptions(), {
                                        resource_type: "video",
                                        format: t
                                    })), null != e && (n.poster = e), n;
                                }
                            }, {
                                key: "createSourceTag",
                                value: function(t, e) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = null;
                                    return isEmpty(e) || (n = "video/" + ("ogv" === e ? "ogg" : e), isEmpty(r) || (n += "; codecs=" + (j()(r) ? r.join(", ") : r))), 
                                    "<source " + this.htmlAttrs({
                                        src: t,
                                        type: n
                                    }) + ">";
                                }
                            } ], r && videotag_defineProperties(e.prototype, r), n && videotag_defineProperties(e, n), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), e;
                            var e, r, n;
                        }(Ct), Vt = Mt;
                        function clienthintsmetatag_typeof(t) {
                            return clienthintsmetatag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, clienthintsmetatag_typeof(t);
                        }
                        function clienthintsmetatag_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, clienthintsmetatag_toPropertyKey(n.key), n);
                            }
                        }
                        function clienthintsmetatag_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != clienthintsmetatag_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != clienthintsmetatag_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == clienthintsmetatag_typeof(e) ? e : e + "";
                        }
                        function clienthintsmetatag_callSuper(t, e, r) {
                            return e = clienthintsmetatag_getPrototypeOf(e), function(t, e) {
                                if (e && ("object" === clienthintsmetatag_typeof(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                }(t);
                            }(t, clienthintsmetatag_isNativeReflectConstruct() ? Reflect.construct(e, r || [], clienthintsmetatag_getPrototypeOf(t).constructor) : e.apply(t, r));
                        }
                        function clienthintsmetatag_isNativeReflectConstruct() {
                            try {
                                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                            } catch (t) {}
                            return (clienthintsmetatag_isNativeReflectConstruct = function() {
                                return !!t;
                            })();
                        }
                        function clienthintsmetatag_getPrototypeOf(t) {
                            return clienthintsmetatag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t);
                            }, clienthintsmetatag_getPrototypeOf(t);
                        }
                        function clienthintsmetatag_setPrototypeOf(t, e) {
                            return clienthintsmetatag_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                return t.__proto__ = e, t;
                            }, clienthintsmetatag_setPrototypeOf(t, e);
                        }
                        var qt = function(t) {
                            function ClientHintsMetaTag(t) {
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, ClientHintsMetaTag), clienthintsmetatag_callSuper(this, ClientHintsMetaTag, [ "meta", void 0, l()({
                                    "http-equiv": "Accept-CH",
                                    content: "DPR, Viewport-Width, Width"
                                }, t) ]);
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e && clienthintsmetatag_setPrototypeOf(t, e);
                            }(ClientHintsMetaTag, t), e = ClientHintsMetaTag, (r = [ {
                                key: "closeTag",
                                value: function() {
                                    return "";
                                }
                            } ]) && clienthintsmetatag_defineProperties(e.prototype, r), n && clienthintsmetatag_defineProperties(e, n), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), e;
                            var e, r, n;
                        }(Ct);
                        function normalizeToArray_toConsumableArray(t) {
                            return function(t) {
                                if (Array.isArray(t)) return normalizeToArray_arrayLikeToArray(t);
                            }(t) || function(t) {
                                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
                            }(t) || function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return normalizeToArray_arrayLikeToArray(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? normalizeToArray_arrayLikeToArray(t, e) : void 0;
                                }
                            }(t) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }();
                        }
                        function normalizeToArray_arrayLikeToArray(t, e) {
                            (null == e || e > t.length) && (e = t.length);
                            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                            return n;
                        }
                        var transparentVideo_mountCloudinaryVideoTag = function(t, e, r, n) {
                            return new Promise((function(o, i) {
                                t.innerHTML = e.videoTag(r, n).toHtml(), t.querySelector(".cld-transparent-video").style.width = "100%", 
                                o(t);
                            }));
                        }, addFlag = function(t, e) {
                            t.transformation ? t.transformation.push({
                                flags: [ e ]
                            }) : (t.flags || (t.flags = []), "string" == typeof t.flags && (t.flags = [ t.flags ]), 
                            t.flags.push(e));
                        }, transparentVideo_enforceOptionsForTransparentVideo = function(t) {
                            t.autoplay = !0, t.muted = !0, t.controls = !1, t.max_timeout_ms = t.max_timeout_ms || V, 
                            t.class = t.class || "", t.class += " cld-transparent-video", t.externalLibraries = t.externalLibraries || {}, 
                            t.externalLibraries.seeThru || (t.externalLibraries.seeThru = Y.seeThru), addFlag(t, "alpha");
                        }, xhr_loadScript = function(t, e, r) {
                            return new Promise((function(n, o) {
                                if (r) n(); else {
                                    var i = document.createElement("script");
                                    i.src = t;
                                    var a = setTimeout((function() {
                                        o({
                                            status: "error",
                                            message: "Timeout loading script ".concat(t)
                                        });
                                    }), e);
                                    i.onerror = function() {
                                        clearTimeout(a), o({
                                            status: "error",
                                            message: "Error loading ".concat(t)
                                        });
                                    }, i.onload = function() {
                                        clearTimeout(a), n();
                                    }, document.head.appendChild(i);
                                }
                            }));
                        };
                        function loadUrlUsingFetch(t) {
                            return new Promise((function(e, r) {
                                fetch(t).then((function(t) {
                                    t.blob().then((function(t) {
                                        e(t);
                                    }));
                                })).catch((function() {
                                    r("error");
                                }));
                            }));
                        }
                        function loadUrlUsingXhr(t) {
                            return new Promise((function(e, r) {
                                var n = new XMLHttpRequest;
                                n.responseType = "blob", n.onload = function(t) {
                                    e(n.response);
                                }, n.onerror = function() {
                                    r("error");
                                }, n.open("GET", t, !0), n.send();
                            }));
                        }
                        var Ht, Kt, $t, Wt, Gt, Yt, xhr_getBlobFromURL = function(t, e) {
                            return new Promise((function(r, n) {
                                var o = function(t, e) {
                                    return setTimeout((function() {
                                        e({
                                            status: "error",
                                            message: "Timeout loading Blob URL"
                                        });
                                    }), t);
                                }(e, n);
                                ("undefined" != typeof fetch && fetch ? loadUrlUsingFetch : loadUrlUsingXhr)(t).then((function(t) {
                                    r({
                                        status: "success",
                                        payload: {
                                            blobURL: URL.createObjectURL(t)
                                        }
                                    });
                                })).catch((function() {
                                    n({
                                        status: "error",
                                        message: "Error loading Blob URL"
                                    });
                                })).finally((function() {
                                    clearTimeout(o);
                                }));
                            }));
                        }, transparentVideo_createHiddenVideoTag = function(t) {
                            var e = t.autoplay, r = t.playsinline, n = t.loop, o = t.muted, i = t.poster, a = t.blobURL, u = t.videoURL, c = document.createElement("video");
                            return c.style.visibility = "hidden", c.position = "absolute", c.x = 0, c.y = 0, 
                            c.src = a, c.setAttribute("data-video-url", u), e && c.setAttribute("autoplay", e), 
                            r && c.setAttribute("playsinline", r), n && c.setAttribute("loop", n), o && c.setAttribute("muted", o), 
                            o && (c.muted = o), i && c.setAttribute("poster", i), c.onload = function() {
                                URL.revokeObjectURL(a);
                            }, c;
                        }, transparentVideo_instantiateSeeThru = function(t, e, r, n) {
                            var o = window, i = o.seeThru, a = o.setTimeout, u = o.clearTimeout;
                            return new Promise((function(o, c) {
                                var s = a((function() {
                                    c({
                                        status: "error",
                                        message: "Timeout instantiating seeThru instance"
                                    });
                                }), e);
                                if (i) var l = i.create(t).ready((function() {
                                    u(s);
                                    var t = l.getCanvas();
                                    t.style.width = "100%", t.className += " " + r, n && l.play(), o(l);
                                })); else c({
                                    status: "error",
                                    message: "Error instantiating seeThru instance"
                                });
                            }));
                        }, transparentVideo_mountSeeThruCanvasTag = function(t, e, r) {
                            var n = r.poster, o = r.autoplay, i = r.playsinline, a = r.loop, u = r.muted;
                            return e += ".mp4", new Promise((function(c, s) {
                                xhr_loadScript(r.externalLibraries.seeThru, r.max_timeout_ms, window.seeThru).then((function() {
                                    xhr_getBlobFromURL(e, r.max_timeout_ms).then((function(l) {
                                        var f = l.payload, p = transparentVideo_createHiddenVideoTag({
                                            blobURL: f.blobURL,
                                            videoURL: e,
                                            poster: n,
                                            autoplay: o,
                                            playsinline: i,
                                            loop: a,
                                            muted: u
                                        });
                                        t.appendChild(p), transparentVideo_instantiateSeeThru(p, r.max_timeout_ms, r.class, r.autoplay).then((function() {
                                            c(t);
                                        })).catch((function(t) {
                                            s(t);
                                        }));
                                    })).catch((function(t) {
                                        var e = t.status, r = t.message;
                                        s({
                                            status: e,
                                            message: r
                                        });
                                    }));
                                })).catch((function(t) {
                                    var e = t.status, r = t.message;
                                    s({
                                        status: e,
                                        message: r
                                    });
                                }));
                            }));
                        }, transparentVideo_checkSupportForTransparency = function() {
                            return new Promise((function(t, e) {
                                isSafari() && t(!1);
                                var r = document.createElement("video"), n = r.canPlayType && r.canPlayType('video/webm; codecs="vp9"');
                                t("maybe" === n || "probably" === n);
                            }));
                        };
                        function cloudinary_typeof(t) {
                            return cloudinary_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t;
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }, cloudinary_typeof(t);
                        }
                        function cloudinary_defineProperties(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(t, cloudinary_toPropertyKey(n.key), n);
                            }
                        }
                        function cloudinary_toPropertyKey(t) {
                            var e = function(t, e) {
                                if ("object" != cloudinary_typeof(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != cloudinary_typeof(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            }(t, "string");
                            return "symbol" == cloudinary_typeof(e) ? e : e + "";
                        }
                        $t = function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                            return e * Math.ceil(t / e);
                        }, Kt = function(t, e) {
                            var r;
                            for (r = t.length - 2; r >= 0 && t[r] >= e; ) r--;
                            return t[r + 1];
                        }, Ht = function(t, e, r, n) {
                            var o, i, a, u;
                            return !(u = null != (o = null != (i = null != (a = n.responsive_use_breakpoints) ? a : n.responsive_use_stoppoints) ? i : this.config("responsive_use_breakpoints")) ? o : this.config("responsive_use_stoppoints")) || "resize" === u && !n.resizing ? e : this.calc_breakpoint(t, e, r);
                        }, Wt = function(t) {
                            var e, r;
                            for (e = 0; (t = null != t ? t.parentNode : void 0) instanceof Element && !e; ) r = window.getComputedStyle(t), 
                            /^inline/.test(r.display) || (e = lodash_width(t));
                            return e;
                        }, Yt = function(t, e) {
                            return t.replace(/\bdpr_(1\.0|auto)\b/g, "dpr_" + this.device_pixel_ratio(e));
                        }, Gt = function(t, e) {
                            var r;
                            return t > (r = lodash_getData(e, "width") || 0) && (r = t, lodash_setData(e, "width", t)), 
                            r;
                        };
                        var Qt = function() {
                            return t = function Cloudinary(t) {
                                var e;
                                !function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                }(this, Cloudinary), this.devicePixelRatioCache = {}, this.responsiveConfig = {}, 
                                this.responsiveResizeInitialized = !1, e = new dt(t), this.config = function(t, r) {
                                    return e.config(t, r);
                                }, this.fromDocument = function() {
                                    return e.fromDocument(), this;
                                }, this.fromEnvironment = function() {
                                    return e.fromEnvironment(), this;
                                }, this.init = function() {
                                    return e.init(), this;
                                };
                            }, e = [ {
                                key: "url",
                                value: function(t) {
                                    return url_url(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, this.config());
                                }
                            }, {
                                key: "video_url",
                                value: function(t, e) {
                                    return e = l()({
                                        resource_type: "video"
                                    }, e), this.url(t, e);
                                }
                            }, {
                                key: "video_thumbnail_url",
                                value: function(t, e) {
                                    return e = l()({}, q, e), this.url(t, e);
                                }
                            }, {
                                key: "transformation_string",
                                value: function(t) {
                                    return new Et(t).serialize();
                                }
                            }, {
                                key: "image",
                                value: function(t) {
                                    var e, r, n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return r = this.imageTag(t, o), e = null != (n = null != o.client_hints ? o.client_hints : this.config("client_hints")) && n, 
                                    null != o.src || e || r.setAttr("src", ""), r = r.toDOM(), e || (lodash_setData(r, "src-cache", this.url(t, o)), 
                                    this.cloudinary_update(r, o)), r;
                                }
                            }, {
                                key: "imageTag",
                                value: function(t, e) {
                                    var r;
                                    return (r = new Dt(t, this.config())).transformation().fromOptions(e), r;
                                }
                            }, {
                                key: "pictureTag",
                                value: function(t, e, r) {
                                    var n;
                                    return (n = new Lt(t, this.config(), r)).transformation().fromOptions(e), n;
                                }
                            }, {
                                key: "sourceTag",
                                value: function(t, e) {
                                    var r;
                                    return (r = new Ft(t, this.config())).transformation().fromOptions(e), r;
                                }
                            }, {
                                key: "video_thumbnail",
                                value: function(t, e) {
                                    return this.image(t, A()({}, q, e));
                                }
                            }, {
                                key: "facebook_profile_image",
                                value: function(t, e) {
                                    return this.image(t, l()({
                                        type: "facebook"
                                    }, e));
                                }
                            }, {
                                key: "twitter_profile_image",
                                value: function(t, e) {
                                    return this.image(t, l()({
                                        type: "twitter"
                                    }, e));
                                }
                            }, {
                                key: "twitter_name_profile_image",
                                value: function(t, e) {
                                    return this.image(t, l()({
                                        type: "twitter_name"
                                    }, e));
                                }
                            }, {
                                key: "gravatar_image",
                                value: function(t, e) {
                                    return this.image(t, l()({
                                        type: "gravatar"
                                    }, e));
                                }
                            }, {
                                key: "fetch_image",
                                value: function(t, e) {
                                    return this.image(t, l()({
                                        type: "fetch"
                                    }, e));
                                }
                            }, {
                                key: "video",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return this.videoTag(t, e).toHtml();
                                }
                            }, {
                                key: "videoTag",
                                value: function(t, e) {
                                    return e = defaults({}, e, this.config()), new Vt(t, e);
                                }
                            }, {
                                key: "sprite_css",
                                value: function(t, e) {
                                    return e = l()({
                                        type: "sprite"
                                    }, e), t.match(/.css$/) || (e.format = "css"), this.url(t, e);
                                }
                            }, {
                                key: "responsive",
                                value: function(t) {
                                    var e, r, n, o, i, a = this, u = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                    if (this.responsiveConfig = A()(this.responsiveConfig || {}, t), o = null != (e = this.responsiveConfig.responsive_class) ? e : this.config("responsive_class"), 
                                    u && this.cloudinary_update("img.".concat(o, ", img.cld-hidpi"), this.responsiveConfig), 
                                    (null == (r = null != (n = this.responsiveConfig.responsive_resize) ? n : this.config("responsive_resize")) || r) && !this.responsiveResizeInitialized) {
                                        this.responsiveConfig.resizing = this.responsiveResizeInitialized = !0, i = null;
                                        var makeResponsive = function() {
                                            var t, e, r, n, u, c;
                                            return t = null != (e = null != (r = a.responsiveConfig.responsive_debounce) ? r : a.config("responsive_debounce")) ? e : 100, 
                                            n = function() {
                                                i && (clearTimeout(i), i = null);
                                            }, u = function() {
                                                return a.cloudinary_update("img.".concat(o), a.responsiveConfig);
                                            }, c = function() {
                                                return n(), u();
                                            }, t ? (n(), void (i = setTimeout(c, t))) : u();
                                        };
                                        return window.addEventListener("resize", makeResponsive), function() {
                                            return window.removeEventListener("resize", makeResponsive);
                                        };
                                    }
                                }
                            }, {
                                key: "calc_breakpoint",
                                value: function(t, e, r) {
                                    var n = lodash_getData(t, "breakpoints") || lodash_getData(t, "stoppoints") || this.config("breakpoints") || this.config("stoppoints") || $t;
                                    return B()(n) ? n(e, r) : (E()(n) && (n = n.split(",").map((function(t) {
                                        return parseInt(t);
                                    })).sort((function(t, e) {
                                        return t - e;
                                    }))), Kt(n, e));
                                }
                            }, {
                                key: "calc_stoppoint",
                                value: function(t, e, r) {
                                    return this.calc_breakpoint(t, e, r);
                                }
                            }, {
                                key: "device_pixel_ratio",
                                value: function(t) {
                                    t = null == t || t;
                                    var e = ("undefined" != typeof window && null !== window ? window.devicePixelRatio : void 0) || 1;
                                    t && (e = Math.ceil(e)), (e <= 0 || NaN === e) && (e = 1);
                                    var r = e.toString();
                                    return r.match(/^\d+$/) && (r += ".0"), r;
                                }
                            }, {
                                key: "processImageTags",
                                value: function(t, e) {
                                    if (isEmpty(t)) return this;
                                    e = defaults({}, e || {}, this.config());
                                    var r = t.filter((function(t) {
                                        return /^img$/i.test(t.tagName);
                                    })).map((function(t) {
                                        var r = l()({
                                            width: t.getAttribute("width"),
                                            height: t.getAttribute("height"),
                                            src: t.getAttribute("src")
                                        }, e), n = r.source || r.src;
                                        delete r.source, delete r.src;
                                        var o = new Et(r).toHtmlAttributes();
                                        return lodash_setData(t, "src-cache", url_url(n, r)), t.setAttribute("width", o.width), 
                                        t.setAttribute("height", o.height), t;
                                    }));
                                    return this.cloudinary_update(r, e), this;
                                }
                            }, {
                                key: "cloudinary_update",
                                value: function(t, e) {
                                    var r, n, o, i, a = this;
                                    if (null === t) return this;
                                    null == e && (e = {});
                                    var u, c = null != e.responsive ? e.responsive : this.config("responsive");
                                    t = function(t) {
                                        return j()(t) ? t : "NodeList" === t.constructor.name ? normalizeToArray_toConsumableArray(t) : E()(t) ? Array.prototype.slice.call(document.querySelectorAll(t), 0) : [ t ];
                                    }(t), u = this.responsiveConfig && null != this.responsiveConfig.responsive_class ? this.responsiveConfig.responsive_class : null != e.responsive_class ? e.responsive_class : this.config("responsive_class");
                                    var s = null != e.round_dpr ? e.round_dpr : this.config("round_dpr");
                                    return t.forEach((function(l) {
                                        if (/img/i.test(l.tagName)) {
                                            var f = !0;
                                            if (c && lodash_addClass(l, u), !isEmpty(n = lodash_getData(l, "src-cache") || lodash_getData(l, "src"))) {
                                                n = Yt.call(a, n, s), Ct.isResponsive(l, u) && (0 !== (r = Wt(l)) ? (/w_auto:breakpoints/.test(n) ? (i = Gt(r, l)) ? n = n.replace(/w_auto:breakpoints([_0-9]*)(:[0-9]+)?/, "w_auto:breakpoints$1:".concat(i)) : f = !1 : (o = /w_auto(:(\d+))?/.exec(n)) && (i = Ht.call(a, l, r, o[2], e), 
                                                (i = Gt(i, l)) ? n = n.replace(/w_auto[^,\/]*/g, "w_".concat(i)) : f = !1), lodash_removeAttribute(l, "width"), 
                                                e.responsive_preserve_height || lodash_removeAttribute(l, "height")) : f = !1);
                                                var p = "lazy" === e.loading && !a.isNativeLazyLoadSupported() && a.isLazyLoadSupported() && !t[0].getAttribute("src");
                                                (f || p) && a.setAttributeIfExists(t[0], "width", "data-width"), f && !p && lodash_setAttribute(l, "src", n);
                                            }
                                        }
                                    })), this;
                                }
                            }, {
                                key: "setAttributeIfExists",
                                value: function(t, e, r) {
                                    var n = t.getAttribute(r);
                                    null != n && lodash_setAttribute(t, e, n);
                                }
                            }, {
                                key: "isLazyLoadSupported",
                                value: function() {
                                    return window && "IntersectionObserver" in window;
                                }
                            }, {
                                key: "isNativeLazyLoadSupported",
                                value: function() {
                                    return "loading" in HTMLImageElement.prototype;
                                }
                            }, {
                                key: "transformation",
                                value: function(t) {
                                    return Et.new(this.config()).fromOptions(t).setParent(this);
                                }
                            }, {
                                key: "injectTransparentVideoElement",
                                value: function(t, e) {
                                    var r = this, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return new Promise((function(o, i) {
                                        t || i({
                                            status: "error",
                                            message: "Expecting htmlElContainer to be HTMLElement"
                                        }), transparentVideo_enforceOptionsForTransparentVideo(n);
                                        var a = r.video_url(e, n);
                                        transparentVideo_checkSupportForTransparency().then((function(u) {
                                            var c;
                                            u ? (c = transparentVideo_mountCloudinaryVideoTag(t, r, e, n), o(t)) : c = transparentVideo_mountSeeThruCanvasTag(t, a, n), 
                                            c.then((function() {
                                                o(t);
                                            })).catch((function(t) {
                                                var e = t.status, r = t.message;
                                                i({
                                                    status: e,
                                                    message: r
                                                });
                                            }));
                                        })).catch((function(t) {
                                            var e = t.status, r = t.message;
                                            i({
                                                status: e,
                                                message: r
                                            });
                                        }));
                                    }));
                                }
                            } ], r = [ {
                                key: "new",
                                value: function(t) {
                                    return new this(t);
                                }
                            } ], e && cloudinary_defineProperties(t.prototype, e), r && cloudinary_defineProperties(t, r), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), t;
                            var t, e, r;
                        }();
                        l()(Qt, n);
                        var Xt = Qt;
                        e.default = {
                            ClientHintsMetaTag: qt,
                            Cloudinary: Xt,
                            Condition: ft,
                            Configuration: dt,
                            crc32: src_crc32,
                            Expression: lt,
                            FetchLayer: mt,
                            HtmlTag: Ct,
                            ImageTag: Dt,
                            Layer: vt,
                            PictureTag: Lt,
                            SubtitlesLayer: _t,
                            TextLayer: ht,
                            Transformation: Et,
                            utf8_encode: src_utf8_encode,
                            Util: o,
                            VideoTag: Vt
                        };
                    },
                    "lodash/assign": function(e, r) {
                        e.exports = t;
                    },
                    "lodash/cloneDeep": function(t, r) {
                        t.exports = e;
                    },
                    "lodash/compact": function(t, e) {
                        t.exports = r;
                    },
                    "lodash/difference": function(t, e) {
                        t.exports = n;
                    },
                    "lodash/functions": function(t, e) {
                        t.exports = o;
                    },
                    "lodash/identity": function(t, e) {
                        t.exports = i;
                    },
                    "lodash/includes": function(t, e) {
                        t.exports = a;
                    },
                    "lodash/isArray": function(t, e) {
                        t.exports = u;
                    },
                    "lodash/isElement": function(t, e) {
                        t.exports = c;
                    },
                    "lodash/isFunction": function(t, e) {
                        t.exports = s;
                    },
                    "lodash/isPlainObject": function(t, e) {
                        t.exports = l;
                    },
                    "lodash/isString": function(t, e) {
                        t.exports = f;
                    },
                    "lodash/merge": function(t, e) {
                        t.exports = p;
                    },
                    "lodash/trim": function(t, e) {
                        t.exports = y;
                    }
                });
            }, t.exports = n(r(9857), r(1285), r(6167), r(1799), r(8259), r(9090), r(2485), r(4383), r(4806), r(4360), r(5229), r(7561), r(1582), r(8340));
        },
        5178: (t, e, r) => {
            var n = r(3188)(r(7183), "DataView");
            t.exports = n;
        },
        3615: (t, e, r) => {
            var n = r(8342), o = r(9184), i = r(7747), a = r(4287), u = r(7);
            function Hash(t) {
                var e = -1, r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            Hash.prototype.clear = n, Hash.prototype.delete = o, Hash.prototype.get = i, Hash.prototype.has = a, 
            Hash.prototype.set = u, t.exports = Hash;
        },
        789: (t, e, r) => {
            var n = r(7752), o = r(718), i = r(7849), a = r(3957), u = r(845);
            function ListCache(t) {
                var e = -1, r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            ListCache.prototype.clear = n, ListCache.prototype.delete = o, ListCache.prototype.get = i, 
            ListCache.prototype.has = a, ListCache.prototype.set = u, t.exports = ListCache;
        },
        8561: (t, e, r) => {
            var n = r(3188)(r(7183), "Map");
            t.exports = n;
        },
        1451: (t, e, r) => {
            var n = r(5674), o = r(1036), i = r(31), a = r(1907), u = r(971);
            function MapCache(t) {
                var e = -1, r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            MapCache.prototype.clear = n, MapCache.prototype.delete = o, MapCache.prototype.get = i, 
            MapCache.prototype.has = a, MapCache.prototype.set = u, t.exports = MapCache;
        },
        1490: (t, e, r) => {
            var n = r(3188)(r(7183), "Promise");
            t.exports = n;
        },
        6775: (t, e, r) => {
            var n = r(3188)(r(7183), "Set");
            t.exports = n;
        },
        8869: (t, e, r) => {
            var n = r(1451), o = r(6810), i = r(5813);
            function SetCache(t) {
                var e = -1, r = null == t ? 0 : t.length;
                for (this.__data__ = new n; ++e < r; ) this.add(t[e]);
            }
            SetCache.prototype.add = SetCache.prototype.push = o, SetCache.prototype.has = i, 
            t.exports = SetCache;
        },
        2823: (t, e, r) => {
            var n = r(789), o = r(8926), i = r(2680), a = r(3851), u = r(8423), c = r(3967);
            function Stack(t) {
                var e = this.__data__ = new n(t);
                this.size = e.size;
            }
            Stack.prototype.clear = o, Stack.prototype.delete = i, Stack.prototype.get = a, 
            Stack.prototype.has = u, Stack.prototype.set = c, t.exports = Stack;
        },
        7187: (t, e, r) => {
            var n = r(7183).Symbol;
            t.exports = n;
        },
        6846: (t, e, r) => {
            var n = r(7183).Uint8Array;
            t.exports = n;
        },
        8985: (t, e, r) => {
            var n = r(3188)(r(7183), "WeakMap");
            t.exports = n;
        },
        4235: t => {
            t.exports = function(t, e, r) {
                switch (r.length) {
                  case 0:
                    return t.call(e);

                  case 1:
                    return t.call(e, r[0]);

                  case 2:
                    return t.call(e, r[0], r[1]);

                  case 3:
                    return t.call(e, r[0], r[1], r[2]);
                }
                return t.apply(e, r);
            };
        },
        607: t => {
            t.exports = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t); ) ;
                return t;
            };
        },
        836: t => {
            t.exports = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n; ) {
                    var a = t[r];
                    e(a, r, t) && (i[o++] = a);
                }
                return i;
            };
        },
        5739: (t, e, r) => {
            var n = r(8481);
            t.exports = function(t, e) {
                return !!(null == t ? 0 : t.length) && n(t, e, 0) > -1;
            };
        },
        4003: t => {
            t.exports = function(t, e, r) {
                for (var n = -1, o = null == t ? 0 : t.length; ++n < o; ) if (r(e, t[n])) return !0;
                return !1;
            };
        },
        661: (t, e, r) => {
            var n = r(142), o = r(5962), i = r(4383), a = r(8098), u = r(4683), c = r(3905), s = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var r = i(t), l = !r && o(t), f = !r && !l && a(t), p = !r && !l && !f && c(t), y = r || l || f || p, d = y ? n(t.length, String) : [], v = d.length;
                for (var h in t) !e && !s.call(t, h) || y && ("length" == h || f && ("offset" == h || "parent" == h) || p && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || u(h, v)) || d.push(h);
                return d;
            };
        },
        6138: t => {
            t.exports = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n; ) o[r] = e(t[r], r, t);
                return o;
            };
        },
        5862: t => {
            t.exports = function(t, e) {
                for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
                return t;
            };
        },
        7938: t => {
            t.exports = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length; ++r < n; ) if (e(t[r], r, t)) return !0;
                return !1;
            };
        },
        8284: t => {
            t.exports = function(t) {
                return t.split("");
            };
        },
        6663: (t, e, r) => {
            var n = r(9142), o = r(9830);
            t.exports = function(t, e, r) {
                (void 0 !== r && !o(t[e], r) || void 0 === r && !(e in t)) && n(t, e, r);
            };
        },
        2177: (t, e, r) => {
            var n = r(9142), o = r(9830), i = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, r) {
                var a = t[e];
                i.call(t, e) && o(a, r) && (void 0 !== r || e in t) || n(t, e, r);
            };
        },
        435: (t, e, r) => {
            var n = r(9830);
            t.exports = function(t, e) {
                for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
                return -1;
            };
        },
        267: (t, e, r) => {
            var n = r(6837), o = r(8420);
            t.exports = function(t, e) {
                return t && n(e, o(e), t);
            };
        },
        5240: (t, e, r) => {
            var n = r(6837), o = r(3435);
            t.exports = function(t, e) {
                return t && n(e, o(e), t);
            };
        },
        9142: (t, e, r) => {
            var n = r(3733);
            t.exports = function(t, e, r) {
                "__proto__" == e && n ? n(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0
                }) : t[e] = r;
            };
        },
        9557: (t, e, r) => {
            var n = r(2823), o = r(607), i = r(2177), a = r(267), u = r(5240), c = r(6064), s = r(8601), l = r(2881), f = r(6186), p = r(3300), y = r(4667), d = r(8355), v = r(6203), h = r(7981), _ = r(235), m = r(4383), b = r(8098), g = r(4024), w = r(6015), O = r(8802), P = r(8420), j = r(3435), k = "[object Arguments]", x = "[object Function]", S = "[object Object]", E = {};
            E[k] = E["[object Array]"] = E["[object ArrayBuffer]"] = E["[object DataView]"] = E["[object Boolean]"] = E["[object Date]"] = E["[object Float32Array]"] = E["[object Float64Array]"] = E["[object Int8Array]"] = E["[object Int16Array]"] = E["[object Int32Array]"] = E["[object Map]"] = E["[object Number]"] = E[S] = E["[object RegExp]"] = E["[object Set]"] = E["[object String]"] = E["[object Symbol]"] = E["[object Uint8Array]"] = E["[object Uint8ClampedArray]"] = E["[object Uint16Array]"] = E["[object Uint32Array]"] = !0, 
            E["[object Error]"] = E[x] = E["[object WeakMap]"] = !1, t.exports = function baseClone(t, e, r, C, A, R) {
                var T, D = 1 & e, B = 2 & e, F = 4 & e;
                if (r && (T = A ? r(t, C, A, R) : r(t)), void 0 !== T) return T;
                if (!w(t)) return t;
                var N = m(t);
                if (N) {
                    if (T = v(t), !D) return s(t, T);
                } else {
                    var L = d(t), I = L == x || "[object GeneratorFunction]" == L;
                    if (b(t)) return c(t, D);
                    if (L == S || L == k || I && !A) {
                        if (T = B || I ? {} : _(t), !D) return B ? f(t, u(T, t)) : l(t, a(T, t));
                    } else {
                        if (!E[L]) return A ? t : {};
                        T = h(t, L, D);
                    }
                }
                R || (R = new n);
                var z = R.get(t);
                if (z) return z;
                R.set(t, T), O(t) ? t.forEach((function(n) {
                    T.add(baseClone(n, e, r, n, t, R));
                })) : g(t) && t.forEach((function(n, o) {
                    T.set(o, baseClone(n, e, r, o, t, R));
                }));
                var U = N ? void 0 : (F ? B ? y : p : B ? j : P)(t);
                return o(U || t, (function(n, o) {
                    U && (n = t[o = n]), i(T, o, baseClone(n, e, r, o, t, R));
                })), T;
            };
        },
        1534: (t, e, r) => {
            var n = r(6015), o = Object.create, i = function() {
                function object() {}
                return function(t) {
                    if (!n(t)) return {};
                    if (o) return o(t);
                    object.prototype = t;
                    var e = new object;
                    return object.prototype = void 0, e;
                };
            }();
            t.exports = i;
        },
        2981: (t, e, r) => {
            var n = r(8869), o = r(5739), i = r(4003), a = r(6138), u = r(6143), c = r(7773);
            t.exports = function(t, e, r, s) {
                var l = -1, f = o, p = !0, y = t.length, d = [], v = e.length;
                if (!y) return d;
                r && (e = a(e, u(r))), s ? (f = i, p = !1) : e.length >= 200 && (f = c, p = !1, 
                e = new n(e));
                t: for (;++l < y; ) {
                    var h = t[l], _ = null == r ? h : r(h);
                    if (h = s || 0 !== h ? h : 0, p && _ == _) {
                        for (var m = v; m--; ) if (e[m] === _) continue t;
                        d.push(h);
                    } else f(e, _, s) || d.push(h);
                }
                return d;
            };
        },
        4183: (t, e, r) => {
            var n = r(6895), o = r(9835)(n);
            t.exports = o;
        },
        3705: t => {
            t.exports = function(t, e, r, n) {
                for (var o = t.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; ) if (e(t[i], i, t)) return i;
                return -1;
            };
        },
        3234: (t, e, r) => {
            var n = r(5862), o = r(2285);
            t.exports = function baseFlatten(t, e, r, i, a) {
                var u = -1, c = t.length;
                for (r || (r = o), a || (a = []); ++u < c; ) {
                    var s = t[u];
                    e > 0 && r(s) ? e > 1 ? baseFlatten(s, e - 1, r, i, a) : n(a, s) : i || (a[a.length] = s);
                }
                return a;
            };
        },
        1311: (t, e, r) => {
            var n = r(128)();
            t.exports = n;
        },
        6895: (t, e, r) => {
            var n = r(1311), o = r(8420);
            t.exports = function(t, e) {
                return t && n(t, e, o);
            };
        },
        7257: (t, e, r) => {
            var n = r(836), o = r(4360);
            t.exports = function(t, e) {
                return n(e, (function(e) {
                    return o(t[e]);
                }));
            };
        },
        2748: (t, e, r) => {
            var n = r(4679), o = r(4671);
            t.exports = function(t, e) {
                for (var r = 0, i = (e = n(e, t)).length; null != t && r < i; ) t = t[o(e[r++])];
                return r && r == i ? t : void 0;
            };
        },
        9169: (t, e, r) => {
            var n = r(5862), o = r(4383);
            t.exports = function(t, e, r) {
                var i = e(t);
                return o(t) ? i : n(i, r(t));
            };
        },
        6990: (t, e, r) => {
            var n = r(7187), o = r(1029), i = r(8704), a = n ? n.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? o(t) : i(t);
            };
        },
        1607: t => {
            t.exports = function(t, e) {
                return null != t && e in Object(t);
            };
        },
        8481: (t, e, r) => {
            var n = r(3705), o = r(5789), i = r(9705);
            t.exports = function(t, e, r) {
                return e == e ? i(t, e, r) : n(t, o, r);
            };
        },
        6252: (t, e, r) => {
            var n = r(6990), o = r(6184);
            t.exports = function(t) {
                return o(t) && "[object Arguments]" == n(t);
            };
        },
        3028: (t, e, r) => {
            var n = r(7114), o = r(6184);
            t.exports = function baseIsEqual(t, e, r, i, a) {
                return t === e || (null == t || null == e || !o(t) && !o(e) ? t != t && e != e : n(t, e, r, i, baseIsEqual, a));
            };
        },
        7114: (t, e, r) => {
            var n = r(2823), o = r(5237), i = r(3728), a = r(5355), u = r(8355), c = r(4383), s = r(8098), l = r(3905), f = "[object Arguments]", p = "[object Array]", y = "[object Object]", d = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, r, v, h, _) {
                var m = c(t), b = c(e), g = m ? p : u(t), w = b ? p : u(e), O = (g = g == f ? y : g) == y, P = (w = w == f ? y : w) == y, j = g == w;
                if (j && s(t)) {
                    if (!s(e)) return !1;
                    m = !0, O = !1;
                }
                if (j && !O) return _ || (_ = new n), m || l(t) ? o(t, e, r, v, h, _) : i(t, e, g, r, v, h, _);
                if (!(1 & r)) {
                    var k = O && d.call(t, "__wrapped__"), x = P && d.call(e, "__wrapped__");
                    if (k || x) {
                        var S = k ? t.value() : t, E = x ? e.value() : e;
                        return _ || (_ = new n), h(S, E, r, v, _);
                    }
                }
                return !!j && (_ || (_ = new n), a(t, e, r, v, h, _));
            };
        },
        162: (t, e, r) => {
            var n = r(8355), o = r(6184);
            t.exports = function(t) {
                return o(t) && "[object Map]" == n(t);
            };
        },
        9121: (t, e, r) => {
            var n = r(2823), o = r(3028);
            t.exports = function(t, e, r, i) {
                var a = r.length, u = a, c = !i;
                if (null == t) return !u;
                for (t = Object(t); a--; ) {
                    var s = r[a];
                    if (c && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
                }
                for (;++a < u; ) {
                    var l = (s = r[a])[0], f = t[l], p = s[1];
                    if (c && s[2]) {
                        if (void 0 === f && !(l in t)) return !1;
                    } else {
                        var y = new n;
                        if (i) var d = i(f, p, l, t, e, y);
                        if (!(void 0 === d ? o(p, f, 3, i, y) : d)) return !1;
                    }
                }
                return !0;
            };
        },
        5789: t => {
            t.exports = function(t) {
                return t != t;
            };
        },
        3829: (t, e, r) => {
            var n = r(4360), o = r(7234), i = r(6015), a = r(275), u = /^\[object .+?Constructor\]$/, c = Function.prototype, s = Object.prototype, l = c.toString, f = s.hasOwnProperty, p = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!i(t) || o(t)) && (n(t) ? p : u).test(a(t));
            };
        },
        8344: (t, e, r) => {
            var n = r(8355), o = r(6184);
            t.exports = function(t) {
                return o(t) && "[object Set]" == n(t);
            };
        },
        4271: (t, e, r) => {
            var n = r(6990), o = r(1784), i = r(6184), a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, 
            a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, 
            t.exports = function(t) {
                return i(t) && o(t.length) && !!a[n(t)];
            };
        },
        4207: (t, e, r) => {
            var n = r(2801), o = r(2208), i = r(9090), a = r(4383), u = r(3681);
            t.exports = function(t) {
                return "function" == typeof t ? t : null == t ? i : "object" == typeof t ? a(t) ? o(t[0], t[1]) : n(t) : u(t);
            };
        },
        9966: (t, e, r) => {
            var n = r(8089), o = r(6128), i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!n(t)) return o(t);
                var e = [];
                for (var r in Object(t)) i.call(t, r) && "constructor" != r && e.push(r);
                return e;
            };
        },
        7641: (t, e, r) => {
            var n = r(6015), o = r(8089), i = r(5567), a = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!n(t)) return i(t);
                var e = o(t), r = [];
                for (var u in t) ("constructor" != u || !e && a.call(t, u)) && r.push(u);
                return r;
            };
        },
        5218: (t, e, r) => {
            var n = r(4183), o = r(9592);
            t.exports = function(t, e) {
                var r = -1, i = o(t) ? Array(t.length) : [];
                return n(t, (function(t, n, o) {
                    i[++r] = e(t, n, o);
                })), i;
            };
        },
        2801: (t, e, r) => {
            var n = r(9121), o = r(9406), i = r(6459);
            t.exports = function(t) {
                var e = o(t);
                return 1 == e.length && e[0][2] ? i(e[0][0], e[0][1]) : function(r) {
                    return r === t || n(r, t, e);
                };
            };
        },
        2208: (t, e, r) => {
            var n = r(3028), o = r(9650), i = r(2993), a = r(9668), u = r(8938), c = r(6459), s = r(4671);
            t.exports = function(t, e) {
                return a(t) && u(e) ? c(s(t), e) : function(r) {
                    var a = o(r, t);
                    return void 0 === a && a === e ? i(r, t) : n(e, a, 3);
                };
            };
        },
        436: (t, e, r) => {
            var n = r(2823), o = r(6663), i = r(1311), a = r(6554), u = r(6015), c = r(3435), s = r(4892);
            t.exports = function baseMerge(t, e, r, l, f) {
                t !== e && i(e, (function(i, c) {
                    if (f || (f = new n), u(i)) a(t, e, c, r, baseMerge, l, f); else {
                        var p = l ? l(s(t, c), i, c + "", t, e, f) : void 0;
                        void 0 === p && (p = i), o(t, c, p);
                    }
                }), c);
            };
        },
        6554: (t, e, r) => {
            var n = r(6663), o = r(6064), i = r(1671), a = r(8601), u = r(235), c = r(5962), s = r(4383), l = r(5919), f = r(8098), p = r(4360), y = r(6015), d = r(5229), v = r(3905), h = r(4892), _ = r(7774);
            t.exports = function(t, e, r, m, b, g, w) {
                var O = h(t, r), P = h(e, r), j = w.get(P);
                if (j) n(t, r, j); else {
                    var k = g ? g(O, P, r + "", t, e, w) : void 0, x = void 0 === k;
                    if (x) {
                        var S = s(P), E = !S && f(P), C = !S && !E && v(P);
                        k = P, S || E || C ? s(O) ? k = O : l(O) ? k = a(O) : E ? (x = !1, k = o(P, !0)) : C ? (x = !1, 
                        k = i(P, !0)) : k = [] : d(P) || c(P) ? (k = O, c(O) ? k = _(O) : y(O) && !p(O) || (k = u(P))) : x = !1;
                    }
                    x && (w.set(P, k), b(k, P, m, g, w), w.delete(P)), n(t, r, k);
                }
            };
        },
        5351: t => {
            t.exports = function(t) {
                return function(e) {
                    return null == e ? void 0 : e[t];
                };
            };
        },
        4953: (t, e, r) => {
            var n = r(2748);
            t.exports = function(t) {
                return function(e) {
                    return n(e, t);
                };
            };
        },
        5580: (t, e, r) => {
            var n = r(9090), o = r(3903), i = r(2139);
            t.exports = function(t, e) {
                return i(o(t, e, n), t + "");
            };
        },
        7316: (t, e, r) => {
            var n = r(3368), o = r(3733), i = r(9090), a = o ? function(t, e) {
                return o(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: n(e),
                    writable: !0
                });
            } : i;
            t.exports = a;
        },
        1482: t => {
            t.exports = function(t, e, r) {
                var n = -1, o = t.length;
                e < 0 && (e = -e > o ? 0 : o + e), (r = r > o ? o : r) < 0 && (r += o), o = e > r ? 0 : r - e >>> 0, 
                e >>>= 0;
                for (var i = Array(o); ++n < o; ) i[n] = t[n + e];
                return i;
            };
        },
        142: t => {
            t.exports = function(t, e) {
                for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
                return n;
            };
        },
        4742: (t, e, r) => {
            var n = r(7187), o = r(6138), i = r(4383), a = r(3536), u = n ? n.prototype : void 0, c = u ? u.toString : void 0;
            t.exports = function baseToString(t) {
                if ("string" == typeof t) return t;
                if (i(t)) return o(t, baseToString) + "";
                if (a(t)) return c ? c.call(t) : "";
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            };
        },
        7066: (t, e, r) => {
            var n = r(1158), o = /^\s+/;
            t.exports = function(t) {
                return t ? t.slice(0, n(t) + 1).replace(o, "") : t;
            };
        },
        6143: t => {
            t.exports = function(t) {
                return function(e) {
                    return t(e);
                };
            };
        },
        3247: (t, e, r) => {
            var n = r(8869), o = r(5739), i = r(4003), a = r(7773), u = r(5891), c = r(8629);
            t.exports = function(t, e, r) {
                var s = -1, l = o, f = t.length, p = !0, y = [], d = y;
                if (r) p = !1, l = i; else if (f >= 200) {
                    var v = e ? null : u(t);
                    if (v) return c(v);
                    p = !1, l = a, d = new n;
                } else d = e ? [] : y;
                t: for (;++s < f; ) {
                    var h = t[s], _ = e ? e(h) : h;
                    if (h = r || 0 !== h ? h : 0, p && _ == _) {
                        for (var m = d.length; m--; ) if (d[m] === _) continue t;
                        e && d.push(_), y.push(h);
                    } else l(d, _, r) || (d !== y && d.push(_), y.push(h));
                }
                return y;
            };
        },
        7608: (t, e, r) => {
            var n = r(6138);
            t.exports = function(t, e) {
                return n(e, (function(e) {
                    return t[e];
                }));
            };
        },
        7773: t => {
            t.exports = function(t, e) {
                return t.has(e);
            };
        },
        4679: (t, e, r) => {
            var n = r(4383), o = r(9668), i = r(412), a = r(2832);
            t.exports = function(t, e) {
                return n(t) ? t : o(t, e) ? [ t ] : i(a(t));
            };
        },
        1308: (t, e, r) => {
            var n = r(1482);
            t.exports = function(t, e, r) {
                var o = t.length;
                return r = void 0 === r ? o : r, !e && r >= o ? t : n(t, e, r);
            };
        },
        6153: (t, e, r) => {
            var n = r(8481);
            t.exports = function(t, e) {
                for (var r = t.length; r-- && n(e, t[r], 0) > -1; ) ;
                return r;
            };
        },
        7246: (t, e, r) => {
            var n = r(8481);
            t.exports = function(t, e) {
                for (var r = -1, o = t.length; ++r < o && n(e, t[r], 0) > -1; ) ;
                return r;
            };
        },
        3911: (t, e, r) => {
            var n = r(6846);
            t.exports = function(t) {
                var e = new t.constructor(t.byteLength);
                return new n(e).set(new n(t)), e;
            };
        },
        6064: (t, e, r) => {
            t = r.nmd(t);
            var n = r(7183), o = e && !e.nodeType && e, i = o && t && !t.nodeType && t, a = i && i.exports === o ? n.Buffer : void 0, u = a ? a.allocUnsafe : void 0;
            t.exports = function(t, e) {
                if (e) return t.slice();
                var r = t.length, n = u ? u(r) : new t.constructor(r);
                return t.copy(n), n;
            };
        },
        3887: (t, e, r) => {
            var n = r(3911);
            t.exports = function(t, e) {
                var r = e ? n(t.buffer) : t.buffer;
                return new t.constructor(r, t.byteOffset, t.byteLength);
            };
        },
        1871: t => {
            var e = /\w*$/;
            t.exports = function(t) {
                var r = new t.constructor(t.source, e.exec(t));
                return r.lastIndex = t.lastIndex, r;
            };
        },
        5938: (t, e, r) => {
            var n = r(7187), o = n ? n.prototype : void 0, i = o ? o.valueOf : void 0;
            t.exports = function(t) {
                return i ? Object(i.call(t)) : {};
            };
        },
        1671: (t, e, r) => {
            var n = r(3911);
            t.exports = function(t, e) {
                var r = e ? n(t.buffer) : t.buffer;
                return new t.constructor(r, t.byteOffset, t.length);
            };
        },
        8601: t => {
            t.exports = function(t, e) {
                var r = -1, n = t.length;
                for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
                return e;
            };
        },
        6837: (t, e, r) => {
            var n = r(2177), o = r(9142);
            t.exports = function(t, e, r, i) {
                var a = !r;
                r || (r = {});
                for (var u = -1, c = e.length; ++u < c; ) {
                    var s = e[u], l = i ? i(r[s], t[s], s, r, t) : void 0;
                    void 0 === l && (l = t[s]), a ? o(r, s, l) : n(r, s, l);
                }
                return r;
            };
        },
        2881: (t, e, r) => {
            var n = r(6837), o = r(9946);
            t.exports = function(t, e) {
                return n(t, o(t), e);
            };
        },
        6186: (t, e, r) => {
            var n = r(6837), o = r(1693);
            t.exports = function(t, e) {
                return n(t, o(t), e);
            };
        },
        5171: (t, e, r) => {
            var n = r(7183)["__core-js_shared__"];
            t.exports = n;
        },
        7921: (t, e, r) => {
            var n = r(5580), o = r(6218);
            t.exports = function(t) {
                return n((function(e, r) {
                    var n = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, u = i > 2 ? r[2] : void 0;
                    for (a = t.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(r[0], r[1], u) && (a = i < 3 ? void 0 : a, 
                    i = 1), e = Object(e); ++n < i; ) {
                        var c = r[n];
                        c && t(e, c, n, a);
                    }
                    return e;
                }));
            };
        },
        9835: (t, e, r) => {
            var n = r(9592);
            t.exports = function(t, e) {
                return function(r, o) {
                    if (null == r) return r;
                    if (!n(r)) return t(r, o);
                    for (var i = r.length, a = e ? i : -1, u = Object(r); (e ? a-- : ++a < i) && !1 !== o(u[a], a, u); ) ;
                    return r;
                };
            };
        },
        128: t => {
            t.exports = function(t) {
                return function(e, r, n) {
                    for (var o = -1, i = Object(e), a = n(e), u = a.length; u--; ) {
                        var c = a[t ? u : ++o];
                        if (!1 === r(i[c], c, i)) break;
                    }
                    return e;
                };
            };
        },
        5891: (t, e, r) => {
            var n = r(6775), o = r(7600), i = r(8629), a = n && 1 / i(new n([ , -0 ]))[1] == 1 / 0 ? function(t) {
                return new n(t);
            } : o;
            t.exports = a;
        },
        3733: (t, e, r) => {
            var n = r(3188), o = function() {
                try {
                    var t = n(Object, "defineProperty");
                    return t({}, "", {}), t;
                } catch (t) {}
            }();
            t.exports = o;
        },
        5237: (t, e, r) => {
            var n = r(8869), o = r(7938), i = r(7773);
            t.exports = function(t, e, r, a, u, c) {
                var s = 1 & r, l = t.length, f = e.length;
                if (l != f && !(s && f > l)) return !1;
                var p = c.get(t), y = c.get(e);
                if (p && y) return p == e && y == t;
                var d = -1, v = !0, h = 2 & r ? new n : void 0;
                for (c.set(t, e), c.set(e, t); ++d < l; ) {
                    var _ = t[d], m = e[d];
                    if (a) var b = s ? a(m, _, d, e, t, c) : a(_, m, d, t, e, c);
                    if (void 0 !== b) {
                        if (b) continue;
                        v = !1;
                        break;
                    }
                    if (h) {
                        if (!o(e, (function(t, e) {
                            if (!i(h, e) && (_ === t || u(_, t, r, a, c))) return h.push(e);
                        }))) {
                            v = !1;
                            break;
                        }
                    } else if (_ !== m && !u(_, m, r, a, c)) {
                        v = !1;
                        break;
                    }
                }
                return c.delete(t), c.delete(e), v;
            };
        },
        3728: (t, e, r) => {
            var n = r(7187), o = r(6846), i = r(9830), a = r(5237), u = r(8887), c = r(8629), s = n ? n.prototype : void 0, l = s ? s.valueOf : void 0;
            t.exports = function(t, e, r, n, s, f, p) {
                switch (r) {
                  case "[object DataView]":
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                    t = t.buffer, e = e.buffer;

                  case "[object ArrayBuffer]":
                    return !(t.byteLength != e.byteLength || !f(new o(t), new o(e)));

                  case "[object Boolean]":
                  case "[object Date]":
                  case "[object Number]":
                    return i(+t, +e);

                  case "[object Error]":
                    return t.name == e.name && t.message == e.message;

                  case "[object RegExp]":
                  case "[object String]":
                    return t == e + "";

                  case "[object Map]":
                    var y = u;

                  case "[object Set]":
                    var d = 1 & n;
                    if (y || (y = c), t.size != e.size && !d) return !1;
                    var v = p.get(t);
                    if (v) return v == e;
                    n |= 2, p.set(t, e);
                    var h = a(y(t), y(e), n, s, f, p);
                    return p.delete(t), h;

                  case "[object Symbol]":
                    if (l) return l.call(t) == l.call(e);
                }
                return !1;
            };
        },
        5355: (t, e, r) => {
            var n = r(3300), o = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, r, i, a, u) {
                var c = 1 & r, s = n(t), l = s.length;
                if (l != n(e).length && !c) return !1;
                for (var f = l; f--; ) {
                    var p = s[f];
                    if (!(c ? p in e : o.call(e, p))) return !1;
                }
                var y = u.get(t), d = u.get(e);
                if (y && d) return y == e && d == t;
                var v = !0;
                u.set(t, e), u.set(e, t);
                for (var h = c; ++f < l; ) {
                    var _ = t[p = s[f]], m = e[p];
                    if (i) var b = c ? i(m, _, p, e, t, u) : i(_, m, p, t, e, u);
                    if (!(void 0 === b ? _ === m || a(_, m, r, i, u) : b)) {
                        v = !1;
                        break;
                    }
                    h || (h = "constructor" == p);
                }
                if (v && !h) {
                    var g = t.constructor, w = e.constructor;
                    g == w || !("constructor" in t) || !("constructor" in e) || "function" == typeof g && g instanceof g && "function" == typeof w && w instanceof w || (v = !1);
                }
                return u.delete(t), u.delete(e), v;
            };
        },
        5194: (t, e, r) => {
            var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
            t.exports = n;
        },
        3300: (t, e, r) => {
            var n = r(9169), o = r(9946), i = r(8420);
            t.exports = function(t) {
                return n(t, i, o);
            };
        },
        4667: (t, e, r) => {
            var n = r(9169), o = r(1693), i = r(3435);
            t.exports = function(t) {
                return n(t, i, o);
            };
        },
        8037: (t, e, r) => {
            var n = r(5912);
            t.exports = function(t, e) {
                var r = t.__data__;
                return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
            };
        },
        9406: (t, e, r) => {
            var n = r(8938), o = r(8420);
            t.exports = function(t) {
                for (var e = o(t), r = e.length; r--; ) {
                    var i = e[r], a = t[i];
                    e[r] = [ i, a, n(a) ];
                }
                return e;
            };
        },
        3188: (t, e, r) => {
            var n = r(3829), o = r(1870);
            t.exports = function(t, e) {
                var r = o(t, e);
                return n(r) ? r : void 0;
            };
        },
        9637: (t, e, r) => {
            var n = r(1429)(Object.getPrototypeOf, Object);
            t.exports = n;
        },
        1029: (t, e, r) => {
            var n = r(7187), o = Object.prototype, i = o.hasOwnProperty, a = o.toString, u = n ? n.toStringTag : void 0;
            t.exports = function(t) {
                var e = i.call(t, u), r = t[u];
                try {
                    t[u] = void 0;
                    var n = !0;
                } catch (t) {}
                var o = a.call(t);
                return n && (e ? t[u] = r : delete t[u]), o;
            };
        },
        9946: (t, e, r) => {
            var n = r(836), o = r(6499), i = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols, u = a ? function(t) {
                return null == t ? [] : (t = Object(t), n(a(t), (function(e) {
                    return i.call(t, e);
                })));
            } : o;
            t.exports = u;
        },
        1693: (t, e, r) => {
            var n = r(5862), o = r(9637), i = r(9946), a = r(6499), u = Object.getOwnPropertySymbols ? function(t) {
                for (var e = []; t; ) n(e, i(t)), t = o(t);
                return e;
            } : a;
            t.exports = u;
        },
        8355: (t, e, r) => {
            var n = r(5178), o = r(8561), i = r(1490), a = r(6775), u = r(8985), c = r(6990), s = r(275), l = "[object Map]", f = "[object Promise]", p = "[object Set]", y = "[object WeakMap]", d = "[object DataView]", v = s(n), h = s(o), _ = s(i), m = s(a), b = s(u), g = c;
            (n && g(new n(new ArrayBuffer(1))) != d || o && g(new o) != l || i && g(i.resolve()) != f || a && g(new a) != p || u && g(new u) != y) && (g = function(t) {
                var e = c(t), r = "[object Object]" == e ? t.constructor : void 0, n = r ? s(r) : "";
                if (n) switch (n) {
                  case v:
                    return d;

                  case h:
                    return l;

                  case _:
                    return f;

                  case m:
                    return p;

                  case b:
                    return y;
                }
                return e;
            }), t.exports = g;
        },
        1870: t => {
            t.exports = function(t, e) {
                return null == t ? void 0 : t[e];
            };
        },
        3852: (t, e, r) => {
            var n = r(4679), o = r(5962), i = r(4383), a = r(4683), u = r(1784), c = r(4671);
            t.exports = function(t, e, r) {
                for (var s = -1, l = (e = n(e, t)).length, f = !1; ++s < l; ) {
                    var p = c(e[s]);
                    if (!(f = null != t && r(t, p))) break;
                    t = t[p];
                }
                return f || ++s != l ? f : !!(l = null == t ? 0 : t.length) && u(l) && a(p, l) && (i(t) || o(t));
            };
        },
        5963: t => {
            var e = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            t.exports = function(t) {
                return e.test(t);
            };
        },
        8342: (t, e, r) => {
            var n = r(1960);
            t.exports = function() {
                this.__data__ = n ? n(null) : {}, this.size = 0;
            };
        },
        9184: t => {
            t.exports = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e;
            };
        },
        7747: (t, e, r) => {
            var n = r(1960), o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = this.__data__;
                if (n) {
                    var r = e[t];
                    return "__lodash_hash_undefined__" === r ? void 0 : r;
                }
                return o.call(e, t) ? e[t] : void 0;
            };
        },
        4287: (t, e, r) => {
            var n = r(1960), o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = this.__data__;
                return n ? void 0 !== e[t] : o.call(e, t);
            };
        },
        7: (t, e, r) => {
            var n = r(1960);
            t.exports = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e, 
                this;
            };
        },
        6203: t => {
            var e = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var r = t.length, n = new t.constructor(r);
                return r && "string" == typeof t[0] && e.call(t, "index") && (n.index = t.index, 
                n.input = t.input), n;
            };
        },
        7981: (t, e, r) => {
            var n = r(3911), o = r(3887), i = r(1871), a = r(5938), u = r(1671);
            t.exports = function(t, e, r) {
                var c = t.constructor;
                switch (e) {
                  case "[object ArrayBuffer]":
                    return n(t);

                  case "[object Boolean]":
                  case "[object Date]":
                    return new c(+t);

                  case "[object DataView]":
                    return o(t, r);

                  case "[object Float32Array]":
                  case "[object Float64Array]":
                  case "[object Int8Array]":
                  case "[object Int16Array]":
                  case "[object Int32Array]":
                  case "[object Uint8Array]":
                  case "[object Uint8ClampedArray]":
                  case "[object Uint16Array]":
                  case "[object Uint32Array]":
                    return u(t, r);

                  case "[object Map]":
                  case "[object Set]":
                    return new c;

                  case "[object Number]":
                  case "[object String]":
                    return new c(t);

                  case "[object RegExp]":
                    return i(t);

                  case "[object Symbol]":
                    return a(t);
                }
            };
        },
        235: (t, e, r) => {
            var n = r(1534), o = r(9637), i = r(8089);
            t.exports = function(t) {
                return "function" != typeof t.constructor || i(t) ? {} : n(o(t));
            };
        },
        2285: (t, e, r) => {
            var n = r(7187), o = r(5962), i = r(4383), a = n ? n.isConcatSpreadable : void 0;
            t.exports = function(t) {
                return i(t) || o(t) || !!(a && t && t[a]);
            };
        },
        4683: t => {
            var e = /^(?:0|[1-9]\d*)$/;
            t.exports = function(t, r) {
                var n = typeof t;
                return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && e.test(t)) && t > -1 && t % 1 == 0 && t < r;
            };
        },
        6218: (t, e, r) => {
            var n = r(9830), o = r(9592), i = r(4683), a = r(6015);
            t.exports = function(t, e, r) {
                if (!a(r)) return !1;
                var u = typeof e;
                return !!("number" == u ? o(r) && i(e, r.length) : "string" == u && e in r) && n(r[e], t);
            };
        },
        9668: (t, e, r) => {
            var n = r(4383), o = r(3536), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
            t.exports = function(t, e) {
                if (n(t)) return !1;
                var r = typeof t;
                return !("number" != r && "symbol" != r && "boolean" != r && null != t && !o(t)) || (a.test(t) || !i.test(t) || null != e && t in Object(e));
            };
        },
        5912: t => {
            t.exports = function(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
            };
        },
        7234: (t, e, r) => {
            var n, o = r(5171), i = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
            t.exports = function(t) {
                return !!i && i in t;
            };
        },
        8089: t => {
            var e = Object.prototype;
            t.exports = function(t) {
                var r = t && t.constructor;
                return t === ("function" == typeof r && r.prototype || e);
            };
        },
        8938: (t, e, r) => {
            var n = r(6015);
            t.exports = function(t) {
                return t == t && !n(t);
            };
        },
        7752: t => {
            t.exports = function() {
                this.__data__ = [], this.size = 0;
            };
        },
        718: (t, e, r) => {
            var n = r(435), o = Array.prototype.splice;
            t.exports = function(t) {
                var e = this.__data__, r = n(e, t);
                return !(r < 0) && (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, 
                !0);
            };
        },
        7849: (t, e, r) => {
            var n = r(435);
            t.exports = function(t) {
                var e = this.__data__, r = n(e, t);
                return r < 0 ? void 0 : e[r][1];
            };
        },
        3957: (t, e, r) => {
            var n = r(435);
            t.exports = function(t) {
                return n(this.__data__, t) > -1;
            };
        },
        845: (t, e, r) => {
            var n = r(435);
            t.exports = function(t, e) {
                var r = this.__data__, o = n(r, t);
                return o < 0 ? (++this.size, r.push([ t, e ])) : r[o][1] = e, this;
            };
        },
        5674: (t, e, r) => {
            var n = r(3615), o = r(789), i = r(8561);
            t.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new n,
                    map: new (i || o),
                    string: new n
                };
            };
        },
        1036: (t, e, r) => {
            var n = r(8037);
            t.exports = function(t) {
                var e = n(this, t).delete(t);
                return this.size -= e ? 1 : 0, e;
            };
        },
        31: (t, e, r) => {
            var n = r(8037);
            t.exports = function(t) {
                return n(this, t).get(t);
            };
        },
        1907: (t, e, r) => {
            var n = r(8037);
            t.exports = function(t) {
                return n(this, t).has(t);
            };
        },
        971: (t, e, r) => {
            var n = r(8037);
            t.exports = function(t, e) {
                var r = n(this, t), o = r.size;
                return r.set(t, e), this.size += r.size == o ? 0 : 1, this;
            };
        },
        8887: t => {
            t.exports = function(t) {
                var e = -1, r = Array(t.size);
                return t.forEach((function(t, n) {
                    r[++e] = [ n, t ];
                })), r;
            };
        },
        6459: t => {
            t.exports = function(t, e) {
                return function(r) {
                    return null != r && (r[t] === e && (void 0 !== e || t in Object(r)));
                };
            };
        },
        2110: (t, e, r) => {
            var n = r(9098);
            t.exports = function(t) {
                var e = n(t, (function(t) {
                    return 500 === r.size && r.clear(), t;
                })), r = e.cache;
                return e;
            };
        },
        1960: (t, e, r) => {
            var n = r(3188)(Object, "create");
            t.exports = n;
        },
        6128: (t, e, r) => {
            var n = r(1429)(Object.keys, Object);
            t.exports = n;
        },
        5567: t => {
            t.exports = function(t) {
                var e = [];
                if (null != t) for (var r in Object(t)) e.push(r);
                return e;
            };
        },
        3271: (t, e, r) => {
            t = r.nmd(t);
            var n = r(5194), o = e && !e.nodeType && e, i = o && t && !t.nodeType && t, a = i && i.exports === o && n.process, u = function() {
                try {
                    var t = i && i.require && i.require("util").types;
                    return t || a && a.binding && a.binding("util");
                } catch (t) {}
            }();
            t.exports = u;
        },
        8704: t => {
            var e = Object.prototype.toString;
            t.exports = function(t) {
                return e.call(t);
            };
        },
        1429: t => {
            t.exports = function(t, e) {
                return function(r) {
                    return t(e(r));
                };
            };
        },
        3903: (t, e, r) => {
            var n = r(4235), o = Math.max;
            t.exports = function(t, e, r) {
                return e = o(void 0 === e ? t.length - 1 : e, 0), function() {
                    for (var i = arguments, a = -1, u = o(i.length - e, 0), c = Array(u); ++a < u; ) c[a] = i[e + a];
                    a = -1;
                    for (var s = Array(e + 1); ++a < e; ) s[a] = i[a];
                    return s[e] = r(c), n(t, this, s);
                };
            };
        },
        7183: (t, e, r) => {
            var n = r(5194), o = "object" == typeof self && self && self.Object === Object && self, i = n || o || Function("return this")();
            t.exports = i;
        },
        4892: t => {
            t.exports = function(t, e) {
                if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e];
            };
        },
        6810: t => {
            t.exports = function(t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this;
            };
        },
        5813: t => {
            t.exports = function(t) {
                return this.__data__.has(t);
            };
        },
        8629: t => {
            t.exports = function(t) {
                var e = -1, r = Array(t.size);
                return t.forEach((function(t) {
                    r[++e] = t;
                })), r;
            };
        },
        2139: (t, e, r) => {
            var n = r(7316), o = r(5369)(n);
            t.exports = o;
        },
        5369: t => {
            var e = Date.now;
            t.exports = function(t) {
                var r = 0, n = 0;
                return function() {
                    var o = e(), i = 16 - (o - n);
                    if (n = o, i > 0) {
                        if (++r >= 800) return arguments[0];
                    } else r = 0;
                    return t.apply(void 0, arguments);
                };
            };
        },
        8926: (t, e, r) => {
            var n = r(789);
            t.exports = function() {
                this.__data__ = new n, this.size = 0;
            };
        },
        2680: t => {
            t.exports = function(t) {
                var e = this.__data__, r = e.delete(t);
                return this.size = e.size, r;
            };
        },
        3851: t => {
            t.exports = function(t) {
                return this.__data__.get(t);
            };
        },
        8423: t => {
            t.exports = function(t) {
                return this.__data__.has(t);
            };
        },
        3967: (t, e, r) => {
            var n = r(789), o = r(8561), i = r(1451);
            t.exports = function(t, e) {
                var r = this.__data__;
                if (r instanceof n) {
                    var a = r.__data__;
                    if (!o || a.length < 199) return a.push([ t, e ]), this.size = ++r.size, this;
                    r = this.__data__ = new i(a);
                }
                return r.set(t, e), this.size = r.size, this;
            };
        },
        9705: t => {
            t.exports = function(t, e, r) {
                for (var n = r - 1, o = t.length; ++n < o; ) if (t[n] === e) return n;
                return -1;
            };
        },
        6966: (t, e, r) => {
            var n = r(8284), o = r(5963), i = r(5564);
            t.exports = function(t) {
                return o(t) ? i(t) : n(t);
            };
        },
        412: (t, e, r) => {
            var n = r(2110), o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i = /\\(\\)?/g, a = n((function(t) {
                var e = [];
                return 46 === t.charCodeAt(0) && e.push(""), t.replace(o, (function(t, r, n, o) {
                    e.push(n ? o.replace(i, "$1") : r || t);
                })), e;
            }));
            t.exports = a;
        },
        4671: (t, e, r) => {
            var n = r(3536);
            t.exports = function(t) {
                if ("string" == typeof t || n(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            };
        },
        275: t => {
            var e = Function.prototype.toString;
            t.exports = function(t) {
                if (null != t) {
                    try {
                        return e.call(t);
                    } catch (t) {}
                    try {
                        return t + "";
                    } catch (t) {}
                }
                return "";
            };
        },
        1158: t => {
            var e = /\s/;
            t.exports = function(t) {
                for (var r = t.length; r-- && e.test(t.charAt(r)); ) ;
                return r;
            };
        },
        5564: t => {
            var e = "\\ud800-\\udfff", r = "[" + e + "]", n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", o = "\\ud83c[\\udffb-\\udfff]", i = "[^" + e + "]", a = "(?:\\ud83c[\\udde6-\\uddff]){2}", u = "[\\ud800-\\udbff][\\udc00-\\udfff]", c = "(?:" + n + "|" + o + ")" + "?", s = "[\\ufe0e\\ufe0f]?", l = s + c + ("(?:\\u200d(?:" + [ i, a, u ].join("|") + ")" + s + c + ")*"), f = "(?:" + [ i + n + "?", n, a, u, r ].join("|") + ")", p = RegExp(o + "(?=" + o + ")|" + f + l, "g");
            t.exports = function(t) {
                return t.match(p) || [];
            };
        },
        9857: (t, e, r) => {
            var n = r(2177), o = r(6837), i = r(7921), a = r(9592), u = r(8089), c = r(8420), s = Object.prototype.hasOwnProperty, l = i((function(t, e) {
                if (u(e) || a(e)) o(e, c(e), t); else for (var r in e) s.call(e, r) && n(t, r, e[r]);
            }));
            t.exports = l;
        },
        1285: (t, e, r) => {
            var n = r(9557);
            t.exports = function(t) {
                return n(t, 5);
            };
        },
        6167: t => {
            t.exports = function(t) {
                for (var e = -1, r = null == t ? 0 : t.length, n = 0, o = []; ++e < r; ) {
                    var i = t[e];
                    i && (o[n++] = i);
                }
                return o;
            };
        },
        5316: (t, e, r) => {
            var n = r(5862), o = r(3234), i = r(8601), a = r(4383);
            t.exports = function() {
                var t = arguments.length;
                if (!t) return [];
                for (var e = Array(t - 1), r = arguments[0], u = t; u--; ) e[u - 1] = arguments[u];
                return n(a(r) ? i(r) : [ r ], o(e, 1));
            };
        },
        3368: t => {
            t.exports = function(t) {
                return function() {
                    return t;
                };
            };
        },
        1799: (t, e, r) => {
            var n = r(2981), o = r(3234), i = r(5580), a = r(5919), u = i((function(t, e) {
                return a(t) ? n(t, o(e, 1, a, !0)) : [];
            }));
            t.exports = u;
        },
        1910: (t, e, r) => {
            var n = r(2981), o = r(3234), i = r(4207), a = r(5580), u = r(5919), c = r(9804), s = a((function(t, e) {
                var r = c(e);
                return u(r) && (r = void 0), u(t) ? n(t, o(e, 1, u, !0), i(r, 2)) : [];
            }));
            t.exports = s;
        },
        9830: t => {
            t.exports = function(t, e) {
                return t === e || t != t && e != e;
            };
        },
        3656: (t, e, r) => {
            t.exports = r(2486);
        },
        8259: (t, e, r) => {
            var n = r(7257), o = r(8420);
            t.exports = function(t) {
                return null == t ? [] : n(t, o(t));
            };
        },
        9650: (t, e, r) => {
            var n = r(2748);
            t.exports = function(t, e, r) {
                var o = null == t ? void 0 : n(t, e);
                return void 0 === o ? r : o;
            };
        },
        2993: (t, e, r) => {
            var n = r(1607), o = r(3852);
            t.exports = function(t, e) {
                return null != t && o(t, e, n);
            };
        },
        2486: t => {
            t.exports = function(t) {
                return t && t.length ? t[0] : void 0;
            };
        },
        9090: t => {
            t.exports = function(t) {
                return t;
            };
        },
        2485: (t, e, r) => {
            var n = r(8481), o = r(9592), i = r(7561), a = r(9147), u = r(3830), c = Math.max;
            t.exports = function(t, e, r, s) {
                t = o(t) ? t : u(t), r = r && !s ? a(r) : 0;
                var l = t.length;
                return r < 0 && (r = c(l + r, 0)), i(t) ? r <= l && t.indexOf(e, r) > -1 : !!l && n(t, e, r) > -1;
            };
        },
        5962: (t, e, r) => {
            var n = r(6252), o = r(6184), i = Object.prototype, a = i.hasOwnProperty, u = i.propertyIsEnumerable, c = n(function() {
                return arguments;
            }()) ? n : function(t) {
                return o(t) && a.call(t, "callee") && !u.call(t, "callee");
            };
            t.exports = c;
        },
        4383: t => {
            var e = Array.isArray;
            t.exports = e;
        },
        9592: (t, e, r) => {
            var n = r(4360), o = r(1784);
            t.exports = function(t) {
                return null != t && o(t.length) && !n(t);
            };
        },
        5919: (t, e, r) => {
            var n = r(9592), o = r(6184);
            t.exports = function(t) {
                return o(t) && n(t);
            };
        },
        8098: (t, e, r) => {
            t = r.nmd(t);
            var n = r(7183), o = r(1329), i = e && !e.nodeType && e, a = i && t && !t.nodeType && t, u = a && a.exports === i ? n.Buffer : void 0, c = (u ? u.isBuffer : void 0) || o;
            t.exports = c;
        },
        4806: (t, e, r) => {
            var n = r(6184), o = r(5229);
            t.exports = function(t) {
                return n(t) && 1 === t.nodeType && !o(t);
            };
        },
        4360: (t, e, r) => {
            var n = r(6990), o = r(6015);
            t.exports = function(t) {
                if (!o(t)) return !1;
                var e = n(t);
                return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e;
            };
        },
        1784: t => {
            t.exports = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
            };
        },
        4024: (t, e, r) => {
            var n = r(162), o = r(6143), i = r(3271), a = i && i.isMap, u = a ? o(a) : n;
            t.exports = u;
        },
        6015: t => {
            t.exports = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e);
            };
        },
        6184: t => {
            t.exports = function(t) {
                return null != t && "object" == typeof t;
            };
        },
        5229: (t, e, r) => {
            var n = r(6990), o = r(9637), i = r(6184), a = Function.prototype, u = Object.prototype, c = a.toString, s = u.hasOwnProperty, l = c.call(Object);
            t.exports = function(t) {
                if (!i(t) || "[object Object]" != n(t)) return !1;
                var e = o(t);
                if (null === e) return !0;
                var r = s.call(e, "constructor") && e.constructor;
                return "function" == typeof r && r instanceof r && c.call(r) == l;
            };
        },
        8802: (t, e, r) => {
            var n = r(8344), o = r(6143), i = r(3271), a = i && i.isSet, u = a ? o(a) : n;
            t.exports = u;
        },
        7561: (t, e, r) => {
            var n = r(6990), o = r(4383), i = r(6184);
            t.exports = function(t) {
                return "string" == typeof t || !o(t) && i(t) && "[object String]" == n(t);
            };
        },
        3536: (t, e, r) => {
            var n = r(6990), o = r(6184);
            t.exports = function(t) {
                return "symbol" == typeof t || o(t) && "[object Symbol]" == n(t);
            };
        },
        3905: (t, e, r) => {
            var n = r(4271), o = r(6143), i = r(3271), a = i && i.isTypedArray, u = a ? o(a) : n;
            t.exports = u;
        },
        8420: (t, e, r) => {
            var n = r(661), o = r(9966), i = r(9592);
            t.exports = function(t) {
                return i(t) ? n(t) : o(t);
            };
        },
        3435: (t, e, r) => {
            var n = r(661), o = r(7641), i = r(9592);
            t.exports = function(t) {
                return i(t) ? n(t, !0) : o(t);
            };
        },
        9804: t => {
            t.exports = function(t) {
                var e = null == t ? 0 : t.length;
                return e ? t[e - 1] : void 0;
            };
        },
        764: (t, e, r) => {
            var n = r(6138), o = r(4207), i = r(5218), a = r(4383);
            t.exports = function(t, e) {
                return (a(t) ? n : i)(t, o(e, 3));
            };
        },
        9098: (t, e, r) => {
            var n = r(1451);
            function memoize(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
                var memoized = function() {
                    var r = arguments, n = e ? e.apply(this, r) : r[0], o = memoized.cache;
                    if (o.has(n)) return o.get(n);
                    var i = t.apply(this, r);
                    return memoized.cache = o.set(n, i) || o, i;
                };
                return memoized.cache = new (memoize.Cache || n), memoized;
            }
            memoize.Cache = n, t.exports = memoize;
        },
        1582: (t, e, r) => {
            var n = r(436), o = r(7921)((function(t, e, r) {
                n(t, e, r);
            }));
            t.exports = o;
        },
        7600: t => {
            t.exports = function() {};
        },
        3681: (t, e, r) => {
            var n = r(5351), o = r(4953), i = r(9668), a = r(4671);
            t.exports = function(t) {
                return i(t) ? n(a(t)) : o(t);
            };
        },
        6499: t => {
            t.exports = function() {
                return [];
            };
        },
        1329: t => {
            t.exports = function() {
                return !1;
            };
        },
        5410: (t, e, r) => {
            var n = r(3572), o = 1 / 0;
            t.exports = function(t) {
                return t ? (t = n(t)) === o || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0;
            };
        },
        9147: (t, e, r) => {
            var n = r(5410);
            t.exports = function(t) {
                var e = n(t), r = e % 1;
                return e == e ? r ? e - r : e : 0;
            };
        },
        3572: (t, e, r) => {
            var n = r(7066), o = r(6015), i = r(3536), a = /^[-+]0x[0-9a-f]+$/i, u = /^0b[01]+$/i, c = /^0o[0-7]+$/i, s = parseInt;
            t.exports = function(t) {
                if ("number" == typeof t) return t;
                if (i(t)) return NaN;
                if (o(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = o(e) ? e + "" : e;
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = n(t);
                var r = u.test(t);
                return r || c.test(t) ? s(t.slice(2), r ? 2 : 8) : a.test(t) ? NaN : +t;
            };
        },
        7774: (t, e, r) => {
            var n = r(6837), o = r(3435);
            t.exports = function(t) {
                return n(t, o(t));
            };
        },
        2832: (t, e, r) => {
            var n = r(4742);
            t.exports = function(t) {
                return null == t ? "" : n(t);
            };
        },
        8340: (t, e, r) => {
            var n = r(4742), o = r(7066), i = r(1308), a = r(6153), u = r(7246), c = r(6966), s = r(2832);
            t.exports = function(t, e, r) {
                if ((t = s(t)) && (r || void 0 === e)) return o(t);
                if (!t || !(e = n(e))) return t;
                var l = c(t), f = c(e), p = u(l, f), y = a(l, f) + 1;
                return i(l, p, y).join("");
            };
        },
        953: (t, e, r) => {
            var n = r(3247);
            t.exports = function(t) {
                return t && t.length ? n(t) : [];
            };
        },
        3830: (t, e, r) => {
            var n = r(7608), o = r(8420);
            t.exports = function(t) {
                return null == t ? [] : n(t, o(t));
            };
        }
    }, e = {};
    function __webpack_require__(r) {
        var n = e[r];
        if (void 0 !== n) return n.exports;
        var o = e[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, __webpack_require__), o.loaded = !0, o.exports;
    }
    __webpack_require__.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return __webpack_require__.d(e, {
            a: e
        }), e;
    }, __webpack_require__.d = (t, e) => {
        for (var r in e) __webpack_require__.o(e, r) && !__webpack_require__.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        });
    }, __webpack_require__.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (t) {
            if ("object" == typeof window) return window;
        }
    }(), __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), 
    __webpack_require__.nmd = t => (t.paths = [], t.children || (t.children = []), t), 
    (() => {
        "use strict";
        const t = jQuery;
        var e = __webpack_require__.n(t);
        const r = React;
        var n = __webpack_require__.n(r);
        const o = ReactDom;
        var i = __webpack_require__(5316), a = __webpack_require__.n(i), u = __webpack_require__(1910), c = __webpack_require__.n(u), s = __webpack_require__(4383), l = __webpack_require__.n(s), f = __webpack_require__(6015), p = __webpack_require__.n(f), y = __webpack_require__(3656), d = __webpack_require__.n(y), v = __webpack_require__(9650), h = __webpack_require__.n(v);
        const _ = PropTypes;
        var m = __webpack_require__.n(_), b = __webpack_require__(953), g = __webpack_require__.n(b), w = __webpack_require__(764), O = __webpack_require__.n(w);
        const P = classnames;
        var j = __webpack_require__.n(P), k = __webpack_require__(5281), x = __webpack_require__.n(k);
        function url_url(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new (x().Cloudinary)({
                cloud_name: CLOUDINARY_CONFIG.cloud_name,
                secure: !0
            }).url(t, e);
        }
        function _typeof(t) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, _typeof(t);
        }
        function _defineProperties(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, _toPropertyKey(n.key), n);
            }
        }
        function _toPropertyKey(t) {
            var e = function(t, e) {
                if ("object" != _typeof(t) || !t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != _typeof(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === e ? String : Number)(t);
            }(t, "string");
            return "symbol" == _typeof(e) ? e : e + "";
        }
        function _callSuper(t, e, r) {
            return e = _getPrototypeOf(e), function(t, e) {
                if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }(t);
            }(t, _isNativeReflectConstruct() ? Reflect.construct(e, r || [], _getPrototypeOf(t).constructor) : e.apply(t, r));
        }
        function _isNativeReflectConstruct() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
            } catch (t) {}
            return (_isNativeReflectConstruct = function() {
                return !!t;
            })();
        }
        function _getPrototypeOf(t) {
            return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
            }, _getPrototypeOf(t);
        }
        function _setPrototypeOf(t, e) {
            return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t;
            }, _setPrototypeOf(t, e);
        }
        var S = function(t) {
            function Resource(t) {
                var e;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, Resource), e = _callSuper(this, Resource, [ t ]);
                var r = t.title, n = t.description, o = t.credit, i = t.gravity, a = t.foreground_colour, u = t.background_colour;
                return e.state = {
                    title: r,
                    description: n,
                    credit: o,
                    gravity: i,
                    foreground_colour: a,
                    background_colour: u
                }, e.updateTitle = e.updateTitle.bind(e), e.updateDescription = e.updateDescription.bind(e), 
                e.updateCredit = e.updateCredit.bind(e), e.updateGravity = e.updateGravity.bind(e), 
                e.updateFgColour = e.updateFgColour.bind(e), e.updateBgColour = e.updateBgColour.bind(e), 
                e.removeResource = e.removeResource.bind(e), e.moveResourceUp = e.moveResourceUp.bind(e), 
                e.moveResourceDown = e.moveResourceDown.bind(e), e.url = e.url.bind(e), e.thumbnailUrl = e.thumbnailUrl.bind(e), 
                e.titleFieldLabel = e.titleFieldLabel.bind(e), e.titleFieldPlaceholder = e.titleFieldPlaceholder.bind(e), 
                e.descriptionFieldLabel = e.descriptionFieldLabel.bind(e), e.descriptionFieldPlaceholder = e.descriptionFieldPlaceholder.bind(e), 
                e.creditFieldLabel = e.creditFieldLabel.bind(e), e.creditFieldPlaceholder = e.creditFieldPlaceholder.bind(e), 
                e;
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && _setPrototypeOf(t, e);
            }(Resource, t), e = Resource, (r = [ {
                key: "updateTitle",
                value: function(t) {
                    this.setState({
                        title: t.target.value
                    }), this.props.onChange(this.props.public_id, "title", t.target.value);
                }
            }, {
                key: "updateDescription",
                value: function(t) {
                    this.setState({
                        description: t.target.value
                    }), this.props.onChange(this.props.public_id, "description", t.target.value);
                }
            }, {
                key: "updateCredit",
                value: function(t) {
                    this.setState({
                        credit: t.target.value
                    }), this.props.onChange(this.props.public_id, "credit", t.target.value);
                }
            }, {
                key: "updateGravity",
                value: function(t) {
                    this.setState({
                        gravity: t.target.value
                    }), this.props.onChange(this.props.public_id, "gravity", t.target.value);
                }
            }, {
                key: "updateFgColour",
                value: function(t) {
                    this.setState({
                        foreground_colour: t.target.value || null
                    }), this.props.onChange(this.props.public_id, "foreground_colour", t.target.value || null);
                }
            }, {
                key: "updateBgColour",
                value: function(t) {
                    this.setState({
                        background_colour: t.target.value || null
                    }), this.props.onChange(this.props.public_id, "background_colour", t.target.value || null);
                }
            }, {
                key: "removeResource",
                value: function() {
                    this.props.onRemoveResource(this.props.public_id);
                }
            }, {
                key: "moveResourceUp",
                value: function() {
                    this.props.onMoveResource(this.props.public_id, -1);
                }
            }, {
                key: "moveResourceDown",
                value: function() {
                    this.props.onMoveResource(this.props.public_id, 1);
                }
            }, {
                key: "url",
                value: function() {
                    var t = this.props;
                    return url_url(t.public_id, {
                        resource_type: t.resource_type
                    });
                }
            }, {
                key: "thumbnailUrl",
                value: function() {
                    return null;
                }
            }, {
                key: "titleFieldLabel",
                value: function() {
                    return "Title";
                }
            }, {
                key: "titleFieldPlaceholder",
                value: function() {
                    return this.state.title;
                }
            }, {
                key: "descriptionFieldLabel",
                value: function() {
                    return "Description";
                }
            }, {
                key: "descriptionFieldPlaceholder",
                value: function() {
                    return "Optionally provide some additional information…";
                }
            }, {
                key: "creditFieldLabel",
                value: function() {
                    return "Credit";
                }
            }, {
                key: "creditFieldPlaceholder",
                value: function() {
                    return "Optionally provide copyright information…";
                }
            }, {
                key: "gravityFieldLabel",
                value: function() {
                    return "Gravity";
                }
            }, {
                key: "fgColourFieldLabel",
                value: function() {
                    return "Foreground Colour";
                }
            }, {
                key: "bgColourFieldLabel",
                value: function() {
                    return "Background Colour";
                }
            }, {
                key: "fields",
                value: function() {
                    var t = this.props.fields;
                    return t = t.split(","), g()(t);
                }
            }, {
                key: "renderOrder",
                value: function() {
                    var t = this.props, e = t.firstItem, r = t.lastItem;
                    return (!e || !r) && n().createElement("div", {
                        className: "cloudinary-field-order"
                    }, n().createElement("button", {
                        className: j()("btn", "btn-sm", "btn-block", "cloudinary-field-order__move", "cloudinary-field-order__move--up", e && "cloudinary-field-order__move--first"),
                        type: "button",
                        onClick: this.moveResourceUp,
                        disabled: e,
                        title: "Move Up"
                    }, n().createElement("ins", {
                        className: "font-icon-up-open"
                    }, " ")), n().createElement("button", {
                        className: j()("btn", "btn-sm", "btn-block", "cloudinary-field-order__move", "cloudinary-field-order__move--down", r && "cloudinary-field-order__move--last"),
                        type: "button",
                        onClick: this.moveResourceDown,
                        disabled: r,
                        title: "Move Down"
                    }, n().createElement("ins", {
                        className: "font-icon-down-open"
                    }, " ")));
                }
            }, {
                key: "render",
                value: function() {
                    var t = this, e = this.state, r = e.title, o = e.description, i = e.credit, a = e.gravity, u = e.foreground_colour, c = e.background_colour, s = this.props, l = s.actual_type, f = s.public_id, p = s.resource_type, y = s.top_colours, d = s.gravityOptions, v = this.thumbnailUrl();
                    return n().createElement("div", {
                        className: "cloudinary-field__item cloudinary-field__item--".concat(l)
                    }, this.renderOrder(), n().createElement("div", {
                        className: "cloudinary-field__media cloudinary-field__media--".concat(l)
                    }, n().createElement("div", {
                        className: "cloudinary-field__preview cloudinary-field__preview--".concat(l)
                    }, v && n().createElement("img", {
                        src: v
                    })), n().createElement("div", {
                        className: "cloudinary-field__actions"
                    }, n().createElement("button", {
                        type: "button",
                        className: "cloudinary-field__action cloudinary-field__action--remove",
                        title: "Remove",
                        onClick: this.removeResource
                    }, n().createElement("span", {
                        className: "cloudinary-field__sr"
                    }, "Remove")), n().createElement("a", {
                        className: "cloudinary-field__action cloudinary-field__action--link",
                        title: "View original",
                        href: this.url(),
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, n().createElement("span", {
                        className: "cloudinary-field__sr"
                    }, "View original")))), n().createElement("div", {
                        className: "cloudinary-field__meta"
                    }, this.fields().map((function(e, s) {
                        return "title" === e ? n().createElement("div", {
                            key: s,
                            className: "cloudinary-field__field"
                        }, n().createElement("label", {
                            htmlFor: "".concat(f, "_title"),
                            className: "cloudinary-field__label"
                        }, t.titleFieldLabel()), n().createElement("div", {
                            className: "cloudinary-field__input"
                        }, n().createElement("textarea", {
                            id: "".concat(f, "_title"),
                            className: "textarea",
                            rows: "2",
                            placeholder: t.titleFieldPlaceholder(),
                            value: r,
                            onChange: t.updateTitle
                        }))) : "description" === e ? n().createElement("div", {
                            key: s,
                            className: "cloudinary-field__field"
                        }, n().createElement("label", {
                            htmlFor: "".concat(f, "_description"),
                            className: "cloudinary-field__label"
                        }, t.descriptionFieldLabel()), n().createElement("div", {
                            className: "cloudinary-field__input"
                        }, n().createElement("textarea", {
                            id: "".concat(f, "_description"),
                            className: "textarea",
                            rows: "3",
                            placeholder: t.descriptionFieldPlaceholder(),
                            value: o,
                            onChange: t.updateDescription
                        }))) : "credit" === e ? n().createElement("div", {
                            key: s,
                            className: "cloudinary-field__field"
                        }, n().createElement("label", {
                            htmlFor: "".concat(f, "_credit"),
                            className: "cloudinary-field__label"
                        }, t.creditFieldLabel()), n().createElement("div", {
                            className: "cloudinary-field__input"
                        }, n().createElement("input", {
                            type: "text",
                            id: "".concat(f, "_credit"),
                            className: "text",
                            placeholder: t.creditFieldPlaceholder(),
                            value: i,
                            onChange: t.updateCredit
                        }))) : "gravity" === e ? n().createElement("div", {
                            key: s,
                            className: "cloudinary-field__field"
                        }, n().createElement("label", {
                            htmlFor: "".concat(f, "_gravity"),
                            className: "cloudinary-field__label"
                        }, t.gravityFieldLabel()), n().createElement("div", {
                            className: "cloudinary-field__input"
                        }, n().createElement("select", {
                            id: "".concat(f, "_gravity"),
                            className: "select",
                            onChange: t.updateGravity
                        }, O()(d, (function(t, e) {
                            return n().createElement("option", {
                                value: e,
                                selected: e === a
                            }, t);
                        }))))) : "fg-colour" === e && "image" === p && y && y.length ? n().createElement("div", {
                            key: s,
                            className: "cloudinary-field__field"
                        }, n().createElement("label", {
                            className: "cloudinary-field__label"
                        }, t.fgColourFieldLabel()), n().createElement("div", {
                            className: "cloudinary-field__input"
                        }, n().createElement("div", {
                            className: "cloudinary-field__picker"
                        }, n().createElement("label", {
                            className: j()("cloudinary-field__colour", null === u && "cloudinary-field__colour--selected")
                        }, n().createElement("input", {
                            type: "radio",
                            checked: null === u,
                            value: null,
                            onChange: t.updateFgColour
                        }), n().createElement("span", null, "None")), y.map((function(e, r) {
                            var o = e.colour;
                            return n().createElement("label", {
                                key: r,
                                className: j()("cloudinary-field__colour", u === o && "cloudinary-field__colour--selected"),
                                style: {
                                    backgroundColor: o
                                }
                            }, n().createElement("input", {
                                type: "radio",
                                checked: u === o,
                                value: o,
                                onChange: t.updateFgColour
                            }), n().createElement("span", null, o));
                        }))))) : "bg-colour" === e && "image" === p && y && y.length ? n().createElement("div", {
                            key: s,
                            className: "cloudinary-field__field"
                        }, n().createElement("label", {
                            className: "cloudinary-field__label"
                        }, t.bgColourFieldLabel()), n().createElement("div", {
                            className: "cloudinary-field__input"
                        }, n().createElement("div", {
                            className: "cloudinary-field__picker"
                        }, n().createElement("label", {
                            className: j()("cloudinary-field__colour", null === c && "cloudinary-field__colour--selected")
                        }, n().createElement("input", {
                            type: "radio",
                            checked: null === c,
                            value: null,
                            onChange: t.updateBgColour
                        }), n().createElement("span", null, "None")), y.map((function(e, r) {
                            var o = e.colour;
                            return n().createElement("label", {
                                key: r,
                                className: j()("cloudinary-field__colour", c === o && "cloudinary-field__colour--selected"),
                                style: {
                                    backgroundColor: o
                                }
                            }, n().createElement("input", {
                                type: "radio",
                                checked: c === o,
                                value: o,
                                onChange: t.updateBgColour
                            }), n().createElement("span", null, o));
                        }))))) : null;
                    }))));
                }
            } ]) && _defineProperties(e.prototype, r), o && _defineProperties(e, o), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e;
            var e, r, o;
        }(r.Component);
        function image_typeof(t) {
            return image_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, image_typeof(t);
        }
        function image_defineProperties(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, image_toPropertyKey(n.key), n);
            }
        }
        function image_toPropertyKey(t) {
            var e = function(t, e) {
                if ("object" != image_typeof(t) || !t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != image_typeof(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === e ? String : Number)(t);
            }(t, "string");
            return "symbol" == image_typeof(e) ? e : e + "";
        }
        function image_callSuper(t, e, r) {
            return e = image_getPrototypeOf(e), function(t, e) {
                if (e && ("object" == image_typeof(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }(t);
            }(t, image_isNativeReflectConstruct() ? Reflect.construct(e, r || [], image_getPrototypeOf(t).constructor) : e.apply(t, r));
        }
        function image_isNativeReflectConstruct() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
            } catch (t) {}
            return (image_isNativeReflectConstruct = function() {
                return !!t;
            })();
        }
        function image_getPrototypeOf(t) {
            return image_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
            }, image_getPrototypeOf(t);
        }
        function image_setPrototypeOf(t, e) {
            return image_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t;
            }, image_setPrototypeOf(t, e);
        }
        S.propTypes = {
            actual_type: m().string.isRequired,
            public_id: m().string.isRequired,
            resource_type: m().string.isRequired,
            title: m().string,
            description: m().string,
            credit: m().string,
            gravity: m().string,
            top_colours: m().array,
            foreground_colour: m().string,
            background_colour: m().string,
            fields: m().string.isRequired,
            gravityOptions: m().object.isRequired,
            onChange: m().func.isRequired,
            onRemoveResource: m().func.isRequired,
            onMoveResource: m().func.isRequired,
            firstItem: m().bool.isRequired,
            lastItem: m().bool.isRequired
        }, S.defaultProps = {
            title: null,
            description: null,
            credit: null,
            gravity: null,
            top_colours: null,
            foreground_colour: null,
            background_colour: null
        };
        var E = function(t) {
            function Image() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, Image), image_callSuper(this, Image, arguments);
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && image_setPrototypeOf(t, e);
            }(Image, t), e = Image, (r = [ {
                key: "titleFieldLabel",
                value: function() {
                    return "Caption";
                }
            }, {
                key: "titleFieldPlaceholder",
                value: function() {
                    return "Provide a friendly caption…";
                }
            }, {
                key: "descriptionFieldPlaceholder",
                value: function() {
                    return "Describe what's in the image for screen readers…";
                }
            }, {
                key: "thumbnailUrl",
                value: function() {
                    return url_url(this.props.public_id, {
                        resource_type: "image",
                        width: 200,
                        height: 150,
                        crop: "pad",
                        quality: "auto",
                        fetch_format: "auto",
                        background: "auto"
                    });
                }
            } ]) && image_defineProperties(e.prototype, r), n && image_defineProperties(e, n), 
            Object.defineProperty(e, "prototype", {
                writable: !1
            }), e;
            var e, r, n;
        }(S);
        function video_typeof(t) {
            return video_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, video_typeof(t);
        }
        function video_defineProperties(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, video_toPropertyKey(n.key), n);
            }
        }
        function video_toPropertyKey(t) {
            var e = function(t, e) {
                if ("object" != video_typeof(t) || !t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != video_typeof(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === e ? String : Number)(t);
            }(t, "string");
            return "symbol" == video_typeof(e) ? e : e + "";
        }
        function video_callSuper(t, e, r) {
            return e = video_getPrototypeOf(e), function(t, e) {
                if (e && ("object" == video_typeof(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }(t);
            }(t, video_isNativeReflectConstruct() ? Reflect.construct(e, r || [], video_getPrototypeOf(t).constructor) : e.apply(t, r));
        }
        function video_isNativeReflectConstruct() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
            } catch (t) {}
            return (video_isNativeReflectConstruct = function() {
                return !!t;
            })();
        }
        function video_getPrototypeOf(t) {
            return video_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
            }, video_getPrototypeOf(t);
        }
        function video_setPrototypeOf(t, e) {
            return video_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t;
            }, video_setPrototypeOf(t, e);
        }
        var C = function(t) {
            function Video() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, Video), video_callSuper(this, Video, arguments);
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && video_setPrototypeOf(t, e);
            }(Video, t), e = Video, (r = [ {
                key: "thumbnailUrl",
                value: function() {
                    return url_url(this.props.public_id, {
                        resource_type: "video",
                        width: 200,
                        height: 150,
                        crop: "pad",
                        quality: "auto",
                        format: "jpg",
                        background: "auto"
                    });
                }
            } ]) && video_defineProperties(e.prototype, r), n && video_defineProperties(e, n), 
            Object.defineProperty(e, "prototype", {
                writable: !1
            }), e;
            var e, r, n;
        }(S);
        function file_typeof(t) {
            return file_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, file_typeof(t);
        }
        function file_defineProperties(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, file_toPropertyKey(n.key), n);
            }
        }
        function file_toPropertyKey(t) {
            var e = function(t, e) {
                if ("object" != file_typeof(t) || !t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != file_typeof(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === e ? String : Number)(t);
            }(t, "string");
            return "symbol" == file_typeof(e) ? e : e + "";
        }
        function file_callSuper(t, e, r) {
            return e = file_getPrototypeOf(e), function(t, e) {
                if (e && ("object" == file_typeof(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }(t);
            }(t, file_isNativeReflectConstruct() ? Reflect.construct(e, r || [], file_getPrototypeOf(t).constructor) : e.apply(t, r));
        }
        function file_isNativeReflectConstruct() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
            } catch (t) {}
            return (file_isNativeReflectConstruct = function() {
                return !!t;
            })();
        }
        function file_getPrototypeOf(t) {
            return file_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
            }, file_getPrototypeOf(t);
        }
        function file_setPrototypeOf(t, e) {
            return file_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t;
            }, file_setPrototypeOf(t, e);
        }
        var A = function(t) {
            function File() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, File), file_callSuper(this, File, arguments);
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && file_setPrototypeOf(t, e);
            }(File, t), e = File, r && file_defineProperties(e.prototype, r), n && file_defineProperties(e, n), 
            Object.defineProperty(e, "prototype", {
                writable: !1
            }), e;
            var e, r, n;
        }(S);
        function audio_typeof(t) {
            return audio_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, audio_typeof(t);
        }
        function audio_defineProperties(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, audio_toPropertyKey(n.key), n);
            }
        }
        function audio_toPropertyKey(t) {
            var e = function(t, e) {
                if ("object" != audio_typeof(t) || !t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != audio_typeof(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === e ? String : Number)(t);
            }(t, "string");
            return "symbol" == audio_typeof(e) ? e : e + "";
        }
        function audio_callSuper(t, e, r) {
            return e = audio_getPrototypeOf(e), function(t, e) {
                if (e && ("object" == audio_typeof(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }(t);
            }(t, audio_isNativeReflectConstruct() ? Reflect.construct(e, r || [], audio_getPrototypeOf(t).constructor) : e.apply(t, r));
        }
        function audio_isNativeReflectConstruct() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
            } catch (t) {}
            return (audio_isNativeReflectConstruct = function() {
                return !!t;
            })();
        }
        function audio_getPrototypeOf(t) {
            return audio_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
            }, audio_getPrototypeOf(t);
        }
        function audio_setPrototypeOf(t, e) {
            return audio_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t;
            }, audio_setPrototypeOf(t, e);
        }
        var R = function(t) {
            function Audio() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, Audio), audio_callSuper(this, Audio, arguments);
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && audio_setPrototypeOf(t, e);
            }(Audio, t), e = Audio, (r = [ {
                key: "thumbnailUrl",
                value: function() {
                    return url_url(this.props.public_id, {
                        resource_type: "video",
                        width: 200,
                        height: 150,
                        crop: "fit",
                        quality: "auto",
                        fetch_format: "auto",
                        flags: "waveform",
                        color: "#5589a7",
                        background: "#fafbfc"
                    });
                }
            } ]) && audio_defineProperties(e.prototype, r), n && audio_defineProperties(e, n), 
            Object.defineProperty(e, "prototype", {
                writable: !1
            }), e;
            var e, r, n;
        }(S);
        function field_typeof(t) {
            return field_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, field_typeof(t);
        }
        function _extends() {
            return _extends = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r) ({}).hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
            }, _extends.apply(null, arguments);
        }
        function ownKeys(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), r.push.apply(r, n);
            }
            return r;
        }
        function _objectSpread(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ownKeys(Object(r), !0).forEach((function(e) {
                    _defineProperty(t, e, r[e]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                }));
            }
            return t;
        }
        function _defineProperty(t, e, r) {
            return (e = field_toPropertyKey(e)) in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r, t;
        }
        function field_defineProperties(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, field_toPropertyKey(n.key), n);
            }
        }
        function field_toPropertyKey(t) {
            var e = function(t, e) {
                if ("object" != field_typeof(t) || !t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != field_typeof(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === e ? String : Number)(t);
            }(t, "string");
            return "symbol" == field_typeof(e) ? e : e + "";
        }
        function field_callSuper(t, e, r) {
            return e = field_getPrototypeOf(e), function(t, e) {
                if (e && ("object" == field_typeof(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }(t);
            }(t, field_isNativeReflectConstruct() ? Reflect.construct(e, r || [], field_getPrototypeOf(t).constructor) : e.apply(t, r));
        }
        function field_isNativeReflectConstruct() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
            } catch (t) {}
            return (field_isNativeReflectConstruct = function() {
                return !!t;
            })();
        }
        function field_getPrototypeOf(t) {
            return field_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
            }, field_getPrototypeOf(t);
        }
        function field_setPrototypeOf(t, e) {
            return field_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t;
            }, field_setPrototypeOf(t, e);
        }
        e().noConflict();
        var T = function(t) {
            function Field(t) {
                var e;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, Field), e = field_callSuper(this, Field, [ t ]);
                var r = t.value, n = t.isMultiple, o = r;
                try {
                    o = JSON.parse(o), !n && p()(o) ? o = [ o ] : !n && l()(o) && (o = o.slice(0, 1));
                } catch (t) {
                    o = [];
                }
                return e.state = {
                    loading: !0,
                    resources: o
                }, e.showLibrary = e.showLibrary.bind(e), e.insertHandler = e.insertHandler.bind(e), 
                e.loadResources = e.loadResources.bind(e), e.loadResource = e.loadResource.bind(e), 
                e.processResource = e.processResource.bind(e), e.processVideo = e.processVideo.bind(e), 
                e.processAudio = e.processAudio.bind(e), e.processImage = e.processImage.bind(e), 
                e.processRaw = e.processRaw.bind(e), e.onChange = e.onChange.bind(e), e.onRemoveResource = e.onRemoveResource.bind(e), 
                e.onMoveResource = e.onMoveResource.bind(e), e.updateProperty = e.updateProperty.bind(e), 
                e.renderResources = e.renderResources.bind(e), e;
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && field_setPrototypeOf(t, e);
            }(Field, t), r = Field, (o = [ {
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        loading: !1
                    });
                }
            }, {
                key: "showLibrary",
                value: function() {
                    var t = this.props, e = t.isMultiple, r = t.maxFiles, n = _objectSpread(_objectSpread({}, CLOUDINARY_CONFIG), {}, {
                        multiple: !!e,
                        max_files: r - this.state.resources.length
                    });
                    cloudinary.openMediaLibrary(n, {
                        insertHandler: this.insertHandler
                    });
                }
            }, {
                key: "insertHandler",
                value: function(t) {
                    var e = this, r = this.props.resourceType, n = h()(t, "assets", []);
                    if (r && (n = n.filter((function(t) {
                        return t.resource_type === r;
                    }))), 0 === n.length) return alert("You can only select ".concat(r, " files for this field"));
                    this.setState({
                        loading: !0
                    }), this.loadResources(n).then((function(t) {
                        var r = c()(t, e.state.resources, "public_id");
                        r = a()(e.state.resources, r), e.setState({
                            loading: !1,
                            resources: r
                        }), e.onChange(r);
                    }));
                }
            }, {
                key: "loadResources",
                value: function(t) {
                    var e = this;
                    return new Promise((function(r) {
                        if (!t.length) return r([]);
                        var n = t.map((function(t) {
                            return e.loadResource(t.public_id, t.resource_type);
                        }));
                        Promise.all(n).then((function(n) {
                            n = n.map((function(r) {
                                var n = t.find((function(t) {
                                    return t.public_id === r.public_id;
                                }));
                                return e.processResource(n, r);
                            })), r(n);
                        }));
                    }));
                }
            }, {
                key: "loadResource",
                value: function(t, r) {
                    return e().get("cloudinary-api/resource", {
                        public_id: t,
                        resource_type: r
                    });
                }
            }, {
                key: "processResource",
                value: function(t, e) {
                    var r = e.actual_type;
                    return "video" === r ? this.processVideo(t, e) : "audio" === r ? this.processAudio(t, e) : "image" === r ? this.processImage(t, e) : this.processRaw(t, e);
                }
            }, {
                key: "processVideo",
                value: function(t, e) {
                    var r = t.bytes, n = t.format, o = t.derived, i = null;
                    return o && (i = o[0].raw_transformation), _objectSpread({
                        bytes: r,
                        format: n,
                        transformations: i
                    }, e);
                }
            }, {
                key: "processAudio",
                value: function(t, e) {
                    return _objectSpread({
                        bytes: t.bytes,
                        format: t.format
                    }, e);
                }
            }, {
                key: "processImage",
                value: function(t, e) {
                    var r = t.bytes, n = t.format, o = t.derived, i = null;
                    return o && (i = o[0].raw_transformation), _objectSpread({
                        bytes: r,
                        format: n,
                        transformations: i
                    }, e);
                }
            }, {
                key: "processRaw",
                value: function(t, e) {
                    var r = t.bytes, n = t.format;
                    return n && (e.format = n), _objectSpread({
                        bytes: r
                    }, e);
                }
            }, {
                key: "onChange",
                value: function(t) {
                    t = this.props.isMultiple ? t : d()(t), this.props.onChange(JSON.stringify(t));
                }
            }, {
                key: "onRemoveResource",
                value: function(t) {
                    var e = this.state.resources.filter((function(e) {
                        return e.public_id !== t;
                    }));
                    this.setState({
                        resources: e
                    }), this.onChange(e);
                }
            }, {
                key: "onMoveResource",
                value: function(t, e) {
                    var r = this.state.resources.findIndex((function(e) {
                        return e.public_id === t;
                    })), n = parseInt(e, 10) + r;
                    if (!(n < 0 || n > this.state.resources.length)) {
                        var o = this.state.resources[r], i = [].concat(this.state.resources.slice(0, r), this.state.resources.slice(r + 1));
                        i.splice(n, 0, o), this.setState({
                            resources: i
                        }), this.onChange(i);
                    }
                }
            }, {
                key: "updateProperty",
                value: function(t, e, r) {
                    var n = this.state.resources.map((function(n) {
                        return n.public_id !== t || (n[e] = r), n;
                    }));
                    this.setState({
                        resources: n
                    }), this.onChange(n);
                }
            }, {
                key: "renderResources",
                value: function() {
                    var t = this;
                    return this.state.resources.map((function(e, r) {
                        var o = e.actual_type, i = 0 === r, a = r === t.state.resources.length - 1;
                        return "video" === o ? n().createElement(C, _extends({}, e, {
                            key: e.public_id,
                            fields: t.props.fields,
                            gravityOptions: t.props.gravityOptions,
                            onChange: t.updateProperty,
                            onRemoveResource: t.onRemoveResource,
                            onMoveResource: t.onMoveResource,
                            firstItem: i,
                            lastItem: a
                        })) : "audio" === o ? n().createElement(R, _extends({}, e, {
                            key: e.public_id,
                            fields: t.props.fields,
                            onChange: t.updateProperty,
                            onRemoveResource: t.onRemoveResource,
                            onMoveResource: t.onMoveResource,
                            firstItem: i,
                            lastItem: a
                        })) : "image" === o ? n().createElement(E, _extends({}, e, {
                            key: e.public_id,
                            fields: t.props.fields,
                            gravityOptions: t.props.gravityOptions,
                            onChange: t.updateProperty,
                            onRemoveResource: t.onRemoveResource,
                            onMoveResource: t.onMoveResource,
                            firstItem: i,
                            lastItem: a
                        })) : n().createElement(A, _extends({}, e, {
                            key: e.public_id,
                            fields: t.props.fields,
                            onChange: t.updateProperty,
                            onRemoveResource: t.onRemoveResource,
                            onMoveResource: t.onMoveResource,
                            firstItem: i,
                            lastItem: a
                        }));
                    }));
                }
            }, {
                key: "render",
                value: function() {
                    var t;
                    return t = this.props.isMultiple ? this.state.resources.length < this.props.maxFiles : !this.state.resources.length, 
                    n().createElement("div", {
                        className: "cloudinary-field__inner"
                    }, !0 === this.state.loading && n().createElement("div", {
                        className: "cloudinary-field__loader"
                    }, n().createElement("span", {
                        className: "cloudinary-field__sr-only"
                    }, "Loading…")), !0 === t && n().createElement("div", {
                        className: "cloudinary-field__insert"
                    }, n().createElement("button", {
                        type: "button",
                        className: "btn btn-primary cloudinary-field__button",
                        onClick: this.showLibrary
                    }, n().createElement("span", {
                        className: "btn__title"
                    }, this.props.buttonLabel))), n().createElement("div", {
                        className: "cloudinary-field__items"
                    }, this.renderResources()));
                }
            } ]) && field_defineProperties(r.prototype, o), i && field_defineProperties(r, i), 
            Object.defineProperty(r, "prototype", {
                writable: !1
            }), r;
            var r, o, i;
        }(r.Component);
        function bundle_extends() {
            return bundle_extends = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r) ({}).hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
            }, bundle_extends.apply(null, arguments);
        }
        T.propTypes = {
            resourceType: m().string.isRequired,
            buttonLabel: m().string.isRequired,
            isMultiple: m().bool.isRequired,
            gravityOptions: m().array.isRequired,
            onChange: m().func.isRequired,
            maxFiles: m().number,
            fields: m().string,
            value: m().string
        }, e().noConflict(), e().entwine("ss", (function(t) {
            t("textarea.cloudinary-input-field").entwine({
                HolderInstance: null,
                onmatch: function() {
                    var e = this;
                    this._super(), this.addClass("cloudinary-field__sr-only"), this.HolderInstance = t('<div class="cloudinary-field"></div>'), 
                    this.after(this.HolderInstance);
                    (0, o.render)(n().createElement(T, bundle_extends({}, this.data(), {
                        key: this.attr("id"),
                        value: this.val(),
                        onChange: function(t) {
                            e.val(t), e.click();
                        }
                    })), this.HolderInstance.get(0));
                },
                onunmatch: function() {
                    this._super(), this.removeClass("cloudinary-field__sr-only"), this.HolderInstance instanceof e() && ((0, 
                    o.unmountComponentAtNode)(this.HolderInstance.get(0)), this.HolderInstance.remove());
                }
            });
        }));
    })();
})();
//# sourceMappingURL=bundle.js.map