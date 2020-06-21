import React from "react";

const ButtonComp = ({ children, btnColor, clickCB }) => {
  return (
    <>
      <button className={"btn " + btnColor} onClick={() => clickCB()}>
        {children}
      </button>
    </>
  );
};

export default ButtonComp;
