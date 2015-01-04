#
# Copyright 2015 Volcra
#
# Licensed under the Apache License, Version 2.0 (the 'License');
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an 'AS IS' BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

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

  gulp.watch ['src/**/*.{jsx,js,coffee}'], ['webpack', reload]
  gulp.watch ['foundation/index.html'], reload

# Clean
gulp.task 'clean', del.bind null, ['build'], dot: true

# Default
gulp.task 'default', ['clean'], (cb) ->
  runSequence 'webpack', cb
