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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\card\\product.js";
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
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\form\\button.js";
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
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\form\\input.js";

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
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\layout\\footer.js";
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
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\layout\\header.js";
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
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\modal\\alert.js";
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
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\components\\modal\\confirm.js";

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
var _jsxFileName = "C:\\Users\\jspar\\Desktop\\shopping-list-functionality\\pages\\list.js";
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: productInfo,
    1: setProductInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    price: ""
  });
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
      for (let info in productInfo) {
        if (!productInfo[info]) {
          return handleShowAlert(`${info} 를 입력하세요.`);
        }
      }

      handleShowConfirm("등록하시겠습니까?", "새로 추가됩니다.", id);
    },
    confirmCB: (selectedCard, productInfo) => {
      onCreate(productInfo);
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
    confirmCB: (selectedCard, productInfo) => {
      onRevise(selectedCard, productInfo);
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
    confirmCB: selectedCard => {
      onDelete(selectedCard);
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
        button.confirmCB(selectedCard, productInfo);
        handleShowAlert(`${button.btnName} 되었습니다.`);
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


  const onCreate = productInfo => {
    const newProduct = {
      idx: nextId.current,
      name: productInfo.name,
      price: productInfo.price
    };
    setProductList(productList.concat(newProduct)); // 등록 후 다음 상품 추가를 위해 id 가 1씩 증가

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


  const onRevise = (selectedCard, productInfo) => {
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


  const onDelete = selectedCard => {
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "list-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
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
      lineNumber: 223,
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
      lineNumber: 230,
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
      lineNumber: 238,
      columnNumber: 13
    }
  }), buttonList.map(item => __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    btnColor: item.btnColor,
    clickCB: () => item.clickCB(item.id, selectedCard, productInfo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, item.btnName))), __jsx("div", {
    className: "con-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
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
      lineNumber: 259,
      columnNumber: 19
    }
  })))))), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }
  }), __jsx(_components_modal_confirm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: showConfirm,
    mainText: mainText,
    subText: subText,
    onCloseCB: handleCloseBtn,
    onConfirmCB: handleConfirmBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }
  }), __jsx(_components_modal_alert__WEBPACK_IMPORTED_MODULE_7__["default"], {
    text: alertText,
    show: showAlert,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductListPage);

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/list.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jspar\Desktop\shopping-list-functionality\pages\list.js */"./pages/list.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL2FsZXJ0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvY29uZmlybS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiUHJvZHVjdENhcmRDb21wIiwibmFtZSIsInByaWNlIiwiY2xpY2tDQiIsImlkIiwic2VsZWN0ZWRDYXJkIiwiQnV0dG9uQ29tcCIsImNoaWxkcmVuIiwiYnRuQ29sb3IiLCJJbnB1dENvbXAiLCJsYWJlbCIsInR5cGUiLCJjaGFuZ2VDQiIsImNsYXNzTmFtZSIsInZhbHVlIiwiaXB0VmFsIiwic2V0SXB0VmFsIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiRm9vdGVyQ29tcCIsIkhlYWRlckNvbXAiLCJBbGVydE1vZGFsQ29tcCIsInNob3ciLCJ0ZXh0IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsIkNvbmZpcm1Nb2RhbENvbXAiLCJtYWluVGV4dCIsInN1YlRleHQiLCJvbkNsb3NlQ0IiLCJvbkNvbmZpcm1DQiIsIlByb2R1Y3RMaXN0UGFnZSIsInByb2R1Y3RMaXN0Iiwic2V0UHJvZHVjdExpc3QiLCJpZHgiLCJzZWFyY2hWYWwiLCJzZXRTZWFyY2hWYWwiLCJwcm9kdWN0SW5mbyIsInNldFByb2R1Y3RJbmZvIiwic2V0U2VsZWN0ZWRDYXJkIiwic2VsZWN0ZWRCdG4iLCJzZXRTZWxlY3RlZEJ0biIsInNob3dDb25maXJtIiwic2V0U2hvd0NvbmZpcm0iLCJzZXRNYWluVGV4dCIsInNldFN1YlRleHQiLCJidXR0b25MaXN0Iiwic2V0QnV0dG9uTGlzdCIsImJ0bk5hbWUiLCJpbmZvIiwiaGFuZGxlU2hvd0FsZXJ0IiwiaGFuZGxlU2hvd0NvbmZpcm0iLCJjb25maXJtQ0IiLCJvbkNyZWF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvblJldmlzZSIsIm9uRGVsZXRlIiwic2hvd0FsZXJ0Iiwic2V0U2hvd0FsZXJ0IiwiYWxlcnRUZXh0Iiwic2V0QWxlcnRUZXh0IiwibWFpbiIsInN1YiIsImhhbmRsZUNvbmZpcm1CdG4iLCJmb3JFYWNoIiwiYnV0dG9uIiwiaGFuZGxlQ2xvc2VCdG4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2VhcmNoSW5wdXQiLCJuZXh0SWQiLCJ1c2VSZWYiLCJoYW5kbGVDaGFuZ2VJbnB1dCIsIm5ld1Byb2R1Y3QiLCJjdXJyZW50IiwiY29uY2F0IiwiaGFuZGxlSXNDbGlja2VkIiwibWFwIiwiaXRlbSIsImZpbHRlciIsImluZGV4T2YiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFBLElBdkRGLEVBOERFLE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUVKLFNBQWI7QUFBd0IsUUFBSSxFQUFFRixTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOURGLENBREY7QUFrRUQsQ0FqUkQ7O0FBbVJlM0IsOEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UkEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0Q2FyZENvbXAgPSAoeyBuYW1lLCBwcmljZSwgY2xpY2tDQiwgaWQsIHNlbGVjdGVkQ2FyZCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtcInByb2R1Y3QtY2FyZFwiICsgKGlkID09PSBzZWxlY3RlZENhcmQgPyBcIiBjbGlja2VkXCIgOiBcIlwiKX1cclxuICAgICAgb25DbGljaz17KCkgPT4gY2xpY2tDQigpfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9kZWZhdWx0LnN2Z1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiPntuYW1lfTwvcD5cclxuICAgICAgICA8cD57cHJpY2V9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZENvbXA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbkNvbXAgPSAoeyBjaGlsZHJlbiwgYnRuQ29sb3IsIGNsaWNrQ0IgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gXCIgKyBidG5Db2xvcn0gb25DbGljaz17KCkgPT4gY2xpY2tDQigpfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkNvbXA7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IElucHV0Q29tcCA9ICh7IGxhYmVsLCB0eXBlLCBuYW1lLCBjaGFuZ2VDQiwgY2xhc3NOYW1lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgY29uc3QgW2lwdFZhbCwgc2V0SXB0VmFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRJcHRWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY2hhbmdlQ0IoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dENvbXA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEZvb3RlckNvbXAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+7Jes6riwIO2RuO2EsOyehC48L2Zvb3Rlcj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIZWFkZXJDb21wID0gKCkgPT4ge1xyXG4gIHJldHVybiA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPuyXrOq4sCDtl6TrjZTsnoQuPC9oZWFkZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ29tcDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQWxlcnRNb2RhbENvbXAgPSAoeyBzaG93LCB0ZXh0IH0pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNob3cpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICB9XHJcbiAgfSwgW3Nob3ddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wiYWxlcnQtd3JhcHBlclwiICsgKHNob3cgPyBcIiBvblwiIDogXCIgb2ZmXCIpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JvdXBcIj57dGV4dH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnRNb2RhbENvbXA7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29uZmlybU1vZGFsQ29tcCA9ICh7XHJcbiAgc2hvdyxcclxuICBtYWluVGV4dCxcclxuICBzdWJUZXh0LFxyXG4gIG9uQ2xvc2VDQixcclxuICBvbkNvbmZpcm1DQixcclxufSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2hvdykge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjsgLy8g7Iqk7YGs66GkIOyViOuQqC5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjsgLy8g7Iqk7YGs66Gk65CoLlxyXG4gICAgfVxyXG4gIH0sIFtzaG93XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17XCJtb2RhbC13cmFwcGVyXCIgKyAoc2hvdyA/IFwiIG9uXCIgOiBcIiBvZmZcIil9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncm91cFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFpblwiPnttYWluVGV4dH08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJcIj57c3ViVGV4dH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1jb25maXJtXCIgb25DbGljaz17KCkgPT4gb25Db25maXJtQ0IoKX0+XHJcbiAgICAgICAgICAgIO2ZleyduFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLWNhbmNlbFwiIG9uQ2xpY2s9eygpID0+IG9uQ2xvc2VDQigpfT5cclxuICAgICAgICAgICAg7Leo7IaMXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maXJtTW9kYWxDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9mb290ZXJcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vaW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtL2J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkL3Byb2R1Y3RcIjtcclxuaW1wb3J0IENvbmZpcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWwvY29uZmlybVwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWwvYWxlcnRcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RMaXN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgIHsgaWR4OiAxLCBuYW1lOiBcIuyDiOyasOq5oVwiLCBwcmljZTogXCIxNTAwXCIgfSxcclxuICAgIHsgaWR4OiAyLCBuYW1lOiBcIuqzoOq1rOuniOq5oVwiLCBwcmljZTogXCIyMDAwXCIgfSxcclxuICAgIHsgaWR4OiAzLCBuYW1lOiBcIuqwkOyekOq5oVwiLCBwcmljZTogXCIxODAwXCIgfSxcclxuICAgIHsgaWR4OiA0LCBuYW1lOiBcIuuLpOydtOygnOyKpO2LsFwiLCBwcmljZTogXCIxMDAwMFwiIH0sXHJcbiAgICB7IGlkeDogNSwgbmFtZTogXCLstIjsvZTtjIzsnbRcIiwgcHJpY2U6IFwiNTAwMFwiIH0sXHJcbiAgXSk7XHJcbiAgY29uc3QgW3NlYXJjaFZhbCwgc2V0U2VhcmNoVmFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9kdWN0SW5mbywgc2V0UHJvZHVjdEluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHByaWNlOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENhcmQsIHNldFNlbGVjdGVkQ2FyZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEJ0biwgc2V0U2VsZWN0ZWRCdG5dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2hvd0NvbmZpcm0sIHNldFNob3dDb25maXJtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWFpblRleHQsIHNldE1haW5UZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWJUZXh0LCBzZXRTdWJUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtidXR0b25MaXN0LCBzZXRCdXR0b25MaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGJ0bk5hbWU6IFwi65OxIOuhnVwiLFxyXG4gICAgICBidG5Db2xvcjogXCJidG4tYmxhY2tcIixcclxuICAgICAgY2xpY2tDQjogKGlkLCBzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5mbyBpbiBwcm9kdWN0SW5mbykge1xyXG4gICAgICAgICAgaWYgKCFwcm9kdWN0SW5mb1tpbmZvXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlU2hvd0FsZXJ0KGAke2luZm99IOulvCDsnoXroKXtlZjshLjsmpQuYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZVNob3dDb25maXJtKFwi65Ox66Gd7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLCBcIuyDiOuhnCDstpTqsIDrkKnri4jri6QuXCIsIGlkKTtcclxuICAgICAgfSxcclxuICAgICAgY29uZmlybUNCOiAoc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbykgPT4ge1xyXG4gICAgICAgIG9uQ3JlYXRlKHByb2R1Y3RJbmZvKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBidG5OYW1lOiBcIuyImCDsoJVcIixcclxuICAgICAgYnRuQ29sb3I6IFwiYnRuLWJsYWNrXCIsXHJcbiAgICAgIGNsaWNrQ0I6IChpZCwgc2VsZWN0ZWRDYXJkKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRDYXJkKTtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkQ2FyZCkge1xyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZVNob3dBbGVydChcIuy5tOuTnOulvCDshKDtg53tlbTso7zshLjsmpQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDsubTrk5wg7YG066at7ZWY7KeAIOyViuydhCDsi5zsl5AgYWxlcnTssL0g652E7Jq064ukLlxyXG4gICAgICAgIGhhbmRsZVNob3dDb25maXJtKFwi7IiY7KCV7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLCBcIuyEoO2Dne2VnCDsubTrk5zqsIAg7IiY7KCV65Cp64uI64ukLlwiLCBpZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpcm1DQjogKHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgICAgICBvblJldmlzZShzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBidG5OYW1lOiBcIuyCrSDsoJxcIixcclxuICAgICAgYnRuQ29sb3I6IFwiYnRuLWJsYWNrXCIsXHJcbiAgICAgIGNsaWNrQ0I6IChpZCwgc2VsZWN0ZWRDYXJkKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRDYXJkKTtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkQ2FyZCkge1xyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZVNob3dBbGVydChcIuy5tOuTnOulvCDshKDtg53tlbTso7zshLjsmpQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDsubTrk5wg7YG066at7ZWY7KeAIOyViuydhCDsi5zsl5AgYWxlcnTssL0g652E7Jq064ukLlxyXG4gICAgICAgIGhhbmRsZVNob3dDb25maXJtKFwi7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLCBcIuyYgeq1rCDsgq3soJzrkKnri4jri6QuXCIsIGlkKTtcclxuICAgICAgfSxcclxuICAgICAgY29uZmlybUNCOiAoc2VsZWN0ZWRDYXJkKSA9PiB7XHJcbiAgICAgICAgb25EZWxldGUoc2VsZWN0ZWRDYXJkKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgY29uc3QgW3Nob3dBbGVydCwgc2V0U2hvd0FsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWxlcnRUZXh0LCBzZXRBbGVydFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vICEg65Ox66GdLCDsiJjsoJUsIOyCreygnCDrsoTtirxcclxuICAvLyDrk7HroZ0sIOyImOyglSwg7IKt7KCcIOuyhO2KvOydmCDsvZzrsLHtlajsiJhcclxuICBjb25zdCBoYW5kbGVTaG93Q29uZmlybSA9IChtYWluLCBzdWIsIGlkKSA9PiB7XHJcbiAgICAvLyDsubTrk5zrpbwg7ISg7YOd7ZWY7KeAIOyViuyVmOydhCDqsr3smrDsl5Ao7IiY7KCVLCDsgq3soJwg67KE7Yq87JeQIO2VnO2VtOyEnOunjClcclxuICAgIHNldE1haW5UZXh0KG1haW4pO1xyXG4gICAgc2V0U3ViVGV4dChzdWIpO1xyXG4gICAgc2V0U2VsZWN0ZWRCdG4oaWQpO1xyXG4gICAgLy8gc2VsZWN0ZWRCdG7sl5Ag7YG066at7ZWcIOuyhO2KvOydmCBpZOulvCBzdGF0ZeuhnCDsoIDsnqXtlZzri6QuXHJcbiAgfTtcclxuXHJcbiAgLy8gISBjb25maXJtIOywveydmCDrsoTtirxcclxuICAvLyBjb25maXJtIOywveydmCDtmZXsnbgg67KE7Yq87J2EIOuIjOuggOydhCDrlYxcclxuICBjb25zdCBoYW5kbGVDb25maXJtQnRuID0gKCkgPT4ge1xyXG4gICAgc2V0QWxlcnRUZXh0KGZhbHNlKTtcclxuICAgIC8vIOydtOyghOyXkCBhbGVydOywveydtCDrlrTsnYQg6rK97Jqw66W8IOuMgOu5hO2VtOyEnCDsg4Htg5zrpbwgZmFsc2XroZwg67CU6r+U7KSA64ukLlxyXG4gICAgYnV0dG9uTGlzdC5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gc2VsZWN0ZWRCdG4pIHtcclxuICAgICAgICBidXR0b24uY29uZmlybUNCKHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pO1xyXG4gICAgICAgIGhhbmRsZVNob3dBbGVydChgJHtidXR0b24uYnRuTmFtZX0g65CY7JeI7Iq164uI64ukLmApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBjb25maXJtIOywveydmCDst6jshowg67KE7Yq87J2EIOuIjOuggOydhCDrlYxcclxuICBjb25zdCBoYW5kbGVDbG9zZUJ0biA9ICgpID0+IHtcclxuICAgIC8vIHRleHTrk6Qg7LSI6riw7ZmUXHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICAvLyDshKDtg53tlZwg7Lm065OcIHN0YXRlIOy0iOq4sO2ZlFxyXG4gICAgc2V0U2VsZWN0ZWRDYXJkKCk7XHJcbiAgICAvLyBjb25maXJtIOywveydtCDri6vtnozri6QuXHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gYWxlcnQg7LC9IGhhbmRsaW5nXHJcbiAgY29uc3QgaGFuZGxlU2hvd0FsZXJ0ID0gKHRleHQpID0+IHtcclxuICAgIHNldEFsZXJ0VGV4dCh0ZXh0KTtcclxuICAgIHNldFNob3dBbGVydCh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRTaG93QWxlcnQoZmFsc2UpO1xyXG4gICAgICBzZXRBbGVydFRleHQobnVsbCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9O1xyXG5cclxuICAvLyAhIFNlYXJjaCBJbnB1dFxyXG4gIC8vIFNlYXJjaCBpbnB1dOydmCB2YWx1ZeulvCDsoIDsnqXtlbTrkaAuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoSW5wdXQgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldFNlYXJjaFZhbCh2YWx1ZSk7XHJcbiAgICAvLyBzZWFyY2hWYWwg7ZWY6rOgIHByb2R1Y3RMaXN0IOyViOyXkCDsnojripQgaXRlbS5uYW1l7J2EIOu5hOq1kFxyXG4gICAgLy8gZmlsdGVyIG1ldGhvZCDtmZzsmqlcclxuICAgIC8vIOqygOyDie2VnCDrrLjsnpDsl7TsnbQg7KG07J6s7ZWY64qU7KeAIO2VmOyngCDslYrripTsp4AgdHJ1ZeuhnCDrsJjtmZjqsJLsnbQg64KY7JisIOyImCDsnojrj4TroZ0oU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcygpIO2ZnOyaqSlcclxuICAgIC8qIHNldFByb2R1Y3RMaXN0KFxyXG4gICAgICBwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpdGVtLm5hbWUuaW5jbHVkZXModmFsdWUpKVxyXG4gICAgKTsgKi9cclxuICAgIC8vIOydtOugh+qyjCDqtaztmITtlZjrqbQg66y47KCc6rCAIOyeiOydjC4gcmVuZGVy7J2YIGJvZHkg67aA67aE7JeQ7IScIHByb2R1Y3RMaXN07JeQIGZpbHRlcuulvCDsoIHsmqkuXHJcblxyXG4gICAgLy8gYXJyYXkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaXRlbS5pbmRleE9mKCftirnsoJXsiqTtirjrp4EnKSA9PT0gaW5kZXgpXHJcbiAgfTtcclxuXHJcbiAgLy8g65Ox66Gd65CgIOyDge2SiOydmCDri6TsnYwgaWQg7KeA7KCVXHJcbiAgY29uc3QgbmV4dElkID0gdXNlUmVmKDYpO1xyXG5cclxuICAvLyAhIOyDge2SiOuqhSwg6rCA6rKpIOyeheugpe2VmOuKlCBpbnB1dFxyXG4gIC8vIOyDge2SiOuqhSwg6rCA6rKpIGlucHV07J2YIHZhbHVl66W8IGNyZWF0ZVByb2R1Y3RJbmZvIHN0YXRl7JeQIOyggOyepe2VtOuRoC5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdEluZm8oeyAuLi5wcm9kdWN0SW5mbywgW25hbWVdOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICAvLyAhIOuTseuhnSDquLDriqVcclxuICBjb25zdCBvbkNyZWF0ZSA9IChwcm9kdWN0SW5mbykgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgaWR4OiBuZXh0SWQuY3VycmVudCxcclxuICAgICAgbmFtZTogcHJvZHVjdEluZm8ubmFtZSxcclxuICAgICAgcHJpY2U6IHByb2R1Y3RJbmZvLnByaWNlLFxyXG4gICAgfTtcclxuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RMaXN0LmNvbmNhdChuZXdQcm9kdWN0KSk7XHJcbiAgICAvLyDrk7HroZ0g7ZuEIOuLpOydjCDsg4Htkogg7LaU6rCA66W8IOychO2VtCBpZCDqsIAgMeyUqSDspp3qsIBcclxuICAgIG5leHRJZC5jdXJyZW50ICs9IDE7XHJcbiAgICAvLyDstIjquLDtmZRcclxuICAgIHNldFByb2R1Y3RJbmZvKHsgbmFtZTogXCJcIiwgcHJpY2U6IFwiXCIgfSk7XHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIHNldFNlbGVjdGVkQnRuKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISDsubTrk5wg7ISg7YOdXHJcbiAgY29uc3QgaGFuZGxlSXNDbGlja2VkID0gKGlkeCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRDYXJkKGlkeCk7XHJcbiAgICAvLyDshKDtg53rkJwg7Lm065Oc7J2YIGlkIOulvCBzZWxlY3RlZENhcmQgc3RhdGXsl5Ag7KCA7J6lLlxyXG4gICAgaGFuZGxlU2hvd0FsZXJ0KFwi7ISg7YOd65CY7JeI7Iq164uI64ukLlwiKTtcclxuICB9O1xyXG5cclxuICAvLyAhIOyImOyglSDquLDriqVcclxuICBjb25zdCBvblJldmlzZSA9IChzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICAvLyDsiJjsoJUg66Gc7KeBXHJcbiAgICBzZXRQcm9kdWN0TGlzdChcclxuICAgICAgcHJvZHVjdExpc3QubWFwKChpdGVtKSA9PlxyXG4gICAgICAgIGl0ZW0uaWR4ID09PSBzZWxlY3RlZENhcmRcclxuICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgbmFtZTogcHJvZHVjdEluZm8ubmFtZSxcclxuICAgICAgICAgICAgICBwcmljZTogcHJvZHVjdEluZm8ucHJpY2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogaXRlbVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gICAgLy8g7LSI6riw7ZmUXHJcbiAgICBzZXRQcm9kdWN0SW5mbyh7IG5hbWU6IFwiXCIsIHByaWNlOiBcIlwiIH0pO1xyXG4gICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xyXG4gICAgc2V0TWFpblRleHQoXCJcIik7XHJcbiAgICBzZXRTdWJUZXh0KFwiXCIpO1xyXG4gICAgc2V0U2VsZWN0ZWRDYXJkKCk7XHJcbiAgICBzZXRTZWxlY3RlZEJ0bigpO1xyXG4gIH07XHJcblxyXG4gIC8vICEg7IKt7KCcIOq4sOuKpVxyXG4gIGNvbnN0IG9uRGVsZXRlID0gKHNlbGVjdGVkQ2FyZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCLsgq3soJzrkJjsl4jsirXri4jri6QuXCIpO1xyXG4gICAgc2V0UHJvZHVjdExpc3QocHJvZHVjdExpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkeCAhPT0gc2VsZWN0ZWRDYXJkKSk7XHJcbiAgICAvLyBpZHjsnZgg6rCS7J2AIG51bWJlcuydtOuvgOuhnCDrrLjsnpDsl7TsnbQg7JWE64uYLlxyXG4gICAgc2V0U2hvd0NvbmZpcm0oZmFsc2UpO1xyXG4gICAgc2V0TWFpblRleHQoXCJcIik7XHJcbiAgICBzZXRTdWJUZXh0KFwiXCIpO1xyXG4gICAgc2V0U2VsZWN0ZWRDYXJkKCk7XHJcbiAgICBzZXRTZWxlY3RlZEJ0bigpO1xyXG4gIH07XHJcblxyXG4gIC8vICEgY29uZmlybSDssL3snbQg7ZmU66m07JeQIOucrOuLpC5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG1haW5UZXh0KSB7XHJcbiAgICAgIHNldFNob3dDb25maXJtKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFttYWluVGV4dCwgc3ViVGV4dF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbi1oZWFkXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi6rKA7IOJXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgY2hhbmdlQ0I9e2hhbmRsZVNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZS1pbnB1dC1ncm91cFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLsg4HtkojrqoVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgY2hhbmdlQ0I9e2hhbmRsZUNoYW5nZUlucHV0fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0SW5mby5uYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIuqwgOqyqVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgY2hhbmdlQ0I9e2hhbmRsZUNoYW5nZUlucHV0fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0SW5mby5wcmljZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2J1dHRvbkxpc3QubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYnRuQ29sb3I9e2l0ZW0uYnRuQ29sb3J9XHJcbiAgICAgICAgICAgICAgICBjbGlja0NCPXsoKSA9PiBpdGVtLmNsaWNrQ0IoaXRlbS5pZCwgc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uYnRuTmFtZX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RMaXN0XHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLm5hbWUuaW5kZXhPZihzZWFyY2hWYWwpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2FyZD17c2VsZWN0ZWRDYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrQ0I9eygpID0+IGhhbmRsZUlzQ2xpY2tlZChpdGVtLmlkeCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPENvbmZpcm1cclxuICAgICAgICBzaG93PXtzaG93Q29uZmlybX1cclxuICAgICAgICBtYWluVGV4dD17bWFpblRleHR9XHJcbiAgICAgICAgc3ViVGV4dD17c3ViVGV4dH1cclxuICAgICAgICBvbkNsb3NlQ0I9e2hhbmRsZUNsb3NlQnRufVxyXG4gICAgICAgIG9uQ29uZmlybUNCPXtoYW5kbGVDb25maXJtQnRufVxyXG4gICAgICAvPlxyXG4gICAgICA8QWxlcnQgdGV4dD17YWxlcnRUZXh0fSBzaG93PXtzaG93QWxlcnR9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9