import React, { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Your count</h1>
      <p>{count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Minus</button>
      </div>
    </div>
  );
}

export default UseStateHook;
