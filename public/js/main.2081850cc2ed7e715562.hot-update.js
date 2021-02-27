webpackHotUpdate("main",{

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/*! exports provided: history, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"history\", function() { return history; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ \"./node_modules/history/esm/history.js\");\n/* harmony import */ var _features_temp_tempSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/temp/tempSlice */ \"./src/features/temp/tempSlice.ts\");\n/* harmony import */ var _features_app_appSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/app/appSlice */ \"./src/features/app/appSlice.ts\");\n/* harmony import */ var _features_top_topSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/top/topSlice */ \"./src/features/top/topSlice.ts\");\n/* harmony import */ var _features_Chat_chatSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/Chat/chatSlice */ \"./src/features/Chat/chatSlice.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nvar history = Object(history__WEBPACK_IMPORTED_MODULE_1__[\"createBrowserHistory\"])();\r\nvar store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"configureStore\"])({\r\n    reducer: {\r\n        temp: _features_temp_tempSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n        app: _features_app_appSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n        top: _features_top_topSlice__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n        chat: _features_Chat_chatSlice__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n    },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/app/store.ts?");

/***/ }),

/***/ "./src/features/temp/tempSlice.ts":
/*!****************************************!*\
  !*** ./src/features/temp/tempSlice.ts ***!
  \****************************************/
/*! exports provided: tempSlice, increment, incrementByAmount, incremantRecvValue, incrementAsync, selectCount, selectRecvCount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tempSlice\", function() { return tempSlice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increment\", function() { return increment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementByAmount\", function() { return incrementByAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incremantRecvValue\", function() { return incremantRecvValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementAsync\", function() { return incrementAsync; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectCount\", function() { return selectCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectRecvCount\", function() { return selectRecvCount; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nvar _a;\r\n\r\nvar initialState = {\r\n    value: 0,\r\n    recvValue: 0,\r\n};\r\nvar tempSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\r\n    name: \"temp\",\r\n    initialState: initialState,\r\n    reducers: {\r\n        increment: function (state) {\r\n            state.value += 1;\r\n            // sendChatAction(state.value.toString());\r\n        },\r\n        incrementByAmount: function (state, action) {\r\n            state.value += action.payload;\r\n        },\r\n        incremantRecvValue: function (state, action) {\r\n            console.log(\"incremantRecvValue:\" + action.payload);\r\n            state.recvValue = action.payload;\r\n        },\r\n    },\r\n});\r\nvar increment = (_a = tempSlice.actions, _a.increment), incrementByAmount = _a.incrementByAmount, incremantRecvValue = _a.incremantRecvValue;\r\n// 非同期テンプレート\r\nvar incrementAsync = function (amount) { return function (dispatch) {\r\n    setTimeout(function () {\r\n        dispatch(incrementByAmount(amount));\r\n    }, 1000);\r\n}; };\r\nvar selectCount = function (state) { return state.temp.value; };\r\nvar selectRecvCount = function (state) { return state.temp.recvValue; };\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (tempSlice.reducer);\r\n\n\n//# sourceURL=webpack:///./src/features/temp/tempSlice.ts?");

/***/ })

})