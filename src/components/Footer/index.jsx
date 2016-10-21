import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="pv4 w-90 center tl-l mb2-l mb4 mb0-l">
        <a className="link tc" href="#" title="Home">
          <h2 className="biorhyme f5 black-60 hover-black lh-copy fw7 ttu tracked-mega">Taste<br />Notes</h2>
        </a>
        <a className="mb2 db space-mono tc i black-30 link lh-copy hover-red" href="http://cortes.us">by Dennis Cortés</a>
        <span className="f6 db biorhyme tc black-30 link">© 2016</span>
      </div>
    );
  }
}

export default Footer;
