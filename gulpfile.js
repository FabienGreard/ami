var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    jade = require('gulp-jade'),
    browserSync = require('browser-sync');

    // Gets all files ending with .scss in app/scss

    gulp.task('sass', function(){
        return gulp.src('app/scss/*.scss')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('app/css'));
    });

    // get all files ending with .jade in app/jade

    gulp.task('jade', function() {
        return gulp.src('app/jade/**/*.jade')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(jade())
        .pipe(gulp.dest('app/html'));
    });

    gulp.task('jade-rebuild', ['jade'], function () {
	     browserSync.reload();
    });

    gulp.task('default', ['jade-rebuild', 'sass'], function (){
      gulp.watch('app/scss/**/**/*.scss', ['sass']);
      gulp.watch('app/jade/**/**/*.jade', ['jade-rebuild']);
    });
