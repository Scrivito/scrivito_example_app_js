const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const ZipPlugin = require("zip-webpack-plugin");

const devWebpackConfig = require("./webpack.config");

const NODE_BUILD_DIR = "buildNode";

function webpackConfig(env = {}) {
  const { isPrerendering } = env;

  const {
    mode: _devMode,
    target: _devTarget,
    devServer: _devServer,
    entry: devEntry,
    output: devOutput,
    plugins: devPlugins,
    ...sharedConfig
  } = devWebpackConfig({ ...env, production: true });

  const plugins = [new CleanWebpackPlugin(), ...filterDevPlugins(devPlugins)];

  if (!process.env.SCRIVITO_PRERENDER) {
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
    target: isPrerendering ? "node" : ["web", "es5"],
    entry: isPrerendering
      ? { prerender_content: "./prerender_content.js" }
      : devEntry,
    output: isPrerendering
      ? {
          ...devOutput,
          path: path.join(__dirname, NODE_BUILD_DIR),
          filename: "[name].js",
        }
      : devOutput,
    plugins,
  };
}

function filterDevPlugins(plugins) {
  return plugins.filter((plugin) => {
    if (plugin instanceof webpack.SourceMapDevToolPlugin) {
      return false;
    }
    if (
      plugin instanceof WebpackManifestPlugin &&
      !process.env.SCRIVITO_PRERENDER
    ) {
      return false;
    }

    return true;
  });
}

function webpackConfigPrerender(env = {}) {
  return webpackConfig({ ...env, isPrerendering: true });
}

module.exports = [webpackConfig, webpackConfigPrerender];
