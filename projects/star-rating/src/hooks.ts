import { useState } from "react";

type useInputType = (
  initialValue: any
) => [{ value: any; onChange: any }, () => void];

export const useInput: useInputType = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (event: any) => setValue(event.target.value) },
    () => setValue(initialValue),
  ];
};
