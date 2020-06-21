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
    setShowConfirm(false);
    setMainText("");
    setSubText("");
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

    setShowConfirm(false);
    setMainText("");
    setSubText("");
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
      lineNumber: 124,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "list-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 128,
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
      lineNumber: 135,
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
      lineNumber: 143,
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
      lineNumber: 150,
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
      lineNumber: 158,
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
      lineNumber: 169,
      columnNumber: 13
    }
  }, "\uC0AD \uC81C")), __jsx("div", {
    className: "con-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
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
        lineNumber: 183,
        columnNumber: 19
      }
    });
  }))))), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
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
      lineNumber: 196,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0UGFnZSIsInVzZVN0YXRlIiwiaWR4IiwibmFtZSIsInByaWNlIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInNlYXJjaFZhbCIsInNldFNlYXJjaFZhbCIsImNyZWF0ZVByb2R1Y3RJbmZvIiwic2V0Q3JlYXRlUHJvZHVjdEluZm8iLCJzZWxlY3RlZENhcmQiLCJzZXRTZWxlY3RlZENhcmQiLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwibWFpblRleHQiLCJzZXRNYWluVGV4dCIsInN1YlRleHQiLCJzZXRTdWJUZXh0IiwiaGFuZGxlU2hvd0NvbmZpcm0iLCJtYWluIiwic3ViIiwiaGFuZGxlQ2xvc2VCdG4iLCJoYW5kbGVTZWFyY2hJbnB1dCIsInZhbHVlIiwibmV4dElkIiwidXNlUmVmIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJvbkNyZWF0ZSIsIm5ld1Byb2R1Y3QiLCJjdXJyZW50IiwiY29uY2F0IiwiaGFuZGxlSXNDbGlja2VkIiwiYWxlcnQiLCJvblJldmlzZSIsIm1hcCIsIml0ZW0iLCJvbkRlbGV0ZSIsImZpbHRlciIsInVzZUVmZmVjdCIsImluZGV4T2YiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxDQUM3QztBQUFFQyxPQUFHLEVBQUUsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsS0FBaEI7QUFBdUJDLFNBQUssRUFBRTtBQUE5QixHQUQ2QyxFQUU3QztBQUFFRixPQUFHLEVBQUUsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsTUFBaEI7QUFBd0JDLFNBQUssRUFBRTtBQUEvQixHQUY2QyxFQUc3QztBQUFF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QUE7QUFBQTtBQUFBO0FBQUEsTUFERztBQUFBLEdBRk4sQ0FESCxDQURGLENBcERGLENBREYsQ0FGRixFQXdFRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4RUYsRUF5RUUsTUFBQyxpRUFBRDtBQUNFLFFBQUksRUFBRVcsV0FEUjtBQUVFLFlBQVEsRUFBRUUsUUFGWjtBQUdFLFdBQU8sRUFBRUUsT0FIWDtBQUlFLGFBQVMsRUFBRUssY0FKYjtBQUtFLGVBQVcsRUFBRTtBQUFBLGFBQU1lLFFBQVEsRUFBZDtBQUFBLEtBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpFRixPQURGO0FBb0ZELENBck1EOztHQUFNckMsZTs7S0FBQUEsZTtBQXVNU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxpc3QuanMuZjU3YjVjNWFjOTk3ZTZlM2NkZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3RlclwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9pbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmQvcHJvZHVjdFwiO1xyXG5pbXBvcnQgQ29uZmlybSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbC9jb25maXJtXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGlkeDogMSwgbmFtZTogXCLsg4jsmrDquaFcIiwgcHJpY2U6IFwiMTUwMFwiIH0sXHJcbiAgICB7IGlkeDogMiwgbmFtZTogXCLqs6Dqtazrp4jquaFcIiwgcHJpY2U6IFwiMjAwMFwiIH0sXHJcbiAgICB7IGlkeDogMywgbmFtZTogXCLqsJDsnpDquaFcIiwgcHJpY2U6IFwiMTgwMFwiIH0sXHJcbiAgICB7IGlkeDogNCwgbmFtZTogXCLri6TsnbTsoJzsiqTti7BcIiwgcHJpY2U6IFwiMTAwMDBcIiB9LFxyXG4gICAgeyBpZHg6IDUsIG5hbWU6IFwi7LSI7L2U7YyM7J20XCIsIHByaWNlOiBcIjUwMDBcIiB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IFtzZWFyY2hWYWwsIHNldFNlYXJjaFZhbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3JlYXRlUHJvZHVjdEluZm8sIHNldENyZWF0ZVByb2R1Y3RJbmZvXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBwcmljZTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbc2VsZWN0ZWRDYXJkLCBzZXRTZWxlY3RlZENhcmRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2hvd0NvbmZpcm0sIHNldFNob3dDb25maXJtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWFpblRleHQsIHNldE1haW5UZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWJUZXh0LCBzZXRTdWJUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93Q29uZmlybSA9IChtYWluLCBzdWIpID0+IHtcclxuICAgIHNldE1haW5UZXh0KG1haW4pO1xyXG4gICAgc2V0U3ViVGV4dChzdWIpO1xyXG4gIH07XHJcblxyXG4gIC8vIOy3qOyGjCDrsoTtirwg64iE66W066m0LFxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQnRuID0gKCkgPT4ge1xyXG4gICAgc2V0TWFpblRleHQoXCJcIik7XHJcbiAgICBzZXRTdWJUZXh0KFwiXCIpO1xyXG4gICAgLy8gdGV4dOuTpCDstIjquLDtmZRcclxuICAgIHNldFNlbGVjdGVkQ2FyZCgpO1xyXG4gICAgLy8g7ISg7YOd7ZWcIOy5tOuTnCBzdGF0ZSDstIjquLDtmZRcclxuICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICAvLyBTZWFyY2ggaW5wdXTsnZggdmFsdWXrpbwg7KCA7J6l7ZW065GgLlxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaElucHV0ID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hWYWwodmFsdWUpO1xyXG4gICAgLy8gc2VhcmNoVmFsIO2VmOqzoCBwcm9kdWN0TGlzdCDslYjsl5Ag7J6I64qUIGl0ZW0ubmFtZeydhCDruYTqtZBcclxuICAgIC8vIGZpbHRlciBtZXRob2Qg7Zmc7JqpXHJcbiAgICAvLyDqsoDsg4ntlZwg66y47J6Q7Je07J20IOyhtOyerO2VmOuKlOyngCDtlZjsp4Ag7JWK64qU7KeAIHRydWXroZwg67CY7ZmY6rCS7J20IOuCmOyYrCDsiJgg7J6I64+E66GdKFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoKSDtmZzsmqkpXHJcbiAgICAvKiBzZXRQcm9kdWN0TGlzdChcclxuICAgICAgcHJvZHVjdExpc3QuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaXRlbS5uYW1lLmluY2x1ZGVzKHZhbHVlKSlcclxuICAgICk7ICovXHJcbiAgICAvLyDsnbTroIfqsowg6rWs7ZiE7ZWY66m0IOusuOygnOqwgCDsnojsnYwuIHJlbmRlcuydmCBib2R5IOu2gOu2hOyXkOyEnCBwcm9kdWN0TGlzdOyXkCBmaWx0ZXLrpbwg7KCB7JqpLlxyXG5cclxuICAgIC8vIGFycmF5LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGl0ZW0uaW5kZXhPZign7Yq57KCV7Iqk7Yq466eBJykgPT09IGluZGV4KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5leHRJZCA9IHVzZVJlZig2KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldENyZWF0ZVByb2R1Y3RJbmZvKHsgLi4uY3JlYXRlUHJvZHVjdEluZm8sIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyogbmFtZSwgcHJpY2Ug7JeQIOyeheugpSDtm4Qg65Ox66GdIOq4sOuKpSAqL1xyXG4gIGNvbnN0IG9uQ3JlYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgaWR4OiBuZXh0SWQuY3VycmVudCxcclxuICAgICAgbmFtZTogY3JlYXRlUHJvZHVjdEluZm8ubmFtZSxcclxuICAgICAgcHJpY2U6IGNyZWF0ZVByb2R1Y3RJbmZvLnByaWNlLFxyXG4gICAgfTtcclxuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RMaXN0LmNvbmNhdChuZXdQcm9kdWN0KSk7XHJcbiAgICBuZXh0SWQuY3VycmVudCArPSAxO1xyXG4gICAgLy8g65Ox66GdIO2bhCBpbnB1dCDssL3rk6Qg7LSI6riw7ZmUXHJcbiAgICBzZXRDcmVhdGVQcm9kdWN0SW5mbyh7IG5hbWU6IFwiXCIsIHByaWNlOiBcIlwiIH0pO1xyXG4gICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xyXG4gICAgc2V0TWFpblRleHQoXCJcIik7XHJcbiAgICBzZXRTdWJUZXh0KFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIOy5tOuTnCDshKDtg51cclxuICBjb25zdCBoYW5kbGVJc0NsaWNrZWQgPSAoaWR4KSA9PiB7XHJcbiAgICBhbGVydChcIuyEoO2DneuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoaWR4KTtcclxuICB9O1xyXG5cclxuICAvKiDsubTrk5zrpbwg7YG066at7ZWY6rOgIO2BtOumre2VnCDsubTrk5zsnZgg67O0642U6rCAIOuwlOuAjOqzoCDsg4HtkojrqoUsIOqwgOqyqSDssL3sl5Ag7IiY7KCV7ZWgIOyCrO2VrSDsnoXroKUg7ZuEIOuLpOyLnCDsiJjsoJUg67KE7Yq8IOuIhOultOuptCDsiJjsoJXsnbQg65Cc64ukLiAqL1xyXG4gIGNvbnN0IG9uUmV2aXNlID0gKCkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdExpc3QoXHJcbiAgICAgIHByb2R1Y3RMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uaWR4ID09PSBzZWxlY3RlZENhcmRcclxuICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgbmFtZTogY3JlYXRlUHJvZHVjdEluZm8ubmFtZSxcclxuICAgICAgICAgICAgICBwcmljZTogY3JlYXRlUHJvZHVjdEluZm8ucHJpY2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogaXRlbTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICAvLyBwcm9kdWN0TGlzdOulvCDqt7jrjIDroZwg6rCA7KC47JmA7IScLCBpZHggPSA17J24IGl0ZW3sl5Ag64yA7ZW07IScIG5hbWXrp4wg67OA6rK97ZWc64ukLlxyXG4gICAgLy8g6re46rKMIOyVhOuLkCDqsr3smrDripQg6re464yA66GcIOuRlOuLpC5cclxuICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICAgIHNldE1haW5UZXh0KFwiXCIpO1xyXG4gICAgc2V0U3ViVGV4dChcIlwiKTtcclxuICB9O1xyXG5cclxuICAvKiDrgrTqsIAg7YG066at7ZWcIOy5tOuTnOulvCDsgq3soJztlZjripQg66Gc7KeB7J2EIOynnOyVvCDtlZzri6QuICovXHJcbiAgY29uc3Qgb25EZWxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWR4ICE9PSBzZWxlY3RlZENhcmQpKTtcclxuICAgIC8vIGlkeOydmCDqsJLsnYAgbnVtYmVy7J2066+A66GcIOusuOyekOyXtOydtCDslYTri5guXHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIC8vIOuLpOydjCDshKDtg53tlaAg7Lm065Oc66W8IOychO2VtCDstIjquLDtmZRcclxuICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICAgIC8vIDHstIgg7ZuEIOuqqOuLrOywveydtCDri6vtnozri6QuXHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtYWluVGV4dCkge1xyXG4gICAgICBzZXRTaG93Q29uZmlybSh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbbWFpblRleHQsIHN1YlRleHRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb24taGVhZFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIuqygOyDiVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIGNoYW5nZUNCPXtoYW5kbGVTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWUtaW5wdXQtZ3JvdXBcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi7IOB7ZKI66qFXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIGNoYW5nZUNCPXtoYW5kbGVDaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y3JlYXRlUHJvZHVjdEluZm8ubmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLqsIDqsqlcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgIGNoYW5nZUNCPXtoYW5kbGVDaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y3JlYXRlUHJvZHVjdEluZm8ucHJpY2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBidG5Db2xvcj1cImJ0bi1ibGFja1wiXHJcbiAgICAgICAgICAgICAgY2xpY2tDQj17KCkgPT5cclxuICAgICAgICAgICAgICAgIGhhbmRsZVNob3dDb25maXJtKFwi65Ox66Gd7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLCBcIuyDiOuhnCDstpTqsIDrkKnri4jri6QuXCIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg65OxIOuhnVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGJ0bkNvbG9yPVwiYnRuLWJsYWNrXCJcclxuICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlU2hvd0NvbmZpcm0oXHJcbiAgICAgICAgICAgICAgICAgIFwi7IiY7KCV7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIuyEoO2Dne2VnCDsubTrk5zqsIAg7IiY7KCV65Cp64uI64ukLlwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg7IiYIOyglVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGJ0bkNvbG9yPVwiYnRuLWJsYWNrXCJcclxuICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlU2hvd0NvbmZpcm0oXCLsgq3soJztlZjsi5zqsqDsirXri4jquYw/XCIsIFwi7JiB6rWsIOyCreygnOuQqeuLiOuLpC5cIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDsgq0g7KCcXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0TGlzdFxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lLmluZGV4T2Yoc2VhcmNoVmFsKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR4fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PiBoYW5kbGVJc0NsaWNrZWQoaXRlbS5pZHgpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDxDb25maXJtXHJcbiAgICAgICAgc2hvdz17c2hvd0NvbmZpcm19XHJcbiAgICAgICAgbWFpblRleHQ9e21haW5UZXh0fVxyXG4gICAgICAgIHN1YlRleHQ9e3N1YlRleHR9XHJcbiAgICAgICAgb25DbG9zZUNCPXtoYW5kbGVDbG9zZUJ0bn1cclxuICAgICAgICBvbkNvbmZpcm1DQj17KCkgPT4gb25EZWxldGUoKX1cclxuICAgICAgLz5cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=