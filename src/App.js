import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Your count</h1>
      <p>{count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Minus</button>
      </div>
    </div>
  );
}

export default App;
