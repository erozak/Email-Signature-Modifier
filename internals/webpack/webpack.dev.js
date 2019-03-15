const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    watchContentBase: true,
    inline: true,
    port: process.env.SERVER_PORT || 3000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});

module.exports = devConfig;
