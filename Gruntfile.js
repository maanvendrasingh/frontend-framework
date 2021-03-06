'use strict';

module.exports = function(grunt){
    
    const sass = require('node-sass');

    //Time how much task takes. Can help when optimizing build times
    require('time-grunt')(grunt);
    
    //Automatically loads required grunt tasks
    require('jit-grunt')(grunt);

    //Define the configuration for all the tasks
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css' : 'css/styles.scss'
                }
            },
            options: {
                implementation: sass,
                sourceMap: true
            }
        },
        watch: {
            files : 'css/*.scss',
            tasks: ['sass']
        },
        browserSync : {
            dev : {
                bsFiles : {
                    src : [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options : {
                    watchTask : true,
                    server : {
                        baseDir : './'
                    }
                }
            }
        }
    });
    grunt.registerTask('css',['sass']);

    grunt.registerTask('default',['browserSync','watch']);
};