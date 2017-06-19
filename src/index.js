import 'roboto-npm-webfont';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {get_remote_data} from "./libs"
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import store from './redux';

injectTapEventPlugin();
get_remote_data();

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
