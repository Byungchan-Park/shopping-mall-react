import React, { useState, useRef, useEffect } from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Input from "../components/form/input";
import Button from "../components/form/button";
import Card from "../components/card/product";
import Confirm from "../components/modal/confirm";
import Alert from "../components/modal/alert";

const ProductListPage = () => {
  const [productList, setProductList] = useState([
    { idx: 1, name: "새우깡", price: "1500" },
    { idx: 2, name: "고구마깡", price: "2000" },
    { idx: 3, name: "감자깡", price: "1800" },
    { idx: 4, name: "다이제스티", price: "10000" },
    { idx: 5, name: "초코파이", price: "5000" },
  ]);

  const [searchVal, setSearchVal] = useState("");
  // 검색창
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
  });
  // 상품 등록 및 수정창
  const [selectedCard, setSelectedCard] = useState();
  const [selectedBtn, setSelectedBtn] = useState();
  const [showConfirm, setShowConfirm] = useState(false);
  const [mainText, setMainText] = useState("");
  const [subText, setSubText] = useState("");
  const [buttonList, setButtonList] = useState([
    {
      id: 1,
      btnName: "등 록",
      btnColor: "btn-black",
      clickCB: (id, selectedCard, productInfo) => {
        if (productInfo.name === "") {
          setShowConfirm(false);
          return handleShowAlert(
            `상품명이 입력되지 않았습니다.
             입력해주세요.`
          );
        } else if (productInfo.price === "") {
          setShowConfirm(false);
          return handleShowAlert(
            `가격이 입력되지 않았습니다.
             입력해주세요.`
          );
        } else if (productInfo.name === "" && productInfo.price === "") {
          setShowConfirm(false);
          return handleShowAlert(
            `상품명과 가격이 입력되지 않았습니다.
             입력해주세요.`
          );
        }
        handleShowConfirm("등록하시겠습니까?", "새로 추가됩니다.", id);
      },
      confirmCB: (productList, selectedCard, productInfo) => {
        onCreate(productList, selectedCard, productInfo);
        handleShowAlert("등록되었습니다.");
      },
    },
    {
      id: 2,
      btnName: "수 정",
      btnColor: "btn-black",
      clickCB: (id, selectedCard) => {
        console.log(selectedCard);
        if (!selectedCard) {
          return handleShowAlert("카드를 선택해주세요.");
        }
        // 카드 클릭하지 않을 시에 alert창 띄운다.
        handleShowConfirm("수정하시겠습니까?", "선택한 카드가 수정됩니다.", id);
      },
      confirmCB: (productList, selectedCard, productInfo) => {
        if (productInfo.name === "") {
          setShowConfirm(false);
          return handleShowAlert(
            `상품명이 입력되지 않았습니다.
             입력해주세요.`
          );
        } else if (productInfo.price === "") {
          setShowConfirm(false);
          return handleShowAlert(
            `가격이 입력되지 않았습니다.
             입력해주세요.`
          );
        } else if (productInfo.name === "" && productInfo.price === "") {
          setShowConfirm(false);
          return handleShowAlert(
            `상품명과 가격이 입력되지 않았습니다.
             입력해주세요.`
          );
        }
        onRevise(productList, selectedCard, productInfo);
        handleShowAlert("수정되었습니다.");
      },
    },
    {
      id: 3,
      btnName: "삭 제",
      btnColor: "btn-black",
      clickCB: (id, selectedCard) => {
        console.log(selectedCard);
        if (!selectedCard) {
          return handleShowAlert("카드를 선택해주세요.");
        }
        // 카드 클릭하지 않을 시에 alert창 띄운다.
        handleShowConfirm("삭제하시겠습니까?", "영구 삭제됩니다.", id);
      },
      confirmCB: (productList, selectedCard, productInfo) => {
        onDelete(productList, selectedCard, productInfo);
        handleShowAlert("삭제되었습니다.");
      },
    },
  ]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");

  // ! 등록, 수정, 삭제 버튼
  // 등록, 수정, 삭제 버튼의 콜백함수
  const handleShowConfirm = (main, sub, id) => {
    // 카드를 선택하지 않았을 경우에(수정, 삭제 버튼에 한해서만)
    setMainText(main);
    setSubText(sub);
    setSelectedBtn(id);
    // selectedBtn에 클릭한 버튼의 id를 state로 저장한다.
  };

  // ! confirm 창의 버튼
  // confirm 창의 확인 버튼을 눌렀을 때
  const handleConfirmBtn = () => {
    setAlertText(false);
    // 이전에 alert창이 떴을 경우를 대비해서 상태를 false로 바꿔준다.
    buttonList.forEach((button) => {
      if (button.id === selectedBtn) {
        button.confirmCB(productList, selectedCard, productInfo);
      }
    });
  };

  // confirm 창의 취소 버튼을 눌렀을 때
  const handleCloseBtn = () => {
    // text들 초기화
    setMainText("");
    setSubText("");
    // 선택한 카드 state 초기화
    setSelectedCard();
    // confirm 창이 닫힌다.
    setShowConfirm(false);
  };

  // alert 창 handling
  const handleShowAlert = (text) => {
    setAlertText(text);
    setShowAlert(true);
    setTimeout(function () {
      setShowAlert(false);
      setAlertText(null);
    }, 1000);
  };

  // ! Search Input
  // Search input의 value를 저장해둠.
  const handleSearchInput = (name, value) => {
    setSearchVal(value);
    // searchVal 하고 productList 안에 있는 item.name을 비교
    // filter method 활용
    // 검색한 문자열이 존재하는지 하지 않는지 true로 반환값이 나올 수 있도록(String.prototype.includes() 활용)
    /* setProductList(
      productList.filter((item, index) => item.name.includes(value))
    ); */
    // 이렇게 구현하면 문제가 있음. render의 body 부분에서 productList에 filter를 적용.

    // array.filter((item, index) => item.indexOf('특정스트링') === index)
  };

  // 등록될 상품의 다음 id 지정
  const nextId = useRef(6);

  // ! 상품명, 가격 입력하는 input
  // 상품명, 가격 input의 value를 createProductInfo state에 저장해둠.
  const handleChangeInput = (name, value) => {
    setProductInfo({ ...productInfo, [name]: value });
  };

  // ! 등록 기능
  const onCreate = (productList, selectedCard, productInfo) => {
    console.log(productList);
    const newProduct = {
      idx: nextId.current,
      name: productInfo.name,
      price: productInfo.price,
    };
    setProductList(productList.concat(newProduct));
    console.log(productList);
    // 등록 후 다음 상품 추가를 위해 id 가 1씩 증가
    nextId.current += 1;
    // 초기화
    setProductInfo({ name: "", price: "" });
    setShowConfirm(false);
    setMainText("");
    setSubText("");
    setSelectedCard();
    setSelectedBtn();
  };

  // ! 카드 선택
  const handleIsClicked = (idx) => {
    setSelectedCard(idx);
    // 선택된 카드의 id 를 selectedCard state에 저장.
    handleShowAlert("선택되었습니다.");
  };

  // ! 수정 기능
  const onRevise = (productList, selectedCard, productInfo) => {
    // 수정 로직
    setProductList(
      productList.map((item) =>
        item.idx === selectedCard
          ? {
              ...item,
              name: productInfo.name,
              price: productInfo.price,
            }
          : item
      )
    );
    // 초기화
    setProductInfo({ name: "", price: "" });
    setShowConfirm(false);
    setMainText("");
    setSubText("");
    setSelectedCard();
    setSelectedBtn();
  };

  // ! 삭제 기능
  const onDelete = (productList, selectedCard, productInfo) => {
    console.log("삭제되었습니다.");
    setProductList(productList.filter((item) => item.idx !== selectedCard));
    // idx의 값은 number이므로 문자열이 아님.
    setShowConfirm(false);
    setMainText("");
    setSubText("");
    setSelectedCard();
    setSelectedBtn();
  };

  // ! confirm 창이 화면에 뜬다.
  useEffect(() => {
    if (mainText) {
      setShowConfirm(true);
    }
  }, [mainText, subText]);

  useEffect(() => {
    console.log(productList);
  }, [productList]);

  return (
    <>
      <div className="list-wrapper">
        <div className="container">
          <div className="con-head">
            <Input
              label="검색"
              type="text"
              name="search"
              changeCB={handleSearchInput}
              value={searchVal}
            />
            <Input
              className="product-name-input-group"
              label="상품명"
              type="text"
              name="name"
              changeCB={handleChangeInput}
              value={productInfo.name}
            />
            <Input
              label="가격"
              type="text"
              name="price"
              changeCB={handleChangeInput}
              value={productInfo.price}
            />
            {buttonList.map((item) => (
              <Button
                btnColor={item.btnColor}
                clickCB={() => item.clickCB(item.id, selectedCard, productInfo)}
              >
                {item.btnName}
              </Button>
            ))}
          </div>
          <div className="con-body">
            <div className="list">
              {productList
                .filter((item) => item.name.indexOf(searchVal) !== -1)
                .map((item, index) => (
                  <Card
                    key={index}
                    id={item.idx}
                    name={item.name}
                    price={item.price}
                    selectedCard={selectedCard}
                    clickCB={() => handleIsClicked(item.idx)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Confirm
        show={showConfirm}
        mainText={mainText}
        subText={subText}
        onCloseCB={handleCloseBtn}
        onConfirmCB={() => handleConfirmBtn(productList)}
      />
      <Alert text={alertText} show={showAlert} />
    </>
  );
};

export default ProductListPage;
