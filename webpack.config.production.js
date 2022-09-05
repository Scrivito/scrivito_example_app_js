const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const ZipPlugin = require("zip-webpack-plugin");

const devWebpackConfig = require("./webpack.config");

const NODE_BUILD_DIR = "buildNode";
const isPrerendering = process.env.SCRIVITO_PRERENDER;

function prodWebpackConfig(env = {}) {
  const {
    mode: _devMode,
    target: _devTarget,
    devServer: _devServer,
    plugins: devPlugins,
    ...sharedConfig
  } = devWebpackConfig({ ...env, production: true });

  const sharedPlugins = filterPlugins(
    devPlugins,
    ReactRefreshWebpackPlugin,
    SourceMapDevToolPlugin,
    isPrerendering ? undefined : WebpackManifestPlugin
  );

  const plugins = [new CleanWebpackPlugin(), ...sharedPlugins];

  if (!isPrerendering) {
    plugins.push(
      new ZipPlugin({
        filename: "build.zip",
        path: "../",
        pathPrefix: "build/",
      })
    );
  }

  return {
    ...sharedConfig,
    mode: "production",
    target: ["web", "es2018"],
    plugins,
  };
}

function nodeWebpackConfig(env = {}) {
  const {
    target: _prodTarget,
    entry: _prodEntry,
    output: prodOutput,
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
  };
}

function filterPlugins(plugins, ...exclude) {
  return plugins.filter(
    (plugin) => !exclude.some((c) => c && plugin instanceof c)
  );
}

module.exports = isPrerendering
  ? [prodWebpackConfig, nodeWebpackConfig]
  : prodWebpackConfig;
