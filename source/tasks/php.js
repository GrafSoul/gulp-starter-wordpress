// Project: Frontend Builder (Wordpress version)
// Project URI: https://github.com/Xgraf/frontend-builder-wordpress
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Frontend Builder (Wordpress version) - Project builder for web development.
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/Xgraf , http://networkroom.ru

// =========================================================================
// PHP
// =========================================================================

module.exports = function (gulp, plugins, config, browserSync, errors) {
	return function () {
		gulp.src(config.input.php)
			.pipe(plugins.plumber({errorHandler: errors}))
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest(config.output.path))
			.pipe(plugins.filesize())
			.pipe(browserSync.stream());
	};
};
