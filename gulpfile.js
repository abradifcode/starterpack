global.$ = {
  path: {
    task: require('./gulp/paths/tasks.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  fs: require('fs'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  webpack: require('webpack'),
  webpackConfig: require('./webpack.config.js')
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});


$.gulp.task('src', $.gulp.series(
  'clean',
  $.gulp.parallel('styles:src',  'pug', 'libsJS:src', 'webpack', 'svg', 'img:src', 'fonts')));
/*$.gulp.task('src', $.gulp.series(
  'clean',
  $.gulp.parallel('styles:src',  'pug', 'webpack', 'svg', 'img:src', 'fonts', 'fafonts')));*/

/*$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel('styles:build',  'pug', 'webpack', 'svg', 'img:build', 'fonts', 'fafonts')));*/
$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel('styles:build',  'pug', 'libsJS:build', 'webpack', 'svg', 'img:build', 'fonts')));


$.gulp.task('default', $.gulp.series(
  'src',
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
