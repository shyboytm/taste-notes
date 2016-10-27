import React, { Component } from 'react';

import Header from '../Header/index.jsx';
import CoffeeCollection from '../CoffeeCollection/index.jsx';
import Footer from '../Footer/index.jsx';

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
