path = require 'path'
webpack = require 'webpack'

module.exports =
  cache: true

  entry:
    'react-foundation': './src/react-foundation.coffee'

  output:
    path: path.join __dirname, 'dist'
    filename: '[name].js'

  module:
    loaders: [
      { test: /\.coffee$/, loader: "coffee" },
      { test: /\.js$/,  loader: 'jsx' },
      { test: /\.jsx$/, loader: 'jsx?insertPragma=React.DOM' }
    ]
