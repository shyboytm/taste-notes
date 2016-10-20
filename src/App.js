import React, { Component } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';

import './App.css';

import Header from './components/Header/index.jsx';
import About from './components/About/index.jsx';
import Coffee from './components/Coffee/index.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="w-90-ns w-100 pv5 center cf">
          <Coffee />
        </div>
      </div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/*" component={App}>
      <IndexRoute component={About} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.getElementById('root'))

export default App;
