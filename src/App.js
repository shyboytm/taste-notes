import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/index.jsx';

class App extends Component {
  render() {
    return (
      <div className="App bg-light-gray">
        <Header />
      </div>
    );
  }
}

export default App;
