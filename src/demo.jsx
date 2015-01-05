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
var Button = require('./Button.jsx');
var ButtonLink = require('./ButtonLink.jsx');
var Row = require('./Row.jsx');
var Col = require('./Col.jsx');

// React Buttons
React.render(
  <p>
    <ButtonLink role="button" size='small'>Simple button</ButtonLink><br/>
    <ButtonLink size='small' radius>Radius button</ButtonLink><br/>
    <ButtonLink size='small' round>Round button</ButtonLink><br/>
    <ButtonLink size='medium' btnStyle='success'>Success Btn</ButtonLink><br/>
    <ButtonLink size='medium' btnStyle='alert'>Alert Btn</ButtonLink><br/>
    <ButtonLink size='medium' btnStyle='secondary'>Secondary Btn</ButtonLink>
    <ButtonLink size='medium' disabled>Disabled Btn</ButtonLink>
  </p>,
  document.getElementById('react-buttons')
);

React.render(
  <Row>
    <Col large={12} medium={12} small={12}>
      <h1>Welcome to Foundation</h1>
    </Col>
  </Row>,
  document.getElementById('row-welcome-foundation')
);
