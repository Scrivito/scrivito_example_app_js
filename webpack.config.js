const dotenv = require("dotenv");
const path = require("path");
const process = require("process");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");
const AddSitemapToRedirectsWebpackPlugin = require("./AddSitemapToRedirectsWebpackPlugin");
const ExtendCspHeadersWebpackPlugin = require("./extend-csp-headers-webpack-plugin");

// load ".env"
dotenv.config();

const buildPath = "build";

module.exports = (env = {}) => {
  // see https://github.com/webpack/webpack/issues/2537 for details
  const isProduction = process.argv.indexOf("-p") !== -1 || env.production;

  if (
    !process.env.SCRIVITO_TENANT ||
    process.env.SCRIVITO_TENANT === "your_scrivito_tenant_id"
  ) {
    throw 'Environment variable "SCRIVITO_TENANT" is not defined!' +
      ' Check if the ".env" file with a proper SCRIVITO_TENANT is set.' +
      ' See ".env.example" for an example.';
  }

  const plugins = [
    new ProgressBarPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: isProduction ? "production" : "development",
      SCRIVITO_TENANT: "",
    }),
    new CopyWebpackPlugin([
      { from: "../public" },
      {
        from: "../node_modules/scrivito/scrivito/index.html",
        to: "scrivito/index.html",
      },
    ]),
    new AddSitemapToRedirectsWebpackPlugin(),
    new ExtendCspHeadersWebpackPlugin(),
    new ExtractTextPlugin({
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

  return {
    mode: isProduction ? "production" : "development",
    context: path.join(__dirname, "src"),
    entry: {
      index: "./index.js",
      google_analytics: "./google_analytics.js",
      scrivito_extensions: "./scrivito_extensions.js",
      sitemap: "./sitemap.js",
      "index.css": "./assets/stylesheets/index.scss",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.join(__dirname, "src"),
            path.join(__dirname, "node_modules/autotrack"),
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
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: isProduction,
                },
              },
              {
                loader: "sass-loader",
              },
            ],
          }),
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
    plugins,
    resolve: {
      extensions: [".js"],
      modules: ["node_modules"],
    },
    devServer: {
      port: 8080,
      historyApiFallback: {
        rewrites: [
          { from: /^\/scrivito$/, to: "/scrivito/index.html" },
          { from: /^\/scrivito\//, to: "/scrivito/index.html" },
          { from: /./, to: "/index.html" },
        ],
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  };
};
