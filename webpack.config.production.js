const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const ZipPlugin = require("zip-webpack-plugin");

const devWebpackConfig = require("./webpack.config");

const isPrerendering = process.env.SCRIVITO_PRERENDER;

function webpackConfig(env = {}) {
  const {
    mode: _devMode,
    target: _devTarget,
    devServer: _devServer,
    entry: devEntry,
    plugins: devPlugins,
    ...sharedConfig
  } = devWebpackConfig({ ...env, production: true });

  const plugins = [
    new CleanWebpackPlugin(),
    ...filterDevPlugins(devPlugins),
    new ZipPlugin({
      filename: "build.zip",
      path: "../",
      pathPrefix: "build/",
      exclude: "asset-manifest.json",
    }),
  ];

  if (isPrerendering) {
    plugins.push(
      new WebpackManifestPlugin({ fileName: "asset-manifest.json" }),
      new HtmlWebpackPlugin({
        filename: "_prerender_content.html",
        template: "_prerender_content.html",
        chunks: ["prerender_content"],
      })
    );
  }

  return {
    ...sharedConfig,
    mode: "production",
    target: ["web", "es5"],
    entry: isPrerendering
      ? { prerender_content: "./prerender_content.js", ...devEntry }
      : devEntry,
    plugins,
  };
}

function filterDevPlugins(plugins) {
  return plugins.filter((plugin) => {
    if (plugin instanceof webpack.SourceMapDevToolPlugin) {
      return false;
    }
    return true;
  });
}

module.exports = webpackConfig;
