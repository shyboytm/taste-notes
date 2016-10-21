import React, { Component } from 'react';

import Banner from '../Banner/index.jsx';
import Footer from '../Footer/index.jsx';
import Header from '../Header/index.jsx';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default About;
