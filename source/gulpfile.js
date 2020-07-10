'use strict';

// Project: Gulp Starter (Wordpress version)
// Project URI: https://github.com/GrafSoul/gulp-starter-wordpress
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Gulp Starter (Wordpress version) - Project builder for web development.
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/GrafSoul , http://networkroom.ru

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
        path: '../',
    },
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
const php = require('./tasks/php')(gulp, plugins, config, browserSync, errors);

// Title
// =========================================================================
const title = require('./tasks/title')(
    gulp,
    plugins,
    config,
    browserSync,
    errors,
);

// Title
// =========================================================================
const preview = require('./tasks/preview')(
    gulp,
    plugins,
    config,
    browserSync,
    errors,
);

// Fonts
// =========================================================================
const fonts = require('./tasks/fonts')(
    gulp,
    plugins,
    config,
    browserSync,
    errors,
);

// JS
// =========================================================================
const js = require('./tasks/js')(gulp, plugins, config, browserSync, errors);

// SASS
// =========================================================================
const sass = require('./tasks/sass')(
    gulp,
    plugins,
    config,
    browserSync,
    errors,
);

// Images - Minimizing
// =========================================================================
const imageMin = require('./tasks/imagemin')(
    gulp,
    plugins,
    config,
    browserSync,
    errors,
);

// Images - PNG Sprite
// =========================================================================
const pngSprite = require('./tasks/pngsprite')(gulp, plugins, config);

// Images - SVG Sprite
// =========================================================================
const svgSprite = require('./tasks/svgsprite')(gulp, plugins, config);

// Server
// =========================================================================
const server = require('./tasks/server')(browserSync, config);

// Watch
// =========================================================================
function watch_files(done) {
    gulp.watch(config.input.sassfiles, gulp.series(sass));
    gulp.watch(config.input.php, gulp.series(php));
    gulp.watch(config.input.title, gulp.series(title));
    gulp.watch(config.input.preview, gulp.series(preview));
    gulp.watch(config.input.js, gulp.series(js));
    gulp.watch(config.input.fonts, gulp.series(fonts));
    gulp.watch(config.input.images, gulp.series(imageMin));
    gulp.watch(config.input.pngSprite, gulp.series(pngSprite));
    gulp.watch(config.input.svgSprite + '*.*', gulp.series(svgSprite));
    done();
}
// Watch default
// =========================================================================
gulp.task(
    'default',
    gulp.parallel(
        php,
        title,
        preview,
        fonts,
        imageMin,
        pngSprite,
        svgSprite,
        sass,
        js,
        server,
        watch_files,
    ),
);
