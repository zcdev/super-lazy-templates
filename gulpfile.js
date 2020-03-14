var gulp = require('gulp');
var slim = require("gulp-slim");
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();

gulp.task('slim', function(){
  return gulp.src('./src/*.slim')
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('stylus', function() {
  return gulp.src('./src/*.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
});

gulp.task('watch', gulp.series('browserSync', 'slim', 'stylus'), function(){
  gulp.watch('./src/*.slim', ['slim']); 
  gulp.watch('./src/*.stylus', ['styl']);  
});

gulp.task('super-lazy', gulp.series('slim', 'stylus'), function (){
  console.log('Lazily building files...');
});

// Lazy as hell. That's all you got.

