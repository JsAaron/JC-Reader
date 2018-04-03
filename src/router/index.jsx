import React from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from '../components/home';
import Search from '../components/search';
import BookDetail from '../components/book-detail';
// <Redirect from='/detail/:id' to="/" />
const RouteConfig = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/search" exact component={Search} />
      <Route path="/detail/:id" exact component={BookDetail} />
      <Route component={Search} />
    </Switch>
  </Router>
)

export default RouteConfig
