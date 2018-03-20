/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lib_Injector__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lib_Injector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lib_Injector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



var getCloudinaryEnhancedGalleryToolbar = function getCloudinaryEnhancedGalleryToolbar(GalleryToolbar) {
    return function (props) {
        var handleSyncWithCloudinary = function handleSyncWithCloudinary() {
            fetch('/cloudinary-api/sync');
        };

        var renderButton = function renderButton() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'button',
                {
                    id: 'sync-with-cloudinary-button',
                    className: 'btn btn-secondary font-icon-sync btn--icon-xl',
                    type: 'button',
                    onClick: handleSyncWithCloudinary
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'span',
                    { className: 'btn__text btn__title' },
                    i18n._t('Cloudinary.SYNC_WITH_CLOUDINARY', 'Sync with Cloudinary')
                )
            );
        };

        props.children = props.children || [];
        props.children.push(renderButton());

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(GalleryToolbar, props)
        );
    };
};

__WEBPACK_IMPORTED_MODULE_0_lib_Injector___default.a.transform('cloudinary-sync-button', function (updater) {
    updater.component('GalleryToolbar', getCloudinaryEnhancedGalleryToolbar);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = Injector;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map