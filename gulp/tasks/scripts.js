module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src([
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/foundation-sites/js/foundation.core.js',
                './node_modules/foundation-sites/js/foundation.util.mediaQuery.js',
                './node_modules/foundation-sites/js/foundation.abide.js',
                './node_modules/foundation-sites/js/foundation.accordion.js',
                './node_modules/foundation-sites/js/foundation.drilldown.js',
                './node_modules/foundation-sites/js/foundation.dropdown.js',
                './node_modules/foundation-sites/js/foundation.dropdownMenu.js',
                './node_modules/foundation-sites/js/foundation.equalizer.js',
                './node_modules/foundation-sites/js/foundation.interchange.js',
                './node_modules/foundation-sites/js/foundation.magellan.js',
                './node_modules/foundation-sites/js/foundation.offcanvas.js',
                './node_modules/foundation-sites/js/foundation.orbit.js',
                './node_modules/foundation-sites/js/foundation.plugin.js',
                './node_modules/foundation-sites/js/foundation.positionable.js',
                './node_modules/foundation-sites/js/foundation.responsiveAccordionTabs.js',
                './node_modules/foundation-sites/js/foundation.responsiveMenu.js',
                './node_modules/foundation-sites/js/foundation.responsiveToggle.js',
                './node_modules/foundation-sites/js/foundation.reveal.js',
                './node_modules/foundation-sites/js/foundation.slider.js',
                './node_modules/foundation-sites/js/foundation.smoothScroll.js',
                './node_modules/foundation-sites/js/foundation.sticky.js',
                './node_modules/foundation-sites/js/foundation.tabs.js',
                './node_modules/foundation-sites/js/foundation.toggler.js',
                './node_modules/foundation-sites/js/foundation.tooltip.js',
                './node_modules/foundation-sites/js/foundation.util.box.js',
                './node_modules/foundation-sites/js/foundation.util.core.js',
                './node_modules/foundation-sites/js/foundation.util.imageLoader.js',
                './node_modules/foundation-sites/js/foundation.util.keyboard.js',
                './node_modules/foundation-sites/js/foundation.util.motion.js',
                './node_modules/foundation-sites/js/foundation.util.nest.js',
                './node_modules/foundation-sites/js/foundation.util.timer.js',
                './node_modules/foundation-sites/js/foundation.util.touch.js',
                './node_modules/foundation-sites/js/foundation.util.triggers.js',
                './node_modules/svg4everybody/dist/svg4everybody.min.js'
            ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src([
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/foundation-sites/js/foundation.core.js',
                './node_modules/foundation-sites/js/foundation.util.mediaQuery.js',
                './node_modules/foundation-sites/js/foundation.abide.js',
                './node_modules/foundation-sites/js/foundation.accordion.js',
                './node_modules/foundation-sites/js/foundation.drilldown.js',
                './node_modules/foundation-sites/js/foundation.dropdown.js',
                './node_modules/foundation-sites/js/foundation.dropdownMenu.js',
                './node_modules/foundation-sites/js/foundation.equalizer.js',
                './node_modules/foundation-sites/js/foundation.interchange.js',
                './node_modules/foundation-sites/js/foundation.magellan.js',
                './node_modules/foundation-sites/js/foundation.offcanvas.js',
                './node_modules/foundation-sites/js/foundation.orbit.js',
                './node_modules/foundation-sites/js/foundation.plugin.js',
                './node_modules/foundation-sites/js/foundation.positionable.js',
                './node_modules/foundation-sites/js/foundation.responsiveAccordionTabs.js',
                './node_modules/foundation-sites/js/foundation.responsiveMenu.js',
                './node_modules/foundation-sites/js/foundation.responsiveToggle.js',
                './node_modules/foundation-sites/js/foundation.reveal.js',
                './node_modules/foundation-sites/js/foundation.slider.js',
                './node_modules/foundation-sites/js/foundation.smoothScroll.js',
                './node_modules/foundation-sites/js/foundation.sticky.js',
                './node_modules/foundation-sites/js/foundation.tabs.js',
                './node_modules/foundation-sites/js/foundation.toggler.js',
                './node_modules/foundation-sites/js/foundation.tooltip.js',
                './node_modules/foundation-sites/js/foundation.util.box.js',
                './node_modules/foundation-sites/js/foundation.util.core.js',
                './node_modules/foundation-sites/js/foundation.util.imageLoader.js',
                './node_modules/foundation-sites/js/foundation.util.keyboard.js',
                './node_modules/foundation-sites/js/foundation.util.motion.js',
                './node_modules/foundation-sites/js/foundation.util.nest.js',
                './node_modules/foundation-sites/js/foundation.util.timer.js',
                './node_modules/foundation-sites/js/foundation.util.touch.js',
                './node_modules/foundation-sites/js/foundation.util.triggers.js',
                'node_modules/svg4everybody/dist/svg4everybody.min.js'
            ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/static/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['./dev/static/js/*.js',
                '!./dev/static/js/libs.min.js'
            ])
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};