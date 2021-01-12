const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { src, build, isProd } = require("./util");

module.exports = {
  entry: src("index.tsx"),
  output: {
    path: build(),
    filename: "[name].[fullhash].js",
    chunkFilename: "[name].[fullhash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      { test: /\.(?:gif|jpg|png|svg|webp)$/, use: ["file-loader"] },
      { test: /\.(?:eot|otf|ttf|woff|woff2)$/, use: ["file-loader"] },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: src("index.html"),
    }),
    ...(isProd
      ? [
          new MiniCssExtractPlugin({
            filename: isProd ? "[name].[fullhash].css" : "[name].css",
            chunkFilename: isProd ? "[id].[fullhash].css" : "[id].css",
          }),
        ]
      : []),
  ],
  optimization: {
    minimizer: isProd ? ["...", new CssMinimizerPlugin()] : undefined,
  },
};
