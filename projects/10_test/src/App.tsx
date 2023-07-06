import "./App.css";
import { FaStar } from "react-icons/fa";

export const App = ({ selected = false }: any) => {
  return <FaStar color={selected ? "red" : "gray"} id="star" />;
};
