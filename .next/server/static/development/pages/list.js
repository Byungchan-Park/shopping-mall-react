module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/card/product.js":
/*!************************************!*\
  !*** ./components/card/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\card\\product.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ProductCardComp = ({
  name,
  price,
  clickCB,
  id,
  selectedCard
}) => {
  return __jsx("div", {
    className: "product-card" + (id === selectedCard ? " clicked" : ""),
    onClick: () => clickCB(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "../../static/images/default.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "product-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, price)));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCardComp);

/***/ }),

/***/ "./components/form/button.js":
/*!***********************************!*\
  !*** ./components/form/button.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\form\\button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ButtonComp = ({
  children,
  btnColor,
  clickCB
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
    className: "btn " + btnColor,
    onClick: () => clickCB(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonComp);

/***/ }),

/***/ "./components/form/input.js":
/*!**********************************!*\
  !*** ./components/form/input.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\form\\input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const InputComp = ({
  label,
  type,
  name,
  changeCB,
  className,
  value
}) => {
  const {
    0: iptVal,
    1: setIptVal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleChange = e => {
    setIptVal(e.target.value);
    changeCB(e.target.name, e.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (InputComp);

/***/ }),

/***/ "./components/layout/footer.js":
/*!*************************************!*\
  !*** ./components/layout/footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\layout\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FooterComp = () => {
  return __jsx("footer", {
    className: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, "\uC5EC\uAE30 \uD478\uD130\uC784.");
};

/* harmony default export */ __webpack_exports__["default"] = (FooterComp);

/***/ }),

/***/ "./components/layout/header.js":
/*!*************************************!*\
  !*** ./components/layout/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\layout\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HeaderComp = () => {
  return __jsx("header", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, "\uC5EC\uAE30 \uD5E4\uB354\uC784.");
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderComp);

/***/ }),

/***/ "./components/modal/alert.js":
/*!***********************************!*\
  !*** ./components/modal/alert.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\modal\\alert.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AlertModalComp = ({
  show,
  text
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);
  return __jsx("div", {
    className: "alert-wrapper" + (show ? " on" : " off"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "text-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, text)));
};

/* harmony default export */ __webpack_exports__["default"] = (AlertModalComp);

/***/ }),

/***/ "./components/modal/confirm.js":
/*!*************************************!*\
  !*** ./components/modal/confirm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\components\\modal\\confirm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ConfirmModalComp = ({
  show,
  mainText,
  subText,
  onCloseCB,
  onConfirmCB
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (show) {
      document.body.style.overflow = "hidden"; // 스크롤 안됨.
    } else {
      document.body.style.overflow = "auto"; // 스크롤됨.
    }
  }, [show]);
  return __jsx("section", {
    className: "modal-wrapper" + (show ? " on" : " off"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "text-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, mainText), __jsx("p", {
    className: "sub",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, subText)), __jsx("div", {
    className: "btn-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "btn-confirm",
    onClick: () => onConfirmCB(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "\uD655\uC778"), __jsx("a", {
    className: "btn-cancel",
    onClick: () => onCloseCB(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "\uCDE8\uC18C"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfirmModalComp);

/***/ }),

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/header */ "./components/layout/header.js");
/* harmony import */ var _components_layout_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/footer */ "./components/layout/footer.js");
/* harmony import */ var _components_form_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/input */ "./components/form/input.js");
/* harmony import */ var _components_form_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/button */ "./components/form/button.js");
/* harmony import */ var _components_card_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/card/product */ "./components/card/product.js");
/* harmony import */ var _components_modal_confirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modal/confirm */ "./components/modal/confirm.js");
/* harmony import */ var _components_modal_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modal/alert */ "./components/modal/alert.js");
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\\uD504\uB85C\uADF8\uB798\uBC0D\\shopping-list-functionality\\pages\\list.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ProductListPage = () => {
  const {
    0: productList,
    1: setProductList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
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
  }]);
  const {
    0: searchVal,
    1: setSearchVal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 검색창

  const {
    0: productInfo,
    1: setProductInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    price: ""
  }); // 상품 등록 및 수정창

  const {
    0: selectedCard,
    1: setSelectedCard
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: selectedBtn,
    1: setSelectedBtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: showConfirm,
    1: setShowConfirm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: mainText,
    1: setMainText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: subText,
    1: setSubText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: buttonList,
    1: setButtonList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    btnName: "등 록",
    btnColor: "btn-black",
    clickCB: (id, selectedCard, productInfo) => {
      if (productInfo.name === "") {
        setShowConfirm(false);
        return handleShowAlert(`상품명이 입력되지 않았습니다.
             입력해주세요.`);
      } else if (productInfo.price === "") {
        setShowConfirm(false);
        return handleShowAlert(`가격이 입력되지 않았습니다.
             입력해주세요.`);
      } else if (productInfo.name === "" && productInfo.price === "") {
        setShowConfirm(false);
        return handleShowAlert(`상품명과 가격이 입력되지 않았습니다.
             입력해주세요.`);
      }

      handleShowConfirm("등록하시겠습니까?", "새로 추가됩니다.", id);
    },
    confirmCB: (productList, selectedCard, productInfo) => {
      onCreate(productList, selectedCard, productInfo);
      handleShowAlert("등록되었습니다.");
    }
  }, {
    id: 2,
    btnName: "수 정",
    btnColor: "btn-black",
    clickCB: (id, selectedCard) => {
      console.log(selectedCard);

      if (!selectedCard) {
        return handleShowAlert("카드를 선택해주세요.");
      } // 카드 클릭하지 않을 시에 alert창 띄운다.


      handleShowConfirm("수정하시겠습니까?", "선택한 카드가 수정됩니다.", id);
    },
    confirmCB: (productList, selectedCard, productInfo) => {
      if (productInfo.name === "") {
        setShowConfirm(false);
        return handleShowAlert(`상품명이 입력되지 않았습니다.
             입력해주세요.`);
      } else if (productInfo.price === "") {
        setShowConfirm(false);
        return handleShowAlert(`가격이 입력되지 않았습니다.
             입력해주세요.`);
      } else if (productInfo.name === "" && productInfo.price === "") {
        setShowConfirm(false);
        return handleShowAlert(`상품명과 가격이 입력되지 않았습니다.
             입력해주세요.`);
      }

      onRevise(productList, selectedCard, productInfo);
      handleShowAlert("수정되었습니다.");
    }
  }, {
    id: 3,
    btnName: "삭 제",
    btnColor: "btn-black",
    clickCB: (id, selectedCard) => {
      console.log(selectedCard);

      if (!selectedCard) {
        return handleShowAlert("카드를 선택해주세요.");
      } // 카드 클릭하지 않을 시에 alert창 띄운다.


      handleShowConfirm("삭제하시겠습니까?", "영구 삭제됩니다.", id);
    },
    confirmCB: (productList, selectedCard, productInfo) => {
      onDelete(productList, selectedCard, productInfo);
      handleShowAlert("삭제되었습니다.");
    }
  }]);
  const {
    0: showAlert,
    1: setShowAlert
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: alertText,
    1: setAlertText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // ! 등록, 수정, 삭제 버튼
  // 등록, 수정, 삭제 버튼의 콜백함수

  const handleShowConfirm = (main, sub, id) => {
    // 카드를 선택하지 않았을 경우에(수정, 삭제 버튼에 한해서만)
    setMainText(main);
    setSubText(sub);
    setSelectedBtn(id); // selectedBtn에 클릭한 버튼의 id를 state로 저장한다.
  }; // ! confirm 창의 버튼
  // confirm 창의 확인 버튼을 눌렀을 때


  const handleConfirmBtn = () => {
    setAlertText(false); // 이전에 alert창이 떴을 경우를 대비해서 상태를 false로 바꿔준다.

    buttonList.forEach(button => {
      if (button.id === selectedBtn) {
        button.confirmCB(productList, selectedCard, productInfo);
      }
    });
  }; // confirm 창의 취소 버튼을 눌렀을 때


  const handleCloseBtn = () => {
    // text들 초기화
    setMainText("");
    setSubText(""); // 선택한 카드 state 초기화

    setSelectedCard(); // confirm 창이 닫힌다.

    setShowConfirm(false);
  }; // alert 창 handling


  const handleShowAlert = text => {
    setAlertText(text);
    setShowAlert(true);
    setTimeout(function () {
      setShowAlert(false);
      setAlertText(null);
    }, 1000);
  }; // ! Search Input
  // Search input의 value를 저장해둠.


  const handleSearchInput = (name, value) => {
    setSearchVal(value); // searchVal 하고 productList 안에 있는 item.name을 비교
    // filter method 활용
    // 검색한 문자열이 존재하는지 하지 않는지 true로 반환값이 나올 수 있도록(String.prototype.includes() 활용)

    /* setProductList(
      productList.filter((item, index) => item.name.includes(value))
    ); */
    // 이렇게 구현하면 문제가 있음. render의 body 부분에서 productList에 filter를 적용.
    // array.filter((item, index) => item.indexOf('특정스트링') === index)
  }; // 등록될 상품의 다음 id 지정


  const nextId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(6); // ! 상품명, 가격 입력하는 input
  // 상품명, 가격 input의 value를 createProductInfo state에 저장해둠.

  const handleChangeInput = (name, value) => {
    setProductInfo(_objectSpread(_objectSpread({}, productInfo), {}, {
      [name]: value
    }));
  }; // ! 등록 기능


  const onCreate = (productList, selectedCard, productInfo) => {
    console.log(productList);
    const newProduct = {
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


  const handleIsClicked = idx => {
    setSelectedCard(idx); // 선택된 카드의 id 를 selectedCard state에 저장.

    handleShowAlert("선택되었습니다.");
  }; // ! 수정 기능


  const onRevise = (productList, selectedCard, productInfo) => {
    // 수정 로직
    setProductList(productList.map(item => item.idx === selectedCard ? _objectSpread(_objectSpread({}, item), {}, {
      name: productInfo.name,
      price: productInfo.price
    }) : item)); // 초기화

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


  const onDelete = (productList, selectedCard, productInfo) => {
    console.log("삭제되었습니다.");
    setProductList(productList.filter(item => item.idx !== selectedCard)); // idx의 값은 number이므로 문자열이 아님.

    setShowConfirm(false);
    setMainText("");
    setSubText("");
    setSelectedCard();
    setSelectedBtn();
  }; // ! confirm 창이 화면에 뜬다.


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (mainText) {
      setShowConfirm(true);
    }
  }, [mainText, subText]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(productList);
  }, [productList]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "list-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 11
    }
  }, __jsx(_components_form_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "\uAC80\uC0C9",
    type: "text",
    name: "search",
    changeCB: handleSearchInput,
    value: searchVal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }
  }), __jsx(_components_form_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "product-name-input-group",
    label: "\uC0C1\uD488\uBA85",
    type: "text",
    name: "name",
    changeCB: handleChangeInput,
    value: productInfo.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }
  }), __jsx(_components_form_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "\uAC00\uACA9",
    type: "text",
    name: "price",
    changeCB: handleChangeInput,
    value: productInfo.price,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }), buttonList.map(item => __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    btnColor: item.btnColor,
    clickCB: () => item.clickCB(item.id, selectedCard, productInfo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 15
    }
  }, item.btnName))), __jsx("div", {
    className: "con-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }, productList.filter(item => item.name.indexOf(searchVal) !== -1).map((item, index) => __jsx(_components_card_product__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: index,
    id: item.idx,
    name: item.name,
    price: item.price,
    selectedCard: selectedCard,
    clickCB: () => handleIsClicked(item.idx),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 19
    }
  })))))), __jsx(_components_modal_confirm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: showConfirm,
    mainText: mainText,
    subText: subText,
    onCloseCB: handleCloseBtn,
    onConfirmCB: () => handleConfirmBtn(productList),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 7
    }
  }), __jsx(_components_modal_alert__WEBPACK_IMPORTED_MODULE_7__["default"], {
    text: alertText,
    show: showAlert,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductListPage);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/list.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jspar\Desktop\프로그래밍\shopping-list-functionality\pages\list.js */"./pages/list.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL2FsZXJ0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvY29uZmlybS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiUHJvZHVjdENhcmRDb21wIiwibmFtZSIsInByaWNlIiwiY2xpY2tDQiIsImlkIiwic2VsZWN0ZWRDYXJkIiwiQnV0dG9uQ29tcCIsImNoaWxkcmVuIiwiYnRuQ29sb3IiLCJJbnB1dENvbXAiLCJsYWJlbCIsInR5cGUiLCJjaGFuZ2VDQiIsImNsYXNzTmFtZSIsInZhbHVlIiwiaXB0VmFsIiwic2V0SXB0VmFsIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiRm9vdGVyQ29tcCIsIkhlYWRlckNvbXAiLCJBbGVydE1vZGFsQ29tcCIsInNob3ciLCJ0ZXh0IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsIkNvbmZpcm1Nb2RhbENvbXAiLCJtYWluVGV4dCIsInN1YlRleHQiLCJvbkNsb3NlQ0IiLCJvbkNvbmZpcm1DQiIsIlByb2R1Y3RMaXN0UGFnZSIsInByb2R1Y3RMaXN0Iiwic2V0UHJvZHVjdExpc3QiLCJpZHgiLCJzZWFyY2hWYWwiLCJzZXRTZWFyY2hWYWwiLCJwcm9kdWN0SW5mbyIsInNldFByb2R1Y3RJbmZvIiwic2V0U2VsZWN0ZWRDYXJkIiwic2VsZWN0ZWRCdG4iLCJzZXRTZWxlY3RlZEJ0biIsInNob3dDb25maXJtIiwic2V0U2hvd0NvbmZpcm0iLCJzZXRNYWluVGV4dCIsInNldFN1YlRleHQiLCJidXR0b25MaXN0Iiwic2V0QnV0dG9uTGlzdCIsImJ0bk5hbWUiLCJoYW5kbGVTaG93QWxlcnQiLCJoYW5kbGVTaG93Q29uZmlybSIsImNvbmZpcm1DQiIsIm9uQ3JlYXRlIiwiY29uc29sZSIsImxvZyIsIm9uUmV2aXNlIiwib25EZWxldGUiLCJzaG93QWxlcnQiLCJzZXRTaG93QWxlcnQiLCJhbGVydFRleHQiLCJzZXRBbGVydFRleHQiLCJtYWluIiwic3ViIiwiaGFuZGxlQ29uZmlybUJ0biIsImZvckVhY2giLCJidXR0b24iLCJoYW5kbGVDbG9zZUJ0biIsInNldFRpbWVvdXQiLCJoYW5kbGVTZWFyY2hJbnB1dCIsIm5leHRJZCIsInVzZVJlZiIsImhhbmRsZUNoYW5nZUlucHV0IiwibmV3UHJvZHVjdCIsImN1cnJlbnQiLCJjb25jYXQiLCJoYW5kbGVJc0NsaWNrZWQiLCJtYXAiLCJpdGVtIiwiZmlsdGVyIiwiaW5kZXhPZiIsImluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUpiO0FBS0UsZUFBVyxFQUFFLE1BQU1ILGdCQUFnQixDQUFDL0IsV0FBRCxDQUxyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckRGLEVBNERFLE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUUyQixTQUFiO0FBQXdCLFFBQUksRUFBRUYsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVERixDQURGO0FBZ0VELENBM1REOztBQTZUZTFCLDhFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFVBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdENhcmRDb21wID0gKHsgbmFtZSwgcHJpY2UsIGNsaWNrQ0IsIGlkLCBzZWxlY3RlZENhcmQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17XCJwcm9kdWN0LWNhcmRcIiArIChpZCA9PT0gc2VsZWN0ZWRDYXJkID8gXCIgY2xpY2tlZFwiIDogXCJcIil9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrQ0IoKX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVmYXVsdC5zdmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57bmFtZX08L3A+XHJcbiAgICAgICAgPHA+e3ByaWNlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmRDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBCdXR0b25Db21wID0gKHsgY2hpbGRyZW4sIGJ0bkNvbG9yLCBjbGlja0NCIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIFwiICsgYnRuQ29sb3J9IG9uQ2xpY2s9eygpID0+IGNsaWNrQ0IoKX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Db21wO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbnB1dENvbXAgPSAoeyBsYWJlbCwgdHlwZSwgbmFtZSwgY2hhbmdlQ0IsIGNsYXNzTmFtZSwgdmFsdWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtpcHRWYWwsIHNldElwdFZhbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0SXB0VmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNoYW5nZUNCKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsPntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb290ZXJDb21wID0gKCkgPT4ge1xyXG4gIHJldHVybiA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPuyXrOq4sCDtkbjthLDsnoQuPC9mb290ZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyQ29tcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGVhZGVyQ29tcCA9ICgpID0+IHtcclxuICByZXR1cm4gPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj7sl6zquLAg7Zek642U7J6ELjwvaGVhZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNvbXA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFsZXJ0TW9kYWxDb21wID0gKHsgc2hvdywgdGV4dCB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaG93KSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgfVxyXG4gIH0sIFtzaG93XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtcImFsZXJ0LXdyYXBwZXJcIiArIChzaG93ID8gXCIgb25cIiA6IFwiIG9mZlwiKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyb3VwXCI+e3RleHR9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0TW9kYWxDb21wO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvbmZpcm1Nb2RhbENvbXAgPSAoe1xyXG4gIHNob3csXHJcbiAgbWFpblRleHQsXHJcbiAgc3ViVGV4dCxcclxuICBvbkNsb3NlQ0IsXHJcbiAgb25Db25maXJtQ0IsXHJcbn0pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNob3cpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7IC8vIOyKpO2BrOuhpCDslYjrkKguXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7IC8vIOyKpO2BrOuhpOuQqC5cclxuICAgIH1cclxuICB9LCBbc2hvd10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1wibW9kYWwtd3JhcHBlclwiICsgKHNob3cgPyBcIiBvblwiIDogXCIgb2ZmXCIpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JvdXBcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1haW5cIj57bWFpblRleHR9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViXCI+e3N1YlRleHR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tY29uZmlybVwiIG9uQ2xpY2s9eygpID0+IG9uQ29uZmlybUNCKCl9PlxyXG4gICAgICAgICAgICDtmZXsnbhcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1jYW5jZWxcIiBvbkNsaWNrPXsoKSA9PiBvbkNsb3NlQ0IoKX0+XHJcbiAgICAgICAgICAgIOy3qOyGjFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybU1vZGFsQ29tcDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtL2lucHV0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9idXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZC9wcm9kdWN0XCI7XHJcbmltcG9ydCBDb25maXJtIGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsL2NvbmZpcm1cIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsL2FsZXJ0XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGlkeDogMSwgbmFtZTogXCLsg4jsmrDquaFcIiwgcHJpY2U6IFwiMTUwMFwiIH0sXHJcbiAgICB7IGlkeDogMiwgbmFtZTogXCLqs6Dqtazrp4jquaFcIiwgcHJpY2U6IFwiMjAwMFwiIH0sXHJcbiAgICB7IGlkeDogMywgbmFtZTogXCLqsJDsnpDquaFcIiwgcHJpY2U6IFwiMTgwMFwiIH0sXHJcbiAgICB7IGlkeDogNCwgbmFtZTogXCLri6TsnbTsoJzsiqTti7BcIiwgcHJpY2U6IFwiMTAwMDBcIiB9LFxyXG4gICAgeyBpZHg6IDUsIG5hbWU6IFwi7LSI7L2U7YyM7J20XCIsIHByaWNlOiBcIjUwMDBcIiB9LFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBbc2VhcmNoVmFsLCBzZXRTZWFyY2hWYWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8g6rKA7IOJ7LC9XHJcbiAgY29uc3QgW3Byb2R1Y3RJbmZvLCBzZXRQcm9kdWN0SW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcHJpY2U6IFwiXCIsXHJcbiAgfSk7XHJcbiAgLy8g7IOB7ZKIIOuTseuhnSDrsI8g7IiY7KCV7LC9XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2FyZCwgc2V0U2VsZWN0ZWRDYXJkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQnRuLCBzZXRTZWxlY3RlZEJ0bl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzaG93Q29uZmlybSwgc2V0U2hvd0NvbmZpcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttYWluVGV4dCwgc2V0TWFpblRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1YlRleHQsIHNldFN1YlRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2J1dHRvbkxpc3QsIHNldEJ1dHRvbkxpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgYnRuTmFtZTogXCLrk7Eg66GdXCIsXHJcbiAgICAgIGJ0bkNvbG9yOiBcImJ0bi1ibGFja1wiLFxyXG4gICAgICBjbGlja0NCOiAoaWQsIHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgICAgICBpZiAocHJvZHVjdEluZm8ubmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZVNob3dBbGVydChcclxuICAgICAgICAgICAgYOyDge2SiOuqheydtCDsnoXroKXrkJjsp4Ag7JWK7JWY7Iq164uI64ukLlxyXG4gICAgICAgICAgICAg7J6F66Cl7ZW07KO87IS47JqULmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9kdWN0SW5mby5wcmljZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZVNob3dBbGVydChcclxuICAgICAgICAgICAgYOqwgOqyqeydtCDsnoXroKXrkJjsp4Ag7JWK7JWY7Iq164uI64ukLlxyXG4gICAgICAgICAgICAg7J6F66Cl7ZW07KO87IS47JqULmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9kdWN0SW5mby5uYW1lID09PSBcIlwiICYmIHByb2R1Y3RJbmZvLnByaWNlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICAgICAgICByZXR1cm4gaGFuZGxlU2hvd0FsZXJ0KFxyXG4gICAgICAgICAgICBg7IOB7ZKI66qF6rO8IOqwgOqyqeydtCDsnoXroKXrkJjsp4Ag7JWK7JWY7Iq164uI64ukLlxyXG4gICAgICAgICAgICAg7J6F66Cl7ZW07KO87IS47JqULmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZVNob3dDb25maXJtKFwi65Ox66Gd7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLCBcIuyDiOuhnCDstpTqsIDrkKnri4jri6QuXCIsIGlkKTtcclxuICAgICAgfSxcclxuICAgICAgY29uZmlybUNCOiAocHJvZHVjdExpc3QsIHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgICAgICBvbkNyZWF0ZShwcm9kdWN0TGlzdCwgc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbyk7XHJcbiAgICAgICAgaGFuZGxlU2hvd0FsZXJ0KFwi65Ox66Gd65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBidG5OYW1lOiBcIuyImCDsoJVcIixcclxuICAgICAgYnRuQ29sb3I6IFwiYnRuLWJsYWNrXCIsXHJcbiAgICAgIGNsaWNrQ0I6IChpZCwgc2VsZWN0ZWRDYXJkKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRDYXJkKTtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkQ2FyZCkge1xyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZVNob3dBbGVydChcIuy5tOuTnOulvCDshKDtg53tlbTso7zshLjsmpQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDsubTrk5wg7YG066at7ZWY7KeAIOyViuydhCDsi5zsl5AgYWxlcnTssL0g652E7Jq064ukLlxyXG4gICAgICAgIGhhbmRsZVNob3dDb25maXJtKFwi7IiY7KCV7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLCBcIuyEoO2Dne2VnCDsubTrk5zqsIAg7IiY7KCV65Cp64uI64ukLlwiLCBpZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpcm1DQjogKHByb2R1Y3RMaXN0LCBzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RJbmZvLm5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICAgICAgICAgIHJldHVybiBoYW5kbGVTaG93QWxlcnQoXHJcbiAgICAgICAgICAgIGDsg4HtkojrqoXsnbQg7J6F66Cl65CY7KeAIOyViuyVmOyKteuLiOuLpC5cclxuICAgICAgICAgICAgIOyeheugpe2VtOyjvOyEuOyalC5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvZHVjdEluZm8ucHJpY2UgPT09IFwiXCIpIHtcclxuICAgICAgICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICAgICAgICAgIHJldHVybiBoYW5kbGVTaG93QWxlcnQoXHJcbiAgICAgICAgICAgIGDqsIDqsqnsnbQg7J6F66Cl65CY7KeAIOyViuyVmOyKteuLiOuLpC5cclxuICAgICAgICAgICAgIOyeheugpe2VtOyjvOyEuOyalC5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvZHVjdEluZm8ubmFtZSA9PT0gXCJcIiAmJiBwcm9kdWN0SW5mby5wcmljZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZVNob3dBbGVydChcclxuICAgICAgICAgICAgYOyDge2SiOuqheqzvCDqsIDqsqnsnbQg7J6F66Cl65CY7KeAIOyViuyVmOyKteuLiOuLpC5cclxuICAgICAgICAgICAgIOyeheugpe2VtOyjvOyEuOyalC5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvblJldmlzZShwcm9kdWN0TGlzdCwgc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbyk7XHJcbiAgICAgICAgaGFuZGxlU2hvd0FsZXJ0KFwi7IiY7KCV65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBidG5OYW1lOiBcIuyCrSDsoJxcIixcclxuICAgICAgYnRuQ29sb3I6IFwiYnRuLWJsYWNrXCIsXHJcbiAgICAgIGNsaWNrQ0I6IChpZCwgc2VsZWN0ZWRDYXJkKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRDYXJkKTtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkQ2FyZCkge1xyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZVNob3dBbGVydChcIuy5tOuTnOulvCDshKDtg53tlbTso7zshLjsmpQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDsubTrk5wg7YG066at7ZWY7KeAIOyViuydhCDsi5zsl5AgYWxlcnTssL0g652E7Jq064ukLlxyXG4gICAgICAgIGhhbmRsZVNob3dDb25maXJtKFwi7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLCBcIuyYgeq1rCDsgq3soJzrkKnri4jri6QuXCIsIGlkKTtcclxuICAgICAgfSxcclxuICAgICAgY29uZmlybUNCOiAocHJvZHVjdExpc3QsIHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgICAgICBvbkRlbGV0ZShwcm9kdWN0TGlzdCwgc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbyk7XHJcbiAgICAgICAgaGFuZGxlU2hvd0FsZXJ0KFwi7IKt7KCc65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgY29uc3QgW3Nob3dBbGVydCwgc2V0U2hvd0FsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWxlcnRUZXh0LCBzZXRBbGVydFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vICEg65Ox66GdLCDsiJjsoJUsIOyCreygnCDrsoTtirxcclxuICAvLyDrk7HroZ0sIOyImOyglSwg7IKt7KCcIOuyhO2KvOydmCDsvZzrsLHtlajsiJhcclxuICBjb25zdCBoYW5kbGVTaG93Q29uZmlybSA9IChtYWluLCBzdWIsIGlkKSA9PiB7XHJcbiAgICAvLyDsubTrk5zrpbwg7ISg7YOd7ZWY7KeAIOyViuyVmOydhCDqsr3smrDsl5Ao7IiY7KCVLCDsgq3soJwg67KE7Yq87JeQIO2VnO2VtOyEnOunjClcclxuICAgIHNldE1haW5UZXh0KG1haW4pO1xyXG4gICAgc2V0U3ViVGV4dChzdWIpO1xyXG4gICAgc2V0U2VsZWN0ZWRCdG4oaWQpO1xyXG4gICAgLy8gc2VsZWN0ZWRCdG7sl5Ag7YG066at7ZWcIOuyhO2KvOydmCBpZOulvCBzdGF0ZeuhnCDsoIDsnqXtlZzri6QuXHJcbiAgfTtcclxuXHJcbiAgLy8gISBjb25maXJtIOywveydmCDrsoTtirxcclxuICAvLyBjb25maXJtIOywveydmCDtmZXsnbgg67KE7Yq87J2EIOuIjOuggOydhCDrlYxcclxuICBjb25zdCBoYW5kbGVDb25maXJtQnRuID0gKCkgPT4ge1xyXG4gICAgc2V0QWxlcnRUZXh0KGZhbHNlKTtcclxuICAgIC8vIOydtOyghOyXkCBhbGVydOywveydtCDrlrTsnYQg6rK97Jqw66W8IOuMgOu5hO2VtOyEnCDsg4Htg5zrpbwgZmFsc2XroZwg67CU6r+U7KSA64ukLlxyXG4gICAgYnV0dG9uTGlzdC5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gc2VsZWN0ZWRCdG4pIHtcclxuICAgICAgICBidXR0b24uY29uZmlybUNCKHByb2R1Y3RMaXN0LCBzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uZmlybSDssL3snZgg7Leo7IaMIOuyhO2KvOydhCDriIzroIDsnYQg65WMXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VCdG4gPSAoKSA9PiB7XHJcbiAgICAvLyB0ZXh065OkIOy0iOq4sO2ZlFxyXG4gICAgc2V0TWFpblRleHQoXCJcIik7XHJcbiAgICBzZXRTdWJUZXh0KFwiXCIpO1xyXG4gICAgLy8g7ISg7YOd7ZWcIOy5tOuTnCBzdGF0ZSDstIjquLDtmZRcclxuICAgIHNldFNlbGVjdGVkQ2FyZCgpO1xyXG4gICAgLy8gY29uZmlybSDssL3snbQg64ur7Z6M64ukLlxyXG4gICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIC8vIGFsZXJ0IOywvSBoYW5kbGluZ1xyXG4gIGNvbnN0IGhhbmRsZVNob3dBbGVydCA9ICh0ZXh0KSA9PiB7XHJcbiAgICBzZXRBbGVydFRleHQodGV4dCk7XHJcbiAgICBzZXRTaG93QWxlcnQodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0U2hvd0FsZXJ0KGZhbHNlKTtcclxuICAgICAgc2V0QWxlcnRUZXh0KG51bGwpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISBTZWFyY2ggSW5wdXRcclxuICAvLyBTZWFyY2ggaW5wdXTsnZggdmFsdWXrpbwg7KCA7J6l7ZW065GgLlxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaElucHV0ID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hWYWwodmFsdWUpO1xyXG4gICAgLy8gc2VhcmNoVmFsIO2VmOqzoCBwcm9kdWN0TGlzdCDslYjsl5Ag7J6I64qUIGl0ZW0ubmFtZeydhCDruYTqtZBcclxuICAgIC8vIGZpbHRlciBtZXRob2Qg7Zmc7JqpXHJcbiAgICAvLyDqsoDsg4ntlZwg66y47J6Q7Je07J20IOyhtOyerO2VmOuKlOyngCDtlZjsp4Ag7JWK64qU7KeAIHRydWXroZwg67CY7ZmY6rCS7J20IOuCmOyYrCDsiJgg7J6I64+E66GdKFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoKSDtmZzsmqkpXHJcbiAgICAvKiBzZXRQcm9kdWN0TGlzdChcclxuICAgICAgcHJvZHVjdExpc3QuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaXRlbS5uYW1lLmluY2x1ZGVzKHZhbHVlKSlcclxuICAgICk7ICovXHJcbiAgICAvLyDsnbTroIfqsowg6rWs7ZiE7ZWY66m0IOusuOygnOqwgCDsnojsnYwuIHJlbmRlcuydmCBib2R5IOu2gOu2hOyXkOyEnCBwcm9kdWN0TGlzdOyXkCBmaWx0ZXLrpbwg7KCB7JqpLlxyXG5cclxuICAgIC8vIGFycmF5LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGl0ZW0uaW5kZXhPZign7Yq57KCV7Iqk7Yq466eBJykgPT09IGluZGV4KVxyXG4gIH07XHJcblxyXG4gIC8vIOuTseuhneuQoCDsg4HtkojsnZgg64uk7J2MIGlkIOyngOyglVxyXG4gIGNvbnN0IG5leHRJZCA9IHVzZVJlZig2KTtcclxuXHJcbiAgLy8gISDsg4HtkojrqoUsIOqwgOqyqSDsnoXroKXtlZjripQgaW5wdXRcclxuICAvLyDsg4HtkojrqoUsIOqwgOqyqSBpbnB1dOydmCB2YWx1ZeulvCBjcmVhdGVQcm9kdWN0SW5mbyBzdGF0ZeyXkCDsoIDsnqXtlbTrkaAuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldFByb2R1Y3RJbmZvKHsgLi4ucHJvZHVjdEluZm8sIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISDrk7HroZ0g6riw64qlXHJcbiAgY29uc3Qgb25DcmVhdGUgPSAocHJvZHVjdExpc3QsIHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RMaXN0KTtcclxuICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSB7XHJcbiAgICAgIGlkeDogbmV4dElkLmN1cnJlbnQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3RJbmZvLm5hbWUsXHJcbiAgICAgIHByaWNlOiBwcm9kdWN0SW5mby5wcmljZSxcclxuICAgIH07XHJcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0TGlzdC5jb25jYXQobmV3UHJvZHVjdCkpO1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdExpc3QpO1xyXG4gICAgLy8g65Ox66GdIO2bhCDri6TsnYwg7IOB7ZKIIOy2lOqwgOulvCDsnITtlbQgaWQg6rCAIDHslKkg7Kad6rCAXHJcbiAgICBuZXh0SWQuY3VycmVudCArPSAxO1xyXG4gICAgLy8g7LSI6riw7ZmUXHJcbiAgICBzZXRQcm9kdWN0SW5mbyh7IG5hbWU6IFwiXCIsIHByaWNlOiBcIlwiIH0pO1xyXG4gICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xyXG4gICAgc2V0TWFpblRleHQoXCJcIik7XHJcbiAgICBzZXRTdWJUZXh0KFwiXCIpO1xyXG4gICAgc2V0U2VsZWN0ZWRDYXJkKCk7XHJcbiAgICBzZXRTZWxlY3RlZEJ0bigpO1xyXG4gIH07XHJcblxyXG4gIC8vICEg7Lm065OcIOyEoO2DnVxyXG4gIGNvbnN0IGhhbmRsZUlzQ2xpY2tlZCA9IChpZHgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkQ2FyZChpZHgpO1xyXG4gICAgLy8g7ISg7YOd65CcIOy5tOuTnOydmCBpZCDrpbwgc2VsZWN0ZWRDYXJkIHN0YXRl7JeQIOyggOyepS5cclxuICAgIGhhbmRsZVNob3dBbGVydChcIuyEoO2DneuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gISDsiJjsoJUg6riw64qlXHJcbiAgY29uc3Qgb25SZXZpc2UgPSAocHJvZHVjdExpc3QsIHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgIC8vIOyImOyglSDroZzsp4FcclxuICAgIHNldFByb2R1Y3RMaXN0KFxyXG4gICAgICBwcm9kdWN0TGlzdC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgaXRlbS5pZHggPT09IHNlbGVjdGVkQ2FyZFxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0SW5mby5uYW1lLFxyXG4gICAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0SW5mby5wcmljZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgOiBpdGVtXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICAvLyDstIjquLDtmZRcclxuICAgIHNldFByb2R1Y3RJbmZvKHsgbmFtZTogXCJcIiwgcHJpY2U6IFwiXCIgfSk7XHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIHNldFNlbGVjdGVkQnRuKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISDsgq3soJwg6riw64qlXHJcbiAgY29uc3Qgb25EZWxldGUgPSAocHJvZHVjdExpc3QsIHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwi7IKt7KCc65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RMaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZHggIT09IHNlbGVjdGVkQ2FyZCkpO1xyXG4gICAgLy8gaWR47J2YIOqwkuydgCBudW1iZXLsnbTrr4DroZwg66y47J6Q7Je07J20IOyVhOuLmC5cclxuICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICAgIHNldE1haW5UZXh0KFwiXCIpO1xyXG4gICAgc2V0U3ViVGV4dChcIlwiKTtcclxuICAgIHNldFNlbGVjdGVkQ2FyZCgpO1xyXG4gICAgc2V0U2VsZWN0ZWRCdG4oKTtcclxuICB9O1xyXG5cclxuICAvLyAhIGNvbmZpcm0g7LC97J20IO2ZlOuptOyXkCDrnKzri6QuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtYWluVGV4dCkge1xyXG4gICAgICBzZXRTaG93Q29uZmlybSh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbbWFpblRleHQsIHN1YlRleHRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RMaXN0KTtcclxuICB9LCBbcHJvZHVjdExpc3RdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uLWhlYWRcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLqsoDsg4lcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lLWlucHV0LWdyb3VwXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuyDge2SiOuqhVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RJbmZvLm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi6rCA6rKpXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RJbmZvLnByaWNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7YnV0dG9uTGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBidG5Db2xvcj17aXRlbS5idG5Db2xvcn1cclxuICAgICAgICAgICAgICAgIGNsaWNrQ0I9eygpID0+IGl0ZW0uY2xpY2tDQihpdGVtLmlkLCBzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5idG5OYW1lfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb24tYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICB7cHJvZHVjdExpc3RcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubmFtZS5pbmRleE9mKHNlYXJjaFZhbCkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkeH1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXJkPXtzZWxlY3RlZENhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDQj17KCkgPT4gaGFuZGxlSXNDbGlja2VkKGl0ZW0uaWR4KX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENvbmZpcm1cclxuICAgICAgICBzaG93PXtzaG93Q29uZmlybX1cclxuICAgICAgICBtYWluVGV4dD17bWFpblRleHR9XHJcbiAgICAgICAgc3ViVGV4dD17c3ViVGV4dH1cclxuICAgICAgICBvbkNsb3NlQ0I9e2hhbmRsZUNsb3NlQnRufVxyXG4gICAgICAgIG9uQ29uZmlybUNCPXsoKSA9PiBoYW5kbGVDb25maXJtQnRuKHByb2R1Y3RMaXN0KX1cclxuICAgICAgLz5cclxuICAgICAgPEFsZXJ0IHRleHQ9e2FsZXJ0VGV4dH0gc2hvdz17c2hvd0FsZXJ0fSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0UGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==