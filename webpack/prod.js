const { merge } = require("webpack-merge");
const common = require("./base");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
});
