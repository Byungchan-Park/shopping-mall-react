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
      item.idx === selectedCard ? _objectSpread(_objectSpread({}, item), {}, {
        name: createProductInfo.name,
        price: createProductInfo.price
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
      lineNumber: 88,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "list-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
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
      lineNumber: 99,
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
      lineNumber: 107,
      columnNumber: 13
    }
  }), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnColor: "btn-black",
    clickCB: onCreate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "\uB4F1 \uB85D"), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnColor: "btn-black",
    clickCB: onRevise,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "\uC218 \uC815"), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnColor: "btn-black",
    clickCB: onDelete,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "\uC0AD \uC81C")), __jsx("div", {
    className: "con-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
      clickCB: function clickCB() {
        return handleIsClicked(item.idx);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 19
      }
    });
  }))))), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }));
};

_s(ProductListPage, "Cfh8BgJyeVw6m7on8pFu4Zq1aRU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0UGFnZSIsInVzZVN0YXRlIiwiaWR4IiwibmFtZSIsInByaWNlIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInNlYXJjaFZhbCIsInNldFNlYXJjaFZhbCIsImNyZWF0ZVByb2R1Y3RJbmZvIiwic2V0Q3JlYXRlUHJvZHVjdEluZm8iLCJzZWxlY3RlZENhcmQiLCJzZXRTZWxlY3RlZENhcmQiLCJoYW5kbGVTZWFyY2hJbnB1dCIsInZhbHVlIiwibmV4dElkIiwidXNlUmVmIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJvbkNyZWF0ZSIsIm5ld1Byb2R1Y3QiLCJjdXJyZW50IiwiY29uY2F0IiwiaGFuZGxlSXNDbGlja2VkIiwiYWxlcnQiLCJvblJldmlzZSIsIm1hcCIsIml0ZW0iLCJvbkRlbGV0ZSIsImZpbHRlciIsImluZGV4T2YiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxDQUM3QztBQUFFQyxPQUFHLEVBQUUsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsS0FBaEI7QUFBdUJDLFNBQUssRUFBRTtBQUE5QixHQUQ2QyxFQUU3QztBQUFFRixPQUFHLEVBQUUsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsTUFBaEI7QUFBd0JDLFNBQUssRUFBRTtBQUEvQixHQUY2QyxFQUc3QztBQUFFRixPQUFHLEVBQUUsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsS0FBaEI7QUFBdUJDLFNBQUssRUFBRTtBQUE5QixHQUg2QyxFQUk3QztBQUFFRixPQUFHLEVBQUUsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsT0FBaEI7QUFBeUJDLFNBQUssRUFBRTtBQUFoQyxHQUo2QyxF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akI7QUFBNkIsV0FBTyxFQUFFRyxRQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTdCRixDQURGLEVBa0NFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHdEIsV0FBVyxDQUNUdUIsTUFERixDQUNTLFVBQUNGLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUN2QixJQUFMLENBQVUwQixPQUFWLENBQWtCdEIsU0FBbEIsTUFBaUMsQ0FBQyxDQUE1QztBQUFBLEdBRFQsRUFFRWtCLEdBRkYsQ0FFTSxVQUFDQyxJQUFELEVBQU9JLEtBQVA7QUFBQSxXQUNILE1BQUMsZ0VBQUQ7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFFRSxRQUFFLEVBQUVKLElBQUksQ0FBQ3hCLEdBRlg7QUFHRSxVQUFJLEVBQUV3QixJQUFJLENBQUN2QixJQUhiO0FBSUUsV0FBSyxFQUFFdUIsSUFBSSxDQUFDdEIsS0FKZDtBQUtFLGFBQU8sRUFBRTtBQUFBLGVBQU1rQixlQUFlLENBQUNJLElBQUksQ0FBQ3hCLEdBQU4sQ0FBckI7QUFBQSxPQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERztBQUFBLEdBRk4sQ0FESCxDQURGLENBbENGLENBREYsQ0FGRixFQXNERSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0REYsQ0FERjtBQTBERCxDQXhJRDs7R0FBTUYsZTs7S0FBQUEsZTtBQTBJU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxpc3QuanMuYzNjZDExMjBmY2EyZjQ1ZWE4MzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3RlclwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9pbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmQvcHJvZHVjdFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdExpc3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBpZHg6IDEsIG5hbWU6IFwi7IOI7Jqw6rmhXCIsIHByaWNlOiBcIjE1MDBcIiB9LFxyXG4gICAgeyBpZHg6IDIsIG5hbWU6IFwi6rOg6rWs66eI6rmhXCIsIHByaWNlOiBcIjIwMDBcIiB9LFxyXG4gICAgeyBpZHg6IDMsIG5hbWU6IFwi6rCQ7J6Q6rmhXCIsIHByaWNlOiBcIjE4MDBcIiB9LFxyXG4gICAgeyBpZHg6IDQsIG5hbWU6IFwi64uk7J207KCc7Iqk7YuwXCIsIHByaWNlOiBcIjEwMDAwXCIgfSxcclxuICAgIHsgaWR4OiA1LCBuYW1lOiBcIuy0iOy9lO2MjOydtFwiLCBwcmljZTogXCI1MDAwXCIgfSxcclxuICBdKTtcclxuICBjb25zdCBbc2VhcmNoVmFsLCBzZXRTZWFyY2hWYWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NyZWF0ZVByb2R1Y3RJbmZvLCBzZXRDcmVhdGVQcm9kdWN0SW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcHJpY2U6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2FyZCwgc2V0U2VsZWN0ZWRDYXJkXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIC8vIFNlYXJjaCBpbnB1dOydmCB2YWx1ZeulvCDsoIDsnqXtlbTrkaAuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoSW5wdXQgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldFNlYXJjaFZhbCh2YWx1ZSk7XHJcbiAgICAvLyBzZWFyY2hWYWwg7ZWY6rOgIHByb2R1Y3RMaXN0IOyViOyXkCDsnojripQgaXRlbS5uYW1l7J2EIOu5hOq1kFxyXG4gICAgLy8gZmlsdGVyIG1ldGhvZCDtmZzsmqlcclxuICAgIC8vIOqygOyDie2VnCDrrLjsnpDsl7TsnbQg7KG07J6s7ZWY64qU7KeAIO2VmOyngCDslYrripTsp4AgdHJ1ZeuhnCDrsJjtmZjqsJLsnbQg64KY7JisIOyImCDsnojrj4TroZ0oU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcygpIO2ZnOyaqSlcclxuICAgIC8qIHNldFByb2R1Y3RMaXN0KFxyXG4gICAgICBwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpdGVtLm5hbWUuaW5jbHVkZXModmFsdWUpKVxyXG4gICAgKTsgKi9cclxuICAgIC8vIOydtOugh+qyjCDqtaztmITtlZjrqbQg66y47KCc6rCAIOyeiOydjC4gcmVuZGVy7J2YIGJvZHkg67aA67aE7JeQ7IScIHByb2R1Y3RMaXN07JeQIGZpbHRlcuulvCDsoIHsmqkuXHJcblxyXG4gICAgLy8gYXJyYXkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaXRlbS5pbmRleE9mKCftirnsoJXsiqTtirjrp4EnKSA9PT0gaW5kZXgpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmV4dElkID0gdXNlUmVmKDYpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Q3JlYXRlUHJvZHVjdEluZm8oeyAuLi5jcmVhdGVQcm9kdWN0SW5mbywgW25hbWVdOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICAvKiBuYW1lLCBwcmljZSDsl5Ag7J6F66ClIO2bhCDrk7HroZ0g6riw64qlICovXHJcbiAgY29uc3Qgb25DcmVhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9kdWN0ID0ge1xyXG4gICAgICBpZHg6IG5leHRJZC5jdXJyZW50LFxyXG4gICAgICBuYW1lOiBjcmVhdGVQcm9kdWN0SW5mby5uYW1lLFxyXG4gICAgICBwcmljZTogY3JlYXRlUHJvZHVjdEluZm8ucHJpY2UsXHJcbiAgICB9O1xyXG4gICAgc2V0UHJvZHVjdExpc3QocHJvZHVjdExpc3QuY29uY2F0KG5ld1Byb2R1Y3QpKTtcclxuICAgIG5leHRJZC5jdXJyZW50ICs9IDE7XHJcbiAgICAvLyDrk7HroZ0g7ZuEIGlucHV0IOywveuTpCDstIjquLDtmZRcclxuICAgIHNldENyZWF0ZVByb2R1Y3RJbmZvKHsgbmFtZTogXCJcIiwgcHJpY2U6IFwiXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g7Lm065OcIOyEoO2DnVxyXG4gIGNvbnN0IGhhbmRsZUlzQ2xpY2tlZCA9IChpZHgpID0+IHtcclxuICAgIGFsZXJ0KFwi7ISg7YOd65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgIHNldFNlbGVjdGVkQ2FyZChpZHgpO1xyXG4gIH07XHJcblxyXG4gIC8qIOy5tOuTnOulvCDtgbTrpq3tlZjqs6Ag7YG066at7ZWcIOy5tOuTnOydmCDrs7TrjZTqsIAg67CU64CM6rOgIOyDge2SiOuqhSwg6rCA6rKpIOywveyXkCDsiJjsoJXtlaAg7IKs7ZWtIOyeheugpSDtm4Qg64uk7IucIOyImOyglSDrsoTtirwg64iE66W066m0IOyImOygleydtCDrkJzri6QuICovXHJcbiAgY29uc3Qgb25SZXZpc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0TGlzdChcclxuICAgICAgcHJvZHVjdExpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5pZHggPT09IHNlbGVjdGVkQ2FyZFxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICBuYW1lOiBjcmVhdGVQcm9kdWN0SW5mby5uYW1lLFxyXG4gICAgICAgICAgICAgIHByaWNlOiBjcmVhdGVQcm9kdWN0SW5mby5wcmljZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgOiBpdGVtO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIC8vIHByb2R1Y3RMaXN066W8IOq3uOuMgOuhnCDqsIDsoLjsmYDshJwsIGlkeCA9IDXsnbggaXRlbeyXkCDrjIDtlbTshJwgbmFtZeunjCDrs4Dqsr3tlZzri6QuXHJcbiAgICAvLyDqt7jqsowg7JWE64uQIOqyveyasOuKlCDqt7jrjIDroZwg65GU64ukLlxyXG4gIH07XHJcblxyXG4gIC8qIOuCtOqwgCDtgbTrpq3tlZwg7Lm065Oc66W8IOyCreygnO2VmOuKlCDroZzsp4HsnYQg7Kec7JW8IO2VnOuLpC4gKi9cclxuICBjb25zdCBvbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RMaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZHggIT09IHNlbGVjdGVkQ2FyZCkpO1xyXG4gICAgLy8gaWR47J2YIOqwkuydgCBudW1iZXLsnbTrr4DroZwg66y47J6Q7Je07J20IOyVhOuLmC5cclxuICB9O1xyXG4gIC8vXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uLWhlYWRcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLqsoDsg4lcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lLWlucHV0LWdyb3VwXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuyDge2SiOuqhVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZVByb2R1Y3RJbmZvLm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi6rCA6rKpXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZVByb2R1Y3RJbmZvLnByaWNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGJ0bkNvbG9yPVwiYnRuLWJsYWNrXCIgY2xpY2tDQj17b25DcmVhdGV9PlxyXG4gICAgICAgICAgICAgIOuTsSDroZ1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gYnRuQ29sb3I9XCJidG4tYmxhY2tcIiBjbGlja0NCPXtvblJldmlzZX0+XHJcbiAgICAgICAgICAgICAg7IiYIOyglVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBidG5Db2xvcj1cImJ0bi1ibGFja1wiIGNsaWNrQ0I9e29uRGVsZXRlfT5cclxuICAgICAgICAgICAgICDsgq0g7KCcXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0TGlzdFxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lLmluZGV4T2Yoc2VhcmNoVmFsKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR4fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PiBoYW5kbGVJc0NsaWNrZWQoaXRlbS5pZHgpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9