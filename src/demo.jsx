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
var ButtonGroup = require('./ButtonGroup.jsx');
var ButtonToolBar = require('./ButtonToolBar.jsx');
var DropdownButton = require('./DropdownButton.jsx');
var DropdownItem = require('./DropdownItem.jsx');
var Row = require('./Row.jsx');
var Col = require('./Col.jsx');
var Panel = require('./Panel.jsx');

React.render(
  <Row>
    <Col large={12} medium={12} small={12}>
      <h1>Welcome to Foundation</h1>
    </Col>
  </Row>,
  document.getElementById('row-welcome-foundation')
);

React.render(
  <Row>
    <Col large={12} medium={12} small={12}>
      <Panel>
        <h3>We&rsquo;re stoked you want to try Foundation!</h3>
        <p>To get going, this file (index.html) includes some basic styles you can modify, play around with, or totally destroy to get going.</p>
        <p>Once you've exhausted the fun in this document, you should check out:</p>
        <Row>
          <Col large={4} medium={4}>
            <p><a href="http://foundation.zurb.com/docs">Foundation Documentation</a>
              <br/>Everything you need to know about using the framework.</p>
          </Col>
          <Col large={4} medium={4}>
            <p><a href="http://github.com/zurb/foundation">Foundation on Github</a>
              <br />Latest code, issue reports, feature requests and more.</p>
          </Col>
          <Col large={4} medium={4}>
            <p><a href="http://twitter.com/foundationzurb">@foundationzurb</a>
              <br />Ping us on Twitter if you have questions. If you build something with this we'd love to see it (and send you a totally boss sticker).</p>
          </Col>
        </Row>
      </Panel>
    </Col>
  </Row>,
  document.getElementById('panel')
);

React.render(
  <Row>
    <Col large={8} medium={8}>
      <h5>Here&rsquo;s your basic grid:</h5>
      <Row>
        <Col large={12}>
          <Panel callout>
            <p><strong>This is a twelve column section in a row.</strong> Each of these includes a div.panel element so you can see where the columns are - it's not required at all for the grid.</p>
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col large={6} medium={6}>
          <Panel callout>
            <p>Six columns</p>
          </Panel>
        </Col>
        <Col large={6} medium={6}>
          <Panel callout>
            <p>Six columns</p>
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col large={4} medium={4} small={4}>
          <Panel callout>
            <p>Four columns</p>
          </Panel>
        </Col>
        <Col large={4} medium={4} small={4}>
          <Panel callout>
            <p>Four columns</p>
          </Panel>
        </Col>
        <Col large={4} medium={4} small={4}>
          <Panel callout>
            <p>Four columns</p>
          </Panel>
        </Col>
      </Row>

      <hr />
    </Col>
    <Col large={4} medium={4}>
      <h5>Try one of these buttons:</h5>
      <p>
        <ButtonLink role="button" size="small">Simple button</ButtonLink><br/>
        <ButtonLink size="small" radius>Radius button</ButtonLink><br/>
        <ButtonLink size="small" round>Round button</ButtonLink><br/>
        <ButtonLink size="medium" btnStyle="success">Success Btn</ButtonLink><br/>
        <ButtonLink size="medium" btnStyle="alert">Alert Btn</ButtonLink><br/>
        <ButtonLink size="medium" btnStyle="secondary">Secondary Btn</ButtonLink>
        <ButtonLink expand>Expanded Btn</ButtonLink>
        <ButtonLink size="medium" disabled>Disabled Btn</ButtonLink>
      </p>
      <p>
        <ButtonGroup even={2}>
          <ButtonLink>button</ButtonLink>
          <ButtonLink>button</ButtonLink>
        </ButtonGroup>
      </p>
      <p>
        <ButtonToolBar>
          <ButtonGroup>
            <ButtonLink>button</ButtonLink>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonLink>button</ButtonLink>
          </ButtonGroup>
        </ButtonToolBar>
      </p>
      <p>
        <DropdownButton title="Dropdown">
          <DropdownItem>button</DropdownItem>
          <DropdownItem>button</DropdownItem>
        </DropdownButton>
      </p>
      <Panel>
        <h5>So many components, girl!</h5>
        <p>A whole kitchen sink of goodies comes with Foundation. Checkout the docs to see them all, along with details on making them your own.</p>
        <ButtonLink href="http://foundation.zurb.com/docs/" size="small">Go to Foundation Docs</ButtonLink>
      </Panel>
    </Col>
  </Row>,
  document.getElementById('grid')
);
