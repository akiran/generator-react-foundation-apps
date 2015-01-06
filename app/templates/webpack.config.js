var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: '#inline-source-map',
  entry: {
    'app.js': './client/js/app.jsx'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]',
  },
  module: {
    loaders: [
      {test: /\.js|jsx$/, loaders: ['jsx?harmony']},
    ],
  },
  resolve : {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/vertx/)
  ]
};