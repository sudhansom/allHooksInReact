import React, { useContext } from "react";

import { contextApi } from "./MainPage";

function Input() {
  const { setUserName } = useContext(contextApi);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default Input;
