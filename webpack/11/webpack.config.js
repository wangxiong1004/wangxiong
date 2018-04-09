
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
        publicPath: '',
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
                        // outputPath: 'dist/',
                        useRelativePath: true,
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
        }]
    },

    resolve: {
        alias: {
            jquery$: path.resolve(__dirname, 'src/libs/jquery.min.js')
        }
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

        // new webpack.ProvidePlugin({
        //     $: 'jquery'
        // }),

        new webpack.optimize.UglifyJsPlugin()
    ]
};