'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    node: {
        fs: "empty",
        child_process: "empty"
    },
    // target: 'node',
    devtool: 'inline-source-map',
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        // todo: fix - it OLD method, can be bugs
        // fix trouble https://github.com/AngularClass/angular-starter/issues/993
        exprContextCritical: false,
        rules: [
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            cache: true,
            showErrors: true
        })
    ]
};