
const path = require('path');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    filename: '[name].bundle.js',
    publicPath: './dist/',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js'
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
        options: {
          // insertInto: '#app',
          singleton: true,
          transform: './css.transform.js'
        }
        // loader: 'style-loader/url'
        // loader: 'style-loader/useable'
      }, {
        loader: 'css-loader',
        options: {
          minimize: true,
          modules: true,
          localIdentName: '[path][name]_[local]--[hash:base64:5]'
        }
        // loader: 'file-loader'
        // loader: 'css-loader'
      }]
    }, {
      test: /\.less$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: {
          loader: 'style-loader'
        },
        use: [{
          loader: 'css-loader'
        } ,{
          loader: 'less-loader'
        }]
      })
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },

  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css',
      allChunks: false  // 提取css的范围
    })
  ]
};

