import 'roboto-npm-webfont';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import store from './redux';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

injectTapEventPlugin();

const isCordovaApp = (typeof window.cordova !== "undefined");
const init = () => {
  ReactDOM.render(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        {routes}
      </Provider>
    </I18nextProvider>,
    document.getElementById('root')
  );
}

// Wait for the deviceready event to start the render
document.addEventListener("deviceready", () => {
  console.log("Device is ready, Render the App");
  init();
});

// If we are not in Cordova, manually trigger the deviceready event
if (!isCordovaApp){
  document.dispatchEvent(new CustomEvent("deviceready", {}));
}
