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

/***/ "./components/modal/alert.js":
/*!***********************************!*\
  !*** ./components/modal/alert.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\modal\\alert.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var AlertModalComp = function AlertModalComp(_ref) {
  _s();

  var show = _ref.show,
      text = _ref.text;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);
  return __jsx("div", {
    className: "alert-wrapper" + (show ? " on" : " off"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "text-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, text)));
};

_s(AlertModalComp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = AlertModalComp;
/* harmony default export */ __webpack_exports__["default"] = (AlertModalComp);

var _c;

$RefreshReg$(_c, "AlertModalComp");

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
/* harmony import */ var _components_modal_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/modal/alert */ "./components/modal/alert.js");


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
    clickCB: function clickCB(id, selectedCard, productInfo) {
      for (var info in productInfo) {
        if (!productInfo[info]) {
          return handleShowAlert("".concat(info, " \uB97C \uC785\uB825\uD558\uC138\uC694."));
        }
      }

      handleShowConfirm("등록하시겠습니까?", "새로 추가됩니다.", id);
    },
    confirmCB: function confirmCB(selectedCard, productInfo) {
      onCreate(productInfo);
    }
  }, {
    id: 2,
    btnName: "수 정",
    btnColor: "btn-black",
    clickCB: function clickCB(id, selectedCard) {
      console.log(selectedCard);

      if (!selectedCard) {
        return handleShowAlert("카드를 선택해주세요.");
      } // 카드 클릭하지 않을 시에 alert창 띄운다.


      handleShowConfirm("수정하시겠습니까?", "선택한 카드가 수정됩니다.", id);
    },
    confirmCB: function confirmCB(selectedCard, productInfo) {
      onRevise(selectedCard, productInfo);
    }
  }, {
    id: 3,
    btnName: "삭 제",
    btnColor: "btn-black",
    clickCB: function clickCB(id, selectedCard) {
      console.log(selectedCard);

      if (!selectedCard) {
        return handleShowAlert("카드를 선택해주세요.");
      } // 카드 클릭하지 않을 시에 alert창 띄운다.


      handleShowConfirm("삭제하시겠습니까?", "영구 삭제됩니다.", id);
    },
    confirmCB: function confirmCB(selectedCard) {
      onDelete(selectedCard);
    }
  }]),
      buttonList = _useState9[0],
      setButtonList = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showAlert = _useState10[0],
      setShowAlert = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      alertText = _useState11[0],
      setAlertText = _useState11[1]; // ! 등록, 수정, 삭제 버튼
  // 등록, 수정, 삭제 버튼의 콜백함수


  var handleShowConfirm = function handleShowConfirm(main, sub, id) {
    // 카드를 선택하지 않았을 경우에(수정, 삭제 버튼에 한해서만)
    setMainText(main);
    setSubText(sub);
    setSelectedBtn(id); // selectedBtn에 클릭한 버튼의 id를 state로 저장한다.
  }; // ! confirm 창의 버튼
  // confirm 창의 확인 버튼을 눌렀을 때


  var handleConfirmBtn = function handleConfirmBtn() {
    setAlertText(false); // 이전에 alert창이 떴을 경우를 대비해서 상태를 false로 바꿔준다.

    buttonList.forEach(function (button) {
      if (button.id === selectedBtn) {
        button.confirmCB(selectedCard, productInfo);
        handleShowAlert("".concat(button.btnName, " \uB418\uC5C8\uC2B5\uB2C8\uB2E4."));
      }
    });
  }; // confirm 창의 취소 버튼을 눌렀을 때


  var handleCloseBtn = function handleCloseBtn() {
    // text들 초기화
    setMainText("");
    setSubText(""); // 선택한 카드 state 초기화

    setSelectedCard(); // confirm 창이 닫힌다.

    setShowConfirm(false);
  }; // alert 창 handling


  var handleShowAlert = function handleShowAlert(text) {
    setAlertText(text);
    setShowAlert(true);
    setTimeout(function () {
      setShowAlert(false);
      setAlertText(null);
    }, 1000);
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
    setSelectedCard(idx); // 선택된 카드의 id 를 selectedCard state에 저장.

    handleShowAlert("선택되었습니다.");
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
      lineNumber: 219,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "list-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
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
      lineNumber: 223,
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
      lineNumber: 230,
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
      lineNumber: 238,
      columnNumber: 13
    }
  }), buttonList.map(function (item) {
    return __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      btnColor: item.btnColor,
      clickCB: function clickCB() {
        return item.clickCB(item.id, selectedCard, productInfo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 15
      }
    }, item.btnName);
  })), __jsx("div", {
    className: "con-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
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
        lineNumber: 259,
        columnNumber: 19
      }
    });
  }))))), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
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
      lineNumber: 273,
      columnNumber: 7
    }
  }), __jsx(_components_modal_alert__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: alertText,
    show: showAlert,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }
  }));
};

_s(ProductListPage, "G3SFvrTK8HWdOHrh2fcQvXde238=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybS9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9jb25maXJtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1Iiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiIl0sIm5hbWVzIjpbIlByb2R1Y3RDYXJkQ29tcCIsIm5hbWUiLCJwcmljZSIsImNsaWNrQ0IiLCJpZCIsInNlbGVjdGVkQ2FyZCIsIkJ1dHRvbkNvbXAiLCJjaGlsZHJlbiIsImJ0bkNvbG9yIiwiSW5wdXRDb21wIiwibGFiZWwiLCJ0eXBlIiwiY2hhbmdlQ0IiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsInVzZVN0YXRlIiwiaXB0VmFsIiwic2V0SXB0VmFsIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIkZvb3RlckNvbXAiLCJIZWFkZXJDb21wIiwiQWxlcnRNb2RhbENvbXAiLCJzaG93IiwidGV4dCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJDb25maXJtTW9kYWxDb21wIiwibWFpblRleHQiLCJzdWJUZXh0Iiwib25DbG9zZUNCIiwib25Db25maXJtQ0IiLCJQcm9kdWN0TGlzdFBhZ2UiLCJpZHgiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0Iiwic2VhcmNoVmFsIiwic2V0U2VhcmNoVmFsIiwicHJvZHVjdEluZm8iLCJzZXRQcm9kdWN0SW5mbyIsInNldFNlbGVjdGVkQ2FyZCIsInNlbGVjdGVkQnRuIiwic2V0U2VsZWN0ZWRCdG4iLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwic2V0TWFpblRleHQiLCJzZXRTdWJUZXh0IiwiYnRuTmFtZSIsImluZm8iLCJoYW5kbGVTaG93QWxlcnQiLCJoYW5kbGVTaG93Q29uZmlybSIsImNvbmZpcm1DQiIsIm9uQ3JlYXRlIiwiY29uc29sZSIsImxvZyIsIm9uUmV2aXNlIiwib25EZWxldGUiLCJidXR0b25MaXN0Iiwic2V0QnV0dG9uTGlzdCIsInNob3dBbGVydCIsInNldFNob3dBbGVydCIsImFsZXJ0VGV4dCIsInNldEFsZXJ0VGV4dCIsIm1haW4iLCJzdWIiLCJoYW5kbGVDb25maXJtQnRuIiwiZm9yRWFjaCIsImJ1dHRvbiIsImhhbmRsZUNsb3NlQnRuIiwic2V0VGltZW91dCIsImhhbmRsZVNlYXJjaElucHV0IiwibmV4dElkIiwidXNlUmVmIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJuZXdQcm9kdWN0IiwiY3VycmVudCIsImNvbmNhdCIsImhhbmRsZUlzQ2xpY2tlZCIsIm1hcCIsIml0ZW0iLCJmaWx0ZXIiLCJpbmRleE9mIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsZUFB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QUFHLEVBQUVBLEtBRFA7QUFFRSxRQUFFLEVBQUVILElBQUksQ0FBQzlDLEdBRlg7QUFHRSxVQUFJLEVBQUU4QyxJQUFJLENBQUNsRixJQUhiO0FBSUUsV0FBSyxFQUFFa0YsSUFBSSxDQUFDakYsS0FKZDtBQUtFLGtCQUFZLEVBQUVHLFlBTGhCO0FBTUUsYUFBTyxFQUFFO0FBQUEsZUFBTTRFLGVBQWUsQ0FBQ0UsSUFBSSxDQUFDOUMsR0FBTixDQUFyQjtBQUFBLE9BTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURHO0FBQUEsR0FGTixDQURILENBREYsQ0FqQ0YsQ0FERixDQUZGLEVBc0RFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRERixFQXVERSxNQUFDLGlFQUFEO0FBQ0UsUUFBSSxFQUFFVSxXQURSO0FBRUUsWUFBUSxFQUFFZixRQUZaO0FBR0UsV0FBTyxFQUFFQyxPQUhYO0FBSUUsYUFBUyxFQUFFdUMsY0FKYjtBQUtFLGVBQVcsRUFBRUgsZ0JBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZERixFQThERSxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFFSixTQUFiO0FBQXdCLFFBQUksRUFBRUYsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlERixDQURGO0FBa0VELENBalJEOztHQUFNM0IsZTs7S0FBQUEsZTtBQW1SU0EsOEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVSQSwwQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RDYXJkQ29tcCA9ICh7IG5hbWUsIHByaWNlLCBjbGlja0NCLCBpZCwgc2VsZWN0ZWRDYXJkIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e1wicHJvZHVjdC1jYXJkXCIgKyAoaWQgPT09IHNlbGVjdGVkQ2FyZCA/IFwiIGNsaWNrZWRcIiA6IFwiXCIpfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBjbGlja0NCKCl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2RlZmF1bHQuc3ZnXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+e25hbWV9PC9wPlxyXG4gICAgICAgIDxwPntwcmljZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkQ29tcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQnV0dG9uQ29tcCA9ICh7IGNoaWxkcmVuLCBidG5Db2xvciwgY2xpY2tDQiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBcIiArIGJ0bkNvbG9yfSBvbkNsaWNrPXsoKSA9PiBjbGlja0NCKCl9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQ29tcDtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSW5wdXRDb21wID0gKHsgbGFiZWwsIHR5cGUsIG5hbWUsIGNoYW5nZUNCLCBjbGFzc05hbWUsIHZhbHVlIH0pID0+IHtcclxuICBjb25zdCBbaXB0VmFsLCBzZXRJcHRWYWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldElwdFZhbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjaGFuZ2VDQihlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbD57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0Q29tcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRm9vdGVyQ29tcCA9ICgpID0+IHtcclxuICByZXR1cm4gPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj7sl6zquLAg7ZG47YSw7J6ELjwvZm9vdGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlckNvbXA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhlYWRlckNvbXAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+7Jes6riwIO2XpOuNlOyehC48L2hlYWRlcj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBbGVydE1vZGFsQ29tcCA9ICh7IHNob3csIHRleHQgfSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2hvdykge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgIH1cclxuICB9LCBbc2hvd10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJhbGVydC13cmFwcGVyXCIgKyAoc2hvdyA/IFwiIG9uXCIgOiBcIiBvZmZcIil9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncm91cFwiPnt0ZXh0fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGVydE1vZGFsQ29tcDtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb25maXJtTW9kYWxDb21wID0gKHtcclxuICBzaG93LFxyXG4gIG1haW5UZXh0LFxyXG4gIHN1YlRleHQsXHJcbiAgb25DbG9zZUNCLFxyXG4gIG9uQ29uZmlybUNCLFxyXG59KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaG93KSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiOyAvLyDsiqTtgazroaQg7JWI65CoLlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiOyAvLyDsiqTtgazroaTrkKguXHJcbiAgICB9XHJcbiAgfSwgW3Nob3ddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtcIm1vZGFsLXdyYXBwZXJcIiArIChzaG93ID8gXCIgb25cIiA6IFwiIG9mZlwiKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyb3VwXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluXCI+e21haW5UZXh0fTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YlwiPntzdWJUZXh0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLWNvbmZpcm1cIiBvbkNsaWNrPXsoKSA9PiBvbkNvbmZpcm1DQigpfT5cclxuICAgICAgICAgICAg7ZmV7J24XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tY2FuY2VsXCIgb25DbGljaz17KCkgPT4gb25DbG9zZUNCKCl9PlxyXG4gICAgICAgICAgICDst6jshoxcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1Nb2RhbENvbXA7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvbGlzdFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGpzcGFyXFxcXERlc2t0b3BcXFxcc2hvcHBpbmctbGlzdC1mdW5jdGlvbmFsaXR5XFxcXHBhZ2VzXFxcXGxpc3QuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3RlclwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9pbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmQvcHJvZHVjdFwiO1xyXG5pbXBvcnQgQ29uZmlybSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbC9jb25maXJtXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbC9hbGVydFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdExpc3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBpZHg6IDEsIG5hbWU6IFwi7IOI7Jqw6rmhXCIsIHByaWNlOiBcIjE1MDBcIiB9LFxyXG4gICAgeyBpZHg6IDIsIG5hbWU6IFwi6rOg6rWs66eI6rmhXCIsIHByaWNlOiBcIjIwMDBcIiB9LFxyXG4gICAgeyBpZHg6IDMsIG5hbWU6IFwi6rCQ7J6Q6rmhXCIsIHByaWNlOiBcIjE4MDBcIiB9LFxyXG4gICAgeyBpZHg6IDQsIG5hbWU6IFwi64uk7J207KCc7Iqk7YuwXCIsIHByaWNlOiBcIjEwMDAwXCIgfSxcclxuICAgIHsgaWR4OiA1LCBuYW1lOiBcIuy0iOy9lO2MjOydtFwiLCBwcmljZTogXCI1MDAwXCIgfSxcclxuICBdKTtcclxuICBjb25zdCBbc2VhcmNoVmFsLCBzZXRTZWFyY2hWYWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3RJbmZvLCBzZXRQcm9kdWN0SW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcHJpY2U6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2FyZCwgc2V0U2VsZWN0ZWRDYXJkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQnRuLCBzZXRTZWxlY3RlZEJ0bl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzaG93Q29uZmlybSwgc2V0U2hvd0NvbmZpcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttYWluVGV4dCwgc2V0TWFpblRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1YlRleHQsIHNldFN1YlRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2J1dHRvbkxpc3QsIHNldEJ1dHRvbkxpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgYnRuTmFtZTogXCLrk7Eg66GdXCIsXHJcbiAgICAgIGJ0bkNvbG9yOiBcImJ0bi1ibGFja1wiLFxyXG4gICAgICBjbGlja0NCOiAoaWQsIHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpbmZvIGluIHByb2R1Y3RJbmZvKSB7XHJcbiAgICAgICAgICBpZiAoIXByb2R1Y3RJbmZvW2luZm9dKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVTaG93QWxlcnQoYCR7aW5mb30g66W8IOyeheugpe2VmOyEuOyalC5gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlU2hvd0NvbmZpcm0oXCLrk7HroZ3tlZjsi5zqsqDsirXri4jquYw/XCIsIFwi7IOI66GcIOy2lOqwgOuQqeuLiOuLpC5cIiwgaWQpO1xyXG4gICAgICB9LFxyXG4gICAgICBjb25maXJtQ0I6IChzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICAgICAgb25DcmVhdGUocHJvZHVjdEluZm8pO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGJ0bk5hbWU6IFwi7IiYIOyglVwiLFxyXG4gICAgICBidG5Db2xvcjogXCJidG4tYmxhY2tcIixcclxuICAgICAgY2xpY2tDQjogKGlkLCBzZWxlY3RlZENhcmQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENhcmQpO1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWRDYXJkKSB7XHJcbiAgICAgICAgICByZXR1cm4gaGFuZGxlU2hvd0FsZXJ0KFwi7Lm065Oc66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOy5tOuTnCDtgbTrpq3tlZjsp4Ag7JWK7J2EIOyLnOyXkCBhbGVydOywvSDrnYTsmrTri6QuXHJcbiAgICAgICAgaGFuZGxlU2hvd0NvbmZpcm0oXCLsiJjsoJXtlZjsi5zqsqDsirXri4jquYw/XCIsIFwi7ISg7YOd7ZWcIOy5tOuTnOqwgCDsiJjsoJXrkKnri4jri6QuXCIsIGlkKTtcclxuICAgICAgfSxcclxuICAgICAgY29uZmlybUNCOiAoc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbykgPT4ge1xyXG4gICAgICAgIG9uUmV2aXNlKHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIGJ0bk5hbWU6IFwi7IKtIOygnFwiLFxyXG4gICAgICBidG5Db2xvcjogXCJidG4tYmxhY2tcIixcclxuICAgICAgY2xpY2tDQjogKGlkLCBzZWxlY3RlZENhcmQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENhcmQpO1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWRDYXJkKSB7XHJcbiAgICAgICAgICByZXR1cm4gaGFuZGxlU2hvd0FsZXJ0KFwi7Lm065Oc66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOy5tOuTnCDtgbTrpq3tlZjsp4Ag7JWK7J2EIOyLnOyXkCBhbGVydOywvSDrnYTsmrTri6QuXHJcbiAgICAgICAgaGFuZGxlU2hvd0NvbmZpcm0oXCLsgq3soJztlZjsi5zqsqDsirXri4jquYw/XCIsIFwi7JiB6rWsIOyCreygnOuQqeuLiOuLpC5cIiwgaWQpO1xyXG4gICAgICB9LFxyXG4gICAgICBjb25maXJtQ0I6IChzZWxlY3RlZENhcmQpID0+IHtcclxuICAgICAgICBvbkRlbGV0ZShzZWxlY3RlZENhcmQpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdKTtcclxuICBjb25zdCBbc2hvd0FsZXJ0LCBzZXRTaG93QWxlcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthbGVydFRleHQsIHNldEFsZXJ0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy8gISDrk7HroZ0sIOyImOyglSwg7IKt7KCcIOuyhO2KvFxyXG4gIC8vIOuTseuhnSwg7IiY7KCVLCDsgq3soJwg67KE7Yq87J2YIOy9nOuwse2VqOyImFxyXG4gIGNvbnN0IGhhbmRsZVNob3dDb25maXJtID0gKG1haW4sIHN1YiwgaWQpID0+IHtcclxuICAgIC8vIOy5tOuTnOulvCDshKDtg53tlZjsp4Ag7JWK7JWY7J2EIOqyveyasOyXkCjsiJjsoJUsIOyCreygnCDrsoTtirzsl5Ag7ZWc7ZW07ISc66eMKVxyXG4gICAgc2V0TWFpblRleHQobWFpbik7XHJcbiAgICBzZXRTdWJUZXh0KHN1Yik7XHJcbiAgICBzZXRTZWxlY3RlZEJ0bihpZCk7XHJcbiAgICAvLyBzZWxlY3RlZEJ0buyXkCDtgbTrpq3tlZwg67KE7Yq87J2YIGlk66W8IHN0YXRl66GcIOyggOyepe2VnOuLpC5cclxuICB9O1xyXG5cclxuICAvLyAhIGNvbmZpcm0g7LC97J2YIOuyhO2KvFxyXG4gIC8vIGNvbmZpcm0g7LC97J2YIO2ZleyduCDrsoTtirzsnYQg64iM66CA7J2EIOuVjFxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1CdG4gPSAoKSA9PiB7XHJcbiAgICBzZXRBbGVydFRleHQoZmFsc2UpO1xyXG4gICAgLy8g7J207KCE7JeQIGFsZXJ07LC97J20IOuWtOydhCDqsr3smrDrpbwg64yA67mE7ZW07IScIOyDge2DnOulvCBmYWxzZeuhnCDrsJTqv5TspIDri6QuXHJcbiAgICBidXR0b25MaXN0LmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICBpZiAoYnV0dG9uLmlkID09PSBzZWxlY3RlZEJ0bikge1xyXG4gICAgICAgIGJ1dHRvbi5jb25maXJtQ0Ioc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbyk7XHJcbiAgICAgICAgaGFuZGxlU2hvd0FsZXJ0KGAke2J1dHRvbi5idG5OYW1lfSDrkJjsl4jsirXri4jri6QuYCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbmZpcm0g7LC97J2YIOy3qOyGjCDrsoTtirzsnYQg64iM66CA7J2EIOuVjFxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQnRuID0gKCkgPT4ge1xyXG4gICAgLy8gdGV4dOuTpCDstIjquLDtmZRcclxuICAgIHNldE1haW5UZXh0KFwiXCIpO1xyXG4gICAgc2V0U3ViVGV4dChcIlwiKTtcclxuICAgIC8vIOyEoO2Dne2VnCDsubTrk5wgc3RhdGUg7LSI6riw7ZmUXHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIC8vIGNvbmZpcm0g7LC97J20IOuLq+2ejOuLpC5cclxuICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICAvLyBhbGVydCDssL0gaGFuZGxpbmdcclxuICBjb25zdCBoYW5kbGVTaG93QWxlcnQgPSAodGV4dCkgPT4ge1xyXG4gICAgc2V0QWxlcnRUZXh0KHRleHQpO1xyXG4gICAgc2V0U2hvd0FsZXJ0KHRydWUpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldFNob3dBbGVydChmYWxzZSk7XHJcbiAgICAgIHNldEFsZXJ0VGV4dChudWxsKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH07XHJcblxyXG4gIC8vICEgU2VhcmNoIElucHV0XHJcbiAgLy8gU2VhcmNoIGlucHV07J2YIHZhbHVl66W8IOyggOyepe2VtOuRoC5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hJbnB1dCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVmFsKHZhbHVlKTtcclxuICAgIC8vIHNlYXJjaFZhbCDtlZjqs6AgcHJvZHVjdExpc3Qg7JWI7JeQIOyeiOuKlCBpdGVtLm5hbWXsnYQg67mE6rWQXHJcbiAgICAvLyBmaWx0ZXIgbWV0aG9kIO2ZnOyaqVxyXG4gICAgLy8g6rKA7IOJ7ZWcIOusuOyekOyXtOydtCDsobTsnqztlZjripTsp4Ag7ZWY7KeAIOyViuuKlOyngCB0cnVl66GcIOuwmO2ZmOqwkuydtCDrgpjsmKwg7IiYIOyeiOuPhOuhnShTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKCkg7Zmc7JqpKVxyXG4gICAgLyogc2V0UHJvZHVjdExpc3QoXHJcbiAgICAgIHByb2R1Y3RMaXN0LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGl0ZW0ubmFtZS5pbmNsdWRlcyh2YWx1ZSkpXHJcbiAgICApOyAqL1xyXG4gICAgLy8g7J2066CH6rKMIOq1rO2YhO2VmOuptCDrrLjsoJzqsIAg7J6I7J2MLiByZW5kZXLsnZggYm9keSDrtoDrtoTsl5DshJwgcHJvZHVjdExpc3Tsl5AgZmlsdGVy66W8IOyggeyaqS5cclxuXHJcbiAgICAvLyBhcnJheS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpdGVtLmluZGV4T2YoJ+2KueygleyKpO2KuOungScpID09PSBpbmRleClcclxuICB9O1xyXG5cclxuICAvLyDrk7HroZ3rkKAg7IOB7ZKI7J2YIOuLpOydjCBpZCDsp4DsoJVcclxuICBjb25zdCBuZXh0SWQgPSB1c2VSZWYoNik7XHJcblxyXG4gIC8vICEg7IOB7ZKI66qFLCDqsIDqsqkg7J6F66Cl7ZWY64qUIGlucHV0XHJcbiAgLy8g7IOB7ZKI66qFLCDqsIDqsqkgaW5wdXTsnZggdmFsdWXrpbwgY3JlYXRlUHJvZHVjdEluZm8gc3RhdGXsl5Ag7KCA7J6l7ZW065GgLlxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0SW5mbyh7IC4uLnByb2R1Y3RJbmZvLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vICEg65Ox66GdIOq4sOuKpVxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gKHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9kdWN0ID0ge1xyXG4gICAgICBpZHg6IG5leHRJZC5jdXJyZW50LFxyXG4gICAgICBuYW1lOiBwcm9kdWN0SW5mby5uYW1lLFxyXG4gICAgICBwcmljZTogcHJvZHVjdEluZm8ucHJpY2UsXHJcbiAgICB9O1xyXG4gICAgc2V0UHJvZHVjdExpc3QocHJvZHVjdExpc3QuY29uY2F0KG5ld1Byb2R1Y3QpKTtcclxuICAgIC8vIOuTseuhnSDtm4Qg64uk7J2MIOyDge2SiCDstpTqsIDrpbwg7JyE7ZW0IGlkIOqwgCAx7JSpIOymneqwgFxyXG4gICAgbmV4dElkLmN1cnJlbnQgKz0gMTtcclxuICAgIC8vIOy0iOq4sO2ZlFxyXG4gICAgc2V0UHJvZHVjdEluZm8oeyBuYW1lOiBcIlwiLCBwcmljZTogXCJcIiB9KTtcclxuICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICAgIHNldE1haW5UZXh0KFwiXCIpO1xyXG4gICAgc2V0U3ViVGV4dChcIlwiKTtcclxuICAgIHNldFNlbGVjdGVkQ2FyZCgpO1xyXG4gICAgc2V0U2VsZWN0ZWRCdG4oKTtcclxuICB9O1xyXG5cclxuICAvLyAhIOy5tOuTnCDshKDtg51cclxuICBjb25zdCBoYW5kbGVJc0NsaWNrZWQgPSAoaWR4KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoaWR4KTtcclxuICAgIC8vIOyEoO2DneuQnCDsubTrk5zsnZggaWQg66W8IHNlbGVjdGVkQ2FyZCBzdGF0ZeyXkCDsoIDsnqUuXHJcbiAgICBoYW5kbGVTaG93QWxlcnQoXCLshKDtg53rkJjsl4jsirXri4jri6QuXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vICEg7IiY7KCVIOq4sOuKpVxyXG4gIGNvbnN0IG9uUmV2aXNlID0gKHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgIC8vIOyImOyglSDroZzsp4FcclxuICAgIHNldFByb2R1Y3RMaXN0KFxyXG4gICAgICBwcm9kdWN0TGlzdC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgaXRlbS5pZHggPT09IHNlbGVjdGVkQ2FyZFxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0SW5mby5uYW1lLFxyXG4gICAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0SW5mby5wcmljZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgOiBpdGVtXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICAvLyDstIjquLDtmZRcclxuICAgIHNldFByb2R1Y3RJbmZvKHsgbmFtZTogXCJcIiwgcHJpY2U6IFwiXCIgfSk7XHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIHNldFNlbGVjdGVkQnRuKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISDsgq3soJwg6riw64qlXHJcbiAgY29uc3Qgb25EZWxldGUgPSAoc2VsZWN0ZWRDYXJkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIuyCreygnOuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWR4ICE9PSBzZWxlY3RlZENhcmQpKTtcclxuICAgIC8vIGlkeOydmCDqsJLsnYAgbnVtYmVy7J2066+A66GcIOusuOyekOyXtOydtCDslYTri5guXHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIHNldFNlbGVjdGVkQnRuKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISBjb25maXJtIOywveydtCDtmZTrqbTsl5Ag65ys64ukLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWFpblRleHQpIHtcclxuICAgICAgc2V0U2hvd0NvbmZpcm0odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW21haW5UZXh0LCBzdWJUZXh0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uLWhlYWRcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLqsoDsg4lcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lLWlucHV0LWdyb3VwXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuyDge2SiOuqhVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RJbmZvLm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi6rCA6rKpXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RJbmZvLnByaWNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7YnV0dG9uTGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBidG5Db2xvcj17aXRlbS5idG5Db2xvcn1cclxuICAgICAgICAgICAgICAgIGNsaWNrQ0I9eygpID0+IGl0ZW0uY2xpY2tDQihpdGVtLmlkLCBzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5idG5OYW1lfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb24tYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICB7cHJvZHVjdExpc3RcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubmFtZS5pbmRleE9mKHNlYXJjaFZhbCkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkeH1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXJkPXtzZWxlY3RlZENhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDQj17KCkgPT4gaGFuZGxlSXNDbGlja2VkKGl0ZW0uaWR4KX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8Q29uZmlybVxyXG4gICAgICAgIHNob3c9e3Nob3dDb25maXJtfVxyXG4gICAgICAgIG1haW5UZXh0PXttYWluVGV4dH1cclxuICAgICAgICBzdWJUZXh0PXtzdWJUZXh0fVxyXG4gICAgICAgIG9uQ2xvc2VDQj17aGFuZGxlQ2xvc2VCdG59XHJcbiAgICAgICAgb25Db25maXJtQ0I9e2hhbmRsZUNvbmZpcm1CdG59XHJcbiAgICAgIC8+XHJcbiAgICAgIDxBbGVydCB0ZXh0PXthbGVydFRleHR9IHNob3c9e3Nob3dBbGVydH0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1OyJdLCJzb3VyY2VSb290IjoiIn0=