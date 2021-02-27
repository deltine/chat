webpackHotUpdate("main",{

/***/ "./src/features/app/App.tsx":
/*!**********************************!*\
  !*** ./src/features/app/App.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Socket */ \"./src/Socket.tsx\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chat/Chat */ \"./src/features/Chat/Chat.tsx\");\n/* harmony import */ var _top_Top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../top/Top */ \"./src/features/top/Top.tsx\");\n/* harmony import */ var _appSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appSlice */ \"./src/features/app/appSlice.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction App() {\r\n    var displayNo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_appSlice__WEBPACK_IMPORTED_MODULE_5__[\"selectDisplayNo\"]);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null,\r\n        displayNo == _appSlice__WEBPACK_IMPORTED_MODULE_5__[\"displayList\"].SignIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_top_Top__WEBPACK_IMPORTED_MODULE_4__[\"Top\"], null),\r\n        displayNo == _appSlice__WEBPACK_IMPORTED_MODULE_5__[\"displayList\"].Chat && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chat_Chat__WEBPACK_IMPORTED_MODULE_3__[\"Chat\"], null),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\r\n\n\n//# sourceURL=webpack:///./src/features/app/App.tsx?");

/***/ }),

/***/ "./src/features/top/Top.tsx":
/*!**********************************!*\
  !*** ./src/features/top/Top.tsx ***!
  \**********************************/
/*! exports provided: Top */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Top\", function() { return Top; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _topSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topSlice */ \"./src/features/top/topSlice.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _topStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topStyle */ \"./src/features/top/topStyle.ts\");\n/* harmony import */ var _app_appSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/appSlice */ \"./src/features/app/appSlice.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction Top() {\r\n    var classes = Object(_topStyle__WEBPACK_IMPORTED_MODULE_4__[\"topStyles\"])();\r\n    var name = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_topSlice__WEBPACK_IMPORTED_MODULE_2__[\"selectName\"]);\r\n    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], { component: \"main\", maxWidth: \"sm\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: classes.tittle },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], { component: \"h1\", variant: \"h2\" }, \"chat app.\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"TextField\"], { variant: \"outlined\", margin: \"normal\", required: true, fullWidth: true, id: \"userName\", label: \"User Name\", name: \"userName\", autoComplete: \"userName\", autoFocus: true, value: name, onChange: function (e) { return dispatch(Object(_topSlice__WEBPACK_IMPORTED_MODULE_2__[\"updateName\"])(e.target.value)); } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: classes.tittle },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], { type: \"submit\", fullWidth: true, variant: \"contained\", color: \"primary\", className: classes.submit, onClick: function (e) { return dispatch(Object(_app_appSlice__WEBPACK_IMPORTED_MODULE_5__[\"displayChange\"])(_app_appSlice__WEBPACK_IMPORTED_MODULE_5__[\"displayList\"].Chat)); } }, \"Sign in\")))));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/features/top/Top.tsx?");

/***/ })

})