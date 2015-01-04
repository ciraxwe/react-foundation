var TYPES = ['button', 'submit', 'reset'];
var ButtonMixin = require('./ButtonMixin.coffee');

var Button = React.createClass({
  mixins: [ButtonMixin],

  propTypes: {
    type: React.PropTypes.oneOf(TYPES)
  },

  render: function () {
    return (
      <button
        type={this.props.type} {...this.props}
        className={this.joinClasses()}>
        {this.props.children}
      </button>
    );
  }
});

module.exports = Button;
