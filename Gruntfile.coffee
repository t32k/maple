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
        src: 'app/files/css/maple.css'

    # Start a static web server.
    # Reload assets live in the browser
    connect:
      app:
        options:
          port: 8080
          base: 'app/'
          open: 'http://localhost:8080/'
      doc:
        options:
          port: 8081
          base: 'doc/'
          open: 'http://localhost:8081/'

    # Grunt task that runs CSSCSS, a CSS redundancy analyzer.
    csscss:
      dist:
        src: ['app/files/css/maple.css']

    # Sort CSS properties in specific order.
    csscomb:
      dist:
        options:
          config: '.csscombrc'
        files:
          'app/files/css/maple.css': ['app/files/css/maple.css']

    # Lint CSS files.
    csslint:
      dist:
        options:
          csslintrc: '.csslintrc'
        src: ['app/files/css/maple.css']

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
          'app/files/css/maple.min.css': ['app/files/css/maple.css']

    # Make ImageOptim, ImageAlpha and JPEGmini part of your automated build process
    imageoptim:
      options:
        imageAlpha: false
        jpegMini: false
        quitAfter: true
      dist:
        src: ['app/files/img/sprite']

    # KSS styleguide generator for grunt.
    kss:
      options:
        includeType: 'css'
        includePath: 'app/files/css/maple.css'
        template: 'doc/template'
      dist:
        files:
          # dest : src
          'doc/': ['app/files/css/sass']

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
          'app/files/css/maple.css': 'app/files/css/sass/maple.scss'

    # Grunt task for creating spritesheets and their coordinates
    sprite:
      dist:
        src: 'app/files/img/sprite/tabs/*.png'
        destImg: 'app/files/img/sprite/tabs.png'
        imgPath: '/files/img/sprite/tabs.png'
        destCSS: 'app/files/css/sass/libs/_sprite.scss'
        algorithm: 'binary-tree'
        padding: 2
        cssTemplate: 'app/files/img/sprite/spritesmith.mustache'
        # cssOpts: { functions: false }

    # A grunt task for removing unused CSS from your project builds
    uncss:
      dist:
        files:
          'app/files/css/tidy.css': ['app/index.html']

    # Run tasks whenever watched files change.
    watch:
      options:
        livereload: true
      css:
        files: ['app/files/css/**/*.scss', 'app/components/*.html']
        tasks: ['stylesheet']
      sprite:
        files: ['app/files/img/sprite/*/*.png']
        tasks: ['sprite']

    # SVG to webfont converter for Grunt.
    webfont:
      dist:
        src: 'app/files/font/svg/*.svg'
        dest: 'app/files/font/'
        destCss: 'app/files/css/sass/libs/'
        options:
          font: 'myfont'
          types: ['woff', 'ttf']
          stylesheet: 'scss'
          htmlDemo: false
          syntax: 'bootstrap'
          relativeFontPath: 'app/files/font/'

  # Load the plugins.
  grunt.loadNpmTasks 'grunt-uncss'
  grunt.loadNpmTasks 'grunt-kss'
  grunt.loadNpmTasks 'grunt-sass'
  grunt.loadNpmTasks 'grunt-csso'
  grunt.loadNpmTasks 'grunt-csscss'
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
  grunt.registerTask 'develop', ['connect:app', 'watch']
  grunt.registerTask 'typeset', ['webfont', 'stylesheet']
  grunt.registerTask 'publish', ['stylesheet', 'kss']
  grunt.registerTask 'build', ['stylesheet', 'csso', 'imageoptim']
