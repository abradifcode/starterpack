'use strict';

module.exports = function () {
  $.gulp.task('fafonts', () => {
    return $.gulp.src('./node_modules/font-awesome/fonts/fontawesome-webfont.*')
      .pipe($.gulp.dest('./build/assets/fonts/'));
  });
};