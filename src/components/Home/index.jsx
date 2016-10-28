import React, { Component } from 'react';

import Header from '../Header';
import CoffeeCollection from '../CoffeeCollection';
import Footer from '../Footer';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <CoffeeCollection />
        <Footer />
      </div>
    );
  }
}

export default Home;
