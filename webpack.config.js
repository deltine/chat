const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
// const LiveReloadPlugin = require("webpack-livereload-plugin");

const clientConfig = {
  mode: "development",
  entry: ["react-hot-loader/patch", path.resolve("src/index.tsx")],
  output: {
    filename: "[name].js",
    // expressでpublicフォルダ配下を静的に読む込むように設定するので、そこに出力する
    path: `${__dirname}/public/js`,
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new OpenBrowserPlugin({ url: "http://localhost:3000" }),
    new webpack.HotModuleReplacementPlugin(),
    // new LiveReloadPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

const serverConfig = {
  mode: "development",
  entry: "./src/server/index.ts",
  target: "node",
  node: {
    // expressを使うときにはこの設定をしないと失敗します
    // 参考：https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new NodemonPlugin(),
    // new LiveReloadPlugin()
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = [clientConfig, serverConfig];
