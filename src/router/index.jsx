import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// import index from '../components/Main';
const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
)

const RouteConfig = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
)

export default RouteConfig
