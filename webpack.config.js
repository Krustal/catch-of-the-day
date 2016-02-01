var webpack = require('webpack');

// TODO: Add notify plugin to mirror old browserify implementation
// TODO: Add configuration for minification, previously a commented out pipe in browserify
module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  entry: {
    main: [
      "webpack/hot/dev-server",
      "webpack-hot-middleware/client",
      __dirname + "/scripts/main"
    ]
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].js",
    sourceMapFilename: "debugging/[file].map",
    publicPath: "/build/",
    pathinfo: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // https://github.com/webpack/docs/wiki/optimization#deduplication
    // Dedupes module dependencies, turn off locally if your build is slow
    new webpack.optimize.DedupePlugin(),
    // Prevents the bundle from building if there are errors during build
    // new webpack.NoErrorsPlugin()
  ],
  resolveLoader: {
    moduleDirectories: ['node_modules']
  },
  resolve: {
    root: [__dirname + "/scripts/"],
    extensions: ['', '.js', '.coffee', '.jsx', '.css']
  },
  module: {
    preloaders: [
      { test: /\.js$/, loader: 'source-map' }
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
    ]
  }
};
