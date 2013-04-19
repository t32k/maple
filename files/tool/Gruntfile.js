'use strict';
var path = require('path');
var lrSnippet = require('grunt-contrib/node_modules/grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function(grunt) {

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
          {src: ['../css/app.css'], dest: '../css/app.min.css'}
        ]
      }
    },
    // Minify files with UglifyJS.
    uglify: {

    },
    // Run tasks whenever watched files change.
    watch: {

    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-csso');

  // Default task.
  grunt.registerTask('default', ['']);

  // Indivisual Tasks.
  grunt.registerTask('kj', ['livereload-start', 'connect', 'regarde']);
  grunt.registerTask('css', ['compass', 'copy', 'csso']);
};