import React, { Component } from 'react';

import Header from '../Header/index.jsx';
import Coffee from '../Coffee/index.jsx';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Coffee />
      </div>
    );
  }
}

export default Home;
