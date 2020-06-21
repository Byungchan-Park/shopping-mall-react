import React, { useState, useRef } from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Input from "../components/form/input";
import Button from "../components/form/button";
import Card from "../components/card/product";

const ProductListPage = () => {
  const [productList, setProductList] = useState([
    { idx: 1, name: "새우깡", price: "1500" },
    { idx: 2, name: "고구마깡", price: "2000" },
    { idx: 3, name: "감자깡", price: "1800" },
    { idx: 4, name: "다이제스티", price: "10000" },
    { idx: 5, name: "초코파이", price: "5000" },
  ]);
  const [searchVal, setSearchVal] = useState("");
  const [createProductInfo, setCreateProductInfo] = useState({
    name: "",
    price: "",
  });
  const [selectedCard, setSelectedCard] = useState();

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

  const nextId = useRef(6);

  const handleChangeInput = (name, value) => {
    setCreateProductInfo({ ...createProductInfo, [name]: value });
  };

  /* name, price 에 입력 후 등록 기능 */
  const onCreate = () => {
    const newProduct = {
      idx: nextId.current,
      name: createProductInfo.name,
      price: createProductInfo.price,
    };
    setProductList(productList.concat(newProduct));
    nextId.current += 1;
    // 등록 후 input 창들 초기화
    setCreateProductInfo({ name: "", price: "" });
  };

  // 카드 선택
  const handleIsClicked = (idx) => {
    alert("선택되었습니다.");
    setSelectedCard(idx);
  };

  /* 카드를 클릭하고 클릭한 카드의 보더가 바뀌고 상품명, 가격 창에 수정할 사항 입력 후 다시 수정 버튼 누르면 수정이 된다. */
  const onRevise = () => {
    setProductList(
      productList.map((item) => {
        item.idx === selectedCard
          ? {
              ...item,
              name: createProductInfo.name,
              price: createProductInfo.price,
            }
          : item;
      })
    );
    // productList를 그대로 가져와서, idx = 5인 item에 대해서 name만 변경한다.
    // 그게 아닐 경우는 그대로 둔다.
  };

  /* 내가 클릭한 카드를 삭제하는 로직을 짜야 한다. */
  const onDelete = () => {
    setProductList(productList.filter((item) => item.idx !== selectedCard));
    // idx의 값은 number이므로 문자열이 아님.
  };
  //

  return (
    <>
      <Header />
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
              value={createProductInfo.name}
            />
            <Input
              label="가격"
              type="text"
              name="price"
              changeCB={handleChangeInput}
              value={createProductInfo.price}
            />
            <Button btnColor="btn-black" clickCB={onCreate}>
              등 록
            </Button>
            <Button btnColor="btn-black" clickCB={onRevise}>
              수 정
            </Button>
            <Button btnColor="btn-black" clickCB={onDelete}>
              삭 제
            </Button>
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
                    clickCB={() => handleIsClicked(item.idx)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductListPage;
