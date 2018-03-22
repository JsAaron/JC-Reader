import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; //redux的store到react
import store from './redux/store/index';
import Route from './router/index';

const app = document.getElementById('app')


import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

render(<DatePicker />, app);

// render(
//   <Provider store={store}>
//     <Route />
//   </Provider>,
//   app
// )
