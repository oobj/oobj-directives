module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'node_modules/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-touch/angular-touch.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'bower_components/angular-ui-grid/ui-grid.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            "bower_components/moment/moment.js",
            "bower_components/bootstrap-daterangepicker/daterangepicker.js",
            'bower_components/angular-daterangepicker/js/angular-daterangepicker.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-touch/angular-touch.js',
            'bower_components/ui-select/dist/select.min.js',
            'src/oobj-filters/oobj-filters.module.js',
            'src/oobj.module.js',
            'src/**/*.js',
            'src/**/*.html'
        ],

        preprocessors: {
            // gera js dos html templates
            'src/**/*.html': ['ng-html2js'],
            'src/**/*.js': ['coverage']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/',
            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('templates')
            moduleName: 'templates'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'junit'],

        junitReporter: {
            outputDir: 'results', // results will be saved as $outputDir/$browserName.xml
            outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: 'unit' // suite will become the package name attribute in xml testsuite element
        },

        coverageReporter: {

            dir: 'results',
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'lcov', subdir: '.' }
            ]
        },


        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor',
            'karma-coverage'
        ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    })
};
