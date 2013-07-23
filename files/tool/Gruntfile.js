module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Start a static web server. 
    connect: {
      // Reload assets live in the browser
      livereload: {
        options: {
          port: 8080,
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
    // Lint CSS files.
    csslint: {
      dist: {
        options: {
          csslintrc: '.csslintrc'
        },
        src: ['../css/maple.css']
      }
    },
    // Minify CSS files with CSSO.
    csso: {
      dist: {
        options: {
          banner: '/*\n * Maple.css\n *\n * Copyright 2013 Koji Ishimoto\n * Licensed under the MIT License\n *\n * Designed by @t32k\n */\n'
        },
        files: {
          '../css/maple.min.css': ['../css/maple.css']
        }
      }
    },
    // Run tasks whenever watched files change.
    watch: {
      dist: {
        files: ['../css/**/*.scss'],
        tasks: ['compass', 'csso']
      }
    },
    // SVG to webfont converter for Grunt.
    webfont: {
      dist: {
        src: '../font/svg/*.svg',
        dest: '../font/',
        destCss: '../css/sass/core/',
        options: {
          font: 'myfont',
          types: ['woff','ttf'],
          stylesheet: 'scss',
          htmlDemo: false,
          syntax: 'bootstrap',
          relativeFontPath: '/files/font/'
        }
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['']);

  // Indivisual Tasks.
  grunt.registerTask('develop', ['connect', 'watch']);
  grunt.registerTask('minify', ['csslint', 'compass', 'csso']);
};