webpackHotUpdate("main",{

/***/ "./src/features/Chat/Chat.tsx":
/*!************************************!*\
  !*** ./src/features/Chat/Chat.tsx ***!
  \************************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Chat\", function() { return Chat; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Socket */ \"./src/Socket.tsx\");\n/* harmony import */ var _top_topSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../top/topSlice */ \"./src/features/top/topSlice.ts\");\n/* harmony import */ var _chatSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatSlice */ \"./src/features/Chat/chatSlice.ts\");\n/* harmony import */ var _ChatStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatStyle */ \"./src/features/Chat/ChatStyle.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction Chat() {\r\n    var classes = Object(_ChatStyle__WEBPACK_IMPORTED_MODULE_6__[\"chatStyles\"])();\r\n    // Chat画面が呼ばれる前に値を設定\r\n    var name = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_top_topSlice__WEBPACK_IMPORTED_MODULE_4__[\"selectName\"]);\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"), text = _a[0], setText = _a[1];\r\n    // signIn()のレスポンスを設定\r\n    var signInMessage = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_chatSlice__WEBPACK_IMPORTED_MODULE_5__[\"selectSignInMessage\"]);\r\n    // チャット内容を設定\r\n    var messageList = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) { return state.chat.messageList; });\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        console.log(\"signIn\");\r\n        Object(_Socket__WEBPACK_IMPORTED_MODULE_3__[\"signIn\"])(name);\r\n    }, []);\r\n    var addMessage = function () {\r\n        if (signInMessage == null)\r\n            return;\r\n        console.log(\"auth: \" + signInMessage.auth);\r\n        console.log(\"name: \" + signInMessage.name);\r\n        console.log(\"uuid: \" + signInMessage.uuid);\r\n        console.log(\"message: \" + signInMessage.message);\r\n        Object(_Socket__WEBPACK_IMPORTED_MODULE_3__[\"sendChat\"])({\r\n            auth: signInMessage.auth,\r\n            name: signInMessage.name,\r\n            uuid: signInMessage.uuid,\r\n            message: text,\r\n        });\r\n    };\r\n    var ShowMessegeList = function () {\r\n        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"List\"], { className: classes.root }, messageList.map(function (message, index) {\r\n            return comment(message, index);\r\n        })));\r\n    };\r\n    var comment = function (message, index) {\r\n        if (message.uuid == null) {\r\n            // 不正なメッセージ\r\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { key: index }, \"\\u4E0D\\u6B63\\u306A\\u30C7\\u30FC\\u30BF\");\r\n        }\r\n        else {\r\n            if (message.message == null) {\r\n                // ログイン\r\n                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { key: index },\r\n                    message.name,\r\n                    \"\\u304C\\u30ED\\u30B0\\u30A4\\u30F3\\u3057\\u307E\\u3057\\u305F\\u3002\");\r\n            }\r\n            else if (signInMessage.uuid == message.uuid) {\r\n                // 自分\r\n                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { key: index },\r\n                    \"\\u81EA\\u5206,\",\r\n                    message.name,\r\n                    \", \",\r\n                    message.message));\r\n            }\r\n            else {\r\n                // 自分以外\r\n                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { key: index },\r\n                    \"\\u81EA\\u5206\\u4EE5\\u5916,\",\r\n                    message.name,\r\n                    \", \",\r\n                    message.message));\r\n            }\r\n        }\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], { component: \"main\", maxWidth: \"sm\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShowMessegeList, null),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], { value: text, onChange: function (e) { return setText(e.target.value); } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], { container: true, className: classes.root, spacing: 2 },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], { item: true, xs: 12 },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], { container: true, justify: \"center\", spacing: 3 }))),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], { type: \"submit\", fullWidth: true, variant: \"contained\", color: \"primary\", onClick: addMessage }, \"send\"))));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/features/Chat/Chat.tsx?");

/***/ }),

/***/ "./src/features/app/App.tsx":
/*!**********************************!*\
  !*** ./src/features/app/App.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Socket */ \"./src/Socket.tsx\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chat/Chat */ \"./src/features/Chat/Chat.tsx\");\n/* harmony import */ var _top_Top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../top/Top */ \"./src/features/top/Top.tsx\");\n/* harmony import */ var _appSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appSlice */ \"./src/features/app/appSlice.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction App() {\r\n    var displayNo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_appSlice__WEBPACK_IMPORTED_MODULE_5__[\"selectDisplayNo\"]);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null,\r\n        displayNo == _appSlice__WEBPACK_IMPORTED_MODULE_5__[\"displayList\"].SignIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_top_Top__WEBPACK_IMPORTED_MODULE_4__[\"Top\"], null),\r\n        displayNo == _appSlice__WEBPACK_IMPORTED_MODULE_5__[\"displayList\"].Chat && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chat_Chat__WEBPACK_IMPORTED_MODULE_3__[\"Chat\"], null),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\r\n\n\n//# sourceURL=webpack:///./src/features/app/App.tsx?");

/***/ })

})