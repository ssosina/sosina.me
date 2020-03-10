/* Gulp is simply a build took */

// const gulp = require('gulp');
const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//Compile SCSS into CSS
function style() {
	// 1. Find SCSS file
	return (
		src('./scss/**/*.scss')
			// 2. Pass through sass compiler
			.pipe(sass())
			.on('error', sass.logError)
			// 3. Where do save compiled css
			.pipe(dest('./css'))
			// 4. Stream changes to all browsers
			.pipe(browserSync.stream())
	);
}

// Watch for changes and make updates
function watchFiles() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	watch('./scss/**/*.scss', style);
	watch('./*.html').on('change', browserSync.reload);
	watch('./scripts/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watchFiles = watchFiles;
exports.default = series(style, watchFiles);
