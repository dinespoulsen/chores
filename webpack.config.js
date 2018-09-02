const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new WriteFilePlugin({
    // Write only files that have "sw.js" extension.
    test: /\serviceWorker.js$/,
    useHashIndex: true
    })
  ],
  mode: 'development'
};
