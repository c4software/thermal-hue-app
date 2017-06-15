import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

import Home from './views/home';

// Route de l’application
const routes = (
	<Router>
		<div>
				<Route exact path="/" component={Home} />
		</div>
	</Router>
);

export default routes;
