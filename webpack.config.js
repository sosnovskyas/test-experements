'use strict';
'use strict';
module.exports = {
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
    }
};