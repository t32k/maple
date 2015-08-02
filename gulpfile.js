var gulp = require('gulp');
var cssnext = require("gulp-cssnext");
var browserSync = require('browser-sync').create();

// cssnext
gulp.task("css", function () {
  gulp.src('assets/css/maple.css')
    .pipe(cssnext({
      browsers: ['last 2 versions'],
      compress: false
    }))
    .pipe(gulp.dest('public/files/css/'));
});