const path = require("path");
const { SourceMapDevToolPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const ZipPlugin = require("zip-webpack-plugin");

const devWebpackConfig = require("./webpack.config");

const NODE_BUILD_DIR = "buildNode";
const NO_ASSET_MANIFEST = !process.env.SCRIVITO_PRERENDER;

function prodWebpackConfig(env = {}) {
  const {
    mode: _devMode,
    target: _devTarget,
    devServer: _devServer,
    plugins: devPlugins,
    ...sharedConfig
  } = devWebpackConfig({ ...env, production: true });

  return {
    ...sharedConfig,
    mode: "production",
    target: ["web", "es5"],
    plugins: [
      new CleanWebpackPlugin(),
      ...filterPlugins(
        devPlugins,
        SourceMapDevToolPlugin,
        NO_ASSET_MANIFEST ? WebpackManifestPlugin : undefined
      ),
      new ZipPlugin({
        filename: "build.zip",
        path: "../",
        pathPrefix: "build/",
      }),
    ],
  };
}

function nodeWebpackConfig(env = {}) {
  const dev = devWebpackConfig({ ...env, production: true });

  const {
    target: _prodTarget,
    entry: _prodEntry,
    output: prodOutput,
    plugins: _prodPlugins,
    ...sharedConfig
  } = prodWebpackConfig(env);

  return {
    ...sharedConfig,
    target: "node",
    entry: { prerender_content: "./prerender_content.js" },
    output: {
      ...prodOutput,
      path: path.join(__dirname, NODE_BUILD_DIR),
      filename: "[name].js",
    },
    plugins: [
      new CleanWebpackPlugin(),
      ...filterPlugins(dev.plugins, SourceMapDevToolPlugin),
    ],
  };
}

function filterPlugins(plugins, ...exclude) {
  return plugins.filter(
    (plugin) => !exclude.some((c) => c && plugin instanceof c)
  );
}

module.exports = [prodWebpackConfig, nodeWebpackConfig];
