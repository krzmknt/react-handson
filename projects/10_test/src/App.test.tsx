import { cleanup, fireEvent, render } from "@testing-library/react";
import { App } from "./App";

afterEach(cleanup);

if('CheckboxWithLabel changes the text after click', () => {
test("renders a star", () => {
  // document は Node.js では定義されておらず
  // jsdom により定義されている
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(<App />);

  expect(root.querySelector("svg")).toBeTruthy();
});
