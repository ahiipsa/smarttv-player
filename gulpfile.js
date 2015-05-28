var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect');

gulp.task('build', ['copy', 'compress']);
gulp.task('default', ['build', 'watch', 'connect']);

gulp.task('copy', function () {
    gulp.src('src/player.js')
        .pipe(gulp.dest('dist'));

    gulp.src('src/player.js')
        .pipe(gulp.dest('demo/js'));
});


gulp.task('compress', function() {
    gulp.src('src/player.js')
        .pipe(uglify({
                mangle: false,
                compress: {
                    drop_debugger: true,
                    dead_code: true,
                    global_defs: {
                        DEBUG: false
                    }
                }
            }
        ))
        .pipe(rename('player.min.js'))
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function () {
    gulp.watch(
        ['src/**'],
        {
            interval: 100,
            debounceDelay: 50
        },
        ['build']
    );

    //gulp.watch(
    //    ['./build/js/app.js']
    //).on('change', livereload.changed);
});

gulp.task('connect', function() {
    connect.server({root: 'demo'});
});