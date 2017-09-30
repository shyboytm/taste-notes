import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {

    const logo =   require('../../img/taste-notes-logo.png');

    return (
      <div>
        <div className="bb b--black-10 db dt-l w-100 border-box pa3 pv2-l ph4-l">
          <Link className="db dtc-l v-mid link w-100 w-25-l tc tl-l mb2-l mb4 mb0-l" to="/" title="Home">
            <img className="w2 dim dib" src={logo} alt="Taste Notes" />
          </Link>
          <div className="db dtc-l v-mid w-100 w-25-l tc tl-l mb4 mb0-l">
            <p className="space-mono db black lh-copy tl-l tc">Coffee Thoughts &amp; Reference<br/>
              <a className="i black-60 link hover-red" href="http://cortes.us">of Dennis Cortés</a>
            </p>
          </div>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l mb0-l mb3">
            <Link className="biorhyme link hover-red black-80 dib mr3 mr4-l" to="/" title="Coffee">Coffee</Link>
            <Link className="biorhyme link hover-red black-80 dib mr3 mr4-l" to="/places" title="Places">Places</Link>
            <Link className="biorhyme link hover-red black-80 dib mr3 mr4-l" to="/method" title="Method">Method</Link>
            <Link className="biorhyme link hover-red black-80 dib mr3 mr4-l" to="/gear" title="Gear">Gear</Link>
            <Link className="biorhyme link hover-red black-80 dib mr3 mr4-l" to="/about" title="About">About</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
