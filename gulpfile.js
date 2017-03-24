var gulp = require(`gulp`);
var sass = require(`gulp-sass`);
var browserSync = require('browser-sync').create();

gulp.task(`sass`, function() {
  return gulp.src(`app/scss/main.scss`)
    .pipe(sass())
    .pipe(gulp.dest(`app/css`))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Other watchers
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task(`build`, function() {
   var css = gulp.src(`app/css/main.css`)
    .pipe(gulp.dest(`dist/css/`));
   var js = gulp.src(`app/js/main.js`)
    .pipe(gulp.dest(`dist/js/`));
   var html = gulp.src(`app/index.html`)
    .pipe(gulp.dest(`dist`));
   var img = gulp.src(`app/images/**`)
    .pipe(gulp.dest(`dist/images`));

    return(css, js, html, img)
})
