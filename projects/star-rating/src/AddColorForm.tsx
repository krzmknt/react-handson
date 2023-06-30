import { useState } from "react";

export const AddColorForm = ({ onNewColor = (f: any, g: any) => f }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e: any) => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  );
};
