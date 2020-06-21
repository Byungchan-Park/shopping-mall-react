import { useState, useEffect } from "react";

const InputComp = ({ label, type, name, changeCB, className, value }) => {
  const [iptVal, setIptVal] = useState("");
  const handleChange = (e) => {
    setIptVal(e.target.value);
    changeCB(e.target.name, e.target.value);
  };
  return (
    <>
      <div className="input-group">
        <label>{label}</label>
        <input
          className={className}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default InputComp;
