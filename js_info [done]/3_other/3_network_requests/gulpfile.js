'use strict';

var gulp       	 = require('gulp');
var browserSync	 = require('browser-sync').create();



gulp.task('server', function (cb) {
    exec('node eventSource/server.js', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
})



// Static Server + watching scss/html files
gulp.task('serve', gulp.series(function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("eventSource/*.html").on('change', browserSync.reload);
    gulp.watch("eventSource/*.js").on('change', browserSync.reload);
}));


gulp.task('default', gulp.series('serve'));