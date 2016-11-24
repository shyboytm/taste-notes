import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import GearCollection from '../GearCollection';

class Gear extends Component {
  render() {
    return (
      <div>
        <Header />
        <GearCollection />
        <Footer />
      </div>
    );
  }
}

export default Gear;
