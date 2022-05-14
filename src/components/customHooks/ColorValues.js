import React, { useState } from "react";
import { useCustomHook } from "./useCustomHook";
const useColorValues = () => {
  const [textProps, resetText] = useCustomHook("");
  const [colorProps, setColor] = useCustomHook("#119988");

  console.log("textProps:---", textProps);
  const handleClick = () => {
    alert(`${textProps.value} value is ${colorProps.value}`);
    resetText("");
    setColor("#119988");
  };
  return (
    <div>
      <input type={"text"} {...textProps} />
      <input {...colorProps} type="color" />
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default useColorValues;
