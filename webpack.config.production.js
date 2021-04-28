const baseWebpackConfig = require("./webpack.config");

function webpackConfig(env = {}) {
  const config = baseWebpackConfig({ ...env, production: true });
  return config;
}

module.exports = webpackConfig;
