var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var webpackMerge = require('webpack-merge');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: 'dist',
    filename: '[id].[hash].js'
  },
  plugins: [
    new ExtractTextPlugin('[id].[hash].css'),
    new webpack.optimize.UglifyJsPlugin(),
    new FaviconsWebpackPlugin({
      logo: './app/images/favicon.ico',
      prefix: 'icons-[hash]/'
    }),
  ],
});
