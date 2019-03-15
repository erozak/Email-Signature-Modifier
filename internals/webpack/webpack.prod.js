const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const devConfig = merge(baseConfig, {
  mode: 'production',
  performance: {
    assetFilter: assetFilename =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
  plugins: [],
});

module.exports = devConfig;
