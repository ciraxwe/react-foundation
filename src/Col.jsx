/*
 * Copyright 2015 Volcra
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var joinClasses = require('./utils/joinClasses');
var _ = require('underscore');

var SIZES = {
  large: 'large',
  medium: 'medium',
  small: 'small'
};

var Col = React.createClass({
  propTypes: {
    large: React.PropTypes.number,
    medium: React.PropTypes.number,
    small: React.PropTypes.number
  },

  render: function () {
    var classes = [];

    _.each(this.props, function (value, prop) {
      if (SIZES[prop]) {
        classes.push(prop + '-' + value);
      }
    });

    classes.push('columns');

    return (
      <div {...this.props}
        className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Col;
