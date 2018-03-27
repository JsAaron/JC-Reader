import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../components/home';
import Search from '../components/search';
import Detail from '../components/detail';

const RouteConfig = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Detail} />
      <Route path="/search" exact component={Search} />
      <Route path="/detail/:id" exact component={Detail} />
    </Switch>
  </Router>
)

export default RouteConfig
