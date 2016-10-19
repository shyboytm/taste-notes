import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';

import './App.css';

import Header from './components/Header/index.jsx';
import About from './components/About/index.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('root'))

export default App;
