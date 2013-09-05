module.exports = function(grunt) {
  'use strict';
  var os = require('os'),
      isWindows = os.platform().indexOf('win'),
      tasks;

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Start a static web server. 
    connect: {
      // Reload assets live in the browser
      dist: {
        options: {
          port: 8080,
          base: '../'
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
        src: ['../files/css/maple.css']
      }
    },
    // Minify CSS files with CSSO.
    csso: {
      dist: {
        options: {
          banner: '/*\n * Maple.css\n *\n * Copyright 2013 Koji Ishimoto\n * Licensed under the MIT License\n *\n * Designed by @t32k\n */\n'
        },
        files: {
          '../files/css/maple.min.css': ['../files/css/maple.css']
        }
      }
    },
    // Sort CSS properties in specific order.
    csscomb: {
      dist: {
        files: {
          '../files/css/maple.resort.css': ['../files/css/maple.css']
        }
      }
    },
    // Make ImageOptim, ImageAlpha and JPEGmini part of your automated build process
    imageoptim: {
      options: {
        // also run images through ImageAlpha.app before ImageOptim.app
        imageAlpha: false,
        // also run images through JPEGmini.app after ImageOptim.app
        jpegMini: false,
        // quit all apps after optimisation
        quitAfter: true
      },
      files: [
        '../files/img/sprite/'
      ],
    },
    // KSS styleguide generator for grunt.
    kss: {
      options: {
        includeType: 'css',
        includePath: '../files/css/maple.css',
        template: '../docs/template'
      },
      dist: {
        files: {
          // dest : src
          '../docs/': ['../files/css/sass']
        }
      }
    },
    // Run shell commands.
    shell: {
      open: {
        command: 'open http://localhost:8080/components/'
      }
    },
    // Run tasks whenever watched files change.
    watch: {
      options: {
        livereload: true
      },
      dist: {
        files: ['../files/css/**/*.scss','../components/*.html'],
        tasks: ['compass', 'csso']
      }
    },
    // SVG to webfont converter for Grunt.
    webfont: {
      dist: {
        src: '../files/font/svg/*.svg',
        dest: '../files/font/',
        destCss: '../files/css/sass/libs/',
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
  grunt.loadNpmTasks('grunt-kss');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['develop']);

  // Indivisual Tasks.
  // Delete `shell` task when you use on Windows OS.
  tasks = (!isWindows) ? ['connect', 'watch'] : ['connect', 'shell:open', 'watch'];

  grunt.registerTask('develop', tasks);
  grunt.registerTask('typeset', ['webfont', 'compass']);
  grunt.registerTask('publish', ['csslint', 'compass', 'kss']);
  grunt.registerTask('build', ['csslint', 'compass', 'csso', 'imageoptim']);
};
