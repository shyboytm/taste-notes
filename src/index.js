import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import App from './App';
import Home from './components/Home/index.jsx';
import About from './components/About/index.jsx';
import Places from './components/Places/index.jsx';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="places" component={Places} />
    </Route>
  </Router>,
  document.getElementById('root')
);
