var gulp = require('gulp'), // https://www.npmjs.com/package/gulp
    babel = require('gulp-babel'), // https://www.npmjs.com/package/gulp-babel
    connect = require('gulp-connect'), // https://www.npmjs.com/package/gulp-connect
    uglify = require('gulp-uglify'); // https://www.npmjs.com/package/gulp-uglify

gulp.task('dist', function () { //rode isso com o comando 'gulp dist'
    return gulp.src('src/*') //pega tudo o que estiver na pasta src
        .pipe(babel()) //torna o script compativel com ES5
        .pipe(uglify()) //minifica o script
        .pipe(gulp.dest('dist')); //salva na pasta dist
});

gulp.task('server', function() {
    connect.server();
});

gulp.task('watch', function(){
    gulp.watch('src/*', ['dist']);
});

gulp.task('default', ['server', 'watch']);
