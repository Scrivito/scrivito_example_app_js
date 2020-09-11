const builder = require("content-security-policy-builder");
const dotenv = require("dotenv");
const path = require("path");
const process = require("process");
const webpack = require("webpack");
const lodash = require("lodash");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Webpackbar = require("webpackbar");
const ZipPlugin = require("zip-webpack-plugin");
const headersCsp = require("./public/_headersCsp.json");

// load ".env"
dotenv.config();

// Extend headersCsp with custom endpoint URL
const endpoint = process.env.SCRIVITO_ENDPOINT;
if (endpoint) {
  headersCsp["script-src"].push(`https://${endpoint}`);
}

const buildPath = "build";

function webpackConfig(env = {}) {
  // see https://github.com/webpack/webpack/issues/2537 for details
  const isProduction = process.argv.indexOf("-p") !== -1 || env.production;
  const isPrerendering = process.env.SCRIVITO_PRERENDER;

  if (
    !process.env.SCRIVITO_TENANT ||
    process.env.SCRIVITO_TENANT === "your_scrivito_tenant_id"
  ) {
    throw (
      'Environment variable "SCRIVITO_TENANT" is not defined!' +
      ' Check if the ".env" file with a proper SCRIVITO_TENANT is set.' +
      ' See ".env.example" for an example.'
    );
  }

  let scrivitoOrigin = "";
  if (process.env.CONTEXT === "production") {
    scrivitoOrigin = process.env.URL;
  } else if (process.env.DEPLOY_PRIME_URL) {
    scrivitoOrigin = process.env.DEPLOY_PRIME_URL;
  }

  return {
    mode: isProduction ? "production" : "development",
    context: path.join(__dirname, "src"),
    entry: generateEntry({ isPrerendering }),
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.join(__dirname, "src"),
            path.join(__dirname, "node_modules/autotrack"),
            path.join(__dirname, "node_modules/dom-utils"), // sub-dependency of autotrack
          ],
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-react",
                  [
                    "@babel/preset-env",
                    {
                      debug: false,
                      modules: false,
                      shippedProposals: true,
                      useBuiltIns: "usage",
                      corejs: "3",
                      targets: { browsers: ["defaults"] },
                    },
                  ],
                ],
                cacheDirectory: "tmp/babel-cache",
              },
            },
          ],
        },
        {
          test: /\.s?css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(jpg|png|eot|svg|ttf|woff|woff2|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/[name].[contenthash].[ext]",
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [new TerserPlugin({ terserOptions: { ecma: 5 } })],
    },
    output: {
      publicPath: "/",
      filename: (chunkData) => {
        return chunkData.chunk.name === "tracking"
          ? "[name].js"
          : "assets/[name].[contenthash].js";
      },

      path: path.join(__dirname, buildPath),
    },
    plugins: generatePlugins({ isProduction, isPrerendering, scrivitoOrigin }),
    resolve: {
      extensions: [".js"],
      modules: ["node_modules"],
      symlinks: false,
    },
    devServer: {
      port: 8080,
      stats: "minimal",
      historyApiFallback: {
        rewrites: [
          { from: /^\/scrivito$/, to: "/scrivito/index.html" },
          { from: /^\/scrivito\//, to: "/scrivito/index.html" },
          { from: /./, to: "/catch_all_index.html" },
        ],
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Security-Policy": devServerCspHeader(),
      },
    },
  };
}

function generateEntry({ isPrerendering }) {
  const entry = {
    index: "./index.js",
    tracking: "./tracking.js",
    scrivito_extensions: "./scrivito_extensions.js",
  };
  if (isPrerendering) {
    entry.prerender_content = "./prerender_content.js";
  }
  return entry;
}

function generatePlugins({ isProduction, isPrerendering, scrivitoOrigin }) {
  const ignorePublicFiles = ["**/_headersCsp.json"];

  const plugins = [
    new webpack.EnvironmentPlugin({
      NODE_ENV: isProduction ? "production" : "development",
      SCRIVITO_TENANT: "",
      SCRIVITO_ORIGIN: scrivitoOrigin,
    }),
    new Webpackbar(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "../public", globOptions: { ignore: ignorePublicFiles } },
        {
          from: "../public/_headers",
          transform: (content) => {
            const csp = builder({ directives: headersCsp });
            return content
              .toString()
              .replace(/CSP-DIRECTIVES-PLACEHOLDER/g, csp);
          },
        },
        {
          from: "../node_modules/scrivito/scrivito/index.html",
          to: "scrivito/index.html",
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "catch_all_index.html",
      template: "catch_all_index.html",
      chunks: ["index"],
      inject: false, // needs custom order of script tags
    }),
    new HtmlWebpackPlugin({
      filename: "_scrivito_extensions.html",
      template: "_scrivito_extensions.html",
      chunks: ["scrivito_extensions"],
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ];

  if (isPrerendering) {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: "_prerender_content.html",
        template: "_prerender_content.html",
        chunks: ["prerender_content"],
      })
    );
  }

  if (!isProduction || isPrerendering) {
    plugins.push(new ManifestPlugin({ fileName: "asset-manifest.json" }));
  }

  if (isProduction) {
    plugins.unshift(new CleanWebpackPlugin());
    plugins.push(
      new ZipPlugin({
        filename: "build.zip",
        path: "../",
        pathPrefix: "build/",
      })
    );
  } else {
    plugins.push(new webpack.SourceMapDevToolPlugin({}));
  }

  return plugins;
}

function devServerCspHeader() {
  const directives = lodash.cloneDeep(headersCsp);

  // allow 'unsafe-eval' for webpack hot code reloading
  directives["script-src"].push("'unsafe-eval'");

  // allow ws: for webpack hot code reloading
  directives["default-src"].push("ws:");

  return builder({ directives });
}

module.exports = webpackConfig;
