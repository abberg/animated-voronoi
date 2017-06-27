const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/js')
  },
  devtool: 'source-map',
  devServer:{
    hot: true,
    contentBase: './public',
    watchContentBase: true,
    publicPath: 'http://localhost:8080/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],
};