var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var cssnext = require("gulp-cssnext");


// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("css", function() {
  gulp.src("assets/css/maple.css")
    .pipe(cssnext({
      compress: false
    }))
    .pipe(gulp.dest("public/files/css/"));
});

gulp.task("csss", function () {

  var postcss = require("gulp-postcss")
  var stylelint = require("stylelint")
  var reporter = require("postcss-reporter")

  return gulp.src("src/**/*.css")
    .pipe(postcss([
      stylelint({ // an example config that has four rules
        "rules": {
          "color-no-invalid-hex": 2,
          "declaration-colon-space-before": [2, "never"],
          "indentation": [2, "tab"],
          "number-leading-zero": [2, "always"]
        }
      }),
      reporter({
        clearMessages: true,
      })
    ]))
})