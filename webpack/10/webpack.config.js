
const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const PurifyCSS = require('purifycss-webpack');
const glob = require('glob-all');


module.exports = {
    entry: {
        app: './src/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: './dist/',
        chunkFilename: '[name].bundle.js'
    },

    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: { //  不提取
                    loader: 'style-loader',
                    options: {
                        singleton: true
                    }
                },
                use: [{ // 提取
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            })
        }, {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: ['lodash']
                }
            }]
        }]
    },

    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css',
            allChunks: false    // 指定提取范围 默认false异步的不会提取 设置true则所有的都会提取
        }),

        new PurifyCSS({
            paths: glob.sync([
                path.join(__dirname, './*.html'),
                path.join(__dirname, './src/*.js')
            ])
        }),

        new webpack.optimize.UglifyJsPlugin()
    ]
};