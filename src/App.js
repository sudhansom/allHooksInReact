import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import UseEffectHook from "./components/UseEffectHook";
import UseReducerHook from "./components/UseReducerHook";
import UseStateHook from "./components/stateFiles/UseStateHook";
import Home from "./Home";
import UseRefHook from "./components/stateFiles/UseRefHook";
import ColorValues from "./components/customHooks/ColorValues";

import ImperativeHandle from "./components/imperativeHandle/ImperativeHandle";
import MainPage from "./components/useContextHook/MainPage";
import MainPageUseCallBack from "./components/useCallBackFunction/MainPage";

function App() {
  return (
    <div className="App">
      <nav className="Navbar">
        <Link to="/state">State</Link>
        <Link to="/reducer">Reducer</Link>
        <Link to="/effect">Effect</Link>
        <Link to="/imperative">ImperativeHandle</Link>
        <Link to="/useContext">useContext</Link>
        <Link to="/usecallback">useCallBack</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/effect" element={<UseEffectHook />}></Route>
        <Route path="/state" element={<UseStateHook />}></Route>
        <Route path="/reducer" element={<UseReducerHook />}></Route>
        <Route path="/ref" element={<UseRefHook />}></Route>
        <Route path="/color" element={<ColorValues />}></Route>
        <Route path="/imperative" element={<ImperativeHandle />}></Route>
        <Route path="/useContext" element={<MainPage />}></Route>
        <Route path="/usecallback" element={<MainPageUseCallBack />}></Route>
      </Routes>
    </div>
  );
}

export default App;
