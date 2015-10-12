module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
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
                        dest: 'build/'
                    }
                ]
            }
        },

        concat: {
            principal: {
                src: ['src/**/*.js'],
                dest: 'build/js/oobj.js'
            }
        },

        clean: {
            build: {
                src: ['build']
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
                        src: ['build/**/*.js']
                    }
                ]
            }
        },

        uglify: {
            build: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.js']
                    }
                ]
            }
        },

        cssmin: {
            build: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.css']
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
                        src: ['build/**/*.html']
                    }
                ]
            }
        },
    });

    grunt.registerTask('build', ['clean', 'copy', 'concat', 'ngAnnotate', 'uglify', 'cssmin', 'htmlmin']);
};