const CracoAlias = require("craco-alias");
const fs = require("fs");
const path = require("path");
const cracoBabelLoader = require("craco-babel-loader");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "tsconfig.paths.json",
      },
    },
    {
      plugin: cracoBabelLoader,
      options: {
        includes: [resolveApp("../apps")],
      },
    },
  ],
};
