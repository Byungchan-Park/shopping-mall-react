webpackHotUpdate("static\\development\\pages\\list.js",{

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
    price: "1500",
    isClicked: false
  }, {
    idx: 2,
    name: "고구마깡",
    price: "2000",
    isClicked: false
  }, {
    idx: 3,
    name: "감자깡",
    price: "1800",
    isClicked: false
  }, {
    idx: 4,
    name: "다이제스티",
    price: "10000",
    isClicked: false
  }, {
    idx: 5,
    name: "초코파이",
    price: "5000",
    isClicked: false
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
      createProductInfo = _useState3[0],
      setCreateProductInfo = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      selectedCard = _useState4[0],
      setSelectedCard = _useState4[1]; // Search input의 value를 저장해둠.


  var handleSearchInput = function handleSearchInput(name, value) {
    setSearchVal(value); // searchVal 하고 productList 안에 있는 item.name을 비교
    // filter method 활용
    // 검색한 문자열이 존재하는지 하지 않는지 true로 반환값이 나올 수 있도록(String.prototype.includes() 활용)

    /* setProductList(
      productList.filter((item, index) => item.name.includes(value))
    ); */
    // 이렇게 구현하면 문제가 있음. render의 body 부분에서 productList에 filter를 적용.
    // array.filter((item, index) => item.indexOf('특정스트링') === index)
  };

  var nextId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(6);

  var handleChangeInput = function handleChangeInput(name, value) {
    setCreateProductInfo(_objectSpread(_objectSpread({}, createProductInfo), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value)));
  };
  /* name, price 에 입력 후 등록 기능 */


  var onCreate = function onCreate() {
    var newProduct = {
      idx: nextId.current,
      name: createProductInfo.name,
      price: createProductInfo.price
    };
    setProductList(productList.concat(newProduct));
    nextId.current += 1; // 등록 후 input 창들 초기화

    setCreateProductInfo({
      name: "",
      price: ""
    });
  }; // 카드 선택


  var handleIsClicked = function handleIsClicked(idx) {
    alert("선택되었습니다.");
    setSelectedCard(idx);
  };
  /* 카드를 클릭하고 클릭한 카드의 보더가 바뀌고 상품명, 가격 창에 수정할 사항 입력 후 다시 수정 버튼 누르면 수정이 된다. */


  var onRevise = function onRevise() {
    setProductList(productList.map(function (item) {
      item.idx === "5" ? _objectSpread(_objectSpread({}, item), {}, {
        name: "오예스"
      }) : item;
    })); // productList를 그대로 가져와서, idx = 5인 item에 대해서 name만 변경한다.
    // 그게 아닐 경우는 그대로 둔다.
  };
  /* 내가 클릭한 카드를 삭제하는 로직을 짜야 한다. */


  var onDelete = function onDelete() {
    setProductList(productList.filter(function (item) {
      return item.idx !== selectedCard;
    })); // idx의 값은 number이므로 문자열이 아님.
  }; //


  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_layout_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "list-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx(_components_form_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "product-name-input-group",
    label: "\uC0C1\uD488\uBA85",
    type: "text",
    name: "name",
    changeCB: handleChangeInput,
    value: createProductInfo.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }), __jsx(_components_form_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "\uAC00\uACA9",
    type: "text",
    name: "price",
    changeCB: handleChangeInput,
    value: createProductInfo.price,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnColor: "btn-black",
    clickCB: onCreate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "\uB4F1 \uB85D"), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnColor: "btn-black",
    clickCB: onRevise,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "\uC218 \uC815"), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnColor: "btn-black",
    clickCB: onDelete,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "\uC0AD \uC81C")), __jsx("div", {
    className: "con-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, productList.filter(function (item) {
    return item.name.includes(searchVal);
  }).map(function (item, index) {
    return __jsx(_components_card_product__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      id: item.idx,
      name: item.name,
      price: item.price,
      clickCB: function clickCB() {
        return handleIsClicked(item.idx);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 19
      }
    });
  }))))), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }));
};

_s(ProductListPage, "NqFGLZAMPNJJCjazxyiq6mwSuTc=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0UGFnZSIsInVzZVN0YXRlIiwiaWR4IiwibmFtZSIsInByaWNlIiwiaXNDbGlja2VkIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInNlYXJjaFZhbCIsInNldFNlYXJjaFZhbCIsImNyZWF0ZVByb2R1Y3RJbmZvIiwic2V0Q3JlYXRlUHJvZHVjdEluZm8iLCJzZWxlY3RlZENhcmQiLCJzZXRTZWxlY3RlZENhcmQiLCJoYW5kbGVTZWFyY2hJbnB1dCIsInZhbHVlIiwibmV4dElkIiwidXNlUmVmIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJvbkNyZWF0ZSIsIm5ld1Byb2R1Y3QiLCJjdXJyZW50IiwiY29uY2F0IiwiaGFuZGxlSXNDbGlja2VkIiwiYWxlcnQiLCJvblJldmlzZSIsIm1hcCIsIml0ZW0iLCJvbkRlbGV0ZSIsImZpbHRlciIsImluY2x1ZGVzIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsQ0FDN0M7QUFBRUMsT0FBRyxFQUFFLENBQVA7QUFBVUMsUUFBSSxFQUFFLEtBQWhCO0FBQXVCQyxTQUFLLEVBQUUsTUFBOUI7QUFBc0NDLGFBQVMsRUFBRTtBQUFqRCxHQUQ2QyxFQUU3QztBQUFFSCxPQUFHLEVBQUUsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsTUFBaEI7QUFBd0JDLFNBQUssRUFBRSxNQUEvQjtBQUF1Q0MsYUFBUyxFQUFFO0FBQWxELEdBRjZDLEVBRzdDO0FBQUVILE9BQUcsRUFBRSxDQUFQO0FBQVVDLFFBQUksRUFBRSxLQUFoQjtBQUF1QkMsU0FBSyxFQUFFLE1BQTlCO0FBQXNDQyxhQUFTLEVBQUU7QUFBakQsR0FI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QUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFCRixFQTZCRSxNQUFDLCtEQUFEO0FBQVEsWUFBUSxFQUFDLFdBQWpCO0FBQTZCLFdBQU8sRUFBRUcsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3QkYsQ0FERixFQWtDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3RCLFdBQVcsQ0FDVHVCLE1BREYsQ0FDUyxVQUFDRixJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDeEIsSUFBTCxDQUFVMkIsUUFBVixDQUFtQnRCLFNBQW5CLENBQVY7QUFBQSxHQURULEVBRUVrQixHQUZGLENBRU0sVUFBQ0MsSUFBRCxFQUFPSSxLQUFQO0FBQUEsV0FDSCxNQUFDLGdFQUFEO0FBQ0UsU0FBRyxFQUFFQSxLQURQO0FBRUUsUUFBRSxFQUFFSixJQUFJLENBQUN6QixHQUZYO0FBR0UsVUFBSSxFQUFFeUIsSUFBSSxDQUFDeEIsSUFIYjtBQUlFLFdBQUssRUFBRXdCLElBQUksQ0FBQ3ZCLEtBSmQ7QUFLRSxhQUFPLEVBQUU7QUFBQSxlQUFNbUIsZUFBZSxDQUFDSSxJQUFJLENBQUN6QixHQUFOLENBQXJCO0FBQUEsT0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREc7QUFBQSxHQUZOLENBREgsQ0FERixDQWxDRixDQURGLENBRkYsRUFzREUsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdERGLENBREY7QUEwREQsQ0FsSUQ7O0dBQU1GLGU7O0tBQUFBLGU7QUFvSVNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsaXN0LmpzLjkxMjZkODQ5ZjJjYzJkMmRiNjQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9mb290ZXJcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vaW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtL2J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkL3Byb2R1Y3RcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RMaXN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgIHsgaWR4OiAxLCBuYW1lOiBcIuyDiOyasOq5oVwiLCBwcmljZTogXCIxNTAwXCIsIGlzQ2xpY2tlZDogZmFsc2UgfSxcclxuICAgIHsgaWR4OiAyLCBuYW1lOiBcIuqzoOq1rOuniOq5oVwiLCBwcmljZTogXCIyMDAwXCIsIGlzQ2xpY2tlZDogZmFsc2UgfSxcclxuICAgIHsgaWR4OiAzLCBuYW1lOiBcIuqwkOyekOq5oVwiLCBwcmljZTogXCIxODAwXCIsIGlzQ2xpY2tlZDogZmFsc2UgfSxcclxuICAgIHsgaWR4OiA0LCBuYW1lOiBcIuuLpOydtOygnOyKpO2LsFwiLCBwcmljZTogXCIxMDAwMFwiLCBpc0NsaWNrZWQ6IGZhbHNlIH0sXHJcbiAgICB7IGlkeDogNSwgbmFtZTogXCLstIjsvZTtjIzsnbRcIiwgcHJpY2U6IFwiNTAwMFwiLCBpc0NsaWNrZWQ6IGZhbHNlIH0sXHJcbiAgXSk7XHJcbiAgY29uc3QgW3NlYXJjaFZhbCwgc2V0U2VhcmNoVmFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjcmVhdGVQcm9kdWN0SW5mbywgc2V0Q3JlYXRlUHJvZHVjdEluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHByaWNlOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENhcmQsIHNldFNlbGVjdGVkQ2FyZF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAvLyBTZWFyY2ggaW5wdXTsnZggdmFsdWXrpbwg7KCA7J6l7ZW065GgLlxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaElucHV0ID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hWYWwodmFsdWUpO1xyXG4gICAgLy8gc2VhcmNoVmFsIO2VmOqzoCBwcm9kdWN0TGlzdCDslYjsl5Ag7J6I64qUIGl0ZW0ubmFtZeydhCDruYTqtZBcclxuICAgIC8vIGZpbHRlciBtZXRob2Qg7Zmc7JqpXHJcbiAgICAvLyDqsoDsg4ntlZwg66y47J6Q7Je07J20IOyhtOyerO2VmOuKlOyngCDtlZjsp4Ag7JWK64qU7KeAIHRydWXroZwg67CY7ZmY6rCS7J20IOuCmOyYrCDsiJgg7J6I64+E66GdKFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoKSDtmZzsmqkpXHJcbiAgICAvKiBzZXRQcm9kdWN0TGlzdChcclxuICAgICAgcHJvZHVjdExpc3QuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaXRlbS5uYW1lLmluY2x1ZGVzKHZhbHVlKSlcclxuICAgICk7ICovXHJcbiAgICAvLyDsnbTroIfqsowg6rWs7ZiE7ZWY66m0IOusuOygnOqwgCDsnojsnYwuIHJlbmRlcuydmCBib2R5IOu2gOu2hOyXkOyEnCBwcm9kdWN0TGlzdOyXkCBmaWx0ZXLrpbwg7KCB7JqpLlxyXG5cclxuICAgIC8vIGFycmF5LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGl0ZW0uaW5kZXhPZign7Yq57KCV7Iqk7Yq466eBJykgPT09IGluZGV4KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5leHRJZCA9IHVzZVJlZig2KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldENyZWF0ZVByb2R1Y3RJbmZvKHsgLi4uY3JlYXRlUHJvZHVjdEluZm8sIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyogbmFtZSwgcHJpY2Ug7JeQIOyeheugpSDtm4Qg65Ox66GdIOq4sOuKpSAqL1xyXG4gIGNvbnN0IG9uQ3JlYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgaWR4OiBuZXh0SWQuY3VycmVudCxcclxuICAgICAgbmFtZTogY3JlYXRlUHJvZHVjdEluZm8ubmFtZSxcclxuICAgICAgcHJpY2U6IGNyZWF0ZVByb2R1Y3RJbmZvLnByaWNlLFxyXG4gICAgfTtcclxuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RMaXN0LmNvbmNhdChuZXdQcm9kdWN0KSk7XHJcbiAgICBuZXh0SWQuY3VycmVudCArPSAxO1xyXG4gICAgLy8g65Ox66GdIO2bhCBpbnB1dCDssL3rk6Qg7LSI6riw7ZmUXHJcbiAgICBzZXRDcmVhdGVQcm9kdWN0SW5mbyh7IG5hbWU6IFwiXCIsIHByaWNlOiBcIlwiIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIOy5tOuTnCDshKDtg51cclxuICBjb25zdCBoYW5kbGVJc0NsaWNrZWQgPSAoaWR4KSA9PiB7XHJcbiAgICBhbGVydChcIuyEoO2DneuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoaWR4KTtcclxuICB9O1xyXG5cclxuICAvKiDsubTrk5zrpbwg7YG066at7ZWY6rOgIO2BtOumre2VnCDsubTrk5zsnZgg67O0642U6rCAIOuwlOuAjOqzoCDsg4HtkojrqoUsIOqwgOqyqSDssL3sl5Ag7IiY7KCV7ZWgIOyCrO2VrSDsnoXroKUg7ZuEIOuLpOyLnCDsiJjsoJUg67KE7Yq8IOuIhOultOuptCDsiJjsoJXsnbQg65Cc64ukLiAqL1xyXG4gIGNvbnN0IG9uUmV2aXNlID0gKCkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdExpc3QoXHJcbiAgICAgIHByb2R1Y3RMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uaWR4ID09PSBcIjVcIiA/IHsgLi4uaXRlbSwgbmFtZTogXCLsmKTsmIjsiqRcIiB9IDogaXRlbTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICAvLyBwcm9kdWN0TGlzdOulvCDqt7jrjIDroZwg6rCA7KC47JmA7IScLCBpZHggPSA17J24IGl0ZW3sl5Ag64yA7ZW07IScIG5hbWXrp4wg67OA6rK97ZWc64ukLlxyXG4gICAgLy8g6re46rKMIOyVhOuLkCDqsr3smrDripQg6re464yA66GcIOuRlOuLpC5cclxuICB9O1xyXG5cclxuICAvKiDrgrTqsIAg7YG066at7ZWcIOy5tOuTnOulvCDsgq3soJztlZjripQg66Gc7KeB7J2EIOynnOyVvCDtlZzri6QuICovXHJcbiAgY29uc3Qgb25EZWxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWR4ICE9PSBzZWxlY3RlZENhcmQpKTtcclxuICAgIC8vIGlkeOydmCDqsJLsnYAgbnVtYmVy7J2066+A66GcIOusuOyekOyXtOydtCDslYTri5guXHJcbiAgfTtcclxuICAvL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbi1oZWFkXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi6rKA7IOJXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgY2hhbmdlQ0I9e2hhbmRsZVNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZS1pbnB1dC1ncm91cFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLsg4HtkojrqoVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgY2hhbmdlQ0I9e2hhbmRsZUNoYW5nZUlucHV0fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjcmVhdGVQcm9kdWN0SW5mby5uYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIuqwgOqyqVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgY2hhbmdlQ0I9e2hhbmRsZUNoYW5nZUlucHV0fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjcmVhdGVQcm9kdWN0SW5mby5wcmljZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBidG5Db2xvcj1cImJ0bi1ibGFja1wiIGNsaWNrQ0I9e29uQ3JlYXRlfT5cclxuICAgICAgICAgICAgICDrk7Eg66GdXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGJ0bkNvbG9yPVwiYnRuLWJsYWNrXCIgY2xpY2tDQj17b25SZXZpc2V9PlxyXG4gICAgICAgICAgICAgIOyImCDsoJVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gYnRuQ29sb3I9XCJidG4tYmxhY2tcIiBjbGlja0NCPXtvbkRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAg7IKtIOygnFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb24tYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICB7cHJvZHVjdExpc3RcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubmFtZS5pbmNsdWRlcyhzZWFyY2hWYWwpKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkeH1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDQj17KCkgPT4gaGFuZGxlSXNDbGlja2VkKGl0ZW0uaWR4KX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==