import { Color } from "./Color";
import { useColors } from "./ColorProvider";

export const ColorList = () => {
  const { colors } = useColors();
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {colors.map((color: any) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};
