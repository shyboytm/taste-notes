import React, { Component } from 'react';

import PlacesCollection from '../PlacesCollection';
import Header from '../Header';
import Footer from '../Footer';

class Places extends Component {
  render() {
    return (
      <div id="Places">
        <Header />
        <div className="w-90 pv4-ns center">
          <h2 className="tc mv4 f1-ns f2 biorhyme fw3 red">Places</h2>
          <p className="tc f4 space-mono lh-copy black-60">
            Coffee shops I've visited and my review of them
          </p>
        </div>
        <PlacesCollection />
        <Footer />
      </div>
    );
  }
}

export default Places;
