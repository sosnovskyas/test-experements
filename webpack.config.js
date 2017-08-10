'use strict';

// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    node: {
        fs: "empty",
        child_process: "empty"
    },
    // target: 'node',
    devtool: 'inline-source-map',
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         cache: true,
    //         showErrors: true,
    //         title: "Mocha Browser Tests",
    //     }),
    // ]
};