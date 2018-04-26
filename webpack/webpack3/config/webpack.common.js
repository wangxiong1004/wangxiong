const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
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
        new CleanWebpackPlugin(['dist']),

        new HtmlWebpackPlugin({
            title: 'production'
        })
    ]
};
