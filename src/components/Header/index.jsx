import React, { Component } from 'react';
import { Link } from 'react-router';


class Header extends Component {
  render() {
    return (
      <div>
        <div className="bb b--black-10 db dt-l w-100 border-box pa3 ph5-l">
          <a className="db dtc-l v-mid mid-gray link hover-red w-100 w-25-l tc tl-l mb2-l mb4 mb0-l" href="#" title="Home">
            <h2 className="biorhyme fw7 tracked-mega">CT&R</h2>
          </a>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l mb0-l mb3">
            <a className="biorhyme link hover-red black-80 f5-l dib mr3 mr4-l" href="#" title="Coffee">Coffee</a>
            <a className="biorhyme link hover-red black-80 f5-l dib mr3 mr4-l" href="#" title="Methods">Methods</a>
            <a className="biorhyme link hover-red black-80 f5-l dib mr3 mr4-l" href="#" title="Gear">Gear</a>
            <Link className="biorhyme link hover-red black-80 f5-l dib mr3 mr4-l" to="/about" title="About">About</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
