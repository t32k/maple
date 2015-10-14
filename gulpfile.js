var gulp = require('gulp');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var postcss = require('gulp-postcss');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var del = require('del');
var processors = [
  require('postcss-import'),
  require('postcss-custom-properties'),
  require('postcss-calc'),
  require('autoprefixer')({browsers: ['last 2 version']}),
  require('cssnano'),
  require('stylelint')(),
  require('postcss-reporter')({
    clearMessages: true
  })
];

// Thanks @danharper, https://gist.github.com/danharper/3ca2273125f500429945
function compile(watch) {
  var bundler = watchify(browserify('src/js/app.js', {debug: true}).transform(babelify));

  function rebundle() {
    bundler.bundle()
      .on('error', function (err) {
        console.error(err);
        this.emit('end');
      })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('dest/js'));
  }

  if (watch) {
    bundler.on('update', function () {
      console.log('-> bundling...');
      rebundle();
    });
  }
  rebundle();
}
function watch() {
  return compile(true);
}

gulp.task('build:js', function () {
  return compile();
});
gulp.task('watch:js', function () {
  return watch();
});

// Clean Dir
gulp.task('clean', function () {
  del(['dest/js', 'dest/css']).then(function (paths) {
    console.log('Deleted files/folders:\n', paths.join('\n'));
  });
});

// JavaScript Task
gulp.task('lint:js', function () {
  return gulp.src('src/js/app.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

// CSS Task
gulp.task('css', function () {
  return gulp.src('src/css/maple.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dest/css'));
});

gulp.task('serve', function () {
  browserSync.init({
    server: 'dest/',
    open: false
  });
  gulp.watch('src/**/*.js', ['lint:js', 'watch:js']);
  gulp.watch('src/**/*.css', ['css']);
  gulp.watch('dest/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
gulp.task('build', ['js', 'css']);
