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

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isBtnSelected = _useState8[0],
      setIsBtnSelected = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    btnName: "create",
    isBtnSelected: false,
    confirmFunction: function confirmFunction() {
      onCreate();
    }
  }, {
    btnName: "revise",
    isBtnSelected: false,
    confirmFunction: function confirmFunction() {
      onRevise();
    }
  }, {
    btnName: "delete",
    isBtnSelected: false,
    confirmFunction: function confirmFunction() {
      onDelete();
    }
  }]),
      btnMethods = _useState9[0],
      setBtnMethods = _useState9[1];

  var handleShowConfirm = function handleShowConfirm(main, sub, btnName) {
    setMainText(main);
    setSubText(sub);
    console.log(btnName);
    setBtnMethods(btnMethods.map(function (item) {
      item.btnName === btnName ? _objectSpread(_objectSpread({}, item), {}, {
        isBtnSelected: true
      }) : item;
    })); // 클릭한 버튼만 true로 바뀐다.
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

    setTimeout(function () {
      setShowConfirm(false);
    }, 1000);
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
      lineNumber: 156,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "list-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
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
      lineNumber: 160,
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
      lineNumber: 167,
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
      lineNumber: 175,
      columnNumber: 13
    }
  }), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnName: "create",
    btnColor: "btn-black",
    clickCB: function clickCB() {
      return handleShowConfirm("등록하시겠습니까?", "새로 추가됩니다.", btnName);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, "\uB4F1 \uB85D"), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnName: "revise",
    btnColor: "btn-black",
    clickCB: function clickCB() {
      return handleShowConfirm("수정하시겠습니까?", "선택한 카드가 수정됩니다.");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, "\uC218 \uC815"), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnName: "delete",
    btnColor: "btn-black",
    clickCB: function clickCB() {
      return handleShowConfirm("삭제하시겠습니까?", "영구 삭제됩니다.");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, "\uC0AD \uC81C")), __jsx("div", {
    className: "con-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
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
        lineNumber: 222,
        columnNumber: 19
      }
    });
  }))))), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
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
      lineNumber: 235,
      columnNumber: 7
    }
  }));
};

_s(ProductListPage, "xTUSPmlV1w8twzayuK+SzzG7rYo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0UGFnZSIsInVzZVN0YXRlIiwiaWR4IiwibmFtZSIsInByaWNlIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInNlYXJjaFZhbCIsInNldFNlYXJjaFZhbCIsImNyZWF0ZVByb2R1Y3RJbmZvIiwic2V0Q3JlYXRlUHJvZHVjdEluZm8iLCJzZWxlY3RlZENhcmQiLCJzZXRTZWxlY3RlZENhcmQiLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwibWFpblRleHQiLCJzZXRNYWluVGV4dCIsInN1YlRleHQiLCJzZXRTdWJUZXh0IiwiaXNCdG5TZWxlY3RlZCIsInNldElzQnRuU2VsZWN0ZWQiLCJidG5OYW1lIiwiY29uZmlybUZ1bmN0aW9uIiwib25DcmVhdGUiLCJvblJldmlzZSIsIm9uRGVsZXRlIiwiYnRuTWV0aG9kcyIsInNldEJ0bk1ldGhvZHMiLCJoYW5kbGVTaG93Q29uZmlybSIsIm1haW4iLCJzdWIiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSIsImhhbmRsZUNsb3NlQnRuIiwiaGFuZGxlQ29uZmlybUJ0biIsImZvckVhY2giLCJidG5NZXRob2QiLCJoYW5kbGVTZWFyY2hJbnB1dCIsInZhbHVlIiwibmV4dElkIiwidXNlUmVmIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJuZXdQcm9kdWN0IiwiY3VycmVudCIsImNvbmNhdCIsImhhbmRsZUlzQ2xpY2tlZCIsImFsZXJ0IiwiZmlsdGVyIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImluZGV4T2YiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxDQUM3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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREc7QUFBQSxHQUZOLENBREgsQ0FERixDQTNERixDQURGLENBRkYsRUErRUUsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0VGLEVBZ0ZFLE1BQUMsaUVBQUQ7QUFDRSxRQUFJLEVBQUVXLFdBRFI7QUFFRSxZQUFRLEVBQUVFLFFBRlo7QUFHRSxXQUFPLEVBQUVFLE9BSFg7QUFJRSxhQUFTLEVBQUVrQixjQUpiO0FBS0UsZUFBVyxFQUFFQyxnQkFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEZGLENBREY7QUEwRkQsQ0EzT0Q7O0dBQU1wQyxlOztLQUFBQSxlO0FBNk9TQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbGlzdC5qcy5lM2E4MmQ3ODUzODY2MDQzNDI0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtL2lucHV0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9idXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZC9wcm9kdWN0XCI7XHJcbmltcG9ydCBDb25maXJtIGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsL2NvbmZpcm1cIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RMaXN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgIHsgaWR4OiAxLCBuYW1lOiBcIuyDiOyasOq5oVwiLCBwcmljZTogXCIxNTAwXCIgfSxcclxuICAgIHsgaWR4OiAyLCBuYW1lOiBcIuqzoOq1rOuniOq5oVwiLCBwcmljZTogXCIyMDAwXCIgfSxcclxuICAgIHsgaWR4OiAzLCBuYW1lOiBcIuqwkOyekOq5oVwiLCBwcmljZTogXCIxODAwXCIgfSxcclxuICAgIHsgaWR4OiA0LCBuYW1lOiBcIuuLpOydtOygnOyKpO2LsFwiLCBwcmljZTogXCIxMDAwMFwiIH0sXHJcbiAgICB7IGlkeDogNSwgbmFtZTogXCLstIjsvZTtjIzsnbRcIiwgcHJpY2U6IFwiNTAwMFwiIH0sXHJcbiAgXSk7XHJcbiAgY29uc3QgW3NlYXJjaFZhbCwgc2V0U2VhcmNoVmFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjcmVhdGVQcm9kdWN0SW5mbywgc2V0Q3JlYXRlUHJvZHVjdEluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHByaWNlOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENhcmQsIHNldFNlbGVjdGVkQ2FyZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzaG93Q29uZmlybSwgc2V0U2hvd0NvbmZpcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttYWluVGV4dCwgc2V0TWFpblRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1YlRleHQsIHNldFN1YlRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzQnRuU2VsZWN0ZWQsIHNldElzQnRuU2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtidG5NZXRob2RzLCBzZXRCdG5NZXRob2RzXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgYnRuTmFtZTogXCJjcmVhdGVcIixcclxuICAgICAgaXNCdG5TZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgIGNvbmZpcm1GdW5jdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG9uQ3JlYXRlKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBidG5OYW1lOiBcInJldmlzZVwiLFxyXG4gICAgICBpc0J0blNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgY29uZmlybUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb25SZXZpc2UoKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJ0bk5hbWU6IFwiZGVsZXRlXCIsXHJcbiAgICAgIGlzQnRuU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICBjb25maXJtRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBvbkRlbGV0ZSgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbmZpcm0gPSAobWFpbiwgc3ViLCBidG5OYW1lKSA9PiB7XHJcbiAgICBzZXRNYWluVGV4dChtYWluKTtcclxuICAgIHNldFN1YlRleHQoc3ViKTtcclxuICAgIGNvbnNvbGUubG9nKGJ0bk5hbWUpO1xyXG4gICAgc2V0QnRuTWV0aG9kcyhcclxuICAgICAgYnRuTWV0aG9kcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmJ0bk5hbWUgPT09IGJ0bk5hbWUgPyB7IC4uLml0ZW0sIGlzQnRuU2VsZWN0ZWQ6IHRydWUgfSA6IGl0ZW07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgLy8g7YG066at7ZWcIOuyhO2KvOunjCB0cnVl66GcIOuwlOuAkOuLpC5cclxuICB9O1xyXG5cclxuICAvLyDst6jshowg67KE7Yq8IOuIhOultOuptCxcclxuICBjb25zdCBoYW5kbGVDbG9zZUJ0biA9ICgpID0+IHtcclxuICAgIHNldE1haW5UZXh0KFwiXCIpO1xyXG4gICAgc2V0U3ViVGV4dChcIlwiKTtcclxuICAgIC8vIHRleHTrk6Qg7LSI6riw7ZmUXHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIC8vIOyEoO2Dne2VnCDsubTrk5wgc3RhdGUg7LSI6riw7ZmUXHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g7ZmV7J24IOuyhO2KvCDriITrpbTrqbQsXHJcbiAgY29uc3QgaGFuZGxlQ29uZmlybUJ0biA9ICgpID0+IHtcclxuICAgIGJ0bk1ldGhvZHMuZm9yRWFjaCgoYnRuTWV0aG9kKSA9PiB7XHJcbiAgICAgIGlmICghaXNCdG5TZWxlY3RlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBidG5NZXRob2QuY29uZmlybUZ1bmN0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBTZWFyY2ggaW5wdXTsnZggdmFsdWXrpbwg7KCA7J6l7ZW065GgLlxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaElucHV0ID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hWYWwodmFsdWUpO1xyXG4gICAgLy8gc2VhcmNoVmFsIO2VmOqzoCBwcm9kdWN0TGlzdCDslYjsl5Ag7J6I64qUIGl0ZW0ubmFtZeydhCDruYTqtZBcclxuICAgIC8vIGZpbHRlciBtZXRob2Qg7Zmc7JqpXHJcbiAgICAvLyDqsoDsg4ntlZwg66y47J6Q7Je07J20IOyhtOyerO2VmOuKlOyngCDtlZjsp4Ag7JWK64qU7KeAIHRydWXroZwg67CY7ZmY6rCS7J20IOuCmOyYrCDsiJgg7J6I64+E66GdKFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoKSDtmZzsmqkpXHJcbiAgICAvKiBzZXRQcm9kdWN0TGlzdChcclxuICAgICAgcHJvZHVjdExpc3QuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaXRlbS5uYW1lLmluY2x1ZGVzKHZhbHVlKSlcclxuICAgICk7ICovXHJcbiAgICAvLyDsnbTroIfqsowg6rWs7ZiE7ZWY66m0IOusuOygnOqwgCDsnojsnYwuIHJlbmRlcuydmCBib2R5IOu2gOu2hOyXkOyEnCBwcm9kdWN0TGlzdOyXkCBmaWx0ZXLrpbwg7KCB7JqpLlxyXG5cclxuICAgIC8vIGFycmF5LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGl0ZW0uaW5kZXhPZign7Yq57KCV7Iqk7Yq466eBJykgPT09IGluZGV4KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5leHRJZCA9IHVzZVJlZig2KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldENyZWF0ZVByb2R1Y3RJbmZvKHsgLi4uY3JlYXRlUHJvZHVjdEluZm8sIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyogbmFtZSwgcHJpY2Ug7JeQIOyeheugpSDtm4Qg65Ox66GdIOq4sOuKpSAqL1xyXG4gIGNvbnN0IG9uQ3JlYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgaWR4OiBuZXh0SWQuY3VycmVudCxcclxuICAgICAgbmFtZTogY3JlYXRlUHJvZHVjdEluZm8ubmFtZSxcclxuICAgICAgcHJpY2U6IGNyZWF0ZVByb2R1Y3RJbmZvLnByaWNlLFxyXG4gICAgfTtcclxuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RMaXN0LmNvbmNhdChuZXdQcm9kdWN0KSk7XHJcbiAgICBuZXh0SWQuY3VycmVudCArPSAxO1xyXG4gICAgLy8g65Ox66GdIO2bhCBpbnB1dCDssL3rk6Qg7LSI6riw7ZmUXHJcbiAgICBzZXRDcmVhdGVQcm9kdWN0SW5mbyh7IG5hbWU6IFwiXCIsIHByaWNlOiBcIlwiIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIOy5tOuTnCDshKDtg51cclxuICBjb25zdCBoYW5kbGVJc0NsaWNrZWQgPSAoaWR4KSA9PiB7XHJcbiAgICBhbGVydChcIuyEoO2DneuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoaWR4KTtcclxuICB9O1xyXG5cclxuICAvKiDsubTrk5zrpbwg7YG066at7ZWY6rOgIO2BtOumre2VnCDsubTrk5zsnZgg67O0642U6rCAIOuwlOuAjOqzoCDsg4HtkojrqoUsIOqwgOqyqSDssL3sl5Ag7IiY7KCV7ZWgIOyCrO2VrSDsnoXroKUg7ZuEIOuLpOyLnCDsiJjsoJUg67KE7Yq8IOuIhOultOuptCDsiJjsoJXsnbQg65Cc64ukLiAqL1xyXG4gIGNvbnN0IG9uUmV2aXNlID0gKCkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdExpc3QoXHJcbiAgICAgIHByb2R1Y3RMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uaWR4ID09PSBzZWxlY3RlZENhcmRcclxuICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgbmFtZTogY3JlYXRlUHJvZHVjdEluZm8ubmFtZSxcclxuICAgICAgICAgICAgICBwcmljZTogY3JlYXRlUHJvZHVjdEluZm8ucHJpY2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogaXRlbTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICAvLyBwcm9kdWN0TGlzdOulvCDqt7jrjIDroZwg6rCA7KC47JmA7IScLCBpZHggPSA17J24IGl0ZW3sl5Ag64yA7ZW07IScIG5hbWXrp4wg67OA6rK97ZWc64ukLlxyXG4gICAgLy8g6re46rKMIOyVhOuLkCDqsr3smrDripQg6re464yA66GcIOuRlOuLpC5cclxuICB9O1xyXG5cclxuICAvKiDrgrTqsIAg7YG066at7ZWcIOy5tOuTnOulvCDsgq3soJztlZjripQg66Gc7KeB7J2EIOynnOyVvCDtlZzri6QuICovXHJcbiAgY29uc3Qgb25EZWxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWR4ICE9PSBzZWxlY3RlZENhcmQpKTtcclxuICAgIC8vIGlkeOydmCDqsJLsnYAgbnVtYmVy7J2066+A66GcIOusuOyekOyXtOydtCDslYTri5guXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtYWluVGV4dCkge1xyXG4gICAgICBzZXRTaG93Q29uZmlybSh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbbWFpblRleHQsIHN1YlRleHRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb24taGVhZFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIuqygOyDiVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIGNoYW5nZUNCPXtoYW5kbGVTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWUtaW5wdXQtZ3JvdXBcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi7IOB7ZKI66qFXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIGNoYW5nZUNCPXtoYW5kbGVDaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y3JlYXRlUHJvZHVjdEluZm8ubmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLqsIDqsqlcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgIGNoYW5nZUNCPXtoYW5kbGVDaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y3JlYXRlUHJvZHVjdEluZm8ucHJpY2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBidG5OYW1lPVwiY3JlYXRlXCJcclxuICAgICAgICAgICAgICBidG5Db2xvcj1cImJ0bi1ibGFja1wiXHJcbiAgICAgICAgICAgICAgY2xpY2tDQj17KCkgPT5cclxuICAgICAgICAgICAgICAgIGhhbmRsZVNob3dDb25maXJtKFxyXG4gICAgICAgICAgICAgICAgICBcIuuTseuhne2VmOyLnOqyoOyKteuLiOq5jD9cIixcclxuICAgICAgICAgICAgICAgICAgXCLsg4jroZwg7LaU6rCA65Cp64uI64ukLlwiLFxyXG4gICAgICAgICAgICAgICAgICBidG5OYW1lXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg65OxIOuhnVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGJ0bk5hbWU9XCJyZXZpc2VcIlxyXG4gICAgICAgICAgICAgIGJ0bkNvbG9yPVwiYnRuLWJsYWNrXCJcclxuICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlU2hvd0NvbmZpcm0oXHJcbiAgICAgICAgICAgICAgICAgIFwi7IiY7KCV7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIuyEoO2Dne2VnCDsubTrk5zqsIAg7IiY7KCV65Cp64uI64ukLlwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg7IiYIOyglVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGJ0bk5hbWU9XCJkZWxldGVcIlxyXG4gICAgICAgICAgICAgIGJ0bkNvbG9yPVwiYnRuLWJsYWNrXCJcclxuICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlU2hvd0NvbmZpcm0oXCLsgq3soJztlZjsi5zqsqDsirXri4jquYw/XCIsIFwi7JiB6rWsIOyCreygnOuQqeuLiOuLpC5cIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDsgq0g7KCcXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0TGlzdFxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lLmluZGV4T2Yoc2VhcmNoVmFsKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR4fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PiBoYW5kbGVJc0NsaWNrZWQoaXRlbS5pZHgpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDxDb25maXJtXHJcbiAgICAgICAgc2hvdz17c2hvd0NvbmZpcm19XHJcbiAgICAgICAgbWFpblRleHQ9e21haW5UZXh0fVxyXG4gICAgICAgIHN1YlRleHQ9e3N1YlRleHR9XHJcbiAgICAgICAgb25DbG9zZUNCPXtoYW5kbGVDbG9zZUJ0bn1cclxuICAgICAgICBvbkNvbmZpcm1DQj17aGFuZGxlQ29uZmlybUJ0bn1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=