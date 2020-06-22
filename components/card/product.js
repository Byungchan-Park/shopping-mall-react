import React from "react";

const ProductCardComp = ({ name, price, clickCB, id, selectedCard }) => {
  return (
    <div
      className={"product-card" + (id === selectedCard ? " clicked" : "")}
      onClick={() => clickCB()}
    >
      <div className="card-head">
        <img src="../../static/images/default.svg" />
      </div>
      <div className="card-body">
        <p className="product-name">{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCardComp;
