import React, { useRef } from "react";

import Button from "./Button";

function ImperativeHandle() {
  const buttonRef = useRef();
  return (
    <div>
      <h1>ImperativeHandle</h1>
      <button
        onClick={() => {
          buttonRef.current.changeState();
        }}
      >
        Parent Button
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
