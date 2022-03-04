import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Your count</h1>
      <p>{count}</p>
    </div>
  );
}

export default App;
