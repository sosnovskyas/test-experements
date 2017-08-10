'use strict';
'use strict';
module.exports = {
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
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    devtool: 'source-map'
}