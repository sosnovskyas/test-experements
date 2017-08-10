const karmaMocha = require('karma-mocha');
const karmaWebpack = require('karma-webpack');
const karmaPhantomjs = require('karma-phantomjs-launcher');
const webpackConfig = require('./webpack.config');

module.exports = (config) => {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],

        browsers: ['PhantomJS'],

        // plugins: [karmaMocha, karmaWebpack, karmaPhantomjs, karmaSourceMap],
        plugins: [karmaMocha, karmaWebpack, karmaPhantomjs],


        // list of files / patterns to load in the browser
        files: [
            'src/**/*.test.ts'
        ],
        preprocessors: {
            // 'src/**/*.test.ts': ['webpack', 'sourcemap']
            'src/**/*.test.ts': ['webpack']
        },
        webpack: webpackConfig,

        // list of files to exclude
        exclude: [],
        port: 9876,
        reporters: ['progress'],
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
