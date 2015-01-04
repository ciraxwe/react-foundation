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

var ButtonMixin = require('./ButtonMixin.coffee');
var DisableMixin = require('./DisableMixin.coffee');
var joinClasses = require('./utils/joinClasses');

var LinkButton = React.createClass({
  mixins: [ButtonMixin, DisableMixin],

  getDefaultProps: function () {
    return {
      href: '#',
      size: 'medium'
    };
  },

  render: function () {
    return (
      <a {...this.props}
        href={this.props.href}
        className={joinClasses(this.props.className, this.getSize(),
          this.getRadius(), this.getRound(), this.getStyle(),
          this.getDisabled(), 'button')}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = LinkButton;
