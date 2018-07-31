module.exports = function () {
    $.gulp.task('libsJS:src', () => {
        return $.gulp.src([
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/svg4everybody/dist/svg4everybody.min.js'
            ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/assets/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src([
                './node_modules/jquery/dist/jquery.min.js',
                'node_modules/svg4everybody/dist/svg4everybody.min.js'
            ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/assets/js/'));
    });

    /*$.gulp.task('js:copy', () => {
        return $.gulp.src(['./src/assets/js/!*.js',
                '!./src/assets/js/libs.min.js'
            ])
            .pipe($.gulp.dest('./build/assets/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });*/
    $.gulp.task('webpack', ()=>{
      return $.gulp.src('src/assets/js/main.js')
        .pipe($.gp.webpack($.webpackConfig, $.webpack))
        .pipe($.gulp.dest('build/assets/js/'))
    });
};