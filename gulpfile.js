var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

gulp.task('html', function(){
    return gulp.src('src/views/*.html')
        .pipe(gulp.dest('build'))
});

gulp.task('css', function(){
    return gulp.src('src/views/css/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
});

gulp.task('default', [ 'html', 'css' ]);