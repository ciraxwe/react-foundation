$ = require('gulp-load-plugins')()
browserSync = require 'browser-sync'
del = require 'del'
gulp = require 'gulp'
reload = browserSync.reload
runSequence = require 'run-sequence'

# React
gulp.task 'react', ->
  gulp.src ['src/**/*.jsx']
    .pipe $.react()
    .pipe $.concat 'all.js'
    .pipe gulp.dest 'build'

# Webpack
gulp.task 'webpack', ->
  gulp.src ''
    .pipe $.webpack require './webpack.config.coffee'
    .pipe gulp.dest 'build'

# Serve
gulp.task 'serve', ['webpack'], ->
  browserSync
    notify: false
    logPrefix: 'VC'
    server: ['build', 'foundation']

  gulp.watch ['src/**/*.{jsx,js}'], ['webpack', reload]
  gulp.watch ['foundation/index.html'], reload

# Clean
gulp.task 'clean', del.bind null, ['build'], dot: true

# Default
gulp.task 'default', ['clean'], (cb) ->
  runSequence 'webpack', cb
