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