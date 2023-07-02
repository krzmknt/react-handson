import { useEffect, useState, useMemo } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  // コンポーネントのマウント時にイベントリスナーを登録
  // コンポーネントのアンマウント時にイベントリスナーを削除
  // 依存配列に空配列を指定することで、コンポーネントのマウント時にのみ実行される
  // keydown 時に forceRender を呼び出すことで、コンポーネントを再レンダリングする
  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

export const WordCount = ({ children = "" }) => {
  useAnyKeyToRender();

  // 1. 毎回レンダリングされる
  // const words = children.split(" ");

  // 2. words は children が変更されたときのみ再計算される
  const words = useMemo(() => {
    return children.split(" ");
  }, [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
};
