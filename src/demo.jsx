var Button = require('./Button.jsx');
var LinkButton = require('./LinkButton.jsx');

// React Buttons
React.render(
  <p>
    <LinkButton role="button" size='small'>Simple button</LinkButton><br/>
    <LinkButton size='small' radius>Radius button</LinkButton><br/>
    <LinkButton size='small' round>Round button</LinkButton><br/>
    <LinkButton size='medium' btnStyle='success'>Success Btn</LinkButton><br/>
    <LinkButton size='medium' btnStyle='alert'>Alert Btn</LinkButton><br/>
    <LinkButton size='medium' btnStyle='secondary'>Secondary Btn</LinkButton>
    <LinkButton size='medium' disabled>Disabled Btn</LinkButton>
  </p>,
  document.getElementById('react-buttons')
);
