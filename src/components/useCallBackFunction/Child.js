import React, { useEffect } from "react";

function Child({ returnComponent }) {
  useEffect(() => {
    console.log("I am called...");
  }, [returnComponent]);
  return <div>{returnComponent()}</div>;
}

export default Child;
