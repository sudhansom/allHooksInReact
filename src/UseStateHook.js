import React, { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);
  return (
    <div>
      <h1>Your count</h1>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
            setShowText(!showText);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
            setShowText(!showText);
          }}
        >
          Minus
        </button>
        {showText ? (
          <p>This is an even number</p>
        ) : (
          <p>This is an odd number</p>
        )}
      </div>
    </div>
  );
}

export default UseStateHook;
