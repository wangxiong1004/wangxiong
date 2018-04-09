
const path = require('path');
const glob = require('glob-all');

const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const PurifyCSS = require('purifycss-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlneChunkPlugin = require('html-webpack-inline-chunk-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: './src/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle-[hash:5].js',
        publicPath: '',
        chunkFilename: 'js/[name].bundle-[hash:5].js'
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
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [
                            require('postcss-sprites')({
                                spritePath: 'dist/assets/images/sprites',
                                retina: true
                            }),
                            require('postcss-cssnext')()
                        ]
                    }
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
        }, {
            test: /\.(jpg|png|jpeg|gif)$/,
            use: [
                // {
                //     loader: 'file-loader',
                //     options: {
                //         publicPath: '',
                //         // outputPath: 'dist/',
                //         useRelativePath: true
                //     }
                // }
                {
                    loader: 'url-loader',
                    options: {
                        publicPath: '',
                        outputPath: 'assets/images/',
                        // useRelativePath: true,
                        limit: 10000,
                        name: '[name]-[hash:5].min.[ext]'
                    }
                },
                {
                    loader: 'img-loader',
                    options: {
                        jpgquant: {
                            quality: 80
                        }
                    }
                }
            ]
        }, {
            test: /\.(eot|woff2|woff|ttf|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    publicPath: '',
                    // outputPath: 'dist/',
                    useRelativePath: true,
                    limit: 5000,
                    name: '[name]-[hash:5].min.[ext]'
                }
            }]
        }, {
            test: path.resolve(__dirname, 'src/app.js'),
            use: [{
                loader: 'imports-loader',
                options: {
                    $: 'jquery'
                }
            }]
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    attrs: ['img:src', 'img:data-src']
                }
            }]
        }]
    },

    resolve: {
        alias: {
            jquery$: path.resolve(__dirname, 'src/libs/jquery.min.js')
        }
    },

    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].min-[hash:5].css',
            allChunks: false    // 指定提取范围 默认false异步的不会提取 设置true则所有的都会提取
        }),

        new PurifyCSS({
            paths: glob.sync([
                path.join(__dirname, './*.html'),
                path.join(__dirname, './src/*.js')
            ])
        }),

        // new webpack.ProvidePlugin({
        //     $: 'jquery'
        // }),

        new webpack.optimize.UglifyJsPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),

        new HtmlWebpackInlneChunkPlugin({
            inlineChunks: ['manifest']
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            // inject: false,
            // chunks: ['app'],
            minify: {
                collapseWhitespace: true
            }
        }),

        new CleanWebpackPlugin(['dist'])
    ]
};