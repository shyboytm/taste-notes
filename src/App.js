import React, { Component } from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('root'));

export default App;
