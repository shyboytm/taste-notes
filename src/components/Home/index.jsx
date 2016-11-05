import React, { Component } from 'react';

import Header from '../Header';
import CoffeeCollection from '../CoffeeCollection';
import Footer from '../Footer';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="w-90 pv4-ns center">
          <h2 className="tc mv4 f1-ns f2 biorhyme fw3 red">Coffee</h2>
          <p className="tc f4 space-mono lh-copy black-60">
            Coffee roasts I have tried and my thoughts on them
          </p>
        </div>
        <CoffeeCollection />
        <Footer />
      </div>
    );
  }
}

export default Home;
