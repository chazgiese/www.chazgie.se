var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-csso');

gulp.task('css', function() {
  return gulp.src('src/scss/stylesheet.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest('app/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('serve', ['css'], function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch('src/scss/**/*.scss', ['css']);
});

gulp.task('default', function() {
  gulp.watch('src/scss/*.scss', ['css']);
});
