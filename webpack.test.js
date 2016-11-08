const helpers = require('./helpers.js')
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function () {
  return webpackMerge(commonConfig(), {
    devtool: 'inline-source-map',
    module: {
      postLoaders: [
        // instrument only testing sources with Istanbul 
        {
          test: /\.ts$/,
          include: 'src'),
          loader: 'istanbul-instrumenter'
        }
      ]
    }
  })
};
