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

  getRadius: ->
    @._booleanToString @.props.radius, 'radius'

  getRound: ->
    @._booleanToString @.props.round, 'round'

  getStyle: -> STYLES[@.props.btnStyle]

  getDisabled: ->
    @._booleanToString @.props.disabled, 'disabled'

  _booleanToString: (expression, value) -> expression ? value : ''

  joinClasses: ->
    joinClasses @.props.className, @.getSize(), @.getRadius(),
      @.getRound(), @.getStyle(), @.getDisabled(), 'button'

module.exports = ButtonMixin
