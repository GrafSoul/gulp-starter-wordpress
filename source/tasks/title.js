// Project: Gulp Starter (Wordpress version)
// Project URI: https://github.com/GrafSoul/gulp-starter-wordpress
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Gulp Starter (Wordpress version) - Project builder for web development.
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/GrafSoul , http://networkroom.ru

// =========================================================================
// Title
// =========================================================================

module.exports = function (gulp, plugins, config, browserSync, errors) {
    return function title(done) {
        gulp.src(config.input.title)
            .pipe(plugins.plumber({ errorHandler: errors }))
            .pipe(plugins.plumber.stop())
            .pipe(gulp.dest(config.output.path))
            .pipe(plugins.filesize())
            .pipe(browserSync.stream());
        done();
    };
};
