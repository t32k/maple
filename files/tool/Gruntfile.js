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
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, '../../')]
          }
        }
      }
    },
    // Configuration to be run (and then tested)
    regarde: {
      fred: {
        files: ['../css/**/*.scss'],
        tasks: ['compass','livereload']
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
    csso: {
      app: {
        files: [
          {src: ['../css/app.min.css'], dest: '../css/app.min.css'}
        ]
      }
    },
    // Validate files with JSHint.
    jshint: {
   
    },
    // Concatenate files.
    concat: {

    },
    // Copy files and folders.
    copy: {
      css: {
        files: [
          {src: ['../css/maple.css'], dest: '../css/maple.min.css'}
        ]
      },
      js: {
        files: [
          {src: ['../js/app.js'], dest: '../js/app.min.js'}
        ]
      }
    },
    // Minify files with UglifyJS.
    uglify: {

    },
    // Run tasks whenever watched files change.
    watch: {

    },
    webfont: {
      icons: {
        src: '../font/svg/*.svg',
        dest: '../font/',
        destCss: '../font/',
        options: {
          font: 'petpic',
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
  grunt.registerTask('develop', ['livereload-start', 'connect', 'watch']);
  grunt.registerTask('minify', ['compass', 'copy:css', 'csso']);
};