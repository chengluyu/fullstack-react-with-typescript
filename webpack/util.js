const path = require("path");
const root = path.join.bind(null, __dirname, "..");
const src = root.bind(null, "src");
const build = root.bind(null, "build");
const isProd = process.env.NODE_ENV === "production";

module.exports = { root, src, build, isProd };
