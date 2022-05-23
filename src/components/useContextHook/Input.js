import React from "react";

function Input({ setUserName }) {
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
