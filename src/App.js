import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';

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

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('root'))

export default App;
