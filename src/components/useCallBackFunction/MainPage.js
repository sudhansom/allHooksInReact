import React, { useCallback, useState } from "react";

import Child from "./Child";

function MainPage() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("use axios to setData from api");
  const returnComponent = useCallback(() => {
    return data;
  }, [data]);
  return (
    <div>
      <h1>Use Call Back practice</h1>
      <Child returnComponent={returnComponent} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h3>toggle</h3>}
    </div>
  );
}

export default MainPage;
