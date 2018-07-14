var gulp = require('gulp');
var gulp_uglify = require('gulp-uglify');
var gulp_rename = require('gulp-rename');

gulp.task('js-copy', function(){
    return gulp.src(['src/*.js'])
        .pipe(gulp.dest('dist'));
});

gulp.task('js-uglify', function(){
    return gulp.src(['src/*.js'])
        .pipe(gulp_uglify())
        .pipe(gulp_rename('jquery.gravalay.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js-copy','js-uglify'], function(){});
