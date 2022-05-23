import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [state, setState] = useState(false);
  useImperativeHandle(ref, () => ({
    changeState() {
      setState((state) => !state);
    },
  }));
  return (
    <>
      <button>Child Button</button>
      {state && <p>I am clicked</p>}
    </>
  );
});

export default Button;
