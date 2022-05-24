import React, { useContext } from "react";

import { ContextApi } from "./MainPage";

function Input() {
  const { setUserName } = useContext(ContextApi);
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
