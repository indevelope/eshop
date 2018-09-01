const path = require('path');

const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',

  entry: {
    bundle: './index.js'
  },

  devServer: {
    historyApiFallback: true
  },

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets/'
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
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new ManifestPlugin()
  ]
};