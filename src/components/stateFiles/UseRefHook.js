import React, { useState } from "react";
import "./useRef.css";

function UseRefHook() {
  const [isCircle, setIsCircle] = useState(true);
  return (
    <div
      className={isCircle ? "circle" : "rectangle"}
      onClick={() => {
        setIsCircle(!isCircle);
      }}
    ></div>
  );
}

export default UseRefHook;
