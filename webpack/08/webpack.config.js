
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


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
            test: /\.css$/,
            use: [{
                loader: 'style-loader',
                options: {
                    // insertInto: '#app',
                    singleton: true,
                    transform: './css.transform.js'
                }
            }, {
                loader: 'css-loader',
                options: {
                    minimize: true,
                    modules: true,
                    localIdentName: '[path][name]_[local]_[hash:base64:5]'
                }
            }]
        }, {
            test: /\.less$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: { //  不提取
                    loader: 'style-loader',
                    options: {
                        // insertInto: '#app',
                        singleton: true,
                        transform: './css.transform.js'
                    }
                },
                use: [{ // 提取
                    loader: 'css-loader',
                    options: {
                        // minimize: true,
                        modules: true,
                        localIdentName: '[path][name]_[local]_[hash:base64:5]'
                    }
                }, {
                    loader: 'less-loader'
                }]
            })
        }]
    },

    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css',
            allChunks: false    // 指定提取范围 默认false异步的不会提取 设置true则所有的都会提取
        })
    ]
};