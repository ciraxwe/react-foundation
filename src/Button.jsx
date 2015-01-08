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

var TYPES = ['button', 'submit', 'reset'];
var ButtonMixin = require('./ButtonMixin.coffee');
var DisableMixin = require('./DisableMixin.coffee');
var joinClasses = require('./utils/joinClasses');

var Button = React.createClass({
  mixins: [ButtonMixin, DisableMixin],

  propTypes: {
    type: React.PropTypes.oneOf(TYPES)
  },

  render: function () {
    return (
      <button {...this.props}
        type={this.props.type}
        className={joinClasses(this.props.className, this.getSize(),
          this.getRadius(), this.getRound(), this.getStyle(),
          this.getDisabled(), this.getExpand(), 'button')}>
        {this.props.children}
      </button>
    );
  }
});

module.exports = Button;
