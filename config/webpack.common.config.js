const webpack = require('webpack')

module.exports = {
  entry: {
    'purejs-vue': 'index.js',
    'purejs-vue.min': './src/index.js'
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
