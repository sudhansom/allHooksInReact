import React, { useState } from "react";

export const useCustomHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value,
      onChange: (e) => {
        setValue(e.target.value);
      },
    },
    () => {
      setValue(initialValue);
    },
  ];
};
