let path = require("path");

module.exports = {
  // エンドリポイントを指定
  entry: "./App.jsx",

  // アーティファクトの出力先を指定
  output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js",
  },

  module: {
    //.js (node_module 以外) は babel-loader に処理されるように指定
    rules: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },

  // バンドルしてもデバッグ機能が使えるように、ソースマップを出力 (output に吐かれる)
  devtool: "source-map",
};
