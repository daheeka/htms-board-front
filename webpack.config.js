// react_start/webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, options) => {
  // console.log("env", env);
  // console.log("options", options);
  // console.log("process", process.env);
  // dotenv.config({ path: "./env/development.env" });
  return {
    devtool: "cheap-eval-source-map",
    entry: {
      "js/app": ["./src/App.jsx"],
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/",
    },
    mode: "none",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: ["babel-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|ico)$/i,
          use: [
            {
              loader: "url-loader",
            },
          ],
        },
        {
          test: /\.(ttf|eot|svg|woff|woff2|pdf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
      }),
      new webpack.EnvironmentPlugin({ options: options }),
    ],

    devServer: {
      historyApiFallback: true,
      host: "0.0.0.0",
      port: "8080",
    },
  };
};
