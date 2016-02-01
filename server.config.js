var webpack,
    webpackDevMiddleware,
    webpackHotMiddleware,
    webpackConfig,
    bundler,
    historyApiFallback;

webpack = require('webpack');
webpackDevMiddleware = require('webpack-dev-middleware');
webpackHotMiddleware = require('webpack-hot-middleware');
webpackConfig = require('./webpack.config');
bundler = webpack(webpackConfig);
historyApiFallback = require('connect-history-api-fallback')

module.exports = {
  server: {
    baseDir: './',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: false,
        quiet: false,
        stats: {
          colors: true
        }
      }),
      webpackHotMiddleware(bundler),
      historyApiFallback()
    ]
  },
  files: [
    './build/*.css'
  ]
}
