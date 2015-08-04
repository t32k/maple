var gulp = require('gulp');
var cssnext = require('gulp-cssnext');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');


gulp.task('css', function () {
    gulp.src('css/maple.css')
        .pipe(cssnext({
            browsers: ['last 2 versions'],
            compress: false
        }))
        .pipe(gulp.dest('public/files/css/'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: "public/"
    });
    gulp.watch('/css/**/*.css', ['css']);
    gulp.watch('public/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);