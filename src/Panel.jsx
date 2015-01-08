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

var _ = require('underscore');
var joinClasses = require('./utils/joinClasses');

var Panel = React.createClass({
  propTypes: {
    callout: React.PropTypes.bool,
    radius: React.PropTypes.bool,
    round: React.PropTypes.bool
  },

  render: function () {
    var other = _.omit(this.props, 'callout', 'radius', 'round');

    return (
      <div {...other}
        className={joinClasses(this.props.className,
          this.props.radius ? 'radius' : '',
          this.props.callout ? 'callout' : '',
          this.props.round ? 'round' : '',
          'panel')}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Panel;
