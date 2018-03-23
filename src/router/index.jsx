import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../components/home';
import Search from '../components/search';

const RouteConfig = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={Search} />
    </Switch>
  </Router>
)

export default RouteConfig
