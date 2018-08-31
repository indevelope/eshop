const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    // bundle: './index',
    serverApp: './serverApp'
  },

  devServer: {
    historyApiFallback: true
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    libraryTarget: 'commonjs'
  },

  resolve: {
    alias: {
      '~': process.cwd()
    }
  },
  
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        loader: 'ignore-loader'
        //loaders: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ],
};