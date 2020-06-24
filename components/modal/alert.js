import React, { useEffect } from "react";

const AlertModalComp = ({ show, text }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);
  return (
    <div className={"alert-wrapper" + (show ? " on" : " off")}>
      <div className="container">
        <div className="text-group">{text}</div>
      </div>
    </div>
  );
};

export default AlertModalComp;
