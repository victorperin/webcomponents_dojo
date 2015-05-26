var gulp = require('gulp'),
    babel = require('gulp-babel'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify');

gulp.task('dist', function () {
    return gulp.src('src/*')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('server', function() {
    connect.server();
});

gulp.task('watch', function(){
    gulp.watch('src/*', ['dist']);
});

gulp.task('default', ['server', 'watch']);
