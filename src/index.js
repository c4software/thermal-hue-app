import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import routes from './routes';

import store from "./redux"
import {add_to_list} from "./actions";

add_to_list("Example data")

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
