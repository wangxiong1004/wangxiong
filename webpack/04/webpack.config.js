
const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
  },

  module: {
    rules: [{
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.(png|jpg|gif|jpeg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: '',
          outputPath: '',
          useRelativePath: true
        }
      }]
    }]
  }
};
