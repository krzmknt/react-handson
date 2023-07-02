import { useState, useEffect } from "react";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  // レンダリング後に実行される
  useEffect(() => {
    // alert(`checked: ${checked.toString()}`);
    console.log(`checked: ${checked.toString()}`);
  });

  return (
    <>
      <input
        type="checkbox"
        value={checked.toString()}
        onChange={() => setChecked((checked: any) => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
};
