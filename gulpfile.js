var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    browserify = require('browserify'),
    p = require('partialify/custom'),
    source = require('vinyl-source-stream'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    runSequence = require('run-sequence');

var options = {
    production: false
};

gulp.task('build', function (callback) {
    runSequence('js', 'copy', callback);
});

gulp.task('default', ['build', 'watch', 'connect']);


gulp.task('js', function() {
    var stream = browserify({entries:'./src/player.js', debug: options.production})
        .transform(p.alsoAllow('html'))
        .bundle().on('error', errorHandler)
        .pipe(source('player.js'))
        .pipe(gulp.dest('./dist'));

    return stream;
});


gulp.task('copy', function () {
    return gulp.src('./dist/player.js').pipe(gulp.dest('./demo/js/'));
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
});

gulp.task('connect', function() {
    connect.server({root: 'demo', port: 8082});
});


function errorHandler (error) {
    throw new error;
    this.emit('end');
}