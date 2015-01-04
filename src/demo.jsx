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
