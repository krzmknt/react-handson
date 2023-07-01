import { useInput } from "./hooks";

export const AddColorForm = ({ onNewColor = (f: any, g: any) => f }) => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  // 更新処理は、入力の onNewColor に任せる
  // なぜなら、ColorList のステートを更新したいから
  // 更新処理後、フォームの内容をリセットする
  // デフォルトの POST リクエストをキャンセルする
  const submit = (event: any) => {
    event.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
};
