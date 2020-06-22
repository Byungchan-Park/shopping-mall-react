(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\list.js"],{

/***/ "./components/card/product.js":
/*!************************************!*\
  !*** ./components/card/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\card\\product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ProductCardComp = function ProductCardComp(_ref) {
  var name = _ref.name,
      price = _ref.price,
      clickCB = _ref.clickCB,
      id = _ref.id,
      selectedCard = _ref.selectedCard;
  return __jsx("div", {
    className: "product-card" + (id === selectedCard ? " clicked" : ""),
    onClick: function onClick() {
      return clickCB();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "../../static/images/default.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "product-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, price)));
};

_c = ProductCardComp;
/* harmony default export */ __webpack_exports__["default"] = (ProductCardComp);

var _c;

$RefreshReg$(_c, "ProductCardComp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/form/button.js":
/*!***********************************!*\
  !*** ./components/form/button.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\form\\button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ButtonComp = function ButtonComp(_ref) {
  var children = _ref.children,
      btnColor = _ref.btnColor,
      clickCB = _ref.clickCB;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
    className: "btn " + btnColor,
    onClick: function onClick() {
      return clickCB();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, children));
};

_c = ButtonComp;
/* harmony default export */ __webpack_exports__["default"] = (ButtonComp);

var _c;

$RefreshReg$(_c, "ButtonComp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/form/input.js":
/*!**********************************!*\
  !*** ./components/form/input.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\form\\input.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var InputComp = function InputComp(_ref) {
  _s();

  var label = _ref.label,
      type = _ref.type,
      name = _ref.name,
      changeCB = _ref.changeCB,
      className = _ref.className,
      value = _ref.value;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      iptVal = _useState[0],
      setIptVal = _useState[1];

  var handleChange = function handleChange(e) {
    setIptVal(e.target.value);
    changeCB(e.target.name, e.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, label), __jsx("input", {
    className: className,
    type: type,
    name: name,
    value: value,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })));
};

_s(InputComp, "ub8T0jG3h3BNiT0FidhnRRHf/f8=");

_c = InputComp;
/* harmony default export */ __webpack_exports__["default"] = (InputComp);

var _c;

$RefreshReg$(_c, "InputComp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/layout/footer.js":
/*!*************************************!*\
  !*** ./components/layout/footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\layout\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var FooterComp = function FooterComp() {
  return __jsx("footer", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, "\uC5EC\uAE30 \uD478\uD130\uC784.");
};

_c = FooterComp;
/* harmony default export */ __webpack_exports__["default"] = (FooterComp);

var _c;

$RefreshReg$(_c, "FooterComp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/layout/header.js":
/*!*************************************!*\
  !*** ./components/layout/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\layout\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var HeaderComp = function HeaderComp() {
  return __jsx("header", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, "\uC5EC\uAE30 \uD5E4\uB354\uC784.");
};

_c = HeaderComp;
/* harmony default export */ __webpack_exports__["default"] = (HeaderComp);

var _c;

$RefreshReg$(_c, "HeaderComp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/modal/confirm.js":
/*!*************************************!*\
  !*** ./components/modal/confirm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\modal\\confirm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ConfirmModalComp = function ConfirmModalComp(_ref) {
  _s();

  var show = _ref.show,
      mainText = _ref.mainText,
      subText = _ref.subText,
      onCloseCB = _ref.onCloseCB,
      onConfirmCB = _ref.onConfirmCB;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (show) {
      document.body.style.overflow = "hidden"; // 스크롤 안됨.
    } else {
      document.body.style.overflow = "auto"; // 스크롤됨.
    }
  }, [show]);
  return __jsx("section", {
    className: "modal-wrapper" + (show ? " on" : " off"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "text-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, mainText), __jsx("p", {
    className: "sub",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, subText)), __jsx("div", {
    className: "btn-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "btn-confirm",
    onClick: function onClick() {
      return onConfirmCB();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "\uD655\uC778"), __jsx("a", {
    className: "btn-cancel",
    onClick: function onClick() {
      return onCloseCB();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "\uCDE8\uC18C"))));
};

_s(ConfirmModalComp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = ConfirmModalComp;
/* harmony default export */ __webpack_exports__["default"] = (ConfirmModalComp);

var _c;

$RefreshReg$(_c, "ConfirmModalComp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flist&absolutePagePath=C%3A%5CUsers%5Cjspar%5CDesktop%5Cshopping-list-functionality%5Cpages%5Clist.js!./":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flist&absolutePagePath=C%3A%5CUsers%5Cjspar%5CDesktop%5Cshopping-list-functionality%5Cpages%5Clist.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/list",
      function () {
        return __webpack_require__(/*! ./pages/list.js */ "./pages/list.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/header */ "./components/layout/header.js");
/* harmony import */ var _components_layout_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/footer */ "./components/layout/footer.js");
/* harmony import */ var _components_form_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/input */ "./components/form/input.js");
/* harmony import */ var _components_form_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form/button */ "./components/form/button.js");
/* harmony import */ var _components_card_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/card/product */ "./components/card/product.js");
/* harmony import */ var _components_modal_confirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modal/confirm */ "./components/modal/confirm.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\pages\\list.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var ProductListPage = function ProductListPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    idx: 1,
    name: "새우깡",
    price: "1500"
  }, {
    idx: 2,
    name: "고구마깡",
    price: "2000"
  }, {
    idx: 3,
    name: "감자깡",
    price: "1800"
  }, {
    idx: 4,
    name: "다이제스티",
    price: "10000"
  }, {
    idx: 5,
    name: "초코파이",
    price: "5000"
  }]),
      productList = _useState[0],
      setProductList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      searchVal = _useState2[0],
      setSearchVal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: "",
    price: ""
  }),
      productInfo = _useState3[0],
      setProductInfo = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      selectedCard = _useState4[0],
      setSelectedCard = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      selectedBtn = _useState5[0],
      setSelectedBtn = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showConfirm = _useState6[0],
      setShowConfirm = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      mainText = _useState7[0],
      setMainText = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      subText = _useState8[0],
      setSubText = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    id: 1,
    btnName: "등 록",
    btnColor: "btn-black",
    clickCB: function clickCB(id) {
      handleShowConfirm("등록하시겠습니까?", "새로 추가됩니다.", id);
    },
    confirmCB: function confirmCB(selectedCard, productInfo) {
      onCreate(productInfo);
    }
  }, {
    id: 2,
    btnName: "수 정",
    btnColor: "btn-black",
    clickCB: function clickCB(id) {
      handleShowConfirm("수정하시겠습니까?", "선택한 카드가 수정됩니다.", id);
    },
    confirmCB: function confirmCB(selectedCard, productInfo) {
      onRevise(selectedCard, productInfo);
    }
  }, {
    id: 3,
    btnName: "삭 제",
    btnColor: "btn-black",
    clickCB: function clickCB(id) {
      handleShowConfirm("삭제하시겠습니까?", "영구 삭제됩니다.", id);
    },
    confirmCB: function confirmCB(selectedCard) {
      onDelete(selectedCard);
    }
  }]),
      buttonList = _useState9[0],
      setButtonList = _useState9[1]; // ! 등록, 수정, 삭제 버튼
  // 등록, 수정, 삭제 버튼의 콜백함수


  var handleShowConfirm = function handleShowConfirm(main, sub, id) {
    setMainText(main);
    setSubText(sub);
    setSelectedBtn(id); // selectedBtn에 클릭한 버튼의 id를 state로 저장한다.
  }; // ! confirm 창의 버튼
  // confirm 창의 확인 버튼을 눌렀을 때


  var handleConfirmBtn = function handleConfirmBtn() {
    buttonList.forEach(function (button) {
      if (button.id === selectedBtn) {
        button.confirmCB(selectedCard, productInfo);
      }
    });
  }; // confirm 창의 취소 버튼을 눌렀을 때


  var handleCloseBtn = function handleCloseBtn() {
    // text들 초기화
    setMainText("");
    setSubText(""); // 선택한 카드 state 초기화

    setSelectedCard(); // confirm 창이 닫힌다.

    setShowConfirm(false);
  }; // ! Search Input
  // Search input의 value를 저장해둠.


  var handleSearchInput = function handleSearchInput(name, value) {
    setSearchVal(value); // searchVal 하고 productList 안에 있는 item.name을 비교
    // filter method 활용
    // 검색한 문자열이 존재하는지 하지 않는지 true로 반환값이 나올 수 있도록(String.prototype.includes() 활용)

    /* setProductList(
      productList.filter((item, index) => item.name.includes(value))
    ); */
    // 이렇게 구현하면 문제가 있음. render의 body 부분에서 productList에 filter를 적용.
    // array.filter((item, index) => item.indexOf('특정스트링') === index)
  }; // 등록될 상품의 다음 id 지정


  var nextId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(6); // ! 상품명, 가격 입력하는 input
  // 상품명, 가격 input의 value를 createProductInfo state에 저장해둠.

  var handleChangeInput = function handleChangeInput(name, value) {
    setProductInfo(_objectSpread(_objectSpread({}, productInfo), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value)));
  }; // ! 등록 기능


  var onCreate = function onCreate(productInfo) {
    var newProduct = {
      idx: nextId.current,
      name: productInfo.name,
      price: productInfo.price
    };
    setProductList(productList.concat(newProduct)); // 등록 후 다음 상품 추가를 위해 id 가 1씩 증가

    nextId.current += 1; // 초기화

    setProductInfo({
      name: "",
      price: ""
    });
    setShowConfirm(false);
    setMainText("");
    setSubText("");
    setSelectedCard();
    setSelectedBtn();
  }; // ! 카드 선택


  var handleIsClicked = function handleIsClicked(idx) {
    alert("선택되었습니다."); // 선택된 카드의 id 를 selectedCard state에 저장.

    setSelectedCard(idx);
  }; // ! 수정 기능


  var onRevise = function onRevise(selectedCard, productInfo) {
    // 수정 로직
    setProductList(productList.map(function (item) {
      return item.idx === selectedCard ? _objectSpread(_objectSpread({}, item), {}, {
        name: productInfo.name,
        price: productInfo.price
      }) : item;
    })); // 초기화

    setProductInfo({
      name: "",
      price: ""
    });
    setShowConfirm(false);
    setMainText("");
    setSubText("");
    setSelectedCard();
    setSelectedBtn();
  }; // ! 삭제 기능


  var onDelete = function onDelete(selectedCard) {
    console.log("삭제되었습니다.");
    setProductList(productList.filter(function (item) {
      return item.idx !== selectedCard;
    })); // idx의 값은 number이므로 문자열이 아님.

    setShowConfirm(false);
    setMainText("");
    setSubText("");
    setSelectedCard();
    setSelectedBtn();
  }; // ! confirm 창이 화면에 뜬다.


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (mainText) {
      setShowConfirm(true);
    }
  }, [mainText, subText]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_layout_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "list-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, __jsx(_components_form_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "\uAC80\uC0C9",
    type: "text",
    name: "search",
    changeCB: handleSearchInput,
    value: searchVal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }), __jsx(_components_form_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "product-name-input-group",
    label: "\uC0C1\uD488\uBA85",
    type: "text",
    name: "name",
    changeCB: handleChangeInput,
    value: productInfo.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }), __jsx(_components_form_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "\uAC00\uACA9",
    type: "text",
    name: "price",
    changeCB: handleChangeInput,
    value: productInfo.price,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }
  }), buttonList.map(function (item) {
    return __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      btnColor: item.btnColor,
      clickCB: function clickCB() {
        return item.clickCB(item.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 15
      }
    }, item.btnName);
  })), __jsx("div", {
    className: "con-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, productList.filter(function (item) {
    return item.name.indexOf(searchVal) !== -1;
  }).map(function (item, index) {
    return __jsx(_components_card_product__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      id: item.idx,
      name: item.name,
      price: item.price,
      selectedCard: selectedCard,
      clickCB: function clickCB() {
        return handleIsClicked(item.idx);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 19
      }
    });
  }))))), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }
  }), __jsx(_components_modal_confirm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: showConfirm,
    mainText: mainText,
    subText: subText,
    onCloseCB: handleCloseBtn,
    onConfirmCB: handleConfirmBtn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }
  }));
};

_s(ProductListPage, "+g8BWElydP9h+XOXWMe87aYyeD4=");

_c = ProductListPage;
/* harmony default export */ __webpack_exports__["default"] = (ProductListPage);

var _c;

$RefreshReg$(_c, "ProductListPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/*!***************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Flist&absolutePagePath=C%3A%5CUsers%5Cjspar%5CDesktop%5Cshopping-list-functionality%5Cpages%5Clist.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Flist&absolutePagePath=C%3A%5CUsers%5Cjspar%5CDesktop%5Cshopping-list-functionality%5Cpages%5Clist.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flist&absolutePagePath=C%3A%5CUsers%5Cjspar%5CDesktop%5Cshopping-list-functionality%5Cpages%5Clist.js!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybS9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvY29uZmlybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbGlzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIiJdLCJuYW1lcyI6WyJQcm9kdWN0Q2FyZENvbXAiLCJuYW1lIiwicHJpY2UiLCJjbGlja0NCIiwiaWQiLCJzZWxlY3RlZENhcmQiLCJCdXR0b25Db21wIiwiY2hpbGRyZW4iLCJidG5Db2xvciIsIklucHV0Q29tcCIsImxhYmVsIiwidHlwZSIsImNoYW5nZUNCIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJ1c2VTdGF0ZSIsImlwdFZhbCIsInNldElwdFZhbCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJGb290ZXJDb21wIiwiSGVhZGVyQ29tcCIsIkNvbmZpcm1Nb2RhbENvbXAiLCJzaG93IiwibWFpblRleHQiLCJzdWJUZXh0Iiwib25DbG9zZUNCIiwib25Db25maXJtQ0IiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiUHJvZHVjdExpc3RQYWdlIiwiaWR4IiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInNlYXJjaFZhbCIsInNldFNlYXJjaFZhbCIsInByb2R1Y3RJbmZvIiwic2V0UHJvZHVjdEluZm8iLCJzZXRTZWxlY3RlZENhcmQiLCJzZWxlY3RlZEJ0biIsInNldFNlbGVjdGVkQnRuIiwic2hvd0NvbmZpcm0iLCJzZXRTaG93Q29uZmlybSIsInNldE1haW5UZXh0Iiwic2V0U3ViVGV4dCIsImJ0bk5hbWUiLCJoYW5kbGVTaG93Q29uZmlybSIsImNvbmZpcm1DQiIsIm9uQ3JlYXRlIiwib25SZXZpc2UiLCJvbkRlbGV0ZSIsImJ1dHRvbkxpc3QiLCJzZXRCdXR0b25MaXN0IiwibWFpbiIsInN1YiIsImhhbmRsZUNvbmZpcm1CdG4iLCJmb3JFYWNoIiwiYnV0dG9uIiwiaGFuZGxlQ2xvc2VCdG4iLCJoYW5kbGVTZWFyY2hJbnB1dCIsIm5leHRJZCIsInVzZVJlZiIsImhhbmRsZUNoYW5nZUlucHV0IiwibmV3UHJvZHVjdCIsImN1cnJlbnQiLCJjb25jYXQiLCJoYW5kbGVJc0NsaWNrZWQiLCJhbGVydCIsIm1hcCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwiaW5kZXhPZiIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBZ0Q7QUFBQSxNQUE3Q0MsSUFBNkMsUUFBN0NBLElBQTZDO0FBQUEsTUFBdkNDLEtBQXVDLFFBQXZDQSxLQUF1QztBQUFBLE1BQWhDQyxPQUFnQyxRQUFoQ0EsT0FBZ0M7QUFBQSxNQUF2QkMsRUFBdUIsUUFBdkJBLEVBQXVC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V0FDSCxNQUFDLGdFQUFEO0FBQ0UsU0FBRyxFQUFFQSxLQURQO0FBRUUsUUFBRSxFQUFFTCxJQUFJLENBQUN0QyxHQUZYO0FBR0UsVUFBSSxFQUFFc0MsSUFBSSxDQUFDeEUsSUFIYjtBQUlFLFdBQUssRUFBRXdFLElBQUksQ0FBQ3ZFLEtBSmQ7QUFLRSxrQkFBWSxFQUFFRyxZQUxoQjtBQU1FLGFBQU8sRUFBRTtBQUFBLGVBQU1pRSxlQUFlLENBQUNHLElBQUksQ0FBQ3RDLEdBQU4sQ0FBckI7QUFBQSxPQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERztBQUFBLEdBRk4sQ0FESCxDQURGLENBakNGLENBREYsQ0FGRixFQXNERSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0REYsRUF1REUsTUFBQyxpRUFBRDtBQUNFLFFBQUksRUFBRVUsV0FEUjtBQUVFLFlBQVEsRUFBRXBCLFFBRlo7QUFHRSxXQUFPLEVBQUVDLE9BSFg7QUFJRSxhQUFTLEVBQUVvQyxjQUpiO0FBS0UsZUFBVyxFQUFFSCxnQkFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkRGLENBREY7QUFpRUQsQ0FqUEQ7O0dBQU16QixlOztLQUFBQSxlO0FBbVBTQSw4RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1BBLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdENhcmRDb21wID0gKHsgbmFtZSwgcHJpY2UsIGNsaWNrQ0IsIGlkLCBzZWxlY3RlZENhcmQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17XCJwcm9kdWN0LWNhcmRcIiArIChpZCA9PT0gc2VsZWN0ZWRDYXJkID8gXCIgY2xpY2tlZFwiIDogXCJcIil9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrQ0IoKX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVmYXVsdC5zdmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57bmFtZX08L3A+XHJcbiAgICAgICAgPHA+e3ByaWNlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmRDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBCdXR0b25Db21wID0gKHsgY2hpbGRyZW4sIGJ0bkNvbG9yLCBjbGlja0NCIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIFwiICsgYnRuQ29sb3J9IG9uQ2xpY2s9eygpID0+IGNsaWNrQ0IoKX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Db21wO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbnB1dENvbXAgPSAoeyBsYWJlbCwgdHlwZSwgbmFtZSwgY2hhbmdlQ0IsIGNsYXNzTmFtZSwgdmFsdWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtpcHRWYWwsIHNldElwdFZhbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0SXB0VmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNoYW5nZUNCKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsPntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb290ZXJDb21wID0gKCkgPT4ge1xyXG4gIHJldHVybiA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPuyXrOq4sCDtkbjthLDsnoQuPC9mb290ZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyQ29tcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGVhZGVyQ29tcCA9ICgpID0+IHtcclxuICByZXR1cm4gPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj7sl6zquLAg7Zek642U7J6ELjwvaGVhZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNvbXA7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29uZmlybU1vZGFsQ29tcCA9ICh7XHJcbiAgc2hvdyxcclxuICBtYWluVGV4dCxcclxuICBzdWJUZXh0LFxyXG4gIG9uQ2xvc2VDQixcclxuICBvbkNvbmZpcm1DQixcclxufSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2hvdykge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjsgLy8g7Iqk7YGs66GkIOyViOuQqC5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjsgLy8g7Iqk7YGs66Gk65CoLlxyXG4gICAgfVxyXG4gIH0sIFtzaG93XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17XCJtb2RhbC13cmFwcGVyXCIgKyAoc2hvdyA/IFwiIG9uXCIgOiBcIiBvZmZcIil9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncm91cFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFpblwiPnttYWluVGV4dH08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJcIj57c3ViVGV4dH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1jb25maXJtXCIgb25DbGljaz17KCkgPT4gb25Db25maXJtQ0IoKX0+XHJcbiAgICAgICAgICAgIO2ZleyduFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLWNhbmNlbFwiIG9uQ2xpY2s9eygpID0+IG9uQ2xvc2VDQigpfT5cclxuICAgICAgICAgICAg7Leo7IaMXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maXJtTW9kYWxDb21wO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2xpc3RcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxqc3BhclxcXFxEZXNrdG9wXFxcXHNob3BwaW5nLWxpc3QtZnVuY3Rpb25hbGl0eVxcXFxwYWdlc1xcXFxsaXN0LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSAqLyBcImRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1XCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9mb290ZXJcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vaW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtL2J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkL3Byb2R1Y3RcIjtcclxuaW1wb3J0IENvbmZpcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWwvY29uZmlybVwiO1xyXG5cclxuY29uc3QgUHJvZHVjdExpc3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBpZHg6IDEsIG5hbWU6IFwi7IOI7Jqw6rmhXCIsIHByaWNlOiBcIjE1MDBcIiB9LFxyXG4gICAgeyBpZHg6IDIsIG5hbWU6IFwi6rOg6rWs66eI6rmhXCIsIHByaWNlOiBcIjIwMDBcIiB9LFxyXG4gICAgeyBpZHg6IDMsIG5hbWU6IFwi6rCQ7J6Q6rmhXCIsIHByaWNlOiBcIjE4MDBcIiB9LFxyXG4gICAgeyBpZHg6IDQsIG5hbWU6IFwi64uk7J207KCc7Iqk7YuwXCIsIHByaWNlOiBcIjEwMDAwXCIgfSxcclxuICAgIHsgaWR4OiA1LCBuYW1lOiBcIuy0iOy9lO2MjOydtFwiLCBwcmljZTogXCI1MDAwXCIgfSxcclxuICBdKTtcclxuICBjb25zdCBbc2VhcmNoVmFsLCBzZXRTZWFyY2hWYWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3RJbmZvLCBzZXRQcm9kdWN0SW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcHJpY2U6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2FyZCwgc2V0U2VsZWN0ZWRDYXJkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQnRuLCBzZXRTZWxlY3RlZEJ0bl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzaG93Q29uZmlybSwgc2V0U2hvd0NvbmZpcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttYWluVGV4dCwgc2V0TWFpblRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1YlRleHQsIHNldFN1YlRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2J1dHRvbkxpc3QsIHNldEJ1dHRvbkxpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgYnRuTmFtZTogXCLrk7Eg66GdXCIsXHJcbiAgICAgIGJ0bkNvbG9yOiBcImJ0bi1ibGFja1wiLFxyXG4gICAgICBjbGlja0NCOiAoaWQpID0+IHtcclxuICAgICAgICBoYW5kbGVTaG93Q29uZmlybShcIuuTseuhne2VmOyLnOqyoOyKteuLiOq5jD9cIiwgXCLsg4jroZwg7LaU6rCA65Cp64uI64ukLlwiLCBpZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpcm1DQjogKHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgICAgICBvbkNyZWF0ZShwcm9kdWN0SW5mbyk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgYnRuTmFtZTogXCLsiJgg7KCVXCIsXHJcbiAgICAgIGJ0bkNvbG9yOiBcImJ0bi1ibGFja1wiLFxyXG4gICAgICBjbGlja0NCOiAoaWQpID0+IHtcclxuICAgICAgICBoYW5kbGVTaG93Q29uZmlybShcIuyImOygle2VmOyLnOqyoOyKteuLiOq5jD9cIiwgXCLshKDtg53tlZwg7Lm065Oc6rCAIOyImOygleuQqeuLiOuLpC5cIiwgaWQpO1xyXG4gICAgICB9LFxyXG4gICAgICBjb25maXJtQ0I6IChzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICAgICAgb25SZXZpc2Uoc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbyk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgYnRuTmFtZTogXCLsgq0g7KCcXCIsXHJcbiAgICAgIGJ0bkNvbG9yOiBcImJ0bi1ibGFja1wiLFxyXG4gICAgICBjbGlja0NCOiAoaWQpID0+IHtcclxuICAgICAgICBoYW5kbGVTaG93Q29uZmlybShcIuyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cIiwgXCLsmIHqtawg7IKt7KCc65Cp64uI64ukLlwiLCBpZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpcm1DQjogKHNlbGVjdGVkQ2FyZCkgPT4ge1xyXG4gICAgICAgIG9uRGVsZXRlKHNlbGVjdGVkQ2FyZCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICAvLyAhIOuTseuhnSwg7IiY7KCVLCDsgq3soJwg67KE7Yq8XHJcbiAgLy8g65Ox66GdLCDsiJjsoJUsIOyCreygnCDrsoTtirzsnZgg7L2c67Cx7ZWo7IiYXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbmZpcm0gPSAobWFpbiwgc3ViLCBpZCkgPT4ge1xyXG4gICAgc2V0TWFpblRleHQobWFpbik7XHJcbiAgICBzZXRTdWJUZXh0KHN1Yik7XHJcbiAgICBzZXRTZWxlY3RlZEJ0bihpZCk7XHJcbiAgICAvLyBzZWxlY3RlZEJ0buyXkCDtgbTrpq3tlZwg67KE7Yq87J2YIGlk66W8IHN0YXRl66GcIOyggOyepe2VnOuLpC5cclxuICB9O1xyXG5cclxuICAvLyAhIGNvbmZpcm0g7LC97J2YIOuyhO2KvFxyXG4gIC8vIGNvbmZpcm0g7LC97J2YIO2ZleyduCDrsoTtirzsnYQg64iM66CA7J2EIOuVjFxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1CdG4gPSAoKSA9PiB7XHJcbiAgICBidXR0b25MaXN0LmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICBpZiAoYnV0dG9uLmlkID09PSBzZWxlY3RlZEJ0bikge1xyXG4gICAgICAgIGJ1dHRvbi5jb25maXJtQ0Ioc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbmZpcm0g7LC97J2YIOy3qOyGjCDrsoTtirzsnYQg64iM66CA7J2EIOuVjFxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQnRuID0gKCkgPT4ge1xyXG4gICAgLy8gdGV4dOuTpCDstIjquLDtmZRcclxuICAgIHNldE1haW5UZXh0KFwiXCIpO1xyXG4gICAgc2V0U3ViVGV4dChcIlwiKTtcclxuICAgIC8vIOyEoO2Dne2VnCDsubTrk5wgc3RhdGUg7LSI6riw7ZmUXHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIC8vIGNvbmZpcm0g7LC97J20IOuLq+2ejOuLpC5cclxuICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICAvLyAhIFNlYXJjaCBJbnB1dFxyXG4gIC8vIFNlYXJjaCBpbnB1dOydmCB2YWx1ZeulvCDsoIDsnqXtlbTrkaAuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoSW5wdXQgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldFNlYXJjaFZhbCh2YWx1ZSk7XHJcbiAgICAvLyBzZWFyY2hWYWwg7ZWY6rOgIHByb2R1Y3RMaXN0IOyViOyXkCDsnojripQgaXRlbS5uYW1l7J2EIOu5hOq1kFxyXG4gICAgLy8gZmlsdGVyIG1ldGhvZCDtmZzsmqlcclxuICAgIC8vIOqygOyDie2VnCDrrLjsnpDsl7TsnbQg7KG07J6s7ZWY64qU7KeAIO2VmOyngCDslYrripTsp4AgdHJ1ZeuhnCDrsJjtmZjqsJLsnbQg64KY7JisIOyImCDsnojrj4TroZ0oU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcygpIO2ZnOyaqSlcclxuICAgIC8qIHNldFByb2R1Y3RMaXN0KFxyXG4gICAgICBwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpdGVtLm5hbWUuaW5jbHVkZXModmFsdWUpKVxyXG4gICAgKTsgKi9cclxuICAgIC8vIOydtOugh+qyjCDqtaztmITtlZjrqbQg66y47KCc6rCAIOyeiOydjC4gcmVuZGVy7J2YIGJvZHkg67aA67aE7JeQ7IScIHByb2R1Y3RMaXN07JeQIGZpbHRlcuulvCDsoIHsmqkuXHJcblxyXG4gICAgLy8gYXJyYXkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaXRlbS5pbmRleE9mKCftirnsoJXsiqTtirjrp4EnKSA9PT0gaW5kZXgpXHJcbiAgfTtcclxuXHJcbiAgLy8g65Ox66Gd65CgIOyDge2SiOydmCDri6TsnYwgaWQg7KeA7KCVXHJcbiAgY29uc3QgbmV4dElkID0gdXNlUmVmKDYpO1xyXG5cclxuICAvLyAhIOyDge2SiOuqhSwg6rCA6rKpIOyeheugpe2VmOuKlCBpbnB1dFxyXG4gIC8vIOyDge2SiOuqhSwg6rCA6rKpIGlucHV07J2YIHZhbHVl66W8IGNyZWF0ZVByb2R1Y3RJbmZvIHN0YXRl7JeQIOyggOyepe2VtOuRoC5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdEluZm8oeyAuLi5wcm9kdWN0SW5mbywgW25hbWVdOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICAvLyAhIOuTseuhnSDquLDriqVcclxuICBjb25zdCBvbkNyZWF0ZSA9IChwcm9kdWN0SW5mbykgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgaWR4OiBuZXh0SWQuY3VycmVudCxcclxuICAgICAgbmFtZTogcHJvZHVjdEluZm8ubmFtZSxcclxuICAgICAgcHJpY2U6IHByb2R1Y3RJbmZvLnByaWNlLFxyXG4gICAgfTtcclxuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RMaXN0LmNvbmNhdChuZXdQcm9kdWN0KSk7XHJcbiAgICAvLyDrk7HroZ0g7ZuEIOuLpOydjCDsg4Htkogg7LaU6rCA66W8IOychO2VtCBpZCDqsIAgMeyUqSDspp3qsIBcclxuICAgIG5leHRJZC5jdXJyZW50ICs9IDE7XHJcbiAgICAvLyDstIjquLDtmZRcclxuICAgIHNldFByb2R1Y3RJbmZvKHsgbmFtZTogXCJcIiwgcHJpY2U6IFwiXCIgfSk7XHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIHNldFNlbGVjdGVkQnRuKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISDsubTrk5wg7ISg7YOdXHJcbiAgY29uc3QgaGFuZGxlSXNDbGlja2VkID0gKGlkeCkgPT4ge1xyXG4gICAgYWxlcnQoXCLshKDtg53rkJjsl4jsirXri4jri6QuXCIpO1xyXG4gICAgLy8g7ISg7YOd65CcIOy5tOuTnOydmCBpZCDrpbwgc2VsZWN0ZWRDYXJkIHN0YXRl7JeQIOyggOyepS5cclxuICAgIHNldFNlbGVjdGVkQ2FyZChpZHgpO1xyXG4gIH07XHJcblxyXG4gIC8vICEg7IiY7KCVIOq4sOuKpVxyXG4gIGNvbnN0IG9uUmV2aXNlID0gKHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgIC8vIOyImOyglSDroZzsp4FcclxuICAgIHNldFByb2R1Y3RMaXN0KFxyXG4gICAgICBwcm9kdWN0TGlzdC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgaXRlbS5pZHggPT09IHNlbGVjdGVkQ2FyZFxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0SW5mby5uYW1lLFxyXG4gICAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0SW5mby5wcmljZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgOiBpdGVtXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICAvLyDstIjquLDtmZRcclxuICAgIHNldFByb2R1Y3RJbmZvKHsgbmFtZTogXCJcIiwgcHJpY2U6IFwiXCIgfSk7XHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIHNldFNlbGVjdGVkQnRuKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISDsgq3soJwg6riw64qlXHJcbiAgY29uc3Qgb25EZWxldGUgPSAoc2VsZWN0ZWRDYXJkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIuyCreygnOuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWR4ICE9PSBzZWxlY3RlZENhcmQpKTtcclxuICAgIC8vIGlkeOydmCDqsJLsnYAgbnVtYmVy7J2066+A66GcIOusuOyekOyXtOydtCDslYTri5guXHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIHNldFNlbGVjdGVkQnRuKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISBjb25maXJtIOywveydtCDtmZTrqbTsl5Ag65ys64ukLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWFpblRleHQpIHtcclxuICAgICAgc2V0U2hvd0NvbmZpcm0odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW21haW5UZXh0LCBzdWJUZXh0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uLWhlYWRcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLqsoDsg4lcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lLWlucHV0LWdyb3VwXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuyDge2SiOuqhVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RJbmZvLm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi6rCA6rKpXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RJbmZvLnByaWNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7YnV0dG9uTGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBidG5Db2xvcj17aXRlbS5idG5Db2xvcn1cclxuICAgICAgICAgICAgICAgIGNsaWNrQ0I9eygpID0+IGl0ZW0uY2xpY2tDQihpdGVtLmlkKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5idG5OYW1lfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb24tYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICB7cHJvZHVjdExpc3RcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubmFtZS5pbmRleE9mKHNlYXJjaFZhbCkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkeH1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXJkPXtzZWxlY3RlZENhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDQj17KCkgPT4gaGFuZGxlSXNDbGlja2VkKGl0ZW0uaWR4KX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8Q29uZmlybVxyXG4gICAgICAgIHNob3c9e3Nob3dDb25maXJtfVxyXG4gICAgICAgIG1haW5UZXh0PXttYWluVGV4dH1cclxuICAgICAgICBzdWJUZXh0PXtzdWJUZXh0fVxyXG4gICAgICAgIG9uQ2xvc2VDQj17aGFuZGxlQ2xvc2VCdG59XHJcbiAgICAgICAgb25Db25maXJtQ0I9e2hhbmRsZUNvbmZpcm1CdG59XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NTsiXSwic291cmNlUm9vdCI6IiJ9