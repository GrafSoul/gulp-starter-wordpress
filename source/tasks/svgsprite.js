// Project: Frontend Builder (Wordpress version)
// Project URI: https://github.com/Xgraf/frontend-builder-wordpress
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Frontend Builder (Wordpress version) - Project builder for web development.
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/Xgraf , http://networkroom.ru

// =========================================================================
// Images - SVG Sprite
// =========================================================================

const configSvg = {
	svg : {
		xmlDeclaration: false,
		doctypeDeclaration: false
	},
	shape: {
		dimension: {
			maxWidth: 32,
			maxHeight: 32
		},
		spacing: {
			padding: 10
		}
	},
	variables: {
		mapname: "icons"
	},
	mode: {
		css: {
			bust: false,
			dest: '../template/sass/base/',
			sprite: 'spritesvg.svg',
			render: {
				scss: {
					dest: "_spritesvg.scss",
				}
			},
		},
		view: {
			bust: false,
			dest: './',
			sprite: 'spritesvg.svg',
			render: {
				scss: false
			}
		},
	}
};

module.exports = function (gulp, plugins, config) {
	return function () {
		gulp.src('**/*.svg', { cwd: config.input.svgSprite })
			.pipe(plugins.svgSprite(configSvg))
			.pipe(gulp.dest(config.output.path + '/images/template/'));
	};
};
