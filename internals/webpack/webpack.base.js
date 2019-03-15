const Dotenv = require('dotenv-webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const { fromRoot } = require('../utils/path');

const baseConfig = {
  entry: fromRoot('app/index.js'),
  output: {
    filename: 'js/[name].js',
    path: fromRoot('build'),
  },
  context: __dirname,
  plugins: [
    new Dotenv({
      path: fromRoot('.env'),
      safe: true,
    }),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      title: '../index.html',
      template: fromRoot('app/index.pug'),
    }),
    new FaviconsWebpackPlugin({
      logo: fromRoot('public/favicon.png'),
      prefix: 'icons-[hash]/',
      statsFilename: 'iconstats-[hash].json',
      persistentCache: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug/,
        use: 'pug-loader',
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {},
          },
        ],
      },
    ],
  },
};

module.exports = baseConfig;
