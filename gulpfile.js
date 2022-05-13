const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('index.scss') // recieves relative path to the source file
    .pipe(sass()) // compiles sass file
    .pipe(dest('css'))
}

function watchTask() {
  watch(['index.scss'], buildStyles) //watches the file and builds it
}

exports.default = series(buildStyles, watchTask)