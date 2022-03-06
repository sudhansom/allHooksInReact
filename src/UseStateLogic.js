import React, { useState } from "react";

function UseStateLogic() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return [count, setCount, showText, setShowText];
}

export default UseStateLogic;
