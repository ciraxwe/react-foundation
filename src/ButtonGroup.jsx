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
var ButtonMixin = require('./ButtonMixin.coffee');
var joinClasses = require('./utils/joinClasses');

var ButtonGroup = React.createClass({
  propTypes: {
    even: React.PropTypes.number,
    radius: React.PropTypes.bool,
    round: React.PropTypes.bool,
    stack: React.PropTypes.bool,
    stackForSmall: React.PropTypes.bool
  },

  render: function () {
    var other = _.omit(this.props, 'radius', 'round', 'even', 'stack', 'stackForSmall');

    var items = React.Children.map(this.props.children, function (button) {
      return (
        <li>{button}</li>
      );
    });

    return (
      <ul {...this.props}
        className={joinClasses(this.props.className,
          this.props.radius ? 'radius' : '',
          this.props.round ? 'round' : '',
          this.props.stack ? 'stack' : '',
          this.props.stackForSmall ? 'stack-for-small' : '',
          this.props.even ? 'even-' + this.props.even : '',
          'button-group')}>
        {items}
      </ul>
    );
  }
});

module.exports = ButtonGroup;
