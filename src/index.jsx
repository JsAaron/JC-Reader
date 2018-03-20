import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //redux的store到react
import store from './redux/store/store';


ReactDOM(
  <Provider store={store}>
    <div>123<div>
  </Provider>,
  document.getElementById('app')
)
