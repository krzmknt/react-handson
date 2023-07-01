import { useState } from "react";
import colorData from "./color-data.json";
import { ColorList } from "./ColorList";
import { AddColorForm } from "./AddColorForm";
import { v4 } from "uuid";

export type onRemoveType = (id: string) => any;
export type onRateType = (id: string, rating: number) => void;

export interface colorProps {
  id: string;
  title: string;
  color: string;
  rating: number;
  onRemove?: onRemoveType;
  onRate?: onRateType;
}

export interface coloPropsFunc extends colorProps {}

export const App = () => {
  const [colors, setColors] = useState(colorData);
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors: colorProps[] = [
            ...colors,
            {
              id: v4(),
              title,
              color,
              rating: 0,
            },
          ];
          setColors(newColors);
        }}
      />

      <ColorList
        colors={colors}
        onRateColor={(id: string, rating: number) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
      />
    </>
  );
};
