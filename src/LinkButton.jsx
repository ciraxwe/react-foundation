var ButtonMixin = require('./ButtonMixin.coffee');

var LinkButton = React.createClass({
  mixins: [ButtonMixin],

  getDefaultProps: function () {
    return {
      href: '#',
      size: 'medium'
    };
  },

  render: function () {
    return (
      <a
        href={this.props.href}
        {...this.props}
        className={this.joinClasses()}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = LinkButton;
