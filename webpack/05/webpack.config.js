
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const baseConfig = {
    entry: {
        react: 'react'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },

    plugins: [
        new ExtractTextWebpackPlugin({
            filename: 'css/[name].[hash].css'
        }),
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'react',
            minChunks: Infinity
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }]
    }
}

const gerneratPage = function ({
    title = '',
    entry = '',
    template = './src/index.html',
    name = '',
    chunks = []
} = {}) {
    return {
        entry,
        plugins: [
            new HtmlWebpackPlugin({
                chunks,
                template,
                filename: name + '.html'
            })
        ]
    }
} 

const pages = [
    gerneratPage({
        title: 'page A',
        entry: {
            a: './src/pages/a'
        },
        name: 'a',
        chunks: ['react', 'a']
    }),
    gerneratPage({
        title: 'page B',
        entry: {
            b: './src/pages/b'
        },
        name: 'b',
        chunks: ['react', 'b']
    }),
    gerneratPage({
        title: 'page C',
        entry: {
            c: './src/pages/c'
        },
        name: 'c',
        chunks: ['react', 'c']
    })
]

console.log(pages.map(page => merge(baseConfig, page)))
module.exports = pages.map(page => merge(baseConfig, page));