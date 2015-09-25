var gulp = require('gulp');
var svg2png = require('gulp-svg2png');

gulp.task('default', function() {
  // place code for your default task here
  gulp.src('svgs/**/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('images'));
});
