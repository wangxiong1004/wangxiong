
// 系统
const path = require('path');

// 插件
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');   // html插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports =  {
    entry : {
        'app': './src/main.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    module: {
        rules: [{   // 处理css
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,    // 处理sass
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {   // 处理images
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {    // 处理icon-font
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack3.2',
            favicon: './favicon.ico'
        }),

        new CleanWebpackPlugin(['dist']),

        new UglifyjsWebpackPlugin(),

        new webpack.NamedModulesPlugin(),

        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: 'inline-source-map',    // source map

    devServer: {
        contentBase: './dist',
        hot: true
    }
};
