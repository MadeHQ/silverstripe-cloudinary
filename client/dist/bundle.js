/*! For license information please see bundle.js.LICENSE.txt */
(() => {
    var e = {
        78: function(e, t, r) {
            var n;
            n = function(e, t, r, n, o, i, a, u, c, s, l, f, p, y) {
                return function(e) {
                    var t = {};
                    function __nested_webpack_require_2712__(r) {
                        if (t[r]) return t[r].exports;
                        var n = t[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(n.exports, n, n.exports, __nested_webpack_require_2712__), n.l = !0, 
                        n.exports;
                    }
                    return __nested_webpack_require_2712__.m = e, __nested_webpack_require_2712__.c = t, 
                    __nested_webpack_require_2712__.d = function(e, t, r) {
                        __nested_webpack_require_2712__.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: r
                        });
                    }, __nested_webpack_require_2712__.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                    }, __nested_webpack_require_2712__.t = function(e, t) {
                        if (1 & t && (e = __nested_webpack_require_2712__(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var r = Object.create(null);
                        if (__nested_webpack_require_2712__.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e) for (var n in e) __nested_webpack_require_2712__.d(r, n, function(t) {
                            return e[t];
                        }.bind(null, n));
                        return r;
                    }, __nested_webpack_require_2712__.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default;
                        } : function() {
                            return e;
                        };
                        return __nested_webpack_require_2712__.d(t, "a", t), t;
                    }, __nested_webpack_require_2712__.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }, __nested_webpack_require_2712__.p = "", __nested_webpack_require_2712__(__nested_webpack_require_2712__.s = "./src/namespace/cloudinary-core.js");
                }({
                    "./src/namespace/cloudinary-core.js": function(e, t, r) {
                        "use strict";
                        r.r(t), r.d(t, "ClientHintsMetaTag", (function() {
                            return qe;
                        })), r.d(t, "Cloudinary", (function() {
                            return Xe;
                        })), r.d(t, "Condition", (function() {
                            return fe;
                        })), r.d(t, "Configuration", (function() {
                            return de;
                        })), r.d(t, "crc32", (function() {
                            return src_crc32;
                        })), r.d(t, "Expression", (function() {
                            return le;
                        })), r.d(t, "FetchLayer", (function() {
                            return me;
                        })), r.d(t, "HtmlTag", (function() {
                            return Ae;
                        })), r.d(t, "ImageTag", (function() {
                            return De;
                        })), r.d(t, "Layer", (function() {
                            return he;
                        })), r.d(t, "PictureTag", (function() {
                            return Le;
                        })), r.d(t, "SubtitlesLayer", (function() {
                            return _e;
                        })), r.d(t, "TextLayer", (function() {
                            return ve;
                        })), r.d(t, "Transformation", (function() {
                            return Se;
                        })), r.d(t, "utf8_encode", (function() {
                            return src_utf8_encode;
                        })), r.d(t, "Util", (function() {
                            return o;
                        })), r.d(t, "VideoTag", (function() {
                            return Ve;
                        }));
                        var n = {};
                        r.r(n), r.d(n, "VERSION", (function() {
                            return L;
                        })), r.d(n, "CF_SHARED_CDN", (function() {
                            return z;
                        })), r.d(n, "OLD_AKAMAI_SHARED_CDN", (function() {
                            return N;
                        })), r.d(n, "AKAMAI_SHARED_CDN", (function() {
                            return M;
                        })), r.d(n, "SHARED_CDN", (function() {
                            return U;
                        })), r.d(n, "DEFAULT_TIMEOUT_MS", (function() {
                            return V;
                        })), r.d(n, "DEFAULT_POSTER_OPTIONS", (function() {
                            return q;
                        })), r.d(n, "DEFAULT_VIDEO_SOURCE_TYPES", (function() {
                            return H;
                        })), r.d(n, "SEO_TYPES", (function() {
                            return $;
                        })), r.d(n, "DEFAULT_IMAGE_PARAMS", (function() {
                            return W;
                        })), r.d(n, "DEFAULT_VIDEO_PARAMS", (function() {
                            return G;
                        })), r.d(n, "DEFAULT_VIDEO_SOURCES", (function() {
                            return K;
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
                            return v.a;
                        })), r.d(o, "functions", (function() {
                            return m.a;
                        })), r.d(o, "identity", (function() {
                            return g.a;
                        })), r.d(o, "includes", (function() {
                            return w.a;
                        })), r.d(o, "isArray", (function() {
                            return j.a;
                        })), r.d(o, "isPlainObject", (function() {
                            return x.a;
                        })), r.d(o, "isString", (function() {
                            return S.a;
                        })), r.d(o, "merge", (function() {
                            return C.a;
                        })), r.d(o, "contains", (function() {
                            return w.a;
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
                            return re;
                        })), r.d(o, "objToString", (function() {
                            return ne;
                        })), r.d(o, "isObject", (function() {
                            return isObject;
                        })), r.d(o, "funcTag", (function() {
                            return oe;
                        })), r.d(o, "reWords", (function() {
                            return ie;
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
                            return ae;
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
                            return R.a;
                        })), r.d(o, "isFunction", (function() {
                            return B.a;
                        })), r.d(o, "trim", (function() {
                            return I.a;
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
                            return ue;
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
                        var src_utf8_encode = function(e) {
                            var t, r, n, o, i, a, u, c;
                            if (null == e) return "";
                            for (c = "", i = void 0, n = void 0, i = n = 0, u = (a = e + "").length, o = 0; o < u; ) r = null, 
                            (t = a.charCodeAt(o)) < 128 ? n++ : r = t > 127 && t < 2048 ? String.fromCharCode(t >> 6 | 192, 63 & t | 128) : String.fromCharCode(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128), 
                            null !== r && (n > i && (c += a.slice(i, n)), c += r, i = n = o + 1), o++;
                            return n > i && (c += a.slice(i, u)), c;
                        }, src_crc32 = function(e) {
                            var t, r, n, o;
                            for (t = 0, o = 0, t ^= -1, r = 0, n = (e = src_utf8_encode(e)).length; r < n; ) o = 255 & (t ^ e.charCodeAt(r)), 
                            t = t >>> 8 ^ "0x" + "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".substr(9 * o, 8), 
                            r++;
                            return (t ^= -1) < 0 && (t += 4294967296), t;
                        };
                        function stringPad(e, t, r) {
                            return t >>= 0, r = String(void 0 !== r ? r : " "), e.length > t ? String(e) : ((t -= e.length) > r.length && (r += function(e, t) {
                                for (var r = ""; t > 0; ) r += e, t--;
                                return r;
                            }(r, t / r.length)), r.slice(0, t) + String(e));
                        }
                        function _arrayLikeToArray(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                            return n;
                        }
                        var i, a = 0, u = {};
                        (i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", function(e) {
                            if (Array.isArray(e)) return _arrayLikeToArray(e);
                        }(i) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                        }(i) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return _arrayLikeToArray(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
                            }
                        }(i) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }()).forEach((function(e) {
                            var t = a.toString(2);
                            t = stringPad(t, 6, "0"), u[t] = e, a++;
                        }));
                        var c = u;
                        function encodeVersion(e) {
                            var t = "", r = 6 * e.split(".").length, n = function(e) {
                                if (e.split(".").length < 2) throw new Error("invalid semVer, must have at least two segments");
                                return e.split(".").reverse().map((function(e) {
                                    return stringPad(e, 2, "0");
                                })).join(".");
                            }(e), o = parseInt(n.split(".").join("")).toString(2);
                            if ((o = stringPad(o, r, "0")).length % 6 != 0) throw "Version must be smaller than 43.21.26)";
                            return o.match(/.{1,6}/g).forEach((function(e) {
                                t += c[e];
                            })), t;
                        }
                        function getSDKAnalyticsSignature() {
                            var e, t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            try {
                                var n = (e = r.techVersion, t = e.split("."), "".concat(t[0], ".").concat(t[1])), o = encodeVersion(r.sdkSemver), i = encodeVersion(n), a = r.feature, u = r.sdkCode;
                                return "".concat("A").concat(u).concat(o).concat(i).concat(a);
                            } catch (e) {
                                return "E";
                            }
                        }
                        function getAnalyticsOptions(e) {
                            var t = {
                                sdkSemver: e.sdkSemver,
                                techVersion: e.techVersion,
                                sdkCode: e.sdkCode,
                                feature: "0"
                            };
                            return e.urlAnalytics ? (e.accessibility && (t.feature = "D"), "lazy" === e.loading && (t.feature = "C"), 
                            e.responsive && (t.feature = "A"), e.placeholder && (t.feature = "B"), t) : {};
                        }
                        var s = r("lodash/assign"), l = r.n(s), f = r("lodash/cloneDeep"), p = r.n(f), y = r("lodash/compact"), d = r.n(y), h = r("lodash/difference"), v = r.n(h), _ = r("lodash/functions"), m = r.n(_), b = r("lodash/identity"), g = r.n(b), O = r("lodash/includes"), w = r.n(O), P = r("lodash/isArray"), j = r.n(P), k = r("lodash/isPlainObject"), x = r.n(k), E = r("lodash/isString"), S = r.n(E), A = r("lodash/merge"), C = r.n(A), T = r("lodash/isElement"), R = r.n(T), D = r("lodash/isFunction"), B = r.n(D), F = r("lodash/trim"), I = r.n(F);
                        function _typeof(e) {
                            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, _typeof(e);
                        }
                        function isIntersectionObserverSupported() {
                            return "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && window.IntersectionObserver;
                        }
                        function isNativeLazyLoadSupported() {
                            return "object" === ("undefined" == typeof HTMLImageElement ? "undefined" : _typeof(HTMLImageElement)) && HTMLImageElement.prototype.loading;
                        }
                        function detectIntersection(e, t) {
                            try {
                                if (isNativeLazyLoadSupported() || !isIntersectionObserverSupported()) return void t();
                                var r = new IntersectionObserver((function(e) {
                                    e.forEach((function(e) {
                                        e.isIntersecting && (t(), r.unobserve(e.target));
                                    }));
                                }), {
                                    threshold: [ 0, .01 ]
                                });
                                r.observe(e);
                            } catch (e) {
                                t();
                            }
                        }
                        var L = "2.5.0", z = "d3jpl91pxevbkh.cloudfront.net", N = "cloudinary-a.akamaihd.net", M = "res.cloudinary.com", U = M, V = 1e4, q = {
                            format: "jpg",
                            resource_type: "video"
                        }, H = [ "webm", "mp4", "ogv" ], $ = {
                            "image/upload": "images",
                            "image/private": "private_images",
                            "image/authenticated": "authenticated_images",
                            "raw/upload": "files",
                            "video/upload": "videos"
                        }, W = {
                            resource_type: "image",
                            transformation: [],
                            type: "upload"
                        }, G = {
                            fallback_content: "",
                            resource_type: "video",
                            source_transformation: {},
                            source_types: H,
                            transformation: [],
                            type: "upload"
                        }, K = [ {
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
                        function baseutil_typeof(e) {
                            return baseutil_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, baseutil_typeof(e);
                        }
                        function omit(e, t) {
                            e = e || {};
                            var r = Object.keys(e).filter((function(e) {
                                return !w()(t, e);
                            })), n = {};
                            return r.forEach((function(t) {
                                return n[t] = e[t];
                            })), n;
                        }
                        var J, ee, te, baseutil_allStrings = function(e) {
                            return e.length && e.every(S.a);
                        }, without = function(e, t) {
                            return e.filter((function(e) {
                                return e !== t;
                            }));
                        }, isNumberLike = function(e) {
                            return null != e && !isNaN(parseFloat(e));
                        }, smartEscape = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /([^a-zA-Z0-9_.\-\/:]+)/g;
                            return e.replace(t, (function(e) {
                                return e.split("").map((function(e) {
                                    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                                })).join("");
                            }));
                        }, defaults = function(e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            return r.reduce((function(e, t) {
                                var r, n;
                                for (r in t) n = t[r], void 0 === e[r] && (e[r] = n);
                                return e;
                            }), e);
                        }, re = Object.prototype, ne = re.toString, isObject = function(e) {
                            var t;
                            return t = baseutil_typeof(e), !!e && ("object" === t || "function" === t);
                        }, oe = "[object Function]", isFunction = function(e) {
                            return isObject(e) && ne.call(e) === oe;
                        }, ie = (ee = "[A-Z]", J = "[a-z]+", RegExp(ee + "+(?=" + ee + J + ")|" + ee + "?" + J + "|" + ee + "+|[0-9]+", "g")), camelCase = function(e) {
                            var t = e.match(ie);
                            return (t = t.map((function(e) {
                                return e.charAt(0).toLocaleUpperCase() + e.slice(1).toLocaleLowerCase();
                            })))[0] = t[0].toLocaleLowerCase(), t.join("");
                        }, snakeCase = function(e) {
                            var t = e.match(ie);
                            return (t = t.map((function(e) {
                                return e.toLocaleLowerCase();
                            }))).join("_");
                        }, convertKeys = function(e, t) {
                            var r, n;
                            for (var o in r = {}, e) n = e[o], t && (o = t(o)), isEmpty(o) || (r[o] = n);
                            return r;
                        }, withCamelCaseKeys = function(e) {
                            return convertKeys(e, camelCase);
                        }, withSnakeCaseKeys = function(e) {
                            return convertKeys(e, snakeCase);
                        }, ae = "undefined" != typeof btoa && isFunction(btoa) ? btoa : "undefined" != typeof Buffer && isFunction(Buffer) ? function(e) {
                            return e instanceof Buffer || (e = new Buffer.from(String(e), "binary")), e.toString("base64");
                        } : function(e) {
                            throw new Error("No base64 encoding function found");
                        }, base64EncodeURL = function(e) {
                            try {
                                e = decodeURI(e);
                            } finally {
                                e = encodeURI(e);
                            }
                            return ae(e);
                        };
                        function extractUrlParams(e) {
                            return Z.reduce((function(t, r) {
                                return null != e[r] && (t[r] = e[r]), t;
                            }), {});
                        }
                        function patchFetchFormat(e) {
                            null == e && (e = {}), "fetch" === e.type && null == e.fetch_format && (e.fetch_format = optionConsume(e, "format"));
                        }
                        function optionConsume(e, t, r) {
                            var n = e[t];
                            return delete e[t], null != n ? n : r;
                        }
                        function isEmpty(e) {
                            if (null == e) return !0;
                            if ("number" == typeof e.length) return 0 === e.length;
                            if ("number" == typeof e.size) return 0 === e.size;
                            if ("object" == baseutil_typeof(e)) {
                                for (var t in e) if (e.hasOwnProperty(t)) return !1;
                                return !0;
                            }
                            return !0;
                        }
                        function getUserAgent() {
                            return navigator && navigator.userAgent || "";
                        }
                        function isAndroid() {
                            var e = getUserAgent();
                            return /Android/i.test(e);
                        }
                        function isEdge() {
                            var e = getUserAgent();
                            return /Edg/i.test(e);
                        }
                        function isChrome() {
                            var e = getUserAgent();
                            return !isEdge() && (/Chrome/i.test(e) || /CriOS/i.test(e));
                        }
                        function isSafari() {
                            var e = getUserAgent();
                            return /Safari/i.test(e) && !isChrome() && !isAndroid() && !isEdge();
                        }
                        var lodash_getData = function(e, t) {
                            switch (!1) {
                              case !(null == e):
                                return;

                              case !B()(e.getAttribute):
                                return e.getAttribute("data-".concat(t));

                              case !B()(e.getAttr):
                                return e.getAttr("data-".concat(t));

                              case !B()(e.data):
                                return e.data(t);

                              case !(B()("undefined" != typeof jQuery && jQuery.fn && jQuery.fn.data) && R()(e)):
                                return jQuery(e).data(t);
                            }
                        }, lodash_setData = function(e, t, r) {
                            switch (!1) {
                              case !(null == e):
                                return;

                              case !B()(e.setAttribute):
                                return e.setAttribute("data-".concat(t), r);

                              case !B()(e.setAttr):
                                return e.setAttr("data-".concat(t), r);

                              case !B()(e.data):
                                return e.data(t, r);

                              case !(B()("undefined" != typeof jQuery && jQuery.fn && jQuery.fn.data) && R()(e)):
                                return jQuery(e).data(t, r);
                            }
                        }, lodash_getAttribute = function(e, t) {
                            switch (!1) {
                              case !(null == e):
                                return;

                              case !B()(e.getAttribute):
                                return e.getAttribute(t);

                              case !B()(e.attr):
                                return e.attr(t);

                              case !B()(e.getAttr):
                                return e.getAttr(t);
                            }
                        }, lodash_setAttribute = function(e, t, r) {
                            switch (!1) {
                              case !(null == e):
                                return;

                              case !B()(e.setAttribute):
                                return e.setAttribute(t, r);

                              case !B()(e.attr):
                                return e.attr(t, r);

                              case !B()(e.setAttr):
                                return e.setAttr(t, r);
                            }
                        }, lodash_removeAttribute = function(e, t) {
                            switch (!1) {
                              case !(null == e):
                                return;

                              case !B()(e.removeAttribute):
                                return e.removeAttribute(t);

                              default:
                                return lodash_setAttribute(e, void 0);
                            }
                        }, setAttributes = function(e, t) {
                            var r, n, o;
                            for (r in n = [], t) null != (o = t[r]) ? n.push(lodash_setAttribute(e, r, o)) : n.push(lodash_removeAttribute(e, r));
                            return n;
                        }, lodash_hasClass = function(e, t) {
                            if (R()(e)) return e.className.match(new RegExp("\\b".concat(t, "\\b")));
                        }, lodash_addClass = function(e, t) {
                            if (!e.className.match(new RegExp("\\b".concat(t, "\\b")))) return e.className = I()("".concat(e.className, " ").concat(t));
                        }, getStyles = function(e) {
                            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : window.getComputedStyle(e, null);
                        }, ue = [ "Top", "Right", "Bottom", "Left" ];
                        te = function(e, t) {
                            var r, n;
                            return r = 9 === e.nodeType ? e.documentElement : e, e === (n = t && t.parentNode) || !(!n || 1 !== n.nodeType || !r.contains(n));
                        };
                        var domStyle = function(e, t) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) return e.style[t];
                        }, curCSS = function(e, t, r) {
                            var n, o, i, a, u, c;
                            return a = /^margin/, c = void 0, o = void 0, n = void 0, i = void 0, u = e.style, 
                            (r = r || getStyles(e)) && (i = r.getPropertyValue(t) || r[t]), r && ("" !== i || te(e.ownerDocument, e) || (i = domStyle(e, t)), 
                            ce.test(i) && a.test(t) && (c = u.width, o = u.minWidth, n = u.maxWidth, u.minWidth = u.maxWidth = u.width = i, 
                            i = r.width, u.width = c, u.minWidth = o, u.maxWidth = n)), void 0 !== i ? i + "" : i;
                        }, cssValue = function(e, t, r, n) {
                            var o;
                            return o = curCSS(e, t, n), r ? parseFloat(o) : o;
                        }, augmentWidthOrHeight = function(e, t, r, n, o) {
                            var i, a, u, c, s;
                            if (r === (n ? "border" : "content")) return 0;
                            for (s = 0, i = 0, a = (c = "width" === t ? [ "Right", "Left" ] : [ "Top", "Bottom" ]).length; i < a; i++) u = c[i], 
                            "margin" === r && (s += cssValue(e, r + u, !0, o)), n ? ("content" === r && (s -= cssValue(e, "padding".concat(u), !0, o)), 
                            "margin" !== r && (s -= cssValue(e, "border".concat(u, "Width"), !0, o))) : (s += cssValue(e, "padding".concat(u), !0, o), 
                            "padding" !== r && (s += cssValue(e, "border".concat(u, "Width"), !0, o)));
                            return s;
                        }, ce = new RegExp("^(" + /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source + ")(?!px)[a-z%]+$", "i"), getWidthOrHeight = function(e, t, r) {
                            var n, o, i, a;
                            if (a = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = getStyles(e), 
                            n = "border-box" === cssValue(e, "boxSizing", !1, o), i <= 0 || null == i) {
                                if (((i = curCSS(e, t, o)) < 0 || null == i) && (i = e.style[t]), ce.test(i)) return i;
                                a = n && i === e.style[t], i = parseFloat(i) || 0;
                            }
                            return i + augmentWidthOrHeight(e, t, r || (n ? "border" : "content"), a, o);
                        }, lodash_width = function(e) {
                            return getWidthOrHeight(e, "width", "content");
                        };
                        function _defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        var se = function() {
                            function Expression(e) {
                                !function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, Expression), this.expressions = [], null != e && this.expressions.push(Expression.normalize(e));
                            }
                            var e, t, r;
                            return e = Expression, r = [ {
                                key: "new",
                                value: function(e) {
                                    return new this(e);
                                }
                            }, {
                                key: "normalize",
                                value: function(e) {
                                    if (null == e) return e;
                                    e = String(e);
                                    var t = new RegExp("((\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*|\\^)(?=[ _]))", "g");
                                    e = e.replace(t, (function(e) {
                                        return Expression.OPERATORS[e];
                                    }));
                                    var r = "(" + Object.keys(Expression.PREDEFINED_VARS).map((function(e) {
                                        return ":".concat(e, "|").concat(e);
                                    })).join("|") + ")", n = new RegExp("".concat("(\\$_*[^_ ]+)", "|").concat(r), "g");
                                    return (e = e.replace(n, (function(e) {
                                        return Expression.PREDEFINED_VARS[e] || e;
                                    }))).replace(/[ _]+/g, "_");
                                }
                            }, {
                                key: "variable",
                                value: function(e, t) {
                                    return new this(e).value(t);
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
                            } ], (t = [ {
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
                                value: function(e) {
                                    return this.parent = e, this;
                                }
                            }, {
                                key: "predicate",
                                value: function(e, t, r) {
                                    return null != Expression.OPERATORS[t] && (t = Expression.OPERATORS[t]), this.expressions.push("".concat(e, "_").concat(t, "_").concat(r)), 
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
                                value: function(e, t) {
                                    return this.predicate("h", e, t);
                                }
                            }, {
                                key: "width",
                                value: function(e, t) {
                                    return this.predicate("w", e, t);
                                }
                            }, {
                                key: "aspectRatio",
                                value: function(e, t) {
                                    return this.predicate("ar", e, t);
                                }
                            }, {
                                key: "pageCount",
                                value: function(e, t) {
                                    return this.predicate("pc", e, t);
                                }
                            }, {
                                key: "faceCount",
                                value: function(e, t) {
                                    return this.predicate("fc", e, t);
                                }
                            }, {
                                key: "value",
                                value: function(e) {
                                    return this.expressions.push(e), this;
                                }
                            } ]) && _defineProperties(e.prototype, t), r && _defineProperties(e, r), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), Expression;
                        }();
                        se.OPERATORS = {
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
                        }, se.PREDEFINED_VARS = {
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
                        }, se.BOUNDRY = "[ _]+";
                        var le = se;
                        function condition_typeof(e) {
                            return condition_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, condition_typeof(e);
                        }
                        function condition_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function _setPrototypeOf(e, t) {
                            return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t, e;
                            }, _setPrototypeOf(e, t);
                        }
                        function _createSuper(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }();
                            return function() {
                                var r, n = _getPrototypeOf(e);
                                if (t) {
                                    var o = _getPrototypeOf(this).constructor;
                                    r = Reflect.construct(n, arguments, o);
                                } else r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === condition_typeof(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    }(e);
                                }(this, r);
                            };
                        }
                        function _getPrototypeOf(e) {
                            return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }, _getPrototypeOf(e);
                        }
                        var fe = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t && _setPrototypeOf(e, t);
                            }(Condition, e);
                            var t, r, n, o = _createSuper(Condition);
                            function Condition(e) {
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, Condition), o.call(this, e);
                            }
                            return t = Condition, (r = [ {
                                key: "height",
                                value: function(e, t) {
                                    return this.predicate("h", e, t);
                                }
                            }, {
                                key: "width",
                                value: function(e, t) {
                                    return this.predicate("w", e, t);
                                }
                            }, {
                                key: "aspectRatio",
                                value: function(e, t) {
                                    return this.predicate("ar", e, t);
                                }
                            }, {
                                key: "pageCount",
                                value: function(e, t) {
                                    return this.predicate("pc", e, t);
                                }
                            }, {
                                key: "faceCount",
                                value: function(e, t) {
                                    return this.predicate("fc", e, t);
                                }
                            }, {
                                key: "duration",
                                value: function(e, t) {
                                    return this.predicate("du", e, t);
                                }
                            }, {
                                key: "initialDuration",
                                value: function(e, t) {
                                    return this.predicate("idu", e, t);
                                }
                            } ]) && condition_defineProperties(t.prototype, r), n && condition_defineProperties(t, n), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), Condition;
                        }(le);
                        function _slicedToArray(e, t) {
                            return function(e) {
                                if (Array.isArray(e)) return e;
                            }(e) || function(e, t) {
                                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != r) {
                                    var n, o, i = [], a = !0, u = !1;
                                    try {
                                        for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0) ;
                                    } catch (e) {
                                        u = !0, o = e;
                                    } finally {
                                        try {
                                            a || null == r.return || r.return();
                                        } finally {
                                            if (u) throw o;
                                        }
                                    }
                                    return i;
                                }
                            }(e, t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return configuration_arrayLikeToArray(e, t);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? configuration_arrayLikeToArray(e, t) : void 0;
                                }
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }();
                        }
                        function configuration_arrayLikeToArray(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                            return n;
                        }
                        function configuration_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        var pe = function() {
                            function Configuration(e) {
                                !function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, Configuration), this.configuration = null == e ? {} : p()(e), defaults(this.configuration, ye);
                            }
                            var e, t, r;
                            return e = Configuration, (t = [ {
                                key: "init",
                                value: function() {
                                    return this.fromEnvironment(), this.fromDocument(), this;
                                }
                            }, {
                                key: "set",
                                value: function(e, t) {
                                    return this.configuration[e] = t, this;
                                }
                            }, {
                                key: "get",
                                value: function(e) {
                                    return this.configuration[e];
                                }
                            }, {
                                key: "merge",
                                value: function(e) {
                                    return l()(this.configuration, p()(e)), this;
                                }
                            }, {
                                key: "fromDocument",
                                value: function() {
                                    var e, t, r, n;
                                    if (n = "undefined" != typeof document && null !== document ? document.querySelectorAll('meta[name^="cloudinary_"]') : void 0) for (t = 0, 
                                    r = n.length; t < r; t++) e = n[t], this.configuration[e.getAttribute("name").replace("cloudinary_", "")] = e.getAttribute("content");
                                    return this;
                                }
                            }, {
                                key: "fromEnvironment",
                                value: function() {
                                    var e, t, r = this;
                                    return "undefined" != typeof process && null !== process && {
                                        NODE_ENV: "production"
                                    }.CLOUDINARY_URL && (t = /cloudinary:\/\/(?:(\w+)(?:\:([\w-]+))?@)?([\w\.-]+)(?:\/([^?]*))?(?:\?(.+))?/.exec({
                                        NODE_ENV: "production"
                                    }.CLOUDINARY_URL)) && (null != t[3] && (this.configuration.cloud_name = t[3]), null != t[1] && (this.configuration.api_key = t[1]), 
                                    null != t[2] && (this.configuration.api_secret = t[2]), null != t[4] && (this.configuration.private_cdn = null != t[4]), 
                                    null != t[4] && (this.configuration.secure_distribution = t[4]), null != (e = t[5]) && e.split("&").forEach((function(e) {
                                        var t = _slicedToArray(e.split("="), 2), n = t[0], o = t[1];
                                        null == o && (o = !0), r.configuration[n] = o;
                                    }))), this;
                                }
                            }, {
                                key: "config",
                                value: function(e, t) {
                                    switch (!1) {
                                      case void 0 === t:
                                        return this.set(e, t), this.configuration;

                                      case !S()(e):
                                        return this.get(e);

                                      case !x()(e):
                                        return this.merge(e), this.configuration;

                                      default:
                                        return this.configuration;
                                    }
                                }
                            }, {
                                key: "toOptions",
                                value: function() {
                                    return p()(this.configuration);
                                }
                            } ]) && configuration_defineProperties(e.prototype, t), r && configuration_defineProperties(e, r), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), Configuration;
                        }(), ye = {
                            responsive_class: "cld-responsive",
                            responsive_use_breakpoints: !0,
                            round_dpr: !0,
                            secure: "https:" === ("undefined" != typeof window && null !== window && window.location ? window.location.protocol : void 0)
                        };
                        pe.CONFIG_PARAMS = [ "api_key", "api_secret", "callback", "cdn_subdomain", "cloud_name", "cname", "private_cdn", "protocol", "resource_type", "responsive", "responsive_class", "responsive_use_breakpoints", "responsive_width", "round_dpr", "secure", "secure_cdn_subdomain", "secure_distribution", "shorten", "type", "upload_preset", "url_suffix", "use_root_path", "version", "externalLibraries", "max_timeout_ms" ];
                        var de = pe;
                        function layer_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        var he = function() {
                            function Layer(e) {
                                var t = this;
                                !function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, Layer), this.options = {}, null != e && [ "resourceType", "type", "publicId", "format" ].forEach((function(r) {
                                    var n;
                                    return t.options[r] = null != (n = e[r]) ? n : e[snakeCase(r)];
                                }));
                            }
                            var e, t, r;
                            return e = Layer, (t = [ {
                                key: "resourceType",
                                value: function(e) {
                                    return this.options.resourceType = e, this;
                                }
                            }, {
                                key: "type",
                                value: function(e) {
                                    return this.options.type = e, this;
                                }
                            }, {
                                key: "publicId",
                                value: function(e) {
                                    return this.options.publicId = e, this;
                                }
                            }, {
                                key: "getPublicId",
                                value: function() {
                                    var e;
                                    return null != (e = this.options.publicId) ? e.replace(/\//g, ":") : void 0;
                                }
                            }, {
                                key: "getFullPublicId",
                                value: function() {
                                    return null != this.options.format ? this.getPublicId() + "." + this.options.format : this.getPublicId();
                                }
                            }, {
                                key: "format",
                                value: function(e) {
                                    return this.options.format = e, this;
                                }
                            }, {
                                key: "toString",
                                value: function() {
                                    var e;
                                    if (e = [], null == this.options.publicId) throw "Must supply publicId";
                                    return "image" !== this.options.resourceType && e.push(this.options.resourceType), 
                                    "upload" !== this.options.type && e.push(this.options.type), e.push(this.getFullPublicId()), 
                                    d()(e).join(":");
                                }
                            }, {
                                key: "clone",
                                value: function() {
                                    return new this.constructor(this.options);
                                }
                            } ]) && layer_defineProperties(e.prototype, t), r && layer_defineProperties(e, r), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), Layer;
                        }();
                        function textlayer_typeof(e) {
                            return textlayer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, textlayer_typeof(e);
                        }
                        function textlayer_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function textlayer_setPrototypeOf(e, t) {
                            return textlayer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t, e;
                            }, textlayer_setPrototypeOf(e, t);
                        }
                        function textlayer_createSuper(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }();
                            return function() {
                                var r, n = textlayer_getPrototypeOf(e);
                                if (t) {
                                    var o = textlayer_getPrototypeOf(this).constructor;
                                    r = Reflect.construct(n, arguments, o);
                                } else r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === textlayer_typeof(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    }(e);
                                }(this, r);
                            };
                        }
                        function textlayer_getPrototypeOf(e) {
                            return textlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }, textlayer_getPrototypeOf(e);
                        }
                        var ve = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t && textlayer_setPrototypeOf(e, t);
                            }(TextLayer, e);
                            var t, r, n, o = textlayer_createSuper(TextLayer);
                            function TextLayer(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, TextLayer), t = o.call(this, e), null != e && [ "resourceType", "resourceType", "fontFamily", "fontSize", "fontWeight", "fontStyle", "textDecoration", "textAlign", "stroke", "letterSpacing", "lineSpacing", "fontHinting", "fontAntialiasing", "text", "textStyle" ].forEach((function(r) {
                                    var n;
                                    return t.options[r] = null != (n = e[r]) ? n : e[snakeCase(r)];
                                })), t.options.resourceType = "text", t;
                            }
                            return t = TextLayer, (r = [ {
                                key: "resourceType",
                                value: function(e) {
                                    throw "Cannot modify resourceType for text layers";
                                }
                            }, {
                                key: "type",
                                value: function(e) {
                                    throw "Cannot modify type for text layers";
                                }
                            }, {
                                key: "format",
                                value: function(e) {
                                    throw "Cannot modify format for text layers";
                                }
                            }, {
                                key: "fontFamily",
                                value: function(e) {
                                    return this.options.fontFamily = e, this;
                                }
                            }, {
                                key: "fontSize",
                                value: function(e) {
                                    return this.options.fontSize = e, this;
                                }
                            }, {
                                key: "fontWeight",
                                value: function(e) {
                                    return this.options.fontWeight = e, this;
                                }
                            }, {
                                key: "fontStyle",
                                value: function(e) {
                                    return this.options.fontStyle = e, this;
                                }
                            }, {
                                key: "textDecoration",
                                value: function(e) {
                                    return this.options.textDecoration = e, this;
                                }
                            }, {
                                key: "textAlign",
                                value: function(e) {
                                    return this.options.textAlign = e, this;
                                }
                            }, {
                                key: "stroke",
                                value: function(e) {
                                    return this.options.stroke = e, this;
                                }
                            }, {
                                key: "letterSpacing",
                                value: function(e) {
                                    return this.options.letterSpacing = e, this;
                                }
                            }, {
                                key: "lineSpacing",
                                value: function(e) {
                                    return this.options.lineSpacing = e, this;
                                }
                            }, {
                                key: "fontHinting",
                                value: function(e) {
                                    return this.options.fontHinting = e, this;
                                }
                            }, {
                                key: "fontAntialiasing",
                                value: function(e) {
                                    return this.options.fontAntialiasing = e, this;
                                }
                            }, {
                                key: "text",
                                value: function(e) {
                                    return this.options.text = e, this;
                                }
                            }, {
                                key: "textStyle",
                                value: function(e) {
                                    return this.options.textStyle = e, this;
                                }
                            }, {
                                key: "toString",
                                value: function() {
                                    var e, t, r, n, o, i, a, u, c, s;
                                    if (u = this.textStyleIdentifier(), null != this.options.publicId && (n = this.getFullPublicId()), 
                                    null != this.options.text) {
                                        if (t = !isEmpty(n), r = !isEmpty(u), t && r || !t && !r) throw "Must supply either style parameters or a public_id when providing text parameter in a text overlay/underlay, but not both!";
                                        for (o = /\$\([a-zA-Z]\w*\)/g, a = 0, s = smartEscape(this.options.text, /[,\/]/g), 
                                        c = ""; i = o.exec(s); ) c += smartEscape(s.slice(a, i.index)), c += i[0], a = i.index + i[0].length;
                                        c += smartEscape(s.slice(a));
                                    }
                                    return e = [ this.options.resourceType, u, n, c ], d()(e).join(":");
                                }
                            }, {
                                key: "textStyleIdentifier",
                                value: function() {
                                    if (!isEmpty(this.options.textStyle)) return this.options.textStyle;
                                    var e;
                                    if (e = [], "normal" !== this.options.fontWeight && e.push(this.options.fontWeight), 
                                    "normal" !== this.options.fontStyle && e.push(this.options.fontStyle), "none" !== this.options.textDecoration && e.push(this.options.textDecoration), 
                                    e.push(this.options.textAlign), "none" !== this.options.stroke && e.push(this.options.stroke), 
                                    isEmpty(this.options.letterSpacing) && !isNumberLike(this.options.letterSpacing) || e.push("letter_spacing_" + this.options.letterSpacing), 
                                    isEmpty(this.options.lineSpacing) && !isNumberLike(this.options.lineSpacing) || e.push("line_spacing_" + this.options.lineSpacing), 
                                    isEmpty(this.options.fontAntialiasing) || e.push("antialias_" + this.options.fontAntialiasing), 
                                    isEmpty(this.options.fontHinting) || e.push("hinting_" + this.options.fontHinting), 
                                    !isEmpty(d()(e))) {
                                        if (isEmpty(this.options.fontFamily)) throw "Must supply fontFamily. ".concat(e);
                                        if (isEmpty(this.options.fontSize) && !isNumberLike(this.options.fontSize)) throw "Must supply fontSize.";
                                    }
                                    return e.unshift(this.options.fontFamily, this.options.fontSize), e = d()(e).join("_");
                                }
                            } ]) && textlayer_defineProperties(t.prototype, r), n && textlayer_defineProperties(t, n), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), TextLayer;
                        }(he);
                        function subtitleslayer_typeof(e) {
                            return subtitleslayer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, subtitleslayer_typeof(e);
                        }
                        function subtitleslayer_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function subtitleslayer_setPrototypeOf(e, t) {
                            return subtitleslayer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t, e;
                            }, subtitleslayer_setPrototypeOf(e, t);
                        }
                        function subtitleslayer_createSuper(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }();
                            return function() {
                                var r, n = subtitleslayer_getPrototypeOf(e);
                                if (t) {
                                    var o = subtitleslayer_getPrototypeOf(this).constructor;
                                    r = Reflect.construct(n, arguments, o);
                                } else r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === subtitleslayer_typeof(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    }(e);
                                }(this, r);
                            };
                        }
                        function subtitleslayer_getPrototypeOf(e) {
                            return subtitleslayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }, subtitleslayer_getPrototypeOf(e);
                        }
                        var _e = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t && subtitleslayer_setPrototypeOf(e, t);
                            }(SubtitlesLayer, e);
                            var t, r, n, o = subtitleslayer_createSuper(SubtitlesLayer);
                            function SubtitlesLayer(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, SubtitlesLayer), (t = o.call(this, e)).options.resourceType = "subtitles", 
                                t;
                            }
                            return t = SubtitlesLayer, r && subtitleslayer_defineProperties(t.prototype, r), 
                            n && subtitleslayer_defineProperties(t, n), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), t;
                        }(ve);
                        function fetchlayer_typeof(e) {
                            return fetchlayer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, fetchlayer_typeof(e);
                        }
                        function fetchlayer_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function fetchlayer_setPrototypeOf(e, t) {
                            return fetchlayer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t, e;
                            }, fetchlayer_setPrototypeOf(e, t);
                        }
                        function fetchlayer_createSuper(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }();
                            return function() {
                                var r, n = fetchlayer_getPrototypeOf(e);
                                if (t) {
                                    var o = fetchlayer_getPrototypeOf(this).constructor;
                                    r = Reflect.construct(n, arguments, o);
                                } else r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === fetchlayer_typeof(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    }(e);
                                }(this, r);
                            };
                        }
                        function fetchlayer_getPrototypeOf(e) {
                            return fetchlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }, fetchlayer_getPrototypeOf(e);
                        }
                        var me = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t && fetchlayer_setPrototypeOf(e, t);
                            }(FetchLayer, e);
                            var t, r, n, o = fetchlayer_createSuper(FetchLayer);
                            function FetchLayer(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, FetchLayer), t = o.call(this, e), S()(e) ? t.options.url = e : (null != e ? e.url : void 0) && (t.options.url = e.url), 
                                t;
                            }
                            return t = FetchLayer, (r = [ {
                                key: "url",
                                value: function(e) {
                                    return this.options.url = e, this;
                                }
                            }, {
                                key: "toString",
                                value: function() {
                                    return "fetch:".concat(base64EncodeURL(this.options.url));
                                }
                            } ]) && fetchlayer_defineProperties(t.prototype, r), n && fetchlayer_defineProperties(t, n), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), FetchLayer;
                        }(he);
                        function parameters_typeof(e) {
                            return parameters_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, parameters_typeof(e);
                        }
                        function _get() {
                            return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
                                var n = function(e, t) {
                                    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = parameters_getPrototypeOf(e)); ) ;
                                    return e;
                                }(e, t);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, t);
                                    return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value;
                                }
                            }, _get.apply(this, arguments);
                        }
                        function parameters_inherits(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && parameters_setPrototypeOf(e, t);
                        }
                        function parameters_setPrototypeOf(e, t) {
                            return parameters_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t, e;
                            }, parameters_setPrototypeOf(e, t);
                        }
                        function parameters_createSuper(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }();
                            return function() {
                                var r, n = parameters_getPrototypeOf(e);
                                if (t) {
                                    var o = parameters_getPrototypeOf(this).constructor;
                                    r = Reflect.construct(n, arguments, o);
                                } else r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === parameters_typeof(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    }(e);
                                }(this, r);
                            };
                        }
                        function parameters_getPrototypeOf(e) {
                            return parameters_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }, parameters_getPrototypeOf(e);
                        }
                        function parameters_classCallCheck(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }
                        function parameters_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function parameters_createClass(e, t, r) {
                            return t && parameters_defineProperties(e.prototype, t), r && parameters_defineProperties(e, r), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), e;
                        }
                        var be = function() {
                            function Param(e, t) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.a;
                                parameters_classCallCheck(this, Param), this.name = e, this.shortName = t, this.process = r;
                            }
                            return parameters_createClass(Param, [ {
                                key: "set",
                                value: function(e) {
                                    return this.origValue = e, this;
                                }
                            }, {
                                key: "serialize",
                                value: function() {
                                    var e, t;
                                    return e = this.value(), t = j()(e) || x()(e) || S()(e) ? !isEmpty(e) : null != e, 
                                    null != this.shortName && t ? "".concat(this.shortName, "_").concat(e) : "";
                                }
                            }, {
                                key: "value",
                                value: function() {
                                    return this.process(this.origValue);
                                }
                            } ], [ {
                                key: "norm_color",
                                value: function(e) {
                                    return null != e ? e.replace(/^#/, "rgb:") : void 0;
                                }
                            }, {
                                key: "build_array",
                                value: function(e) {
                                    return null == e ? [] : j()(e) ? e : [ e ];
                                }
                            }, {
                                key: "process_video_params",
                                value: function(e) {
                                    var t;
                                    switch (e.constructor) {
                                      case Object:
                                        return t = "", "codec" in e && (t = e.codec, "profile" in e && (t += ":" + e.profile, 
                                        "level" in e && (t += ":" + e.level, "b_frames" in e && !1 === e.b_frames && (t += ":bframes_no")))), 
                                        t;

                                      case String:
                                        return e;

                                      default:
                                        return null;
                                    }
                                }
                            } ]), Param;
                        }(), ge = function(e) {
                            parameters_inherits(ArrayParam, e);
                            var t = parameters_createSuper(ArrayParam);
                            function ArrayParam(e, r) {
                                var n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".", i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
                                return parameters_classCallCheck(this, ArrayParam), (n = t.call(this, e, r, i)).sep = o, 
                                n;
                            }
                            return parameters_createClass(ArrayParam, [ {
                                key: "serialize",
                                value: function() {
                                    if (null != this.shortName) {
                                        var e = this.value();
                                        if (isEmpty(e)) return "";
                                        if (S()(e)) return "".concat(this.shortName, "_").concat(e);
                                        var t = e.map((function(e) {
                                            return B()(e.serialize) ? e.serialize() : e;
                                        })).join(this.sep);
                                        return "".concat(this.shortName, "_").concat(t);
                                    }
                                    return "";
                                }
                            }, {
                                key: "value",
                                value: function() {
                                    var e = this;
                                    return j()(this.origValue) ? this.origValue.map((function(t) {
                                        return e.process(t);
                                    })) : this.process(this.origValue);
                                }
                            }, {
                                key: "set",
                                value: function(e) {
                                    return null == e || j()(e) ? _get(parameters_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, e) : _get(parameters_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, [ e ]);
                                }
                            } ]), ArrayParam;
                        }(be), Oe = function(e) {
                            parameters_inherits(TransformationParam, e);
                            var t = parameters_createSuper(TransformationParam);
                            function TransformationParam(e) {
                                var r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "t", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".", i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
                                return parameters_classCallCheck(this, TransformationParam), (r = t.call(this, e, n, i)).sep = o, 
                                r;
                            }
                            return parameters_createClass(TransformationParam, [ {
                                key: "serialize",
                                value: function() {
                                    var e = this, t = "", r = this.value();
                                    if (isEmpty(r)) return t;
                                    if (baseutil_allStrings(r)) {
                                        var n = r.join(this.sep);
                                        isEmpty(n) || (t = "".concat(this.shortName, "_").concat(n));
                                    } else t = r.map((function(t) {
                                        return S()(t) && !isEmpty(t) ? "".concat(e.shortName, "_").concat(t) : B()(t.serialize) ? t.serialize() : x()(t) && !isEmpty(t) ? new Se(t).serialize() : void 0;
                                    })).filter((function(e) {
                                        return e;
                                    }));
                                    return t;
                                }
                            }, {
                                key: "set",
                                value: function(e) {
                                    return this.origValue = e, j()(this.origValue) ? _get(parameters_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, this.origValue) : _get(parameters_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, [ this.origValue ]);
                                }
                            } ]), TransformationParam;
                        }(be), we = function(e) {
                            parameters_inherits(RangeParam, e);
                            var t = parameters_createSuper(RangeParam);
                            function RangeParam(e, r) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RangeParam.norm_range_value;
                                return parameters_classCallCheck(this, RangeParam), t.call(this, e, r, n);
                            }
                            return parameters_createClass(RangeParam, null, [ {
                                key: "norm_range_value",
                                value: function(e) {
                                    var t = String(e).match(new RegExp("^(([0-9]*)\\.([0-9]+)|([0-9]+))([%pP])?$"));
                                    if (t) {
                                        var r = null != t[5] ? "p" : "";
                                        e = (t[1] || t[4]) + r;
                                    }
                                    return le.normalize(e);
                                }
                            } ]), RangeParam;
                        }(be), Pe = function(e) {
                            parameters_inherits(RawParam, e);
                            var t = parameters_createSuper(RawParam);
                            function RawParam(e, r) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.a;
                                return parameters_classCallCheck(this, RawParam), t.call(this, e, r, n);
                            }
                            return parameters_createClass(RawParam, [ {
                                key: "serialize",
                                value: function() {
                                    return this.value();
                                }
                            } ]), RawParam;
                        }(be), je = function(e) {
                            parameters_inherits(LayerParam, e);
                            var t = parameters_createSuper(LayerParam);
                            function LayerParam() {
                                return parameters_classCallCheck(this, LayerParam), t.apply(this, arguments);
                            }
                            return parameters_createClass(LayerParam, [ {
                                key: "value",
                                value: function() {
                                    if (null == this.origValue) return "";
                                    var e;
                                    if (this.origValue instanceof he) e = this.origValue; else if (x()(this.origValue)) {
                                        var t = withCamelCaseKeys(this.origValue);
                                        e = "text" === t.resourceType || null != t.text ? new ve(t) : "subtitles" === t.resourceType ? new _e(t) : "fetch" === t.resourceType || null != t.url ? new me(t) : new he(t);
                                    } else e = S()(this.origValue) ? /^fetch:.+/.test(this.origValue) ? new me(this.origValue.substr(6)) : this.origValue : "";
                                    return e.toString();
                                }
                            } ], [ {
                                key: "textStyle",
                                value: function(e) {
                                    return new ve(e).textStyleIdentifier();
                                }
                            } ]), LayerParam;
                        }(be);
                        function transformation_typeof(e) {
                            return transformation_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, transformation_typeof(e);
                        }
                        function transformation_setPrototypeOf(e, t) {
                            return transformation_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t, e;
                            }, transformation_setPrototypeOf(e, t);
                        }
                        function transformation_createSuper(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }();
                            return function() {
                                var r, n = transformation_getPrototypeOf(e);
                                if (t) {
                                    var o = transformation_getPrototypeOf(this).constructor;
                                    r = Reflect.construct(n, arguments, o);
                                } else r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === transformation_typeof(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    }(e);
                                }(this, r);
                            };
                        }
                        function transformation_getPrototypeOf(e) {
                            return transformation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }, transformation_getPrototypeOf(e);
                        }
                        function transformation_slicedToArray(e, t) {
                            return function(e) {
                                if (Array.isArray(e)) return e;
                            }(e) || function(e, t) {
                                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != r) {
                                    var n, o, i = [], a = !0, u = !1;
                                    try {
                                        for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0) ;
                                    } catch (e) {
                                        u = !0, o = e;
                                    } finally {
                                        try {
                                            a || null == r.return || r.return();
                                        } finally {
                                            if (u) throw o;
                                        }
                                    }
                                    return i;
                                }
                            }(e, t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return transformation_arrayLikeToArray(e, t);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? transformation_arrayLikeToArray(e, t) : void 0;
                                }
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }();
                        }
                        function transformation_arrayLikeToArray(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                            return n;
                        }
                        function transformation_classCallCheck(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }
                        function transformation_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function transformation_createClass(e, t, r) {
                            return t && transformation_defineProperties(e.prototype, t), r && transformation_defineProperties(e, r), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), e;
                        }
                        function assignNotNull(e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            return r.forEach((function(t) {
                                Object.keys(t).forEach((function(r) {
                                    null != t[r] && (e[r] = t[r]);
                                }));
                            })), e;
                        }
                        var ke = function() {
                            function TransformationBase(e) {
                                var t, r;
                                transformation_classCallCheck(this, TransformationBase), t = void 0, r = {}, this.toOptions = function(e) {
                                    var t = {};
                                    if (null == e && (e = !0), Object.keys(r).forEach((function(e) {
                                        return t[e] = r[e].origValue;
                                    })), assignNotNull(t, this.otherOptions), e && !isEmpty(this.chained)) {
                                        var n = this.chained.map((function(e) {
                                            return e.toOptions();
                                        }));
                                        n.push(t), assignNotNull(t = {}, this.otherOptions), t.transformation = n;
                                    }
                                    return t;
                                }, this.setParent = function(e) {
                                    return t = e, null != e && this.fromOptions("function" == typeof e.toOptions ? e.toOptions() : void 0), 
                                    this;
                                }, this.getParent = function() {
                                    return t;
                                }, this.param = function(e, t, n, o, i) {
                                    return null == i && (i = B()(o) ? o : g.a), r[t] = new be(t, n, i).set(e), this;
                                }, this.rawParam = function(e, t, n, o, i) {
                                    return i = lastArgCallback(arguments), r[t] = new Pe(t, n, i).set(e), this;
                                }, this.rangeParam = function(e, t, n, o, i) {
                                    return i = lastArgCallback(arguments), r[t] = new we(t, n, i).set(e), this;
                                }, this.arrayParam = function(e, t, n) {
                                    var o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ":";
                                    return o = lastArgCallback(arguments), r[t] = new ge(t, n, i, o).set(e), this;
                                }, this.transformationParam = function(e, t, n) {
                                    var o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".";
                                    return o = lastArgCallback(arguments), r[t] = new Oe(t, n, i, o).set(e), this;
                                }, this.layerParam = function(e, t, n) {
                                    return r[t] = new je(t, n).set(e), this;
                                }, this.getValue = function(e) {
                                    var t = r[e] && r[e].value();
                                    return null != t ? t : this.otherOptions[e];
                                }, this.get = function(e) {
                                    return r[e];
                                }, this.remove = function(e) {
                                    var t;
                                    switch (!1) {
                                      case null == r[e]:
                                        return t = r[e], delete r[e], t.origValue;

                                      case null == this.otherOptions[e]:
                                        return t = this.otherOptions[e], delete this.otherOptions[e], t;

                                      default:
                                        return null;
                                    }
                                }, this.keys = function() {
                                    var e;
                                    return function() {
                                        var t;
                                        for (e in t = [], r) null != e && t.push(e.match(xe) ? e : snakeCase(e));
                                        return t;
                                    }().sort();
                                }, this.toPlainObject = function() {
                                    var e, t, n;
                                    for (t in e = {}, r) e[t] = r[t].value(), x()(e[t]) && (e[t] = p()(e[t]));
                                    return isEmpty(this.chained) || ((n = this.chained.map((function(e) {
                                        return e.toPlainObject();
                                    }))).push(e), e = {
                                        transformation: n
                                    }), e;
                                }, this.chain = function() {
                                    var e;
                                    return 0 !== Object.getOwnPropertyNames(r).length && (e = new this.constructor(this.toOptions(!1)), 
                                    this.resetTransformations(), this.chained.push(e)), this;
                                }, this.resetTransformations = function() {
                                    return r = {}, this;
                                }, this.otherOptions = {}, this.chained = [], this.fromOptions(e);
                            }
                            return transformation_createClass(TransformationBase, [ {
                                key: "fromOptions",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    if (e instanceof TransformationBase) this.fromTransformation(e); else for (var t in (S()(e) || j()(e)) && (e = {
                                        transformation: e
                                    }), (e = p()(e, (function(e) {
                                        if (e instanceof TransformationBase || e instanceof Layer) return new e.clone;
                                    }))).if && (this.set("if", e.if), delete e.if), e) {
                                        var r = e[t];
                                        null != r && (t.match(xe) ? "$attr" !== t && this.set("variable", t, r) : this.set(t, r));
                                    }
                                    return this;
                                }
                            }, {
                                key: "fromTransformation",
                                value: function(e) {
                                    var t = this;
                                    return e instanceof TransformationBase && e.keys().forEach((function(r) {
                                        return t.set(r, e.get(r).origValue);
                                    })), this;
                                }
                            }, {
                                key: "set",
                                value: function(e) {
                                    var t;
                                    t = camelCase(e);
                                    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                                    return w()(Ee.methods, t) ? this[t].apply(this, n) : this.otherOptions[e] = n[0], 
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
                                    var e, t, r, n, o, i, a, u, c, s, l, f, p, y, h, _, m;
                                    for (s = this.chained.map((function(e) {
                                        return e.serialize();
                                    })), n = this.keys(), y = null != (o = this.get("transformation")) ? o.serialize() : void 0, 
                                    e = null != (i = this.get("if")) ? i.serialize() : void 0, _ = function(e) {
                                        var t, r, n, o, i;
                                        if (j()(e)) {
                                            for (o = [], t = 0, r = e.length; t < r; t++) {
                                                var a = transformation_slicedToArray(e[t], 2);
                                                n = a[0], i = a[1], o.push("".concat(n, "_").concat(le.normalize(i)));
                                            }
                                            return o;
                                        }
                                        return e;
                                    }(null != (a = this.get("variables")) ? a.value() : void 0), n = v()(n, [ "transformation", "if", "variables" ]), 
                                    m = [], f = [], t = 0, r = n.length; t < r; t++) (l = n[t]).match(xe) ? m.push(l + "_" + le.normalize(null != (u = this.get(l)) ? u.value() : void 0)) : f.push(null != (c = this.get(l)) ? c.serialize() : void 0);
                                    switch (!1) {
                                      case !S()(y):
                                        f.push(y);
                                        break;

                                      case !j()(y):
                                        s = s.concat(y);
                                    }
                                    return f = function() {
                                        var e, t, r;
                                        for (r = [], e = 0, t = f.length; e < t; e++) h = f[e], (j()(h) && !isEmpty(h) || !j()(h) && h) && r.push(h);
                                        return r;
                                    }(), f = m.sort().concat(_).concat(f.sort()), "if_end" === e ? f.push(e) : isEmpty(e) || f.unshift(e), 
                                    isEmpty(p = d()(f).join(this.param_separator)) || s.push(p), d()(s).join(this.trans_separator);
                                }
                            }, {
                                key: "toHtmlAttributes",
                                value: function() {
                                    var e, t, r, n, o, i, a, u, c = this;
                                    return r = {}, Object.keys(this.otherOptions).forEach((function(t) {
                                        i = c.otherOptions[t], u = snakeCase(t), w()(Ee.PARAM_NAMES, u) || w()(Z, u) || (e = /^html_/.test(t) ? t.slice(5) : t, 
                                        r[e] = i);
                                    })), this.keys().forEach((function(e) {
                                        /^html_/.test(e) && (r[camelCase(e.slice(5))] = c.getValue(e));
                                    })), this.hasLayer() || this.getValue("angle") || w()([ "fit", "limit", "lfill" ], this.getValue("crop")) || (a = null != (n = this.get("width")) ? n.origValue : void 0, 
                                    t = null != (o = this.get("height")) ? o.origValue : void 0, parseFloat(a) >= 1 && null == r.width && (r.width = a), 
                                    parseFloat(t) >= 1 && null == r.height && (r.height = t)), r;
                                }
                            }, {
                                key: "toHtml",
                                value: function() {
                                    var e;
                                    return null != (e = this.getParent()) && "function" == typeof e.toHtml ? e.toHtml() : void 0;
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
                                    return Ee.methods;
                                }
                            }, {
                                key: "isValidParamName",
                                value: function(e) {
                                    return Ee.methods.indexOf(camelCase(e)) >= 0;
                                }
                            } ]), TransformationBase;
                        }(), xe = /^\$[a-zA-Z0-9]+$/;
                        function lastArgCallback(e) {
                            var t;
                            return t = null != e ? e[e.length - 1] : void 0, B()(t) ? t : void 0;
                        }
                        function processCustomFunction(e) {
                            var t = e.function_type, r = e.source;
                            return "remote" === t ? [ t, btoa(r) ].join(":") : "wasm" === t ? [ t, r ].join(":") : void 0;
                        }
                        ke.prototype.trans_separator = "/", ke.prototype.param_separator = ",";
                        var Ee = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t && transformation_setPrototypeOf(e, t);
                            }(Transformation, e);
                            var t = transformation_createSuper(Transformation);
                            function Transformation(e) {
                                return transformation_classCallCheck(this, Transformation), t.call(this, e);
                            }
                            return transformation_createClass(Transformation, [ {
                                key: "angle",
                                value: function(e) {
                                    return this.arrayParam(e, "angle", "a", ".", le.normalize);
                                }
                            }, {
                                key: "audioCodec",
                                value: function(e) {
                                    return this.param(e, "audio_codec", "ac");
                                }
                            }, {
                                key: "audioFrequency",
                                value: function(e) {
                                    return this.param(e, "audio_frequency", "af");
                                }
                            }, {
                                key: "aspectRatio",
                                value: function(e) {
                                    return this.param(e, "aspect_ratio", "ar", le.normalize);
                                }
                            }, {
                                key: "background",
                                value: function(e) {
                                    return this.param(e, "background", "b", be.norm_color);
                                }
                            }, {
                                key: "bitRate",
                                value: function(e) {
                                    return this.param(e, "bit_rate", "br");
                                }
                            }, {
                                key: "border",
                                value: function(e) {
                                    return this.param(e, "border", "bo", (function(e) {
                                        return x()(e) ? (e = l()({}, {
                                            color: "black",
                                            width: 2
                                        }, e), "".concat(e.width, "px_solid_").concat(be.norm_color(e.color))) : e;
                                    }));
                                }
                            }, {
                                key: "color",
                                value: function(e) {
                                    return this.param(e, "color", "co", be.norm_color);
                                }
                            }, {
                                key: "colorSpace",
                                value: function(e) {
                                    return this.param(e, "color_space", "cs");
                                }
                            }, {
                                key: "crop",
                                value: function(e) {
                                    return this.param(e, "crop", "c");
                                }
                            }, {
                                key: "customFunction",
                                value: function(e) {
                                    return this.param(e, "custom_function", "fn", (function() {
                                        return processCustomFunction(e);
                                    }));
                                }
                            }, {
                                key: "customPreFunction",
                                value: function(e) {
                                    if (!this.get("custom_function")) return this.rawParam(e, "custom_function", "", (function() {
                                        return (e = processCustomFunction(e)) ? "fn_pre:".concat(e) : e;
                                    }));
                                }
                            }, {
                                key: "defaultImage",
                                value: function(e) {
                                    return this.param(e, "default_image", "d");
                                }
                            }, {
                                key: "delay",
                                value: function(e) {
                                    return this.param(e, "delay", "dl");
                                }
                            }, {
                                key: "density",
                                value: function(e) {
                                    return this.param(e, "density", "dn");
                                }
                            }, {
                                key: "duration",
                                value: function(e) {
                                    return this.rangeParam(e, "duration", "du");
                                }
                            }, {
                                key: "dpr",
                                value: function(e) {
                                    return this.param(e, "dpr", "dpr", (function(e) {
                                        return (null != (e = e.toString()) ? e.match(/^\d+$/) : void 0) ? e + ".0" : le.normalize(e);
                                    }));
                                }
                            }, {
                                key: "effect",
                                value: function(e) {
                                    return this.arrayParam(e, "effect", "e", ":", le.normalize);
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
                                value: function(e) {
                                    return this.rangeParam(e, "end_offset", "eo");
                                }
                            }, {
                                key: "fallbackContent",
                                value: function(e) {
                                    return this.param(e, "fallback_content");
                                }
                            }, {
                                key: "fetchFormat",
                                value: function(e) {
                                    return this.param(e, "fetch_format", "f");
                                }
                            }, {
                                key: "format",
                                value: function(e) {
                                    return this.param(e, "format");
                                }
                            }, {
                                key: "flags",
                                value: function(e) {
                                    return this.arrayParam(e, "flags", "fl", ".");
                                }
                            }, {
                                key: "gravity",
                                value: function(e) {
                                    return this.param(e, "gravity", "g");
                                }
                            }, {
                                key: "fps",
                                value: function(e) {
                                    return this.param(e, "fps", "fps", (function(e) {
                                        return S()(e) ? e : j()(e) ? e.join("-") : e;
                                    }));
                                }
                            }, {
                                key: "height",
                                value: function(e) {
                                    var t = this;
                                    return this.param(e, "height", "h", (function() {
                                        return t.getValue("crop") || t.getValue("overlay") || t.getValue("underlay") ? le.normalize(e) : null;
                                    }));
                                }
                            }, {
                                key: "htmlHeight",
                                value: function(e) {
                                    return this.param(e, "html_height");
                                }
                            }, {
                                key: "htmlWidth",
                                value: function(e) {
                                    return this.param(e, "html_width");
                                }
                            }, {
                                key: "if",
                                value: function() {
                                    var e, t, r, n, o, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                                    switch (i) {
                                      case "else":
                                        return this.chain(), this.param(i, "if", "if");

                                      case "end":
                                        for (this.chain(), e = r = this.chained.length - 1; r >= 0 && "end" !== (t = this.chained[e].getValue("if")) && (null == t || (n = Transformation.new().if(t), 
                                        this.chained[e].remove("if"), o = this.chained[e], this.chained[e] = Transformation.new().transformation([ n, o ]), 
                                        "else" === t)); e = r += -1) ;
                                        return this.param(i, "if", "if");

                                      case "":
                                        return fe.new().setParent(this);

                                      default:
                                        return this.param(i, "if", "if", (function(e) {
                                            return fe.new(e).toString();
                                        }));
                                    }
                                }
                            }, {
                                key: "keyframeInterval",
                                value: function(e) {
                                    return this.param(e, "keyframe_interval", "ki");
                                }
                            }, {
                                key: "ocr",
                                value: function(e) {
                                    return this.param(e, "ocr", "ocr");
                                }
                            }, {
                                key: "offset",
                                value: function(e) {
                                    var t, r, n = transformation_slicedToArray(B()(null != e ? e.split : void 0) ? e.split("..") : j()(e) ? e : [ null, null ], 2);
                                    if (r = n[0], t = n[1], null != r && this.startOffset(r), null != t) return this.endOffset(t);
                                }
                            }, {
                                key: "opacity",
                                value: function(e) {
                                    return this.param(e, "opacity", "o", le.normalize);
                                }
                            }, {
                                key: "overlay",
                                value: function(e) {
                                    return this.layerParam(e, "overlay", "l");
                                }
                            }, {
                                key: "page",
                                value: function(e) {
                                    return this.param(e, "page", "pg");
                                }
                            }, {
                                key: "poster",
                                value: function(e) {
                                    return this.param(e, "poster");
                                }
                            }, {
                                key: "prefix",
                                value: function(e) {
                                    return this.param(e, "prefix", "p");
                                }
                            }, {
                                key: "quality",
                                value: function(e) {
                                    return this.param(e, "quality", "q", le.normalize);
                                }
                            }, {
                                key: "radius",
                                value: function(e) {
                                    return this.arrayParam(e, "radius", "r", ":", le.normalize);
                                }
                            }, {
                                key: "rawTransformation",
                                value: function(e) {
                                    return this.rawParam(e, "raw_transformation");
                                }
                            }, {
                                key: "size",
                                value: function(e) {
                                    var t, r;
                                    if (B()(null != e ? e.split : void 0)) {
                                        var n = transformation_slicedToArray(e.split("x"), 2);
                                        return r = n[0], t = n[1], this.width(r), this.height(t);
                                    }
                                }
                            }, {
                                key: "sourceTypes",
                                value: function(e) {
                                    return this.param(e, "source_types");
                                }
                            }, {
                                key: "sourceTransformation",
                                value: function(e) {
                                    return this.param(e, "source_transformation");
                                }
                            }, {
                                key: "startOffset",
                                value: function(e) {
                                    return this.rangeParam(e, "start_offset", "so");
                                }
                            }, {
                                key: "streamingProfile",
                                value: function(e) {
                                    return this.param(e, "streaming_profile", "sp");
                                }
                            }, {
                                key: "transformation",
                                value: function(e) {
                                    return this.transformationParam(e, "transformation", "t");
                                }
                            }, {
                                key: "underlay",
                                value: function(e) {
                                    return this.layerParam(e, "underlay", "u");
                                }
                            }, {
                                key: "variable",
                                value: function(e, t) {
                                    return this.param(t, e, e);
                                }
                            }, {
                                key: "variables",
                                value: function(e) {
                                    return this.arrayParam(e, "variables");
                                }
                            }, {
                                key: "videoCodec",
                                value: function(e) {
                                    return this.param(e, "video_codec", "vc", be.process_video_params);
                                }
                            }, {
                                key: "videoSampling",
                                value: function(e) {
                                    return this.param(e, "video_sampling", "vs");
                                }
                            }, {
                                key: "width",
                                value: function(e) {
                                    var t = this;
                                    return this.param(e, "width", "w", (function() {
                                        return t.getValue("crop") || t.getValue("overlay") || t.getValue("underlay") ? le.normalize(e) : null;
                                    }));
                                }
                            }, {
                                key: "x",
                                value: function(e) {
                                    return this.param(e, "x", "x", le.normalize);
                                }
                            }, {
                                key: "y",
                                value: function(e) {
                                    return this.param(e, "y", "y", le.normalize);
                                }
                            }, {
                                key: "zoom",
                                value: function(e) {
                                    return this.param(e, "zoom", "z", le.normalize);
                                }
                            } ], [ {
                                key: "new",
                                value: function(e) {
                                    return new Transformation(e);
                                }
                            } ]), Transformation;
                        }(ke);
                        Ee.methods = [ "angle", "audioCodec", "audioFrequency", "aspectRatio", "background", "bitRate", "border", "color", "colorSpace", "crop", "customFunction", "customPreFunction", "defaultImage", "delay", "density", "duration", "dpr", "effect", "else", "endIf", "endOffset", "fallbackContent", "fetchFormat", "format", "flags", "gravity", "fps", "height", "htmlHeight", "htmlWidth", "if", "keyframeInterval", "ocr", "offset", "opacity", "overlay", "page", "poster", "prefix", "quality", "radius", "rawTransformation", "size", "sourceTypes", "sourceTransformation", "startOffset", "streamingProfile", "transformation", "underlay", "variable", "variables", "videoCodec", "videoSampling", "width", "x", "y", "zoom" ], 
                        Ee.PARAM_NAMES = Ee.methods.map(snakeCase).concat(de.CONFIG_PARAMS);
                        var Se = Ee;
                        function htmltag_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function htmltag_toAttribute(e, t) {
                            return t ? !0 === t ? e : "".concat(e, '="').concat(t, '"') : void 0;
                        }
                        function escapeQuotes(e) {
                            return S()(e) ? e.replace('"', "&#34;").replace("'", "&#39;") : e;
                        }
                        var Ae = function() {
                            function HtmlTag(e, t, r) {
                                var n;
                                !function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, HtmlTag), this.name = e, this.publicId = t, null == r && (x()(t) ? (r = t, 
                                this.publicId = void 0) : r = {}), (n = new Se(r)).setParent(this), this.transformation = function() {
                                    return n;
                                };
                            }
                            var e, t, r;
                            return e = HtmlTag, r = [ {
                                key: "new",
                                value: function(e, t, r) {
                                    return new this(e, t, r);
                                }
                            }, {
                                key: "isResponsive",
                                value: function(e, t) {
                                    var r;
                                    return r = lodash_getData(e, "src-cache") || lodash_getData(e, "src"), lodash_hasClass(e, t) && /\bw_auto\b/.exec(r);
                                }
                            } ], (t = [ {
                                key: "htmlAttrs",
                                value: function(e) {
                                    var t, r;
                                    return function() {
                                        var n;
                                        for (t in n = [], e) (r = escapeQuotes(e[t])) && n.push(htmltag_toAttribute(t, r));
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
                                value: function(e) {
                                    return this.transformation().getValue(e);
                                }
                            }, {
                                key: "attributes",
                                value: function() {
                                    var e = this.transformation().toHtmlAttributes();
                                    return Object.keys(e).forEach((function(t) {
                                        x()(e[t]) && delete e[t];
                                    })), e.attributes && (C()(e, e.attributes), delete e.attributes), e;
                                }
                            }, {
                                key: "setAttr",
                                value: function(e, t) {
                                    return this.transformation().set("html_".concat(e), t), this;
                                }
                            }, {
                                key: "getAttr",
                                value: function(e) {
                                    return this.attributes()["html_".concat(e)] || this.attributes()[e];
                                }
                            }, {
                                key: "removeAttr",
                                value: function(e) {
                                    var t;
                                    return null != (t = this.transformation().remove("html_".concat(e))) ? t : this.transformation().remove(e);
                                }
                            }, {
                                key: "content",
                                value: function() {
                                    return "";
                                }
                            }, {
                                key: "openTag",
                                value: function() {
                                    var e = "<" + this.name, t = this.htmlAttrs(this.attributes());
                                    return t && t.length > 0 && (e += " " + t), e + ">";
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
                                    var e, t, r, n;
                                    if (!B()("undefined" != typeof document && null !== document ? document.createElement : void 0)) throw "Can't create DOM if document is not present!";
                                    for (t in e = document.createElement(this.name), r = this.attributes()) n = r[t], 
                                    e.setAttribute(t, n);
                                    return e;
                                }
                            } ]) && htmltag_defineProperties(e.prototype, t), r && htmltag_defineProperties(e, r), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), HtmlTag;
                        }(), Ce = [ "placeholder", "accessibility" ];
                        function _objectWithoutProperties(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = {}, i = Object.keys(e);
                                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o;
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                            }
                            return o;
                        }
                        function isUrl(e) {
                            return !!e && !!e.match(/^https?:\//);
                        }
                        function handlePrefix(e, t) {
                            if (t.cloud_name && "/" === t.cloud_name[0]) return "/res" + t.cloud_name;
                            var r = "http://", n = "", o = "res", i = ".cloudinary.com", a = "/" + t.cloud_name;
                            return t.protocol && (r = t.protocol + "//"), t.private_cdn && (n = t.cloud_name + "-", 
                            a = ""), t.cdn_subdomain && (o = "res-" + function(e) {
                                return src_crc32(e) % 5 + 1;
                            }(e)), t.secure ? (r = "https://", !1 === t.secure_cdn_subdomain && (o = "res"), 
                            null != t.secure_distribution && t.secure_distribution !== N && t.secure_distribution !== U && (n = "", 
                            o = "", i = t.secure_distribution)) : t.cname && (r = "http://", n = "", o = t.cdn_subdomain ? "a" + (src_crc32(e) % 5 + 1) + "." : "", 
                            i = t.cname), [ r, n, o, i, a ].join("");
                        }
                        function encodePublicId(e) {
                            return encodeURIComponent(e).replace(/%3A/g, ":").replace(/%2F/g, "/");
                        }
                        function preparePublicId(e, t) {
                            var r, n, o = t.type;
                            return isUrl(e) || "fetch" !== o ? e : (r = e, n = document.location.protocol + "//" + document.location.host, 
                            "?" === r[0] ? n += document.location.pathname : "/" !== r[0] && (n += document.location.pathname.replace(/\/[^\/]*$/, "/")), 
                            n + r);
                        }
                        function urlString(e, t) {
                            if (isUrl(e) && ("upload" === t.type || "asset" === t.type)) return e;
                            var r = function(e, t) {
                                var r = t.force_version || void 0 === t.force_version, n = e.indexOf("/") < 0 || e.match(/^v[0-9]+/) || isUrl(e) || t.version;
                                return r && !n && (t.version = 1), t.version ? "v".concat(t.version) : "";
                            }(e, t), n = function(e) {
                                var t = e || {}, r = t.placeholder, n = t.accessibility, o = _objectWithoutProperties(t, Ce), i = new Se(o);
                                return n && X[n] && i.chain().effect(X[n]), r && ("predominant-color" === r && i.getValue("width") && i.getValue("height") && (r += "-pixel"), 
                                (Q[r] || Q.blur).forEach((function(e) {
                                    return i.chain().transformation(e);
                                }))), i.serialize();
                            }(t), o = handlePrefix(e, t), i = function(e) {
                                var t = e.signature, r = !t || 0 === t.indexOf("s--") && "--" === t.substr(-2);
                                return delete e.signature, r ? t : "s--".concat(t, "--");
                            }(t), a = function(e) {
                                var t, r = e.resource_type, n = void 0 === r ? "image" : r, o = e.type, i = void 0 === o ? "upload" : o, a = e.url_suffix, u = e.use_root_path, c = e.shorten, s = n;
                                if (x()(s) && (s = (t = s).resource_type, i = t.type, c = t.shorten), null == i && (i = "upload"), 
                                null != a && (s = $["".concat(s, "/").concat(i)], i = null, null == s)) throw new Error("URL Suffix only supported for ".concat(Object.keys($).join(", ")));
                                if (u) {
                                    if (("image" !== s || "upload" !== i) && "images" !== s) throw new Error("Root path only supported for image/upload");
                                    s = null, i = null;
                                }
                                return c && "image" === s && "upload" === i && (s = "iu", i = null), [ s, i ].join("/");
                            }(t);
                            return e = function(e, t) {
                                if (isUrl(e)) e = encodePublicId(e); else {
                                    try {
                                        e = decodeURIComponent(e);
                                    } catch (e) {}
                                    e = encodePublicId(e), t.url_suffix && (e = e + "/" + t.url_suffix), t.format && (t.trust_public_id || (e = e.replace(/\.(jpg|png|gif|webp)$/, "")), 
                                    e = e + "." + t.format);
                                }
                                return e;
                            }(e, t), d()([ o, a, i, n, r, e ]).join("/").replace(/([^:])\/+/g, "$1/").replace(" ", "%20");
                        }
                        function url_url(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!e) return e;
                            t = function(e, t) {
                                return e instanceof Se && (e = e.toOptions()), "fetch" === (e = defaults({}, e, t, W)).type && (e.fetch_format = e.fetch_format || e.format), 
                                e;
                            }(t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}), e = preparePublicId(e, t);
                            var r = function(e) {
                                var t = e.cloud_name, r = e.url_suffix;
                                return t ? r && r.match(/[\.\/]/) ? "url_suffix should not include . or /" : void 0 : "Unknown cloud_name";
                            }(t);
                            if (r) throw r;
                            var n = urlString(e, t);
                            if (t.urlAnalytics) {
                                var o = getSDKAnalyticsSignature(getAnalyticsOptions(t)), i = "?";
                                n.indexOf("?") >= 0 && (i = "&"), n = "".concat(n).concat(i, "_a=").concat(o);
                            }
                            if (t.auth_token) {
                                var a = n.indexOf("?") >= 0 ? "&" : "?";
                                n = "".concat(n).concat(a, "__cld_token__=").concat(t.auth_token);
                            }
                            return n;
                        }
                        function generateBreakpoints_slicedToArray(e, t) {
                            return function(e) {
                                if (Array.isArray(e)) return e;
                            }(e) || function(e, t) {
                                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != r) {
                                    var n, o, i = [], a = !0, u = !1;
                                    try {
                                        for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0) ;
                                    } catch (e) {
                                        u = !0, o = e;
                                    } finally {
                                        try {
                                            a || null == r.return || r.return();
                                        } finally {
                                            if (u) throw o;
                                        }
                                    }
                                    return i;
                                }
                            }(e, t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return generateBreakpoints_arrayLikeToArray(e, t);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? generateBreakpoints_arrayLikeToArray(e, t) : void 0;
                                }
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }();
                        }
                        function generateBreakpoints_arrayLikeToArray(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                            return n;
                        }
                        var Te = isEmpty;
                        function scaledUrl(e, t, r) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = extractUrlParams(n);
                            return r = r || n, o.raw_transformation = new Se([ C.a({}, r), {
                                crop: "scale",
                                width: t
                            } ]).toString(), url_url(e, o);
                        }
                        function getOrGenerateBreakpoints(e) {
                            return function(e) {
                                var t = e.breakpoints || [];
                                if (t.length) return t;
                                var r = generateBreakpoints_slicedToArray([ e.min_width, e.max_width, e.max_images ].map(Number), 3), n = r[0], o = r[1], i = r[2];
                                if ([ n, o, i ].some(isNaN)) throw "Either (min_width, max_width, max_images) or breakpoints must be provided to the image srcset attribute";
                                if (n > o) throw "min_width must be less than max_width";
                                if (i <= 0) throw "max_images must be a positive integer";
                                1 === i && (n = o);
                                for (var a = Math.ceil((o - n) / Math.max(i - 1, 1)), u = n; u < o; u += a) t.push(u);
                                return t.push(o), t;
                            }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
                        }
                        function generateImageResponsiveAttributes(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = {};
                            if (Te(r)) return o;
                            var i = !t.sizes && !0 === r.sizes, a = !t.srcset;
                            if (a || i) {
                                var u = getOrGenerateBreakpoints(e, r, n);
                                if (a) {
                                    var c = function(e, t, r, n) {
                                        return patchFetchFormat(n = p.a(n)), t.map((function(t) {
                                            return "".concat(scaledUrl(e, t, r, n), " ").concat(t, "w");
                                        })).join(", ");
                                    }(e, u, r.transformation, n);
                                    Te(c) || (o.srcset = c);
                                }
                                if (i) {
                                    var s = function(e) {
                                        return null == e ? "" : e.map((function(e) {
                                            return "(max-width: ".concat(e, "px) ").concat(e, "px");
                                        })).join(", ");
                                    }(u);
                                    Te(s) || (o.sizes = s);
                                }
                            }
                            return o;
                        }
                        function imagetag_typeof(e) {
                            return imagetag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, imagetag_typeof(e);
                        }
                        function imagetag_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function imagetag_get() {
                            return imagetag_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
                                var n = function(e, t) {
                                    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = imagetag_getPrototypeOf(e)); ) ;
                                    return e;
                                }(e, t);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, t);
                                    return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value;
                                }
                            }, imagetag_get.apply(this, arguments);
                        }
                        function imagetag_setPrototypeOf(e, t) {
                            return imagetag_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t, e;
                            }, imagetag_setPrototypeOf(e, t);
                        }
                        function imagetag_createSuper(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }();
                            return function() {
                                var r, n = imagetag_getPrototypeOf(e);
                                if (t) {
                                    var o = imagetag_getPrototypeOf(this).constructor;
                                    r = Reflect.construct(n, arguments, o);
                                } else r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === imagetag_typeof(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    }(e);
                                }(this, r);
                            };
                        }
                        function imagetag_getPrototypeOf(e) {
                            return imagetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }, imagetag_getPrototypeOf(e);
                        }
                        var Re = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t && imagetag_setPrototypeOf(e, t);
                            }(ImageTag, e);
                            var t, r, n, o = imagetag_createSuper(ImageTag);
                            function ImageTag(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, ImageTag), o.call(this, "img", e, t);
                            }
                            return t = ImageTag, (r = [ {
                                key: "closeTag",
                                value: function() {
                                    return "";
                                }
                            }, {
                                key: "attributes",
                                value: function() {
                                    var e, t, r;
                                    e = imagetag_get(imagetag_getPrototypeOf(ImageTag.prototype), "attributes", this).call(this) || {}, 
                                    t = this.getOptions();
                                    var n = this.getOption("attributes") || {}, o = this.getOption("srcset") || n.srcset, i = {};
                                    return S()(o) ? i.srcset = o : i = generateImageResponsiveAttributes(this.publicId, n, o, t), 
                                    isEmpty(i) || (delete e.width, delete e.height), C()(e, i), null == e[r = t.responsive && !t.client_hints ? "data-src" : "src"] && (e[r] = url_url(this.publicId, this.getOptions())), 
                                    e;
                                }
                            } ]) && imagetag_defineProperties(t.prototype, r), n && imagetag_defineProperties(t, n), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), ImageTag;
                        }(Ae), De = Re;
                        function sourcetag_typeof(e) {
                            return sourcetag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, sourcetag_typeof(e);
                        }
                        function sourcetag_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function sourcetag_get() {
                            return sourcetag_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
                                var n = function(e, t) {
                                    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = sourcetag_getPrototypeOf(e)); ) ;
                                    return e;
                                }(e, t);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, t);
                                    return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value;
                                }
                            }, sourcetag_get.apply(this, arguments);
                        }
                        function sourcetag_setPrototypeOf(e, t) {
                            return sourcetag_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t, e;
                            }, sourcetag_setPrototypeOf(e, t);
                        }
                        function sourcetag_createSuper(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }();
                            return function() {
                                var r, n = sourcetag_getPrototypeOf(e);
                                if (t) {
                                    var o = sourcetag_getPrototypeOf(this).constructor;
                                    r = Reflect.construct(n, arguments, o);
                                } else r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === sourcetag_typeof(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    }(e);
                                }(this, r);
                            };
                        }
                        function sourcetag_getPrototypeOf(e) {
                            return sourcetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }, sourcetag_getPrototypeOf(e);
                        }
                        var Be = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t && sourcetag_setPrototypeOf(e, t);
                            }(SourceTag, e);
                            var t, r, n, o = sourcetag_createSuper(SourceTag);
                            function SourceTag(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, SourceTag), o.call(this, "source", e, t);
                            }
                            return t = SourceTag, (r = [ {
                                key: "closeTag",
                                value: function() {
                                    return "";
                                }
                            }, {
                                key: "attributes",
                                value: function() {
                                    var e = this.getOption("srcset"), t = sourcetag_get(sourcetag_getPrototypeOf(SourceTag.prototype), "attributes", this).call(this) || {}, r = this.getOptions();
                                    return C()(t, generateImageResponsiveAttributes(this.publicId, t, e, r)), t.srcset || (t.srcset = url_url(this.publicId, r)), 
                                    !t.media && r.media && (t.media = function(e) {
                                        var t = [];
                                        return null != e && (null != e.min_width && t.push("(min-width: ".concat(e.min_width, "px)")), 
                                        null != e.max_width && t.push("(max-width: ".concat(e.max_width, "px)"))), t.join(" and ");
                                    }(r.media)), t;
                                }
                            } ]) && sourcetag_defineProperties(t.prototype, r), n && sourcetag_defineProperties(t, n), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), SourceTag;
                        }(Ae), Fe = Be;
                        function picturetag_typeof(e) {
                            return picturetag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, picturetag_typeof(e);
                        }
                        function picturetag_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function picturetag_get() {
                            return picturetag_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
                                var n = function(e, t) {
                                    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = picturetag_getPrototypeOf(e)); ) ;
                                    return e;
                                }(e, t);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, t);
                                    return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value;
                                }
                            }, picturetag_get.apply(this, arguments);
                        }
                        function picturetag_setPrototypeOf(e, t) {
                            return picturetag_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t, e;
                            }, picturetag_setPrototypeOf(e, t);
                        }
                        function picturetag_createSuper(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }();
                            return function() {
                                var r, n = picturetag_getPrototypeOf(e);
                                if (t) {
                                    var o = picturetag_getPrototypeOf(this).constructor;
                                    r = Reflect.construct(n, arguments, o);
                                } else r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === picturetag_typeof(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    }(e);
                                }(this, r);
                            };
                        }
                        function picturetag_getPrototypeOf(e) {
                            return picturetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }, picturetag_getPrototypeOf(e);
                        }
                        var Ie = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t && picturetag_setPrototypeOf(e, t);
                            }(PictureTag, e);
                            var t, r, n, o = picturetag_createSuper(PictureTag);
                            function PictureTag(e) {
                                var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, PictureTag), (t = o.call(this, "picture", e, r)).widthList = n, t;
                            }
                            return t = PictureTag, (r = [ {
                                key: "content",
                                value: function() {
                                    var e = this;
                                    return this.widthList.map((function(t) {
                                        var r = t.min_width, n = t.max_width, o = t.transformation, i = e.getOptions(), a = new Se(i);
                                        return a.chain().fromOptions("string" == typeof o ? {
                                            raw_transformation: o
                                        } : o), (i = extractUrlParams(i)).media = {
                                            min_width: r,
                                            max_width: n
                                        }, i.transformation = a, new Fe(e.publicId, i).toHtml();
                                    })).join("") + new De(this.publicId, this.getOptions()).toHtml();
                                }
                            }, {
                                key: "attributes",
                                value: function() {
                                    var e = picturetag_get(picturetag_getPrototypeOf(PictureTag.prototype), "attributes", this).call(this);
                                    return delete e.width, delete e.height, e;
                                }
                            }, {
                                key: "closeTag",
                                value: function() {
                                    return "</" + this.name + ">";
                                }
                            } ]) && picturetag_defineProperties(t.prototype, r), n && picturetag_defineProperties(t, n), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), PictureTag;
                        }(Ae), Le = Ie;
                        function videotag_typeof(e) {
                            return videotag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, videotag_typeof(e);
                        }
                        function videotag_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function videotag_get() {
                            return videotag_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
                                var n = function(e, t) {
                                    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = videotag_getPrototypeOf(e)); ) ;
                                    return e;
                                }(e, t);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, t);
                                    return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value;
                                }
                            }, videotag_get.apply(this, arguments);
                        }
                        function videotag_setPrototypeOf(e, t) {
                            return videotag_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t, e;
                            }, videotag_setPrototypeOf(e, t);
                        }
                        function videotag_createSuper(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }();
                            return function() {
                                var r, n = videotag_getPrototypeOf(e);
                                if (t) {
                                    var o = videotag_getPrototypeOf(this).constructor;
                                    r = Reflect.construct(n, arguments, o);
                                } else r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === videotag_typeof(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    }(e);
                                }(this, r);
                            };
                        }
                        function videotag_getPrototypeOf(e) {
                            return videotag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }, videotag_getPrototypeOf(e);
                        }
                        var ze = [ "source_types", "source_transformation", "fallback_content", "poster", "sources" ], Ne = [ "webm", "mp4", "ogv" ], Me = {
                            format: "jpg",
                            resource_type: "video"
                        }, Ue = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t && videotag_setPrototypeOf(e, t);
                            }(VideoTag, e);
                            var t, r, n, o = videotag_createSuper(VideoTag);
                            function VideoTag(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, VideoTag), t = defaults({}, t, G), o.call(this, "video", e.replace(/\.(mp4|ogv|webm)$/, ""), t);
                            }
                            return t = VideoTag, r = [ {
                                key: "setSourceTransformation",
                                value: function(e) {
                                    return this.transformation().sourceTransformation(e), this;
                                }
                            }, {
                                key: "setSourceTypes",
                                value: function(e) {
                                    return this.transformation().sourceTypes(e), this;
                                }
                            }, {
                                key: "setPoster",
                                value: function(e) {
                                    return this.transformation().poster(e), this;
                                }
                            }, {
                                key: "setFallbackContent",
                                value: function(e) {
                                    return this.transformation().fallbackContent(e), this;
                                }
                            }, {
                                key: "content",
                                value: function() {
                                    var e = this, t = this.transformation().getValue("source_types"), r = this.transformation().getValue("source_transformation"), n = this.transformation().getValue("fallback_content"), o = this.getOption("sources"), i = [];
                                    return j()(o) && !isEmpty(o) ? i = o.map((function(t) {
                                        var r = url_url(e.publicId, defaults({}, t.transformations || {}, {
                                            resource_type: "video",
                                            format: t.type
                                        }), e.getOptions());
                                        return e.createSourceTag(r, t.type, t.codecs);
                                    })) : (isEmpty(t) && (t = Ne), j()(t) && (i = t.map((function(t) {
                                        var n = url_url(e.publicId, defaults({}, r[t] || {}, {
                                            resource_type: "video",
                                            format: t
                                        }), e.getOptions());
                                        return e.createSourceTag(n, t);
                                    })))), i.join("") + n;
                                }
                            }, {
                                key: "attributes",
                                value: function() {
                                    var e = this.getOption("source_types"), t = this.getOption("poster");
                                    if (void 0 === t && (t = {}), x()(t)) {
                                        var r = null != t.public_id ? W : Me;
                                        t = url_url(t.public_id || this.publicId, defaults({}, t, r, this.getOptions()));
                                    }
                                    var n = videotag_get(videotag_getPrototypeOf(VideoTag.prototype), "attributes", this).call(this) || {};
                                    return n = omit(n, ze), !isEmpty(this.getOption("sources")) || isEmpty(e) || j()(e) || (n.src = url_url(this.publicId, this.getOptions(), {
                                        resource_type: "video",
                                        format: e
                                    })), null != t && (n.poster = t), n;
                                }
                            }, {
                                key: "createSourceTag",
                                value: function(e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = null;
                                    return isEmpty(t) || (n = "video/" + ("ogv" === t ? "ogg" : t), isEmpty(r) || (n += "; codecs=" + (j()(r) ? r.join(", ") : r))), 
                                    "<source " + this.htmlAttrs({
                                        src: e,
                                        type: n
                                    }) + ">";
                                }
                            } ], r && videotag_defineProperties(t.prototype, r), n && videotag_defineProperties(t, n), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), VideoTag;
                        }(Ae), Ve = Ue;
                        function clienthintsmetatag_typeof(e) {
                            return clienthintsmetatag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, clienthintsmetatag_typeof(e);
                        }
                        function clienthintsmetatag_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function clienthintsmetatag_setPrototypeOf(e, t) {
                            return clienthintsmetatag_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t, e;
                            }, clienthintsmetatag_setPrototypeOf(e, t);
                        }
                        function clienthintsmetatag_createSuper(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }();
                            return function() {
                                var r, n = clienthintsmetatag_getPrototypeOf(e);
                                if (t) {
                                    var o = clienthintsmetatag_getPrototypeOf(this).constructor;
                                    r = Reflect.construct(n, arguments, o);
                                } else r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === clienthintsmetatag_typeof(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    }(e);
                                }(this, r);
                            };
                        }
                        function clienthintsmetatag_getPrototypeOf(e) {
                            return clienthintsmetatag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }, clienthintsmetatag_getPrototypeOf(e);
                        }
                        var qe = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t && clienthintsmetatag_setPrototypeOf(e, t);
                            }(ClientHintsMetaTag, e);
                            var t, r, n, o = clienthintsmetatag_createSuper(ClientHintsMetaTag);
                            function ClientHintsMetaTag(e) {
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, ClientHintsMetaTag), o.call(this, "meta", void 0, l()({
                                    "http-equiv": "Accept-CH",
                                    content: "DPR, Viewport-Width, Width"
                                }, e));
                            }
                            return t = ClientHintsMetaTag, (r = [ {
                                key: "closeTag",
                                value: function() {
                                    return "";
                                }
                            } ]) && clienthintsmetatag_defineProperties(t.prototype, r), n && clienthintsmetatag_defineProperties(t, n), 
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), ClientHintsMetaTag;
                        }(Ae);
                        function normalizeToArray_toConsumableArray(e) {
                            return function(e) {
                                if (Array.isArray(e)) return normalizeToArray_arrayLikeToArray(e);
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                            }(e) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return normalizeToArray_arrayLikeToArray(e, t);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? normalizeToArray_arrayLikeToArray(e, t) : void 0;
                                }
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }();
                        }
                        function normalizeToArray_arrayLikeToArray(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                            return n;
                        }
                        var transparentVideo_mountCloudinaryVideoTag = function(e, t, r, n) {
                            return new Promise((function(o, i) {
                                e.innerHTML = t.videoTag(r, n).toHtml(), e.querySelector(".cld-transparent-video").style.width = "100%", 
                                o(e);
                            }));
                        }, addFlag = function(e, t) {
                            e.transformation ? e.transformation.push({
                                flags: [ t ]
                            }) : (e.flags || (e.flags = []), "string" == typeof e.flags && (e.flags = [ e.flags ]), 
                            e.flags.push(t));
                        }, transparentVideo_enforceOptionsForTransparentVideo = function(e) {
                            e.autoplay = !0, e.muted = !0, e.controls = !1, e.max_timeout_ms = e.max_timeout_ms || V, 
                            e.class = e.class || "", e.class += " cld-transparent-video", e.externalLibraries = e.externalLibraries || {}, 
                            e.externalLibraries.seeThru || (e.externalLibraries.seeThru = Y.seeThru), addFlag(e, "alpha");
                        }, xhr_loadScript = function(e, t, r) {
                            return new Promise((function(n, o) {
                                if (r) n(); else {
                                    var i = document.createElement("script");
                                    i.src = e;
                                    var a = setTimeout((function() {
                                        o({
                                            status: "error",
                                            message: "Timeout loading script ".concat(e)
                                        });
                                    }), t);
                                    i.onerror = function() {
                                        clearTimeout(a), o({
                                            status: "error",
                                            message: "Error loading ".concat(e)
                                        });
                                    }, i.onload = function() {
                                        clearTimeout(a), n();
                                    }, document.head.appendChild(i);
                                }
                            }));
                        };
                        function loadUrlUsingFetch(e) {
                            return new Promise((function(t, r) {
                                fetch(e).then((function(e) {
                                    e.blob().then((function(e) {
                                        t(e);
                                    }));
                                })).catch((function() {
                                    r("error");
                                }));
                            }));
                        }
                        function loadUrlUsingXhr(e) {
                            return new Promise((function(t, r) {
                                var n = new XMLHttpRequest;
                                n.responseType = "blob", n.onload = function(e) {
                                    t(n.response);
                                }, n.onerror = function() {
                                    r("error");
                                }, n.open("GET", e, !0), n.send();
                            }));
                        }
                        var He, $e, We, Ge, Ke, Ye, xhr_getBlobFromURL = function(e, t) {
                            return new Promise((function(r, n) {
                                var o = function(e, t) {
                                    return setTimeout((function() {
                                        t({
                                            status: "error",
                                            message: "Timeout loading Blob URL"
                                        });
                                    }), e);
                                }(t, n);
                                ("undefined" != typeof fetch && fetch ? loadUrlUsingFetch : loadUrlUsingXhr)(e).then((function(e) {
                                    r({
                                        status: "success",
                                        payload: {
                                            blobURL: URL.createObjectURL(e)
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
                        }, transparentVideo_createHiddenVideoTag = function(e) {
                            var t = e.autoplay, r = e.playsinline, n = e.loop, o = e.muted, i = e.poster, a = e.blobURL, u = e.videoURL, c = document.createElement("video");
                            return c.style.visibility = "hidden", c.position = "absolute", c.x = 0, c.y = 0, 
                            c.src = a, c.setAttribute("data-video-url", u), t && c.setAttribute("autoplay", t), 
                            r && c.setAttribute("playsinline", r), n && c.setAttribute("loop", n), o && c.setAttribute("muted", o), 
                            o && (c.muted = o), i && c.setAttribute("poster", i), c.onload = function() {
                                URL.revokeObjectURL(a);
                            }, c;
                        }, transparentVideo_instantiateSeeThru = function(e, t, r, n) {
                            var o = window, i = o.seeThru, a = o.setTimeout, u = o.clearTimeout;
                            return new Promise((function(o, c) {
                                var s = a((function() {
                                    c({
                                        status: "error",
                                        message: "Timeout instantiating seeThru instance"
                                    });
                                }), t);
                                if (i) var l = i.create(e).ready((function() {
                                    u(s);
                                    var e = l.getCanvas();
                                    e.style.width = "100%", e.className += " " + r, n && l.play(), o(l);
                                })); else c({
                                    status: "error",
                                    message: "Error instantiating seeThru instance"
                                });
                            }));
                        }, transparentVideo_mountSeeThruCanvasTag = function(e, t, r) {
                            var n = r.poster, o = r.autoplay, i = r.playsinline, a = r.loop, u = r.muted;
                            return t += ".mp4", new Promise((function(c, s) {
                                xhr_loadScript(r.externalLibraries.seeThru, r.max_timeout_ms, window.seeThru).then((function() {
                                    xhr_getBlobFromURL(t, r.max_timeout_ms).then((function(l) {
                                        var f = l.payload, p = transparentVideo_createHiddenVideoTag({
                                            blobURL: f.blobURL,
                                            videoURL: t,
                                            poster: n,
                                            autoplay: o,
                                            playsinline: i,
                                            loop: a,
                                            muted: u
                                        });
                                        e.appendChild(p), transparentVideo_instantiateSeeThru(p, r.max_timeout_ms, r.class, r.autoplay).then((function() {
                                            c(e);
                                        })).catch((function(e) {
                                            s(e);
                                        }));
                                    })).catch((function(e) {
                                        var t = e.status, r = e.message;
                                        s({
                                            status: t,
                                            message: r
                                        });
                                    }));
                                })).catch((function(e) {
                                    var t = e.status, r = e.message;
                                    s({
                                        status: t,
                                        message: r
                                    });
                                }));
                            }));
                        }, transparentVideo_checkSupportForTransparency = function() {
                            return new Promise((function(e, t) {
                                isSafari() && e(!1);
                                var r = document.createElement("video"), n = r.canPlayType && r.canPlayType('video/webm; codecs="vp9"');
                                e("maybe" === n || "probably" === n);
                            }));
                        };
                        function cloudinary_defineProperties(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        We = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                            return t * Math.ceil(e / t);
                        }, $e = function(e, t) {
                            var r;
                            for (r = e.length - 2; r >= 0 && e[r] >= t; ) r--;
                            return e[r + 1];
                        }, He = function(e, t, r, n) {
                            var o, i, a, u;
                            return !(u = null != (o = null != (i = null != (a = n.responsive_use_breakpoints) ? a : n.responsive_use_stoppoints) ? i : this.config("responsive_use_breakpoints")) ? o : this.config("responsive_use_stoppoints")) || "resize" === u && !n.resizing ? t : this.calc_breakpoint(e, t, r);
                        }, Ge = function(e) {
                            var t, r;
                            for (t = 0; (e = null != e ? e.parentNode : void 0) instanceof Element && !t; ) r = window.getComputedStyle(e), 
                            /^inline/.test(r.display) || (t = lodash_width(e));
                            return t;
                        }, Ye = function(e, t) {
                            return e.replace(/\bdpr_(1\.0|auto)\b/g, "dpr_" + this.device_pixel_ratio(t));
                        }, Ke = function(e, t) {
                            var r;
                            return e > (r = lodash_getData(t, "width") || 0) && (r = e, lodash_setData(t, "width", e)), 
                            r;
                        };
                        var Qe = function() {
                            function Cloudinary(e) {
                                var t;
                                !function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, Cloudinary), this.devicePixelRatioCache = {}, this.responsiveConfig = {}, 
                                this.responsiveResizeInitialized = !1, t = new de(e), this.config = function(e, r) {
                                    return t.config(e, r);
                                }, this.fromDocument = function() {
                                    return t.fromDocument(), this;
                                }, this.fromEnvironment = function() {
                                    return t.fromEnvironment(), this;
                                }, this.init = function() {
                                    return t.init(), this;
                                };
                            }
                            var e, t, r;
                            return e = Cloudinary, t = [ {
                                key: "url",
                                value: function(e) {
                                    return url_url(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, this.config());
                                }
                            }, {
                                key: "video_url",
                                value: function(e, t) {
                                    return t = l()({
                                        resource_type: "video"
                                    }, t), this.url(e, t);
                                }
                            }, {
                                key: "video_thumbnail_url",
                                value: function(e, t) {
                                    return t = l()({}, q, t), this.url(e, t);
                                }
                            }, {
                                key: "transformation_string",
                                value: function(e) {
                                    return new Se(e).serialize();
                                }
                            }, {
                                key: "image",
                                value: function(e) {
                                    var t, r, n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return r = this.imageTag(e, o), t = null != (n = null != o.client_hints ? o.client_hints : this.config("client_hints")) && n, 
                                    null != o.src || t || r.setAttr("src", ""), r = r.toDOM(), t || (lodash_setData(r, "src-cache", this.url(e, o)), 
                                    this.cloudinary_update(r, o)), r;
                                }
                            }, {
                                key: "imageTag",
                                value: function(e, t) {
                                    var r;
                                    return (r = new De(e, this.config())).transformation().fromOptions(t), r;
                                }
                            }, {
                                key: "pictureTag",
                                value: function(e, t, r) {
                                    var n;
                                    return (n = new Le(e, this.config(), r)).transformation().fromOptions(t), n;
                                }
                            }, {
                                key: "sourceTag",
                                value: function(e, t) {
                                    var r;
                                    return (r = new Fe(e, this.config())).transformation().fromOptions(t), r;
                                }
                            }, {
                                key: "video_thumbnail",
                                value: function(e, t) {
                                    return this.image(e, C()({}, q, t));
                                }
                            }, {
                                key: "facebook_profile_image",
                                value: function(e, t) {
                                    return this.image(e, l()({
                                        type: "facebook"
                                    }, t));
                                }
                            }, {
                                key: "twitter_profile_image",
                                value: function(e, t) {
                                    return this.image(e, l()({
                                        type: "twitter"
                                    }, t));
                                }
                            }, {
                                key: "twitter_name_profile_image",
                                value: function(e, t) {
                                    return this.image(e, l()({
                                        type: "twitter_name"
                                    }, t));
                                }
                            }, {
                                key: "gravatar_image",
                                value: function(e, t) {
                                    return this.image(e, l()({
                                        type: "gravatar"
                                    }, t));
                                }
                            }, {
                                key: "fetch_image",
                                value: function(e, t) {
                                    return this.image(e, l()({
                                        type: "fetch"
                                    }, t));
                                }
                            }, {
                                key: "video",
                                value: function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return this.videoTag(e, t).toHtml();
                                }
                            }, {
                                key: "videoTag",
                                value: function(e, t) {
                                    return t = defaults({}, t, this.config()), new Ve(e, t);
                                }
                            }, {
                                key: "sprite_css",
                                value: function(e, t) {
                                    return t = l()({
                                        type: "sprite"
                                    }, t), e.match(/.css$/) || (t.format = "css"), this.url(e, t);
                                }
                            }, {
                                key: "responsive",
                                value: function(e) {
                                    var t, r, n, o, i, a = this, u = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                    if (this.responsiveConfig = C()(this.responsiveConfig || {}, e), o = null != (t = this.responsiveConfig.responsive_class) ? t : this.config("responsive_class"), 
                                    u && this.cloudinary_update("img.".concat(o, ", img.cld-hidpi"), this.responsiveConfig), 
                                    (null == (r = null != (n = this.responsiveConfig.responsive_resize) ? n : this.config("responsive_resize")) || r) && !this.responsiveResizeInitialized) {
                                        this.responsiveConfig.resizing = this.responsiveResizeInitialized = !0, i = null;
                                        var makeResponsive = function() {
                                            var e, t, r, n, u, c;
                                            return e = null != (t = null != (r = a.responsiveConfig.responsive_debounce) ? r : a.config("responsive_debounce")) ? t : 100, 
                                            n = function() {
                                                i && (clearTimeout(i), i = null);
                                            }, u = function() {
                                                return a.cloudinary_update("img.".concat(o), a.responsiveConfig);
                                            }, c = function() {
                                                return n(), u();
                                            }, e ? (n(), void (i = setTimeout(c, e))) : u();
                                        };
                                        return window.addEventListener("resize", makeResponsive), function() {
                                            return window.removeEventListener("resize", makeResponsive);
                                        };
                                    }
                                }
                            }, {
                                key: "calc_breakpoint",
                                value: function(e, t, r) {
                                    var n = lodash_getData(e, "breakpoints") || lodash_getData(e, "stoppoints") || this.config("breakpoints") || this.config("stoppoints") || We;
                                    return B()(n) ? n(t, r) : (S()(n) && (n = n.split(",").map((function(e) {
                                        return parseInt(e);
                                    })).sort((function(e, t) {
                                        return e - t;
                                    }))), $e(n, t));
                                }
                            }, {
                                key: "calc_stoppoint",
                                value: function(e, t, r) {
                                    return this.calc_breakpoint(e, t, r);
                                }
                            }, {
                                key: "device_pixel_ratio",
                                value: function(e) {
                                    e = null == e || e;
                                    var t = ("undefined" != typeof window && null !== window ? window.devicePixelRatio : void 0) || 1;
                                    e && (t = Math.ceil(t)), (t <= 0 || NaN === t) && (t = 1);
                                    var r = t.toString();
                                    return r.match(/^\d+$/) && (r += ".0"), r;
                                }
                            }, {
                                key: "processImageTags",
                                value: function(e, t) {
                                    if (isEmpty(e)) return this;
                                    t = defaults({}, t || {}, this.config());
                                    var r = e.filter((function(e) {
                                        return /^img$/i.test(e.tagName);
                                    })).map((function(e) {
                                        var r = l()({
                                            width: e.getAttribute("width"),
                                            height: e.getAttribute("height"),
                                            src: e.getAttribute("src")
                                        }, t), n = r.source || r.src;
                                        delete r.source, delete r.src;
                                        var o = new Se(r).toHtmlAttributes();
                                        return lodash_setData(e, "src-cache", url_url(n, r)), e.setAttribute("width", o.width), 
                                        e.setAttribute("height", o.height), e;
                                    }));
                                    return this.cloudinary_update(r, t), this;
                                }
                            }, {
                                key: "cloudinary_update",
                                value: function(e, t) {
                                    var r, n, o, i, a = this;
                                    if (null === e) return this;
                                    null == t && (t = {});
                                    var u, c = null != t.responsive ? t.responsive : this.config("responsive");
                                    e = function(e) {
                                        return j()(e) ? e : "NodeList" === e.constructor.name ? normalizeToArray_toConsumableArray(e) : S()(e) ? Array.prototype.slice.call(document.querySelectorAll(e), 0) : [ e ];
                                    }(e), u = this.responsiveConfig && null != this.responsiveConfig.responsive_class ? this.responsiveConfig.responsive_class : null != t.responsive_class ? t.responsive_class : this.config("responsive_class");
                                    var s = null != t.round_dpr ? t.round_dpr : this.config("round_dpr");
                                    return e.forEach((function(l) {
                                        if (/img/i.test(l.tagName)) {
                                            var f = !0;
                                            if (c && lodash_addClass(l, u), !isEmpty(n = lodash_getData(l, "src-cache") || lodash_getData(l, "src"))) {
                                                n = Ye.call(a, n, s), Ae.isResponsive(l, u) && (0 !== (r = Ge(l)) ? (/w_auto:breakpoints/.test(n) ? (i = Ke(r, l)) ? n = n.replace(/w_auto:breakpoints([_0-9]*)(:[0-9]+)?/, "w_auto:breakpoints$1:".concat(i)) : f = !1 : (o = /w_auto(:(\d+))?/.exec(n)) && (i = He.call(a, l, r, o[2], t), 
                                                (i = Ke(i, l)) ? n = n.replace(/w_auto[^,\/]*/g, "w_".concat(i)) : f = !1), lodash_removeAttribute(l, "width"), 
                                                t.responsive_preserve_height || lodash_removeAttribute(l, "height")) : f = !1);
                                                var p = "lazy" === t.loading && !a.isNativeLazyLoadSupported() && a.isLazyLoadSupported() && !e[0].getAttribute("src");
                                                (f || p) && a.setAttributeIfExists(e[0], "width", "data-width"), f && !p && lodash_setAttribute(l, "src", n);
                                            }
                                        }
                                    })), this;
                                }
                            }, {
                                key: "setAttributeIfExists",
                                value: function(e, t, r) {
                                    var n = e.getAttribute(r);
                                    null != n && lodash_setAttribute(e, t, n);
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
                                value: function(e) {
                                    return Se.new(this.config()).fromOptions(e).setParent(this);
                                }
                            }, {
                                key: "injectTransparentVideoElement",
                                value: function(e, t) {
                                    var r = this, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return new Promise((function(o, i) {
                                        e || i({
                                            status: "error",
                                            message: "Expecting htmlElContainer to be HTMLElement"
                                        }), transparentVideo_enforceOptionsForTransparentVideo(n);
                                        var a = r.video_url(t, n);
                                        transparentVideo_checkSupportForTransparency().then((function(u) {
                                            var c;
                                            u ? (c = transparentVideo_mountCloudinaryVideoTag(e, r, t, n), o(e)) : c = transparentVideo_mountSeeThruCanvasTag(e, a, n), 
                                            c.then((function() {
                                                o(e);
                                            })).catch((function(e) {
                                                var t = e.status, r = e.message;
                                                i({
                                                    status: t,
                                                    message: r
                                                });
                                            }));
                                        })).catch((function(e) {
                                            var t = e.status, r = e.message;
                                            i({
                                                status: t,
                                                message: r
                                            });
                                        }));
                                    }));
                                }
                            } ], r = [ {
                                key: "new",
                                value: function(e) {
                                    return new this(e);
                                }
                            } ], t && cloudinary_defineProperties(e.prototype, t), r && cloudinary_defineProperties(e, r), 
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), Cloudinary;
                        }();
                        l()(Qe, n);
                        var Xe = Qe;
                        t.default = {
                            ClientHintsMetaTag: qe,
                            Cloudinary: Xe,
                            Condition: fe,
                            Configuration: de,
                            crc32: src_crc32,
                            Expression: le,
                            FetchLayer: me,
                            HtmlTag: Ae,
                            ImageTag: De,
                            Layer: he,
                            PictureTag: Le,
                            SubtitlesLayer: _e,
                            TextLayer: ve,
                            Transformation: Se,
                            utf8_encode: src_utf8_encode,
                            Util: o,
                            VideoTag: Ve
                        };
                    },
                    "lodash/assign": function(t, r) {
                        t.exports = e;
                    },
                    "lodash/cloneDeep": function(e, r) {
                        e.exports = t;
                    },
                    "lodash/compact": function(e, t) {
                        e.exports = r;
                    },
                    "lodash/difference": function(e, t) {
                        e.exports = n;
                    },
                    "lodash/functions": function(e, t) {
                        e.exports = o;
                    },
                    "lodash/identity": function(e, t) {
                        e.exports = i;
                    },
                    "lodash/includes": function(e, t) {
                        e.exports = a;
                    },
                    "lodash/isArray": function(e, t) {
                        e.exports = u;
                    },
                    "lodash/isElement": function(e, t) {
                        e.exports = c;
                    },
                    "lodash/isFunction": function(e, t) {
                        e.exports = s;
                    },
                    "lodash/isPlainObject": function(e, t) {
                        e.exports = l;
                    },
                    "lodash/isString": function(e, t) {
                        e.exports = f;
                    },
                    "lodash/merge": function(e, t) {
                        e.exports = p;
                    },
                    "lodash/trim": function(e, t) {
                        e.exports = y;
                    }
                });
            }, e.exports = n(r(6782), r(9381), r(3338), r(484), r(3112), r(5362), r(6901), r(7236), r(6474), r(3839), r(9636), r(4461), r(6349), r(4771));
        },
        5549: (e, t, r) => {
            var n = r(4457)(r(441), "DataView");
            e.exports = n;
        },
        4613: (e, t, r) => {
            var n = r(8145), o = r(9096), i = r(5239), a = r(8228), u = r(5920);
            function Hash(e) {
                var t = -1, r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                    var n = e[t];
                    this.set(n[0], n[1]);
                }
            }
            Hash.prototype.clear = n, Hash.prototype.delete = o, Hash.prototype.get = i, Hash.prototype.has = a, 
            Hash.prototype.set = u, e.exports = Hash;
        },
        131: (e, t, r) => {
            var n = r(7168), o = r(6582), i = r(3867), a = r(9557), u = r(2726);
            function ListCache(e) {
                var t = -1, r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                    var n = e[t];
                    this.set(n[0], n[1]);
                }
            }
            ListCache.prototype.clear = n, ListCache.prototype.delete = o, ListCache.prototype.get = i, 
            ListCache.prototype.has = a, ListCache.prototype.set = u, e.exports = ListCache;
        },
        4438: (e, t, r) => {
            var n = r(4457)(r(441), "Map");
            e.exports = n;
        },
        278: (e, t, r) => {
            var n = r(7076), o = r(2530), i = r(4858), a = r(6265), u = r(9909);
            function MapCache(e) {
                var t = -1, r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                    var n = e[t];
                    this.set(n[0], n[1]);
                }
            }
            MapCache.prototype.clear = n, MapCache.prototype.delete = o, MapCache.prototype.get = i, 
            MapCache.prototype.has = a, MapCache.prototype.set = u, e.exports = MapCache;
        },
        385: (e, t, r) => {
            var n = r(4457)(r(441), "Promise");
            e.exports = n;
        },
        9902: (e, t, r) => {
            var n = r(4457)(r(441), "Set");
            e.exports = n;
        },
        1124: (e, t, r) => {
            var n = r(278), o = r(6718), i = r(6996);
            function SetCache(e) {
                var t = -1, r = null == e ? 0 : e.length;
                for (this.__data__ = new n; ++t < r; ) this.add(e[t]);
            }
            SetCache.prototype.add = SetCache.prototype.push = o, SetCache.prototype.has = i, 
            e.exports = SetCache;
        },
        4281: (e, t, r) => {
            var n = r(131), o = r(560), i = r(8282), a = r(6638), u = r(4270), c = r(3229);
            function Stack(e) {
                var t = this.__data__ = new n(e);
                this.size = t.size;
            }
            Stack.prototype.clear = o, Stack.prototype.delete = i, Stack.prototype.get = a, 
            Stack.prototype.has = u, Stack.prototype.set = c, e.exports = Stack;
        },
        4690: (e, t, r) => {
            var n = r(441).Symbol;
            e.exports = n;
        },
        5982: (e, t, r) => {
            var n = r(441).Uint8Array;
            e.exports = n;
        },
        8965: (e, t, r) => {
            var n = r(4457)(r(441), "WeakMap");
            e.exports = n;
        },
        5198: e => {
            e.exports = function(e, t, r) {
                switch (r.length) {
                  case 0:
                    return e.call(t);

                  case 1:
                    return e.call(t, r[0]);

                  case 2:
                    return e.call(t, r[0], r[1]);

                  case 3:
                    return e.call(t, r[0], r[1], r[2]);
                }
                return e.apply(t, r);
            };
        },
        6758: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e); ) ;
                return e;
            };
        },
        9037: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, o = 0, i = []; ++r < n; ) {
                    var a = e[r];
                    t(a, r, e) && (i[o++] = a);
                }
                return i;
            };
        },
        8058: (e, t, r) => {
            var n = r(7650);
            e.exports = function(e, t) {
                return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1;
            };
        },
        7431: e => {
            e.exports = function(e, t, r) {
                for (var n = -1, o = null == e ? 0 : e.length; ++n < o; ) if (r(t, e[n])) return !0;
                return !1;
            };
        },
        6222: (e, t, r) => {
            var n = r(5092), o = r(6981), i = r(7236), a = r(8752), u = r(4363), c = r(4812), s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var r = i(e), l = !r && o(e), f = !r && !l && a(e), p = !r && !l && !f && c(e), y = r || l || f || p, d = y ? n(e.length, String) : [], h = d.length;
                for (var v in e) !t && !s.call(e, v) || y && ("length" == v || f && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, h)) || d.push(v);
                return d;
            };
        },
        6460: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n; ) o[r] = t(e[r], r, e);
                return o;
            };
        },
        3848: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
                return e;
            };
        },
        4793: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
                return !1;
            };
        },
        804: e => {
            e.exports = function(e) {
                return e.split("");
            };
        },
        4373: (e, t, r) => {
            var n = r(999), o = r(6530);
            e.exports = function(e, t, r) {
                (void 0 !== r && !o(e[t], r) || void 0 === r && !(t in e)) && n(e, t, r);
            };
        },
        7596: (e, t, r) => {
            var n = r(999), o = r(6530), i = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, r) {
                var a = e[t];
                i.call(e, t) && o(a, r) && (void 0 !== r || t in e) || n(e, t, r);
            };
        },
        3833: (e, t, r) => {
            var n = r(6530);
            e.exports = function(e, t) {
                for (var r = e.length; r--; ) if (n(e[r][0], t)) return r;
                return -1;
            };
        },
        5615: (e, t, r) => {
            var n = r(6051), o = r(2635);
            e.exports = function(e, t) {
                return e && n(t, o(t), e);
            };
        },
        3238: (e, t, r) => {
            var n = r(6051), o = r(5850);
            e.exports = function(e, t) {
                return e && n(t, o(t), e);
            };
        },
        999: (e, t, r) => {
            var n = r(9346);
            e.exports = function(e, t, r) {
                "__proto__" == t && n ? n(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0
                }) : e[t] = r;
            };
        },
        2327: (e, t, r) => {
            var n = r(4281), o = r(6758), i = r(7596), a = r(5615), u = r(3238), c = r(8172), s = r(6438), l = r(3746), f = r(3989), p = r(6094), y = r(5559), d = r(6686), h = r(6019), v = r(7621), _ = r(3905), m = r(7236), b = r(8752), g = r(9656), O = r(5973), w = r(6925), P = r(2635), j = r(5850), k = "[object Arguments]", x = "[object Function]", E = "[object Object]", S = {};
            S[k] = S["[object Array]"] = S["[object ArrayBuffer]"] = S["[object DataView]"] = S["[object Boolean]"] = S["[object Date]"] = S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Map]"] = S["[object Number]"] = S[E] = S["[object RegExp]"] = S["[object Set]"] = S["[object String]"] = S["[object Symbol]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, 
            S["[object Error]"] = S[x] = S["[object WeakMap]"] = !1, e.exports = function baseClone(e, t, r, A, C, T) {
                var R, D = 1 & t, B = 2 & t, F = 4 & t;
                if (r && (R = C ? r(e, A, C, T) : r(e)), void 0 !== R) return R;
                if (!O(e)) return e;
                var I = m(e);
                if (I) {
                    if (R = h(e), !D) return s(e, R);
                } else {
                    var L = d(e), z = L == x || "[object GeneratorFunction]" == L;
                    if (b(e)) return c(e, D);
                    if (L == E || L == k || z && !C) {
                        if (R = B || z ? {} : _(e), !D) return B ? f(e, u(R, e)) : l(e, a(R, e));
                    } else {
                        if (!S[L]) return C ? e : {};
                        R = v(e, L, D);
                    }
                }
                T || (T = new n);
                var N = T.get(e);
                if (N) return N;
                T.set(e, R), w(e) ? e.forEach((function(n) {
                    R.add(baseClone(n, t, r, n, e, T));
                })) : g(e) && e.forEach((function(n, o) {
                    R.set(o, baseClone(n, t, r, o, e, T));
                }));
                var M = I ? void 0 : (F ? B ? y : p : B ? j : P)(e);
                return o(M || e, (function(n, o) {
                    M && (n = e[o = n]), i(R, o, baseClone(n, t, r, o, e, T));
                })), R;
            };
        },
        7372: (e, t, r) => {
            var n = r(5973), o = Object.create, i = function() {
                function object() {}
                return function(e) {
                    if (!n(e)) return {};
                    if (o) return o(e);
                    object.prototype = e;
                    var t = new object;
                    return object.prototype = void 0, t;
                };
            }();
            e.exports = i;
        },
        1096: (e, t, r) => {
            var n = r(1124), o = r(8058), i = r(7431), a = r(6460), u = r(6535), c = r(555);
            e.exports = function(e, t, r, s) {
                var l = -1, f = o, p = !0, y = e.length, d = [], h = t.length;
                if (!y) return d;
                r && (t = a(t, u(r))), s ? (f = i, p = !1) : t.length >= 200 && (f = c, p = !1, 
                t = new n(t));
                e: for (;++l < y; ) {
                    var v = e[l], _ = null == r ? v : r(v);
                    if (v = s || 0 !== v ? v : 0, p && _ == _) {
                        for (var m = h; m--; ) if (t[m] === _) continue e;
                        d.push(v);
                    } else f(t, _, s) || d.push(v);
                }
                return d;
            };
        },
        6671: (e, t, r) => {
            var n = r(5897), o = r(4741)(n);
            e.exports = o;
        },
        528: e => {
            e.exports = function(e, t, r, n) {
                for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; ) if (t(e[i], i, e)) return i;
                return -1;
            };
        },
        314: (e, t, r) => {
            var n = r(3848), o = r(1754);
            e.exports = function baseFlatten(e, t, r, i, a) {
                var u = -1, c = e.length;
                for (r || (r = o), a || (a = []); ++u < c; ) {
                    var s = e[u];
                    t > 0 && r(s) ? t > 1 ? baseFlatten(s, t - 1, r, i, a) : n(a, s) : i || (a[a.length] = s);
                }
                return a;
            };
        },
        641: (e, t, r) => {
            var n = r(2630)();
            e.exports = n;
        },
        5897: (e, t, r) => {
            var n = r(641), o = r(2635);
            e.exports = function(e, t) {
                return e && n(e, t, o);
            };
        },
        511: (e, t, r) => {
            var n = r(9037), o = r(3839);
            e.exports = function(e, t) {
                return n(t, (function(t) {
                    return o(e[t]);
                }));
            };
        },
        166: (e, t, r) => {
            var n = r(8422), o = r(8780);
            e.exports = function(e, t) {
                for (var r = 0, i = (t = n(t, e)).length; null != e && r < i; ) e = e[o(t[r++])];
                return r && r == i ? e : void 0;
            };
        },
        9329: (e, t, r) => {
            var n = r(3848), o = r(7236);
            e.exports = function(e, t, r) {
                var i = t(e);
                return o(e) ? i : n(i, r(e));
            };
        },
        4318: (e, t, r) => {
            var n = r(4690), o = r(7077), i = r(1954), a = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : i(e);
            };
        },
        7: e => {
            e.exports = function(e, t) {
                return null != e && t in Object(e);
            };
        },
        7650: (e, t, r) => {
            var n = r(528), o = r(5556), i = r(4256);
            e.exports = function(e, t, r) {
                return t == t ? i(e, t, r) : n(e, o, r);
            };
        },
        8520: (e, t, r) => {
            var n = r(4318), o = r(3387);
            e.exports = function(e) {
                return o(e) && "[object Arguments]" == n(e);
            };
        },
        1071: (e, t, r) => {
            var n = r(7229), o = r(3387);
            e.exports = function baseIsEqual(e, t, r, i, a) {
                return e === t || (null == e || null == t || !o(e) && !o(t) ? e != e && t != t : n(e, t, r, i, baseIsEqual, a));
            };
        },
        7229: (e, t, r) => {
            var n = r(4281), o = r(2503), i = r(6001), a = r(8784), u = r(6686), c = r(7236), s = r(8752), l = r(4812), f = "[object Arguments]", p = "[object Array]", y = "[object Object]", d = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, r, h, v, _) {
                var m = c(e), b = c(t), g = m ? p : u(e), O = b ? p : u(t), w = (g = g == f ? y : g) == y, P = (O = O == f ? y : O) == y, j = g == O;
                if (j && s(e)) {
                    if (!s(t)) return !1;
                    m = !0, w = !1;
                }
                if (j && !w) return _ || (_ = new n), m || l(e) ? o(e, t, r, h, v, _) : i(e, t, g, r, h, v, _);
                if (!(1 & r)) {
                    var k = w && d.call(e, "__wrapped__"), x = P && d.call(t, "__wrapped__");
                    if (k || x) {
                        var E = k ? e.value() : e, S = x ? t.value() : t;
                        return _ || (_ = new n), v(E, S, r, h, _);
                    }
                }
                return !!j && (_ || (_ = new n), a(e, t, r, h, v, _));
            };
        },
        4368: (e, t, r) => {
            var n = r(6686), o = r(3387);
            e.exports = function(e) {
                return o(e) && "[object Map]" == n(e);
            };
        },
        9157: (e, t, r) => {
            var n = r(4281), o = r(1071);
            e.exports = function(e, t, r, i) {
                var a = r.length, u = a, c = !i;
                if (null == e) return !u;
                for (e = Object(e); a--; ) {
                    var s = r[a];
                    if (c && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
                }
                for (;++a < u; ) {
                    var l = (s = r[a])[0], f = e[l], p = s[1];
                    if (c && s[2]) {
                        if (void 0 === f && !(l in e)) return !1;
                    } else {
                        var y = new n;
                        if (i) var d = i(f, p, l, e, t, y);
                        if (!(void 0 === d ? o(p, f, 3, i, y) : d)) return !1;
                    }
                }
                return !0;
            };
        },
        5556: e => {
            e.exports = function(e) {
                return e != e;
            };
        },
        2987: (e, t, r) => {
            var n = r(3839), o = r(7275), i = r(5973), a = r(6822), u = /^\[object .+?Constructor\]$/, c = Function.prototype, s = Object.prototype, l = c.toString, f = s.hasOwnProperty, p = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!i(e) || o(e)) && (n(e) ? p : u).test(a(e));
            };
        },
        4642: (e, t, r) => {
            var n = r(6686), o = r(3387);
            e.exports = function(e) {
                return o(e) && "[object Set]" == n(e);
            };
        },
        3749: (e, t, r) => {
            var n = r(4318), o = r(9216), i = r(3387), a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, 
            a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, 
            e.exports = function(e) {
                return i(e) && o(e.length) && !!a[n(e)];
            };
        },
        8904: (e, t, r) => {
            var n = r(8418), o = r(4555), i = r(5362), a = r(7236), u = r(1651);
            e.exports = function(e) {
                return "function" == typeof e ? e : null == e ? i : "object" == typeof e ? a(e) ? o(e[0], e[1]) : n(e) : u(e);
            };
        },
        8803: (e, t, r) => {
            var n = r(5003), o = r(1466), i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!n(e)) return o(e);
                var t = [];
                for (var r in Object(e)) i.call(e, r) && "constructor" != r && t.push(r);
                return t;
            };
        },
        2578: (e, t, r) => {
            var n = r(5973), o = r(5003), i = r(4904), a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!n(e)) return i(e);
                var t = o(e), r = [];
                for (var u in e) ("constructor" != u || !t && a.call(e, u)) && r.push(u);
                return r;
            };
        },
        2920: (e, t, r) => {
            var n = r(6671), o = r(1580);
            e.exports = function(e, t) {
                var r = -1, i = o(e) ? Array(e.length) : [];
                return n(e, (function(e, n, o) {
                    i[++r] = t(e, n, o);
                })), i;
            };
        },
        8418: (e, t, r) => {
            var n = r(9157), o = r(9182), i = r(7375);
            e.exports = function(e) {
                var t = o(e);
                return 1 == t.length && t[0][2] ? i(t[0][0], t[0][1]) : function(r) {
                    return r === e || n(r, e, t);
                };
            };
        },
        4555: (e, t, r) => {
            var n = r(1071), o = r(3795), i = r(3646), a = r(3266), u = r(1457), c = r(7375), s = r(8780);
            e.exports = function(e, t) {
                return a(e) && u(t) ? c(s(e), t) : function(r) {
                    var a = o(r, e);
                    return void 0 === a && a === t ? i(r, e) : n(t, a, 3);
                };
            };
        },
        3920: (e, t, r) => {
            var n = r(4281), o = r(4373), i = r(641), a = r(4810), u = r(5973), c = r(5850), s = r(5623);
            e.exports = function baseMerge(e, t, r, l, f) {
                e !== t && i(t, (function(i, c) {
                    if (f || (f = new n), u(i)) a(e, t, c, r, baseMerge, l, f); else {
                        var p = l ? l(s(e, c), i, c + "", e, t, f) : void 0;
                        void 0 === p && (p = i), o(e, c, p);
                    }
                }), c);
            };
        },
        4810: (e, t, r) => {
            var n = r(4373), o = r(8172), i = r(2215), a = r(6438), u = r(3905), c = r(6981), s = r(7236), l = r(9747), f = r(8752), p = r(3839), y = r(5973), d = r(9636), h = r(4812), v = r(5623), _ = r(7464);
            e.exports = function(e, t, r, m, b, g, O) {
                var w = v(e, r), P = v(t, r), j = O.get(P);
                if (j) n(e, r, j); else {
                    var k = g ? g(w, P, r + "", e, t, O) : void 0, x = void 0 === k;
                    if (x) {
                        var E = s(P), S = !E && f(P), A = !E && !S && h(P);
                        k = P, E || S || A ? s(w) ? k = w : l(w) ? k = a(w) : S ? (x = !1, k = o(P, !0)) : A ? (x = !1, 
                        k = i(P, !0)) : k = [] : d(P) || c(P) ? (k = w, c(w) ? k = _(w) : y(w) && !p(w) || (k = u(P))) : x = !1;
                    }
                    x && (O.set(P, k), b(k, P, m, g, O), O.delete(P)), n(e, r, k);
                }
            };
        },
        1712: e => {
            e.exports = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e];
                };
            };
        },
        4815: (e, t, r) => {
            var n = r(166);
            e.exports = function(e) {
                return function(t) {
                    return n(t, e);
                };
            };
        },
        4569: (e, t, r) => {
            var n = r(5362), o = r(4468), i = r(8756);
            e.exports = function(e, t) {
                return i(o(e, t, n), e + "");
            };
        },
        1676: (e, t, r) => {
            var n = r(8211), o = r(9346), i = r(5362), a = o ? function(e, t) {
                return o(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: n(t),
                    writable: !0
                });
            } : i;
            e.exports = a;
        },
        4293: e => {
            e.exports = function(e, t, r) {
                var n = -1, o = e.length;
                t < 0 && (t = -t > o ? 0 : o + t), (r = r > o ? o : r) < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, 
                t >>>= 0;
                for (var i = Array(o); ++n < o; ) i[n] = e[n + t];
                return i;
            };
        },
        5092: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                return n;
            };
        },
        454: (e, t, r) => {
            var n = r(4690), o = r(6460), i = r(7236), a = r(2945), u = n ? n.prototype : void 0, c = u ? u.toString : void 0;
            e.exports = function baseToString(e) {
                if ("string" == typeof e) return e;
                if (i(e)) return o(e, baseToString) + "";
                if (a(e)) return c ? c.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -Infinity ? "-0" : t;
            };
        },
        3349: (e, t, r) => {
            var n = r(5720), o = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, n(e) + 1).replace(o, "") : e;
            };
        },
        6535: e => {
            e.exports = function(e) {
                return function(t) {
                    return e(t);
                };
            };
        },
        4351: (e, t, r) => {
            var n = r(1124), o = r(8058), i = r(7431), a = r(555), u = r(8491), c = r(6350);
            e.exports = function(e, t, r) {
                var s = -1, l = o, f = e.length, p = !0, y = [], d = y;
                if (r) p = !1, l = i; else if (f >= 200) {
                    var h = t ? null : u(e);
                    if (h) return c(h);
                    p = !1, l = a, d = new n;
                } else d = t ? [] : y;
                e: for (;++s < f; ) {
                    var v = e[s], _ = t ? t(v) : v;
                    if (v = r || 0 !== v ? v : 0, p && _ == _) {
                        for (var m = d.length; m--; ) if (d[m] === _) continue e;
                        t && d.push(_), y.push(v);
                    } else l(d, _, r) || (d !== y && d.push(_), y.push(v));
                }
                return y;
            };
        },
        925: (e, t, r) => {
            var n = r(6460);
            e.exports = function(e, t) {
                return n(t, (function(t) {
                    return e[t];
                }));
            };
        },
        555: e => {
            e.exports = function(e, t) {
                return e.has(t);
            };
        },
        8422: (e, t, r) => {
            var n = r(7236), o = r(3266), i = r(3879), a = r(1119);
            e.exports = function(e, t) {
                return n(e) ? e : o(e, t) ? [ e ] : i(a(e));
            };
        },
        7241: (e, t, r) => {
            var n = r(4293);
            e.exports = function(e, t, r) {
                var o = e.length;
                return r = void 0 === r ? o : r, !t && r >= o ? e : n(e, t, r);
            };
        },
        1800: (e, t, r) => {
            var n = r(7650);
            e.exports = function(e, t) {
                for (var r = e.length; r-- && n(t, e[r], 0) > -1; ) ;
                return r;
            };
        },
        4304: (e, t, r) => {
            var n = r(7650);
            e.exports = function(e, t) {
                for (var r = -1, o = e.length; ++r < o && n(t, e[r], 0) > -1; ) ;
                return r;
            };
        },
        3632: (e, t, r) => {
            var n = r(5982);
            e.exports = function(e) {
                var t = new e.constructor(e.byteLength);
                return new n(t).set(new n(e)), t;
            };
        },
        8172: (e, t, r) => {
            e = r.nmd(e);
            var n = r(441), o = t && !t.nodeType && t, i = o && e && !e.nodeType && e, a = i && i.exports === o ? n.Buffer : void 0, u = a ? a.allocUnsafe : void 0;
            e.exports = function(e, t) {
                if (t) return e.slice();
                var r = e.length, n = u ? u(r) : new e.constructor(r);
                return e.copy(n), n;
            };
        },
        9841: (e, t, r) => {
            var n = r(3632);
            e.exports = function(e, t) {
                var r = t ? n(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.byteLength);
            };
        },
        2769: e => {
            var t = /\w*$/;
            e.exports = function(e) {
                var r = new e.constructor(e.source, t.exec(e));
                return r.lastIndex = e.lastIndex, r;
            };
        },
        9130: (e, t, r) => {
            var n = r(4690), o = n ? n.prototype : void 0, i = o ? o.valueOf : void 0;
            e.exports = function(e) {
                return i ? Object(i.call(e)) : {};
            };
        },
        2215: (e, t, r) => {
            var n = r(3632);
            e.exports = function(e, t) {
                var r = t ? n(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.length);
            };
        },
        6438: e => {
            e.exports = function(e, t) {
                var r = -1, n = e.length;
                for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
                return t;
            };
        },
        6051: (e, t, r) => {
            var n = r(7596), o = r(999);
            e.exports = function(e, t, r, i) {
                var a = !r;
                r || (r = {});
                for (var u = -1, c = t.length; ++u < c; ) {
                    var s = t[u], l = i ? i(r[s], e[s], s, r, e) : void 0;
                    void 0 === l && (l = e[s]), a ? o(r, s, l) : n(r, s, l);
                }
                return r;
            };
        },
        3746: (e, t, r) => {
            var n = r(6051), o = r(5904);
            e.exports = function(e, t) {
                return n(e, o(e), t);
            };
        },
        3989: (e, t, r) => {
            var n = r(6051), o = r(2511);
            e.exports = function(e, t) {
                return n(e, o(e), t);
            };
        },
        8507: (e, t, r) => {
            var n = r(441)["__core-js_shared__"];
            e.exports = n;
        },
        2544: (e, t, r) => {
            var n = r(4569), o = r(3108);
            e.exports = function(e) {
                return n((function(t, r) {
                    var n = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, u = i > 2 ? r[2] : void 0;
                    for (a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(r[0], r[1], u) && (a = i < 3 ? void 0 : a, 
                    i = 1), t = Object(t); ++n < i; ) {
                        var c = r[n];
                        c && e(t, c, n, a);
                    }
                    return t;
                }));
            };
        },
        4741: (e, t, r) => {
            var n = r(1580);
            e.exports = function(e, t) {
                return function(r, o) {
                    if (null == r) return r;
                    if (!n(r)) return e(r, o);
                    for (var i = r.length, a = t ? i : -1, u = Object(r); (t ? a-- : ++a < i) && !1 !== o(u[a], a, u); ) ;
                    return r;
                };
            };
        },
        2630: e => {
            e.exports = function(e) {
                return function(t, r, n) {
                    for (var o = -1, i = Object(t), a = n(t), u = a.length; u--; ) {
                        var c = a[e ? u : ++o];
                        if (!1 === r(i[c], c, i)) break;
                    }
                    return t;
                };
            };
        },
        8491: (e, t, r) => {
            var n = r(9902), o = r(3581), i = r(6350), a = n && 1 / i(new n([ , -0 ]))[1] == 1 / 0 ? function(e) {
                return new n(e);
            } : o;
            e.exports = a;
        },
        9346: (e, t, r) => {
            var n = r(4457), o = function() {
                try {
                    var e = n(Object, "defineProperty");
                    return e({}, "", {}), e;
                } catch (e) {}
            }();
            e.exports = o;
        },
        2503: (e, t, r) => {
            var n = r(1124), o = r(4793), i = r(555);
            e.exports = function(e, t, r, a, u, c) {
                var s = 1 & r, l = e.length, f = t.length;
                if (l != f && !(s && f > l)) return !1;
                var p = c.get(e), y = c.get(t);
                if (p && y) return p == t && y == e;
                var d = -1, h = !0, v = 2 & r ? new n : void 0;
                for (c.set(e, t), c.set(t, e); ++d < l; ) {
                    var _ = e[d], m = t[d];
                    if (a) var b = s ? a(m, _, d, t, e, c) : a(_, m, d, e, t, c);
                    if (void 0 !== b) {
                        if (b) continue;
                        h = !1;
                        break;
                    }
                    if (v) {
                        if (!o(t, (function(e, t) {
                            if (!i(v, t) && (_ === e || u(_, e, r, a, c))) return v.push(t);
                        }))) {
                            h = !1;
                            break;
                        }
                    } else if (_ !== m && !u(_, m, r, a, c)) {
                        h = !1;
                        break;
                    }
                }
                return c.delete(e), c.delete(t), h;
            };
        },
        6001: (e, t, r) => {
            var n = r(4690), o = r(5982), i = r(6530), a = r(2503), u = r(2876), c = r(6350), s = n ? n.prototype : void 0, l = s ? s.valueOf : void 0;
            e.exports = function(e, t, r, n, s, f, p) {
                switch (r) {
                  case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;

                  case "[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !f(new o(e), new o(t)));

                  case "[object Boolean]":
                  case "[object Date]":
                  case "[object Number]":
                    return i(+e, +t);

                  case "[object Error]":
                    return e.name == t.name && e.message == t.message;

                  case "[object RegExp]":
                  case "[object String]":
                    return e == t + "";

                  case "[object Map]":
                    var y = u;

                  case "[object Set]":
                    var d = 1 & n;
                    if (y || (y = c), e.size != t.size && !d) return !1;
                    var h = p.get(e);
                    if (h) return h == t;
                    n |= 2, p.set(e, t);
                    var v = a(y(e), y(t), n, s, f, p);
                    return p.delete(e), v;

                  case "[object Symbol]":
                    if (l) return l.call(e) == l.call(t);
                }
                return !1;
            };
        },
        8784: (e, t, r) => {
            var n = r(6094), o = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, r, i, a, u) {
                var c = 1 & r, s = n(e), l = s.length;
                if (l != n(t).length && !c) return !1;
                for (var f = l; f--; ) {
                    var p = s[f];
                    if (!(c ? p in t : o.call(t, p))) return !1;
                }
                var y = u.get(e), d = u.get(t);
                if (y && d) return y == t && d == e;
                var h = !0;
                u.set(e, t), u.set(t, e);
                for (var v = c; ++f < l; ) {
                    var _ = e[p = s[f]], m = t[p];
                    if (i) var b = c ? i(m, _, p, t, e, u) : i(_, m, p, e, t, u);
                    if (!(void 0 === b ? _ === m || a(_, m, r, i, u) : b)) {
                        h = !1;
                        break;
                    }
                    v || (v = "constructor" == p);
                }
                if (h && !v) {
                    var g = e.constructor, O = t.constructor;
                    g == O || !("constructor" in e) || !("constructor" in t) || "function" == typeof g && g instanceof g && "function" == typeof O && O instanceof O || (h = !1);
                }
                return u.delete(e), u.delete(t), h;
            };
        },
        4414: (e, t, r) => {
            var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
            e.exports = n;
        },
        6094: (e, t, r) => {
            var n = r(9329), o = r(5904), i = r(2635);
            e.exports = function(e) {
                return n(e, i, o);
            };
        },
        5559: (e, t, r) => {
            var n = r(9329), o = r(2511), i = r(5850);
            e.exports = function(e) {
                return n(e, i, o);
            };
        },
        2907: (e, t, r) => {
            var n = r(7620);
            e.exports = function(e, t) {
                var r = e.__data__;
                return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
            };
        },
        9182: (e, t, r) => {
            var n = r(1457), o = r(2635);
            e.exports = function(e) {
                for (var t = o(e), r = t.length; r--; ) {
                    var i = t[r], a = e[i];
                    t[r] = [ i, a, n(a) ];
                }
                return t;
            };
        },
        4457: (e, t, r) => {
            var n = r(2987), o = r(9741);
            e.exports = function(e, t) {
                var r = o(e, t);
                return n(r) ? r : void 0;
            };
        },
        1407: (e, t, r) => {
            var n = r(3717)(Object.getPrototypeOf, Object);
            e.exports = n;
        },
        7077: (e, t, r) => {
            var n = r(4690), o = Object.prototype, i = o.hasOwnProperty, a = o.toString, u = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                var t = i.call(e, u), r = e[u];
                try {
                    e[u] = void 0;
                    var n = !0;
                } catch (e) {}
                var o = a.call(e);
                return n && (t ? e[u] = r : delete e[u]), o;
            };
        },
        5904: (e, t, r) => {
            var n = r(9037), o = r(7471), i = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols, u = a ? function(e) {
                return null == e ? [] : (e = Object(e), n(a(e), (function(t) {
                    return i.call(e, t);
                })));
            } : o;
            e.exports = u;
        },
        2511: (e, t, r) => {
            var n = r(3848), o = r(1407), i = r(5904), a = r(7471), u = Object.getOwnPropertySymbols ? function(e) {
                for (var t = []; e; ) n(t, i(e)), e = o(e);
                return t;
            } : a;
            e.exports = u;
        },
        6686: (e, t, r) => {
            var n = r(5549), o = r(4438), i = r(385), a = r(9902), u = r(8965), c = r(4318), s = r(6822), l = "[object Map]", f = "[object Promise]", p = "[object Set]", y = "[object WeakMap]", d = "[object DataView]", h = s(n), v = s(o), _ = s(i), m = s(a), b = s(u), g = c;
            (n && g(new n(new ArrayBuffer(1))) != d || o && g(new o) != l || i && g(i.resolve()) != f || a && g(new a) != p || u && g(new u) != y) && (g = function(e) {
                var t = c(e), r = "[object Object]" == t ? e.constructor : void 0, n = r ? s(r) : "";
                if (n) switch (n) {
                  case h:
                    return d;

                  case v:
                    return l;

                  case _:
                    return f;

                  case m:
                    return p;

                  case b:
                    return y;
                }
                return t;
            }), e.exports = g;
        },
        9741: e => {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t];
            };
        },
        7383: (e, t, r) => {
            var n = r(8422), o = r(6981), i = r(7236), a = r(4363), u = r(9216), c = r(8780);
            e.exports = function(e, t, r) {
                for (var s = -1, l = (t = n(t, e)).length, f = !1; ++s < l; ) {
                    var p = c(t[s]);
                    if (!(f = null != e && r(e, p))) break;
                    e = e[p];
                }
                return f || ++s != l ? f : !!(l = null == e ? 0 : e.length) && u(l) && a(p, l) && (i(e) || o(e));
            };
        },
        4327: e => {
            var t = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            e.exports = function(e) {
                return t.test(e);
            };
        },
        8145: (e, t, r) => {
            var n = r(5148);
            e.exports = function() {
                this.__data__ = n ? n(null) : {}, this.size = 0;
            };
        },
        9096: e => {
            e.exports = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t;
            };
        },
        5239: (e, t, r) => {
            var n = r(5148), o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                if (n) {
                    var r = t[e];
                    return "__lodash_hash_undefined__" === r ? void 0 : r;
                }
                return o.call(t, e) ? t[e] : void 0;
            };
        },
        8228: (e, t, r) => {
            var n = r(5148), o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                return n ? void 0 !== t[e] : o.call(t, e);
            };
        },
        5920: (e, t, r) => {
            var n = r(5148);
            e.exports = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, 
                this;
            };
        },
        6019: e => {
            var t = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var r = e.length, n = new e.constructor(r);
                return r && "string" == typeof e[0] && t.call(e, "index") && (n.index = e.index, 
                n.input = e.input), n;
            };
        },
        7621: (e, t, r) => {
            var n = r(3632), o = r(9841), i = r(2769), a = r(9130), u = r(2215);
            e.exports = function(e, t, r) {
                var c = e.constructor;
                switch (t) {
                  case "[object ArrayBuffer]":
                    return n(e);

                  case "[object Boolean]":
                  case "[object Date]":
                    return new c(+e);

                  case "[object DataView]":
                    return o(e, r);

                  case "[object Float32Array]":
                  case "[object Float64Array]":
                  case "[object Int8Array]":
                  case "[object Int16Array]":
                  case "[object Int32Array]":
                  case "[object Uint8Array]":
                  case "[object Uint8ClampedArray]":
                  case "[object Uint16Array]":
                  case "[object Uint32Array]":
                    return u(e, r);

                  case "[object Map]":
                  case "[object Set]":
                    return new c;

                  case "[object Number]":
                  case "[object String]":
                    return new c(e);

                  case "[object RegExp]":
                    return i(e);

                  case "[object Symbol]":
                    return a(e);
                }
            };
        },
        3905: (e, t, r) => {
            var n = r(7372), o = r(1407), i = r(5003);
            e.exports = function(e) {
                return "function" != typeof e.constructor || i(e) ? {} : n(o(e));
            };
        },
        1754: (e, t, r) => {
            var n = r(4690), o = r(6981), i = r(7236), a = n ? n.isConcatSpreadable : void 0;
            e.exports = function(e) {
                return i(e) || o(e) || !!(a && e && e[a]);
            };
        },
        4363: e => {
            var t = /^(?:0|[1-9]\d*)$/;
            e.exports = function(e, r) {
                var n = typeof e;
                return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && t.test(e)) && e > -1 && e % 1 == 0 && e < r;
            };
        },
        3108: (e, t, r) => {
            var n = r(6530), o = r(1580), i = r(4363), a = r(5973);
            e.exports = function(e, t, r) {
                if (!a(r)) return !1;
                var u = typeof t;
                return !!("number" == u ? o(r) && i(t, r.length) : "string" == u && t in r) && n(r[t], e);
            };
        },
        3266: (e, t, r) => {
            var n = r(7236), o = r(2945), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
            e.exports = function(e, t) {
                if (n(e)) return !1;
                var r = typeof e;
                return !("number" != r && "symbol" != r && "boolean" != r && null != e && !o(e)) || (a.test(e) || !i.test(e) || null != t && e in Object(t));
            };
        },
        7620: e => {
            e.exports = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
            };
        },
        7275: (e, t, r) => {
            var n, o = r(8507), i = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
            e.exports = function(e) {
                return !!i && i in e;
            };
        },
        5003: e => {
            var t = Object.prototype;
            e.exports = function(e) {
                var r = e && e.constructor;
                return e === ("function" == typeof r && r.prototype || t);
            };
        },
        1457: (e, t, r) => {
            var n = r(5973);
            e.exports = function(e) {
                return e == e && !n(e);
            };
        },
        7168: e => {
            e.exports = function() {
                this.__data__ = [], this.size = 0;
            };
        },
        6582: (e, t, r) => {
            var n = r(3833), o = Array.prototype.splice;
            e.exports = function(e) {
                var t = this.__data__, r = n(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, 
                !0);
            };
        },
        3867: (e, t, r) => {
            var n = r(3833);
            e.exports = function(e) {
                var t = this.__data__, r = n(t, e);
                return r < 0 ? void 0 : t[r][1];
            };
        },
        9557: (e, t, r) => {
            var n = r(3833);
            e.exports = function(e) {
                return n(this.__data__, e) > -1;
            };
        },
        2726: (e, t, r) => {
            var n = r(3833);
            e.exports = function(e, t) {
                var r = this.__data__, o = n(r, e);
                return o < 0 ? (++this.size, r.push([ e, t ])) : r[o][1] = t, this;
            };
        },
        7076: (e, t, r) => {
            var n = r(4613), o = r(131), i = r(4438);
            e.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new n,
                    map: new (i || o),
                    string: new n
                };
            };
        },
        2530: (e, t, r) => {
            var n = r(2907);
            e.exports = function(e) {
                var t = n(this, e).delete(e);
                return this.size -= t ? 1 : 0, t;
            };
        },
        4858: (e, t, r) => {
            var n = r(2907);
            e.exports = function(e) {
                return n(this, e).get(e);
            };
        },
        6265: (e, t, r) => {
            var n = r(2907);
            e.exports = function(e) {
                return n(this, e).has(e);
            };
        },
        9909: (e, t, r) => {
            var n = r(2907);
            e.exports = function(e, t) {
                var r = n(this, e), o = r.size;
                return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
            };
        },
        2876: e => {
            e.exports = function(e) {
                var t = -1, r = Array(e.size);
                return e.forEach((function(e, n) {
                    r[++t] = [ n, e ];
                })), r;
            };
        },
        7375: e => {
            e.exports = function(e, t) {
                return function(r) {
                    return null != r && (r[e] === t && (void 0 !== t || e in Object(r)));
                };
            };
        },
        7085: (e, t, r) => {
            var n = r(427);
            e.exports = function(e) {
                var t = n(e, (function(e) {
                    return 500 === r.size && r.clear(), e;
                })), r = t.cache;
                return t;
            };
        },
        5148: (e, t, r) => {
            var n = r(4457)(Object, "create");
            e.exports = n;
        },
        1466: (e, t, r) => {
            var n = r(3717)(Object.keys, Object);
            e.exports = n;
        },
        4904: e => {
            e.exports = function(e) {
                var t = [];
                if (null != e) for (var r in Object(e)) t.push(r);
                return t;
            };
        },
        1782: (e, t, r) => {
            e = r.nmd(e);
            var n = r(4414), o = t && !t.nodeType && t, i = o && e && !e.nodeType && e, a = i && i.exports === o && n.process, u = function() {
                try {
                    var e = i && i.require && i.require("util").types;
                    return e || a && a.binding && a.binding("util");
                } catch (e) {}
            }();
            e.exports = u;
        },
        1954: e => {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e);
            };
        },
        3717: e => {
            e.exports = function(e, t) {
                return function(r) {
                    return e(t(r));
                };
            };
        },
        4468: (e, t, r) => {
            var n = r(5198), o = Math.max;
            e.exports = function(e, t, r) {
                return t = o(void 0 === t ? e.length - 1 : t, 0), function() {
                    for (var i = arguments, a = -1, u = o(i.length - t, 0), c = Array(u); ++a < u; ) c[a] = i[t + a];
                    a = -1;
                    for (var s = Array(t + 1); ++a < t; ) s[a] = i[a];
                    return s[t] = r(c), n(e, this, s);
                };
            };
        },
        441: (e, t, r) => {
            var n = r(4414), o = "object" == typeof self && self && self.Object === Object && self, i = n || o || Function("return this")();
            e.exports = i;
        },
        5623: e => {
            e.exports = function(e, t) {
                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
            };
        },
        6718: e => {
            e.exports = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this;
            };
        },
        6996: e => {
            e.exports = function(e) {
                return this.__data__.has(e);
            };
        },
        6350: e => {
            e.exports = function(e) {
                var t = -1, r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = e;
                })), r;
            };
        },
        8756: (e, t, r) => {
            var n = r(1676), o = r(9116)(n);
            e.exports = o;
        },
        9116: e => {
            var t = Date.now;
            e.exports = function(e) {
                var r = 0, n = 0;
                return function() {
                    var o = t(), i = 16 - (o - n);
                    if (n = o, i > 0) {
                        if (++r >= 800) return arguments[0];
                    } else r = 0;
                    return e.apply(void 0, arguments);
                };
            };
        },
        560: (e, t, r) => {
            var n = r(131);
            e.exports = function() {
                this.__data__ = new n, this.size = 0;
            };
        },
        8282: e => {
            e.exports = function(e) {
                var t = this.__data__, r = t.delete(e);
                return this.size = t.size, r;
            };
        },
        6638: e => {
            e.exports = function(e) {
                return this.__data__.get(e);
            };
        },
        4270: e => {
            e.exports = function(e) {
                return this.__data__.has(e);
            };
        },
        3229: (e, t, r) => {
            var n = r(131), o = r(4438), i = r(278);
            e.exports = function(e, t) {
                var r = this.__data__;
                if (r instanceof n) {
                    var a = r.__data__;
                    if (!o || a.length < 199) return a.push([ e, t ]), this.size = ++r.size, this;
                    r = this.__data__ = new i(a);
                }
                return r.set(e, t), this.size = r.size, this;
            };
        },
        4256: e => {
            e.exports = function(e, t, r) {
                for (var n = r - 1, o = e.length; ++n < o; ) if (e[n] === t) return n;
                return -1;
            };
        },
        6229: (e, t, r) => {
            var n = r(804), o = r(4327), i = r(4501);
            e.exports = function(e) {
                return o(e) ? i(e) : n(e);
            };
        },
        3879: (e, t, r) => {
            var n = r(7085), o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i = /\\(\\)?/g, a = n((function(e) {
                var t = [];
                return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, (function(e, r, n, o) {
                    t.push(n ? o.replace(i, "$1") : r || e);
                })), t;
            }));
            e.exports = a;
        },
        8780: (e, t, r) => {
            var n = r(2945);
            e.exports = function(e) {
                if ("string" == typeof e || n(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -Infinity ? "-0" : t;
            };
        },
        6822: e => {
            var t = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return t.call(e);
                    } catch (e) {}
                    try {
                        return e + "";
                    } catch (e) {}
                }
                return "";
            };
        },
        5720: e => {
            var t = /\s/;
            e.exports = function(e) {
                for (var r = e.length; r-- && t.test(e.charAt(r)); ) ;
                return r;
            };
        },
        4501: e => {
            var t = "\\ud800-\\udfff", r = "[" + t + "]", n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", o = "\\ud83c[\\udffb-\\udfff]", i = "[^" + t + "]", a = "(?:\\ud83c[\\udde6-\\uddff]){2}", u = "[\\ud800-\\udbff][\\udc00-\\udfff]", c = "(?:" + n + "|" + o + ")" + "?", s = "[\\ufe0e\\ufe0f]?", l = s + c + ("(?:\\u200d(?:" + [ i, a, u ].join("|") + ")" + s + c + ")*"), f = "(?:" + [ i + n + "?", n, a, u, r ].join("|") + ")", p = RegExp(o + "(?=" + o + ")|" + f + l, "g");
            e.exports = function(e) {
                return e.match(p) || [];
            };
        },
        6782: (e, t, r) => {
            var n = r(7596), o = r(6051), i = r(2544), a = r(1580), u = r(5003), c = r(2635), s = Object.prototype.hasOwnProperty, l = i((function(e, t) {
                if (u(t) || a(t)) o(t, c(t), e); else for (var r in t) s.call(t, r) && n(e, r, t[r]);
            }));
            e.exports = l;
        },
        9381: (e, t, r) => {
            var n = r(2327);
            e.exports = function(e) {
                return n(e, 5);
            };
        },
        3338: e => {
            e.exports = function(e) {
                for (var t = -1, r = null == e ? 0 : e.length, n = 0, o = []; ++t < r; ) {
                    var i = e[t];
                    i && (o[n++] = i);
                }
                return o;
            };
        },
        403: (e, t, r) => {
            var n = r(3848), o = r(314), i = r(6438), a = r(7236);
            e.exports = function() {
                var e = arguments.length;
                if (!e) return [];
                for (var t = Array(e - 1), r = arguments[0], u = e; u--; ) t[u - 1] = arguments[u];
                return n(a(r) ? i(r) : [ r ], o(t, 1));
            };
        },
        8211: e => {
            e.exports = function(e) {
                return function() {
                    return e;
                };
            };
        },
        484: (e, t, r) => {
            var n = r(1096), o = r(314), i = r(4569), a = r(9747), u = i((function(e, t) {
                return a(e) ? n(e, o(t, 1, a, !0)) : [];
            }));
            e.exports = u;
        },
        624: (e, t, r) => {
            var n = r(1096), o = r(314), i = r(8904), a = r(4569), u = r(9747), c = r(2972), s = a((function(e, t) {
                var r = c(t);
                return u(r) && (r = void 0), u(e) ? n(e, o(t, 1, u, !0), i(r, 2)) : [];
            }));
            e.exports = s;
        },
        6530: e => {
            e.exports = function(e, t) {
                return e === t || e != e && t != t;
            };
        },
        9937: (e, t, r) => {
            e.exports = r(3230);
        },
        3112: (e, t, r) => {
            var n = r(511), o = r(2635);
            e.exports = function(e) {
                return null == e ? [] : n(e, o(e));
            };
        },
        3795: (e, t, r) => {
            var n = r(166);
            e.exports = function(e, t, r) {
                var o = null == e ? void 0 : n(e, t);
                return void 0 === o ? r : o;
            };
        },
        3646: (e, t, r) => {
            var n = r(7), o = r(7383);
            e.exports = function(e, t) {
                return null != e && o(e, t, n);
            };
        },
        3230: e => {
            e.exports = function(e) {
                return e && e.length ? e[0] : void 0;
            };
        },
        5362: e => {
            e.exports = function(e) {
                return e;
            };
        },
        6901: (e, t, r) => {
            var n = r(7650), o = r(1580), i = r(4461), a = r(5225), u = r(567), c = Math.max;
            e.exports = function(e, t, r, s) {
                e = o(e) ? e : u(e), r = r && !s ? a(r) : 0;
                var l = e.length;
                return r < 0 && (r = c(l + r, 0)), i(e) ? r <= l && e.indexOf(t, r) > -1 : !!l && n(e, t, r) > -1;
            };
        },
        6981: (e, t, r) => {
            var n = r(8520), o = r(3387), i = Object.prototype, a = i.hasOwnProperty, u = i.propertyIsEnumerable, c = n(function() {
                return arguments;
            }()) ? n : function(e) {
                return o(e) && a.call(e, "callee") && !u.call(e, "callee");
            };
            e.exports = c;
        },
        7236: e => {
            var t = Array.isArray;
            e.exports = t;
        },
        1580: (e, t, r) => {
            var n = r(3839), o = r(9216);
            e.exports = function(e) {
                return null != e && o(e.length) && !n(e);
            };
        },
        9747: (e, t, r) => {
            var n = r(1580), o = r(3387);
            e.exports = function(e) {
                return o(e) && n(e);
            };
        },
        8752: (e, t, r) => {
            e = r.nmd(e);
            var n = r(441), o = r(7149), i = t && !t.nodeType && t, a = i && e && !e.nodeType && e, u = a && a.exports === i ? n.Buffer : void 0, c = (u ? u.isBuffer : void 0) || o;
            e.exports = c;
        },
        6474: (e, t, r) => {
            var n = r(3387), o = r(9636);
            e.exports = function(e) {
                return n(e) && 1 === e.nodeType && !o(e);
            };
        },
        3839: (e, t, r) => {
            var n = r(4318), o = r(5973);
            e.exports = function(e) {
                if (!o(e)) return !1;
                var t = n(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
            };
        },
        9216: e => {
            e.exports = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
            };
        },
        9656: (e, t, r) => {
            var n = r(4368), o = r(6535), i = r(1782), a = i && i.isMap, u = a ? o(a) : n;
            e.exports = u;
        },
        5973: e => {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
            };
        },
        3387: e => {
            e.exports = function(e) {
                return null != e && "object" == typeof e;
            };
        },
        9636: (e, t, r) => {
            var n = r(4318), o = r(1407), i = r(3387), a = Function.prototype, u = Object.prototype, c = a.toString, s = u.hasOwnProperty, l = c.call(Object);
            e.exports = function(e) {
                if (!i(e) || "[object Object]" != n(e)) return !1;
                var t = o(e);
                if (null === t) return !0;
                var r = s.call(t, "constructor") && t.constructor;
                return "function" == typeof r && r instanceof r && c.call(r) == l;
            };
        },
        6925: (e, t, r) => {
            var n = r(4642), o = r(6535), i = r(1782), a = i && i.isSet, u = a ? o(a) : n;
            e.exports = u;
        },
        4461: (e, t, r) => {
            var n = r(4318), o = r(7236), i = r(3387);
            e.exports = function(e) {
                return "string" == typeof e || !o(e) && i(e) && "[object String]" == n(e);
            };
        },
        2945: (e, t, r) => {
            var n = r(4318), o = r(3387);
            e.exports = function(e) {
                return "symbol" == typeof e || o(e) && "[object Symbol]" == n(e);
            };
        },
        4812: (e, t, r) => {
            var n = r(3749), o = r(6535), i = r(1782), a = i && i.isTypedArray, u = a ? o(a) : n;
            e.exports = u;
        },
        2635: (e, t, r) => {
            var n = r(6222), o = r(8803), i = r(1580);
            e.exports = function(e) {
                return i(e) ? n(e) : o(e);
            };
        },
        5850: (e, t, r) => {
            var n = r(6222), o = r(2578), i = r(1580);
            e.exports = function(e) {
                return i(e) ? n(e, !0) : o(e);
            };
        },
        2972: e => {
            e.exports = function(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : void 0;
            };
        },
        7213: (e, t, r) => {
            var n = r(6460), o = r(8904), i = r(2920), a = r(7236);
            e.exports = function(e, t) {
                return (a(e) ? n : i)(e, o(t, 3));
            };
        },
        427: (e, t, r) => {
            var n = r(278);
            function memoize(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                var memoized = function() {
                    var r = arguments, n = t ? t.apply(this, r) : r[0], o = memoized.cache;
                    if (o.has(n)) return o.get(n);
                    var i = e.apply(this, r);
                    return memoized.cache = o.set(n, i) || o, i;
                };
                return memoized.cache = new (memoize.Cache || n), memoized;
            }
            memoize.Cache = n, e.exports = memoize;
        },
        6349: (e, t, r) => {
            var n = r(3920), o = r(2544)((function(e, t, r) {
                n(e, t, r);
            }));
            e.exports = o;
        },
        3581: e => {
            e.exports = function() {};
        },
        1651: (e, t, r) => {
            var n = r(1712), o = r(4815), i = r(3266), a = r(8780);
            e.exports = function(e) {
                return i(e) ? n(a(e)) : o(e);
            };
        },
        7471: e => {
            e.exports = function() {
                return [];
            };
        },
        7149: e => {
            e.exports = function() {
                return !1;
            };
        },
        992: (e, t, r) => {
            var n = r(8746), o = 1 / 0;
            e.exports = function(e) {
                return e ? (e = n(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0;
            };
        },
        5225: (e, t, r) => {
            var n = r(992);
            e.exports = function(e) {
                var t = n(e), r = t % 1;
                return t == t ? r ? t - r : t : 0;
            };
        },
        8746: (e, t, r) => {
            var n = r(3349), o = r(5973), i = r(2945), a = /^[-+]0x[0-9a-f]+$/i, u = /^0b[01]+$/i, c = /^0o[0-7]+$/i, s = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return NaN;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = n(e);
                var r = u.test(e);
                return r || c.test(e) ? s(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e;
            };
        },
        7464: (e, t, r) => {
            var n = r(6051), o = r(5850);
            e.exports = function(e) {
                return n(e, o(e));
            };
        },
        1119: (e, t, r) => {
            var n = r(454);
            e.exports = function(e) {
                return null == e ? "" : n(e);
            };
        },
        4771: (e, t, r) => {
            var n = r(454), o = r(3349), i = r(7241), a = r(1800), u = r(4304), c = r(6229), s = r(1119);
            e.exports = function(e, t, r) {
                if ((e = s(e)) && (r || void 0 === t)) return o(e);
                if (!e || !(t = n(t))) return e;
                var l = c(e), f = c(t), p = u(l, f), y = a(l, f) + 1;
                return i(l, p, y).join("");
            };
        },
        1815: (e, t, r) => {
            var n = r(4351);
            e.exports = function(e) {
                return e && e.length ? n(e) : [];
            };
        },
        567: (e, t, r) => {
            var n = r(925), o = r(2635);
            e.exports = function(e) {
                return null == e ? [] : n(e, o(e));
            };
        }
    }, t = {};
    function __webpack_require__(r) {
        var n = t[r];
        if (void 0 !== n) return n.exports;
        var o = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, __webpack_require__), o.loaded = !0, o.exports;
    }
    __webpack_require__.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return __webpack_require__.d(t, {
            a: t
        }), t;
    }, __webpack_require__.d = (e, t) => {
        for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        });
    }, __webpack_require__.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    }(), __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), 
    __webpack_require__.nmd = e => (e.paths = [], e.children || (e.children = []), e), 
    (() => {
        "use strict";
        const e = jQuery;
        var t = __webpack_require__.n(e);
        const r = React;
        var n = __webpack_require__.n(r);
        const o = ReactDom;
        var i = __webpack_require__(403), a = __webpack_require__.n(i), u = __webpack_require__(624), c = __webpack_require__.n(u), s = __webpack_require__(7236), l = __webpack_require__.n(s), f = __webpack_require__(5973), p = __webpack_require__.n(f), y = __webpack_require__(9937), d = __webpack_require__.n(y), h = __webpack_require__(3795), v = __webpack_require__.n(h);
        const _ = PropTypes;
        var m = __webpack_require__.n(_), b = __webpack_require__(1815), g = __webpack_require__.n(b), O = __webpack_require__(7213), w = __webpack_require__.n(O);
        const P = classnames;
        var j = __webpack_require__.n(P), k = __webpack_require__(78), x = __webpack_require__.n(k);
        function url_url(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new (x().Cloudinary)({
                cloud_name: CLOUDINARY_CONFIG.cloud_name,
                secure: !0
            }).url(e, t);
        }
        function _typeof(e) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, _typeof(e);
        }
        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, (o = n.key, i = void 0, i = function(e, t) {
                    if ("object" !== _typeof(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== _typeof(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                }(o, "string"), "symbol" === _typeof(i) ? i : String(i)), n);
            }
            var o, i;
        }
        function _setPrototypeOf(e, t) {
            return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e;
            }, _setPrototypeOf(e, t);
        }
        function _createSuper(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }();
            return function() {
                var r, n = _getPrototypeOf(e);
                if (t) {
                    var o = _getPrototypeOf(this).constructor;
                    r = Reflect.construct(n, arguments, o);
                } else r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === _typeof(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return _assertThisInitialized(e);
                }(this, r);
            };
        }
        function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function _getPrototypeOf(e) {
            return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            }, _getPrototypeOf(e);
        }
        var E = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && _setPrototypeOf(e, t);
            }(Resource, e);
            var t, r, o, i = _createSuper(Resource);
            function Resource(e) {
                var t;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, Resource), t = i.call(this, e);
                var r = e.title, n = e.description, o = e.credit, a = e.gravity, u = e.foreground_colour, c = e.background_colour;
                return t.state = {
                    title: r,
                    description: n,
                    credit: o,
                    gravity: a,
                    foreground_colour: u,
                    background_colour: c
                }, t.updateTitle = t.updateTitle.bind(_assertThisInitialized(t)), t.updateDescription = t.updateDescription.bind(_assertThisInitialized(t)), 
                t.updateCredit = t.updateCredit.bind(_assertThisInitialized(t)), t.updateGravity = t.updateGravity.bind(_assertThisInitialized(t)), 
                t.updateFgColour = t.updateFgColour.bind(_assertThisInitialized(t)), t.updateBgColour = t.updateBgColour.bind(_assertThisInitialized(t)), 
                t.removeResource = t.removeResource.bind(_assertThisInitialized(t)), t.moveResourceUp = t.moveResourceUp.bind(_assertThisInitialized(t)), 
                t.moveResourceDown = t.moveResourceDown.bind(_assertThisInitialized(t)), t.url = t.url.bind(_assertThisInitialized(t)), 
                t.thumbnailUrl = t.thumbnailUrl.bind(_assertThisInitialized(t)), t.titleFieldLabel = t.titleFieldLabel.bind(_assertThisInitialized(t)), 
                t.titleFieldPlaceholder = t.titleFieldPlaceholder.bind(_assertThisInitialized(t)), 
                t.descriptionFieldLabel = t.descriptionFieldLabel.bind(_assertThisInitialized(t)), 
                t.descriptionFieldPlaceholder = t.descriptionFieldPlaceholder.bind(_assertThisInitialized(t)), 
                t.creditFieldLabel = t.creditFieldLabel.bind(_assertThisInitialized(t)), t.creditFieldPlaceholder = t.creditFieldPlaceholder.bind(_assertThisInitialized(t)), 
                t;
            }
            return t = Resource, (r = [ {
                key: "updateTitle",
                value: function(e) {
                    this.setState({
                        title: e.target.value
                    }), this.props.onChange(this.props.public_id, "title", e.target.value);
                }
            }, {
                key: "updateDescription",
                value: function(e) {
                    this.setState({
                        description: e.target.value
                    }), this.props.onChange(this.props.public_id, "description", e.target.value);
                }
            }, {
                key: "updateCredit",
                value: function(e) {
                    this.setState({
                        credit: e.target.value
                    }), this.props.onChange(this.props.public_id, "credit", e.target.value);
                }
            }, {
                key: "updateGravity",
                value: function(e) {
                    this.setState({
                        gravity: e.target.value
                    }), this.props.onChange(this.props.public_id, "gravity", e.target.value);
                }
            }, {
                key: "updateFgColour",
                value: function(e) {
                    this.setState({
                        foreground_colour: e.target.value || null
                    }), this.props.onChange(this.props.public_id, "foreground_colour", e.target.value || null);
                }
            }, {
                key: "updateBgColour",
                value: function(e) {
                    this.setState({
                        background_colour: e.target.value || null
                    }), this.props.onChange(this.props.public_id, "background_colour", e.target.value || null);
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
                    var e = this.props;
                    return url_url(e.public_id, {
                        resource_type: e.resource_type
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
                    var e = this.props.fields;
                    return e = e.split(","), g()(e);
                }
            }, {
                key: "renderOrder",
                value: function() {
                    var e = this.props, t = e.firstItem, r = e.lastItem;
                    return (!t || !r) && n().createElement("div", {
                        className: "chorus-field-order"
                    }, n().createElement("button", {
                        className: j()("btn", "btn-sm", "btn-block", "chorus-field-order__move", "chorus-field-order__move--up", t && "chorus-field-order__move--first"),
                        type: "button",
                        onClick: this.moveResourceUp,
                        disabled: t,
                        title: "Move Up"
                    }, n().createElement("ins", {
                        className: "font-icon-up-open"
                    }, " ")), n().createElement("button", {
                        className: j()("btn", "btn-sm", "btn-block", "chorus-field-order__move", "chorus-field-order__move--down", r && "chorus-field-order__move--last"),
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
                    var e = this, t = this.state, r = t.title, o = t.description, i = t.credit, a = t.gravity, u = t.foreground_colour, c = t.background_colour, s = this.props, l = s.actual_type, f = s.public_id, p = s.resource_type, y = s.top_colours, d = s.gravityOptions, h = this.thumbnailUrl();
                    return n().createElement("div", {
                        className: "cloudinary-field__item cloudinary-field__item--".concat(l)
                    }, this.renderOrder(), n().createElement("div", {
                        className: "cloudinary-field__media cloudinary-field__media--".concat(l)
                    }, n().createElement("div", {
                        className: "cloudinary-field__preview cloudinary-field__preview--".concat(l)
                    }, h && n().createElement("img", {
                        src: h
                    })), n().createElement("div", {
                        className: "cloudinary-field__actions"
                    }, n().createElement("button", {
                        type: "button",
                        className: "cloudinary-field__action cloudinary-field__action--remove",
                        title: "Remove",
                        onClick: this.removeResource
                    }, n().createElement("span", {
                        className: "cloudinary-field__sr-only"
                    }, "Remove")), n().createElement("a", {
                        className: "cloudinary-field__action cloudinary-field__action--link",
                        title: "View original",
                        href: this.url(),
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, n().createElement("span", {
                        className: "cloudinary-field__sr-only"
                    }, "View original")))), n().createElement("div", {
                        className: "cloudinary-field__meta"
                    }, this.fields().map((function(t, s) {
                        return "title" === t ? n().createElement("div", {
                            key: s,
                            className: "cloudinary-field__field"
                        }, n().createElement("label", {
                            htmlFor: "".concat(f, "_title"),
                            className: "cloudinary-field__label"
                        }, e.titleFieldLabel()), n().createElement("div", {
                            className: "cloudinary-field__input"
                        }, n().createElement("textarea", {
                            id: "".concat(f, "_title"),
                            className: "textarea",
                            rows: "2",
                            placeholder: e.titleFieldPlaceholder(),
                            value: r,
                            onChange: e.updateTitle
                        }))) : "description" === t ? n().createElement("div", {
                            key: s,
                            className: "cloudinary-field__field"
                        }, n().createElement("label", {
                            htmlFor: "".concat(f, "_description"),
                            className: "cloudinary-field__label"
                        }, e.descriptionFieldLabel()), n().createElement("div", {
                            className: "cloudinary-field__input"
                        }, n().createElement("textarea", {
                            id: "".concat(f, "_description"),
                            className: "textarea",
                            rows: "3",
                            placeholder: e.descriptionFieldPlaceholder(),
                            value: o,
                            onChange: e.updateDescription
                        }))) : "credit" === t ? n().createElement("div", {
                            key: s,
                            className: "cloudinary-field__field"
                        }, n().createElement("label", {
                            htmlFor: "".concat(f, "_credit"),
                            className: "cloudinary-field__label"
                        }, e.creditFieldLabel()), n().createElement("div", {
                            className: "cloudinary-field__input"
                        }, n().createElement("input", {
                            type: "text",
                            id: "".concat(f, "_credit"),
                            className: "text",
                            placeholder: e.creditFieldPlaceholder(),
                            value: i,
                            onChange: e.updateCredit
                        }))) : "gravity" === t ? n().createElement("div", {
                            key: s,
                            className: "cloudinary-field__field"
                        }, n().createElement("label", {
                            htmlFor: "".concat(f, "_gravity"),
                            className: "cloudinary-field__label"
                        }, e.gravityFieldLabel()), n().createElement("div", {
                            className: "cloudinary-field__input"
                        }, n().createElement("select", {
                            id: "".concat(f, "_gravity"),
                            className: "select",
                            onChange: e.updateGravity
                        }, w()(d, (function(e, t) {
                            return n().createElement("option", {
                                value: t,
                                selected: t === a
                            }, e);
                        }))))) : "fg-colour" === t && "image" === p && y && y.length ? n().createElement("div", {
                            key: s,
                            className: "cloudinary-field__field"
                        }, n().createElement("label", {
                            className: "cloudinary-field__label"
                        }, e.fgColourFieldLabel()), n().createElement("div", {
                            className: "cloudinary-field__input"
                        }, n().createElement("div", {
                            className: "cloudinary-field__picker"
                        }, n().createElement("label", {
                            className: j()("cloudinary-field__colour", null === u && "cloudinary-field__colour--selected")
                        }, n().createElement("input", {
                            type: "radio",
                            checked: null === u,
                            value: null,
                            onChange: e.updateFgColour
                        }), n().createElement("span", null, "None")), y.map((function(t, r) {
                            var o = t.colour;
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
                                onChange: e.updateFgColour
                            }), n().createElement("span", null, o));
                        }))))) : "bg-colour" === t && "image" === p && y && y.length ? n().createElement("div", {
                            key: s,
                            className: "cloudinary-field__field"
                        }, n().createElement("label", {
                            className: "cloudinary-field__label"
                        }, e.bgColourFieldLabel()), n().createElement("div", {
                            className: "cloudinary-field__input"
                        }, n().createElement("div", {
                            className: "cloudinary-field__picker"
                        }, n().createElement("label", {
                            className: j()("cloudinary-field__colour", null === c && "cloudinary-field__colour--selected")
                        }, n().createElement("input", {
                            type: "radio",
                            checked: null === c,
                            value: null,
                            onChange: e.updateBgColour
                        }), n().createElement("span", null, "None")), y.map((function(t, r) {
                            var o = t.colour;
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
                                onChange: e.updateBgColour
                            }), n().createElement("span", null, o));
                        }))))) : null;
                    }))));
                }
            } ]) && _defineProperties(t.prototype, r), o && _defineProperties(t, o), Object.defineProperty(t, "prototype", {
                writable: !1
            }), Resource;
        }(r.Component);
        function image_typeof(e) {
            return image_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, image_typeof(e);
        }
        function image_defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, (o = n.key, i = void 0, i = function(e, t) {
                    if ("object" !== image_typeof(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== image_typeof(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                }(o, "string"), "symbol" === image_typeof(i) ? i : String(i)), n);
            }
            var o, i;
        }
        function image_setPrototypeOf(e, t) {
            return image_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e;
            }, image_setPrototypeOf(e, t);
        }
        function image_createSuper(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }();
            return function() {
                var r, n = image_getPrototypeOf(e);
                if (t) {
                    var o = image_getPrototypeOf(this).constructor;
                    r = Reflect.construct(n, arguments, o);
                } else r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === image_typeof(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(e);
                }(this, r);
            };
        }
        function image_getPrototypeOf(e) {
            return image_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            }, image_getPrototypeOf(e);
        }
        E.propTypes = {
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
        }, E.defaultProps = {
            title: null,
            description: null,
            credit: null,
            gravity: null,
            top_colours: null,
            foreground_colour: null,
            background_colour: null
        };
        var S = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && image_setPrototypeOf(e, t);
            }(Image, e);
            var t, r, n, o = image_createSuper(Image);
            function Image() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, Image), o.apply(this, arguments);
            }
            return t = Image, (r = [ {
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
            } ]) && image_defineProperties(t.prototype, r), n && image_defineProperties(t, n), 
            Object.defineProperty(t, "prototype", {
                writable: !1
            }), Image;
        }(E);
        function video_typeof(e) {
            return video_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, video_typeof(e);
        }
        function video_defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, (o = n.key, i = void 0, i = function(e, t) {
                    if ("object" !== video_typeof(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== video_typeof(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                }(o, "string"), "symbol" === video_typeof(i) ? i : String(i)), n);
            }
            var o, i;
        }
        function video_setPrototypeOf(e, t) {
            return video_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e;
            }, video_setPrototypeOf(e, t);
        }
        function video_createSuper(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }();
            return function() {
                var r, n = video_getPrototypeOf(e);
                if (t) {
                    var o = video_getPrototypeOf(this).constructor;
                    r = Reflect.construct(n, arguments, o);
                } else r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === video_typeof(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(e);
                }(this, r);
            };
        }
        function video_getPrototypeOf(e) {
            return video_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            }, video_getPrototypeOf(e);
        }
        var A = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && video_setPrototypeOf(e, t);
            }(Video, e);
            var t, r, n, o = video_createSuper(Video);
            function Video() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, Video), o.apply(this, arguments);
            }
            return t = Video, (r = [ {
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
            } ]) && video_defineProperties(t.prototype, r), n && video_defineProperties(t, n), 
            Object.defineProperty(t, "prototype", {
                writable: !1
            }), Video;
        }(E);
        function file_typeof(e) {
            return file_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, file_typeof(e);
        }
        function file_defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, (o = n.key, i = void 0, i = function(e, t) {
                    if ("object" !== file_typeof(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== file_typeof(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                }(o, "string"), "symbol" === file_typeof(i) ? i : String(i)), n);
            }
            var o, i;
        }
        function file_setPrototypeOf(e, t) {
            return file_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e;
            }, file_setPrototypeOf(e, t);
        }
        function file_createSuper(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }();
            return function() {
                var r, n = file_getPrototypeOf(e);
                if (t) {
                    var o = file_getPrototypeOf(this).constructor;
                    r = Reflect.construct(n, arguments, o);
                } else r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === file_typeof(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(e);
                }(this, r);
            };
        }
        function file_getPrototypeOf(e) {
            return file_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            }, file_getPrototypeOf(e);
        }
        var C = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && file_setPrototypeOf(e, t);
            }(File, e);
            var t, r, n, o = file_createSuper(File);
            function File() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, File), o.apply(this, arguments);
            }
            return t = File, r && file_defineProperties(t.prototype, r), n && file_defineProperties(t, n), 
            Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
        }(E);
        function audio_typeof(e) {
            return audio_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, audio_typeof(e);
        }
        function audio_defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, (o = n.key, i = void 0, i = function(e, t) {
                    if ("object" !== audio_typeof(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== audio_typeof(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                }(o, "string"), "symbol" === audio_typeof(i) ? i : String(i)), n);
            }
            var o, i;
        }
        function audio_setPrototypeOf(e, t) {
            return audio_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e;
            }, audio_setPrototypeOf(e, t);
        }
        function audio_createSuper(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }();
            return function() {
                var r, n = audio_getPrototypeOf(e);
                if (t) {
                    var o = audio_getPrototypeOf(this).constructor;
                    r = Reflect.construct(n, arguments, o);
                } else r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === audio_typeof(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(e);
                }(this, r);
            };
        }
        function audio_getPrototypeOf(e) {
            return audio_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            }, audio_getPrototypeOf(e);
        }
        var T = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && audio_setPrototypeOf(e, t);
            }(Audio, e);
            var t, r, n, o = audio_createSuper(Audio);
            function Audio() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, Audio), o.apply(this, arguments);
            }
            return t = Audio, (r = [ {
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
            } ]) && audio_defineProperties(t.prototype, r), n && audio_defineProperties(t, n), 
            Object.defineProperty(t, "prototype", {
                writable: !1
            }), Audio;
        }(E);
        function field_typeof(e) {
            return field_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, field_typeof(e);
        }
        function _extends() {
            return _extends = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
            }, _extends.apply(this, arguments);
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
            return (t = field_toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e;
        }
        function field_defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, field_toPropertyKey(n.key), n);
            }
        }
        function field_toPropertyKey(e) {
            var t = function(e, t) {
                if ("object" !== field_typeof(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" !== field_typeof(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            }(e, "string");
            return "symbol" === field_typeof(t) ? t : String(t);
        }
        function field_setPrototypeOf(e, t) {
            return field_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e;
            }, field_setPrototypeOf(e, t);
        }
        function field_createSuper(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }();
            return function() {
                var r, n = field_getPrototypeOf(e);
                if (t) {
                    var o = field_getPrototypeOf(this).constructor;
                    r = Reflect.construct(n, arguments, o);
                } else r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === field_typeof(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return field_assertThisInitialized(e);
                }(this, r);
            };
        }
        function field_assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function field_getPrototypeOf(e) {
            return field_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            }, field_getPrototypeOf(e);
        }
        t().noConflict();
        var R = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && field_setPrototypeOf(e, t);
            }(Field, e);
            var r, o, i, u = field_createSuper(Field);
            function Field(e) {
                var t;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, Field), t = u.call(this, e);
                var r = e.value, n = e.isMultiple, o = r;
                try {
                    o = JSON.parse(o), !n && p()(o) ? o = [ o ] : !n && l()(o) && (o = o.slice(0, 1));
                } catch (e) {
                    o = [];
                }
                return t.state = {
                    loading: !0,
                    resources: o
                }, t.showLibrary = t.showLibrary.bind(field_assertThisInitialized(t)), t.insertHandler = t.insertHandler.bind(field_assertThisInitialized(t)), 
                t.loadResources = t.loadResources.bind(field_assertThisInitialized(t)), t.loadResource = t.loadResource.bind(field_assertThisInitialized(t)), 
                t.processResource = t.processResource.bind(field_assertThisInitialized(t)), t.processVideo = t.processVideo.bind(field_assertThisInitialized(t)), 
                t.processAudio = t.processAudio.bind(field_assertThisInitialized(t)), t.processImage = t.processImage.bind(field_assertThisInitialized(t)), 
                t.processRaw = t.processRaw.bind(field_assertThisInitialized(t)), t.onChange = t.onChange.bind(field_assertThisInitialized(t)), 
                t.onRemoveResource = t.onRemoveResource.bind(field_assertThisInitialized(t)), t.onMoveResource = t.onMoveResource.bind(field_assertThisInitialized(t)), 
                t.updateProperty = t.updateProperty.bind(field_assertThisInitialized(t)), t.renderResources = t.renderResources.bind(field_assertThisInitialized(t)), 
                t;
            }
            return r = Field, (o = [ {
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        loading: !1
                    });
                }
            }, {
                key: "showLibrary",
                value: function() {
                    var e = this.props, t = e.isMultiple, r = e.maxFiles, n = _objectSpread(_objectSpread({}, CLOUDINARY_CONFIG), {}, {
                        multiple: !!t,
                        max_files: r - this.state.resources.length,
                        remove_header: !0
                    });
                    cloudinary.openMediaLibrary(n, {
                        insertHandler: this.insertHandler
                    });
                }
            }, {
                key: "insertHandler",
                value: function(e) {
                    var t = this, r = this.props.resourceType, n = v()(e, "assets", []);
                    if (r && (n = n.filter((function(e) {
                        return e.resource_type === r;
                    }))), 0 === n.length) return alert("You can only select ".concat(r, " files for this field"));
                    this.setState({
                        loading: !0
                    }), this.loadResources(n).then((function(e) {
                        var r = c()(e, t.state.resources, "public_id");
                        r = a()(t.state.resources, r), t.setState({
                            loading: !1,
                            resources: r
                        }), t.onChange(r);
                    }));
                }
            }, {
                key: "loadResources",
                value: function(e) {
                    var t = this;
                    return new Promise((function(r) {
                        if (!e.length) return r([]);
                        var n = e.map((function(e) {
                            return t.loadResource(e.public_id, e.resource_type);
                        }));
                        Promise.all(n).then((function(n) {
                            n = n.map((function(r) {
                                var n = e.find((function(e) {
                                    return e.public_id === r.public_id;
                                }));
                                return t.processResource(n, r);
                            })), r(n);
                        }));
                    }));
                }
            }, {
                key: "loadResource",
                value: function(e, r) {
                    return t().get("cloudinary-api/resource", {
                        public_id: e,
                        resource_type: r
                    });
                }
            }, {
                key: "processResource",
                value: function(e, t) {
                    var r = t.actual_type;
                    return "video" === r ? this.processVideo(e, t) : "audio" === r ? this.processAudio(e, t) : "image" === r ? this.processImage(e, t) : this.processRaw(e, t);
                }
            }, {
                key: "processVideo",
                value: function(e, t) {
                    var r = e.bytes, n = e.format, o = e.derived, i = null;
                    return o && (i = o[0].raw_transformation), _objectSpread({
                        bytes: r,
                        format: n,
                        transformations: i
                    }, t);
                }
            }, {
                key: "processAudio",
                value: function(e, t) {
                    return _objectSpread({
                        bytes: e.bytes,
                        format: e.format
                    }, t);
                }
            }, {
                key: "processImage",
                value: function(e, t) {
                    var r = e.bytes, n = e.format, o = e.derived, i = null;
                    return o && (i = o[0].raw_transformation), _objectSpread({
                        bytes: r,
                        format: n,
                        transformations: i
                    }, t);
                }
            }, {
                key: "processRaw",
                value: function(e, t) {
                    var r = e.bytes, n = e.format;
                    return n && (t.format = n), _objectSpread({
                        bytes: r
                    }, t);
                }
            }, {
                key: "onChange",
                value: function(e) {
                    e = this.props.isMultiple ? e : d()(e), this.props.onChange(JSON.stringify(e));
                }
            }, {
                key: "onRemoveResource",
                value: function(e) {
                    var t = this.state.resources.filter((function(t) {
                        return t.public_id !== e;
                    }));
                    this.setState({
                        resources: t
                    }), this.onChange(t);
                }
            }, {
                key: "onMoveResource",
                value: function(e, t) {
                    var r = this.state.resources.findIndex((function(t) {
                        return t.public_id === e;
                    })), n = parseInt(t, 10) + r;
                    if (!(n < 0 || n > this.state.resources.length)) {
                        var o = this.state.resources[r], i = [].concat(this.state.resources.slice(0, r), this.state.resources.slice(r + 1));
                        i.splice(n, 0, o), this.setState({
                            resources: i
                        }), this.onChange(i);
                    }
                }
            }, {
                key: "updateProperty",
                value: function(e, t, r) {
                    var n = this.state.resources.map((function(n) {
                        return n.public_id !== e || (n[t] = r), n;
                    }));
                    this.setState({
                        resources: n
                    }), this.onChange(n);
                }
            }, {
                key: "renderResources",
                value: function() {
                    var e = this;
                    return this.state.resources.map((function(t, r) {
                        var o = t.actual_type, i = 0 === r, a = r === e.state.resources.length - 1;
                        return "video" === o ? n().createElement(A, _extends({}, t, {
                            key: t.public_id,
                            fields: e.props.fields,
                            gravityOptions: e.props.gravityOptions,
                            onChange: e.updateProperty,
                            onRemoveResource: e.onRemoveResource,
                            onMoveResource: e.onMoveResource,
                            firstItem: i,
                            lastItem: a
                        })) : "audio" === o ? n().createElement(T, _extends({}, t, {
                            key: t.public_id,
                            fields: e.props.fields,
                            onChange: e.updateProperty,
                            onRemoveResource: e.onRemoveResource,
                            onMoveResource: e.onMoveResource,
                            firstItem: i,
                            lastItem: a
                        })) : "image" === o ? n().createElement(S, _extends({}, t, {
                            key: t.public_id,
                            fields: e.props.fields,
                            gravityOptions: e.props.gravityOptions,
                            onChange: e.updateProperty,
                            onRemoveResource: e.onRemoveResource,
                            onMoveResource: e.onMoveResource,
                            firstItem: i,
                            lastItem: a
                        })) : n().createElement(C, _extends({}, t, {
                            key: t.public_id,
                            fields: e.props.fields,
                            onChange: e.updateProperty,
                            onRemoveResource: e.onRemoveResource,
                            onMoveResource: e.onMoveResource,
                            firstItem: i,
                            lastItem: a
                        }));
                    }));
                }
            }, {
                key: "render",
                value: function() {
                    var e;
                    return e = this.props.isMultiple ? this.state.resources.length < this.props.maxFiles : !this.state.resources.length, 
                    n().createElement("div", {
                        className: "cloudinary-field__inner"
                    }, !0 === this.state.loading && n().createElement("div", {
                        className: "cloudinary-field__loader"
                    }, n().createElement("span", {
                        className: "cloudinary-field__sr-only"
                    }, "Loading…")), !0 === e && n().createElement("div", {
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
            }), Field;
        }(r.Component);
        function bundle_extends() {
            return bundle_extends = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
            }, bundle_extends.apply(this, arguments);
        }
        R.propTypes = {
            resourceType: m().string.isRequired,
            buttonLabel: m().string.isRequired,
            isMultiple: m().bool.isRequired,
            gravityOptions: m().array.isRequired,
            onChange: m().func.isRequired,
            maxFiles: m().number,
            fields: m().string,
            value: m().string
        }, t().noConflict(), t().entwine("ss", (function(e) {
            e("textarea.cloudinary-input-field").entwine({
                HolderInstance: null,
                onmatch: function() {
                    var t = this;
                    this._super(), this.addClass("cloudinary-field__sr-only"), this.HolderInstance = e('<div class="cloudinary-field"></div>'), 
                    this.after(this.HolderInstance);
                    (0, o.render)(n().createElement(R, bundle_extends({}, this.data(), {
                        key: this.attr("id"),
                        value: this.val(),
                        onChange: function(e) {
                            t.val(e), t.click();
                        }
                    })), this.HolderInstance.get(0));
                },
                onunmatch: function() {
                    this._super(), this.removeClass("cloudinary-field__sr-only"), this.HolderInstance instanceof t() && ((0, 
                    o.unmountComponentAtNode)(this.HolderInstance.get(0)), this.HolderInstance.remove());
                }
            });
        }));
    })();
})();
//# sourceMappingURL=bundle.js.map