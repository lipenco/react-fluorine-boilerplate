/* eslint-disable */

var path = require('path')
var webpack = require('webpack')
var webpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

config.watch = true

var port = process.env.PORT || 3000
var compiler = webpack(config)
var server = new webpackDevServer(compiler, {
  contentBase: 'www',
  historyApiFallback: true,
  noInfo: false,
  quiet: false,
  stats: {
    version: true,
    timings: true,
    modules: false,
    errorDetails: true,
    chunkModules: false,
    colors: true
  }
})

server.listen(port, 'localhost', function (err) {
  if (err) {
    throw err
  }

  console.log('☕️  Listening at http://localhost:' + port)
});

