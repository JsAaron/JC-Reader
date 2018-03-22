import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
)

const RouteConfig = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
)

export default RouteConfig
