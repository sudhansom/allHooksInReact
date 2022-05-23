import React, { useState } from "react";

import Input from "./Input";
import Label from "./Label";

function MainPage() {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h1>MainPage</h1>
      <Input setUserName={setUserName} />
      <Label userName={userName} />
    </div>
  );
}

export default MainPage;
