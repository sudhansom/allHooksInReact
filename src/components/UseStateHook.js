import React, { useState } from "react";
import UseStateLogic from "./UseStateLogic";

function UseStateHook() {
  const [count, setCount, showText, setShowText] = UseStateLogic();
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
