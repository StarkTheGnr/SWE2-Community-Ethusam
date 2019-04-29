const
gulp = require('gulp'),
newer = require('gulp-newer'),
imagemin = require('gulp-imagemin');

function images() {

  const out = 'C:\\Users\\StarkTheGnr\\Documents\\Uni\\SWE 2\\Project\\SWE2-Community-Ethusam\\images\\';

  return gulp.src('C:\\Users\\StarkTheGnr\\Documents\\Uni\\SWE 2\\Project\\SWE2-Community-Ethusam\\test.jpg')
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(out));

});
exports.images = images;