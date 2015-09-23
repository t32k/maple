var gulp = require('gulp');
var browserSync = require('browser-sync');
var postcss = require('gulp-postcss');
var processors = [
  require('postcss-import'),
  require('postcss-custom-properties'),
  require('postcss-calc'),
  require('autoprefixer')({browsers: ['last 2 version']}),
  require('cssnano'),
  require('stylelint')({
    "rules": {
      "string-quotes": [2, "double"],
      "block-no-empty": 2,
      "color-hex-case": [2, "lower"],
      "selector-no-id": 2
    }
  }),
  require('postcss-reporter')({
    clearMessages: true
  })
];

gulp.task('css', function () {
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