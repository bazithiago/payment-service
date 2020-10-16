import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Payments from '../pages/payments';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Dashboard} />
			<Route path="/payments" component={Payments} />;
		</Switch>
	);
};

export default Routes;
