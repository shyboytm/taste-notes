import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import GearCollection from '../GearCollection';

class Gear extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="w-90 pv4-ns center">
          <h2 className="tc mv4 f1-ns f2 biorhyme fw3 red">Gear</h2>
          <p className="tc f4 space-mono lh-copy black-60">
            My favorite coffee gear that I use, a worthy investment!
          </p>
        </div>
        <GearCollection />
        <p className="w-40-l w-70-m w-90 tc f5 space-mono lh-copy black center">
          Any purchases you make here directly support me and this website as well as my other side projects. I appreciate your support!
        </p>
        <Footer />
      </div>
    );
  }
}

export default Gear;
