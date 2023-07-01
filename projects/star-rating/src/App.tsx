import { ColorList } from "./ColorList";
import { AddColorForm } from "./AddColorForm";

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
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
};
