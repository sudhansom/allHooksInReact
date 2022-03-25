import React, { useState, useRef } from "react";
import "./useRef.css";

function UseRefHook() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const clearText = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <input
        type="text"
        onChange={() => {
          setName(name);
        }}
        ref={inputRef}
      ></input>
      <button onClick={clearText}>Submit</button>
    </div>
  );
}

export default UseRefHook;
