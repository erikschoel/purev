const webpack = require('webpack')

module.exports = {
  entry: {
    'purev': 'index.js',
    'purevPure': './src/pure.js'
  },
  output: {
    filename: '[name].js',
    library: 'PureJSVue',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
}
