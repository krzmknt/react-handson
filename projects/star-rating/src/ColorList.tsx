import { Color } from "./Color";
import { colorProps, onRemoveType, onRateType } from "./App";

interface colors_props {
  colors: colorProps[];
  onRemoveColor?: onRemoveType;
  onRateColor?: onRateType;
}

export const ColorList = ({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}: colors_props) => {
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
};
