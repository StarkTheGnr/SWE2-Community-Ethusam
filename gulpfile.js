const
gulp = require('gulp'),
newer = require('gulp-newer'),
imagemin = require('gulp-imagemin'),

// development mode?
devBuild = (process.env.NODE_ENV !== 'production'),

// folders
src = './',
build = './'
;

function images() {

  const out = './';

  return gulp.src('./test.jpg')
    .pipe(gulp.dest(out));

};
exports.images = images;