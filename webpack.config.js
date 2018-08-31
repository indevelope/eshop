const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './index'
  },

  devServer: {
    historyApiFallback: true
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
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
  }
};