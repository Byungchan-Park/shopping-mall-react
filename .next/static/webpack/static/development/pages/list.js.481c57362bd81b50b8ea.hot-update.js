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
      lineNumber: 126,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "list-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 130,
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
      lineNumber: 137,
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
      lineNumber: 145,
      columnNumber: 13
    }
  }), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnColor: "btn-black",
    clickCB: function clickCB() {
      return handleShowConfirm("등록하시겠습니까?", "새로 추가됩니다.", btnName);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
      lineNumber: 164,
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
      lineNumber: 175,
      columnNumber: 13
    }
  }, "\uC0AD \uC81C")), __jsx("div", {
    className: "con-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
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
        lineNumber: 189,
        columnNumber: 19
      }
    });
  }))))), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
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
      lineNumber: 202,
      columnNumber: 7
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0UGFnZSIsInVzZVN0YXRlIiwiaWR4IiwibmFtZSIsInByaWNlIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInNlYXJjaFZhbCIsInNldFNlYXJjaFZhbCIsImNyZWF0ZVByb2R1Y3RJbmZvIiwic2V0Q3JlYXRlUHJvZHVjdEluZm8iLCJzZWxlY3RlZENhcmQiLCJzZXRTZWxlY3RlZENhcmQiLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwibWFpblRleHQiLCJzZXRNYWluVGV4dCIsInN1YlRleHQiLCJzZXRTdWJUZXh0IiwiaGFuZGxlU2hvd0NvbmZpcm0iLCJtYWluIiwic3ViIiwiaGFuZGxlQ2xvc2VCdG4iLCJoYW5kbGVDb25maXJtQnRuIiwiYnRuTWV0aG9kcyIsImZvckVhY2giLCJidG5NZXRob2QiLCJpc0J0blNlbGVjdGVkIiwiY29uZmlybUZ1bmN0aW9uIiwiaGFuZGxlU2VhcmNoSW5wdXQiLCJ2YWx1ZSIsIm5leHRJZCIsInVzZVJlZiIsImhhbmRsZUNoYW5nZUlucHV0Iiwib25DcmVhdGUiLCJuZXdQcm9kdWN0IiwiY3VycmVudCIsImNvbmNhdCIsImhhbmRsZUlzQ2xpY2tlZCIsImFsZXJ0Iiwib25SZXZpc2UiLCJtYXAiLCJpdGVtIiwib25EZWxldGUiLCJmaWx0ZXIiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiYnRuTmFtZSIsImluZGV4T2YiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxDQUM3QztBQUFFQyxPQUFHLEVBQUUsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsS0FBaEI7QUFBdUJD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SUUsV0FBSyxFQUFFdUMsSUFBSSxDQUFDdEMsS0FKZDtBQUtFLGFBQU8sRUFBRTtBQUFBLGVBQU1rQyxlQUFlLENBQUNJLElBQUksQ0FBQ3hDLEdBQU4sQ0FBckI7QUFBQSxPQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERztBQUFBLEdBRk4sQ0FESCxDQURGLENBeERGLENBREYsQ0FGRixFQTRFRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1RUYsRUE2RUUsTUFBQyxpRUFBRDtBQUNFLFFBQUksRUFBRVcsV0FEUjtBQUVFLFlBQVEsRUFBRUUsUUFGWjtBQUdFLFdBQU8sRUFBRUUsT0FIWDtBQUlFLGFBQVMsRUFBRUssY0FKYjtBQUtFLGVBQVcsRUFBRUMsZ0JBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdFRixDQURGO0FBdUZELENBMU1EOztHQUFNdkIsZTs7S0FBQUEsZTtBQTRNU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxpc3QuanMuNDgxYzU3MzYyYmQ4MWI1MGI4ZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3RlclwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9pbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmQvcHJvZHVjdFwiO1xyXG5pbXBvcnQgQ29uZmlybSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbC9jb25maXJtXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGlkeDogMSwgbmFtZTogXCLsg4jsmrDquaFcIiwgcHJpY2U6IFwiMTUwMFwiIH0sXHJcbiAgICB7IGlkeDogMiwgbmFtZTogXCLqs6Dqtazrp4jquaFcIiwgcHJpY2U6IFwiMjAwMFwiIH0sXHJcbiAgICB7IGlkeDogMywgbmFtZTogXCLqsJDsnpDquaFcIiwgcHJpY2U6IFwiMTgwMFwiIH0sXHJcbiAgICB7IGlkeDogNCwgbmFtZTogXCLri6TsnbTsoJzsiqTti7BcIiwgcHJpY2U6IFwiMTAwMDBcIiB9LFxyXG4gICAgeyBpZHg6IDUsIG5hbWU6IFwi7LSI7L2U7YyM7J20XCIsIHByaWNlOiBcIjUwMDBcIiB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IFtzZWFyY2hWYWwsIHNldFNlYXJjaFZhbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3JlYXRlUHJvZHVjdEluZm8sIHNldENyZWF0ZVByb2R1Y3RJbmZvXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBwcmljZTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbc2VsZWN0ZWRDYXJkLCBzZXRTZWxlY3RlZENhcmRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2hvd0NvbmZpcm0sIHNldFNob3dDb25maXJtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWFpblRleHQsIHNldE1haW5UZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWJUZXh0LCBzZXRTdWJUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93Q29uZmlybSA9IChtYWluLCBzdWIpID0+IHtcclxuICAgIHNldE1haW5UZXh0KG1haW4pO1xyXG4gICAgc2V0U3ViVGV4dChzdWIpO1xyXG4gIH07XHJcblxyXG4gIC8vIOy3qOyGjCDrsoTtirwg64iE66W066m0LFxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQnRuID0gKCkgPT4ge1xyXG4gICAgc2V0TWFpblRleHQoXCJcIik7XHJcbiAgICBzZXRTdWJUZXh0KFwiXCIpO1xyXG4gICAgLy8gdGV4dOuTpCDstIjquLDtmZRcclxuICAgIHNldFNlbGVjdGVkQ2FyZCgpO1xyXG4gICAgLy8g7ISg7YOd7ZWcIOy5tOuTnCBzdGF0ZSDstIjquLDtmZRcclxuICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICAvLyDtmZXsnbgg67KE7Yq8IOuIhOultOuptCxcclxuICBjb25zdCBoYW5kbGVDb25maXJtQnRuID0gKCkgPT4ge1xyXG4gICAgYnRuTWV0aG9kcy5mb3JFYWNoKChidG5NZXRob2QpID0+IHtcclxuICAgICAgaWYgKCFpc0J0blNlbGVjdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGJ0bk1ldGhvZC5jb25maXJtRnVuY3Rpb24oKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIFNlYXJjaCBpbnB1dOydmCB2YWx1ZeulvCDsoIDsnqXtlbTrkaAuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoSW5wdXQgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldFNlYXJjaFZhbCh2YWx1ZSk7XHJcbiAgICAvLyBzZWFyY2hWYWwg7ZWY6rOgIHByb2R1Y3RMaXN0IOyViOyXkCDsnojripQgaXRlbS5uYW1l7J2EIOu5hOq1kFxyXG4gICAgLy8gZmlsdGVyIG1ldGhvZCDtmZzsmqlcclxuICAgIC8vIOqygOyDie2VnCDrrLjsnpDsl7TsnbQg7KG07J6s7ZWY64qU7KeAIO2VmOyngCDslYrripTsp4AgdHJ1ZeuhnCDrsJjtmZjqsJLsnbQg64KY7JisIOyImCDsnojrj4TroZ0oU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcygpIO2ZnOyaqSlcclxuICAgIC8qIHNldFByb2R1Y3RMaXN0KFxyXG4gICAgICBwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpdGVtLm5hbWUuaW5jbHVkZXModmFsdWUpKVxyXG4gICAgKTsgKi9cclxuICAgIC8vIOydtOugh+qyjCDqtaztmITtlZjrqbQg66y47KCc6rCAIOyeiOydjC4gcmVuZGVy7J2YIGJvZHkg67aA67aE7JeQ7IScIHByb2R1Y3RMaXN07JeQIGZpbHRlcuulvCDsoIHsmqkuXHJcblxyXG4gICAgLy8gYXJyYXkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaXRlbS5pbmRleE9mKCftirnsoJXsiqTtirjrp4EnKSA9PT0gaW5kZXgpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmV4dElkID0gdXNlUmVmKDYpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Q3JlYXRlUHJvZHVjdEluZm8oeyAuLi5jcmVhdGVQcm9kdWN0SW5mbywgW25hbWVdOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICAvKiBuYW1lLCBwcmljZSDsl5Ag7J6F66ClIO2bhCDrk7HroZ0g6riw64qlICovXHJcbiAgY29uc3Qgb25DcmVhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9kdWN0ID0ge1xyXG4gICAgICBpZHg6IG5leHRJZC5jdXJyZW50LFxyXG4gICAgICBuYW1lOiBjcmVhdGVQcm9kdWN0SW5mby5uYW1lLFxyXG4gICAgICBwcmljZTogY3JlYXRlUHJvZHVjdEluZm8ucHJpY2UsXHJcbiAgICB9O1xyXG4gICAgc2V0UHJvZHVjdExpc3QocHJvZHVjdExpc3QuY29uY2F0KG5ld1Byb2R1Y3QpKTtcclxuICAgIG5leHRJZC5jdXJyZW50ICs9IDE7XHJcbiAgICAvLyDrk7HroZ0g7ZuEIGlucHV0IOywveuTpCDstIjquLDtmZRcclxuICAgIHNldENyZWF0ZVByb2R1Y3RJbmZvKHsgbmFtZTogXCJcIiwgcHJpY2U6IFwiXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g7Lm065OcIOyEoO2DnVxyXG4gIGNvbnN0IGhhbmRsZUlzQ2xpY2tlZCA9IChpZHgpID0+IHtcclxuICAgIGFsZXJ0KFwi7ISg7YOd65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgIHNldFNlbGVjdGVkQ2FyZChpZHgpO1xyXG4gIH07XHJcblxyXG4gIC8qIOy5tOuTnOulvCDtgbTrpq3tlZjqs6Ag7YG066at7ZWcIOy5tOuTnOydmCDrs7TrjZTqsIAg67CU64CM6rOgIOyDge2SiOuqhSwg6rCA6rKpIOywveyXkCDsiJjsoJXtlaAg7IKs7ZWtIOyeheugpSDtm4Qg64uk7IucIOyImOyglSDrsoTtirwg64iE66W066m0IOyImOygleydtCDrkJzri6QuICovXHJcbiAgY29uc3Qgb25SZXZpc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0TGlzdChcclxuICAgICAgcHJvZHVjdExpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5pZHggPT09IHNlbGVjdGVkQ2FyZFxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICBuYW1lOiBjcmVhdGVQcm9kdWN0SW5mby5uYW1lLFxyXG4gICAgICAgICAgICAgIHByaWNlOiBjcmVhdGVQcm9kdWN0SW5mby5wcmljZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgOiBpdGVtO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIC8vIHByb2R1Y3RMaXN066W8IOq3uOuMgOuhnCDqsIDsoLjsmYDshJwsIGlkeCA9IDXsnbggaXRlbeyXkCDrjIDtlbTshJwgbmFtZeunjCDrs4Dqsr3tlZzri6QuXHJcbiAgICAvLyDqt7jqsowg7JWE64uQIOqyveyasOuKlCDqt7jrjIDroZwg65GU64ukLlxyXG4gIH07XHJcblxyXG4gIC8qIOuCtOqwgCDtgbTrpq3tlZwg7Lm065Oc66W8IOyCreygnO2VmOuKlCDroZzsp4HsnYQg7Kec7JW8IO2VnOuLpC4gKi9cclxuICBjb25zdCBvbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RMaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZHggIT09IHNlbGVjdGVkQ2FyZCkpO1xyXG4gICAgLy8gaWR47J2YIOqwkuydgCBudW1iZXLsnbTrr4DroZwg66y47J6Q7Je07J20IOyVhOuLmC5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIC8vIDHstIgg7ZuEIOuqqOuLrOywveydtCDri6vtnozri6QuXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtYWluVGV4dCkge1xyXG4gICAgICBzZXRTaG93Q29uZmlybSh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbbWFpblRleHQsIHN1YlRleHRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb24taGVhZFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIuqygOyDiVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIGNoYW5nZUNCPXtoYW5kbGVTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWUtaW5wdXQtZ3JvdXBcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi7IOB7ZKI66qFXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIGNoYW5nZUNCPXtoYW5kbGVDaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y3JlYXRlUHJvZHVjdEluZm8ubmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLqsIDqsqlcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgIGNoYW5nZUNCPXtoYW5kbGVDaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y3JlYXRlUHJvZHVjdEluZm8ucHJpY2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBidG5Db2xvcj1cImJ0bi1ibGFja1wiXHJcbiAgICAgICAgICAgICAgY2xpY2tDQj17KCkgPT5cclxuICAgICAgICAgICAgICAgIGhhbmRsZVNob3dDb25maXJtKFxyXG4gICAgICAgICAgICAgICAgICBcIuuTseuhne2VmOyLnOqyoOyKteuLiOq5jD9cIixcclxuICAgICAgICAgICAgICAgICAgXCLsg4jroZwg7LaU6rCA65Cp64uI64ukLlwiLFxyXG4gICAgICAgICAgICAgICAgICBidG5OYW1lXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg65OxIOuhnVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGJ0bkNvbG9yPVwiYnRuLWJsYWNrXCJcclxuICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlU2hvd0NvbmZpcm0oXHJcbiAgICAgICAgICAgICAgICAgIFwi7IiY7KCV7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIuyEoO2Dne2VnCDsubTrk5zqsIAg7IiY7KCV65Cp64uI64ukLlwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg7IiYIOyglVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGJ0bkNvbG9yPVwiYnRuLWJsYWNrXCJcclxuICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlU2hvd0NvbmZpcm0oXCLsgq3soJztlZjsi5zqsqDsirXri4jquYw/XCIsIFwi7JiB6rWsIOyCreygnOuQqeuLiOuLpC5cIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDsgq0g7KCcXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0TGlzdFxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lLmluZGV4T2Yoc2VhcmNoVmFsKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR4fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PiBoYW5kbGVJc0NsaWNrZWQoaXRlbS5pZHgpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDxDb25maXJtXHJcbiAgICAgICAgc2hvdz17c2hvd0NvbmZpcm19XHJcbiAgICAgICAgbWFpblRleHQ9e21haW5UZXh0fVxyXG4gICAgICAgIHN1YlRleHQ9e3N1YlRleHR9XHJcbiAgICAgICAgb25DbG9zZUNCPXtoYW5kbGVDbG9zZUJ0bn1cclxuICAgICAgICBvbkNvbmZpcm1DQj17aGFuZGxlQ29uZmlybUJ0bn1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=