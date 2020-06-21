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
      createProductInfo = _useState3[0],
      setCreateProductInfo = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      selectedCard = _useState4[0],
      setSelectedCard = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showConfirm = _useState5[0],
      setShowConfirm = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      mainText = _useState6[0],
      setMainText = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      subText = _useState7[0],
      setSubText = _useState7[1];

  var handleShowConfirm = function handleShowConfirm(main, sub) {
    setMainText(main);
    setSubText(sub);
  }; // 취소 버튼 누르면,


  var handleCloseBtn = function handleCloseBtn() {
    setMainText("");
    setSubText(""); // text들 초기화

    setSelectedCard(); // 선택한 카드 state 초기화

    setShowConfirm(false);
  }; // Search input의 value를 저장해둠.


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

    setSelectedCard(); // 다음 선택할 카드를 위해 초기화

    setShowConfirm(false); // 1초 후 모달창이 닫힌다.

    setMainText("");
    setSubText("");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (mainText) {
      setShowConfirm(true);
    }
  }, [mainText, subText]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_layout_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "list-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
      lineNumber: 122,
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
      lineNumber: 129,
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
      lineNumber: 137,
      columnNumber: 13
    }
  }), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnColor: "btn-black",
    clickCB: function clickCB() {
      return handleShowConfirm("등록하시겠습니까?", "새로 추가됩니다.");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "\uB4F1 \uB85D"), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnColor: "btn-black",
    clickCB: function clickCB() {
      return handleShowConfirm("수정하시겠습니까?", "선택한 카드가 수정됩니다.");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, "\uC218 \uC815"), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnColor: "btn-black",
    clickCB: function clickCB() {
      return handleShowConfirm("삭제하시겠습니까?", "영구 삭제됩니다.");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, "\uC0AD \uC81C")), __jsx("div", {
    className: "con-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
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
        lineNumber: 177,
        columnNumber: 19
      }
    });
  }))))), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }), __jsx(_components_modal_confirm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: showConfirm,
    mainText: mainText,
    subText: subText,
    onCloseCB: handleCloseBtn,
    onConfirmCB: function onConfirmCB() {
      return onDelete();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }), "/>");
};

_s(ProductListPage, "5pwQhLHE8J+RiPD+H4N1pEDwhPc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0UGFnZSIsInVzZVN0YXRlIiwiaWR4IiwibmFtZSIsInByaWNlIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInNlYXJjaFZhbCIsInNldFNlYXJjaFZhbCIsImNyZWF0ZVByb2R1Y3RJbmZvIiwic2V0Q3JlYXRlUHJvZHVjdEluZm8iLCJzZWxlY3RlZENhcmQiLCJzZXRTZWxlY3RlZENhcmQiLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwibWFpblRleHQiLCJzZXRNYWluVGV4dCIsInN1YlRleHQiLCJzZXRTdWJUZXh0IiwiaGFuZGxlU2hvd0NvbmZpcm0iLCJtYWluIiwic3ViIiwiaGFuZGxlQ2xvc2VCdG4iLCJoYW5kbGVTZWFyY2hJbnB1dCIsInZhbHVlIiwibmV4dElkIiwidXNlUmVmIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJvbkNyZWF0ZSIsIm5ld1Byb2R1Y3QiLCJjdXJyZW50IiwiY29uY2F0IiwiaGFuZGxlSXNDbGlja2VkIiwiYWxlcnQiLCJvblJldmlzZSIsIm1hcCIsIml0ZW0iLCJvbkRlbGV0ZSIsImZpbHRlciIsInVzZUVmZmVjdCIsImluZGV4T2YiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxDQUM3QztBQUFFQyxPQUFHLEVBQUUsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsS0FBaEI7QUFBdUJDLFNBQUssRUFBRTtBQUE5QixHQUQ2QyxFQUU3QztBQUFFRixPQUFHLEVBQUUsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsTUFBaEI7QUFBd0JDLFNBQUssRUFBRTtBQUEvQixHQUY2QyxFQUc3QztBQUFF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QUFRLEVBQUVFLFFBRlo7QUFHRSxXQUFPLEVBQUVFLE9BSFg7QUFJRSxhQUFTLEVBQUVLLGNBSmI7QUFLRSxlQUFXLEVBQUU7QUFBQSxhQUFNZSxRQUFRLEVBQWQ7QUFBQSxLQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6RUYsT0FERjtBQW9GRCxDQS9MRDs7R0FBTXJDLGU7O0tBQUFBLGU7QUFpTVNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsaXN0LmpzLjJiNDg3ZmVjNTQxOTcxODE2MzE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9mb290ZXJcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vaW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtL2J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkL3Byb2R1Y3RcIjtcclxuaW1wb3J0IENvbmZpcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWwvY29uZmlybVwiO1xyXG5cclxuY29uc3QgUHJvZHVjdExpc3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBpZHg6IDEsIG5hbWU6IFwi7IOI7Jqw6rmhXCIsIHByaWNlOiBcIjE1MDBcIiB9LFxyXG4gICAgeyBpZHg6IDIsIG5hbWU6IFwi6rOg6rWs66eI6rmhXCIsIHByaWNlOiBcIjIwMDBcIiB9LFxyXG4gICAgeyBpZHg6IDMsIG5hbWU6IFwi6rCQ7J6Q6rmhXCIsIHByaWNlOiBcIjE4MDBcIiB9LFxyXG4gICAgeyBpZHg6IDQsIG5hbWU6IFwi64uk7J207KCc7Iqk7YuwXCIsIHByaWNlOiBcIjEwMDAwXCIgfSxcclxuICAgIHsgaWR4OiA1LCBuYW1lOiBcIuy0iOy9lO2MjOydtFwiLCBwcmljZTogXCI1MDAwXCIgfSxcclxuICBdKTtcclxuICBjb25zdCBbc2VhcmNoVmFsLCBzZXRTZWFyY2hWYWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NyZWF0ZVByb2R1Y3RJbmZvLCBzZXRDcmVhdGVQcm9kdWN0SW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcHJpY2U6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2FyZCwgc2V0U2VsZWN0ZWRDYXJkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3Nob3dDb25maXJtLCBzZXRTaG93Q29uZmlybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21haW5UZXh0LCBzZXRNYWluVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3ViVGV4dCwgc2V0U3ViVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbmZpcm0gPSAobWFpbiwgc3ViKSA9PiB7XHJcbiAgICBzZXRNYWluVGV4dChtYWluKTtcclxuICAgIHNldFN1YlRleHQoc3ViKTtcclxuICB9O1xyXG5cclxuICAvLyDst6jshowg67KE7Yq8IOuIhOultOuptCxcclxuICBjb25zdCBoYW5kbGVDbG9zZUJ0biA9ICgpID0+IHtcclxuICAgIHNldE1haW5UZXh0KFwiXCIpO1xyXG4gICAgc2V0U3ViVGV4dChcIlwiKTtcclxuICAgIC8vIHRleHTrk6Qg7LSI6riw7ZmUXHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIC8vIOyEoO2Dne2VnCDsubTrk5wgc3RhdGUg7LSI6riw7ZmUXHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gU2VhcmNoIGlucHV07J2YIHZhbHVl66W8IOyggOyepe2VtOuRoC5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hJbnB1dCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVmFsKHZhbHVlKTtcclxuICAgIC8vIHNlYXJjaFZhbCDtlZjqs6AgcHJvZHVjdExpc3Qg7JWI7JeQIOyeiOuKlCBpdGVtLm5hbWXsnYQg67mE6rWQXHJcbiAgICAvLyBmaWx0ZXIgbWV0aG9kIO2ZnOyaqVxyXG4gICAgLy8g6rKA7IOJ7ZWcIOusuOyekOyXtOydtCDsobTsnqztlZjripTsp4Ag7ZWY7KeAIOyViuuKlOyngCB0cnVl66GcIOuwmO2ZmOqwkuydtCDrgpjsmKwg7IiYIOyeiOuPhOuhnShTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKCkg7Zmc7JqpKVxyXG4gICAgLyogc2V0UHJvZHVjdExpc3QoXHJcbiAgICAgIHByb2R1Y3RMaXN0LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGl0ZW0ubmFtZS5pbmNsdWRlcyh2YWx1ZSkpXHJcbiAgICApOyAqL1xyXG4gICAgLy8g7J2066CH6rKMIOq1rO2YhO2VmOuptCDrrLjsoJzqsIAg7J6I7J2MLiByZW5kZXLsnZggYm9keSDrtoDrtoTsl5DshJwgcHJvZHVjdExpc3Tsl5AgZmlsdGVy66W8IOyggeyaqS5cclxuXHJcbiAgICAvLyBhcnJheS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpdGVtLmluZGV4T2YoJ+2KueygleyKpO2KuOungScpID09PSBpbmRleClcclxuICB9O1xyXG5cclxuICBjb25zdCBuZXh0SWQgPSB1c2VSZWYoNik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRDcmVhdGVQcm9kdWN0SW5mbyh7IC4uLmNyZWF0ZVByb2R1Y3RJbmZvLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qIG5hbWUsIHByaWNlIOyXkCDsnoXroKUg7ZuEIOuTseuhnSDquLDriqUgKi9cclxuICBjb25zdCBvbkNyZWF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSB7XHJcbiAgICAgIGlkeDogbmV4dElkLmN1cnJlbnQsXHJcbiAgICAgIG5hbWU6IGNyZWF0ZVByb2R1Y3RJbmZvLm5hbWUsXHJcbiAgICAgIHByaWNlOiBjcmVhdGVQcm9kdWN0SW5mby5wcmljZSxcclxuICAgIH07XHJcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0TGlzdC5jb25jYXQobmV3UHJvZHVjdCkpO1xyXG4gICAgbmV4dElkLmN1cnJlbnQgKz0gMTtcclxuICAgIC8vIOuTseuhnSDtm4QgaW5wdXQg7LC965OkIOy0iOq4sO2ZlFxyXG4gICAgc2V0Q3JlYXRlUHJvZHVjdEluZm8oeyBuYW1lOiBcIlwiLCBwcmljZTogXCJcIiB9KTtcclxuICB9O1xyXG5cclxuICAvLyDsubTrk5wg7ISg7YOdXHJcbiAgY29uc3QgaGFuZGxlSXNDbGlja2VkID0gKGlkeCkgPT4ge1xyXG4gICAgYWxlcnQoXCLshKDtg53rkJjsl4jsirXri4jri6QuXCIpO1xyXG4gICAgc2V0U2VsZWN0ZWRDYXJkKGlkeCk7XHJcbiAgfTtcclxuXHJcbiAgLyog7Lm065Oc66W8IO2BtOumre2VmOqzoCDtgbTrpq3tlZwg7Lm065Oc7J2YIOuztOuNlOqwgCDrsJTrgIzqs6Ag7IOB7ZKI66qFLCDqsIDqsqkg7LC97JeQIOyImOygle2VoCDsgqztla0g7J6F66ClIO2bhCDri6Tsi5wg7IiY7KCVIOuyhO2KvCDriITrpbTrqbQg7IiY7KCV7J20IOuQnOuLpC4gKi9cclxuICBjb25zdCBvblJldmlzZSA9ICgpID0+IHtcclxuICAgIHNldFByb2R1Y3RMaXN0KFxyXG4gICAgICBwcm9kdWN0TGlzdC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmlkeCA9PT0gc2VsZWN0ZWRDYXJkXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgICAgICAgIG5hbWU6IGNyZWF0ZVByb2R1Y3RJbmZvLm5hbWUsXHJcbiAgICAgICAgICAgICAgcHJpY2U6IGNyZWF0ZVByb2R1Y3RJbmZvLnByaWNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA6IGl0ZW07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgLy8gcHJvZHVjdExpc3Trpbwg6re464yA66GcIOqwgOyguOyZgOyEnCwgaWR4ID0gNeyduCBpdGVt7JeQIOuMgO2VtOyEnCBuYW1l66eMIOuzgOqyve2VnOuLpC5cclxuICAgIC8vIOq3uOqyjCDslYTri5Ag6rK97Jqw64qUIOq3uOuMgOuhnCDrkZTri6QuXHJcbiAgfTtcclxuXHJcbiAgLyog64K06rCAIO2BtOumre2VnCDsubTrk5zrpbwg7IKt7KCc7ZWY64qUIOuhnOyngeydhCDsp5zslbwg7ZWc64ukLiAqL1xyXG4gIGNvbnN0IG9uRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdExpc3QocHJvZHVjdExpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkeCAhPT0gc2VsZWN0ZWRDYXJkKSk7XHJcbiAgICAvLyBpZHjsnZgg6rCS7J2AIG51bWJlcuydtOuvgOuhnCDrrLjsnpDsl7TsnbQg7JWE64uYLlxyXG4gICAgc2V0U2VsZWN0ZWRDYXJkKCk7XHJcbiAgICAvLyDri6TsnYwg7ISg7YOd7ZWgIOy5tOuTnOulvCDsnITtlbQg7LSI6riw7ZmUXHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICAvLyAx7LSIIO2bhCDrqqjri6zssL3snbQg64ur7Z6M64ukLlxyXG4gICAgc2V0TWFpblRleHQoXCJcIik7XHJcbiAgICBzZXRTdWJUZXh0KFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWFpblRleHQpIHtcclxuICAgICAgc2V0U2hvd0NvbmZpcm0odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW21haW5UZXh0LCBzdWJUZXh0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uLWhlYWRcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLqsoDsg4lcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lLWlucHV0LWdyb3VwXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuyDge2SiOuqhVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZVByb2R1Y3RJbmZvLm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi6rCA6rKpXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZVByb2R1Y3RJbmZvLnByaWNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgYnRuQ29sb3I9XCJidG4tYmxhY2tcIlxyXG4gICAgICAgICAgICAgIGNsaWNrQ0I9eygpID0+XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTaG93Q29uZmlybShcIuuTseuhne2VmOyLnOqyoOyKteuLiOq5jD9cIiwgXCLsg4jroZwg7LaU6rCA65Cp64uI64ukLlwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOuTsSDroZ1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBidG5Db2xvcj1cImJ0bi1ibGFja1wiXHJcbiAgICAgICAgICAgICAgY2xpY2tDQj17KCkgPT5cclxuICAgICAgICAgICAgICAgIGhhbmRsZVNob3dDb25maXJtKFxyXG4gICAgICAgICAgICAgICAgICBcIuyImOygle2VmOyLnOqyoOyKteuLiOq5jD9cIixcclxuICAgICAgICAgICAgICAgICAgXCLshKDtg53tlZwg7Lm065Oc6rCAIOyImOygleuQqeuLiOuLpC5cIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOyImCDsoJVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBidG5Db2xvcj1cImJ0bi1ibGFja1wiXHJcbiAgICAgICAgICAgICAgY2xpY2tDQj17KCkgPT5cclxuICAgICAgICAgICAgICAgIGhhbmRsZVNob3dDb25maXJtKFwi7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLCBcIuyYgeq1rCDsgq3soJzrkKnri4jri6QuXCIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg7IKtIOygnFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb24tYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICB7cHJvZHVjdExpc3RcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubmFtZS5pbmRleE9mKHNlYXJjaFZhbCkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkeH1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDQj17KCkgPT4gaGFuZGxlSXNDbGlja2VkKGl0ZW0uaWR4KX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8Q29uZmlybVxyXG4gICAgICAgIHNob3c9e3Nob3dDb25maXJtfVxyXG4gICAgICAgIG1haW5UZXh0PXttYWluVGV4dH1cclxuICAgICAgICBzdWJUZXh0PXtzdWJUZXh0fVxyXG4gICAgICAgIG9uQ2xvc2VDQj17aGFuZGxlQ2xvc2VCdG59XHJcbiAgICAgICAgb25Db25maXJtQ0I9eygpID0+IG9uRGVsZXRlKCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9