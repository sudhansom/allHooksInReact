import { Routes, Route } from "react-router-dom";

import "./App.css";
import UseEffectHook from "./UseEffectHook";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UseEffectHook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
