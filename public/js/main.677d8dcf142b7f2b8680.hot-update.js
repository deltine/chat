webpackHotUpdate("main",{

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("function _interopDefault(e){return e&&\"object\"==typeof e&&\"default\"in e?e.default:e}Object.defineProperty(exports,\"__esModule\",{value:!0});var React=_interopDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));function AppContainer(e){return AppContainer.warnAboutHMRDisabled&&(AppContainer.warnAboutHMRDisabled=!0,console.error(\"React-Hot-Loader: misconfiguration detected, using production version in non-production environment.\"),console.error(\"React-Hot-Loader: Hot Module Replacement is not enabled.\")),React.Children.only(e.children)}AppContainer.warnAboutHMRDisabled=!1;var hot=function e(){return e.shouldWrapWithAppContainer?function(e){return function(n){return React.createElement(AppContainer,null,React.createElement(e,n))}}:function(e){return e}};hot.shouldWrapWithAppContainer=!1;var areComponentsEqual=function(e,n){return e===n},setConfig=function(){},cold=function(e){return e},configureComponent=function(){};exports.AppContainer=AppContainer,exports.hot=hot,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold,exports.configureComponent=configureComponent;\n\n\n//# sourceURL=webpack:///./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js?");

/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else if (false) {} else if (typeof window === 'undefined') {\n  // this is just server environment\n  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ \"./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js\");\n} else if (false) {} else {\n  var evalAllowed = false;\n  var evalError = null;\n  try {\n    eval('evalAllowed = true');\n  } catch (e) {\n    // eval not allowed due to CSP\n    evalError = e && e.message ? e.message : 'unknown reason';\n  }\n\n  // TODO: dont use eval to update methods. see #1273\n  // RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods\n  var jsFeaturesPresent = !!Object.setPrototypeOf;\n\n  if (!jsFeaturesPresent || !evalAllowed) {\n    // we are not in prod mode, but RHL could not be activated\n    console.warn(\n      'React-Hot-Loader is not supported in this environment:',\n      [\n        !jsFeaturesPresent && \"some JS features are missing\",\n        !evalAllowed && \"`eval` is not allowed(\" + evalError + \")\"\n      ].join(','),\n      '.'\n    );\n    module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ \"./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js\");\n  } else {\n    module.exports = window.reactHotLoaderGlobal = __webpack_require__(/*! ./dist/react-hot-loader.development.js */ \"./node_modules/react-hot-loader/dist/react-hot-loader.development.js\");\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/react-hot-loader/index.js?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _features_app_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/app/App */ \"./src/features/app/App.tsx\");\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/store */ \"./src/app/store.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ \"./src/serviceWorker.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar render = function () {\r\n    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__[\"AppContainer\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], { store: _app_store__WEBPACK_IMPORTED_MODULE_4__[\"store\"] },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_app_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))), document.querySelector(\"#root\"));\r\n};\r\nrender();\r\n// Hot reloading\r\nif (true) {\r\n    // Reload components\r\n    module.hot.accept(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './App'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {\r\n        render();\r\n    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));\r\n}\r\n_serviceWorker__WEBPACK_IMPORTED_MODULE_6__[\"unregister\"]();\r\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ })

})