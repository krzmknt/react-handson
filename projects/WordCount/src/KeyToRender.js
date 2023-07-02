import { useEffect, useState } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  // コンポーネントのマウント時にイベントリスナーを登録
  // コンポーネントのアンマウント時にイベントリスナーを削除
  // 依存配列に空配列を指定することで、コンポーネントのマウント時にのみ実行される
  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

export const TextForm = () => {
  return (
    <>
      <TextArea />
    </>
  );
};
