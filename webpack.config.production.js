const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const ZipPlugin = require("zip-webpack-plugin");

const devWebpackConfig = require("./webpack.config");

const isPrerender = process.env.SCRIVITO_PRERENDER;

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

  if (isPrerender) {
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
    target: isPrerendering ? "node" : ["web", "es5"],
    entry: isPrerendering
      ? { prerender_content: "./prerender_content.js" }
      : devEntry,
    output: isPrerendering
      ? {
          ...devOutput,
          path: path.join(__dirname, "buildPrerendering"),
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
    return true;
  });
}

function webpackConfigPrerender(env = {}) {
  return webpackConfig({ ...env, isPrerendering: true });
}

module.exports = isPrerender
  ? [webpackConfig, webpackConfigPrerender]
  : webpackConfig;
