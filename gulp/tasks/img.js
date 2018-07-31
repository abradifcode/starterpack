module.exports = function () {
  $.gulp.task('img:src', () => {
    return $.gulp.src('./src/assets/img/**/*.*')
      .pipe($.gulp.dest('./build/assets/img/'));
  });

  $.gulp.task('img:build', () => {
    return $.gulp.src('./src/assets/img/**/*.*')
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest('./build/assets/img/'));
  });
};
