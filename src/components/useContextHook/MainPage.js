import React, { useState, createContext } from "react";

import Input from "./Input";
import Label from "./Label";

export const contextApi = createContext(null);

function MainPage() {
  const [userName, setUserName] = useState("");
  return (
    <contextApi.Provider value={{ userName, setUserName }}>
      <div>
        <h1>MainPage</h1>
        <Input />
        <Label />
      </div>
    </contextApi.Provider>
  );
}

export default MainPage;
