module.exports = function(grunt) {

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
                reporter: 'jshint',
                reporterOutput: 'jshint.xml'
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

        concat: {
            principal: {
                src: ['src/**/*.js'],
                dest: 'dist/js/oobj.js'
            },
            minificado: {
                src: ['src/**/*.js'],
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
                        src: ['dist/**/*.js']
                    }
                ]
            }
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

        cssmin: {
            build: {
                files: [
                    {
                        expand: true,
                        src: ['dist/**/*.min.css']
                    }
                ]
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
                // custom options, see below
            },
            main: {
                src: ['src/**/*.html'],
                dest: 'src/oobj-tpls.js'
            },
        },
    });

    grunt.registerTask('build', ['clean', 'html2js', 'concat', 'ngAnnotate', 'uglify', 'cssmin', 'htmlmin']);
};