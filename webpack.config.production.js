const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const ZipPlugin = require("zip-webpack-plugin");

const devWebpackConfig = require("./webpack.config");

const isPrerendering = process.env.SCRIVITO_PRERENDER;

function webpackConfig(env = {}) {
  const devConfig = devWebpackConfig({ ...env, production: true });

  return {
    ...devConfig,
    mode: "production",
    target: ["web", "es5"],
    plugins: [
      new CleanWebpackPlugin(),
      ...filterDevPlugins(devConfig.plugins),
      new ZipPlugin({
        filename: "build.zip",
        path: "../",
        pathPrefix: "build/",
      }),
    ],
  };
}

function filterDevPlugins(plugins) {
  return plugins.filter((plugin) => {
    if (plugin instanceof webpack.SourceMapDevToolPlugin) {
      return false;
    }
    if (plugin instanceof WebpackManifestPlugin && !isPrerendering) {
      return false;
    }
    return true;
  });
}

module.exports = webpackConfig;
