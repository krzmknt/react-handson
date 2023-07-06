import ReactDOM from "react-dom";
import { App } from "./App";

test("renders a star", () => {
  // document は Node.js では定義されておらず
  // jsdom により定義されている
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  expect(div.querySelector("svg")).toBeTruthy();
});
