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
  }; // 확인 버튼 누르면,


  var handleConfirmBtn = function handleConfirmBtn() {
    btnMethods.forEach(function (btnMethod) {
      if (!isBtnSelected) {
        return;
      }

      btnMethod.confirmFunction();
    });
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

    setSelectedCard(false);
    setTimeout(function () {
      setShowConfirm(false);
    }, 1000); // 1초 후 모달창이 닫힌다.
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
      lineNumber: 127,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "list-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 131,
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
      lineNumber: 138,
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
      lineNumber: 146,
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
      lineNumber: 153,
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
      lineNumber: 161,
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
      lineNumber: 172,
      columnNumber: 13
    }
  }, "\uC0AD \uC81C")), __jsx("div", {
    className: "con-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
        lineNumber: 186,
        columnNumber: 19
      }
    });
  }))))), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
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
      lineNumber: 199,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0UGFnZSIsInVzZVN0YXRlIiwiaWR4IiwibmFtZSIsInByaWNlIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInNlYXJjaFZhbCIsInNldFNlYXJjaFZhbCIsImNyZWF0ZVByb2R1Y3RJbmZvIiwic2V0Q3JlYXRlUHJvZHVjdEluZm8iLCJzZWxlY3RlZENhcmQiLCJzZXRTZWxlY3RlZENhcmQiLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwibWFpblRleHQiLCJzZXRNYWluVGV4dCIsInN1YlRleHQiLCJzZXRTdWJUZXh0IiwiaGFuZGxlU2hvd0NvbmZpcm0iLCJtYWluIiwic3ViIiwiaGFuZGxlQ2xvc2VCdG4iLCJoYW5kbGVDb25maXJtQnRuIiwiYnRuTWV0aG9kcyIsImZvckVhY2giLCJidG5NZXRob2QiLCJpc0J0blNlbGVjdGVkIiwiY29uZmlybUZ1bmN0aW9uIiwiaGFuZGxlU2VhcmNoSW5wdXQiLCJ2YWx1ZSIsIm5leHRJZCIsInVzZVJlZiIsImhhbmRsZUNoYW5nZUlucHV0Iiwib25DcmVhdGUiLCJuZXdQcm9kdWN0IiwiY3VycmVudCIsImNvbmNhdCIsImhhbmRsZUlzQ2xpY2tlZCIsImFsZXJ0Iiwib25SZXZpc2UiLCJtYXAiLCJpdGVtIiwib25EZWxldGUiLCJmaWx0ZXIiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiaW5kZXhPZiIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLENBQzdDO0FBQUVDLE9BQUcsRUFBRSxDQUFQO0FBQVVDLFFBQUksRUFBRSxLQUFoQjtBQUF1QkMsU0FBSyxFQUFF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YjtBQUlFLFdBQUssRUFBRXVDLElBQUksQ0FBQ3RDLEtBSmQ7QUFLRSxhQUFPLEVBQUU7QUFBQSxlQUFNa0MsZUFBZSxDQUFDSSxJQUFJLENBQUN4QyxHQUFOLENBQXJCO0FBQUEsT0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREc7QUFBQSxHQUZOLENBREgsQ0FERixDQXBERixDQURGLENBRkYsRUF3RUUsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEVGLEVBeUVFLE1BQUMsaUVBQUQ7QUFDRSxRQUFJLEVBQUVXLFdBRFI7QUFFRSxZQUFRLEVBQUVFLFFBRlo7QUFHRSxXQUFPLEVBQUVFLE9BSFg7QUFJRSxhQUFTLEVBQUVLLGNBSmI7QUFLRSxlQUFXLEVBQUU7QUFBQSxhQUFNcUIsUUFBUSxFQUFkO0FBQUEsS0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekVGLE9BREY7QUFvRkQsQ0F4TUQ7O0dBQU0zQyxlOztLQUFBQSxlO0FBME1TQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbGlzdC5qcy43NjZkNWM3YmNmOGRlNjUyMzE0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtL2lucHV0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9idXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZC9wcm9kdWN0XCI7XHJcbmltcG9ydCBDb25maXJtIGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsL2NvbmZpcm1cIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RMaXN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgIHsgaWR4OiAxLCBuYW1lOiBcIuyDiOyasOq5oVwiLCBwcmljZTogXCIxNTAwXCIgfSxcclxuICAgIHsgaWR4OiAyLCBuYW1lOiBcIuqzoOq1rOuniOq5oVwiLCBwcmljZTogXCIyMDAwXCIgfSxcclxuICAgIHsgaWR4OiAzLCBuYW1lOiBcIuqwkOyekOq5oVwiLCBwcmljZTogXCIxODAwXCIgfSxcclxuICAgIHsgaWR4OiA0LCBuYW1lOiBcIuuLpOydtOygnOyKpO2LsFwiLCBwcmljZTogXCIxMDAwMFwiIH0sXHJcbiAgICB7IGlkeDogNSwgbmFtZTogXCLstIjsvZTtjIzsnbRcIiwgcHJpY2U6IFwiNTAwMFwiIH0sXHJcbiAgXSk7XHJcbiAgY29uc3QgW3NlYXJjaFZhbCwgc2V0U2VhcmNoVmFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjcmVhdGVQcm9kdWN0SW5mbywgc2V0Q3JlYXRlUHJvZHVjdEluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHByaWNlOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENhcmQsIHNldFNlbGVjdGVkQ2FyZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzaG93Q29uZmlybSwgc2V0U2hvd0NvbmZpcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttYWluVGV4dCwgc2V0TWFpblRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1YlRleHQsIHNldFN1YlRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dDb25maXJtID0gKG1haW4sIHN1YikgPT4ge1xyXG4gICAgc2V0TWFpblRleHQobWFpbik7XHJcbiAgICBzZXRTdWJUZXh0KHN1Yik7XHJcbiAgfTtcclxuXHJcbiAgLy8g7Leo7IaMIOuyhO2KvCDriITrpbTrqbQsXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VCdG4gPSAoKSA9PiB7XHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICAvLyB0ZXh065OkIOy0iOq4sO2ZlFxyXG4gICAgc2V0U2VsZWN0ZWRDYXJkKCk7XHJcbiAgICAvLyDshKDtg53tlZwg7Lm065OcIHN0YXRlIOy0iOq4sO2ZlFxyXG4gICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIC8vIO2ZleyduCDrsoTtirwg64iE66W066m0LFxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1CdG4gPSAoKSA9PiB7XHJcbiAgICBidG5NZXRob2RzLmZvckVhY2goKGJ0bk1ldGhvZCkgPT4ge1xyXG4gICAgICBpZiAoIWlzQnRuU2VsZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgYnRuTWV0aG9kLmNvbmZpcm1GdW5jdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gU2VhcmNoIGlucHV07J2YIHZhbHVl66W8IOyggOyepe2VtOuRoC5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hJbnB1dCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVmFsKHZhbHVlKTtcclxuICAgIC8vIHNlYXJjaFZhbCDtlZjqs6AgcHJvZHVjdExpc3Qg7JWI7JeQIOyeiOuKlCBpdGVtLm5hbWXsnYQg67mE6rWQXHJcbiAgICAvLyBmaWx0ZXIgbWV0aG9kIO2ZnOyaqVxyXG4gICAgLy8g6rKA7IOJ7ZWcIOusuOyekOyXtOydtCDsobTsnqztlZjripTsp4Ag7ZWY7KeAIOyViuuKlOyngCB0cnVl66GcIOuwmO2ZmOqwkuydtCDrgpjsmKwg7IiYIOyeiOuPhOuhnShTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKCkg7Zmc7JqpKVxyXG4gICAgLyogc2V0UHJvZHVjdExpc3QoXHJcbiAgICAgIHByb2R1Y3RMaXN0LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGl0ZW0ubmFtZS5pbmNsdWRlcyh2YWx1ZSkpXHJcbiAgICApOyAqL1xyXG4gICAgLy8g7J2066CH6rKMIOq1rO2YhO2VmOuptCDrrLjsoJzqsIAg7J6I7J2MLiByZW5kZXLsnZggYm9keSDrtoDrtoTsl5DshJwgcHJvZHVjdExpc3Tsl5AgZmlsdGVy66W8IOyggeyaqS5cclxuXHJcbiAgICAvLyBhcnJheS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpdGVtLmluZGV4T2YoJ+2KueygleyKpO2KuOungScpID09PSBpbmRleClcclxuICB9O1xyXG5cclxuICBjb25zdCBuZXh0SWQgPSB1c2VSZWYoNik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRDcmVhdGVQcm9kdWN0SW5mbyh7IC4uLmNyZWF0ZVByb2R1Y3RJbmZvLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qIG5hbWUsIHByaWNlIOyXkCDsnoXroKUg7ZuEIOuTseuhnSDquLDriqUgKi9cclxuICBjb25zdCBvbkNyZWF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSB7XHJcbiAgICAgIGlkeDogbmV4dElkLmN1cnJlbnQsXHJcbiAgICAgIG5hbWU6IGNyZWF0ZVByb2R1Y3RJbmZvLm5hbWUsXHJcbiAgICAgIHByaWNlOiBjcmVhdGVQcm9kdWN0SW5mby5wcmljZSxcclxuICAgIH07XHJcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0TGlzdC5jb25jYXQobmV3UHJvZHVjdCkpO1xyXG4gICAgbmV4dElkLmN1cnJlbnQgKz0gMTtcclxuICAgIC8vIOuTseuhnSDtm4QgaW5wdXQg7LC965OkIOy0iOq4sO2ZlFxyXG4gICAgc2V0Q3JlYXRlUHJvZHVjdEluZm8oeyBuYW1lOiBcIlwiLCBwcmljZTogXCJcIiB9KTtcclxuICB9O1xyXG5cclxuICAvLyDsubTrk5wg7ISg7YOdXHJcbiAgY29uc3QgaGFuZGxlSXNDbGlja2VkID0gKGlkeCkgPT4ge1xyXG4gICAgYWxlcnQoXCLshKDtg53rkJjsl4jsirXri4jri6QuXCIpO1xyXG4gICAgc2V0U2VsZWN0ZWRDYXJkKGlkeCk7XHJcbiAgfTtcclxuXHJcbiAgLyog7Lm065Oc66W8IO2BtOumre2VmOqzoCDtgbTrpq3tlZwg7Lm065Oc7J2YIOuztOuNlOqwgCDrsJTrgIzqs6Ag7IOB7ZKI66qFLCDqsIDqsqkg7LC97JeQIOyImOygle2VoCDsgqztla0g7J6F66ClIO2bhCDri6Tsi5wg7IiY7KCVIOuyhO2KvCDriITrpbTrqbQg7IiY7KCV7J20IOuQnOuLpC4gKi9cclxuICBjb25zdCBvblJldmlzZSA9ICgpID0+IHtcclxuICAgIHNldFByb2R1Y3RMaXN0KFxyXG4gICAgICBwcm9kdWN0TGlzdC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmlkeCA9PT0gc2VsZWN0ZWRDYXJkXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgICAgICAgIG5hbWU6IGNyZWF0ZVByb2R1Y3RJbmZvLm5hbWUsXHJcbiAgICAgICAgICAgICAgcHJpY2U6IGNyZWF0ZVByb2R1Y3RJbmZvLnByaWNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA6IGl0ZW07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgLy8gcHJvZHVjdExpc3Trpbwg6re464yA66GcIOqwgOyguOyZgOyEnCwgaWR4ID0gNeyduCBpdGVt7JeQIOuMgO2VtOyEnCBuYW1l66eMIOuzgOqyve2VnOuLpC5cclxuICAgIC8vIOq3uOqyjCDslYTri5Ag6rK97Jqw64qUIOq3uOuMgOuhnCDrkZTri6QuXHJcbiAgfTtcclxuXHJcbiAgLyog64K06rCAIO2BtOumre2VnCDsubTrk5zrpbwg7IKt7KCc7ZWY64qUIOuhnOyngeydhCDsp5zslbwg7ZWc64ukLiAqL1xyXG4gIGNvbnN0IG9uRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdExpc3QocHJvZHVjdExpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkeCAhPT0gc2VsZWN0ZWRDYXJkKSk7XHJcbiAgICAvLyBpZHjsnZgg6rCS7J2AIG51bWJlcuydtOuvgOuhnCDrrLjsnpDsl7TsnbQg7JWE64uYLlxyXG4gICAgc2V0U2VsZWN0ZWRDYXJkKGZhbHNlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIC8vIDHstIgg7ZuEIOuqqOuLrOywveydtCDri6vtnozri6QuXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtYWluVGV4dCkge1xyXG4gICAgICBzZXRTaG93Q29uZmlybSh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbbWFpblRleHQsIHN1YlRleHRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb24taGVhZFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIuqygOyDiVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIGNoYW5nZUNCPXtoYW5kbGVTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWUtaW5wdXQtZ3JvdXBcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi7IOB7ZKI66qFXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIGNoYW5nZUNCPXtoYW5kbGVDaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y3JlYXRlUHJvZHVjdEluZm8ubmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLqsIDqsqlcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgIGNoYW5nZUNCPXtoYW5kbGVDaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y3JlYXRlUHJvZHVjdEluZm8ucHJpY2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBidG5Db2xvcj1cImJ0bi1ibGFja1wiXHJcbiAgICAgICAgICAgICAgY2xpY2tDQj17KCkgPT5cclxuICAgICAgICAgICAgICAgIGhhbmRsZVNob3dDb25maXJtKFwi65Ox66Gd7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLCBcIuyDiOuhnCDstpTqsIDrkKnri4jri6QuXCIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg65OxIOuhnVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGJ0bkNvbG9yPVwiYnRuLWJsYWNrXCJcclxuICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlU2hvd0NvbmZpcm0oXHJcbiAgICAgICAgICAgICAgICAgIFwi7IiY7KCV7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIuyEoO2Dne2VnCDsubTrk5zqsIAg7IiY7KCV65Cp64uI64ukLlwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg7IiYIOyglVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGJ0bkNvbG9yPVwiYnRuLWJsYWNrXCJcclxuICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlU2hvd0NvbmZpcm0oXCLsgq3soJztlZjsi5zqsqDsirXri4jquYw/XCIsIFwi7JiB6rWsIOyCreygnOuQqeuLiOuLpC5cIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDsgq0g7KCcXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0TGlzdFxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lLmluZGV4T2Yoc2VhcmNoVmFsKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR4fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PiBoYW5kbGVJc0NsaWNrZWQoaXRlbS5pZHgpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDxDb25maXJtXHJcbiAgICAgICAgc2hvdz17c2hvd0NvbmZpcm19XHJcbiAgICAgICAgbWFpblRleHQ9e21haW5UZXh0fVxyXG4gICAgICAgIHN1YlRleHQ9e3N1YlRleHR9XHJcbiAgICAgICAgb25DbG9zZUNCPXtoYW5kbGVDbG9zZUJ0bn1cclxuICAgICAgICBvbkNvbmZpcm1DQj17KCkgPT4gb25EZWxldGUoKX1cclxuICAgICAgLz5cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=