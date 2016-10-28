import React, { Component } from 'react';

import PlacesCollection from '../PlacesCollection';
import Header from '../Header';
import Footer from '../Footer';

class Places extends Component {
  render() {
    return (
      <div id="Places">
        <Header />
        <PlacesCollection />
        <Footer />
      </div>
    );
  }
}

export default Places;
