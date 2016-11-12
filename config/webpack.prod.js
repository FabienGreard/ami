var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  output: {
    path: 'dist',
    filename: '[id].[hash].js'
  },
  plugins: [
    new ExtractTextPlugin('[id].[hash].css')
  ],
});
