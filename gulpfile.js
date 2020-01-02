var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var log = require('fancy-log');
var browserSync = require('browser-sync').create();

// Remove pre-existing content from output folders
var cleanDist = function(done) {

	// Clean the dist folder
	// del.sync([
	// 	'build/'
	// ]);

	return done();
};

var buildHtml = function(done) {
    return gulp.src('src/views/*.html')
        .pipe(gulp.dest('build'))
}

var buildStyles = function(done) {
    return gulp.src('src/views/css/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
}

var startServer = function(done) {
	browserSync.init({
		server: {
			baseDir: 'build/'
		}
	});
	done();
};

// Reload the browser when files change
var reloadBrowser = function (done) {
	browserSync.reload();
	done();
};

var watchSource = function (done) {
	gulp.watch('src/**/*.*', gulp.series(exports.default, reloadBrowser));
	done();
};

/**
 * Export Tasks
 */

// Default task
// gulp
exports.default = gulp.series(
    cleanDist,
    gulp.parallel(
        buildHtml,
        buildStyles
    )
);

// Watch and reload
// gulp watch
exports.watch = gulp.series(
    exports.default,
    startServer,
    watchSource
);