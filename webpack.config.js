const path = require('path');

//"./src/app.js"
//./src/playground/routerAttemp.js
//entry
module.exports = {
  entry: "./src/app.js",
  mode: "production",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  watch: true,
  watchOptions: {
    poll: 1200,
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
