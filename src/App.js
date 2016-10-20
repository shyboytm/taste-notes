import React, { Component } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';

import './App.css';

import Home from './components/Home/index.jsx';
import About from './components/About/index.jsx';

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
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('root'))

export default App;
