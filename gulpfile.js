var gulp = require('gulp');
var cssnext = require('gulp-cssnext');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');


gulp.task('css', function () {
    gulp.src('src/css/maple.css')
        .pipe(cssnext({
            browsers: ['last 2 versions'],
            compress: false
        }))
        .pipe(postcss([
            stylelint({
                'rules': {
                    'block-no-empty': 2
                }
            }),
            reporter({
                clearMessages: true
            })
        ]))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: 'dist/',
        open: false
    });
    gulp.watch('src/css/**/*.css', ['css']);
    gulp.watch('dist/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);