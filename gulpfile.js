var gulp = require('gulp');
var browserSync = require('browser-sync');
var postcss = require('gulp-postcss');
var atImport = require('postcss-import');
var customProperties = require('postcss-custom-properties');
var calc = require('postcss-calc');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');


gulp.task('css', function () {
    var processors = [
        atImport(),
        customProperties(),
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
        server: 'dist/',
        open: false
    });
    gulp.watch('src/css/**/*.css', ['css']);
    gulp.watch('dist/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);