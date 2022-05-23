import React, { useContext } from "react";
import { contextApi } from "./MainPage";

function Label() {
  const { userName } = useContext(contextApi);
  return <div>User: {userName}</div>;
}

export default Label;
