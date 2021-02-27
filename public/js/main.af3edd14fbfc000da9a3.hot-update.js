webpackHotUpdate("main",{

/***/ "./src/Socket.tsx":
/*!************************!*\
  !*** ./src/Socket.tsx ***!
  \************************/
/*! exports provided: default, signIn, sendCha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Socket; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signIn\", function() { return signIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendCha\", function() { return sendCha; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _IF__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IF */ \"./src/IF.ts\");\n/* harmony import */ var _features_Chat_chatSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/Chat/chatSlice */ \"./src/features/Chat/chatSlice.ts\");\n\r\n\r\n\r\n\r\n\r\nvar socket;\r\nfunction Socket() {\r\n    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\r\n    if (!socket) {\r\n        socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()(\":3000\");\r\n        socket.on(\"userAdd\", function (message) {\r\n            console.log(\"userAdd: \" + message);\r\n            dispatch(Object(_features_Chat_chatSlice__WEBPACK_IMPORTED_MODULE_4__[\"addSignInMessage\"])(message));\r\n        });\r\n        socket.on(\"chatMessage\", function (message) {\r\n            console.log(\"chatMessage:\" + message);\r\n            // dispatch(incremantRecvValue(data));\r\n            dispatch(addMessage(message));\r\n        });\r\n    }\r\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);\r\n}\r\nfunction signIn(userName) {\r\n    var message = {\r\n        auth: _IF__WEBPACK_IMPORTED_MODULE_3__[\"Authority\"].system,\r\n        name: userName,\r\n        uuid: null,\r\n        message: null,\r\n    };\r\n    socket.emit(\"signIn\", message);\r\n}\r\nfunction sendCha(data) {\r\n    socket.emit(\"chatMessage\", data);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Socket.tsx?");

/***/ }),

/***/ "./src/features/Chat/Chat.tsx":
/*!************************************!*\
  !*** ./src/features/Chat/Chat.tsx ***!
  \************************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Chat\", function() { return Chat; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Socket */ \"./src/Socket.tsx\");\n/* harmony import */ var _top_topSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../top/topSlice */ \"./src/features/top/topSlice.ts\");\n/* harmony import */ var _chatSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatSlice */ \"./src/features/Chat/chatSlice.ts\");\n/* harmony import */ var _ChatStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatStyle */ \"./src/features/Chat/ChatStyle.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction Chat() {\r\n    var classes = Object(_ChatStyle__WEBPACK_IMPORTED_MODULE_6__[\"chatStyles\"])();\r\n    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\r\n    // Chat画面が呼ばれる前に値を設定\r\n    var name = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_top_topSlice__WEBPACK_IMPORTED_MODULE_4__[\"selectName\"]);\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"), text = _a[0], setText = _a[1];\r\n    // signIn()のレスポンスを設定\r\n    var signInMessage = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_chatSlice__WEBPACK_IMPORTED_MODULE_5__[\"selectSignInMessage\"]);\r\n    // チャット内容を設定\r\n    var messageList = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_chatSlice__WEBPACK_IMPORTED_MODULE_5__[\"selectMessageList\"]);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        console.log(\"signIn\");\r\n        Object(_Socket__WEBPACK_IMPORTED_MODULE_3__[\"signIn\"])(name);\r\n    }, []);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], { component: \"main\", maxWidth: \"sm\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: classes.tittle },\r\n            messageList.map(function (message, index) {\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null,\r\n                    index,\r\n                    \", \",\r\n                    message.name,\r\n                    \", \",\r\n                    message.message);\r\n                // if (message.uuid == null) {\r\n                //   // 不正なメッセージ\r\n                //   <div>不正なデータ</div>;\r\n                // } else {\r\n                //   if (message.message == null) {\r\n                //     // ログイン\r\n                //     <div>{message.name}がログインしました。</div>;\r\n                //   } else if ((signInMessage!.uuid = message.uuid)) {\r\n                //     // 自分\r\n                //     <div>\r\n                //       自分,{message.name}, {message.message}\r\n                //     </div>;\r\n                //   } else {\r\n                //     // 自分以外\r\n                //     <div>\r\n                //       自分以外,{message.name}, {message.message}\r\n                //     </div>;\r\n                //   }\r\n                // }\r\n            }),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], { value: text, onChange: function (e) { return setText(e.target.value); } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], { type: \"submit\", fullWidth: true, variant: \"contained\", color: \"primary\", onClick: addMessage(text) }, \"send\"))));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/features/Chat/Chat.tsx?");

/***/ }),

/***/ "./src/features/app/App.tsx":
/*!**********************************!*\
  !*** ./src/features/app/App.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Socket */ \"./src/Socket.tsx\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chat/Chat */ \"./src/features/Chat/Chat.tsx\");\n/* harmony import */ var _top_Top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../top/Top */ \"./src/features/top/Top.tsx\");\n/* harmony import */ var _appSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appSlice */ \"./src/features/app/appSlice.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction App() {\r\n    var displayNo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_appSlice__WEBPACK_IMPORTED_MODULE_5__[\"selectDisplayNo\"]);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null,\r\n        displayNo == _appSlice__WEBPACK_IMPORTED_MODULE_5__[\"displayList\"].SignIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_top_Top__WEBPACK_IMPORTED_MODULE_4__[\"Top\"], null),\r\n        displayNo == _appSlice__WEBPACK_IMPORTED_MODULE_5__[\"displayList\"].Chat && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chat_Chat__WEBPACK_IMPORTED_MODULE_3__[\"Chat\"], null),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\r\n\n\n//# sourceURL=webpack:///./src/features/app/App.tsx?");

/***/ }),

/***/ "./src/features/temp/tempSlice.ts":
/*!****************************************!*\
  !*** ./src/features/temp/tempSlice.ts ***!
  \****************************************/
/*! exports provided: tempSlice, increment, incrementByAmount, incremantRecvValue, incrementAsync, selectCount, selectRecvCount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tempSlice\", function() { return tempSlice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increment\", function() { return increment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementByAmount\", function() { return incrementByAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incremantRecvValue\", function() { return incremantRecvValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementAsync\", function() { return incrementAsync; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectCount\", function() { return selectCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectRecvCount\", function() { return selectRecvCount; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Socket */ \"./src/Socket.tsx\");\nvar _a;\r\n\r\n\r\nvar initialState = {\r\n    value: 0,\r\n    recvValue: 0,\r\n};\r\nvar tempSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\r\n    name: \"temp\",\r\n    initialState: initialState,\r\n    reducers: {\r\n        increment: function (state) {\r\n            state.value += 1;\r\n            Object(_Socket__WEBPACK_IMPORTED_MODULE_1__[\"sendChatAction\"])(state.value.toString());\r\n        },\r\n        incrementByAmount: function (state, action) {\r\n            state.value += action.payload;\r\n        },\r\n        incremantRecvValue: function (state, action) {\r\n            console.log(\"incremantRecvValue:\" + action.payload);\r\n            state.recvValue = action.payload;\r\n        },\r\n    },\r\n});\r\nvar increment = (_a = tempSlice.actions, _a.increment), incrementByAmount = _a.incrementByAmount, incremantRecvValue = _a.incremantRecvValue;\r\n// 非同期テンプレート\r\nvar incrementAsync = function (amount) { return function (dispatch) {\r\n    setTimeout(function () {\r\n        dispatch(incrementByAmount(amount));\r\n    }, 1000);\r\n}; };\r\nvar selectCount = function (state) { return state.temp.value; };\r\nvar selectRecvCount = function (state) { return state.temp.recvValue; };\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (tempSlice.reducer);\r\n\n\n//# sourceURL=webpack:///./src/features/temp/tempSlice.ts?");

/***/ })

})