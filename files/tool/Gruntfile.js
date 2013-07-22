module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    // Start a static web server. 
    connect: {
      // Reload assets live in the browser
      livereload: {
        options: {
          port: 8000,
          base: '../../'
        }
      }
    },
    // Compile Compass to CSS. 
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    // Minify CSS files with CSSO.
    csso: {
      app: {
        options: {
          banner: '/*\n * Maple.css\n *\n * Copyright 2013 Koji Ishimoto\n * Licensed under the MIT License\n *\n * Designed by @t32k\n */\n'
        },
        files: {
          '../css/maple.min.css': ['../css/maple.css']
        }
      }
    },
    // Validate files with JSHint.
    jshint: {
   
    },
    // Concatenate files.
    concat: {

    },
    // Minify files with UglifyJS.
    uglify: {

    },
    // Run tasks whenever watched files change.
    watch: {
      css: {
        files: ['../css/**/*.scss'],
        tasks: ['compass', 'csso']
      }
    },
    webfont: {
      icons: {
        src: '../font/svg/*.svg',
        dest: '../font/',
        destCss: '../font/',
        options: {
          font: 'maple',
          types: ['woff','ttf'],
          stylesheet: 'scss',
          htmlDemo: false,
          syntax: 'bootstrap'
        }
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-webfont');

  // Default task.
  grunt.registerTask('default', ['']);

  // Indivisual Tasks.
  grunt.registerTask('develop', ['connect', 'watch']);
  grunt.registerTask('minify', ['compass', 'csso']);
};