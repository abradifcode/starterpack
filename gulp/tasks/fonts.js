module.exports = function() {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./src/assets/fonts/**/*.*')
            .pipe($.gulp.dest('./build/assets/fonts/'));
    });
};
