import React from 'react';
import {render} from 'react-dom';
import {Router, IndexRoute, Route, hashHistory, browserHistory} from 'react-router';
import App from './App';

import Login from './modules/Login';
import Profile from './modules/Profile';
import Home from './modules/Home';

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="login" component={Login}/>
      <Route path="profile" component={Profile}/>
    </Route>
  </Router>
);

export default Root;
