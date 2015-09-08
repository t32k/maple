var gulp = require('gulp');
var browserSync = require('browser-sync');
var postcss = require('gulp-postcss');
var atImport = require('postcss-import');
var customProps = require('postcss-custom-properties');
var calc = require('postcss-calc');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');


gulp.task('css', function () {
    var processors = [
        atImport(),
        customProps(),
        calc(),
        autoprefixer({browsers: ['last 2 version']}),
        cssnano()
    ];
    return gulp.src('./src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest/css'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: 'dest/',
        open: false
    });
    gulp.watch('src/css/**/*.css', ['css']);
    gulp.watch('dest/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);