/* global __dirname, require, module */

const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2


const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: 'index.js',
    library: 'stateAction',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.json', '.js'],
  },
  externals: {
    lodash: {
      root: '_',
      commonjs2: 'lodash',
      commonjs: 'lodash',
      amd: 'lodash',
      umd: 'lodash',
    },
    redux: {
      root: 'redux',
      commonjs2: 'redux',
      commonjs: 'redux',
      amd: 'redux',
      umd: 'redux',
    },
    'redux-actions': {
      root: 'ReduxAction',
      commonjs2: 'redux-actions',
      commonjs: 'redux-actions',
      amd: 'redux-actions',
      umd: 'redux-actions',
    },
    reselect: {
      root: 'reselect',
      commonjs2: 'reselect',
      commonjs: 'reselect',
      amd: 'reselect',
      umd: 'reselect',
    },
  },
};

module.exports = config;
