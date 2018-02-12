const webpack = requier('webpack');
const path = require('path');

function getEntry() {
  var jsPath = path.resolve(srcDir, 'js');
  var dirs = fs.readdirSync(jsPath);
  var maths = [];
  var files = {};
  dirs.forEach(function(item) {
    matchs = item.match(/(.+)\.js$/);

    if (matchs) {
      files[matchs[1]] = path.resolve(srcDir, 'js', item);
    }
  });

  return files;
}


module.exports = {
  entry: getEntry(),  // 获取项目入口的js文件
  output: {
    filename: '[name].js',  //根据入口文件输出的对应多个文件名
    publicPath: 'dist/js',  //用于配置文件发布路径，如CDN或本地服务器
    path: path.resolve(__dirname, 'dist/js/') //文件输出目录
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  resolve: {
    alias: {
      jquery: srcDir + '/js/lib/jquery.min.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    }),
    new CommonsChunkPlugin('common.js'),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};


