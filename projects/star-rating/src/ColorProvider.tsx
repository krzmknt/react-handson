import { createContext, useState, useContext } from "react";
import colorData from "./color-data.json";
import { v4 } from "uuid";

type addColorType = (title: string, color: string) => void;
type rateColorType = (id: string, rating: number) => void;
type removeColorType = (id: string) => void;

const ColorContext = createContext({
  colors: [{}],
  addColor: (f: any, g: any) => f,
  rateColor: (f: any, g: any) => f,
  removeColor: (f: any) => f,
});
export const useColors = () => useContext(ColorContext);

export const ColorProvider = ({ children }: any) => {
  const [colors, setColors] = useState(colorData);

  const addColor: addColorType = (title, color) =>
    setColors([
      ...colors,
      {
        id: v4(),
        title,
        color,
        rating: 0,
      },
    ]);

  // TODO: 1 要素の修正のために配列を再作成しているがこれは効率的？
  const rateColor: rateColorType = (id, rating) =>
    setColors(
      // Change the rating of the color with the given id
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor: removeColorType = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
};
