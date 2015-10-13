var gulp = require('gulp');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var postcss = require('gulp-postcss');
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

var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');

// Clean Dir
gulp.task('clean', function () {
  del(['dest/js', 'dest/css']).then(function (paths) {
    console.log('Deleted files/folders:\n', paths.join('\n'));
  });
});

// JavaScript Task
gulp.task('js', function () {
  return gulp.src('src/js/app.js')
    .pipe(sourcemaps.init())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dest/js'));
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
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.css', ['css']);
  gulp.watch('dest/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
gulp.task('build', ['js', 'css']);
