import React, { useState } from "react";

function MainPage() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const evenOdd = () => {
    console.log("even odd");
    return count % 2 === 0;
  };
  return (
    <div>
      <h1>UseMemo Hook:</h1>
      <button onClick={handleClick}>{count}</button>
      <span>{evenOdd() ? "even" : "odd"}</span>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        {count1}
      </button>
    </div>
  );
}

export default MainPage;
