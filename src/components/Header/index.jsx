import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';


class Header extends Component {
  render() {
    return (
      <div>
        <div className="db dt-l w-100 border-box pa3 ph5-l">
          <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2-l mb4 mb0-l" href="#" title="Home">
            <img src="/img/logo.jpg" className="mb3 dib w2 h2 br-100" alt="coffee.cortes" />
            <span className="cutive db v-mid">Coffee Thoughts &amp; Reference</span>
          </a>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <a className="biorhyme link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Coffee">Coffee</a>
            <a className="biorhyme link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Methods">Methods</a>
            <a className="biorhyme link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Gear">Gear</a>
            <a className="biorhyme link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="About">About</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
