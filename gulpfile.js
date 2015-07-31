// ////////////////////////////
// Required
// ///////////////////////////
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

// ////////////////////////////
// Scripts Task
// ///////////////////////////
gulp.task('scripts', function(){
	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

// ////////////////////////////
// Watch Task
// ///////////////////////////
gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['scripts']);
});

// ////////////////////////////
// Default Task
// ///////////////////////////
gulp.task('default', ['scripts']);