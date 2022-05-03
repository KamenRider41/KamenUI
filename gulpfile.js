/*
 * @Author: 41
 * @Date: 2022-05-03 20:52:09
 * @LastEditors: 41
 * @LastEditTime: 2022-05-03 21:24:30
 * @Description: 
 */
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass')) // sass->css
const minifyCSS = require('gulp-minify-css')
gulp.task('sass', async function () {
  return gulp.src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'))
})