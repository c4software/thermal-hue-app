import 'roboto-npm-webfont';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {get_remote_data} from "./libs"
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import store from './redux';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

injectTapEventPlugin();
get_remote_data();

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      {routes}
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);
