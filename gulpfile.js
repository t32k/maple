var gulp = require('gulp');
var watch = require('gulp-watch');
var cssnext = require("gulp-cssnext");
var browserSync = require('browser-sync').create();

var postcss = require("gulp-postcss")
var stylelint = require("stylelint")
var reporter = require("postcss-reporter")


gulp.task('css', function () {
  gulp.src('css/maple.css')
    .pipe(cssnext({
      browsers: ['last 2 versions'],
      compress: false
    }))
    .pipe(gulp.dest('public/files/css/'));
});

gulp.task('watch', function(){
  gulp.watch('/css/**/*.css', ['css']);
});

gulp.task('default', ['watch']);