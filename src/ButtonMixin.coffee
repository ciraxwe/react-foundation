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

joinClasses = require './utils/joinClasses.js'

SIZES =
  'large': 'large'
  'medium': 'medium'
  'small': 'small'
  'xsmall': 'tiny'

STYLES =
  'alert': 'alert'
  'default': ''
  'info': 'info'
  'secondary': 'secondary'
  'success': 'success'
  'warning': 'warning'

ButtonMixin =
  propTypes:
    btnStyle: React.PropTypes.oneOf Object.keys STYLES
    radius: React.PropTypes.bool
    round:  React.PropTypes.bool
    size:   React.PropTypes.oneOf Object.keys SIZES

  getSize: -> SIZES[@.props.size]

  getRadius: -> @._booleanToString @.props.radius, 'radius'

  getRound: -> @._booleanToString @.props.round, 'round'

  getStyle: -> STYLES[@.props.btnStyle]

  _booleanToString: (expression, value) -> if expression then value else ''

module.exports = ButtonMixin
