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

  const out = 'C:\\Users\\StarkTheGnr\\Documents\\Uni\\SWE 2\\Project\\SWE2-Community-Ethusam\\';

  return gulp.src('C:\\Users\\StarkTheGnr\\Documents\\Uni\\SWE 2\\Project\\SWE2-Community-Ethusam\\test.jpg')
    .pipe(gulp.dest(out));

};
exports.images = images;