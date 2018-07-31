module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./src/assets/styles/**/*.sass', $.gulp.series('styles:src'));
        $.gulp.watch('./src/assets/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./src/assets/js/**/*.js', $.gulp.series('webpack'));
        $.gulp.watch(['./src/assets/img/general/**/*.*',
                     './src/assets/img/content/**/*.*'], $.gulp.series('img:src'));
    });
};
