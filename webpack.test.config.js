'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sourcePath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

const {CheckerPlugin} = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    node: {
        fs: "empty",
    //     child_process: "empty"
    },

    entry: {
        app: path.resolve(sourcePath, 'index.ts')
    },

    output: {
        path: buildPath,
        filename: '[name].[chunkhash].js'
        // publicPath: '/'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        modules: [
            sourcePath,
            path.resolve(__dirname, 'node_modules')
        ]
    },

    module: {
        // todo: fix - it OLD method, can be bugs
        // fix trouble https://github.com/AngularClass/angular-starter/issues/993
        // exprContextCritical: false,
        loaders: [
            {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
            {test: /\.js$/, enforce: "pre", loader: "source-map-loader"}
        ]
    },

    plugins: [new CheckerPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: [
                            'last 3 version',
                            'ie >= 10'
                        ]
                    })
                ],
                // context: staticSourcePath
            }
        }),
        new webpack.HashedModuleIdsPlugin(),


        new HtmlWebpackPlugin({
            // template: path.join(__dirname, 'index.ejs'),
            path: buildPath,
            // excludeChunks: ['base'],
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),

        new PreloadWebpackPlugin({
            rel: 'preload',
            as: 'script',
            include: 'all',
            fileBlacklist: [/\.(css|map)$/, /base?.+/]
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash].css',
            allChunks: true
        }),
        // new StyleExtHtmlWebpackPlugin({
        //     minify: true
        // }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
};