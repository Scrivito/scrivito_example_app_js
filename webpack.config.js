const builder = require("content-security-policy-builder");
const dotenv = require("dotenv");
const path = require("path");
const process = require("process");
const webpack = require("webpack");
const lodash = require("lodash");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Webpackbar = require("webpackbar");
const headersCsp = require("./public/_headersCsp.json");

// load ".env"
dotenv.config();

let scrivitoOrigin = "";
if (process.env.CONTEXT === "production") {
  scrivitoOrigin = process.env.URL;
} else if (process.env.DEPLOY_PRIME_URL) {
  scrivitoOrigin = process.env.DEPLOY_PRIME_URL;
}

// Extend headersCsp with custom endpoint URL
const endpoint = process.env.SCRIVITO_ENDPOINT;
if (endpoint) {
  headersCsp["script-src"].push(`https://${endpoint}`);
}

const buildPath = "build";

function webpackConfig(env = {}) {
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

  return {
    mode: "development",
    context: path.join(__dirname, "src"),
    entry: {
      index: "./index.js",
      tracking: "./tracking.js",
      scrivito_extensions: "./scrivito_extensions.js",
    },
    target: "web",
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
    output: {
      publicPath: "/",
      filename: (chunkData) =>
        chunkData.chunk.name === "tracking"
          ? "[name].js"
          : "assets/[name].[contenthash].js",
      chunkFilename: "assets/chunk-[id].[contenthash].js",
      path: path.join(__dirname, buildPath),
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: env.isProduction ? "production" : "development",
        SCRIVITO_ENDPOINT: "",
        SCRIVITO_ORIGIN: scrivitoOrigin,
        SCRIVITO_TENANT: "",
      }),
      new Webpackbar(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "../public",
            globOptions: { ignore: ["**/_headersCsp.json", "**/_headers"] },
          },
          {
            from: "../public/_headers",
            transform: (content) => {
              const csp = builder({ directives: headersCsp });
              return content
                .toString()
                .replace(/CSP-DIRECTIVES-PLACEHOLDER/g, csp);
            },
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
      new WebpackManifestPlugin({ fileName: "asset-manifest.json" }),

      new webpack.SourceMapDevToolPlugin({}),
    ],
    resolve: {
      extensions: [".js"],
      modules: ["node_modules"],
      symlinks: false,
      fallback: { crypto: false },
    },
    devServer: {
      port: 8080,
      open: true,
      stats: "minimal",
      historyApiFallback: { index: "/catch_all_index.html" },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Security-Policy": devServerCspHeader(),
      },
    },
  };
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
