const {src, dest, watch} = require ('gulp');
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const sass = require ('gulp-sass');

// Static server
 function bs() {
  serveSas();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSas);
  watch("./js/*.js").on('change', browserSync.reload);
};

function replace(done) {
  return src('./css/**/*.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(dest('./css'));
      done(); 
};

function serveSas() {
  return src("./sass/*.sass")
      .pipe(sass())
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;