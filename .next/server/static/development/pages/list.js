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
    clickCB: id => {
      handleShowConfirm("등록하시겠습니까?", "새로 추가됩니다.", id);
    },
    confirmCB: (selectedCard, productInfo) => {
      onCreate(productInfo);
    }
  }, {
    id: 2,
    btnName: "수 정",
    btnColor: "btn-black",
    clickCB: id => {
      handleShowConfirm("수정하시겠습니까?", "선택한 카드가 수정됩니다.", id);
    },
    confirmCB: (selectedCard, productInfo) => {
      onRevise(selectedCard, productInfo);
    }
  }, {
    id: 3,
    btnName: "삭 제",
    btnColor: "btn-black",
    clickCB: id => {
      handleShowConfirm("삭제하시겠습니까?", "영구 삭제됩니다.", id);
    },
    confirmCB: selectedCard => {
      onDelete(selectedCard);
    }
  }]); // ! 등록, 수정, 삭제 버튼
  // 등록, 수정, 삭제 버튼의 콜백함수

  const handleShowConfirm = (main, sub, id) => {
    setMainText(main);
    setSubText(sub);
    setSelectedBtn(id); // selectedBtn에 클릭한 버튼의 id를 state로 저장한다.
  }; // ! confirm 창의 버튼
  // confirm 창의 확인 버튼을 눌렀을 때


  const handleConfirmBtn = () => {
    buttonList.forEach(button => {
      if (button.id === selectedBtn) {
        button.confirmCB(selectedCard, productInfo);
      }
    });
  }; // confirm 창의 취소 버튼을 눌렀을 때


  const handleCloseBtn = () => {
    // text들 초기화
    setMainText("");
    setSubText(""); // 선택한 카드 state 초기화

    setSelectedCard(); // confirm 창이 닫힌다.

    setShowConfirm(false);
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
    alert("선택되었습니다."); // 선택된 카드의 id 를 selectedCard state에 저장.

    setSelectedCard(idx);
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
      lineNumber: 187,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "list-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "con-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
      lineNumber: 191,
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
      lineNumber: 198,
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
      lineNumber: 206,
      columnNumber: 13
    }
  }), buttonList.map(item => __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    btnColor: item.btnColor,
    clickCB: () => item.clickCB(item.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 15
    }
  }, item.btnName))), __jsx("div", {
    className: "con-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
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
      lineNumber: 227,
      columnNumber: 19
    }
  })))))), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
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
      lineNumber: 241,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL2NvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbGlzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlByb2R1Y3RDYXJkQ29tcCIsIm5hbWUiLCJwcmljZSIsImNsaWNrQ0IiLCJpZCIsInNlbGVjdGVkQ2FyZCIsIkJ1dHRvbkNvbXAiLCJjaGlsZHJlbiIsImJ0bkNvbG9yIiwiSW5wdXRDb21wIiwibGFiZWwiLCJ0eXBlIiwiY2hhbmdlQ0IiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsImlwdFZhbCIsInNldElwdFZhbCIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIkZvb3RlckNvbXAiLCJIZWFkZXJDb21wIiwiQ29uZmlybU1vZGFsQ29tcCIsInNob3ciLCJtYWluVGV4dCIsInN1YlRleHQiLCJvbkNsb3NlQ0IiLCJvbkNvbmZpcm1DQiIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJQcm9kdWN0TGlzdFBhZ2UiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0IiwiaWR4Iiwic2VhcmNoVmFsIiwic2V0U2VhcmNoVmFsIiwicHJvZHVjdEluZm8iLCJzZXRQcm9kdWN0SW5mbyIsInNldFNlbGVjdGVkQ2FyZCIsInNlbGVjdGVkQnRuIiwic2V0U2VsZWN0ZWRCdG4iLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwic2V0TWFpblRleHQiLCJzZXRTdWJUZXh0IiwiYnV0dG9uTGlzdCIsInNldEJ1dHRvbkxpc3QiLCJidG5OYW1lIiwiaGFuZGxlU2hvd0NvbmZpcm0iLCJjb25maXJtQ0IiLCJvbkNyZWF0ZSIsIm9uUmV2aXNlIiwib25EZWxldGUiLCJtYWluIiwic3ViIiwiaGFuZGxlQ29uZmlybUJ0biIsImZvckVhY2giLCJidXR0b24iLCJoYW5kbGVDbG9zZUJ0biIsImhhbmRsZVNlYXJjaElucHV0IiwibmV4dElkIiwidXNlUmVmIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJuZXdQcm9kdWN0IiwiY3VycmVudCIsImNvbmNhdCIsImhhbmRsZUlzQ2xpY2tlZCIsImFsZXJ0IiwibWFwIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJpbmRleE9mIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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QUFJLEVBQUVRLFdBRFI7QUFFRSxZQUFRLEVBQUVwQixRQUZaO0FBR0UsV0FBTyxFQUFFQyxPQUhYO0FBSUUsYUFBUyxFQUFFb0MsY0FKYjtBQUtFLGVBQVcsRUFBRUgsZ0JBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZERixDQURGO0FBaUVELENBalBEOztBQW1QZXpCLDhFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1BBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdENhcmRDb21wID0gKHsgbmFtZSwgcHJpY2UsIGNsaWNrQ0IsIGlkLCBzZWxlY3RlZENhcmQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17XCJwcm9kdWN0LWNhcmRcIiArIChpZCA9PT0gc2VsZWN0ZWRDYXJkID8gXCIgY2xpY2tlZFwiIDogXCJcIil9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrQ0IoKX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVmYXVsdC5zdmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57bmFtZX08L3A+XHJcbiAgICAgICAgPHA+e3ByaWNlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmRDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBCdXR0b25Db21wID0gKHsgY2hpbGRyZW4sIGJ0bkNvbG9yLCBjbGlja0NCIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIFwiICsgYnRuQ29sb3J9IG9uQ2xpY2s9eygpID0+IGNsaWNrQ0IoKX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Db21wO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbnB1dENvbXAgPSAoeyBsYWJlbCwgdHlwZSwgbmFtZSwgY2hhbmdlQ0IsIGNsYXNzTmFtZSwgdmFsdWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtpcHRWYWwsIHNldElwdFZhbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0SXB0VmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNoYW5nZUNCKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsPntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb290ZXJDb21wID0gKCkgPT4ge1xyXG4gIHJldHVybiA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPuyXrOq4sCDtkbjthLDsnoQuPC9mb290ZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyQ29tcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGVhZGVyQ29tcCA9ICgpID0+IHtcclxuICByZXR1cm4gPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj7sl6zquLAg7Zek642U7J6ELjwvaGVhZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNvbXA7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29uZmlybU1vZGFsQ29tcCA9ICh7XHJcbiAgc2hvdyxcclxuICBtYWluVGV4dCxcclxuICBzdWJUZXh0LFxyXG4gIG9uQ2xvc2VDQixcclxuICBvbkNvbmZpcm1DQixcclxufSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2hvdykge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjsgLy8g7Iqk7YGs66GkIOyViOuQqC5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjsgLy8g7Iqk7YGs66Gk65CoLlxyXG4gICAgfVxyXG4gIH0sIFtzaG93XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17XCJtb2RhbC13cmFwcGVyXCIgKyAoc2hvdyA/IFwiIG9uXCIgOiBcIiBvZmZcIil9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncm91cFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFpblwiPnttYWluVGV4dH08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJcIj57c3ViVGV4dH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1jb25maXJtXCIgb25DbGljaz17KCkgPT4gb25Db25maXJtQ0IoKX0+XHJcbiAgICAgICAgICAgIO2ZleyduFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLWNhbmNlbFwiIG9uQ2xpY2s9eygpID0+IG9uQ2xvc2VDQigpfT5cclxuICAgICAgICAgICAg7Leo7IaMXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maXJtTW9kYWxDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9mb290ZXJcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vaW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtL2J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkL3Byb2R1Y3RcIjtcclxuaW1wb3J0IENvbmZpcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWwvY29uZmlybVwiO1xyXG5cclxuY29uc3QgUHJvZHVjdExpc3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBpZHg6IDEsIG5hbWU6IFwi7IOI7Jqw6rmhXCIsIHByaWNlOiBcIjE1MDBcIiB9LFxyXG4gICAgeyBpZHg6IDIsIG5hbWU6IFwi6rOg6rWs66eI6rmhXCIsIHByaWNlOiBcIjIwMDBcIiB9LFxyXG4gICAgeyBpZHg6IDMsIG5hbWU6IFwi6rCQ7J6Q6rmhXCIsIHByaWNlOiBcIjE4MDBcIiB9LFxyXG4gICAgeyBpZHg6IDQsIG5hbWU6IFwi64uk7J207KCc7Iqk7YuwXCIsIHByaWNlOiBcIjEwMDAwXCIgfSxcclxuICAgIHsgaWR4OiA1LCBuYW1lOiBcIuy0iOy9lO2MjOydtFwiLCBwcmljZTogXCI1MDAwXCIgfSxcclxuICBdKTtcclxuICBjb25zdCBbc2VhcmNoVmFsLCBzZXRTZWFyY2hWYWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3RJbmZvLCBzZXRQcm9kdWN0SW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcHJpY2U6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2FyZCwgc2V0U2VsZWN0ZWRDYXJkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQnRuLCBzZXRTZWxlY3RlZEJ0bl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzaG93Q29uZmlybSwgc2V0U2hvd0NvbmZpcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttYWluVGV4dCwgc2V0TWFpblRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1YlRleHQsIHNldFN1YlRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2J1dHRvbkxpc3QsIHNldEJ1dHRvbkxpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgYnRuTmFtZTogXCLrk7Eg66GdXCIsXHJcbiAgICAgIGJ0bkNvbG9yOiBcImJ0bi1ibGFja1wiLFxyXG4gICAgICBjbGlja0NCOiAoaWQpID0+IHtcclxuICAgICAgICBoYW5kbGVTaG93Q29uZmlybShcIuuTseuhne2VmOyLnOqyoOyKteuLiOq5jD9cIiwgXCLsg4jroZwg7LaU6rCA65Cp64uI64ukLlwiLCBpZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpcm1DQjogKHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgICAgICBvbkNyZWF0ZShwcm9kdWN0SW5mbyk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgYnRuTmFtZTogXCLsiJgg7KCVXCIsXHJcbiAgICAgIGJ0bkNvbG9yOiBcImJ0bi1ibGFja1wiLFxyXG4gICAgICBjbGlja0NCOiAoaWQpID0+IHtcclxuICAgICAgICBoYW5kbGVTaG93Q29uZmlybShcIuyImOygle2VmOyLnOqyoOyKteuLiOq5jD9cIiwgXCLshKDtg53tlZwg7Lm065Oc6rCAIOyImOygleuQqeuLiOuLpC5cIiwgaWQpO1xyXG4gICAgICB9LFxyXG4gICAgICBjb25maXJtQ0I6IChzZWxlY3RlZENhcmQsIHByb2R1Y3RJbmZvKSA9PiB7XHJcbiAgICAgICAgb25SZXZpc2Uoc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbyk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgYnRuTmFtZTogXCLsgq0g7KCcXCIsXHJcbiAgICAgIGJ0bkNvbG9yOiBcImJ0bi1ibGFja1wiLFxyXG4gICAgICBjbGlja0NCOiAoaWQpID0+IHtcclxuICAgICAgICBoYW5kbGVTaG93Q29uZmlybShcIuyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cIiwgXCLsmIHqtawg7IKt7KCc65Cp64uI64ukLlwiLCBpZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpcm1DQjogKHNlbGVjdGVkQ2FyZCkgPT4ge1xyXG4gICAgICAgIG9uRGVsZXRlKHNlbGVjdGVkQ2FyZCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICAvLyAhIOuTseuhnSwg7IiY7KCVLCDsgq3soJwg67KE7Yq8XHJcbiAgLy8g65Ox66GdLCDsiJjsoJUsIOyCreygnCDrsoTtirzsnZgg7L2c67Cx7ZWo7IiYXHJcbiAgY29uc3QgaGFuZGxlU2hvd0NvbmZpcm0gPSAobWFpbiwgc3ViLCBpZCkgPT4ge1xyXG4gICAgc2V0TWFpblRleHQobWFpbik7XHJcbiAgICBzZXRTdWJUZXh0KHN1Yik7XHJcbiAgICBzZXRTZWxlY3RlZEJ0bihpZCk7XHJcbiAgICAvLyBzZWxlY3RlZEJ0buyXkCDtgbTrpq3tlZwg67KE7Yq87J2YIGlk66W8IHN0YXRl66GcIOyggOyepe2VnOuLpC5cclxuICB9O1xyXG5cclxuICAvLyAhIGNvbmZpcm0g7LC97J2YIOuyhO2KvFxyXG4gIC8vIGNvbmZpcm0g7LC97J2YIO2ZleyduCDrsoTtirzsnYQg64iM66CA7J2EIOuVjFxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1CdG4gPSAoKSA9PiB7XHJcbiAgICBidXR0b25MaXN0LmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICBpZiAoYnV0dG9uLmlkID09PSBzZWxlY3RlZEJ0bikge1xyXG4gICAgICAgIGJ1dHRvbi5jb25maXJtQ0Ioc2VsZWN0ZWRDYXJkLCBwcm9kdWN0SW5mbyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbmZpcm0g7LC97J2YIOy3qOyGjCDrsoTtirzsnYQg64iM66CA7J2EIOuVjFxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQnRuID0gKCkgPT4ge1xyXG4gICAgLy8gdGV4dOuTpCDstIjquLDtmZRcclxuICAgIHNldE1haW5UZXh0KFwiXCIpO1xyXG4gICAgc2V0U3ViVGV4dChcIlwiKTtcclxuICAgIC8vIOyEoO2Dne2VnCDsubTrk5wgc3RhdGUg7LSI6riw7ZmUXHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIC8vIGNvbmZpcm0g7LC97J20IOuLq+2ejOuLpC5cclxuICAgIHNldFNob3dDb25maXJtKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICAvLyAhIFNlYXJjaCBJbnB1dFxyXG4gIC8vIFNlYXJjaCBpbnB1dOydmCB2YWx1ZeulvCDsoIDsnqXtlbTrkaAuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoSW5wdXQgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldFNlYXJjaFZhbCh2YWx1ZSk7XHJcbiAgICAvLyBzZWFyY2hWYWwg7ZWY6rOgIHByb2R1Y3RMaXN0IOyViOyXkCDsnojripQgaXRlbS5uYW1l7J2EIOu5hOq1kFxyXG4gICAgLy8gZmlsdGVyIG1ldGhvZCDtmZzsmqlcclxuICAgIC8vIOqygOyDie2VnCDrrLjsnpDsl7TsnbQg7KG07J6s7ZWY64qU7KeAIO2VmOyngCDslYrripTsp4AgdHJ1ZeuhnCDrsJjtmZjqsJLsnbQg64KY7JisIOyImCDsnojrj4TroZ0oU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcygpIO2ZnOyaqSlcclxuICAgIC8qIHNldFByb2R1Y3RMaXN0KFxyXG4gICAgICBwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpdGVtLm5hbWUuaW5jbHVkZXModmFsdWUpKVxyXG4gICAgKTsgKi9cclxuICAgIC8vIOydtOugh+qyjCDqtaztmITtlZjrqbQg66y47KCc6rCAIOyeiOydjC4gcmVuZGVy7J2YIGJvZHkg67aA67aE7JeQ7IScIHByb2R1Y3RMaXN07JeQIGZpbHRlcuulvCDsoIHsmqkuXHJcblxyXG4gICAgLy8gYXJyYXkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaXRlbS5pbmRleE9mKCftirnsoJXsiqTtirjrp4EnKSA9PT0gaW5kZXgpXHJcbiAgfTtcclxuXHJcbiAgLy8g65Ox66Gd65CgIOyDge2SiOydmCDri6TsnYwgaWQg7KeA7KCVXHJcbiAgY29uc3QgbmV4dElkID0gdXNlUmVmKDYpO1xyXG5cclxuICAvLyAhIOyDge2SiOuqhSwg6rCA6rKpIOyeheugpe2VmOuKlCBpbnB1dFxyXG4gIC8vIOyDge2SiOuqhSwg6rCA6rKpIGlucHV07J2YIHZhbHVl66W8IGNyZWF0ZVByb2R1Y3RJbmZvIHN0YXRl7JeQIOyggOyepe2VtOuRoC5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdEluZm8oeyAuLi5wcm9kdWN0SW5mbywgW25hbWVdOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICAvLyAhIOuTseuhnSDquLDriqVcclxuICBjb25zdCBvbkNyZWF0ZSA9IChwcm9kdWN0SW5mbykgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgaWR4OiBuZXh0SWQuY3VycmVudCxcclxuICAgICAgbmFtZTogcHJvZHVjdEluZm8ubmFtZSxcclxuICAgICAgcHJpY2U6IHByb2R1Y3RJbmZvLnByaWNlLFxyXG4gICAgfTtcclxuICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RMaXN0LmNvbmNhdChuZXdQcm9kdWN0KSk7XHJcbiAgICAvLyDrk7HroZ0g7ZuEIOuLpOydjCDsg4Htkogg7LaU6rCA66W8IOychO2VtCBpZCDqsIAgMeyUqSDspp3qsIBcclxuICAgIG5leHRJZC5jdXJyZW50ICs9IDE7XHJcbiAgICAvLyDstIjquLDtmZRcclxuICAgIHNldFByb2R1Y3RJbmZvKHsgbmFtZTogXCJcIiwgcHJpY2U6IFwiXCIgfSk7XHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIHNldFNlbGVjdGVkQnRuKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISDsubTrk5wg7ISg7YOdXHJcbiAgY29uc3QgaGFuZGxlSXNDbGlja2VkID0gKGlkeCkgPT4ge1xyXG4gICAgYWxlcnQoXCLshKDtg53rkJjsl4jsirXri4jri6QuXCIpO1xyXG4gICAgLy8g7ISg7YOd65CcIOy5tOuTnOydmCBpZCDrpbwgc2VsZWN0ZWRDYXJkIHN0YXRl7JeQIOyggOyepS5cclxuICAgIHNldFNlbGVjdGVkQ2FyZChpZHgpO1xyXG4gIH07XHJcblxyXG4gIC8vICEg7IiY7KCVIOq4sOuKpVxyXG4gIGNvbnN0IG9uUmV2aXNlID0gKHNlbGVjdGVkQ2FyZCwgcHJvZHVjdEluZm8pID0+IHtcclxuICAgIC8vIOyImOyglSDroZzsp4FcclxuICAgIHNldFByb2R1Y3RMaXN0KFxyXG4gICAgICBwcm9kdWN0TGlzdC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgaXRlbS5pZHggPT09IHNlbGVjdGVkQ2FyZFxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0SW5mby5uYW1lLFxyXG4gICAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0SW5mby5wcmljZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgOiBpdGVtXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICAvLyDstIjquLDtmZRcclxuICAgIHNldFByb2R1Y3RJbmZvKHsgbmFtZTogXCJcIiwgcHJpY2U6IFwiXCIgfSk7XHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIHNldFNlbGVjdGVkQnRuKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISDsgq3soJwg6riw64qlXHJcbiAgY29uc3Qgb25EZWxldGUgPSAoc2VsZWN0ZWRDYXJkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIuyCreygnOuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICBzZXRQcm9kdWN0TGlzdChwcm9kdWN0TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWR4ICE9PSBzZWxlY3RlZENhcmQpKTtcclxuICAgIC8vIGlkeOydmCDqsJLsnYAgbnVtYmVy7J2066+A66GcIOusuOyekOyXtOydtCDslYTri5guXHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSk7XHJcbiAgICBzZXRNYWluVGV4dChcIlwiKTtcclxuICAgIHNldFN1YlRleHQoXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZENhcmQoKTtcclxuICAgIHNldFNlbGVjdGVkQnRuKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gISBjb25maXJtIOywveydtCDtmZTrqbTsl5Ag65ys64ukLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWFpblRleHQpIHtcclxuICAgICAgc2V0U2hvd0NvbmZpcm0odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW21haW5UZXh0LCBzdWJUZXh0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uLWhlYWRcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLqsoDsg4lcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lLWlucHV0LWdyb3VwXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuyDge2SiOuqhVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RJbmZvLm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi6rCA6rKpXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICBjaGFuZ2VDQj17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RJbmZvLnByaWNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7YnV0dG9uTGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBidG5Db2xvcj17aXRlbS5idG5Db2xvcn1cclxuICAgICAgICAgICAgICAgIGNsaWNrQ0I9eygpID0+IGl0ZW0uY2xpY2tDQihpdGVtLmlkKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5idG5OYW1lfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb24tYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICB7cHJvZHVjdExpc3RcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubmFtZS5pbmRleE9mKHNlYXJjaFZhbCkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkeH1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXJkPXtzZWxlY3RlZENhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDQj17KCkgPT4gaGFuZGxlSXNDbGlja2VkKGl0ZW0uaWR4KX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8Q29uZmlybVxyXG4gICAgICAgIHNob3c9e3Nob3dDb25maXJtfVxyXG4gICAgICAgIG1haW5UZXh0PXttYWluVGV4dH1cclxuICAgICAgICBzdWJUZXh0PXtzdWJUZXh0fVxyXG4gICAgICAgIG9uQ2xvc2VDQj17aGFuZGxlQ2xvc2VCdG59XHJcbiAgICAgICAgb25Db25maXJtQ0I9e2hhbmRsZUNvbmZpcm1CdG59XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9