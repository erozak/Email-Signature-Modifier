const { fromRoot } = require('../utils/path');

require('dotenv').config({
  path: fromRoot('.env'),
})

const { set } = require('lodash');
const { DefinePlugin } = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const envKeys = [
  'GIVEN_NAME',
  'SURNAME',
  'PHONE_NUMBER',
  'LOGO_IMAGE',
  'LOGO_LINK',
  'EMAIL_ADDRESS',
  'LINKED_ICON',
  'LINKED_ID',
  'GITHUB_ICON',
  'GITHUB_USER',
];

const baseConfig = {
  entry: fromRoot('app/index.js'),
  output: {
    filename: 'js/[name].js',
    path: fromRoot('build'),
  },
  context: __dirname,
  plugins: [
    new DefinePlugin({
      'process.env': envKeys.reduce((acc, key) => {
        if (key in process.env) {
          return set(acc, key, JSON.stringify(process.env[key]));
        }

        return acc;
      }, {}),
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
