// imports
const gulp = require('gulp')
const path = require('path')
const merge = require('merge-stream')

const rename = require('gulp-rename')
const include = require('gulp-include')
const typograf = require('gulp-typograf')
const htmlmin = require('gulp-htmlmin')

const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')

const watch = require('gulp-watch')
const webserver = require('gulp-webserver')



// constants
const NON_BREAKING_HYPHEN = '‑'

const WATCHERS = {
  html: ['./src/**/*.html'],
  styles: ['./src/css/*.css'],
  scripts: ['./src/js/**/*.js'],
}

// typography
const typografRules = [{
  name: 'common/other/nonBreakingHyphen',
  handler: text => text.replace(/\-/g, NON_BREAKING_HYPHEN)
}]



// tasks
gulp.task('default', ['html', 'css', 'watch', 'webserver'])
gulp.task('build', ['html', 'css'])

gulp.task('html', function() {
  return gulp.src('./src/pages/*.html')
    .pipe(include())
      .on('error', console.log)
    .pipe(typograf({ 
      locale: ['ru', 'en-US'],
      enableRule: ['ru/optalign/*'],
      disableRule: ['ru/nbsp/afterNumberSign'],
      rules: typografRules
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build/'))
})

gulp.task('css', function() {
  return gulp.src('./src/css/*.css')
    .pipe(postcss([ autoprefixer({
      browsers: ['last 4 versions', 'ios 7']
    }) ]))
    .pipe(gulp.dest('./build/css/'))
})


gulp.task('watch', function() {
  gulp.watch(WATCHERS.html, ['html'])
  gulp.watch(WATCHERS.styles, ['css'])
  gulp.watch(WATCHERS.scripts, ['js'])
})

gulp.task('webserver', function() {
  gulp.src('./build/')
    .pipe(webserver({
      livereload: {enable: true},
      open: 'http://localhost:8002/',
      port: 8002,
    }))
})