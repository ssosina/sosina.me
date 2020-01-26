/* Gulp is simply a build took */

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//Compile SCSS into CSS
function style() {
	// 1. Find SCSS file
	return (
		gulp
			.src('./scss/**/*.scss')
			// 2. Pass through sass compiler
			.pipe(sass())
			.on('error', sass.logError)
			// 3. Where do save compiled css
			.pipe(gulp.dest('./css'))
			// 4. Stream changes to all browsers
			.pipe(browserSync.stream())
	);
}

// Watch for changes and make updates
function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./scss/**/*.scss', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./scripts/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
