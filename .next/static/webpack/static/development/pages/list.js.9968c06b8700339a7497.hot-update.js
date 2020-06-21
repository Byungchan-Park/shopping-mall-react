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
  }, productList.map(function (item, index) {
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
        lineNumber: 127,
        columnNumber: 17
      }
    });
  }))))), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0UGFnZSIsInVzZVN0YXRlIiwiaWR4IiwibmFtZSIsInByaWNlIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInNlYXJjaFZhbCIsInNldFNlYXJjaFZhbCIsImNyZWF0ZVByb2R1Y3RJbmZvIiwic2V0Q3JlYXRlUHJvZHVjdEluZm8iLCJzZWxlY3RlZENhcmQiLCJzZXRTZWxlY3RlZENhcmQiLCJoYW5kbGVTZWFyY2hJbnB1dCIsInZhbHVlIiwibmV4dElkIiwidXNlUmVmIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJvbkNyZWF0ZSIsIm5ld1Byb2R1Y3QiLCJjdXJyZW50IiwiY29uY2F0IiwiaGFuZGxlSXNDbGlja2VkIiwiYWxlcnQiLCJvblJldmlzZSIsIm1hcCIsIml0ZW0iLCJvbkRlbGV0ZSIsImZpbHRlciIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLENBQzdDO0FBQUVDLE9BQUcsRUFBRSxDQUFQO0FBQVVDLFFBQUksRUFBRSxLQUFoQjtBQUF1QkMsU0FBSyxFQUFFO0FBQTlCLEdBRDZDLEVBRTdDO0FBQUVGLE9BQUcsRUFBRSxDQUFQO0FBQVVDLFFBQUksRUFBRSxNQUFoQjtBQUF3QkMsU0FBSyxFQUFFO0FBQS9CLEdBRjZDLEVBRzdDO0FBQUVGLE9BQUcsRUFBRSxDQUFQO0FBQVVDLFFBQUksRUFBRSxLQUFoQjtBQUF1QkMsU0FBSyxFQUFFO0FBQTlCLEdBSDZDLEVBSTdDO0FBQUVGLE9BQUcsRUFBRSxDQUFQO0FBQVVDLFFBQUksRUFBRSxPQUFoQjtBQUF5QkMsU0FBSyxFQUFFO0FBQWhDLEdBSjZDLEVBSzdDO0FBQUVG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QUFPLEVBQUVHLFFBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0JGLENBREYsRUFrQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d0QixXQUFXLENBQUNvQixHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBT0csS0FBUDtBQUFBLFdBQ2YsTUFBQyxnRUFBRDtBQUNFLFNBQUcsRUFBRUEsS0FEUDtBQUVFLFFBQUUsRUFBRUgsSUFBSSxDQUFDeEIsR0FGWDtBQUdFLFVBQUksRUFBRXdCLElBQUksQ0FBQ3ZCLElBSGI7QUFJRSxXQUFLLEVBQUV1QixJQUFJLENBQUN0QixLQUpkO0FBS0UsYUFBTyxFQUFFO0FBQUEsZUFBTWtCLGVBQWUsQ0FBQ0ksSUFBSSxDQUFDeEIsR0FBTixDQUFyQjtBQUFBLE9BTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURlO0FBQUEsR0FBaEIsQ0FESCxDQURGLENBbENGLENBREYsQ0FGRixFQW9ERSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwREYsQ0FERjtBQXdERCxDQXRJRDs7R0FBTUYsZTs7S0FBQUEsZTtBQXdJU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxpc3QuanMuOTk2OGMwNmI4NzAwMzM5YTc0OTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3RlclwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9pbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmQvcHJvZHVjdFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdExpc3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBpZHg6IDEsIG5hbWU6IFwi7IOI7Jqw6rmhXCIsIHByaWNlOiBcIjE1MDBcIiB9LFxyXG4gICAgeyBpZHg6IDIsIG5hbWU6IFwi6rOg6rWs66eI6rmhXCIsIHByaWNlOiBcIjIwMDBcIiB9LFxyXG4gICAgeyBpZHg6IDMsIG5hbWU6IFwi6rCQ7J6Q6rmhXCIsIHByaWNlOiBcIjE4MDBcIiB9LFxyXG4gICAgeyBpZHg6IDQsIG5hbWU6IFwi64uk7J207KCc7Iqk7YuwXCIsIHByaWNlOiBcIjEwMDAwXCIgfSxcclxuICAgIHsgaWR4OiA1LCBuYW1lOiBcIuy0iOy9lO2MjOydtFwiLCBwcmljZTogXCI1MDAwXCIgfSxcclxuICBdKTtcclxuICBjb25zdCBbc2VhcmNoVmFsLCBzZXRTZWFyY2hWYWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NyZWF0ZVByb2R1Y3RJbmZvLCBzZXRDcmVhdGVQcm9kdWN0SW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcHJpY2U6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2FyZCwgc2V0U2VsZWN0ZWRDYXJkXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIC8vIFNlYXJjaCBpbnB1dOydmCB2YWx1ZeulvCDsoIDsnqXtlbTrkaAuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoSW5wdXQgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldFNlYXJjaFZhbCh2YWx1ZSk7XHJcbiAgICAvLyBzZWFyY2hWYWwg7ZWY6rOgIHByb2R1Y3RMaXN0IOyViOyXkCDsnojripQgaXRlbS5uYW1l7J2EIOu5hOq1kFxyXG4gICAgLy8gZmlsdGVyIG1ldGhvZCDtmZzsmqlcclxuICAgIC8vIOqygOyDie2VnCDrrLjsnpDsl7TsnbQg7KG07J6s7ZWY64qU7KeAIO2VmOyngCDslYrripTsp4AgdHJ1ZeuhnCDrsJjtmZjqsJLsnbQg64KY7JisIOyImCDsnojrj4TroZ0oU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcygpIO2ZnOyaqSlcclxuICAgIC8qIHNldFByb2R1Y3RMaXN0KFxyXG4gICAgICBwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpdGVtLm5hbWUuaW5jbHVkZXModmFsdWUpKVxyXG4gICAgKTsgKi9cclxuICAgIC8vIOydtOugh+qyjCDqtaztmITtlZjrqbQg66y47KCc6rCAIOyeiOydjC4gcmVuZGVy7J2YIGJvZHkg67aA67aE7JeQ7IScIHByb2R1Y3RMaXN07JeQIGZpbHRlcuulvCDsoIHsmqkuXHJcblxyXG4gICAgLy8gYXJyYXkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaXRlbS5pbmRleE9mKCftirnsoJXsiqTtirjrp4EnKSA9PT0gaW5kZXgpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmV4dElkID0gdXNlUmVmKDYpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Q3JlYXRlUHJvZHVjdEluZm8oeyAuLi5jcmVhdGVQcm9kdWN0SW5mbywgW25hbWVdOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICAvKiBuYW1lLCBwcmljZSDsl5Ag7J6F66ClIO2bhCDrk7HroZ0g6riw64qlICovXHJcbiAgY29uc3Qgb25DcmVhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9kdWN0ID0ge1xyXG4gICAgICBpZHg6IG5leHRJZC5jdXJyZW50LFxyXG4gICAgICBuYW1lOiBjcmVhdGVQcm9kdWN0SW5mby5uYW1lLFxyXG4gICAgICBwcmljZTogY3JlYXRlUHJvZHVjdEluZm8ucHJpY2UsXHJcbiAgICB9O1xyXG4gICAgc2V0UHJvZHVjdExpc3QocHJvZHVjdExpc3QuY29uY2F0KG5ld1Byb2R1Y3QpKTtcclxuICAgIG5leHRJZC5jdXJyZW50ICs9IDE7XHJcbiAgICAvLyDrk7HroZ0g7ZuEIGlucHV0IOywveuTpCDstIjquLDtmZRcclxuICAgIHNldENyZWF0ZVByb2R1Y3RJbmZvKHsgbmFtZTogXCJcIiwgcHJpY2U6IFwiXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g7Lm065OcIOyEoO2DnVxyXG4gIGNvbnN0IGhhbmRsZUlzQ2xpY2tlZCA9IChpZHgpID0+IHtcclxuICAgIGFsZXJ0KFwi7ISg7YOd65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgIHNldFNlbGVjdGVkQ2FyZChpZHgpO1xyXG4gIH07XHJcblxyXG4gIC8qIOy5tOuTnOulvCDtgbTrpq3tlZjqs6Ag7YG066at7ZWcIOy5tOuTnOydmCDrs7TrjZTqsIAg67CU64CM6rOgIOyDge2SiOuqhSwg6rCA6rKpIOywveyXkCDsiJjsoJXtlaAg7IKs7ZWtIOyeheugpSDtm4Qg64uk7IucIOyImOyglSDrsoTtirwg64iE66W066m0IOyImOygleydtCDrkJzri6QuICovXHJcbiAgY29uc3Qgb25SZXZpc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0TGlzdChcclxuICAgICAgcHJvZHVjdExpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5pZHggPT09IHNlbGVjdGVkQ2FyZFxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICBuYW1lOiBjcmVhdGVQcm9kdWN0SW5mby5uYW1lLFxyXG4gICAgICAgICAgICAgIHByaWNlOiBjcmVhdGVQcm9kdWN0SW5mby5wcmljZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgOiBpdGVtO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIC8vIHByb2R1Y3RMaXN066W8IOq3uOuMgOuhnCDqsIDsoLjsmYDshJwsIGlkeCA9IDXsnbggaXRlbeyXkCDrjIDtlbTshJwgbmFtZeunjCDrs4Dqsr3tlZzri6QuXHJcbiAgICAvLyDqt7jqsowg7JWE64uQIOqyveyasOuKlCDqt7jrjIDroZwg65GU64ukLlxyXG4gIH07XHJcblxyXG4gIC8qIOuCtOqwgCDtgbTrpq3tlZwg7Lm065Oc66W8IOyCreygnO2VmOuKlCDroZzsp4HsnYQg7Kec7JW8IO2VnOuLpC4gKi9cclxuICBjb25zdCBvbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RMaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZHggIT09IHNlbGVjdGVkQ2FyZCkpO1xyXG4gICAgLy8gaWR47J2YIOqwkuydgCBudW1iZXLsnbTrr4DroZwg66y47J6Q7Je07J20IOyVhOuLmC5cclxuICB9O1xyXG4gIC8vXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uLWhlYWRcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLqsoDsg4lcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lLWlucHV0LWdyb3VwXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuyDge2SiOuqhVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZVByb2R1Y3RJbmZvLm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi6rCA6rKpXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZVByb2R1Y3RJbmZvLnByaWNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGJ0bkNvbG9yPVwiYnRuLWJsYWNrXCIgY2xpY2tDQj17b25DcmVhdGV9PlxyXG4gICAgICAgICAgICAgIOuTsSDroZ1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gYnRuQ29sb3I9XCJidG4tYmxhY2tcIiBjbGlja0NCPXtvblJldmlzZX0+XHJcbiAgICAgICAgICAgICAg7IiYIOyglVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBidG5Db2xvcj1cImJ0bi1ibGFja1wiIGNsaWNrQ0I9e29uRGVsZXRlfT5cclxuICAgICAgICAgICAgICDsgq0g7KCcXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZHh9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsaWNrQ0I9eygpID0+IGhhbmRsZUlzQ2xpY2tlZChpdGVtLmlkeCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==