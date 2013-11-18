module.exports = (grunt) ->
  'use strict'

  # Project configuration.
  grunt.initConfig
    # Metadata.
    pkg: grunt.file.readJSON 'package.json'

    # Parse CSS and add vendor-prefixed CSS properties using the Can I Use database.
    autoprefixer:
      options:
        browsers: ['ios >= 5', 'android >= 2.3']
      dist:
        src: 'files/css/maple.css'

    # Start a static web server.
    # Reload assets live in the browser
    connect:
      dist:
        options:
          port: 8080
          open: 'http://localhost:8080/components/'

    # Sort CSS properties in specific order.
    csscomb:
      dist:
        files:
          'files/css/maple.css': ['files/css/maple.css']

    # Lint CSS files.
    csslint:
      dist:
        options:
          csslintrc: '.csslintrc'
        src: ['files/css/maple.css']

    # Minify CSS files with CSSO.
    csso:
      dist:
        options:
          banner: """
          /*
           * Maple.css
           * Copyright 2013 Koji Ishimoto
           * Licensed under the MIT License
           */

          """
        files:
          'files/css/maple.min.css': ['files/css/maple.css']

    # Make ImageOptim, ImageAlpha and JPEGmini part of your automated build process
    imageoptim:
      options:
        imageAlpha: false
        jpegMini: false
        quitAfter: true
      dist:
        src: ['files/img/sprite']

    # KSS styleguide generator for grunt.
    kss:
      options:
        includeType: 'css'
        includePath: 'files/css/maple.css'
        template: 'docs/template'
      dist:
        files:
          # dest : src
          'docs/': ['files/css/sass']

    # Grunt plugin to run Google PageSpeed Insights as part of CI
    pagespeed:
      options:
        key: 'YOUR_API_KEY'
        url: 'http://t32k.me'
      dist:
        paths: ['/', '/mol/']
        locale: 'en_US'
        strategy: 'mobile'
        threshold: 80

    # Grunt task to compile Sass SCSS to CSS
    sass:
      dist:
        files:
          'files/css/maple.css': 'files/css/sass/maple.scss'

    # Grunt task for creating spritesheets and their coordinates
    sprite:
      dist:
        src: 'files/img/sprite/tabs/*.png'
        destImg: 'files/img/sprite/tabs.png'
        imgPath: '/files/img/sprite/tabs.png'
        destCSS: 'files/css/sass/libs/_sprite.scss'
        algorithm: 'binary-tree'
        padding: 2
        cssTemplate: 'files/img/sprite/spritesmith.mustache'
        # cssOpts: { functions: false }

    # Run tasks whenever watched files change.
    watch:
      options:
        livereload: true
      css:
        files: ['files/css/**/*.scss', '../components/*.html']
        tasks: ['stylesheet']
      sprite:
        files: ['files/img/sprite/*/*.png']
        tasks: ['sprite']

    # SVG to webfont converter for Grunt.
    webfont:
      dist:
        src: 'files/font/svg/*.svg'
        dest: 'files/font/'
        destCss: 'files/css/sass/libs/'
        options:
          font: 'myfont'
          types: ['woff', 'ttf']
          stylesheet: 'scss'
          htmlDemo: false
          syntax: 'bootstrap'
          relativeFontPath: 'files/font/'

  # Load the plugins.
  grunt.loadNpmTasks 'grunt-kss'
  grunt.loadNpmTasks 'grunt-sass'
  grunt.loadNpmTasks 'grunt-csso'
  grunt.loadNpmTasks 'grunt-csscomb'
  grunt.loadNpmTasks 'grunt-webfont'
  grunt.loadNpmTasks 'grunt-pagespeed'
  grunt.loadNpmTasks 'grunt-imageoptim'
  grunt.loadNpmTasks 'grunt-spritesmith'
  grunt.loadNpmTasks 'grunt-autoprefixer'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-csslint'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  # Tasks.
  grunt.registerTask 'default', ['develop']
  grunt.registerTask 'stylesheet', ['sass', 'autoprefixer', 'csscomb', 'csslint']
  grunt.registerTask 'develop', ['connect', 'watch']
  grunt.registerTask 'typeset', ['webfont', 'stylesheet']
  grunt.registerTask 'publish', ['stylesheet', 'kss']
  grunt.registerTask 'build', ['stylesheet', 'csso', 'imageoptim']
