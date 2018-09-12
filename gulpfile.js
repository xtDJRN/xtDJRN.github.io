var gulp = require('gulp'),
    pug  = require('gulp-pug');
 
gulp.task('pug', function() {
  gulp.src(
    ['./pug/**/*.pug', '!./pug/**/_*.pug']
  )
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./develop'))
});
