const { merge } = require("webpack-merge");
const common = require("./base");
const { build } = require("./util");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: build(),
    hot: true,
    historyApiFallback: true,
    compress: true,
  },
});
