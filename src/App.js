import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import UseEffectHook from "./UseEffectHook";
import UseReducerHook from "./UseReducerHook";
import UseStateHook from "./UseStateHook";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <nav className="Navbar">
        <Link to="/state">State</Link>
        <Link to="/reducer">Reducer</Link>
        <Link to="/effect">Effect</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/effect" element={<UseEffectHook />}></Route>
        <Route path="/state" element={<UseStateHook />}></Route>
        <Route path="/reducer" element={<UseReducerHook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
