var gulp = require('gulp');
var tslint = require('gulp-tslint');

var tsFiles = ['*.ts']

gulp.task('tslint', function(){
    gulp.src(tsFiles)
        .pipe(tslint())
        .pipe(tslint.report("verbose"));
});