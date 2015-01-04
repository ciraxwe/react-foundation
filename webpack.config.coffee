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

path = require 'path'
webpack = require 'webpack'

module.exports =
  cache: true

  entry:
    'react-foundation': './src/react-foundation.coffee'

  output:
    path: path.join __dirname, 'dist'
    filename: '[name].js'

  module:
    loaders: [
      { test: /\.coffee$/, loader: 'coffee' },
      { test: /\.js$/,  loader: 'jsx' },
      { test: /\.jsx$/, loader: 'jsx?insertPragma=React.DOM' }
    ]
