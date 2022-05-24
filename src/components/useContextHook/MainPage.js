import React, { useState, createContext } from "react";

import Input from "./Input";
import Label from "./Label";

export const ContextApi = createContext(null);

function MainPage() {
  const [userName, setUserName] = useState("");
  return (
    <ContextApi.Provider value={{ userName, setUserName }}>
      <div>
        <h1>MainPage</h1>
        <Input />
        <Label />
      </div>
    </ContextApi.Provider>
  );
}

export default MainPage;
