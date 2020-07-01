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
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\card\\product.js";

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
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\form\\button.js";

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
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\form\\input.js",
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
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\layout\\footer.js";

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
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\layout\\header.js";

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
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\modal\\alert.js",
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
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\modal\\confirm.js",
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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flist&absolutePagePath=C%3A%5CUsers%5Cjspar%5CDesktop%5C%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%5Cshopping-list-functionality%5Cpages%5Clist.js!./":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flist&absolutePagePath=C%3A%5CUsers%5Cjspar%5CDesktop%5C%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%5Cshopping-list-functionality%5Cpages%5Clist.js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\pages\\list.js",
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
      setSearchVal = _useState2[1]; // 검색창


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: "",
    price: ""
  }),
      productInfo = _useState3[0],
      setProductInfo = _useState3[1]; // 상품 등록 및 수정창


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
      if (productInfo.name === "") {
        setShowConfirm(false);
        return handleShowAlert("\uC0C1\uD488\uBA85\uC774 \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.\n             \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      } else if (productInfo.price === "") {
        setShowConfirm(false);
        return handleShowAlert("\uAC00\uACA9\uC774 \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.\n             \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      } else if (productInfo.name === "" && productInfo.price === "") {
        setShowConfirm(false);
        return handleShowAlert("\uC0C1\uD488\uBA85\uACFC \uAC00\uACA9\uC774 \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.\n             \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      }

      handleShowConfirm("등록하시겠습니까?", "새로 추가됩니다.", id);
    },
    confirmCB: function confirmCB(productList, selectedCard, productInfo) {
      onCreate(productList, selectedCard, productInfo);
      handleShowAlert("등록되었습니다.");
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
    confirmCB: function confirmCB(productList, selectedCard, productInfo) {
      if (productInfo.name === "") {
        setShowConfirm(false);
        return handleShowAlert("\uC0C1\uD488\uBA85\uC774 \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.\n             \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      } else if (productInfo.price === "") {
        setShowConfirm(false);
        return handleShowAlert("\uAC00\uACA9\uC774 \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.\n             \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      } else if (productInfo.name === "" && productInfo.price === "") {
        setShowConfirm(false);
        return handleShowAlert("\uC0C1\uD488\uBA85\uACFC \uAC00\uACA9\uC774 \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.\n             \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      }

      onRevise(productList, selectedCard, productInfo);
      handleShowAlert("수정되었습니다.");
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
    confirmCB: function confirmCB(productList, selectedCard, productInfo) {
      onDelete(productList, selectedCard, productInfo);
      handleShowAlert("삭제되었습니다.");
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
        button.confirmCB(productList, selectedCard, productInfo);
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


  var onCreate = function onCreate(productList, selectedCard, productInfo) {
    console.log(productList);
    var newProduct = {
      idx: nextId.current,
      name: productInfo.name,
      price: productInfo.price
    };
    setProductList(productList.concat(newProduct));
    console.log(productList); // 등록 후 다음 상품 추가를 위해 id 가 1씩 증가

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


  var onRevise = function onRevise(productList, selectedCard, productInfo) {
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


  var onDelete = function onDelete(productList, selectedCard, productInfo) {
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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(productList);
  }, [productList]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "list-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
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
      lineNumber: 266,
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
      lineNumber: 273,
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
      lineNumber: 281,
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
        lineNumber: 289,
        columnNumber: 15
      }
    }, item.btnName);
  })), __jsx("div", {
    className: "con-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
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
        lineNumber: 302,
        columnNumber: 19
      }
    });
  }))))), __jsx(_components_modal_confirm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: showConfirm,
    mainText: mainText,
    subText: subText,
    onCloseCB: handleCloseBtn,
    onConfirmCB: function onConfirmCB() {
      return handleConfirmBtn(productList);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 7
    }
  }), __jsx(_components_modal_alert__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: alertText,
    show: showAlert,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 7
    }
  }));
};

_s(ProductListPage, "Atg40AL9WmlWItVtVeyvSzHNzk0=");

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

/***/ 2:
/*!***************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Flist&absolutePagePath=C%3A%5CUsers%5Cjspar%5CDesktop%5C%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%5Cshopping-list-functionality%5Cpages%5Clist.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Flist&absolutePagePath=C%3A%5CUsers%5Cjspar%5CDesktop%5C%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%5Cshopping-list-functionality%5Cpages%5Clist.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flist&absolutePagePath=C%3A%5CUsers%5Cjspar%5CDesktop%5C%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%5Cshopping-list-functionality%5Cpages%5Clist.js!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybS9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9jb25maXJtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1Iiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiIl0sIm5hbWVzIjpbIlByb2R1Y3RDYXJkQ29tcCIsIm5hbWUiLCJwcmljZSIsImNsaWNrQ0IiLCJpZCIsInNlbGVjdGVkQ2FyZCIsIkJ1dHRvbkNvbXAiLCJjaGlsZHJlbiIsImJ0bkNvbG9yIiwiSW5wdXRDb21wIiwibGFiZWwiLCJ0eXBlIiwiY2hhbmdlQ0IiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsInVzZVN0YXRlIiwiaXB0VmFsIiwic2V0SXB0VmFsIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIkZvb3RlckNvbXAiLCJIZWFkZXJDb21wIiwiQWxlcnRNb2RhbENvbXAiLCJzaG93IiwidGV4dCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJDb25maXJtTW9kYWxDb21wIiwibWFpblRleHQiLCJzdWJUZXh0Iiwib25DbG9zZUNCIiwib25Db25maXJtQ0IiLCJQcm9kdWN0TGlzdFBhZ2UiLCJpZHgiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0Iiwic2VhcmNoVmFsIiwic2V0U2VhcmNoVmFsIiwicHJvZHVjdEluZm8iLCJzZXRQcm9kdWN0SW5mbyIsInNldFNlbGVjdGVkQ2FyZCIsInNlbGVjdGVkQnRuIiwic2V0U2VsZWN0ZWRCdG4iLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwic2V0TWFpblRleHQiLCJzZXRTdWJUZXh0IiwiYnRuTmFtZSIsImhhbmRsZVNob3dBbGVydCIsImhhbmRsZVNob3dDb25maXJtIiwiY29uZmlybUNCIiwib25DcmVhdGUiLCJjb25zb2xlIiwibG9nIiwib25SZXZpc2UiLCJvbkRlbGV0ZSIsImJ1dHRvbkxpc3QiLCJzZXRCdXR0b25MaXN0Iiwic2hvd0FsZXJ0Iiwic2V0U2hvd0FsZXJ0IiwiYWxlcnRUZXh0Iiwic2V0QWxlcnRUZXh0IiwibWFpbiIsInN1YiIsImhhbmRsZUNvbmZpcm1CdG4iLCJmb3JFYWNoIiwiYnV0dG9uIiwiaGFuZGxlQ2xvc2VCdG4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2VhcmNoSW5wdXQiLCJuZXh0SWQiLCJ1c2VSZWYiLCJoYW5kbGVDaGFuZ2VJbnB1dCIsIm5ld1Byb2R1Y3QiLCJjdXJyZW50IiwiY29uY2F0IiwiaGFuZGxlSXNDbGlja2VkIiwibWFwIiwiaXRlbSIsImZpbHRlciIsImluZGV4T2YiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcs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R0FGRixDQUVNLFVBQUNDLElBQUQsRUFBT0csS0FBUDtBQUFBLFdBQ0gsTUFBQyxnRUFBRDtBQUNFLFNBQUcsRUFBRUEsS0FEUDtBQUVFLFFBQUUsRUFBRUgsSUFBSSxDQUFDN0MsR0FGWDtBQUdFLFVBQUksRUFBRTZDLElBQUksQ0FBQ2pGLElBSGI7QUFJRSxXQUFLLEVBQUVpRixJQUFJLENBQUNoRixLQUpkO0FBS0Usa0JBQVksRUFBRUcsWUFMaEI7QUFNRSxhQUFPLEVBQUU7QUFBQSxlQUFNMkUsZUFBZSxDQUFDRSxJQUFJLENBQUM3QyxHQUFOLENBQXJCO0FBQUEsT0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREc7QUFBQSxHQUZOLENBREgsQ0FERixDQWpDRixDQURGLENBREYsRUFxREUsTUFBQyxpRUFBRDtBQUNFLFFBQUksRUFBRVUsV0FEUjtBQUVFLFlBQVEsRUFBRWYsUUFGWjtBQUdFLFdBQU8sRUFBRUMsT0FIWDtBQUlFLGFBQVMsRUFBRXNDLGNBSmI7QUFLRSxlQUFXLEVBQUU7QUFBQSxhQUFNSCxnQkFBZ0IsQ0FBQzlCLFdBQUQsQ0FBdEI7QUFBQSxLQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyREYsRUE0REUsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBRTBCLFNBQWI7QUFBd0IsUUFBSSxFQUFFRixTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNURGLENBREY7QUFnRUQsQ0EzVEQ7O0dBQU0xQixlOztLQUFBQSxlO0FBNlRTQSw4RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFVBLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdENhcmRDb21wID0gKHsgbmFtZSwgcHJpY2UsIGNsaWNrQ0IsIGlkLCBzZWxlY3RlZENhcmQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17XCJwcm9kdWN0LWNhcmRcIiArIChpZCA9PT0gc2VsZWN0ZWRDYXJkID8gXCIgY2xpY2tlZFwiIDogXCJcIil9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrQ0IoKX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVmYXVsdC5zdmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57bmFtZX08L3A+XHJcbiAgICAgICAgPHA+e3ByaWNlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmRDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBCdXR0b25Db21wID0gKHsgY2hpbGRyZW4sIGJ0bkNvbG9yLCBjbGlja0NCIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIFwiICsgYnRuQ29sb3J9IG9uQ2xpY2s9eygpID0+IGNsaWNrQ0IoKX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Db21wO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbnB1dENvbXAgPSAoeyBsYWJlbCwgdHlwZSwgbmFtZSwgY2hhbmdlQ0IsIGNsYXNzTmFtZSwgdmFsdWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtpcHRWYWwsIHNldElwdFZhbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0SXB0VmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNoYW5nZUNCKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsPntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb290ZXJDb21wID0gKCkgPT4ge1xyXG4gIHJldHVybiA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPuyXrOq4sCDtkbjthLDsnoQuPC9mb290ZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyQ29tcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGVhZGVyQ29tcCA9ICgpID0+IHtcclxuICByZXR1cm4gPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj7sl6zquLAg7Zek642U7J6ELjwvaGVhZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNvbXA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFsZXJ0TW9kYWxDb21wID0gKHsgc2hvdywgdGV4dCB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaG93KSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgfVxyXG4gIH0sIFtzaG93XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtcImFsZXJ0LXdyYXBwZXJcIiArIChzaG93ID8gXCIgb25cIiA6IFwiIG9mZlwiKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyb3VwXCI+e3RleHR9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0TW9kYWxDb21wO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvbmZpcm1Nb2RhbENvbXAgPSAoe1xyXG4gIHNob3csXHJcbiAgbWFpblRleHQsXHJcbiAgc3ViVGV4dCxcclxuICBvbkNsb3NlQ0IsXHJcbiAgb25Db25maXJtQ0IsXHJcbn0pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNob3cpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7IC8vIOyKpO2BrOuhpCDslYjrkKguXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7IC8vIOyKpO2BrOuhpOuQqC5cclxuICAgIH1cclxuICB9LCBbc2hvd10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1wibW9kYWwtd3JhcHBlclwiICsgKHNob3cgPyBcIiBvblwiIDogXCIgb2ZmXCIpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JvdXBcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1haW5cIj57bWFpblRleHR9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViXCI+e3N1YlRleHR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tY29uZmlybVwiIG9uQ2xpY2s9eygpID0+IG9uQ29uZmlybUNCKCl9PlxyXG4gICAgICAgICAgICDtmZXsnbhcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1jYW5jZWxcIiBvbkNsaWNrPXsoKSA9PiBvbkNsb3NlQ0IoKX0+XHJcbiAgICAgICAgICAgIOy3qOyGjFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybU1vZGFsQ29tcDtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9saXN0XCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcanNwYXJcXFxcRGVza3RvcFxcXFztlITroZzqt7jrnpjrsI1cXFxcc2hvcHBpbmctbGlzdC1mdW5jdGlvbmFsaXR5XFxcXHBhZ2VzXFxcXGxpc3QuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3RlclwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9pbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmQvcHJvZHVjdFwiO1xyXG5pbXBvcnQgQ29uZmlybSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbC9jb25maXJtXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbC9hbGVydFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdExpc3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBpZHg6IDEsIG5hbWU6IFwi7IOI7Jqw6rmhXCIsIHByaWNlOiBcIjE1MDBcIiB9LFxyXG4gICAgeyBpZHg6IDIsIG5hbWU6IFwi6rOg6rWs66eI6rmhXCIsIHByaWNlOiBcIjIwMDBcIiB9LFxyXG4gICAgeyBpZHg6IDMsIG5hbWU6IFwi6rCQ7J6Q6rmhXCIsIHByaWNlOiBcIjE4MDBcIiB9LFxyXG4gICAgeyBpZHg6IDQsIG5hbWU6IFwi64uk7J207KCc7Iqk7YuwXCIsIHByaWNlOiBcIjEwMDAwXCIgfSxcclxuICAgIHsgaWR4OiA1LCBuYW1lOiBcIuy0iOy9lO2MjOydtFwiLCBwcmljZTogXCI1MDAwXCIgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaFZhbCwgc2V0U2VhcmNoVmFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIOqygOyDieywvVxyXG4gIGNvbnN0IFtwcm9kdWN0SW5mbywgc2V0UHJvZHVjdEluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHByaWNlOiBcIlwiLFxyXG4gIH0pO1xyXG4gIC8vIOyDge2SiCDrk7HroZ0g67CPIOyImOygleywvVxyXG4gIGNvbnN0IFtzZWxlY3RlZENhcmQsIHNldFNlbGVjdGVkQ2FyZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEJ0biwgc2V0U2VsZWN0ZWRCdG5dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2hvd0NvbmZpcm0sIHNldFNob3dDb25maXJtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWFpblRleHQsIHNldE1haW5UZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWJUZXh0LCBzZXRTdWJUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtidXR0b25MaXN0LCBzZXRCdXR0b25MaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGJ0bk5hbWU6IFwi65OxIOuhnVwiLFxyXG4gICAgICBidG5Db2xvcjogXCJidG4tYmxhY2tcIixcclxuICAgICAgY2xpY2tDQjogKGlkLCBzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RJbmZvLm5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICAgICAgICAgIHJldHVybiBoYW5kbGVTaG93QWxlcnQoXHJcbiAgICAgICAgICAgIGDsg4HtkojrqoXsnbQg7J6F66Cl65CY7KeAIOyViuyVmOyKteuLiOuLpC5cclxuICAgICAgICAgICAgIOyeheugpe2VtOyjvOyEuOyalC5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvZHVjdEluZm8ucHJpY2UgPT09IFwiXCIpIHtcclxuICAgICAgICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICAgICAgICAgIHJldHVybiBoYW5kbGVTaG93QWxlcnQoXHJcbiAgICAgICAgICAgIGDqsIDqsqnsnbQg7J6F66Cl65CY7KeAIOyViuyVmOyKteuLiOuLpC5cclxuICAgICAgICAgICAgIOyeheugpe2VtOyjvOyEuOyalC5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvZHVjdEluZm8ubmFtZSA9PT0gXCJcIiAmJiBwcm9kdWN0SW5mby5wcmljZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZVNob3dBbGVydChcclxuICAgICAgICAgICAgYOyDge2SiOuqheqzvCDqsIDqsqnsnbQg7J6F66Cl65CY7KeAIOyViuyVmOyKteuLiOuLpC5cclxuICAgICAgICAgICAgIOyeheugpe2VtOyjvOyEuOyalC5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVTaG93Q29uZmlybShcIuuTseuhne2VmOyLnOqyoOyKteuLiOq5jD9cIiwgXCLsg4jroZwg7LaU6rCA65Cp64uI64ukLlwiLCBpZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpcm1DQjogKHByb2R1Y3RMaXN0LCBzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICAgICAgb25DcmVhdGUocHJvZHVjdExpc3QsIHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pO1xyXG4gICAgICAgIGhhbmRsZVNob3dBbGVydChcIuuTseuhneuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgYnRuTmFtZTogXCLsiJgg7KCVXCIsXHJcbiAgICAgIGJ0bkNvbG9yOiBcImJ0bi1ibGFja1wiLFxyXG4gICAgICBjbGlja0NCOiAoaWQsIHNlbGVjdGVkQ2FyZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ2FyZCk7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZENhcmQpIHtcclxuICAgICAgICAgIHJldHVybiBoYW5kbGVTaG93QWxlcnQoXCLsubTrk5zrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g7Lm065OcIO2BtOumre2VmOyngCDslYrsnYQg7Iuc7JeQIGFsZXJ07LC9IOudhOyatOuLpC5cclxuICAgICAgICBoYW5kbGVTaG93Q29uZmlybShcIuyImOygle2VmOyLnOqyoOyKteuLiOq5jD9cIiwgXCLshKDtg53tlZwg7Lm065Oc6rCAIOyImOygleuQqeuLiOuLpC5cIiwgaWQpO1xyXG4gICAgICB9LFxyXG4gICAgICBjb25maXJtQ0I6IChwcm9kdWN0TGlzdCwgc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbykgPT4ge1xyXG4gICAgICAgIGlmIChwcm9kdWN0SW5mby5uYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICAgICAgICByZXR1cm4gaGFuZGxlU2hvd0FsZXJ0KFxyXG4gICAgICAgICAgICBg7IOB7ZKI66qF7J20IOyeheugpeuQmOyngCDslYrslZjsirXri4jri6QuXHJcbiAgICAgICAgICAgICDsnoXroKXtlbTso7zshLjsmpQuYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb2R1Y3RJbmZvLnByaWNlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICAgICAgICByZXR1cm4gaGFuZGxlU2hvd0FsZXJ0KFxyXG4gICAgICAgICAgICBg6rCA6rKp7J20IOyeheugpeuQmOyngCDslYrslZjsirXri4jri6QuXHJcbiAgICAgICAgICAgICDsnoXroKXtlbTso7zshLjsmpQuYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb2R1Y3RJbmZvLm5hbWUgPT09IFwiXCIgJiYgcHJvZHVjdEluZm8ucHJpY2UgPT09IFwiXCIpIHtcclxuICAgICAgICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICAgICAgICAgIHJldHVybiBoYW5kbGVTaG93QWxlcnQoXHJcbiAgICAgICAgICAgIGDsg4HtkojrqoXqs7wg6rCA6rKp7J20IOyeheugpeuQmOyngCDslYrslZjsirXri4jri6QuXHJcbiAgICAgICAgICAgICDsnoXroKXtlbTso7zshLjsmpQuYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25SZXZpc2UocHJvZHVjdExpc3QsIHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pO1xyXG4gICAgICAgIGhhbmRsZVNob3dBbGVydChcIuyImOygleuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgYnRuTmFtZTogXCLsgq0g7KCcXCIsXHJcbiAgICAgIGJ0bkNvbG9yOiBcImJ0bi1ibGFja1wiLFxyXG4gICAgICBjbGlja0NCOiAoaWQsIHNlbGVjdGVkQ2FyZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ2FyZCk7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZENhcmQpIHtcclxuICAgICAgICAgIHJldHVybiBoYW5kbGVTaG93QWxlcnQoXCLsubTrk5zrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g7Lm065OcIO2BtOumre2VmOyngCDslYrsnYQg7Iuc7JeQIGFsZXJ07LC9IOudhOyatOuLpC5cclxuICAgICAgICBoYW5kbGVTaG93Q29uZmlybShcIuyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cIiwgXCLsmIHqtawg7IKt7KCc65Cp64uI64ukLlwiLCBpZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpcm1DQjogKHByb2R1Y3RMaXN0LCBzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICAgICAgb25EZWxldGUocHJvZHVjdExpc3QsIHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pO1xyXG4gICAgICAgIGhhbmRsZVNob3dBbGVydChcIuyCreygnOuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IFtzaG93QWxlcnQsIHNldFNob3dBbGVydF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FsZXJ0VGV4dCwgc2V0QWxlcnRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvLyAhIOuTseuhnSwg7IiY7KCVLCDsgq3soJwg67KE7Yq8XHJcbiAgLy8g65Ox66GdLCDsiJjsoJUsIOyCreygnCDrsoTtirzsnZgg7L2c67Cx7ZWo7IiYXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbmZpcm0gPSAobWFpbiwgc3ViLCBpZCkgPT4ge1xyXG4gICAgLy8g7Lm065Oc66W8IOyEoO2Dne2VmOyngCDslYrslZjsnYQg6rK97Jqw7JeQKOyImOyglSwg7IKt7KCcIOuyhO2KvOyXkCDtlZztlbTshJzrp4wpXHJcbiAgICBzZXRNYWluVGV4dChtYWluKTtcclxuICAgIHNldFN1YlRleHQoc3ViKTtcclxuICAgIHNldFNlbGVjdGVkQnRuKGlkKTtcclxuICAgIC8vIHNlbGVjdGVkQnRu7JeQIO2BtOumre2VnCDrsoTtirzsnZggaWTrpbwgc3RhdGXroZwg7KCA7J6l7ZWc64ukLlxyXG4gIH07XHJcblxyXG4gIC8vICEgY29uZmlybSDssL3snZgg67KE7Yq8XHJcbiAgLy8gY29uZmlybSDssL3snZgg7ZmV7J24IOuyhO2KvOydhCDriIzroIDsnYQg65WMXHJcbiAgY29uc3QgaGFuZGxlQ29uZmlybUJ0biA9ICgpID0+IHtcclxuICAgIHNldEFsZXJ0VGV4dChmYWxzZSk7XHJcbiAgICAvLyDsnbTsoITsl5AgYWxlcnTssL3snbQg65a07J2EIOqyveyasOulvCDrjIDruYTtlbTshJwg7IOB7YOc66W8IGZhbHNl66GcIOuwlOq/lOykgOuLpC5cclxuICAgIGJ1dHRvbkxpc3QuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgIGlmIChidXR0b24uaWQgPT09IHNlbGVjdGVkQnRuKSB7XHJcbiAgICAgICAgYnV0dG9uLmNvbmZpcm1DQihwcm9kdWN0TGlzdCwgc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbmZpcm0g7LC97J2YIOy3qOyGjCDrsoTtirzsnYQg64iM66CA7J2EIOuVjFxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQnRuID0gKCkgPT4ge1xyXG4gICAgLy8gdGV4dOuTpCDstIjquLDtmZRcclxuICAgIHNldE1haW5UZXh0KFwiXCIpO1xyXG4gICAgc2V0U3ViVGV4dChcIlwiKTtcclxuICAgIC8vIOyEoO2Dne2VnCDsubTrk5wgc3RhdGUg7LSI6riw7ZmUXHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIC8vIGNvbmZpcm0g7LC97J20IOuLq+2ejOuLpC5cclxuICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICAvLyBhbGVydCDssL0gaGFuZGxpbmdcclxuICBjb25zdCBoYW5kbGVTaG93QWxlcnQgPSAodGV4dCkgPT4ge1xyXG4gICAgc2V0QWxlcnRUZXh0KHRleHQpO1xyXG4gICAgc2V0U2hvd0FsZXJ0KHRydWUpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldFNob3dBbGVydChmYWxzZSk7XHJcbiAgICAgIHNldEFsZXJ0VGV4dChudWxsKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH07XHJcblxyXG4gIC8vICEgU2VhcmNoIElucHV0XHJcbiAgLy8gU2VhcmNoIGlucHV07J2YIHZhbHVl66W8IOyggOyepe2VtOuRoC5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hJbnB1dCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVmFsKHZhbHVlKTtcclxuICAgIC8vIHNlYXJjaFZhbCDtlZjqs6AgcHJvZHVjdExpc3Qg7JWI7JeQIOyeiOuKlCBpdGVtLm5hbWXsnYQg67mE6rWQXHJcbiAgICAvLyBmaWx0ZXIgbWV0aG9kIO2ZnOyaqVxyXG4gICAgLy8g6rKA7IOJ7ZWcIOusuOyekOyXtOydtCDsobTsnqztlZjripTsp4Ag7ZWY7KeAIOyViuuKlOyngCB0cnVl66GcIOuwmO2ZmOqwkuydtCDrgpjsmKwg7IiYIOyeiOuPhOuhnShTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKCkg7Zmc7JqpKVxyXG4gICAgLyogc2V0UHJvZHVjdExpc3QoXHJcbiAgICAgIHByb2R1Y3RMaXN0LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGl0ZW0ubmFtZS5pbmNsdWRlcyh2YWx1ZSkpXHJcbiAgICApOyAqL1xyXG4gICAgLy8g7J2066CH6rKMIOq1rO2YhO2VmOuptCDrrLjsoJzqsIAg7J6I7J2MLiByZW5kZXLsnZggYm9keSDrtoDrtoTsl5DshJwgcHJvZHVjdExpc3Tsl5AgZmlsdGVy66W8IOyggeyaqS5cclxuXHJcbiAgICAvLyBhcnJheS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpdGVtLmluZGV4T2YoJ+2KueygleyKpO2KuOungScpID09PSBpbmRleClcclxuICB9O1xyXG5cclxuICAvLyDrk7HroZ3rkKAg7IOB7ZKI7J2YIOuLpOydjCBpZCDsp4DsoJVcclxuICBjb25zdCBuZXh0SWQgPSB1c2VSZWYoNik7XHJcblxyXG4gIC8vICEg7IOB7ZKI66qFLCDqsIDqsqkg7J6F66Cl7ZWY64qUIGlucHV0XHJcbiAgLy8g7IOB7ZKI66qFLCDqsIDqsqkgaW5wdXTsnZggdmFsdWXrpbwgY3JlYXRlUHJvZHVjdEluZm8gc3RhdGXsl5Ag7KCA7J6l7ZW065GgLlxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0SW5mbyh7IC4uLnByb2R1Y3RJbmZvLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vICEg65Ox66GdIOq4sOuKpVxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gKHByb2R1Y3RMaXN0LCBzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdCk7XHJcbiAgICBjb25zdCBuZXdQcm9kdWN0ID0ge1xyXG4gICAgICBpZHg6IG5leHRJZC5jdXJyZW50LFxyXG4gICAgICBuYW1lOiBwcm9kdWN0SW5mby5uYW1lLFxyXG4gICAgICBwcmljZTogcHJvZHVjdEluZm8ucHJpY2UsXHJcbiAgICB9O1xyXG4gICAgc2V0UHJvZHVjdExpc3QocHJvZHVjdExpc3QuY29uY2F0KG5ld1Byb2R1Y3QpKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RMaXN0KTtcclxuICAgIC8vIOuTseuhnSDtm4Qg64uk7J2MIOyDge2SiCDstpTqsIDrpbwg7JyE7ZW0IGlkIOqwgCAx7JSpIOymneqwgFxyXG4gICAgbmV4dElkLmN1cnJlbnQgKz0gMTtcclxuICAgIC8vIOy0iOq4sO2ZlFxyXG4gICAgc2V0UHJvZHVjdEluZm8oeyBuYW1lOiBcIlwiLCBwcmljZTogXCJcIiB9KTtcclxuICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICAgIHNldE1haW5UZXh0KFwiXCIpO1xyXG4gICAgc2V0U3ViVGV4dChcIlwiKTtcclxuICAgIHNldFNlbGVjdGVkQ2FyZCgpO1xyXG4gICAgc2V0U2VsZWN0ZWRCdG4oKTtcclxuICB9O1xyXG5cclxuICAvLyAhIOy5tOuTnCDshKDtg51cclxuICBjb25zdCBoYW5kbGVJc0NsaWNrZWQgPSAoaWR4KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoaWR4KTtcclxuICAgIC8vIOyEoO2DneuQnCDsubTrk5zsnZggaWQg66W8IHNlbGVjdGVkQ2FyZCBzdGF0ZeyXkCDsoIDsnqUuXHJcbiAgICBoYW5kbGVTaG93QWxlcnQoXCLshKDtg53rkJjsl4jsirXri4jri6QuXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vICEg7IiY7KCVIOq4sOuKpVxyXG4gIGNvbnN0IG9uUmV2aXNlID0gKHByb2R1Y3RMaXN0LCBzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICAvLyDsiJjsoJUg66Gc7KeBXHJcbiAgICBzZXRQcm9kdWN0TGlzdChcclxuICAgICAgcHJvZHVjdExpc3QubWFwKChpdGVtKSA9PlxyXG4gICAgICAgIGl0ZW0uaWR4ID09PSBzZWxlY3RlZENhcmRcclxuICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgbmFtZTogcHJvZHVjdEluZm8ubmFtZSxcclxuICAgICAgICAgICAgICBwcmljZTogcHJvZHVjdEluZm8ucHJpY2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogaXRlbVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gICAgLy8g7LSI6riw7ZmUXHJcbiAgICBzZXRQcm9kdWN0SW5mbyh7IG5hbWU6IFwiXCIsIHByaWNlOiBcIlwiIH0pO1xyXG4gICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xyXG4gICAgc2V0TWFpblRleHQoXCJcIik7XHJcbiAgICBzZXRTdWJUZXh0KFwiXCIpO1xyXG4gICAgc2V0U2VsZWN0ZWRDYXJkKCk7XHJcbiAgICBzZXRTZWxlY3RlZEJ0bigpO1xyXG4gIH07XHJcblxyXG4gIC8vICEg7IKt7KCcIOq4sOuKpVxyXG4gIGNvbnN0IG9uRGVsZXRlID0gKHByb2R1Y3RMaXN0LCBzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIuyCreygnOuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWR4ICE9PSBzZWxlY3RlZENhcmQpKTtcclxuICAgIC8vIGlkeOydmCDqsJLsnYAgbnVtYmVy7J2066+A66GcIOusuOyekOyXtOydtCDslYTri5guXHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIHNldFNlbGVjdGVkQnRuKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISBjb25maXJtIOywveydtCDtmZTrqbTsl5Ag65ys64ukLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWFpblRleHQpIHtcclxuICAgICAgc2V0U2hvd0NvbmZpcm0odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW21haW5UZXh0LCBzdWJUZXh0XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdCk7XHJcbiAgfSwgW3Byb2R1Y3RMaXN0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbi1oZWFkXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi6rKA7IOJXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgY2hhbmdlQ0I9e2hhbmRsZVNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZS1pbnB1dC1ncm91cFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLsg4HtkojrqoVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgY2hhbmdlQ0I9e2hhbmRsZUNoYW5nZUlucHV0fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0SW5mby5uYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIuqwgOqyqVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgY2hhbmdlQ0I9e2hhbmRsZUNoYW5nZUlucHV0fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0SW5mby5wcmljZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2J1dHRvbkxpc3QubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYnRuQ29sb3I9e2l0ZW0uYnRuQ29sb3J9XHJcbiAgICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PiBpdGVtLmNsaWNrQ0IoaXRlbS5pZCwgc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uYnRuTmFtZX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RMaXN0XHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLm5hbWUuaW5kZXhPZihzZWFyY2hWYWwpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2FyZD17c2VsZWN0ZWRDYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrQ0I9eygpID0+IGhhbmRsZUlzQ2xpY2tlZChpdGVtLmlkeCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDb25maXJtXHJcbiAgICAgICAgc2hvdz17c2hvd0NvbmZpcm19XHJcbiAgICAgICAgbWFpblRleHQ9e21haW5UZXh0fVxyXG4gICAgICAgIHN1YlRleHQ9e3N1YlRleHR9XHJcbiAgICAgICAgb25DbG9zZUNCPXtoYW5kbGVDbG9zZUJ0bn1cclxuICAgICAgICBvbkNvbmZpcm1DQj17KCkgPT4gaGFuZGxlQ29uZmlybUJ0bihwcm9kdWN0TGlzdCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxBbGVydCB0ZXh0PXthbGVydFRleHR9IHNob3c9e3Nob3dBbGVydH0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1OyJdLCJzb3VyY2VSb290IjoiIn0=