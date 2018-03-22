import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; //redux的store到react
import store from './redux/store/index';
import Route from './router/index';

render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('app')
)
