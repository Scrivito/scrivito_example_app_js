const builder = require("content-security-policy-builder");
const dotenv = require("dotenv");
const path = require("path");
const process = require("process");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Webpackbar = require("webpackbar");
const ZipPlugin = require("zip-webpack-plugin");
const headersCsp = require("./public/_headersCsp.json");
const ExtendCspHeadersWebpackPlugin = require("./ExtendCspHeadersWebpackPlugin");

// load ".env"
dotenv.config();

const buildPath = "build";

function webpackConfig(env = {}) {
  // see https://github.com/webpack/webpack/issues/2537 for details
  const isProduction = process.argv.indexOf("-p") !== -1 || env.production;
  const isPrerendering = process.env.SCRIVITO_PRERENDER;

  if (
    !process.env.SCRIVITO_TENANT ||
    process.env.SCRIVITO_TENANT === "your_scrivito_tenant_id"
  ) {
    throw 'Environment variable "SCRIVITO_TENANT" is not defined!' +
      ' Check if the ".env" file with a proper SCRIVITO_TENANT is set.' +
      ' See ".env.example" for an example.';
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
            path.join(__dirname, "node_modules/striptags"),
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
                      targets: {
                        browsers: ["Chrome >= 41", "last 2 versions"],
                      },
                    },
                  ],
                ],
                overrides: [
                  {
                    test: ["./node_modules/striptags"],
                    presets: [["@babel/preset-env", { useBuiltIns: false }]],
                  },
                ],
                cacheDirectory: "tmp/babel-cache",
              },
            },
          ],
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(jpg|png|eot|svg|ttf|woff|woff2|gif|html)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]",
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          extractComments: true,
          parallel: true,
          terserOptions: { ecma: 5 },
        }),
      ],
    },
    output: {
      publicPath: "/",
      filename: "[name].js",
      path: path.join(__dirname, buildPath),
    },
    plugins: generatePlugins({ isProduction, isPrerendering, scrivitoOrigin }),
    resolve: {
      extensions: [".js"],
      modules: ["node_modules"],
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
    google_analytics: "./google_analytics.js",
    scrivito_extensions: "./scrivito_extensions.js",
    "index.css": "./assets/stylesheets/index.scss",
  };
  if (isPrerendering) {
    entry.prerender_content = "./prerender_content.js";
  }
  return entry;
}

function generatePlugins({ isProduction, isPrerendering, scrivitoOrigin }) {
  const ignorePublicFiles = [];
  if (!isPrerendering) {
    ignorePublicFiles.push("_prerender_content.html");
  }

  const plugins = [
    new webpack.EnvironmentPlugin({
      NODE_ENV: isProduction ? "production" : "development",
      SCRIVITO_TENANT: "",
      SCRIVITO_ORIGIN: scrivitoOrigin,
    }),
    new Webpackbar(),
    new CopyWebpackPlugin([
      { from: "../public", ignore: ignorePublicFiles },
      {
        from: "../node_modules/scrivito/scrivito/index.html",
        to: "scrivito/index.html",
      },
    ]),
    new ExtendCspHeadersWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]",
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ];

  if (isProduction) {
    plugins.unshift(new CleanWebpackPlugin([buildPath], { verbose: false }));
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
  const directives = Object.assign({}, headersCsp);

  // allow 'unsafe-eval' for webpack hot code reloading
  directives["script-src"].push("'unsafe-eval'");

  // allow ws: for webpack hot code reloading
  directives["default-src"].push("ws:");

  return builder({ directives });
}

module.exports = webpackConfig;
