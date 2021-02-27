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

/***/ "./src/features/Chat/chatSlice.ts":
/*!****************************************!*\
  !*** ./src/features/Chat/chatSlice.ts ***!
  \****************************************/
/*! exports provided: chatSlice, addSignInMessage, addMessage, selectSignInMessage, selectMessageList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatSlice\", function() { return chatSlice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addSignInMessage\", function() { return addSignInMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMessage\", function() { return addMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSignInMessage\", function() { return selectSignInMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectMessageList\", function() { return selectMessageList; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nvar _a;\r\n\r\nvar initialState = {\r\n    signInMessage: null,\r\n    messageList: [],\r\n};\r\nvar chatSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\r\n    name: \"chat\",\r\n    initialState: initialState,\r\n    reducers: {\r\n        addSignInMessage: function (state, action) {\r\n            console.log(\"addSignInMessage\");\r\n            state.signInMessage = action.payload;\r\n        },\r\n        addMessage: function (state, action) {\r\n            console.log(\"addMessage\");\r\n            state.messageList.push(action.payload);\r\n        },\r\n    },\r\n});\r\nvar addSignInMessage = (_a = chatSlice.actions, _a.addSignInMessage), addMessage = _a.addMessage;\r\nvar selectSignInMessage = function (state) {\r\n    return state.chat.signInMessage;\r\n};\r\nvar selectMessageList = function (state) { return state.chat.messageList; };\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (chatSlice.reducer);\r\n\n\n//# sourceURL=webpack:///./src/features/Chat/chatSlice.ts?");

/***/ }),

/***/ "./src/features/app/appSlice.ts":
/*!**************************************!*\
  !*** ./src/features/app/appSlice.ts ***!
  \**************************************/
/*! exports provided: displayList, appSlice, displayChange, selectDisplayNo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayList\", function() { return displayList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appSlice\", function() { return appSlice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayChange\", function() { return displayChange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectDisplayNo\", function() { return selectDisplayNo; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\r\nvar displayList = {\r\n    SignIn: 0,\r\n    Chat: 1,\r\n};\r\nvar initialState = {\r\n    displayNo: displayList.SignIn,\r\n};\r\nvar appSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\r\n    name: \"app\",\r\n    initialState: initialState,\r\n    reducers: {\r\n        displayChange: function (state, action) {\r\n            state.displayNo = action.payload;\r\n        },\r\n    },\r\n});\r\nvar displayChange = appSlice.actions.displayChange;\r\nvar selectDisplayNo = function (state) { return state.app.displayNo; };\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (appSlice.reducer);\r\n\n\n//# sourceURL=webpack:///./src/features/app/appSlice.ts?");

/***/ }),

/***/ "./src/features/temp/tempSlice.ts":
/*!****************************************!*\
  !*** ./src/features/temp/tempSlice.ts ***!
  \****************************************/
/*! exports provided: tempSlice, increment, incrementByAmount, incremantRecvValue, incrementAsync, selectCount, selectRecvCount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tempSlice\", function() { return tempSlice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increment\", function() { return increment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementByAmount\", function() { return incrementByAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incremantRecvValue\", function() { return incremantRecvValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementAsync\", function() { return incrementAsync; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectCount\", function() { return selectCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectRecvCount\", function() { return selectRecvCount; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nvar _a;\r\n\r\nvar initialState = {\r\n    value: 0,\r\n    recvValue: 0,\r\n};\r\nvar tempSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\r\n    name: \"temp\",\r\n    initialState: initialState,\r\n    reducers: {\r\n        increment: function (state) {\r\n            state.value += 1;\r\n            // sendChatAction(state.value.toString());\r\n        },\r\n        incrementByAmount: function (state, action) {\r\n            state.value += action.payload;\r\n        },\r\n        incremantRecvValue: function (state, action) {\r\n            console.log(\"incremantRecvValue:\" + action.payload);\r\n            state.recvValue = action.payload;\r\n        },\r\n    },\r\n});\r\nvar increment = (_a = tempSlice.actions, _a.increment), incrementByAmount = _a.incrementByAmount, incremantRecvValue = _a.incremantRecvValue;\r\n// 非同期テンプレート\r\nvar incrementAsync = function (amount) { return function (dispatch) {\r\n    setTimeout(function () {\r\n        dispatch(incrementByAmount(amount));\r\n    }, 1000);\r\n}; };\r\nvar selectCount = function (state) { return state.temp.value; };\r\nvar selectRecvCount = function (state) { return state.temp.recvValue; };\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (tempSlice.reducer);\r\n\n\n//# sourceURL=webpack:///./src/features/temp/tempSlice.ts?");

/***/ }),

/***/ "./src/features/top/topSlice.ts":
/*!**************************************!*\
  !*** ./src/features/top/topSlice.ts ***!
  \**************************************/
/*! exports provided: tempSlice, updateName, selectName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tempSlice\", function() { return tempSlice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateName\", function() { return updateName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectName\", function() { return selectName; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\r\nvar initialState = {\r\n    name: \"\",\r\n};\r\nvar tempSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\r\n    name: \"top\",\r\n    initialState: initialState,\r\n    reducers: {\r\n        updateName: function (state, action) {\r\n            state.name = action.payload;\r\n        },\r\n    },\r\n});\r\nvar updateName = tempSlice.actions.updateName;\r\nvar selectName = function (state) { return state.top.name; };\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (tempSlice.reducer);\r\n\n\n//# sourceURL=webpack:///./src/features/top/topSlice.ts?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _features_app_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/app/App */ \"./src/features/app/App.tsx\");\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/store */ \"./src/app/store.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ \"./src/serviceWorker.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar render = function () {\r\n    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__[\"AppContainer\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], { store: _app_store__WEBPACK_IMPORTED_MODULE_4__[\"store\"] },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_app_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))), document.querySelector(\"#root\"));\r\n};\r\nrender();\r\n// Hot reloading\r\nif (true) {\r\n    // Reload components\r\n    module.hot.accept(/*! ./ */ \"./src/index.tsx\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {\r\n        render();\r\n    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));\r\n}\r\n_serviceWorker__WEBPACK_IMPORTED_MODULE_6__[\"unregister\"]();\r\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ })

})