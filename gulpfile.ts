const gulp = require('gulp');

/*
    -- Top Level Functions
    gulp.task - Defines tasks
    gulp.src - Point to files to jsue
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes
*/

//logs message
gulp.task('message', function() {
    return console.log('gulp is running');
});