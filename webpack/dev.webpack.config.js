const merge = require('webpack-merge');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
const baseConfig = require('./base.webpack.config');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new FlowStatusWebpackPlugin({
      failOnError: true,
      restartFlow: false,
    }),
  ],
});
