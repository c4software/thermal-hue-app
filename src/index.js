import 'roboto-npm-webfont';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';

injectTapEventPlugin();

ReactDOM.render(
  <div>
    {routes}
  </div>,
  document.getElementById('root')
);
