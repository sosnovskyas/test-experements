const karmaMocha = require('karma-mocha');
const karmaWebpack = require('karma-webpack');
const karmaPhantomjs = require('karma-phantomjs-launcher');
// important! dont use CommonsChunkPlugin webpack plugin in test build
const webpackConfig = require('./webpack.test.config.js');

module.exports = (config) => {
    config.set({

        basePath: '',

        frameworks: ['mocha'],

        browsers: ['PhantomJS'],

        plugins: [karmaMocha, karmaWebpack, karmaPhantomjs],

        files: [
            'src/**/*.test.ts',
            'src/**/*.test.tsx',
        ],
        preprocessors: {
            'src/**/*.test.ts': ['webpack'],
            'src/**/*.test.tsx': ['webpack']
        },
        webpack: webpackConfig,

        exclude: [],

        port: 9876,

        reporters: ['progress'],

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        singleRun: true,

        concurrency: Infinity
    })
};
