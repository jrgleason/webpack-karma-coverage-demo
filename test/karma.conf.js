const webpack = require("webpack");
module.exports = function(config) {
  var webpackConfig = require("../webpack.config");
  webpackConfig.module.postLoaders = [
        // instrument only testing sources with Istanbul
        {
          test: /\.ts$/,
          include: './src',
          loader: 'istanbul-instrumenter'
        }
      ]
  webpackConfig.plugins = [
    new webpack.SourceMapDevToolPlugin({
      filename: null, // if no value is provided the sourcemap is inlined
      test: /\.(ts|js)($|\?)/i // process .js and .ts files only
    })
  ];
  webpackConfig.entry = {};
  var configuration = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: './test.bundle.ts', watched: true },
    ],
    exclude: [
      'node_modules'
    ],
    preprocessors: {
      './test.bundle.ts': [ 'webpack', 'sourcemap' ],
    },
    webpack: webpackConfig,
    webpackMiddleware: { stats: 'errors-only'},
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'text'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  };
  config.set(configuration);
};
