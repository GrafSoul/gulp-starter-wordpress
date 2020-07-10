'use strict';

// Project: Frontend Builder (Wordpress version)
// Project URI: https://github.com/Xgraf/frontend-builder-wordpress
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Frontend Builder (Wordpress version) - Project builder for web development.
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/Xgraf , http://networkroom.ru

// =========================================================================
// Config
// =========================================================================
const config = {
	develop: true,
	zipname: 'project-dist.zip',
	input: {
		js: './template/js/**/*.js',
		sass: './template/sass/main.scss',
		sassfiles: './template/sass/**/*.scss',
		php: './template/php/**/*.php',
		title: './template/title/**/*.*',
		preview: './template/preview/**/*.*',
		fonts: './template/fonts/**/*.*',
		images: './template/images/**/*.*',
		pngSprite: './template/images/for_png_sprite/*.*',
		svgSprite: './template/images/for_svg_sprite/',
		sassPngSprite: './template/sass/base',
	},
	output: {
		path: '../'
	}
};

// =========================================================================
// Add Gulp and Gulp plugins
// =========================================================================
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();

// =========================================================================
// Errors
// =========================================================================
const errors = (err) => {
	console.log(err);
	this.emit('end');
};

// =========================================================================
// Tasks
// =========================================================================

// PHP
// =========================================================================
gulp.task('php', require('./tasks/php')(gulp, plugins, config, browserSync, errors));

// Title
// =========================================================================
gulp.task('title', require('./tasks/title')(gulp, plugins, config, browserSync, errors));

// Title
// =========================================================================
gulp.task('preview', require('./tasks/preview')(gulp, plugins, config, browserSync, errors));

// Fonts
// =========================================================================
gulp.task('fonts', require('./tasks/fonts')(gulp, plugins, config, browserSync, errors));

// JS
// =========================================================================
gulp.task('js', require('./tasks/js')(gulp, plugins, config, browserSync, errors));

// SASS
// =========================================================================
gulp.task('sass', require('./tasks/sass')(gulp, plugins, config, browserSync, errors));

// Images - Minimizing
// =========================================================================
gulp.task('imagemin', require('./tasks/imagemin')(gulp, plugins, config, browserSync, errors));

// Images - PNG Sprite
// =========================================================================
gulp.task('pngsprite', require('./tasks/pngsprite')(gulp, plugins, config));

// Images - SVG Sprite
// =========================================================================
gulp.task('svgsprite', require('./tasks/svgsprite')(gulp, plugins, config));

// Server
// =========================================================================
gulp.task('server', require('./tasks/server')(gulp, browserSync, config));

// Watch default
// =========================================================================
gulp.task('default', [
	'php',
	'title',
	'preview',
	'fonts',
	'imagemin',
	'pngsprite',
	'svgsprite',
	'sass',
	'js',
	'server'
]);
