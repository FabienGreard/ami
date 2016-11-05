var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
});