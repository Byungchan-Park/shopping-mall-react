import { useEffect } from "react";

const ConfirmModalComp = ({
  show,
  mainText,
  subText,
  onCloseCB,
  onConfirmCB,
}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; // 스크롤 안됨.
    } else {
      document.body.style.overflow = "auto"; // 스크롤됨.
    }
  }, [show]);
  return (
    <section className={"modal-wrapper" + (show ? " on" : " off")}>
      <div className="container">
        <div className="text-group">
          <p className="main">{mainText}</p>
          <p className="sub">{subText}</p>
        </div>
        <div className="btn-group">
          <a className="btn-confirm" onClick={() => onConfirmCB()}>
            확인
          </a>
          <a className="btn-cancel" onClick={() => onCloseCB()}>
            취소
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConfirmModalComp;
