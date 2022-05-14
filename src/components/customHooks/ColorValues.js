import React, { useState } from "react";

const useColorValues = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#119988");
  const handleClick = () => {
    alert(`${text} value is ${color}`);
  };
  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
        type="color"
      />
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default useColorValues;
