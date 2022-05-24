import React, { useContext } from "react";
import { ContextApi } from "./MainPage";

function Label() {
  const { userName } = useContext(ContextApi);
  return <div>User: {userName}</div>;
}

export default Label;
