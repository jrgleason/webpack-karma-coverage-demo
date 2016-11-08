const webpack = require("webpack");
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function () {
  return {
    context: helpers.root(''),
    entry: {
      "polyfills": "./src/polyfills.ts",
      "main": "./src/test"
    },
    resolve: {
      extensions: ["", ".js", ".ts", ".html"],
      modules: ["node_modules"]
    },
    module: {
      loaders:[
        {
          test: /\.ts$/, 
          loader: 'ts-loader'
        }
      ]
    },
    plugins: [
       new HtmlWebpackPlugin({
         template: 'src/index.html'
       }),
       new webpack.optimize.CommonsChunkPlugin({
        names: ['main', 'polyfills'],
        minChunks: Infinity
      })
    ]
  }
}

