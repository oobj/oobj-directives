module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'src',
        dist: 'dist'
    };

    grunt.initConfig({

        jshint: {
            options: {
                reporter: require('jshint-html-reporter'),
                reporterOutput: 'jshint-report.html',
                force: true
            },
            target: ['src/*']
        },

        copy: {
            indexes: {
                files: [
                    {
                        expand: true,
                        src: ['src/**'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        coveralls: {
            options: {
                debug: true,
                coverageDir: 'results/',
                force: true
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            },
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },

        concat: {
            principal: {
                src: ['src/oobj.module.js', 'src/oobj-filters/oobj-filters.module.js', 'src/oobj-tpls.js', 'src/**/*.js',
                      '!src/**/*.spec.js', '!src/**/*_test.js'],
                dest: 'dist/js/oobj.js'
            },
            minificado: {
                src: ['src/oobj.module.js', 'src/oobj-filters/oobj-filters.module.js', 'src/oobj-tpls.js', 'src/**/*.js',
                      '!src/**/*.spec.js', '!src/**/*_test.js'],
                dest: 'dist/js/oobj.min.js'
            }
        },

        clean: {
            build: {
                src: ['dist']
            }
        },

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            build: {
                files: [
                    {
                        expand: true,
                        src: ['dist/**/*.js', 'src/**/*.js']
                    }
                ]
            },
        },

        uglify: {
            build: {
                files: [
                    {
                        expand: true,
                        src: ['dist/**/*.min.js']
                    }
                ]
            }
        },

        less: {
            development: {
                options: {
                    optimization: 2
                },
                files: {
                    "dist/css/oobj.css": "src/**/*.less"
                }
            },
            production: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "dist/css/oobj.min.css": "src/**/*.less"
                }
            }
        },

        htmlmin: {
            build: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true,
                        src: ['dist/**/*.html']
                    }
                ]
            }
        },

        html2js: {
            options: {
                base: 'src',
                module: 'oobj-directives.templates',
                singleModule: true,
                useStrict: true,
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true
                }
            },
            main: {
                src: ['src/**/*.html'],
                dest: 'src/oobj-tpls.js'
            },
        },
    });

    grunt.registerTask('build', ['clean', 'html2js', 'concat', 'ngAnnotate', 'uglify', 'less:development', 'less:production', 'htmlmin']);
    grunt.registerTask('continuous', ['clean', 'jshint', 'karma:continuous', 'html2js', 'less:development', 'less:production', 'concat', 'ngAnnotate', 'uglify', 'htmlmin', 'coveralls']);
};