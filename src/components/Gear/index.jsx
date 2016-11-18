import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import GearPost from '../GearPost';

class Gear extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="w-90-ns w-100 pv4-ns center cf">
          <div className="content-end flex flex-wrap">

            <GearPost />
            <GearPost />
            <GearPost />
            <GearPost />

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gear;
