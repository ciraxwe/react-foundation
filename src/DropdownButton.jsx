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
var DisableMixin = require('./DisableMixin.coffee');
var Button = require('./Button.jsx');
var joinClasses = require('./utils/joinClasses');

var DropdownButton = React.createClass({
  mixins: [ButtonMixin, DisableMixin],

  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {
    var items = React.Children.map(this.props.children, function (button) {
      return (
        <li>{button}</li>
      );
    });

    var id = _.uniqueId('dropdown-');

    return (
      <div>
        <Button data-dropdown={id} aria-controls={id}
          aria-expanded="false" className="dropdown">
          {this.props.title}
        </Button>
        <br/>
        <ul id={id} data-dropdown-content className="f-dropdown" aria-hidden="true" tabIndex="-1">
          {this.props.children}
        </ul>
      </div>
    );
  }
});

module.exports = DropdownButton;
